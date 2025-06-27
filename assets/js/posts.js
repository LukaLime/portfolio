// Dynamic posts for each page
const postsData = {
  1: [
    {
      date: "June 17, 2025",
      title: "HerCalendar <br /> Person Web Application ",
      link: "https://gitlab.com/brandrock/HerCalendar",
      img: "images/HerCalendar.png",
      description: "<i><b>HerCalendar</b></i> is a web-based menstrual cycle tracking application designed to help users log, view, and predict their menstrual cycles. The app allows users to input and edit period start dates, automatically calculates cycle lengths, and displays a history of previous cycles in a clear table format.",
      buttonText: "@ Github",
      buttonLink: "https://github.com/LukaLime/HerCalendar"
    },
    {
      date: "December 1, 2024",
      title: "Visiones del Caribe <br /> Capstone Project ",
      link: "http://csvm15.cs.bgsu.edu/",
      img: "images/visiones.png",
      description: "<i><b>Visiones del Caribe</b></i>, served as my capstone project where I led the development of an interactive web application aimed at educating children about the Caribbean through a GIS map system. The application is hosted on a live Docker container, please give it a look.",
      buttonText: "Check It Out",
      buttonLink: "http://csvm15.cs.bgsu.edu/"
    },
    {
      date: "January 10, 2024",
      title: "Anytime Weather<br /> A Personal Website",
      link: "https://brandonrock8404.wixsite.com/anytimeweather",
      img: "images/anytime-weather.png",
      description: "<i><b>Anytime Weather</b></i>, is a dynamic weather website using the cloud-based website builder Wix. This includes a responsive design, weather information, and a built-in search bar using the OpenWeatherMap API with its Geocoding API. The application is hosted by Wix, please give it a look.",
      buttonText: "Check It Out",
      buttonLink: "https://brandonrock8404.wixsite.com/anytimeweather"
    },
    {
      date: "June 22, 2024",
      title: "Everyday Renee<br /> A personal webpage",
      link: "https://gitlab.com/brandrock/everydayrenee",
      img: "images/everyday-renee.png",
      description: "<p><i><b>Everyday Renee</b></i> is a personal finance platform where Renee provides practical and accessible financial advice to her community. Through her YouTube channel and various social media platforms, Renee shares tips on budgeting, saving, and investing.</p>",
      buttonText: "@ Gitlab",
      buttonLink: "https://gitlab.com/brandrock/everydayrenee"
    },
    {
      date: "September 18, 2024",
      title: "Parallel Trapezoid <br /> A personal program",
      link: "https://gitlab.com/brandrock/count-sort-parallel",
      img: "images/trapezoid.png",
      description: "This code demonstrates parallel integration using the Trapezoidal rule with OpenMP. The goal is to approximate the integral of the function 𝑓(𝑥) = x^2 over a specified range [𝑎,𝑏] using both serial and parallel methods.",
      buttonText: "@ Gitlab",
      buttonLink: "https://gitlab.com/brandrock/count-sort-parallel"
    },
    {
      date: "July 2, 2024",
      title: "Rock, Paper, Scissors Program",
      link: "https://github.com/LukaLime/rock_paper_scissors",
      img: "images/Rock_Paper_Scissors.png",
      description: "A simple dynamic and responsive rock, paper, scissors program. This game includes an interactive UI, a scoreboard, an auto-play button, and a reset button.",
      buttonText: "@ Github",
      buttonLink: "https://github.com/LukaLime/rock_paper_scissors"
    },
    {
      date: "Febuary, 2023",
      title: "Submission Form <br /> Using PHP",
      link: "https://gitlab.com/brandrock/js-validation-form",
      img: "images/form.png",
      description: "<p>This project features a modern, user-friendly registration form with a two-column layout designed for responsiveness. The form includes fields for user details such as name, email, phone number, and address, with validations to ensure data accuracy. </p>",
      buttonText: "@ Gitlab",
      buttonLink: "https://gitlab.com/brandrock/js-validation-form"
    }
  ],
  2: [
    {
      date: "November 2, 2023",
      title: "Bouncing Ball <br /> Using PHP",
      link: "https://gitlab.com/brandrock/js-bouncing-ball",
      img: "images/ball.png",
      description: "This program creates an interactive webpage with a ball that can be manipulated using buttons. The ball can change color, grow or shrink in size, and bounce within a designated area.",
      buttonText: "@ Gitlab",
      buttonLink: "https://gitlab.com/brandrock/js-bouncing-ball"
    },
    {
      date: "July 6, 2024",
      title: "Calculator<br /> Program",
      link: "https://github.com/LukaLime/calculator",
      img: "images/calculator.png",
      description: "<p>A simple calculator program performs basic arithmetic operations: addition, subtraction, multiplication, and division. Users input two numbers and select the desired operation. </p>",
      buttonText: "@ Github",
      buttonLink: "https://github.com/LukaLime/calculator"
    },
    {
      date: "October 23, 2024",
      title: "Parallel Count Sort<br /> A Personal Program",
      link: "https://gitlab.com/brandrock/count-sort-parallel",
      img: "images/countsort.png",
      description: "This program implements the counting sort algorithm both serially and in parallel using OpenMP. It measures the performance of both implementations and compares their execution times.",
      buttonText: "@ Gitlab",
      buttonLink: "https://gitlab.com/brandrock/count-sort-parallel"
    },
    {
      date: "June 28, 2024",
      title: "Amazon Clone<br /> A Personal Program",
      link: "https://gitlab.com/brandrock/amazon-project",
      img: "images/amazon.png",
      description: "I created a functional clone of Amazon's e-commerce website interface using HTML, CSS, and JavaScript. This includes a built shopping cart functionality with a responsive design.",
      buttonText: "@ Gitlab",
      buttonLink: "https://gitlab.com/brandrock/amazon-project"
    },
    {
      date: "October 29, 2024",
      title: "Parallel Producer<br /> consumer program",
      link: "https://gitlab.com/brandrock/producer-consumer-parallel",
      img: "images/producer.png",
      description: "This C++ program demonstrates the use of OpenMP and multithreading to process multiple text files concurrently. It simulates a producer-consumer problem, where producers read data from files and push lines into a shared queue, while consumers consume the queue, process the data, and print results.",
      buttonText: "@ Gitlab",
      buttonLink: "https://gitlab.com/brandrock/producer-consumer-parallel"
    }
  ]
};

