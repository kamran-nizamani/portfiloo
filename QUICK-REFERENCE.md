# Quick Reference - Express Portfolio Setup

## 🎯 What Changed

### Original Structure
```
portfolio-main/
├── index.html
├── styles.css
├── script.js
├── cv.html
├── resume.pdf
├── portfilo pic.png
└── CNAME
```

### New Structure (Express.js)
```
portfolio-main/
├── public/                    ← ALL static files moved here
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── cv.html
│   ├── resume.pdf
│   ├── portfilo pic.png
│   └── CNAME
├── server.js                 ← Express server
├── package.json              ← Dependencies
├── README.md                 ← Documentation
└── SETUP-GUIDE.md           ← This guide
```

---

## 📋 Generated Files

1. **`server.js`** - Main Express application
   - Serves static files from `/public`
   - Handles form submissions at POST `/contact`
   - Logs form data to console
   - Runs on port 3000

2. **`package.json`** - Project configuration
   ```json
   {
     "name": "kamran-portfolio",
     "version": "1.0.0",
     "main": "server.js",
     "scripts": {
       "start": "node server.js",
       "dev": "nodemon server.js"
     },
     "dependencies": {
       "express": "^4.18.2"
     },
     "devDependencies": {
       "nodemon": "^3.0.1"
     }
   }
   ```

3. **`README.md`** - Full documentation
4. **`SETUP-GUIDE.md`** - Detailed setup instructions
5. **Updated `public/index.html`** - Form now POSTs to server

---

## 🚀 Quick Start (3 Steps)

### Step 1: Install Dependencies
```bash
cd c:\Users\Kamran\Desktop\portfil\portfolio-main
npm install
```

### Step 2: Start Server
```bash
npm run dev
```

### Step 3: Open Browser
```
http://localhost:3000
```

---

## 🔄 How It Works

### Form Submission Flow
1. User fills contact form and clicks "Send Message"
2. JavaScript prevents default behavior
3. Collects form data (name, email, subject, message)
4. Sends POST request to `/contact` endpoint with JSON
5. Server receives request at `POST /contact`
6. Server validates all fields
7. Server logs to console:
   ```
   ========================================
   📧 NEW CONTACT FORM SUBMISSION
   ========================================
   Name:    John Doe
   Email:   john@example.com
   Subject: Hello
   Message: Great portfolio!
   Date:    2/26/2026, 3:45:30 PM
   ========================================
   ```
8. Server sends success response as JSON
9. Frontend shows success message
10. Form resets automatically

---

## 🍃 Middleware Explanation

```javascript
// URL-encoded form data (like traditional HTML forms)
app.use(express.urlencoded({ extended: true }));

// JSON request bodies
app.use(express.json());

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));
```

---

## 📊 Npm Scripts

| Command | Purpose |
|---------|---------|
| `npm start` | Start production server |
| `npm run dev` | Start development with auto-reload |
| `npm install` | Install dependencies |

---

## 🔌 API Endpoints

### GET / (or any path)
- Serves `index.html` from `/public`
- All CSS, JS, images from `/public`

### POST /contact
- **Input:**
  ```json
  {
    "name": "string",
    "email": "string",
    "subject": "string",
    "message": "string"
  }
  ```
- **Output (Success):**
  ```json
  {
    "success": true,
    "message": "Thank you for your message! I will get back to you soon.",
    "data": {
      "name": "John",
      "email": "john@example.com",
      "subject": "Hello",
      "timestamp": "2026-02-26T15:45:30.000Z"
    }
  }
  ```

### GET /api/health
- **Output:**
  ```json
  {
    "message": "Server is running"
  }
  ```

---

## 📝 Form Input Names

Updated in `public/index.html`:
```html
<input type="text" name="name" ...>
<input type="email" name="email" ...>
<input type="text" name="subject" ...>
<textarea name="message" ...></textarea>
```

---

## ✨ Key Features

✅ Express.js server on port 3000  
✅ Static files from `/public` folder  
✅ POST endpoint for contact form  
✅ Form validation  
✅ Console logging of submissions  
✅ JSON responses  
✅ Error handling  
✅ Development auto-reload with nodemon  
✅ Production-ready code  
✅ Original design preserved  

---

## 🔐 Default Configuration

- **Port:** 3000
- **Static Folder:** `/public`
- **Server Entry:** `server.js`
- **Environment:** Development (auto-reload enabled)

---

## 📦 No Additional Packages Needed

Just express and nodemon! Simple, clean, and minimal.

```bash
# Install
npm install

# That's it!
```

---

## 🎓 Learning Resources

- Express Documentation: https://expressjs.com/
- Node.js Guide: https://nodejs.org/docs/
- REST API Best Practices
- Form Submission with Fetch API

---

## ✅ Verification

Test your setup:
1. Run `npm install` - should complete without errors
2. Run `npm run dev` - should show "Server running on http://localhost:3000"
3. Open browser to `http://localhost:3000` - should load portfolio
4. Fill contact form - should log to console and show success
5. Check terminal - should see formatted form data

---

## 🚨 Common Issues

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Kill process or change port |
| Dependencies fail | Run `npm cache clean --force` |
| Form not submitting | Check browser console (F12) |
| Files not loading | Verify files in `/public` folder |

---

**You're ready to go! Happy coding! 🚀**
