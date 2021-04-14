This application has been deployed here: https://benoitgrasset.github.io/chatbot/

# Mindsay Frontend Technical Test

Welcome to Mindsay Frontend Technical Test!

The primary goal of this test is to assess your ability to write clean and reusable code, and your capacity to implement a user-friendly interface.

## Introduction
This is a live programming exercise. Therefore, we encourage you to ask questions and communicate with the interviewer(s).

## Brief
The objective is to implement a chatbot interface. It should have the following behavior:
* The bot welcomes the user with a message
* The user sends a message to the bot
* The bot answers back with a message

## Data
You should use an existing API for the bot messages. For example, the following API has endpoints to receive and create <a href="https://jsonplaceholder.typicode.com" target="_blank">todos</a>

## Tech
At Mindsay, our whole frontend stack is in Vue.js. But we want you to be technically comfortable, so this repo is to propose a solution that uses React. The project was created using the standard tool <a href="https://github.com/facebook/create-react-app" target="_blank">create-react-app</a>.

You are also free to use a components library to get you started, and any other packages that you find useful. Our design system is based on <a href="https://elemefe.github.io/" target="_blank">Element-UI</a>. If you want to use this library, know that it has already been installed you can import the atoms you want by adding them in index.js.
```
import { Button } from 'element-react';
```

## Screens
At Mindsay, developers and designers use Figma to collaborate. The chatbot design is available <a href="https://www.figma.com/file/9RXfJqDCRnyiitJaF3XxW8/Frontend?node-id=893%3A1873&viewport=846%2C571%2C1" target="_blank">here</a>.

## Tests
Even though we strongly believe in testing, tests are not required for this projects as the time we have is limited. For your information, our frontend tests are now using <a href="https://testing-library.com" target="_blank">Testing Library</a> in association with <a href="https://jestjs.io/" target="_blank">Jest</a>.

## The deliverable
* A repository showing your commit history.
* A working chatbot that matches the design.

Tests, code typing and accessibility are not required for this exercise.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn start
```

### Compiles and minifies for production
```
yarn build
```
