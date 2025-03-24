# Gemini for Developers

This is a simple Node.js/Express application that interacts with the user to get their name and display a greeting. It's designed to be a basic example for learning Node.js, Express, EJS templating, and testing with Jest and Supertest.

## Features

*   **Simple Form:** A basic HTML form to collect the user's name.
*   **Dynamic Greeting:** Displays a personalized greeting using the name provided by the user.
*   **EJS Templating:** Uses EJS for rendering dynamic HTML views.
*   **Testing:** Includes Jest and Supertest for testing routes and application logic.
* **Dockerized:** The application can be run in a docker container.
* **Cloud Run:** The application can be deployed in google cloud run.

## Technologies Used

*   **Node.js:** JavaScript runtime environment.
*   **Express:** Web framework for Node.js.
*   **EJS:** Embedded JavaScript templating engine.
*   **Jest:** JavaScript testing framework.
*   **Supertest:** HTTP testing library.
* **Docker:** Containerization platform.
* **Google Cloud Run:** Serverless compute platform.

## Getting Started

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/Debapriya-dev/gemini-for-developers.git
    ```

2.  **Navigate to the Project Directory:**

    ```bash
    cd gemini-for-developers
    ```

3.  **Install Dependencies:**

    ```bash
    npm install
    ```

4.  **Run the Application:**

    ```bash
    npm start
    ```

    This will start the server, and you can access the application at `http://localhost:3000`.

5.  **Run Tests:**

    ```bash
    npm test
    ```

    This will run the Jest test suite.

## Docker

1.  **Build the Docker Image:**

    ```bash
    docker build -t gcr.io/<YOUR-PROJECT-ID>/gemini-app:v1 .
    ```
    Replace `<YOUR-PROJECT-ID>` with your Google Cloud project ID.

2.  **Push the Image to Google Container Registry:**

    ```bash
    docker push gcr.io/<YOUR-PROJECT-ID>/gemini-app:v1
    ```

## Google Cloud Run Deployment

1.  **Deploy to Cloud Run:**

    ```bash
    gcloud run deploy gemini-app \
      --image gcr.io/<YOUR-PROJECT-ID>/gemini-app:v1 \
      --region us-central1 \
      --platform managed \
      --allow-unauthenticated
    ```
    Replace `<YOUR-PROJECT-ID>` with your Google Cloud project ID.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## License

This project is licensed under the ISC License.
