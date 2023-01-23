const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;
app.set('view engine', 'pug');

const birthDate = new Date("2022-12-24T02:45:00");
const currentDate = new Date();

const diffMiliseconds = Math.abs(currentDate - birthDate);
const diffDays = Math.floor(diffMiliseconds/1000/60/60/24);
const diffWeeks = Math.floor(diffDays/7);
const daysForWeeks = diffDays % 7;

const displayWeeks = `${diffWeeks} weeks and ${daysForWeeks} days.`;
const displayDays = `${diffDays} days.`;

app.get('/', (req, res)=> {
    res.render('index', { title: 'Jakub\'s age: ', weeks: displayWeeks, days: displayDays});
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})