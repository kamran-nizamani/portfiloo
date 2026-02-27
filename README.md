# Kamran Khan's Portfolio - Express.js Edition

A modern, full-stack portfolio website built with **Node.js** and **Express.js**, featuring a dynamic contact form with server-side handling.

## 📁 Project Structure

```
portfolio-main/
├── node_modules/                    # Project dependencies (auto-generated on npm install)
├── public/                          # Static files served to clients
│   ├── index.html                   # Main portfolio page
│   ├── cv.html                      # CV page
│   ├── styles.css                   # CSS styles
│   ├── script.js                    # Frontend JavaScript (deprecated - inline in HTML)
│   ├── portfilo pic.png             # Profile picture
│   ├── resume.pdf                   # Resume document
│   └── CNAME                        # Domain configuration
├── server.js                        # Express server entry point
├── package.json                     # Project metadata and dependencies
├── package-lock.json                # Locked dependency versions (auto-generated)
├── .gitignore                       # Git ignore rules
└── README.md                        # This file
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd c:\Users\Kamran\Desktop\portfil\portfolio-main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   (This requires `nodemon` - automatically installed as a dev dependency)

   Or for production:
   ```bash
   npm start
   ```

4. **Open in browser:**
   - Navigate to `http://localhost:3000`

## 📦 Dependencies

### Production Dependencies
- **express** (^4.18.2) - Web application framework for Node.js

### Development Dependencies
- **nodemon** (^3.0.1) - Auto-restart server on file changes

Install additional dependencies using:
```bash
npm install <package-name>
```

## 🔧 Available Scripts

```bash
# Start production server
npm start

# Start development server with auto-reload
npm run dev
```

## 🌐 Routes

### Frontend Routes (Served as static files)
- `/` - Portfolio homepage
- `/cv.html` - CV page
- All static assets in `/public` folder

### API Routes (Backend)
- **POST** `/contact` - Handle contact form submissions
  - **Expected Data:**
    ```json
    {
      "name": "Your Name",
      "email": "your.email@example.com",
      "subject": "Subject Line",
      "message": "Your message here"
    }
    ```
  - **Success Response:**
    ```json
    {
      "success": true,
      "message": "Thank you for your message! I will get back to you soon.",
      "data": {
        "name": "Your Name",
        "email": "your.email@example.com",
        "subject": "Subject Line",
        "timestamp": "2026-02-26T..."
      }
    }
    ```
  - **Error Response:**
    ```json
    {
      "success": false,
      "message": "All fields are required"
    }
    ```

- **GET** `/api/health` - Health check endpoint
  - **Response:**
    ```json
    {
      "message": "Server is running"
    }
    ```

## 📝 Features

✅ **Static File Serving** - All frontend files served from `/public` folder  
✅ **Contact Form API** - POST endpoint for form submissions  
✅ **Form Validation** - Server-side validation of contact form  
✅ **Console Logging** - Contact submissions logged to console with timestamp  
✅ **Error Handling** - Comprehensive error handling and JSON responses  
✅ **Production Ready** - Clean code, best practices implemented  
✅ **CORS Ready** - Can be extended for CORS support  

## 🔄 Contact Form Flow

1. **User submits form** via the contact section on the homepage
2. **Frontend validates** form data
3. **JavaScript sends POST request** to `/contact` endpoint with JSON data
4. **Server receives request** and validates form data on the backend
5. **Server logs** the contact information to the console
6. **Server responds** with success/error message
7. **Frontend displays** success/error alert to user
8. **Form is reset** on successful submission

### Console Output Example:
```
========================================
📧 NEW CONTACT FORM SUBMISSION
========================================
Name:    John Doe
Email:   john@example.com
Subject: Project Inquiry
Message: I'm interested in your work...
Date:    2/26/2026, 3:45:30 PM
========================================
```

## 🛡️ Security Considerations

- **Form Validation** - All fields validated server-side
- **Error Messages** - No sensitive information in error responses
- **Environment Variables** - Ready for `.env` file integration
- **HTTPS Ready** - Can be deployed with SSL/TLS

## 🚀 Deployment

### Environment Variables
Create a `.env` file for production settings:
```
PORT=3000
NODE_ENV=production
```

### Deployment Platforms
- **Heroku** - Easy deployment with Heroku CLI
- **Vercel** - Serverless deployment
- **DigitalOcean** - Traditional hosting
- **AWS** - EC2 or Elastic Beanstalk
- **Render** - Modern cloud platform

## 📋 Backend Enhancements (Optional)

Future improvements could include:
- Email service integration (nodemailer, SendGrid)
- Database storage (MongoDB, PostgreSQL)
- Rate limiting for contact form
- Admin dashboard for managing submissions
- CORS configuration for API access
- Authentication system

## 🎨 Frontend

The frontend remains unchanged from the original static version:
- Modern glassmorphism design
- Animated particle background
- Smooth scrolling
- Responsive layout
- Interactive elements with hover effects

## 📧 Contact

Email: kamrannizamani35@gmail.com  
GitHub: [@kamran-nizamani](https://github.com/kamran-nizamani)

## 📄 License

MIT License - Feel free to use this project as a starting point for your portfolio.

---

**Built with ❤️ using Node.js and Express.js**
