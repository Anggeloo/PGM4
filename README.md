# Fruit List Web Application

This is a simple web application built using Express.js that displays a list of fruits. When the server is started, it opens a web browser window and shows the list of fruits on the page.

## Prerequisites

- Node.js (version 16 or higher)
- npm (Node Package Manager)

## Getting Started

1. Clone the repository:

   
   git clone https://github.com/Anggeleo/PGM4.git
   

2. Change to the project directory:

   
   cd PGM4
   

3. Install the dependencies:

   
   npm install
   

4. Start the server:

   
   npm start
   

   This will start the server and automatically open a web browser window at http://localhost:3000.

## Running with Docker

Alternatively, you can run the application using Docker:

1. Build the Docker image:

   
   docker build -t pgm4 .
   

2. Run the Docker container:

   
   docker run -p 3000:3000 pgm4
   

   This will start the container and map port 3000 of the container to port 3000 of the host machine. You can then access the application at http://localhost:3000.

## Files

- PGM4.mjs: The main application file that sets up the Express.js server, defines the fruit list, and opens the web browser window.
- package.json: The project's package file that lists the dependencies and scripts.
- package-lock.json: The automatically generated file that locks the dependency versions.
- Dockerfile: The Docker configuration file that builds the Docker image for the application.

## Accessing the deployed application on Render

1.Open your web browser.
2.Visit the following URL:

https://pgm4.onrender.com

3.You will see the Flask application displaying a counter that you can increment by clicking the button.

##Contribution
If you want to contribute to this project, you can follow these steps:

1.Fork the repository.
2.Create a new branch with your changes: git checkout -b feature/my-new-feature.
3.Make the necessary changes and update the documentation.
4.Send a pull request explaining your changes.
