import cv2
import os
import ssl
import numpy as np
from django.conf import settings
from django.db import models
from PIL import Image
import clip
import torch


class Classifier(models.Model):
    image = models.ImageField(upload_to='images')
    labels = models.CharField(max_length=250, blank=True)
    result = models.CharField(max_length=250, blank=True)
    date_uploaded = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'Image classfied at {}'.format(self.date_uploaded.strftime('%Y-%m-%d %H:%M'))

    def _format_labels(self):
        formatted_labels = []
        for label in self.labels.split(','):
            formatted_labels.append(label.strip().lower())
        return formatted_labels

    def save(self, *args, **kwargs):
        try:
            device = "cuda" if torch.cuda.is_available() else "cpu"
            print("Using device:", device)
            model, preprocess = clip.load("ViT-B/32", device=device)

            image = preprocess(Image.open(self.image)).unsqueeze(0).to(device)
            labels = self._format_labels()
            print(self.labels)
            print(labels)
            text = clip.tokenize(labels).to(device)

            with torch.no_grad():
                logits_per_image, logits_per_text = model(image, text)
                probs = logits_per_image.softmax(dim=-1).cpu().numpy()

            decoded = labels[np.argmax(probs)]
            self.result = str(decoded)
            print('Success')
        except Exception as e:
            print('Classification failed:', e)

        return super().save(*args, **kwargs)
