# Kultura i Historia - New Version Development

## Contact

If you have any questions or suggestions, please contact:

1. Webmaster: [**Adrian Mróz**](mailto:dr.adrian.mroz@outlook.com)
2. Editor-in-Chief: [**Andrzej Radomski, Prof. UMCS**](mailto:andrzej.radomski@mail.umcs.pl)

## Publisher

Institute of Cultural Studies
Maria Curie-Skłodowska University

## About this project

This document provides a comprehensive guide for the development of the new version of the Kultura i Historia website. The new version will be a React application with Redux for state management and Web Sockets for real-time functionality. The backend will be built using Node.js and Express.js.

## Current Website Overview

The current website is a scholarly journal named "Kultura i Historia" (Culture and History). It primarily contains scholarly articles with theoretical, methodological, and empirical research results. The research topics are primarily focused on the history and culture of Central and Eastern Europe. The website also contains information about the journal, such as its open access policy, ethical standards, and data privacy policy.

The website does not seem to have interactive features like user login, comments, or content submission. However, it does provide an email address for submissions and a Google Form for authors to submit their texts.

The data for the website is likely stored in a MySQL database, given the server configuration. The website has a simple, academic design, and it does not appear to have any real-time functionality or third-party integrations.

## New Website Features

The new version of the website will include the following features:

1. **Journal Management System**: This system will allow the creation of user accounts with different roles (admin, editor, author, reviewer, etc.). Users will be able to submit manuscripts and manage their accounts.

2. **Views**: The website will be available in both English and Polish. It will also include a dark mode, customization options, and will follow accessibility best practices. The design will be responsive, meaning it will look good on devices of all sizes.

3. **PDF Generation**: Users will be able to generate and download PDFs of journal texts.

4. **API Service for Media**: The website will include an API service for uploading and serving media files.

5. **OpenAI Integration**: The website will include a chat feature powered by OpenAI, allowing visitors to interact with the published content.

## Development Plan

The development of the new website will involve the following steps:

1. **Setup the Development Environment**: Install Node.js, npm, and create-react-app on the local machine.

2. **Create a New React App**: Use create-react-app to create a new React project.

3. **Install Redux**: Install Redux and connect it to the React app.

4. **Plan and Create Components**: Break down the website into components and create a new file for each component.

5. **Create the Redux Store, Actions, and Reducers**: The Redux store will hold the application's state. Actions and reducers will specify how the state changes in response to different actions.

6. **Install and Setup Web Sockets**: Install the socket.io-client library and set up Web Sockets for real-time functionality.

7. **Migrate Data**: Create an API to interact with the MySQL database and fetch data in the React components or Redux actions.

8. **Deploy the App**: Deploy the app using a service like Netlify or Vercel.

## Best Practices

During development, the following best practices will be followed:

- **Security**: Passwords will be hashed and salted, HTTPS will be used, user input will be sanitized, and secure HTTP headers will be set.
- **Error Handling**: Errors will be handled appropriately and appropriate HTTP status codes and messages will be sent.
- **Logging**: Logging will be implemented for debugging purposes.
- **Environment Variables**: Environment variables will be used for sensitive information.
- **Code Organization**: Code will be organized into models, views, and controllers.
- **Consistent Code Style**: A linter will be used to enforce a consistent code style.
- **Testing**: Tests will be written for the backend and frontend. The tests will be run automatically on every commit.
