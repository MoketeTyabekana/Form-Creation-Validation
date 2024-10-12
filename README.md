<!-- PROJECT 1: FORM VALIDATION USING JAVASCRIPT -->

Form Creation and Validation
This project demonstrates how to create a user registration form with basic HTML structure, apply styles using CSS, and implement client-side validation using JavaScript. The form allows users to input a username, email, and password, and it validates the inputs according to specific criteria before submission.

Project Overview
The primary goal of this project is to ensure that users provide valid data when registering via the form. The form includes three fields:

Username
Email
Password
Upon form submission, validation is performed using JavaScript to verify the correctness of the inputs. If all validations pass, a success message is displayed. Otherwise, appropriate error messages are shown.

Features
Username Validation: Ensures the username is at least 3 characters long.
Email Validation: Verifies that the email input contains both an '@' and a '.'.
Password Validation: Checks that the password is at least 8 characters long.
Real-time Feedback: Provides immediate feedback for users by displaying validation errors or success messages.
Form Styling: The form is styled with modern, user-friendly design using CSS.
File Structure
The project consists of three main files:

index.html: Contains the structure of the user registration form.
style.css: Styles the form to ensure a clean and responsive design.
script.js: Implements form validation logic to handle user input and display feedback.


<!--PROJECT 2: Fetching data from an API and using Async/await to fetch data-->

Fetching User Data from an API and Displaying It
This project demonstrates how to use JavaScript to asynchronously fetch user data from a public API and display it on a webpage. The goal is to fetch user information from the API JSONPlaceholder and present each user's name in a list format.

Project Overview
The project involves:

Using an async function to fetch data from the API.
Dynamically creating HTML elements to display the fetched data.
Handling any errors that might occur during the fetch operation and displaying an error message.
Ensuring that the JavaScript code runs after the DOM has been fully loaded.

Technologies Used
HTML: For structuring the webpage.
CSS: For styling the content.
JavaScript: For fetching and displaying the user data.

Getting Started
Prerequisites
Basic knowledge of HTML, CSS, and JavaScript.
A code editor such as VS Code.
Access to the internet to fetch the data from the API.
Files in the Project
index.html: The main HTML file that contains the structure of the page.

fetch-data.css: The CSS file for styling the user list and page layout.

fetch-data.js: The JavaScript file responsible for fetching the API data and handling the display logic.