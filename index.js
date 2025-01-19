const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require('cors');

const JWT_SECRET = "sassgr";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const users = [];

function logger(req, res, next) {
    console.log(req.method + " request came to " + req.url);
    next();
}

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", logger, function(req, res) {
    console.log("Signup request received:", req.body);
    const username = req.body.username;
    const password = req.body.password;

    // Check if user already exists
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).json({
            message: "Username already exists"
        });
    }

    users.push({
        username: username,
        password: password
    });

    console.log("Updated users list:", users);
    res.json({
        message: "Signup successful"
    });
});

app.post("/signin", logger, function(req, res) {
    console.log("Signin request received:", req.body);
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET);
        
        return res.json({
            message: "Signin successful",
            token: token
        });
    }

    return res.status(401).json({
        message: "Invalid credentials"
    });
});

app.get("/me", logger, function(req, res) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({
            message: "No authorization header"
        });
    }

    try {
        const token = authHeader.replace('Bearer ', '');
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = users.find(u => u.username === decoded.username);
        
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json({
            username: user.username
        });
    } catch (error) {
        res.status(401).json({
            message: "Invalid token"
        });
    }
});

app.get("/users", logger, (req, res) => {
    console.log("Current users in the system:", users);
    res.json(users);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});