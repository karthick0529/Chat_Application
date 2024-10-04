## Chit-Chat Application

This guide will help you get started with the Chit-Chat application. Follow the instructions below to navigate through the platform efficiently.

## Welcome to Chit-Chat

This guide will help you get started with using the Chit-Chat application. Follow these instructions to navigate through the platform efficiently.

Disclaimer: You may encounter some issues since the application is in the development stage. Please refresh the page if needed, as it might resolve the problem.

## Deployment

Frontend:

Link: https://ornate-florentine-4f0745.netlify.app/

Deployed on Netlify. Visit the live demo to interact with the application.

Backend:

Link: https://chat-application-backend-392z.onrender.com

Deployed on Render. The RESTful API can be accessed at Render.

## Repositories

Link: https://github.com/karthick0529/Chat_Application

Frontend: Client
Backend: Server

## 1. Getting Started

Logging In

When you first visit Chit-Chat, you will land on the Login Page.

Login Page:

Email: Enter your email address.
Password: Enter your password.
Sign In Button: Click this to log in.
Registering an Account
If you don’t have an account, you can register first.

Sign Up Page:

Avatar: Upload a profile picture.
Name: Enter your full name.
Email: Enter your email address.
Bio: Write a short bio about yourself.
Password: Create a password.
After registering, you will be directed back to the Login Page to log in with your new credentials.

## 2. Home Page Features

Header
Once logged in, you’ll be taken to the Home Page. The header includes these icons:

Search Icon: Click to search for users and send friend requests.
Plus Icon: Create a new group with friends. Add members and name the group. The group creator becomes the admin.
Manage Group Icon: Only the group admin can use this feature to add or remove members, rename the group, or delete it.
Bell Icon: Notifications for friend requests will appear here.
Logout Icon: Click to log out of the application.

Layout

The home page is divided into three main sections:

Friends/Users List:

Displays your friends or available users.
Options to delete a chat or leave a group.
Chat Area:
Type and send messages to your friends.
Share multimedia files.
Warning for empty messages.
Profile:
Edit Profile: Update your profile information.
Delete Account: You can delete your account if necessary.

## 3. Tips and Tricks

Searching Users: Use the search function in the header to find friends quickly.
Creating Groups: The plus icon helps you organize group chats efficiently.
Managing Groups: Use the manage group feature to keep groups organized.

## 4. Contact Us

For further assistance, connect via LinkedIn or reach out through email at karthicknandha619@gmail.com.

## Chat Application Description

## Project Description

The Chat Application is a full-stack real-time messaging platform that allows users to engage in private and group conversations, send multimedia content, and receive instant notifications. This application focuses on user experience, security, and performance.

Design Phase

User Interface Design:

Sketched layouts of the application's interface focusing on usability and user experience.
Used Bootstrap to create a responsive design that adapts to different screen sizes.

Wireframes:

Created wireframes for the login, registration, chat, and profile management screens.
Development Phase

Frontend Development

React:

Used React for building a dynamic and interactive user interface.
Created separate components for login, registration, chat rooms, group chat, and user management.

State Management:

Utilized React state and Formik for managing form inputs and validation messages.
Used Redux or Context API for handling global state across the application.

Routing:

Implemented client-side routing using React Router to navigate between different pages (Login, Registration, Chat, Profile, etc.).

Responsive Design:

Used CSS frameworks like Bootstrap to ensure the application is responsive on all devices, from mobile phones to desktops.

Backend Development

Node.js & Express.js:

Set up Node.js and Express.js to create RESTful APIs that handle requests and responses from the client side.
Used JWT and Bcrypt to handle secure user authentication and authorization.

MongoDB:

Configured MongoDB as the database for storing user data, chat history, authentication tokens, and multimedia content.
Designed schema models for users, messages, and groups.

Role-based Access Control (RBAC):

Integrated middleware to control user permissions and role-based access control, ensuring only authorized users can perform certain actions.

Security:

Implemented JSON Web Tokens (JWT) for stateless authentication.
Used bcrypt to hash passwords for secure user authentication.

Functionality

The following key functionalities have been implemented:

Real-time Messaging:

Users can send and receive messages in real time, enabling instant communication.

Private Messaging:

Users can engage in one-on-one private conversations, ensuring secure and personal communication.

Empty Message Alerts:

Alerts are displayed when users attempt to send empty messages.

Group Chats:

Users can create or join group chats, allowing multiple participants to communicate in the same conversation.

Multimedia Sharing:

Users can share images, videos, and documents in chat conversations, enhancing the communication experience.

Notifications:

Users receive notification alerts for new messages, mentions, and other relevant activities.

## Tech Stack

Frontend: React.js, Redux / Context API, formik, React Router, Bootstrap, CSS
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Authentication: JWT, bcrypt
Real-time Messaging: WebSockets (e.g., Socket.io)
Deployment: Netlify (Frontend), Render (Backend)


