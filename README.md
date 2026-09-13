#   Dev Stack

A simple and interactive React application where users can explore different web development technologies and build their own technology stack. The project loads technology information from JSON data and allows users to add or remove technologies from their personal stack.

##  Description

 Dev Stack is a React-based project designed to practice important React concepts such as components, props, state, hooks, conditional rendering, and `.map()`.

Users can browse available technologies, view their information, and create a personalized stack by selecting the technologies they want to use.

##  Technologies Used

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Tailwind CSS
- JSON
- React Toastify

##  Features

### 1.  Explore Technologies
Users can browse a collection of different technologies with their names, categories, and other information.

### 2.  Build Your Own Stack
Users can add technologies to their personal stack and see the selected technologies in one place.

### 3.  Add & Remove Technologies
Users can easily add technologies to their stack and remove them whenever they want.





##  React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML like code inside JavaScript. JSX is used in React to create and structure the UI components in an easier and more readable way.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data that a component manages by itself and can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a React component store and update data. I used it to store the technology list and the user's technology stack in this project.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run some code when a component loads or when something changes. I used it to fetch the technology data from the JSON file when the Technologies component loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list. It allows React to understand which items have changed, added, or removed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something only when a certain condition is true. I used it to show an "Your stack is empty" message when the user hasn't added any technology to their stack.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props. If the child needs to send something back, the parent can pass a function as a prop, and the child can call that function.