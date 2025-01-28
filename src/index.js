// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the main component

// Render your React app into the root div
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);







// import { createRoot } from 'react-dom/client';

// function NavigationBar() {
//   // TODO: Actually implement a navigation bar
//   return <h1>Hello from React!</h1>;
// }

// const domNode = document.getElementById('navigation');
// const root = createRoot(domNode);
// root.render(<NavigationBar />);
