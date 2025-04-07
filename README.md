# NestJS Backend for Notes Application

This README provides instructions on how to get started with the NestJS backend for the notes application and how to interact with its API.

## Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js** (version >= 16)
* **npm** or **yarn**

## Installation

1.  **Clone the backend repository:**

    ```bash
    git clone https://github.com/asif-a-khan/nest-backend.git
    cd backend
    ```

2.  **Install dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    Using yarn:

    ```bash
    yarn install
    ```

## Environment Variables

The backend requires a single environment variable to connect to your MongoDB database.

1.  **Create a `.env` file:**

    In the root directory of your backend project, create a file named `.env`.

2.  **Set the `MONGODB_URI` variable:**

    Open the `.env` file and add your MongoDB connection string:

    ```
    MONGODB_URI=
    ```

    **Important:** Do not commit the `.env` file to your Git repository. Ensure it is added to your `.gitignore` file.

## Running the Backend

You can run the NestJS backend in development mode, which provides hot-reloading.

Using npm:

```bash
npm run start:dev
```


# Notes API Interaction

How to interact with the `/notes` endpoint of the backend API.

**Base URL (Assuming Backend is running locally):** `http://localhost:3000/notes`

**Note:** If the backend is running on a different host or port, adjust the base URL accordingly.

## 1. Get All Notes (`GET /notes`)

* **Description:** Retrieves a list of all notes.
* **Method:** `GET`
* **Endpoint:** `/notes`
* **Request Body:** None
* **Response Body (Success - HTTP 200 OK):** An array of note objects.

    ```json
    [
      {
        "_id": "unique_note_id_1",
        "title": "My First Note",
        "content": "This is the content of my first note.",
        "createdAt": "2025-04-07T18:00:00.000Z",
        "updatedAt": "2025-04-07T18:00:00.000Z"
      },
      {
        "_id": "unique_note_id_2",
        "title": "Another Thought",
        "content": "Just jotting down another idea.",
        "createdAt": "2025-04-07T18:05:00.000Z",
        "updatedAt": "2025-04-07T18:05:00.000Z"
      }
    ]
    ```

* **Response Body (Error - HTTP 500 Internal Server Error):** An error object.

## 2. Get a Single Note (`GET /notes/:id`)

* **Description:** Retrieves a specific note by its ID.
* **Method:** `GET`
* **Endpoint:** `/notes/{noteId}`, where `{noteId}` is the unique ID of the note.
* **Request Body:** None
* **Response Body (Success - HTTP 200 OK):** A single note object.
* **Response Body (Error - HTTP 404 Not Found):** If the note with the given ID does not exist.
* **Response Body (Error - HTTP 500 Internal Server Error):** An error object.

## 3. Create a New Note (`POST /notes`)

* **Description:** Creates a new note.
* **Method:** `POST`
* **Endpoint:** `/notes`
* **Request Body (application/json):** A JSON object containing the `title` and `content`.

    ```json
    {
      "title": "New Note Title",
      "content": "Content of the new note."
    }
    ```

* **Response Body (Success - HTTP 201 Created):** The newly created note object.
* **Response Body (Error - HTTP 400 Bad Request):** If the request body is invalid.
* **Response Body (Error - HTTP 500 Internal Server Error):** An error object.

## 4. Update an Existing Note (`PUT /notes/:id`)

* **Description:** Updates an existing note with the given ID.
* **Method:** `PUT`
* **Endpoint:** `/notes/{noteId}`, where `{noteId}` is the unique ID of the note to update.
* **Request Body (application/json):** A JSON object containing the updated `title` and/or `content`.

    ```json
    {
      "title": "Updated Title",
      "content": "Updated content."
    }
    ```

* **Response Body (Success - HTTP 200 OK):** The updated note object.
* **Response Body (Error - HTTP 404 Not Found):** If the note with the given ID does not exist.
* **Response Body (Error - HTTP 400 Bad Request):** If the request body is invalid.
* **Response Body (Error - HTTP 500 Internal Server Error):** An error object.

## 5. Delete a Note (`DELETE /notes/:id`)

* **Description:** Deletes the note with the given ID.
* **Method:** `DELETE`
* **Endpoint:** `/notes/{noteId}`, where `{noteId}` is the unique ID of the note to delete.
* **Request Body:** None
* **Response Body (Success - HTTP 200 OK):** A success message or the deleted note object.
* **Response Body (Error - HTTP 404 Not Found):** If the note with the given ID does not exist.
* **Response Body (Error - HTTP 500 Internal Server Error):** An error object.