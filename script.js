const time_table_a = [
    {
        day: "Monday",
        time_table: ["math", "marathi", "biology", "art and craft", "physics", "english"],
    },
    {
        day: "Tuesday",
        time_table: ["english", "marathi", "history", "hindi", "computers", "physics"],
    },
    {
        day: "Wednesday",
        time_table: ["english", "computers", "biology", "math", "hindi", "history"],
    },
    {
        day: "Thursday",
        time_table: ["math", "hindi", "performing arts", "history", "western music", "biology"],
    },
    {
        day: "Friday",
        time_table: ["library", "history", "english", "biology", "physics"],
    },
    {
        day: "Saturday",
        time_table: [],
    },
    {
        day: "Sunday",
        time_table: [],
    },
];
const time_table_b = [
    {
        day: "Monday",
        time_table: ["math", "marathi", "geography", "art and craft", "physics", "english"],
    },
    {
        day: "Tuesday",
        time_table: ["english", "marathi", "chemistry", "hindi", "computers", "physics"],
    },
    {
        day: "Wednesday",
        time_table: ["english", "computers", "chemistry", "math", "hindi", "geography"],
    },
    {
        day: "Thursday",
        time_table: ["math", "hindi", "performing arts", "geography", "western music", "chemistry"],
    },
    {
        day: "Friday",
        time_table: ["library", "chemistry", "english", "geography", "physics"],
    },
    {
        day: "Saturday",
        time_table: [],
    },
    {
        day: "Sunday",
        time_table: [],
    },
];
let today = new Date().getDay()

dict = {
    0: 6,
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5
}
today = dict[today]
let tomorrow;

if (today > 4) {
    today = 4
    tomorrow = 0
} else {
    today = dict[today]
    tomorrow = today + 1
}

const [today_tt_a, tomorrow_tt_a] = [time_table_a[today].time_table, time_table_a[tomorrow].time_table];
const [today_tt_b, tomorrow_tt_b] = [time_table_b[today].time_table, time_table_b[tomorrow].time_table];

const intersect = (a, b) => [...new Set(a)].filter((x) => new Set(b).has(x));
const set_subtract = (a, b) => [...new Set(a)].filter((x) => !new Set(b).has(x));

const books_to_keep_a = intersect(today_tt_a, tomorrow_tt_a);
const books_to_remove_a = set_subtract(today_tt_a, tomorrow_tt_a);
const books_to_add_a = set_subtract(tomorrow_tt_a, today_tt_a);

console.log(`Week A:
  ${books_to_keep_a}
  ${books_to_remove_a}
  ${books_to_add_a}
`);

const books_to_keep_b = intersect(today_tt_b, tomorrow_tt_b);
const books_to_remove_b = set_subtract(today_tt_b, tomorrow_tt_b);
const books_to_add_b = set_subtract(tomorrow_tt_b, today_tt_b);

console.log(`Week B:
  ${books_to_keep_b}
  ${books_to_remove_b}
  ${books_to_add_b}
`);

const days_heading = document.querySelectorAll(".day-heading")

const remove_lbl_a = document.querySelector(".remove_a") 
const keep_lbl_a = document.querySelector(".keep_a")
const add_lbl_a = document.querySelector(".add_a")

const remove_lbl_b = document.querySelector(".remove_b") 
const keep_lbl_b = document.querySelector(".keep_b")
const add_lbl_b = document.querySelector(".add_b")

let x = ""

books_to_remove_a.forEach((book) => {
    x = `${book}, ${x}`
})
remove_lbl_a.innerText = x

x = ""
books_to_keep_a.forEach((book) => {
    x = `${book}, ${x}`
})
keep_lbl_a.innerText = x

x = ""
books_to_add_a.forEach((book) => {
    x = `${book}, ${x}`
})
add_lbl_a.innerText = x



x = ""
books_to_remove_b.forEach((book) => {
    x = `${book}, ${x}`
})
remove_lbl_b.innerText = x

x = ""
books_to_keep_b.forEach((book) => {
    x = `${book}, ${x}`
})
keep_lbl_b.innerText = x

x = ""
books_to_add_b.forEach((book) => {
    x = `${book}, ${x}`
})
add_lbl_b.innerText = x


days_heading[today].style.color = "#ffbd38"
days_heading[tomorrow].style.color = "#14c726"