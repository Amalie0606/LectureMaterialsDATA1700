
/* --------------------------------------- OVERVIEW ---------------------------------------------------
                                       Exam date: 22 May

- Java is a statically-typed language with rigid syntax,
  while Javascript is a dynamically-typed language with a more flexible syntax.
- JavaScript is a dynamically typed object-oriented scripting language that does not need to be set up or installed,
  unlike Java, because it runs within a computer's browser.
- Similar to workflow events
- JavaScript is indeed an object-oriented language, albeit with a unique approach.
  Its prototypal inheritance, combined with modern ES6 class syntax,
  supports core OOP principles such as encapsulation, inheritance, polymorphism, and abstraction.
- Languages such as C, Assembly, Haskell, and SQL are examples of non-OOP languages.

- Size of the Language: In terms of language size, JavaScript has a relatively small core syntax
 compared to some other languages. However, its capabilities expand significantly
 through the use of libraries and frameworks.
* A library is a collection of pre-written code that you can call upon when needed.
 You are in control, and you decide when and how to use the library.
- Example: jQuery is a popular JavaScript library.
- Download: //jquery.com/download/
- About: https://api.jquery.com/

* A framework is a larger structure where the framework is in control,
  and you fill in the parts specific to your application. It often sets the architecture and flow.
  Example: React, Angular, and Vue.js are frameworks (React is technically a library - functions like a framework).
- In a framework: The framework calls your code (not the other way around).
- It usually comes with structure, patterns, and rules to follow.
- You don’t just write everything from scratch — you work within the structure the framework gives you.
* Bootstrap is a popular CSS framework used to build responsive and mobile-first websites.
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

* In modern development, it’s considered better practice to keep HTML, CSS, and JavaScript
  separate for these reasons: Cleaner code, Easier to maintain, Better separation of concerns
- In HTML refer like this: <script src="filename.js"></
- This waits until the page is fully loaded before running the script. script>
* Best Practices:
- 1. Place <script src="..."> at the end of <body>
- So the HTML elements are already loaded before the script runs.
- 2. Or, if placing it in the <head>, use the defer attribute: <script src="script.js" defer></script>
- This waits until the page is fully loaded before running the script.

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
- Arithmetic Operators --> used to perform arithmetic on numbers
- Assignment Operators
- Comparison Operators
- String Operators
- Logical Operators
- Bitwise Operators
- Ternary Operators
- Type Operators
* Operator --> Description
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
Operator --> Description
== 	equal to
=== equal value and equal type
!= 	not equal
!== not equal value or not equal type
> 	greater than
< 	less than
>= 	greater than or equal to
<= 	less than or equal to
? 	ternary operator

* JavaScript String Comparison
  Example:
  let text1 = "A";
  let text2 = "B";
  let result = text1 < text2;

* JavaScript Logical Operators
- Operator --> Description
&& 	logical and
|| 	logical or
! 	logical not

* JavaScript Type Operators
Operator --> Description
typeof 	Returns the variable type
instanceof 	Returns true if an object is an instance of an object type

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
- Property --> Property Value
- firstName -->	Selda
- lastName --> Hobbit
- age --> 3
- eyeColor --> brown
- fullName --> function() {return this.firstName + " " + this.lastName;}
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
- Name --> Description
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

*** For a myriad of examples: https://www.w3schools.com/js/js_examples.asp ***

Source: https://www.w3schools.com/js/default.asp

TRANLSTAOR LANGUAGE INTO JS:
https://anythingtranslate.com/translators/javascript-translator/

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
