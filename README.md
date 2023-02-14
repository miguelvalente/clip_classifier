# Clip Classifier

This is an image classification app built using **Django 3**, **Django REST Framework 3**, **Next.js 12**, and **Material UI 5**. The app uses **[CLIP](https://github.com/openai/CLIP)** to classify images selected by the user provided a list.

![plot](https://github.com/miguelvalente/clip_classifier/blob/master/frontend/public/images/clip_classifier.png?raw=true)



## Installation

### 1. Clone the project 

```bash
git clone https://github.com/miguelvalente/clip_classifier.git
cd clip_classifier
```

### 2. Download Clip

```bash
mkdir model
wget -P model https://openaipublic.azureedge.net/clip/models/40d365715913c9da98579312b702a82c18be219cc2a73407c4526f58eba950af/ViT-B-32.pt
```

### 3. Install required backend dependencies with [Poetry](https://python-poetry.org/docs/)
```bash
cd backend
poetry install
```


### 4.  Activate the environment python backend environemnt

```bash
poetry shell
```

### 5. Run migrations

```bash
python manage.py makemigrations
```

```bash
python manage.py migrate
```

### 6. Install required frontend dependencies

From the **root** directory run:

```bash
cd ../frontend
```
```bash
npm install
```

## Run the application

To run the application, you need to have both the backend and the frontend up and running.

### 1. Run backend

From the **backend** directory run:

```bash
python manage.py runserver
```

### 2. Run frontend

From the **frontend** directory run:

```bash
npm run dev
```

### 3. View the application

Go to http://localhost:3000/ to view the application.

### 4. Acccess the swagger documentation

Go to http://127.0.0.1:8000/swagger/ 


## Acknowledgment

- [BobsProgrammingAcademyTemplate](https://github.com/BobsProgrammingAcademy/image-classification)
- [CLIP](https://github.com/openai/CLIP)

## Resources to learn Django and React

- [Django+React](https://www.youtube.com/watch?v=tYKRAXIio28)
- [React](https://www.youtube.com/watch?v=6fM3ueN9nYM)
