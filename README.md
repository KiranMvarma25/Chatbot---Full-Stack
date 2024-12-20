# Chatbot---Full-Stack

A full-stack web application that simulates a helpdesk chatbot. Users can interact with the chatbot to ask queries, receive responses, and view chat history. This project demonstrates full-stack development, modern tooling and DevOps practices.

Features :


Frontend -

1. Clean and minimalistic chat interface built with React.
2. Responsive UI for an optimal user experience on all devices.
3. Chat window displays user messages and chatbot responses.
4. Input field for user messages with “Enter” key submission or button click.


Backend -

1. Node.js/Express-based backend handling communication between frontend and database.
2. Rule-based logic for generating chatbot responses.
3. Chat history stored in MongoDB with timestamps.


Tech Stack :

Frontend : React, CSS
Backend : Node.js, Express.js
Database : MongoDB
DevOps Tools : Git, GitHub


Installation :


Prerequisites -

1. Node.js installed (v16 or higher)
2. MongoDB installed and running locally or in the cloud
3. Docker (optional, for containerization)


Steps : 

1. git clone https://github.com/KiranMvarma25/helpdesk-chatbot.git
2. cd chatbot
3.1.1. cd frontend
  1.2. npm i
  1.3. npm run dev
3.2.1. cd backend
  2.2. npm i
  2.3. npm start


Usage :

1. Open the application in a browser.
2. Type a message in the input field and press “Enter” or click the submit button.
3. View the chatbot's response in the chat window.
4. Chat history is saved and displayed persistently.


AI-Assisted Development with GitHub Copilot :

In this project, I utilized GitHub Copilot to enhance the development process, particularly for writing and refactoring both frontend and backend code. GitHub Copilot proved invaluable in improving productivity and offering intelligent suggestions based on context.

Backend Route Development -

GitHub Copilot provided suggestions for implementing the RESTful API endpoints efficiently. For example, while creating the POST /api/chat endpoint, it generated a structured boilerplate code with comments, helping me focus on logic implementation.

Frontend UI Development -

While building the chat interface in React, Copilot suggested JSX snippets for the chat window layout, saving time and improving UI consistency.

Lessons Learned -

Using GitHub Copilot reinforced my ability to collaborate with AI tools effectively, improving both the speed and quality of development. It also demonstrated the importance of critically evaluating AI-generated code to ensure security, performance, and alignment with project goals.