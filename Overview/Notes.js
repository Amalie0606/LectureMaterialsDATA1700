
/* --------------------------------------- OVERVIEW ---------------------------------------------------
                                       Exam date: 22 May
                                    DATA1700 Learning outcomes

- Acquire basic knowledge of web servers and develop skills
- Develop insight into full-stack web programming
- Develop skills in and insight into the programming of dynamic web pages that communicate with a database
- Gain knowledge of information security in web design

* 1. Knowledge *
1.1 Explaining the principles behind web architecture and client/server architecture
1.2 Explaining different security challenges and how they are dealt with
1.3 Explaining how to maintain state using sessions and cookies
1.4 Explain the purpose with and functioning of generic data types
* 2. Skills *
2.1 Developing dynamic web pages by maintaining high-level user-friendliness and accessibility
2.2 Linking dynamic web pages to a relational database
2.3 Utilise Java Collections
2.4 Understanding the functioning and use of recursion
* 3 General competence *
3.1 Developing object-oriented program structures in a web architecture
3.2 Developing an extensive dynamic website with persistent data storage

TENTATIVE SUGGESTIONS
1. Knowledge:
1.1 Principles behind Web Architecture & Client–Server Architecture:
* Client–Server model:
- Clients (browsers, mobile apps) send HTTP(S) requests.
- Servers receive requests, process them (e.g. run business logic, query databases),
  and return responses (HTML, JSON, files).
* Multi‑tier/Web architecture:
- Presentation tier (UI in browser)
- Application tier (web server, application logic)
- Data tier (relational/NoSQL database)
- Statelessness of HTTP: each request is independent; state must be managed explicitly
  (see sessions/cookies below).
* REST principles (often used in modern web APIs): resources identified by URLs,
  uniform interface (GET/POST/PUT/DELETE), stateless interactions.

1.2. Security Challenges & Mitigations:
* Cross‑Site Scripting (XSS)
- Risk: attacker injects malicious scripts into pages viewed by other users.
- Mitigation: always escape or sanitize user‑supplied data before inserting into the DOM;
  use Content Security Policy (CSP).
* SQL Injection
- Risk: attacker crafts input that alters your SQL queries.
- Mitigation: use parameterized queries (prepared statements) or ORM frameworks.
* Cross‑Site Request Forgery (CSRF)
- Risk: attacker tricks a logged‑in user’s browser into submitting unwanted requests.
- Mitigation: include anti‑CSRF tokens in forms, require same‑site cookies, check Origin/Referer headers.
* Insecure Direct Object References (IDOR)
- Risk: users access data they shouldn’t by tweaking identifiers in URLs.
- Mitigation: enforce authorization checks on every request.
* Secure Transport
- Always use HTTPS to protect data in transit and set Strict-Transport-Security.

1.3. Maintaining State with Sessions & Cookies
* Cookies
- Small key–value pairs stored by browser, sent automatically on each request to matching domain/path.
- Use flags: HttpOnly (not accessible to JavaScript), Secure (HTTPS only), SameSite (CSRF protection).
* Sessions
- Server generates a unique session ID and stores associated state (e.g. user ID, cart contents) in memory,
  database, or cache.
- Client receives only the session ID in a cookie; server trusts its own store.
* Flow
- 1. User logs in → server creates session, sets Set-Cookie: JSESSIONID=XYZ.
- 2. Browser sends Cookie: JSESSIONID=XYZ on subsequent requests.
- 3. Server retrieves session data via that ID.

1.4. Purpose & Functioning of Generic Data Types
* Generics (in Java) enable you to write classes/methods that operate on types specified at use‑time, providing:
- Compile‑time type safety (no need for casts)
- Reusability (one implementation works for many types)
  Example:
  // A generic Box class
  public class Box<T> {
  private T value;
  public void set(T v) { value = v; }
  public T get() { return value; }
  }

  Box<String> nameBox = new Box<>();
  nameBox.set("Alice");        // only Strings allowed
  String name = nameBox.get(); // no cast needed

2. Skills:
2. 1. Developing Dynamic Web Pages with User‑Friendliness & Accessibility
* Dynamic content via server‑side templates (JSP, Thymeleaf) or client‑side JS (jQuery, React).
* Accessibility (a11y):
- Use semantic HTML (<header>, <nav>, <main>, <button>).
- Provide alt text on images, labels for form controls.
- Ensure keyboard navigation and appropriate ARIA roles if needed.
* Progressive enhancement: ensure core functionality works without JS, then enhance.

2. 2. Linking Dynamic Pages to a Relational Database
- JDBC (Java Database Connectivity) for direct SQL:
  Connection conn = DriverManager.getConnection(url, user, pass);
  PreparedStatement ps = conn.prepareStatement
  ("SELECT * FROM users WHERE id = ?");
  ps.setInt(1, userId);
  ResultSet rs = ps.executeQuery();

* ORM frameworks (Hibernate, JPA) to map Java objects to database tables and manage queries
 via entity classes and repositories.

2. 3. Utilizing Java Collections
- Key interfaces: List, Set, Map, Queue.
  Examples:
  List<String> names = new ArrayList<>();
  names.add("Alice");
  Set<Integer> ids = new HashSet<>(Arrays.asList(1,2,3));
  Map<String, User> lookup = new HashMap<>();
  lookup.put("alice", new User(...));

- Choose impl based on need (e.g. LinkedList for frequent inserts, ArrayList for random access).

2. 4. Understanding Recursion
* Definition: a method that calls itself with a smaller problem until a base case.
  Example (factorial):
  public int factorial(int n) {
  if (n <= 1) return 1; // base case
  return n * factorial(n - 1); // recursive step
  }

- Use cases: tree traversal, divide‑and‑conquer algorithms (quick‑sort, merge‑sort), graph searches (DFS).

3. General Competence:
3. 1. Developing Object‑Oriented Program Structures in a Web Architecture
* MVC pattern:
- Model: domain/data objects (e.g. User, Product).
- View: templates or components that render HTML/JS.
- Controller: handles HTTP requests, updates model, selects view.
* Layering:
- Controller layer (Spring MVC controllers)
- Service layer (business logic)
- Repository/DAO layer (data access)

3. 2. Developing an Extensive Dynamic Website with Persistent Data Storage
* Combine all above:
- Use a framework (e.g. Spring Boot) to wire MVC, DI, security.
- Store state in a relational database (MySQL, PostgreSQL), accessed via JPA/Hibernate.
- Manage user sessions for login flows.
- Serve dynamic pages that adapt to user roles, data in database.
- Implement caching, pagination, search, and ensure accessibility and performance optimizations.

* Tasks That Require an Internet Connection (to actually run or test):
* Developing Dynamic Web Pages
- If you’re using client-side libraries like React or jQuery, setting up or running them
  typically involves downloading from CDNs or npm/yarn — which needs internet.
- Also, loading external fonts, APIs, or accessibility validation tools may require online resources.
* Linking to a Relational Database
- JDBC and ORM frameworks require:
- A running database server (MySQL/PostgreSQL).
- Network access if hosted remotely.
- Internet access for pulling drivers, updating dependencies, or using online ORMs
  (e.g. Spring Data JPA with Maven/Gradle) if not cached locally.
* Developing an Extensive Dynamic Website
- To deploy or test a complete site, you’d need:
- Internet (or intranet) access to databases, auth providers, and external services
  (e.g. payment gateways, Google APIs).
- Online frameworks, security libraries, or asset delivery (e.g. Bootstrap, Vue/React, JS libraries).

* Tasks that can be done without internet:
* 1.1 Web Architecture
- All conceptual. Understanding tiers, REST, and statelessness requires no connectivity.
* 1.2 Security Challenges
- You can explain and write defenses for XSS, CSRF, SQLi, etc., without running code
  or needing access to external services.
* 1.3 Sessions & Cookies
- Understanding the flow and implementation is offline-friendly.
  You don’t need to hit a server to describe how cookies/session IDs work.
* 1.4 Generics
- Fully offline — generics and type safety are built into the language and compiler.
* 2.3 Java Collections
- You can implement, test, and reason about List, Set, Map, etc., offline — no dependency on external tools.
* 2.4 Recursion
- 100% local/mental problem-solving. You can trace and implement recursive algorithms on paper or in an IDE.
* 3.1 MVC + OOP in Web Context
- You can sketch out MVC structure and class responsibilities without needing to run a server.

--------------------------------------------------------------------------------------------------------
* ABOUT JAVASCRIPT LANGUAGE
- Java is a statically-typed language with rigid syntax,
  while Javascript is a dynamically-typed language with a more flexible syntax.
- JavaScript is a dynamically typed object-oriented scripting language that does not need to be set up or installed,
  unlike Java, because it runs within a computer's browser.
- Similar to workflow events
- JavaScript is indeed an object-oriented language, albeit with a unique approach.
  Its prototypal inheritance, combined with modern ES6 class syntax,
  supports core OOP principles such as encapsulation, inheritance, polymorphism, and abstraction.
- Languages such as C, Assembly, Haskell, and SQL are examples of non-OOP languages.
* Size of the Language: In terms of language size, JavaScript has a relatively small core syntax
 compared to some other languages. However, its capabilities expand significantly
 through the use of libraries and frameworks.

* WHERE TO BEST PRACTICE *
* In modern development, it’s considered better practice to keep HTML, CSS, and JavaScript
  separate for these reasons: Cleaner code, Easier to maintain, Better separation of concerns
- In HTML refer like this: <script src="filename.js"></
- This waits until the page is fully loaded before running the script. script>
* Best Practices:
- 1. Place <script src="..."> at the end of <body>
- So the HTML elements are already loaded before the script runs.
- 2. Or, if placing it in the <head>, use the defer attribute: <script src="script.js" defer></script>
- This waits until the page is fully loaded before running the script.

* INTRODUCTION * (W3Schools)
- JavaScript to program the behavior of web pages, in conjunction with HTML + CSS
- Web programming language: can update and change HTML, CSS, calculate, manipulate and validate data.
* Change HTML Content: JS HTML method getElementById().
  Example: document.getElementById("demo").innerHTML = "Hello JavaScript";
* Change style of an HTML element/CSS.
  Example: document.getElementById("demo").style.fontSize = "35px";
* Hide HTML elements.
  Example: document.getElementById("demo").style.display = "none";
* Show HTML elements.
  Example: document.getElementById("demo").style.display = "block";

WHERE TO
- In HTML, JavaScript code is inserted between <script> and </script> tags.
 Example:
 <script>
 document.getElementById("demo").innerHTML = "My First JavaScript";
 </script>

* Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.
  Example: Buttons clicked: https://www.w3schools.com/js/js_whereto.asp
* External JavaScript.
  Example:
  function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
  }

- JavaScript files have the file extension .js.
* To use an external script, put the name of the script file in the src (source) attribute of a <script> tag:
  Example: <script src="myScript.js"></script>
* External JavaScript Advantages
- It separates HTML and code
- It makes HTML and JavaScript easier to read and maintain
- Cached JavaScript files can speed up page loads
* To add several script files to one page  - use several script tags:
  Example:
  <script src="myScript1.js"></script>
  <script src="myScript2.js"></script>

OUTPUT
* JavaScript Display Possibilities:
- Writing into an HTML element, using innerHTML or innerText
- Writing into the HTML output using document.write()
- Writing into an alert box, using window.alert()
- Writing into the browser console, using console.log()
* Using innerHTML - Use the document.getElementById(id) method
* Using innerText - Use the document.getElementById(id) method
* Using document.write() - For testing purposes
* Using window.alert() - You can use an alert box to display data
* Using console.log() - For debugging purposes
- https://www.w3schools.com/js/js_output.asp

STATEMENTS
- JavaScript statements are composed of: Values, Operators, Expressions, Keywords, and Comments.
- Example: document.getElementById("demo").innerHTML = "Hello Dolly.";
- The statements are executed, one by one, in the same order as they are written.
- Semicolons separate JavaScript statements.
- When separated by semicolons, multiple statements on one line are allowed
* JavaScript Code Blocks - Statements are grouped together in JavaScript functions:
- Example
  function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
  }

- JavaScript keywords are used to identify actions to be performed.
* JavaScript Keywords and descriptions:
  var --> Declares a variable
  let --> Declares a block variable
  const --> Declares a block constant
  if --> Marks a block of statements to be executed on a condition
  switch --> Marks a block of statements to be executed in different cases
  for --> Marks a block of statements to be executed in a loop
  function --> Declares a function
  return --> Exits a function
  try --> Implements error handling to a block of statements

SYNTAX
- Fixed values are called Literals.
* Variable values are called Variables - used to store data values.
- JavaScript uses the keywords var, let and const to declare variables.
- An equal sign is used to assign values to variables.
 1. Numbers are written with or without decimals
 2. Strings are text, written within double or single quotes
- JavaScript uses arithmetic operators ( + - * / ) to compute values.
- JavaScript uses an assignment operator ( = ) to assign values to variables.
- An expression is a combination of values, variables, and operators, which computes to a value.
* JavaScript Identifiers / Names
- Identifiers are used to name variables and keywords, and functions.
- A JavaScript name must begin with: A letter (A-Z or a-z), A dollar sign ($) Or an underscore (_)
- All JavaScript identifiers are case-sensitive.
- NB! Hyphens are not allowed in JavaScript. They are reserved for subtractions (first-name)

VARIABLES
- Variables are Containers for Storing Data (values)
- Can be declared in 4 ways: Automatically, Using var, Using let, Using const
- It is considered good programming practice to always declare variables before use.
- Example (just switch out with let and const, can also be mixed:
  var x = 5;
  var y = 6;
  var z = x + y;

* When to Use var, let, or const?
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.
- Just like in algebra, variables hold values and is used in expressions.
- variables must be identified with unique names (identifiers)
- General rules for constructing unique identifiers: must begin with a letter, case-sensitive, no keywords.
- Equal sign (=) is an "assignment" operator, not an "equal to" operator (not algebra)
- The "equal to" operator is written like == in JavaScript.
- Text values are called text strings. Strings are written inside double or single quotes.
* Declaring a JavaScript Variable:
  Example:
   var carName;
   or:
   let carName;
* To assign a value to the variable, use the equal sign:
  Example:
  carName = "Volvo";
  You can also assign a value to the variable when you declare it:
  let carName = "Volvo";

- We "output" the value inside an HTML paragraph with id="demo":
  Example
  <p id="demo"></p>

  <script>
  let carName = "Volvo";
  document.getElementById("demo").innerHTML = carName;
  </script>

- It's a good programming practice to declare all variables at the beginning of a script.
- You can declare many variables in one statement.
  Example:
  let person = "John Doe", carName = "Volvo", price = 200;

LET
- Variables declared with let:
- Have Block Scope
- Must be Declared before use
- Cannot be Redeclared in the same scope (variables defined with var can be redeclared)

CONST
- Variables defined with const:
- cannot be Redeclared
- cannot be Reassigned
- have Block Scope
* Use const when you declare: A new Array, A new Object, A new Function, A new RegExp
- Const does not define a constant value. It defines a constant reference to a value.

OPERATORS
- Javascript operators are used to perform different types of mathematical and logical computations.
- The Assignment Operator = assigns values. Example: let x = 10;
- The Addition Operator + adds values.
- The Multiplication Operator * multiplies values.
- The Comparison Operator > compares values.

* Types of JavaScript Operators:
- Arithmetic Operators --> used to perform arithmetic (math) on numbers.
- Assignment Operators
- Comparison Operators
- String Operators
- Logical Operators
- Bitwise Operators
- Ternary Operators
- Type Operators
* Arithmetic Operators --> Description
+ 	Addition
- 	Subtraction
* 	Multiplication
** 	Exponentiation (ES2016)
/ 	Division
% 	Modulus (Division Remainder)
++ 	Increment
-- 	Decrement

* Assignment operators assign values to JavaScript variables.
- The Addition Assignment Operator (+=) adds a value to a variable.
* JavaScript Comparison Operators
* Operator --> Description
  == --> equal to
  === --> equal value and equal type
  != --> not equal
  !== --> not equal value or not equal type
  > --> greater than
  < --> less than
  >= --> greater than or equal to
  <= --> less than or equal to
  ? --> ternary operator

* JavaScript String Comparison
  Example:
  let text1 = "A";
  let text2 = "B";
  let result = text1 < text2;

* JavaScript Logical Operators
* Operator --> Description
  && --> logical and
  || --> logical or
  ! --> logical not

* JavaScript Type Operators
* Operator --> Description
- typeof --> Returns the variable type
- instanceof --> Returns true if an object is an instance of an object type

ARITHMETIC
- Operator Precedence:
- Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
- And (as in school mathematics) the precedence can be changed by using parentheses.
- When using parentheses, the operations inside the parentheses are computed first.
- When many operations have the same precedence (like addition and subtraction or multiplication and division),
  they are computed from left to right.

ASSIGNMENT
- The = Operator: The Simple Assignment Operator assigns a value to a variable.
- The += Operator: The Addition Assignment Operator adds a value to a variable.
- The -= Operator: The Subtraction Assignment Operator subtracts a value from a variable.
- The *= Operator: The Multiplication Assignment Operator multiplies a variable.
- The **= Operator: The Exponentiation Assignment Operator raises a variable to the power of the operand.
- The /= Operator: The Division Assignment Operator divides a variable.
- The %= Operator: The Remainder Assignment Operator assigns a remainder to a variable.
- The <<= Operator: The Left Shift Assignment Operator left shifts a variable.
- The >>= Operator: The Right Shift Assignment Operator right shifts a variable (signed).
- The >>>= Operator: The Unsigned Right Shift Assignment Operator right shifts a variable (unsigned).
- The &= Operator: The Bitwise AND Assignment Operator does a bitwise AND operation on two operands and assigns the result to the variable.
- The |= Operator: The Bitwise OR Assignment Operator does a bitwise OR operation on two operands and assigns the result to the variable.
- The ^= Operator: The Bitwise XOR Assignment Operator does a bitwise XOR operation on two operands and assigns the result to the variable.
- The &&= Operator: The Logical AND assignment operator is used between two values. If the first value is true, the second value is assigned.
- The ||= Operator: The Logical OR assignment operator is used between two values. If the first value is false, the second value is assigned.
- The ??= Operator: The Nullish coalescing assignment operator we used between two values. If the first value is undefined or null, the second value is assigned.

DATA TYPES
* JavaScript has 8 Datatypes: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object, The Object Datatype
- The object data type can contain both built-in objects, and user defined objects:
- Built-in object types can be: objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.
- A JavaScript variable can hold any type of data.
- JavaScript evaluates expressions from left to right. Different sequences can produce different results.
- JavaScript Types are Dynamic. This means that the same variable can be used to hold different data types.
* JavaScript Strings are written with quotes. You can use single or double quotes.
* JavaScript Booleans can only have two values: true or false.
* JavaScript Arrays are written with square brackets. Array items are separated by commas.
* JavaScript Objects are written with curly braces {}.
- Object properties we write as name:value pairs, separated by commas.
* The typeof Operator we use to find the JavaScript variable type.
- The typeof operator returns the variable type or an expression.

FUNCTIONS
* A JavaScript function is a block of code designed to perform a particular task.
- The function is executed when "something" invokes it (calls it).
  Example
  // Function to compute the product of p1 and p2
  function myFunction(p1, p2) {
  return p1 * p2;
  }

* Syntax: function is defined with the function keyword, followed by a name, followed by parentheses ().
- Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
- The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...)
- The code to be executed, by the function, is placed inside curly brackets: {}
- Function parameters are listed inside the parentheses () in the function definition.
- Function arguments are the values received by the function when it is invoked.
- Inside the function, the arguments (the parameters) behave as local variables.
* Function Invocation: The code inside the function will execute when "something" invokes (calls) the function:
- When an event occurs (when a user clicks a button)
- When it is invoked (called) from JavaScript code
- Automatically (self invoked)
* Function Return: When JavaScript reaches a return statement, the function will stop executing.
- If THE function was invoked from a statement, JavaScript will "return"
  to execute the code after the invoking statement.
- Functions often compute a return value. The return value is "returned" back to the "caller":
- With functions you can reuse code.
- You can write code that can be used many times.
- You can use the same code with different arguments, to produce different results.
* The () Operator: The () operator invokes (calls) the function.
* Functions Used as Variable Values: Functions can be used the same way as you use variables,
  in all types of formulas, assignments, and calculations.
* Local variables: Variables declared within a JavaScript function, become LOCAL to the function.
- Local variables can only be accessed from within the function.

OBJECTS
- Objects (dog) have Properties (values) (Example: dog.color = blackAndTan) and Methods (Example: dog.run()).
* JavaScript variables are containers for data values.

- This code assigns a simple value (dachshund) to a variable named dog:
  Example
  let dog = "Dachshund";
* JavaScript Objects: are variables too. But objects can contain many values.
- It is a common practice to declare objects with the const keyword.
- This code assigns many values (Dachshund, short, clownish) to an object named dog:
  Example
  const dog = {type:"Dachshund", legs:"short", personality:"clownish"};

* Define a JavaScript Object:
- Using an Object Literal
- Using the new Keyword
- Using an Object Constructor
- Object Literal: An object literal is a list of name:value pairs inside curly braces {}.
  Example: {firstName:"Selda", lastName:"Hobbit", age:3, eyeColor:"brown"}
- Name:value pairs are also called key:value pairs.
- Object literals are also called object initializers.
* Creating a JavaScript Object (4 properties):
  Example: const dog = {firstName:"Selda", lastName:"Hobbit", age:3, eyeColor:"brown"};
- Spaces and line breaks are not important. An object initializer can span multiple lines.
* Using the new Keyword: new Object()
  Example:
  // Create an Object
  const dog = new Object();

  // Add Properties
  dog.firstName = "Selda";
  dog.lastName = "Hobbit";
  dog.age = 3;
  dog.eyeColor = "brown";

* Object Properties: The named values, in JavaScript objects, are called properties.
* Accessing Object Properties in 2 ways:
- objectName.propertyName
- objectName["propertyName"]
  Example: dog.lastName; OR person["lastName"];

* JavaScript Object Methods: are actions that can be performed on objects.
- Methods are function definitions stored as property values.
* Property --> Property Value
  firstName -->	Selda
  lastName --> Hobbit
  age --> 3
  eyeColor --> brown
  fullName --> function() {return this.firstName + " " + this.lastName;}

  Example:
  const dog = {
  firstName: "Selda",
  lastName : "Hobbit",
  id       : 2310,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

- In the above example this refers to the dog object.
- this.firstName --> firstName property of dog.
- this.lastName --> lastName property of dog
- Objects are containers for Properties and Methods.
- Properties are named Values.
- Methods are Functions stored as Properties.
- Properties can be primitive values, functions, or even other objects.

* Objects are *King* In JavaScript, almost "everything" is an object:
- Objects are objects
- Maths are objects
- Functions are objects
- Dates are objects
- Arrays are objects
- Maps are objects
- Sets are objects
- All JavaScript values, except primitives, are objects.
* JavaScript Primitives: A primitive value is a value that has no properties or methods.
- A primitive data type is data that has a primitive value.
- JavaScript defines 7 types of primitive data types: string, number, boolean, null, undefined, symbol, bigint
- Primitive values are immutable (they are hardcoded and cannot be changed).
- JavaScript Objects are mutable: They are addressed by reference, not by value.
  Example: const x = person;
- The object x is not a copy of person. The object x is person.
- The object x and the object person share the same memory address.
- Any changes to x will also change person:

OBJECT PROPERTIES (NOT FINISHED)
- An Object is an Unordered Collection of Properties
- Properties are the most important part of JavaScript objects.
- Properties can be changed, added, deleted, and some are read only.
* Accessing JavaScript Properties:
* Adding New Properties:
* Deleting Properties:
* Nested Objects:

*** Complete JavaScript Object Methods and Properties ***
* Name --> Description
- assign() --> Copies properties from a source object to a target object
- constructor --> Returns the function that created an object's prototype
- create() --> Returns an object created from an existing object
- defineProperties() --> Adds or changes properties
- defineProperty() --> Adds or changes a property
- entries() --> Returns an array of the key/value pairs of an object
- freeze() --> Prevents any changes to an object
- fromEntries() --> Returns an object created from an iterable list of key/value pairs
- getOwnPropertyDescriptor() --> Returns an array of the keys of an object
- getOwnPropertyDescriptors() --> Returns an array of the keys of an object
- getOwnPropertyNames() --> Returns an array of the keys of an object
- groupBy() --> Groups object elements according to returned callback values
- isExtensible() --> Returns true if an object is extensible
- isFrozen() --> Returns true if an object is frozen
- isSealed() --> Returns true if an object is sealed
- keys() --> Returns an array of the keys of an object
- preventExtensions() --> Prevents adding new properties to an object
- prototype --> Let you to add properties and methods to JavaScript objects
- seal() --> Prevents adding new or deleting existing object properties
- toString() --> Converts an object to a string and returns the result
- valueOf() --> Returns the primitive value of an object
- values() --> Returns an array of the property values of an object

OBJECT METHODS (NOT FINISHED)
- Object methods are actions that can be performed on objects.
- A method is a function definition stored as a property value.
* Accessing Object Methods:
* Adding a Method to an Object:
* Using JavaScript Methods:

OBJECT DISPLAY (NOT FINISHED)
- Displaying a JavaScript object will output [object Object].
* Displaying Object Properties:
* Displaying Properties in a Loop:
* Using Object.values():
* Using Object.entries():
* Using JSON.stringify():

OBJECT CONSTRUCTORS (NOT FINISHED)
* Object Constructor Functions:
- Sometimes we need to create many objects of the same type.
- To create an object type we use an object constructor function.
- It is considered good practice to name constructor functions with an upper-case first letter.
* Property Default Values:
* Adding a Property to an Object:
* Adding a Property to a Constructor:
* Constructor Function Methods:
* Adding a Method to an Object:
* Adding a Method to a Constructor:
* Built-in JavaScript Constructors: for all native objects:
- new Object() --> A new Object object
- new Array() --> A new Array object
- new Map() --> A new Map object
- new Set() --> A new Set object
- new Date() --> A new Date object
- new RegExp() --> A new RegExp object
- new Function() --> A new Function object

EVENTS
* HTML events are "things" that happen to HTML elements.
- When JavaScript is used in HTML pages, JavaScript can "react" on these events.
- Here are some examples of HTML events:
- An HTML web page has finished loading
- An HTML input field was changed
- An HTML button was clicked
- JavaScript lets you execute code when events are detected.
- HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.
  Example: <element event='some JavaScript'>
- In the following example, an onclick attribute (with code), is added to a <button> element:
  Example: <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
- In the example above, the JavaScript code changes the content of the element with id="demo".
- In the next example, the code changes the content of its own element (using this.innerHTML):
  Example: <button onclick="this.innerHTML = Date()">The time is?</button>
* Common HTML Events:
- Event --> Description
- onchange --> An HTML element has been changed
- onclick --> The user clicks an HTML element
- onmouseover --> The user moves the mouse over an HTML element
- onmouseout --> The user moves the mouse away from an HTML element
- onkeydown --> The user pushes a keyboard key
- onload --> The browser has finished loading the page
- The list is much longer: W3Schools JavaScript Reference HTML DOM Events
* JavaScript Event Handlers
- Event handlers can be used to handle and verify user input, user actions, and browser actions:
- Things that should be done every time a page loads
- Things that should be done when the page is closed
- Action that should be performed when a user clicks a button
- Content that should be verified when a user inputs data
* Many different methods can be used to let JavaScript work with events:
- HTML event attributes can execute JavaScript code directly
- HTML event attributes can call JavaScript functions
- You can assign your own event handler functions to HTML elements
- You can prevent events from being sent or being handled

STRINGS
- Strings are for storing text, written with quotes.
  Example
  let text = "John Doe";
- Do not create String objects. The new keyword complicates the code and slows down execution speed.
  String objects can produce unexpected results:

STRING METHODS (NOT FINISHED)
* Basic String Methods
- Javascript strings are primitive and immutable:
  All string methods produce a new string without altering the original string.
- String length
- String charAt()
- String charCodeAt()
- String at()
- String [ ]
- String slice()
- String substring()
- String substr()
- (String Search Methods,String Templates)
- String toUpperCase()
- String toLowerCase()
- String concat()
- String trim()
- String trimStart()
- String trimEnd()
- String padStart()
- String padEnd()
- String repeat()
- String replace()
- String replaceAll()
- String split()
- For a complete String reference: https://www.w3schools.com/jsref/jsref_obj_string.asp
  The reference contains descriptions and examples of all string properties and methods.

STRING SEARCH (NOT FINISHED)
* String Search Methods
- String indexOf()
- String lastIndexOf()
- String search()
- String match()
- String matchAll()
- String includes()
- String startsWith()
- String endsWith()

STRING TEMPLATES

NUMBERS
- JavaScript has only one type of number. Numbers can be written with or without decimals.
- JavaScript uses the + operator for both addition and concatenation. Numbers are added. Strings are concatenated.
- Do not create Number objects. The new keyword complicates the code and slows down execution speed.

BIGINT
- JavaScript BigInt variables are used to store big integer values
  that are too big to be represented by a normal JavaScript Number.
- BigInt is the second numeric data type in JavaScript (after Number).
- With BigInt the total number of supported data types in JavaScript is 8:
  String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object

NUMBER METHODS (NOT FINISHED)
- These number methods can be used on all JavaScript numbers:
- Method --> Description
- toString() --> Returns a number as a string
- toExponential() --> Returns a number written in exponential notation
- toFixed() --> Returns a number written with a number of decimals
- toPrecision() --> Returns a number written with a specified length
- valueOf() --> Returns a number as a number

NUMBER PROPERTIES *

ARRAYS
- JavaScript arrays and Java arrays are not the same—they differ in syntax,
  behavior, and underlying implementation.
- An array is a special variable, which can hold more than one value:
  Example:
  const animals = ["Dog", "Cat", "Cow"];
- An array can hold many values under a single name,
  and you can access the values by referring to an index number.
* Creating an Array
- Using an array literal is the easiest way to create a JavaScript Array.
- Syntax: const array_name = [item1, item2, ...];
- It is a common practice to declare arrays with the const keyword.
- Spaces and line breaks are not important. A declaration can span multiple lines.
- You can also create an array, and then provide the elements.
* Using the JavaScript Keyword new
- The following example also creates an Array, and assigns values to it:
  Example: const cars = new Array("Saab", "Volvo", "BMW");
* Accessing Array Elements
- You access an array element by referring to the index number:
  Example:
  const animals = ["Dog", "Cat", "Cow"];
  let animals = animals [0];

- Array indexes start with 0. [0] is the first element. [1] is the second element.
* Changing an Array Element
- This statement changes the value of the first element in animals:
  Example:
  const animals = ["Dog", "Cat", "Cow"];
  animals [0] = "Goat";

* Converting an Array to a String
- The JavaScript method toString() converts an array to a string of (comma separated) array values.
  Example:
  const animals = ["Dog", "Cat", "Cow", "Goat"];
  document.getElementById("demo").innerHTML = animals.toString();

* Access the Full Array
- With JavaScript, the full array can be accessed by referring to the array name:
  Example:
  const animals = ["Dog", "Cat", "Cow"];
  document.getElementById("demo").innerHTML = animals;

* Arrays are Objects
- Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
- But in JavaScript arrays are best described as arrays. Arrays use numbers to access its "elements".
- Objects use names to access its "members". In this example, person.firstName returns (person.firstName)
  Example:
  // Object:
  const cow = {firstName:"Cutie", lastName:"HighlandCattle", age:5};

* Array Elements Can Be Objects
- JavaScript variables can be objects. Arrays are special kinds of objects.
- Because of this, you can have variables of different types in the same Array.
- You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
  Example:
  myArray[0] = Date.now;
  myArray[1] = myFunction;
  myArray[2] = myAnimals;
* Array Properties and Methods
- The real strength of JavaScript arrays are the built-in array properties and methods:
  Example:
  animals.length   // Returns the number of elements
  animals.sort()   // Sorts the array

* The length Property
- Returns the length of an array (the number of array elements):
  Example
  const animals = ["Dog", "Cat", "Cow", "Goat"];
  let length = animals.length;

- The length property is always one more than the highest array index.
* Accessing the First Array Element
 Example:
 const fruits = ["Dog", "Cat", "Cow", "Goat"];
 let animals = animals[0];

* Accessing the Last Array Element
  Example:
  const animals = ["Dog", "Cat", "Cow", "Goat"];
  let animals = animals[animals.length - 1];

* Looping Array Elements
- One way to loop through an array, is using a for loop.
- You can also use the Array.forEach() function.

* Adding Array Elements
- The easiest way to add a new element to an array is using the push() method:
  Example
  const fruits = ["Dog", "Cat", "Cow"];
  fruits.push("Hedgehog");  // Adds a new element (Hedgehog) to animals

- New element can also be added to an array using the length property:
  Example
  const animals = ["Dog", "Cat", "Cow"];
  animals[animals.length] = "Hedgehog";  // Adds "Hedgehog" to animals

* Difference Between Arrays and Objects
- In JavaScript, arrays use numbered indexes.
- In JavaScript, objects use named indexes.
- Arrays are a special kind of objects, with numbered indexes.

* When to Use Arrays --> When to use Objects
- JavaScript does not support associative arrays.
- You should use objects when you want the element names to be strings (text).
- You should use arrays when you want the element names to be numbers.

* JavaScript new Array()
- JavaScript has a built-in array constructor new Array().
- But you can safely use [] instead.

ARRAY METHODS
* Basic Array Methods
- Array length --> Returns number of elements in the array.
- Array toString() --> Converts the array to a comma-separated string.
- Array at(index) --> Returns element at the given index (supports negative indices).
- Array join(separator) --> Joins array elements into a string with a custom separator.
* Stack/Queue Methods
- Array pop() --> Removes and returns the last element.
- Array push(item) --> Adds item(s) to the end, returns new length.
- Array shift() --> Removes and returns the first element.
- Array unshift(item) --> Adds item(s) to the start, returns new length.
* Delete
- Array delete(index) -->  Removes value at index, but leaves undefined (does not reindex).
*  Combining & Copying
- Array concat(array) --> Combines arrays, returns a new array.
- Array copyWithin() --> Copies a slice within the same array.
* Flattening
- Array flat() --> Flattens nested arrays (default depth is 1).
* Splicing & Slicing
- Array splice() --> Adds/removes items in-place.
- Array toSpliced() --> Same as splice, but returns new array (non-destructive).
- Array slice() --> Returns a shallow copy of a portion of the array.

ARRAY SEARCH
* Array Find and Search Methods
- Array indexOf() --> Returns the first index of a value, or -1 if not found. (Searches from start to end)
- Array lastIndexOf() --> Returns the last index of a value, or -1. (Searches from end to start)
- Array includes() --> Returns true if the array contains the value.
Finding with Conditions (Callback)
- Array find() --> Returns the first element that passes the test (or undefined). Stops at first match.
- Array findIndex() --> Returns the index of the first match (or -1).
- Array findLast() --> Returns the last element that passes the test.
- Array findLastIndex() --> Returns the index of the last match.

ARRAY SORT
* Alphabetic Sort
- Array sort() --> Sorts array alphabetically by default (as strings), and modifies the original array.
- Array reverse() --> Reverses the order of elements in place.
- Array toSorted() --> Like sort(), but returns a new sorted array (does not change the original).
- Array toReversed() --> Like reverse(), but returns a new reversed array.
- Sorting Objects --> Use sort((a, b) => a.prop - b.prop) to sort an array of objects by a specific property.
* Numeric Sort
- Numeric Sort --> Use sort((a, b) => a - b) to sort numbers correctly (ascending), since default is lexicographic.
- Random Sort --> Use sort(() => Math.random() - 0.5) to shuffle items randomly (not truly random).
- Math.min() --> Returns the smallest number in an array.
- Math.max() --> Returns the largest number in an array.

ARRAY ITERATION
- Array iteration methods operate on every array item.
- They loop through each element and allow you to perform actions or return a new value/structure.
*  Iteration & Transformation
- Array forEach --> Runs a function on each element (no return value). Used for side effects (e.g., logging).
- Array map() --> Transforms each item, returns a new array. Great for changing data.
- Array flatMap() --> Like map(), but flattens one level of nested results. Useful for arrays of arrays.
*  Filtering & Reducing
- Array filter() --> Returns a new array with items that pass the test. Keeps only what you want.
- Array reduce() --> Reduces array to a single value, left to right. Great for sums, objects, etc.
- Array reduceRight() --> Same as reduce(), but right to left.
* Testing Conditions
- Array every() --> Returns true if all elements pass the test. All items must meet the condition.
- Array some() --> Returns true if at least one item passes the test.
* Array Utilities
- Array from() --> Converts array-like or iterable objects into an array. Can also map with a second argument.
- Array keys() --> Returns an iterator for array indices. Use with for...of or .next()
- Array entries() --> Returns an iterator of [index, value] pairs.
- Array with() --> Returns a new array with the value replaced at a specific index (immutable).
* Spread Operator
- Array Spread (...) --> (Spread) – Expands elements of an array (or iterable).
  Useful for copying, merging, and passing args.

ARRAY CONST
- It has become a common practice to declare arrays using const.
- An array declared with const cannot be reassigned.
* Arrays are Not Constants
- The keyword const is a little misleading.
- It does NOT define a constant array. It defines a constant reference to an array.
- Because of this, we can still change the elements of a constant array.
* Elements Can be Reassigned
- You can change the elements of a constant array.
* Assigned when Declared
- JavaScript const variables must be assigned a value when they are declared:
- Meaning: An array declared with const must be initialized when it is declared.
- Using const without initializing the array is a syntax error.
- Arrays declared with var can be initialized at any time.
- You can even use the array before it is declared.
* Const Block Scope
- An array declared with const has Block Scope.
- An array declared in a block is not the same as an array declared outside the block.
- An array declared with var does not have block scope.
* Redeclaring Arrays
- Redeclaring an array declared with var is allowed anywhere in a program.
- Redeclaring or reassigning an array to const, in the same scope, or in the same block, is not allowed.
- Redeclaring or reassigning an existing const array, in the same scope, or in the same block, is not allowed.
- Redeclaring an array with const, in another scope, or in another block, is allowed.

DATES (NOT FINISHED)
- JavaScript Date Objects let us work with dates.
- Date objects are static. The "clock" is not "running". The computer clock is ticking, date objects are not.
- By default, JavaScript will use the browser's time zone and display a date as a full text string.
* Creating Date Objects
- Date objects are created with the new Date() constructor.
- There are 9 ways to create a new date object:
  new Date()
  new Date(date string)
  new Date(year,month)
  new Date(year,month,day)
  new Date(year,month,day,hours)
  new Date(year,month,day,hours,minutes)
  new Date(year,month,day,hours,minutes,seconds)
  new Date(year,month,day,hours,minutes,seconds,ms)
  new Date(milliseconds)
* JavaScript new Date()
- new Date() creates a date object with the current date and time.
* new Date(date string)
- new Date(date string) creates a date object from a date string.
* Date Methods
- When a date object is created, a number of methods allow you to operate on it.
- Date methods allow you to get and set the year, month, day, hour, minute, second, and millisecond
  of date objects, using either local time or UTC (universal, or GMT) time.
* Displaying Dates
- JavaScript will (by default) output dates using the toString() method. This is a string
  representation of the date, including the time zone. The format is specified in the ECMAScript specification.

DATE FORMATS
DATE GET METHODS
DATE SET METHODS
MATH
RANDOM
BOOLEANS
COMPARISONS
IF ELSE
SWITCH
LOOP FOR
LOOP FOR IN
LOOP FOR OF
LOOP WHILE
BREAK
ITERABLES
SETS
SET METHODS
MAPS
MAP METHODS
TYPEOF
TYPE CONVERSION
DESTRUCTURING
BITWISE
REGEXP
PRECEDENCE
ERRORS
SCOPE
HOISTING
STRICT MODE
THIS KEYWORD
ARROW FUNCTION
CLASSES
MODULES
JSON
DEBUGGING
STYLE GUIDE
BEST PRACTICES
MISTAKES
PERFORMANCE
RESERVED WORDS

* JS Objects * (NOT FINISHED)
DEFINITIONS
* Methods for Defining JavaScript Objects
- Using an Object Literal
- Using the new Keyword
- Using an Object Constructor
- Using Object.assign()
- Using Object.create()
- Using Object.fromEntries()

PROTOTYPES
METHODS
PROPERTIES
GET/ SET
PROTECTION

* JS Functions * (NOT FINISHED)
DEFINITIONS
- JavaScript functions are defined with the function keyword. Use a function declaration or a function expression.

PARAMETERS
INVOCATION
CALL
APPLY
BIND
CLOSURES

* JS Classes * (NOT FINISHED)
INTRO
- Syntax: Use the keyword class to create a class. Always add a method named constructor():
- A JavaScript class is not an object. It is a template for JavaScript objects.

INHERITANCE
STATIC

* JS Async * (NOT FINISHED)
* CALLBACK
- A callback is a function passed as an argument to another function
- This technique allows a function to call another function
- A callback function can run after another function has finished

ASYNCHRONOUS
PROMISES
ASYNC/AWAIT

* JS HTML DOM (Document Object Model) *
INTRO
- With the HTML DOM, JavaScript can access and change all the elements of an HTML document.
- When a web page is loaded, the browser creates a Document Object Model of the page.
- The HTML DOM model is constructed as a tree of Objects:
                              Document
                            Root element:
                               <HTML>
           Element:                                   Element
            <head>                                     <body>
               --------------------------------------------
           Element:       Attribute: ---- Element:      Element:
            <title>         "href"         <a>           <h1>

            Text:                         Text:           Text
           "My text"                     "my link"      "my header"

* With the object model, JavaScript gets all the power it needs to create dynamic HTML:
- JavaScript can change all the HTML elements in the page
- JavaScript can change all the HTML attributes in the page
- JavaScript can change all the CSS styles in the page
- JavaScript can remove existing HTML elements and attributes
- JavaScript can add new HTML elements and attributes
- JavaScript can react to all existing HTML events in the page
- JavaScript can create new HTML events in the page
* The DOM defines a standard for accessing documents, separated in 3 parts:
- Core DOM - standard model for all document types
- XML DOM - standard model for XML documents
- HTML DOM - standard model for HTML documents
* The HTML DOM is a standard object model and programming interface for HTML. It defines:
- The HTML elements as objects
- The properties of all HTML elements
- The methods to access all HTML elements
- The events for all HTML elements
- In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

METHODS
DOCUMENT
ELEMENTS
HTML
FORMS
CSS
ANIMATIONS
EVENTS
EVENT LISTENER
NAVIGATION
NODES
COLLECTIONS
NODE LISTS
-----------------------------------------------------------------------------------------------------------

* JAVASCRIPT LIBRARY *
/ Provides reusable functionality for common tasks /
- A library is a collection of pre-written code that you can call upon when needed.
 You are in control, and you decide when and how to use the library.
* JQUERY: Library *
- jQuery is a popular JavaScript library.
- Download: //jquery.com/download/
- About: https://api.jquery.com/

* JAVASCRIPT FRAMEWORK *
/ Provides structure and guidelines for building apps /
- A framework is a larger structure where the framework is in control,
  and you fill in the parts specific to your application. It often sets the architecture and flow.
  Example: React, Angular, and Vue.js are frameworks (React is technically a library - functions like a framework).
- In a framework: The framework calls your code (not the other way around).
- It usually comes with structure, patterns, and rules to follow.
- You don’t just write everything from scratch — you work within the structure the framework gives you.
* BOOTSTRAP: Framework *
- A popular CSS framework used to build responsive and mobile-first websites.
  It helps you style your site with: Layouts (grids, columns), Buttons, Forms, Modals, Navbars
- It also includes some JavaScript components (like dropdowns, modals, tooltips).

* Decision Guide:
- Need to style and lay out pages fast? → Bootstrap
- Need to fetch data, animate elements, handle custom events? → jQuery
- Need both UI components and custom scripting? →
  You can—and often do—use Bootstrap + jQuery together
* Bottom line:
- jQuery = your go‑to when you want to program dynamic behavior.
- Bootstrap = your go‑to when you want a ready‑made look and feel.
- They’re complementary rather than interchangeable.
  Choose based on whether your priority is behavior (jQuery) or presentation (Bootstrap).

* JAVASCRIPT WEB API *
/ Provides a way to get data or use external services /
- It can extend the functionality of the browser, greatly simplify complex functions
  and provide easy syntax to complex code.
* API stands for Application Programming Interface.
- A Web API is an application programming interface for the Web.
- A Browser API can extend the functionality of a web browser.
- A Server API can extend the functionality of a web server.
* Random jokes: https://official-joke-api.appspot.com/random_joke

* AJAX: technique / concept *
- Read data from a web server - after the page has loaded, Update a web page without reloading the page and
  send data to a web server - in the background.
* AJAX = Asynchronous JavaScript And XML.
- AJAX just uses a combination of: A browser built-in XMLHttpRequest object (to request data from a web server),
  and JavaScript and HTML DOM (to display or use the data).
- AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes.
  This means that it is possible to update parts of a web page, without reloading the whole page.

* JSON: Data format *
- JSON stands for JavaScript Object Notation, is a text format for storing and transporting data,
  and is "self-describing" and easy to understand.
- JSON is a lightweight data-interchange format. It is plain text written in JavaScript object notation.
  Used to send data between computers, and is language independent.
- You can receive pure text from a server and use it as a JavaScript object;
- Send a JavaScript object to a server in pure text format;
- Work with data as JavaScript objects, with no complicated parsing and translations.

* JAVASCRIPT EXAMPLES *
* Examples: https://www.w3schools.com/js/js_examples.asp
* HTML DOM: https://www.w3schools.com/js/js_dom_examples.asp
* HTML INPUT: https://www.w3schools.com/js/js_input_examples.asp
* HTML OBJECTS: https://www.w3schools.com/js/js_ex_dom.asp
* HTML EVENTS: https://www.w3schools.com/js/js_events_examples.asp
* BROWSER OBJECT: https://www.w3schools.com/js/js_ex_browser.asp
* WEBSITE: https://www.w3schools.com/js/js_website.asp

* JAVASCRIPT REFERENCE *
- Complete JavaScript and HTML DOM References
- All Properties and Methods with Full Examples: https://www.w3schools.com/jsref/default.asp
----------------------------------------------------------------------------------------------------------

* TRANLSTAOR *
- Language to Java Script: https://anythingtranslate.com/translators/javascript-translator/

* LINKS / TIPS*
- 20 Things JavaScript Developers Should know:
  https://www.youtube.com/playlist?list=PL1PqvM2UQiMoGNTaxFMSK2cih633lpFKP
- Amigos code: https://www.youtube.com/c/amigoscode?app=desktop

* PLAY / AQUIRE SKILLS *
- Code Combat: https://codecombat.com/play
- Code Wars: https://www.codewars.com/
- Screeps: https://screeps.com/
- The SQL murder mystery: https://mystery.knightlab.com/
*/
