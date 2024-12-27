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
   - Filter search results by popularity or release date.

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

9. **Watch Providers**:
   - Displays streaming or viewing platforms where each movie or TV series is available.

10. **Similar Movies**:
    - Provides suggestions for similar movies or TV series based on the current page.

11. **Watchlist**:
    - Allows users to save movies or TV series for later viewing.

12. **Favorite Movies List**:
    - Enables users to create and manage a personalized list of their favorite movies.

13. **Responsive Design**:
    - Ensures seamless compatibility and functionality across various devices, including desktops, tablets, and mobile phones.

14. **Trending Section**:
    - Highlights the most popular or highly rated movies and TV series.

15. **Available Regions**:
    - Shows the regions where each movie or TV series can be streamed or viewed.

16. **Social Sharing**:
    - Allows users to share movie or TV series pages and reviews on social media platforms.

17. **Contact Us**:
    - Provides a form for users to contact developers and submit feedback about the website.

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

## Object-Oriented Programming (OOP) in MyMovieList

### 1. **Inheritance**
Inheritance allows child classes to derive properties and methods from a parent class, enabling code reuse and extensibility.

#### Example in Backend:
- **Base Schema Class**:
  - Create a base schema with common fields such as `user`, `mediaType`, and `mediaId`.
  - Other models like `Favorite`, `WatchList`, and `Review` can inherit this schema.

```javascript
// base.model.js
import mongoose from "mongoose";

const baseSchema = {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    mediaType: { type: String, enum: ["tv", "movie"], required: true },
    mediaId: { type: String, required: true },
};

export default baseSchema;

// favourite.model.js
import mongoose from "mongoose";
import baseSchema from "./base.model";

const favouriteSchema = new mongoose.Schema({
    ...baseSchema,
    mediaTitle: { type: String, required: true },
    mediaPoster: { type: String, required: true },
    mediaRate: { type: Number, required: true },
});

export default mongoose.model("Favourite", favouriteSchema);
```

---

### 2. **Polymorphism**
Polymorphism enables a single function or class to behave differently based on the input.

#### Example in Frontend:
- **Component Polymorphism**:
  - Create a generic `MediaCard` component that can display either movies or TV series.
  - Pass different props based on `mediaType`.

```javascript
// MediaCard.js
import React from "react";

const MediaCard = ({ mediaType, title, poster, rating }) => {
    return (
        <div className={`card ${mediaType}`}>
            <img src={poster} alt={`${title} poster`} />
            <h3>{title}</h3>
            <p>Rating: {rating}</p>
        </div>
    );
};

export default MediaCard;

// Usage
<MediaCard mediaType="movie" title="Inception" poster="/inception.jpg" rating={8.8} />;
<MediaCard mediaType="tv" title="Breaking Bad" poster="/breakingbad.jpg" rating={9.5} />;
```

---

### 3. **Encapsulation**
Encapsulation restricts direct access to some of the object's components, improving security and maintainability.

#### Example in Backend:
- Hide sensitive information like passwords in the `User` model.

```javascript
// user.model.js
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Encapsulation: Use pre-save hooks to hash the password
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Instance method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("User", userSchema);
```

---

### 4. **Abstraction**
Abstraction hides complex logic and exposes only essential details to the user.

#### Example in Frontend:
- Abstract API calls into a service layer.

```javascript
// apiService.js
import axios from "axios";

// Abstraction: Centralized API call management
const apiService = {
    getMovies: async () => {
        const response = await axios.get("/api/movies");
        return response.data;
    },
    getMovieDetails: async (movieId) => {
        const response = await axios.get(`/api/movies/${movieId}`);
        return response.data;
    },
    addReview: async (movieId, reviewData) => {
        const response = await axios.post(`/api/movies/${movieId}/reviews`, reviewData);
        return response.data;
    },
};

export default apiService;

// Usage in components
import apiService from "./apiService";

const MovieList = () => {
    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await apiService.getMovies();
            setMovies(movies);
        };
        fetchMovies();
    }, []);
};
```

---

### Summary of Usage
| **Concept**       | **Usage Example**                                                   | **Benefit**                                              |
|--------------------|---------------------------------------------------------------------|---------------------------------------------------------|
| **Inheritance**    | Common fields in `baseSchema` inherited by `Favorite`, `WatchList` | Reduces redundancy and ensures consistency              |
| **Polymorphism**   | `MediaCard` component for both movies and TV series                | Simplifies UI development with a single reusable component |
| **Encapsulation**  | Secure password management in `User` model                        | Improves data security and restricts direct access      |
| **Abstraction**    | API services for data fetching                                     | Simplifies API interactions and centralizes logic       |

---

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes with detailed messages:
   ```bash
   git commit -m "Add: Feature description"
   ```
4. Push your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a Pull Request on the main repository.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact
For any queries, suggestions, or feedback, feel free to contact us via the **Contact Us** page on the website or email us at [developer@example.com](mailto:developer@example.com).

