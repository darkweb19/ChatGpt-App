# ChatGPT Clone App

Welcome to the ChatGPT Clone App repository! This is a simplified version of the ChatGPT application that allows users to interact with a GPT-3.5 powered chatbot. The app is divided into two main folders: `frontend-react` and `backend`, representing the frontend and backend components respectively.

## Frontend

The frontend of this app is built using the React library, providing an interactive and user-friendly interface for communicating with the chatbot. It's designed to showcase the capabilities of the GPT-3.5 model and how it can be integrated into web applications.

### Getting Started

Follow these steps to start the frontend of the app:

1. Navigate to the `frontend-react` folder: `cd frontend-react`

2. Install the dependencies: `npm install`

3. Rename or copy the `.env.example` file to `.env` and add your GPT-3 API key:

4. Start the development server: `npm run dev`

5. Access the app in your web browser at: `http://localhost:{port}`

## Backend

The backend of this app serves as an intermediary between the frontend and the GPT-3.5 API. It handles user requests, sends them to the GPT-3.5 model, and returns the generated responses to the frontend.

### Getting Started

Follow these steps to start the backend of the app:

1. Navigate to the `backend` folder: `cd backend`

2. Install the dependencies: `npm install`

3. Rename or copy the `.env.example` file to `.env` and add your GPT-3 API key:

4. Start the backend server: `node index.js`

The backend server will run at `http://localhost:3000`.

## Contribution

If you'd like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request. We welcome any improvements or new features that align with the project's goals.

## License

This project is licensed under the [MIT License](LICENSE).

Happy coding!
