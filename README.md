# Clip Classifier

This is an image classification app built using **Django 3**, **Django REST Framework 3**, **Next.js 12**, and **Material UI 5**. The app uses **[CLIP](https://github.com/openai/CLIP)** to classify images selected by the user provided a list.

![plot](https://github.com/miguelvalente/clip_classifier/blob/master/frontend/public/images/clip_classifier.png?raw=true)



## Installation

The first steps are the same for both Docker and non-Docker installations.

#### 1. Clone the project 

```bash
git clone https://github.com/miguelvalente/clip_classifier.git
cd clip_classifier
```

#### 2. Download Clip

```bash
wget -P backend/model https://openaipublic.azureedge.net/clip/models/40d365715913c9da98579312b702a82c18be219cc2a73407c4526f58eba950af/ViT-B-32.pt
```
After that you can either install/run the app with **Docker** or **Without Docker**.

### With Docker

The instaling process is quite simple. You only need to have [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/). 

#### 1. Build/Run the app

```bash
docker-compose up --build
```

### 2. View the application & Acccess the swagger documentation

- Go to http://localhost:3000/ to view the application.

- Go to http://127.0.0.1:8000/swagger/ to see the full API

### Without Docker

To install the app without Docker, you will have to install the backend and frontend dependencies, separately as well as start both backend and frontend. 

#### 3. Install required backend dependencies with [Poetry](https://python-poetry.org/docs/)
```bash
cd backend
poetry install
```

#### 4.  Activate the environment python backend environemnt

```bash
poetry shell
```

#### 5. Run migrations

```bash
python manage.py makemigrations
```
```bash
python manage.py migrate
```

#### 6. Install required frontend dependencies. You need [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

From the **root** directory run:

```bash
cd ../frontend
```
```bash
npm install
```

To run the application, you need to have both the backend and the frontend up and running.

#### 7. Run backend

From the **backend** directory run:

```bash
python manage.py runserver
```

#### 8. Run frontend

From the **frontend** directory run:

```bash
npm run dev
```

#### 9. View the application & Acccess the swagger documentation

- Go to http://localhost:3000/ to view the application.

- Go to http://127.0.0.1:8000/swagger/ to see the full API

## Acknowledgment

- [BobsProgrammingAcademyTemplate](https://github.com/BobsProgrammingAcademy/image-classification)
- [CLIP](https://github.com/openai/CLIP)

## Resources to learn Django and React

- [Django+React](https://www.youtube.com/watch?v=tYKRAXIio28)
- [React](https://www.youtube.com/watch?v=6fM3ueN9nYM)
