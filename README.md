# Image Classification

This is an image classification app built using **Django 3**, **Django REST Framework 3**, **Next.js 12**, and **Material UI 5**. The app uses **[CLIP](https://github.com/openai/CLIP)** to classify images selected by the user provided a list.


<!-- ![plot](https://github.com/BobsProgrammingAcademy/Image-Classification/blob/main/frontend/public/images/image_classification.png?raw=true) -->

## Installation

### 1. Clone the project 

```bash
git clone https://github.com/miguelvalente/clip_classifier.git
cd clip_classifier
```

### 2. Install required backend dependencies with [Poetry](https://python-poetry.org/docs/)
```bash
cd backend
poetry install
```


### 3.  Activate the environment python backend environemnt

```bash
poetry shell
```

### 4. Run migrations

```bash
python manage.py makemigrations
```

```bash
python manage.py migrate
```

### 5. Install required frontend dependencies

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

Go to http://127.0.0.1:8000/swagger/ # clip_classifier
