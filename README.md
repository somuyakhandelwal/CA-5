# Front-end Web Development Assessment

## Project Description

Create a website using React that displays a list of books. The goal is to provide accessibility to books online using the provided API.

### API Details

- API: [https://reactnd-books-api.udacity.com/books](https://reactnd-books-api.udacity.com/books)
- Headers: { 'Authorization': 'whatever-you-want' }

### Website Features

1. **Books List:**
   - Display a list of books fetched from the API.
   - Replace "Google Play" with "Kalvium Books."
   - Ensure all books are free of cost.

2. **Register Button:**
   - Clicking the register button directs the user to a new page with a registration form.
   - The form should include the following fields:
     - Name
     - Email
     - Password
     - Repeat password
   - Constraints for each field:
     - **Name:** Should not be greater than 30 characters and less than 3 characters.
     - **Email:** Must be a valid email with an "@" symbol.
     - **Password:** Should be at least 10 characters long with at least one special character.
     - **Repeat Password:** Must match the Password field.
   - The register button should only work if all constraints are followed.

3. **Search Bar:**
   - Implement a search bar to filter books based on the entered text.
   - For example, searching "The Great" should display books starting with those words.

## Project Structure

- **src/**
  - **components/**
    - **Books/**
      - BookList.jsx
    - **Navbar/**
      - Logo.jsx
      - SearchBox.jsx
      - Register.jsx
    - **RegistrationForm/**
      - Form.jsx
  - **Redux/**
    - **Store.jsx** 
    - **Slice/**
      - Book.js
  - **App.jsx**

## Project Submission

### Code Repository

[Your Code Repository Link](https://github.com/somuyakhandelwal/CA-5)

### Deployed Project Link

[Your Deployed Project Link](ca-5.vercel.app)
