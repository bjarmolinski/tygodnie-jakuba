const birthDate = new Date("2022-12-24T02:45:00");
const currentDate = new Date();

const diffMiliseconds = Math.abs(currentDate - birthDate);
const diffDays = Math.floor(diffMiliseconds/1000/60/60/24);
const diffWeeks = Math.floor(diffDays/7);
const daysForWeeks = diffDays % 7;

const displayWeeks = `${diffWeeks} weeks and ${daysForWeeks} days.`;
const displayDays = `${diffDays} days.`;

const weeks = document.getElementById('weeks');
const days = document.getElementById('days');
weeks.textContent = displayWeeks;
days.textContent = displayDays;
