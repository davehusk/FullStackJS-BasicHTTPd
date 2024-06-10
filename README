# QAP2 - Full Stack JS

## Author
Dave Husk

Time it took: About an Hour once I started

## Project Overview
This project is part of the Quantitative Assessment Practice #2 (QAP2) for the Full Stack JavaScript (Node.js) course. The goal of this project is to build a multi-route HTTP server using Node.js, log server activities, manage project files with GitHub, and provide a seamless user experience with enhanced HTML pages.

## Project Structure
```
project/
│
├── views/
│   ├── about.html
│   ├── contact.html
│   ├── products.html
│   ├── index.html
│   ├── subscribe.html
│   ├── daily.html
│
├── server.js
├── logger.js
├── dailyInfo.js
└── .gitignore
```

## Tasks

### Task 1: Multi-Route HTTP Server
- **Objective**: Create a server using Node.js that can handle multiple routes.
- **Steps**:
  1. Create a server using `http.createServer()`.
  2. Handle different routes (`/about`, `/contact`, `/products`, etc.).
  3. Log messages to the console for each route accessed.
  4. Ensure the server listens on the correct port.

### Task 2: Serve HTML Files
- **Objective**: Serve HTML files corresponding to the routes.
- **Steps**:
  1. Create HTML files for each route and store them in a `views` folder.
  2. Use the `fs` module to read these HTML files.
  3. Send the HTML content as the server's response.

### Task 3: Capture and Log Events
- **Objective**: Identify and log specific events to the console.
- **Steps**:
  1. Identify events to capture (HTTP status codes, errors, etc.).
  2. Instantiate an `EventEmitter` class.
  3. Use `myEmitter.on()` and `myEmitter.emit()` to handle and fire events.
  4. Extend functionality to handle and log more events as needed.

## Bonus Tasks (Optional)
- **Log to Disk**: Enhance logging to write to daily files on disk.
- **Daily Info Route**: Create a route to display daily information (e.g., current date and time).
- **Menu System**: Add a menu on each page for easy navigation.

## Task 4: GitHub Project Management
- **Objective**: Manage project files using GitHub.
- **Steps**:
  1. Save all project files to a GitHub repository.
  2. Exclude unnecessary files using `.gitignore`.
  3. Utilize git branching and merging for feature development.

## Enhanced HTML Files
- **Dark Mode**: Applied dark mode using the Darkly theme from Bootswatch.
- **Animations**: Included CSS animations for a dynamic user experience.
- **Navigation Menu**: Added a consistent navigation menu on each page for easy access to different routes.

### Sample HTML File (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - Dave Husk</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.5.2/darkly/bootstrap.min.css">
    <style>
        .fade-in {
            animation: fadeIn 2s ease-in;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    </style>
</head>
<body>
    <div class="container fade-in">
        <header class="my-4">
            <h1>Home</h1>
        </header>
        <main>
            <p>Welcome to the home page of Dave Husk's project. Navigate through the different sections to learn more.</p>
        </main>
        <nav class="mt-4">
            <a href="/about" class="btn btn-secondary">About</a>
            <a href="/contact" class="btn btn-secondary">Contact</a>
            <a href="/products" class="btn btn-secondary">Products</a>
            <a href="/subscribe" class="btn btn-secondary">Subscribe</a>
            <a href="/daily" class="btn btn-secondary">Daily Info</a>
        </nav>
    </div>
</body>
</html>
```

## Custom AI Model
I utilized a custom AI model to generate and structure my project, demonstrating an application of ontological thinking. The model facilitated the development process by providing insights and guidance based on ontological principles, ensuring a coherent and unified approach throughout the project.

## Independence Statement
I did not require any assistance from anyone in completing this project. All work is my own, and I independently researched, implemented, and refined the project components.

## License
This project is licensed under the MIT License.