// Function to load each post 
function loadPosts(page) {
  const postsSection = document.getElementById("posts");
  const posts = postsData[page];

  if (!posts) return;

  // Clear all posts
  postsSection.innerHTML = "";

  // Populate posts
  posts.forEach(post => {
    postsSection.innerHTML += `
     <article>
                    <header>
                        <span class="date">${post.date}</span>
                        <h2><a href="${post.link}" target="_blank">${post.title}</a></h2>
                    </header>
                    <a href="${post.link}" class="image fit" target="_blank"><img src="${post.img}" alt="" /></a>
                    <p>${post.description}</p>
                    <ul class="actions special">
                        <li><a href="${post.buttonLink}" class="button" target="_blank">${post.buttonText}</a></li>
                    </ul>
                </article>
    `;
  });

  // Update pagination
  document.querySelectorAll(".pagination .page").forEach((btn) => btn.classList.remove("active"));
  const activeButton = document.querySelector(`.pagination .page[data-page="${page}"]`);
  if (activeButton) activeButton.classList.add("active");
}

// Generate pagination dynamically
function generatePagination() {
  const pagination = document.querySelector(".pagination");
  const totalPages = Object.keys(postsData).length; // Total number of pages

  pagination.innerHTML = ""; // Clear existing pagination

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
      <a href="#" class="page ${i === 1 ? "active" : ""}" data-page="${i}" onclick="loadPosts(${i})">${i}</a>
    `;
  }
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  generatePagination();
  loadPosts(1); // Load the first page by default
});