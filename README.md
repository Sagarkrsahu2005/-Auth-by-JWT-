# Auth by JWT 🔐

A comprehensive authentication system demonstrating modern security practices using JSON Web Tokens (JWT). This project showcases a full-stack implementation of user authentication with a clean, responsive UI and robust backend security measures.

## 🌟 Features

### Authentication
- **User Registration (Signup)**
  - Email validation
  - Password strength requirements
  - Duplicate user checking
  - Success/Error feedback

- **User Login (Signin)**
  - JWT token generation
  - Secure token storage
  - Authentication persistence
  - Error handling

- **Protected Routes**
  - JWT verification middleware
  - Token-based access control
  - Automatic token validation

### User Interface
- **Modern Design**
  - Responsive layout
  - Clean animations
  - Form validation feedback
  - Loading states
  - Error messages

- **User Experience**
  - Smooth tab switching
  - Real-time input validation
  - Intuitive error messages
  - Loading indicators

## 🛠️ Technical Stack

### Frontend
- **HTML5**
  - Semantic markup
  - Accessibility features
  - SEO-friendly structure

- **CSS3**
  - Custom properties (variables)
  - Flexbox layout
  - Responsive design
  - Animations
  - Media queries

- **JavaScript**
  - ES6+ features
  - Async/Await
  - Event handling
  - Form validation
  - Local storage management
  - Axios for HTTP requests

### Backend
- **Node.js**
  - Express.js framework
  - Middleware implementation
  - Route handling
  - Error management

- **Security**
  - JWT implementation
  - CORS configuration
  - Request validation
  - Error handling

## 📋 Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Modern web browser (Chrome, Firefox, Safari, or Edge)

## 🚀 Installation

1. **Clone the Repository**

bash

git clone https://github.com/Sagarkrsahu2005/Auth-by-JWT_Tokken

cd auth-by-jwt

2. **Install Dependencies**

bash

npm install express jsonwebtoken cors

3. **Start the Server**

bash

node index.js

4. **Access the Application**
- Open your browser
- Navigate to `http://localhost:3000`

## 📁 Project Structure

```
auth-by-jwt/
├── index.js                 # Main server file
├── package.json            # Project configuration
├── package-lock.json      # Dependency lock file
├── public/               # Static files
│   ├── index.html       # Main HTML file
│   └── style.css       # Stylesheet
└── README.md          # Documentation
```

## 🔌 API Documentation

### Endpoints

#### 1. User Signup
```http
POST /signup
```
- **Purpose**: Create new user account
- **Request Body**:
```json
{
    "username": "user@example.com",
    "password": "securepassword123"
}
```
- **Success Response** (200 OK):
```json
{
    "message": "Signup successful"
}
```
- **Error Response** (400 Bad Request):
```json
{
    "message": "Username already exists"
}
```

#### 2. User Signin
```http
POST /signin
```
- **Purpose**: Authenticate user and generate JWT
- **Request Body**:
```json
{
    "username": "user@example.com",
    "password": "securepassword123"
}
```
- **Success Response** (200 OK):
```json
{
    "message": "Signin successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5..."
}
```
- **Error Response** (401 Unauthorized):
```json
{
    "message": "Invalid credentials"
}
```

#### 3. Get User Info
```http
GET /me
```
- **Purpose**: Retrieve authenticated user information
- **Headers Required**:
  - `Authorization: Bearer <jwt_token>`
- **Success Response** (200 OK):
```json
{
    "username": "user@example.com"
}
```
- **Error Response** (401 Unauthorized):
```json
{
    "message": "Invalid token"
}
```

## 💻 Code Examples

### Frontend Authentication
```javascript
async function signIn(event) {
    event.preventDefault();
    try {
        const response = await axios.post('http://localhost:3000/signin', {
            username: document.getElementById('signin-email').value,
            password: document.getElementById('signin-password').value
        });
        localStorage.setItem('token', response.data.token);
        alert("Sign in successful!");
    } catch (error) {
        alert("Sign in failed: " + error.message);
    }
}
```

### Backend JWT Generation
```javascript
app.post("/signin", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        const token = jwt.sign({ username: user.username }, JWT_SECRET);
        return res.json({
            message: "Signin successful",
            token: token
        });
    }
    return res.status(401).json({ message: "Invalid credentials" });
});
```

## 🔒 Security Considerations

### Current Implementation (Development)
- Passwords stored in plain text
- In-memory user storage
- Hardcoded JWT secret
- Basic input validation

### Production Recommendations
1. **Password Security**
   - Implement bcrypt for password hashing
   - Add password strength requirements
   - Implement password reset functionality

2. **Database Integration**
   - Replace in-memory storage with proper database
   - Implement data persistence
   - Add user sessions management

3. **Enhanced Security**
   - Use environment variables for secrets
   - Implement rate limiting
   - Add request validation
   - Enable HTTPS
   - Implement CSRF protection

## 🔄 Future Improvements

### Short-term
- [ ] Add password hashing
- [ ] Implement email verification
- [ ] Add password reset functionality
- [ ] Enhance input validation

### Long-term
- [ ] Add OAuth integration
- [ ] Implement refresh tokens
- [ ] Add user profile management
- [ ] Implement role-based access control
- [ ] Add activity logging

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
```bash
git checkout -b feature/AmazingFeature
```
3. Commit your changes
```bash
git commit -m 'Add some AmazingFeature'
```
4. Push to the branch
```bash
git push origin feature/AmazingFeature
```
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Express.js documentation and community
- JWT.io for JWT implementation guidelines
- The open-source community for inspiration

## 📧 Contact

Your Name - [@Async_sagar](https://x.com/Async_sagar)

## 🔍 Troubleshooting

### Common Issues

1. **Port Already in Use**
```bash
lsof -i :3000
kill -9 <PID>
```

2. **CORS Issues**
- Check CORS configuration in index.js
- Verify request origin

3. **JWT Token Issues**
- Check token expiration
- Verify JWT_SECRET matches

## 📚 Additional Resources

- [JWT.io](https://jwt.io/)
- [Express.js Documentation](https://expressjs.com/)
- [Node.js Best Practices](https://nodejs.org/en/docs/guides/)

## 👨‍💻 Author

### Sagar Sahu
- Twitter: [@Async_sagar](https://www.linkedin.com/in/sagar-sahu-3ab1a924b/)
- GitHub: [@sagarsahu27](https://github.com/Sagarkrsahu2005)
- LinkedIn: [Sagar Sahu](https://linkedin.com/in/sagarsahu27)

<div align="center">
  <p>
    <strong>If you found this project helpful, please consider giving it a ⭐️</strong>
  </p>
  <p>
    Built with ❤️ by <a href="https://twitter.com/Async_sagar">Sagar</a>
  </p>
</div>