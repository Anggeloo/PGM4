import express from 'express';
import { exec } from 'child_process';

const app = express();
const port = 3000;

// Define an array of fruits
const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

app.get('/', (req, res) => {
  // Generate an HTML response with the list of fruits
  let html = '<h1>Fruit List</h1><ul>';
  fruits.forEach(fruit => {
    html += `<li>${fruit}</li>`;
  });
  html += '</ul>';
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  exec(`start http://localhost:${port}`);
});