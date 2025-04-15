

/* --------------------------------------- OVERVIEW ---------------------------------------------------
                                       Exam date: 22 May
INTRODUCTION
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
* var --> Declares a variable
* let --> Declares a block variable
* const --> Declares a block constant
* if --> Marks a block of statements to be executed on a condition
* switch --> Marks a block of statements to be executed in different cases
* for --> Marks a block of statements to be executed in a loop
* function --> Declares a function
* return --> Exits a function
* try --> Implements error handling to a block of statements

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
LET
CONST
OPERATORS
ARITHMETIC
ASSIGNMENT
DATA TYPES
FUNCTIONS
OBJECTS
OBJECT PROPERTIES
OBJECT METHODS
OBJECT DISPLAY
OBJECT CONSTRUCTORS
EVENTS
STRINGS
STRING METHODS
STRING SEARCH
STRING TEMPLATES
NUMBERS
BIGINT
NUMBER METHODS
NUMBER PROPERTIES
ARRAYS
ARRAY METHODS
ARRAY SEARCH
ARRAY SORT
ARRAY ITERATION
ARRAY CONST
DATES
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

* JS Objects *
DEFINITIONS
PROTOTYPES
METHODS
PROPERTIES
GET/ SET
PROTECTION

* JS Functions *
DEFINITIONS
PARAMETERS
INVOCATION
CALL
APPLY
BIND
CLOSURES

* JS Classes *
INTRO
INHERITANCE
STATIC

* JS Async *
CALLBACK
ASYNCHRONOUS
PROMISES
ASYNC/AWAIT

* JS HTML DOM *
INTRO
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

Source: https://www.w3schools.com/js/default.asp

LINKS
* 20 Things JavaScript Developers Should know:
https://www.youtube.com/playlist?list=PL1PqvM2UQiMoGNTaxFMSK2cih633lpFKP

* Amigos code:
https://www.youtube.com/c/amigoscode?app=desktop

PLAY
* Code Combat: https://codecombat.com/play
* Code Wars: https://www.codewars.com/
* Screeps: https://screeps.com/
* The SQL murder mystery: https://mystery.knightlab.com/
 */


