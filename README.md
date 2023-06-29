# Almeno Backend Development Internship Assignment

> Author - Kshipra Jadav

- Hey there! I've finally completed this assignment.
- It took a lot of time because I was completing my college assignments on the side.
- Now, for the cool part - **Running The Application**

## Running The Application

- There are two branches for this repo - *dev* and *docker*
- If you head on over to the *dev* branch, you will have to setup the local environment and do all the manual shiz.
- If you have Docker installed (which you most probably will have), you can head to the *docker* branch.

### `dev` branch
- If you decide to go through the pain of setting up the local environment, then you've come to the right place :)
- Steps :- 
    1. `git clone` this repo
    2. `cd` into the repo
    3. To setup the server,
        * `cd server`
        * `pip install -r requirements.txt`
        * `python manage.py runserver` or `python3 manage.py runserver` (if you're on linux)
    4. To setup the client,
        * `cd ..`
        * `cd client`
        * `npm install`
        * `npm run dev`
- After completing the above steps in two separate instances of your favourite terminal, you should have the **server** running on port **8000** and the **client** on port **5173**.

## `docker` branch
- If you're smart enough and you don't want to setup the local environment, just let docker do it for you :P
- Steps :- 
    1. `git clone` this repo
    2. `cd` into the repo
    3. Just run `docker-compose up`
- Let Docker take it's time in bringing both the containers up.
- Once they're up, you can navigate to `http://localhost:3000` to access the frontend.

## Using The Application
- So, you've finally managed to setup the application and get it up and running!
- In order to test the application and run it for yourself, you need to access the application from the frontend.
- If you've setup the application locally, then head on over to `http://localhost:5173` to access the application.
- If you've let Docker do the setting up process for you then head on over to `http://localhost:3000` to access the application.
- In this repo, you will find a folder called **strip_images** which contains some sample images for you to test the application out.
- Click on the *Upload* button and select any one image from that folder.
- Click on *Upload File* button to upload the file.
- You'll see a preview of the uploaded image and different 10 colours used in it.

## Tech Stack
### Frontend
1. React
2. TypeScript
3. Vite
4. Tailwind CSS

### Backend
1. Django

### Deployment
1. Docker
2. docker-compose