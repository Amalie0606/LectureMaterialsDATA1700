# Cyborg Example
This is a simple database, Spring boot and simple frontend example of a two entity called enhancements.

## Setup 
1. Setup your db e.g. run the SQL script (e.g. in pgAdmin)
2. Open up enhancement-api as its own project
3. update the application.properties to mach your db username and password. 
4. If you want to use the env variable like i use in this example do the following:
   1. Double tap shift to open menu search
   2. Find edit configuration
   3. Open for this project, probably: EnhancementApiApplication
   4. modify -> operating system -> environment variables
   5. add in your variable name and password POSTGRES_PASSWORD=your password

--------- MY NOTES ---------- 
* What is an API?
- An API (Application Programming Interface) is a set of rules that allows 
 different software applications to communicate with each other.
- API = messenger between different programs.

* What is a Controller file in Java and when do you need one?
- When you're working with Spring Boot or another MVC (Model-View-Controller) framework,
  a Controller file is a key part of handling web requests.
- A Controller in Java is a class that handles incoming HTTP requests (like GET, POST, etc.), 
 processes them (sometimes with help from the service or model layers), 
 and returns a response — either data (like JSON) or a view (like an HTML page).
- You need a controller whenever your Java app is interacting with a web client.

* What is an API Application?
- An API Application is an app that's designed to provide data or services to other applications 
 or systems through APIs — not directly to users through a UI like a regular website.
- Think of it like a backend service that handles requests and returns responses, 
- often in JSON format, without needing a web page or visual interface.

* What is JSON?
- JSON stands for JavaScript Object Notation.
- Readable format for storing and exchanging data, 
  especially between a client (like a browser or mobile app) and a server (like a backend API).
- Basic example: 

{
"name": "Selda",
"age": 3,
"isDog": true,
"skills": ["Hunting", "Cuddling", "Heat exchange"]
}

* How does a database connect to an API application?
- An API (Application Programming Interface) is the middle layer between your frontend
 (e.g., a web app or mobile app) and your backend data (often in a database). More closely visual representation:

 [Frontend] → (makes request) → [API] → (queries) → [Database]
  ↑                           ↓
  (sends back data in JSON format)

* Possibility to build apps in this way?
- Yes — if you're building a backend for a mobile or web app
- You’ll still need something to consume that API (like a frontend or device). 
  On its own, an API app doesn’t have a user interface.