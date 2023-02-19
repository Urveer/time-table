const timeTables = [
    {
        name: 'A',
        days: [
            {
                name: 'Monday',
                subjects: ['math', 'marathi', 'biology', 'art and craft', 'physics', 'english'],
            },
            {
                name: 'Tuesday',
                subjects: ['english', 'marathi', 'history', 'hindi', 'computers', 'physics'],
            },
            {
                name: 'Wednesday',
                subjects: ['english', 'computers', 'biology', 'math', 'hindi', 'history'],
            },
            {
                name: 'Thursday',
                subjects: ['math', 'hindi', 'performing arts', 'history', 'western music', 'biology'],
            },
            {
                name: 'Friday',
                subjects: ['library', 'history', 'english', 'biology', 'physics'],
            },
            {
                name: 'Saturday',
                subjects: [],
            },
            {
                name: 'Sunday',
                subjects: [],
            },
        ],
    },
    {
        name: 'B',
        days: [
            {
                name: 'Monday',
                subjects: ['math', 'marathi', 'geography', 'art and craft', 'physics', 'english'],
            },
            {
                name: 'Tuesday',
                subjects: ['english', 'marathi', 'chemistry', 'hindi', 'computers', 'physics'],
            },
            {
                name: 'Wednesday',
                subjects: ['english', 'computers', 'chemistry', 'math', 'hindi', 'geography'],
            },
            {
                name: 'Thursday',
                subjects: ['math', 'hindi', 'performing arts', 'geography', 'western music', 'chemistry'],
            },
            {
                name: 'Friday',
                subjects: ['library', 'chemistry', 'english', 'geography', 'physics'],
            },
            {
                name: 'Saturday',
                subjects: [],
            },
            {
                name: 'Sunday',
                subjects: [],
            },
        ],
    },
];

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
date = new Date()
const today = date.getDay() == 0 ? 6 : date.getDay() - 1;

const todayIndex = today > 4 ? 4 : dict[today];
const tomorrowIndex = today > 4 ? 0 : today + 1;

const todayTimeTableA = timeTables[0].days[todayIndex].subjects;
const tomorrowTimeTableA = timeTables[0].days[tomorrowIndex].subjects;
const todayTimeTableB = timeTables[1].days[todayIndex].subjects;
const tomorrowTimeTableB = timeTables[1].days[tomorrowIndex].subjects;

const getIntersection = (a, b) => [...new Set(a)].filter(x => new Set(b).has(x));
const getSetDifference = (a, b) => [...new Set(a)].filter(x => !new Set(b).has(x));

const formatBooks = (books) => books.reduce((acc, book) => `${book}, ${acc}`, "").slice(0, -2);

const booksToKeepA = getIntersection(todayTimeTableA, tomorrowTimeTableA);
const booksToRemoveA = getSetDifference(todayTimeTableA, tomorrowTimeTableA);
const booksToAddA = getSetDifference(tomorrowTimeTableA, todayTimeTableA);

const booksToKeepB = getIntersection(todayTimeTableB, tomorrowTimeTableB);
const booksToRemoveB = getSetDifference(todayTimeTableB, tomorrowTimeTableB);
const booksToAddB = getSetDifference(tomorrowTimeTableB, todayTimeTableB);

const daysHeading = document.querySelectorAll(".day-heading");

const removeLblA = document.querySelector(".remove_a");
const keepLblA = document.querySelector(".keep_a");
const addLblA = document.querySelector(".add_a");

const removeLblB = document.querySelector(".remove_b");
const keepLblB = document.querySelector(".keep_b");
const addLblB = document.querySelector(".add_b");

removeLblA.innerText = formatBooks(booksToRemoveA);
keepLblA.innerText = formatBooks(booksToKeepA);
addLblA.innerText = formatBooks(booksToAddA);

removeLblB.innerText = formatBooks(booksToRemoveB);
keepLblB.innerText = formatBooks(booksToKeepB);
addLblB.innerText = formatBooks(booksToAddB);

daysHeading[todayIndex].style.color = "#ffbd38";
daysHeading[tomorrowIndex].style.color = "#14c726";