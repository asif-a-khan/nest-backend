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