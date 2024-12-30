# MyMovieList

## Overview
MyMovieList is a comprehensive web application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides users with a personalized platform to explore, rate, review, and manage their favorite movies and TV series. 

---

## Features

1. **Movie Listings**:
   - A rich library of movies and TV series with detailed information, including titles, posters, descriptions, genres, and release dates.

2. **Search**:
   - Users can easily search for movies or TV series by name.

3. **Filter**:
   - Filter search results by Movie, TV series or Person.

4. **User Authentication**:
   - Secure login and registration system for personalized experiences.

5. **Logout**:
   - Users can securely end their session and log out of the website.

6. **Ratings**:
   - Users can rate movies or TV series to share their preferences with others.

7. **Reviews**:
   - Users can write detailed reviews that are visible to the community.

8. **Dark & Light Mode**:
   - Customizable visual experiences with dark and light mode options.

9. **Similar Movies**:
    - Provides suggestions for similar movies or TV series based on the current page.

10. **Favorite Movies List**:
    - Enables users to create and manage a personalized list of their favorite movies.

11. **Responsive Design**:
    - Ensures seamless compatibility and functionality across various devices, including desktops, tablets, and mobile phones.

12. **Trending Section**:
    - Highlights the most popular or highly rated movies and TV series.

13. **update password**:
    - Users can securely update their account password through the profile settings page.
   
14. **Password Hashing**:
    - Passwords are hashed with specific salt to give a safe and secure experience for the users.

15. **Videos Related to the Media**:
    - Access exclusive media content, such as promotional videos, behind-the-scenes footage, and trailers for movies or TV series.

---

## Technology Stack

- **Frontend**: React.js with Material UI for responsive and modern UI components.
- **Backend**: Node.js with Express.js for building robust RESTful APIs.
- **Database**: MongoDB for efficient and scalable data storage.
- **Authentication**: JSON Web Tokens (JWT) for secure user authentication.
- **Styling**: CSS and Material UI for dynamic and customizable design.
- **External APIs**: Integration with TheMovieDB API for movie and TV series data.

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/MyMovieList.git
   cd MyMovieList
   ```

2. Install dependencies:
   ```bash
   # For the backend
   cd backend
   npm install

   # For the frontend
   cd ../frontend
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `backend` folder with the following variables:
     ```env
     PORT=5000
     MONGO_URI=your_mongo_db_connection_string
     JWT_SECRET=your_secret_key
     TMDB_API_KEY=your_tmdb_api_key
     ```

4. Start the development servers:
   ```bash
   # For the backend
   cd backend
   npm run dev

   # For the frontend
   cd ../frontend
   npm start
   ```

5. Access the application:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

---

## Directory Structure

```
MyMovieList/
|-- backend/
|   |-- models/
|   |-- routes/
|   |-- controllers/
|   |-- middlewares/
|   |-- utils/
|   |-- server.js
|
|-- frontend/
|   |-- src/
|   |   |-- components/
|   |   |-- pages/
|   |   |-- services/
|   |   |-- App.js
|   |   |-- index.js
|   |-- public/
|
|-- .gitignore
|-- README.md
```

---

# OOP Principles in the SigninForm Component

This project demonstrates the use of **Object-Oriented Programming (OOP) principles** within a React application, specifically in the implementation of a sign-in form (`SigninForm`) component. Below, we discuss how OOP principles like **encapsulation**, **inheritance**, and **reusability** are applied.

## 1. Encapsulation

Encapsulation is achieved by organizing the form logic into classes, separating concerns between business logic and UI rendering.

### Example:
- **`BaseForm` Class:**
  Encapsulates common properties and methods for managing form configuration. This includes `initialValues`, `validationSchema`, and `onSubmitHandler`.

  ```javascript
  class BaseForm {
    constructor(initialValues, validationSchema, onSubmitHandler) {
      this.initialValues = initialValues;
      this.validationSchema = validationSchema;
      this.onSubmitHandler = onSubmitHandler;
    }
  }
  ```

- **Benefits:**
  - Modular and reusable code.
  - Clean separation of form logic from the UI.

## 2. Inheritance

Inheritance is used to create specialized forms by extending the `BaseForm` class. For example, the `SigninFormHandler` class inherits from `BaseForm` and adds sign-in-specific logic, such as API calls and managing state.

### Example:
- **`SigninFormHandler` Class:**
  Extends `BaseForm` to customize the behavior for user sign-in.

  ```javascript
  class SigninFormHandler extends BaseForm {
    constructor(dispatch, setLoading, setErrorMessage) {
      super(
        {
          username: "",
          password: ""
        },
        Yup.object({
          username: Yup.string()
            .min(8, "username minimum 8 characters")
            .required("username is required"),
          password: Yup.string()
            .min(8, "password minimum 8 characters")
            .required("password is required")
        }),
        async (values, formikHelpers) => {
          setErrorMessage(undefined);
          setLoading(true);
          const { response, err } = await userApi.signin(values);
          setLoading(false);

          if (response) {
            formikHelpers.resetForm();
            dispatch(setUser(response));
            dispatch(setAuthModalOpen(false));
            toast.success("Sign in success");
          }

          if (err) setErrorMessage(err.message);
        }
      );
    }
  }
  ```

- **Benefits:**
  - Specialized logic is isolated within the child class (`SigninFormHandler`).
  - Reduces code duplication for common form features.

## 3. Reusability

The `BaseForm` class is designed to be reused for creating different forms in the application. Developers can extend it to handle various use cases (e.g., sign-up, password reset).

### Example:
- By extending `BaseForm`, other forms can easily inherit common logic and add custom behavior:
  ```javascript
  class SignupFormHandler extends BaseForm {
    constructor(dispatch) {
      super(
        { username: "", email: "", password: "" },
        Yup.object({
          username: Yup.string()
            .min(8, "username minimum 8 characters")
            .required("username is required"),
          email: Yup.string().email("invalid email").required("email is required"),
          password: Yup.string()
            .min(8, "password minimum 8 characters")
            .required("password is required")
        }),
        async (values) => {
          // Custom sign-up logic
        }
      );
    }
  }
  ```

- **Benefits:**
  - Reduces development time for new forms.
  - Ensures consistency across forms by reusing shared logic.

## 4. Adherence to React Rules

While applying OOP principles, we ensure compliance with React's rules of hooks by:
- Keeping `useFormik` calls inside functional components (e.g., `SigninForm`).
- Using the `SigninFormHandler` class only for configuration and logic, not for directly calling hooks.

### Example:
- In `SigninForm`, we instantiate the `SigninFormHandler` class and use its configuration with `useFormik`:

  ```javascript
  const signinFormHandler = new SigninFormHandler(dispatch, setIsLoginRequest, setErrorMessage);

  const signinForm = useFormik({
    initialValues: signinFormHandler.initialValues,
    validationSchema: signinFormHandler.validationSchema,
    onSubmit: signinFormHandler.onSubmitHandler
  });
  ```




