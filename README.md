# Practice Backend Web Development

This repository contains my personal practice projects and examples focused on backend web development. It serves as a space for learning, experimentation, and improvement in building server-side applications using various technologies.

## Objectives
- Enhance my backend development skills.
- Experiment with different libraries and frameworks.
- Build foundational projects to solidify concepts like authentication, databases, API design, and middleware.

## Technologies Used

### Core Technologies:
- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Express.js**: Web framework for handling routes, middleware, and APIs.
- **MongoDB**: NoSQL database for storing and managing data.

### Additional Tools and Libraries:
- **bcrypt**: For password hashing and security.
- **jsonwebtoken (JWT)**: For implementing authentication and authorization.
- **cookie-parser**: For parsing cookies in HTTP requests.
- **EJS**: For rendering dynamic views on the server side.
- **Mongoose**: For modeling MongoDB data in a more structured way.

## Current Features
- User Authentication:
  - Secure user registration with hashed passwords.
  - Login with JWT-based authentication.
  - Logout functionality using cookies.
- Dynamic HTML templates rendered with EJS.
- Middleware for request parsing and cookie handling.

## Setup and Usage

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (v16+ recommended)
- npm (Node Package Manager)
- MongoDB (local instance or cloud-based, e.g., MongoDB Atlas)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-github-username>/<repository-name>.git
   ```

2. Navigate to the project directory:
   ```bash
   cd <repository-name>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```env
   PORT=3000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>
   ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure
```
.
├── models          # Mongoose schemas for data modeling
├── public          # Static assets (CSS, JS, images)
├── views           # EJS templates for dynamic rendering
├── routes          # Modular route handlers (if applicable)
├── app.js          # Main server file
├── package.json    # Dependency management
└── README.md       # Project documentation
```

## Future Plans
- Add role-based access control (RBAC).
- Implement RESTful API endpoints for CRUD operations.
- Integrate advanced security features (e.g., rate-limiting, CORS).
- Add testing with tools like Jest and Supertest.
- Explore additional backend frameworks and databases.

## Contribution
This is a personal practice repository, but feedback and suggestions are welcome! Feel free to create issues or submit pull requests.

## License
This project is for personal learning and development. It is not licensed for commercial use.

---

### Author
Moaz Malik

For more details, visit my personal website: [www.moazmalik.online](http://www.moazmalik.online)
