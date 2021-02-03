<h1 align="center">Feedback Forum</h1>

<div align="center">
   Solution for a challenge from  <a href="https://kenzie.com.br/" target="_blank">Kenzie Academy Brasil</a>.
</div>

<div align="center">
  <h3>
    <a href="https://cadastro-usuario-five.vercel.app"/>
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/enias-oliveira/feedback-forum/tree/master/src">
      Solution
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

<img src="https://lh3.googleusercontent.com/pw/ACtC-3cNSwvs4QyYwdxxwLXgXyCbQdUZNXunxJV_8gTtCUUsiWjIk0nI-ChdNUpixZxDPpSlkMqdy2nS-T-rbnyQOsjkJ7zG9Fv2gs8ndh4Fd2L5vW_ponNK39TVlspx-LRMzwa7YPFziQua4vDcCA82DFcx=w1271-h910-no?authuser=0" width="400" height="300"/>

Feedback Forum is a simple React application, where users can write feedbacks to other users. I

Although it's a simple app, it enables us to learn how to create forms, form validators, send the data to a Back end, and communicating with an API by using the [User-API](https://gitlab.com/kenzie-academy-brasil/demos/q2/projects/users-api).

This was our first "real" React project and helped to grasp a lot of "React Concepts", such as:

- Functional components with Hooks
- Props and states
- Event Listeners
- Component Lifecycle
- React State
- Routing

We also learned how to work with other Javascript libraries, by reading their documentation and properly adding them to our project.

<img src="https://lh3.googleusercontent.com/pw/ACtC-3ffECSwFHw83lz37wTz2UdDnC9OI5o2aQ4T_sbaCAMjlTwSkLBSwKCqNBMAc6_iB_iZMjt0XdJnJo90BN-W7AbIIpakgYgE-nFZLpxAkO_FzYUYIdJTrw-MFU-XV-Vx9jnWWZFHH1-sNsQqk9x0QjJ0=w1270-h910-no?authuser=0" width="400" height="300"/>

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/): A JavaScript library for building user interfaces
- [Axios](https://github.com/axios/axios): Promise based HTTP client for the browser and node.js
- [Bootstrap](https://getbootstrap.com/): The most popular HTML, CSS and JS library for responsive, mobile-first web development
- [React Bootstrap](https://react-bootstrap.github.io/): The most popular front-end framework rebuilt for React
- [styled components](https://styled-components.com/): Visual primitives for the component age by using the best bits of ES6 and CSS to style apps.
- [React Router](https://reactrouter.com/): A collection of navigational components
- [React Hook Form](https://react-hook-form.com/): Performant, flexible and extensible forms with easy-to-use validation.
- [Yup](https://www.npmjs.com/package/yup): A JavaScript schema builder for value parsing and validation.

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

- Register an account with a username, email, and password
  <img src="https://lh3.googleusercontent.com/pw/ACtC-3cxdVg8uqcacsLdLAJmEQlZ0_o0p4xRzTJ1oOzHnU0QUF9V-jMObHcs86XoD_jpgg79ductyrWzFruFybHARwNiF9uKsH03CNs-ZjRqSWIyLfGZSzoinHSgld3S8ShKiAgcNgVff73bxCgfIVPe-wLI=w1273-h913-no?authuser=0" width="400" height="300"/>

- Log in with a form that has a validation schema to guarantee proper data is sent to the Back End.
- See a list with users of all users, their names, and email. The list is paginated.
- Go to another user Feedback page and see the feedback they received.
- Write and post feedback to the other user.

<img src="https://lh3.googleusercontent.com/pw/ACtC-3e8k7vJUEqE5M5EHx0iBG4ueT46mu8L_IMeY6qA1MiF0377ZDqMhASogwe5uO6V4TlLflE5nc38zJA2mZS55R4aOdDtvQz28s_8lOSDuEo1PHEEa5zfuM-RhuFOXCHua68ttmWljceTL-xzacgluDGr=w1267-h908-no?authuser=0" width="400" height="300"/>

## How To Use

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### Basics: Using NPM

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/enias-oliveira/feedback-forum

# Install dependencies
$ npm install

# Run the app
$ npm start
```

### Advanced: More scripts and using Yarn

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

- [Bernardo Marques](https://github.com/bermarques)
- [Kenzie Academy Brasil](https://kenzie.com.br)
- [devChallenges](https://devchallenges.io/) (Provided README template)

## Contact

- GitHub [@enias-oliveira](https://github.com/enias-oliveira)
- LinkedIn [@enias-oliveira](https://www.linkedin.com/in/enias-oliveira/)
- Gitlab [@enias-c137](https://gitlab.com/enias-c137)
