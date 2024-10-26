export const javaQuiz = [
   {
     question: "1) Which of the following option leads to the portability and security of Java?",
     options: ["Bytecode is executed by JVM", "The applet makes the Java code secure and portable", "Use of exception handling", "Dynamic binding between objects"],
     answer: 1
   },
   {
     question: "2) Which of the following is not a Java feature?",
     options: ["Dynamic", "Architecture Neutral", "Use of pointers", "Object-oriented"],
     answer: 3
   },
   {
     question: "3) _____ is used to find and fix bugs in Java programs.",
     options: ["JDK", "JVM", "JRE", "JDB"],
     answer: 4
   },
   {
     question: "4) What is the return type of the hashCode() method in the Object class?",
     options: ["Object", "int", "long", "void"],
     answer: 2
   },
   {
     question: "5) Evaluate the following Java expression, if x=3, y=5, and z=10 (++z + y - y + z + x++)",
     options: ["23", "24", "20", "25"],
     answer: 4
   },
   {
     question: "6) Which package contains the Random class?",
     options: ["java.util package", "java.lang package", "java.awt package", "java.io package"],
     answer: 1
   },
   {
     question: "7) What is the implicit return type of a constructor?",
     options: ["No return type", "A class object", "int", "void"],
     answer: 1
   },
   {
     question: "8) What is the size of int data type in Java?",
     options: ["16-bit", "32-bit", "64-bit", "8-bit"],
     answer: 2
   },
   {
     question: "9) Which of these keywords is used to define interfaces in Java?",
     options: ["interface", "implements", "extends", "abstract"],
     answer: 1
   },
   {
     question: "10) Which one is the correct order of execution in the Java environment?",
     options: ["Source Code -> Bytecode -> JVM", "Bytecode -> Source Code -> JVM", "JVM -> Bytecode -> Source Code", "Source Code -> JVM -> Bytecode"],
     answer: 1
   },
   {
     question: "11) Which of the following can be used to invoke a constructor in Java?",
     options: ["super()", "this()", "new()", "None of the above"],
     answer: 2
   },
   {
     question: "12) In Java, a thread can be created by implementing which interface?",
     options: ["Runnable interface", "Cloneable interface", "Comparable interface", "None of the above"],
     answer: 1
   },
   {
     question: "13) Which of the following is a valid declaration of a package in Java?",
     options: ["package myPackage;", "myPackage package;", "package: myPackage;", "package = myPackage;"],
     answer: 1
   },
   {
     question: "14) Which of these methods can be used to make a thread sleep for a period of time?",
     options: ["Thread.sleep()", "Thread.wait()", "Object.wait()", "Thread.halt()"],
     answer: 1
   },
   {
     question: "15) Which keyword is used for accessing the features of a package?",
     options: ["package", "import", "extends", "export"],
     answer: 2
   },
   {
     question: "16) What will be the result of compiling and running the following code? \n class Test { \n public static void main(String[] args) { \n System.out.println(10 + 20 + \"Java\"); \n } \n }",
     options: ["30Java", "Java30", "1020Java", "Java1020"],
     answer: 1
   },
   {
     question: "17) Which of the following statements is true regarding the final keyword?",
     options: ["final methods can be inherited", "final methods cannot be inherited", "final methods can be overridden", "None of the above"],
     answer: 2
   },
   {
     question: "18) Which operator is used by Java to perform a bitwise complement?",
     options: ["~", "&", "|", "^"],
     answer: 1
   },
   {
     question: "19) In which memory area does the JVM store class-level metadata and constant pool?",
     options: ["Heap", "Method Area", "Stack", "Runtime Constant Pool"],
     answer: 2
   },
   {
     question: "20) Which of the following exception is thrown when dividing by zero in Java?",
     options: ["ArithmeticException", "NumberFormatException", "NullPointerException", "ArrayIndexOutOfBoundsException"],
     answer: 1
   }
 ];
 export const pyQuiz = [
   {
      question: "1) Evaluate the following Python expression, if x=3, y=5, and z=10 (++z + y - y + z + x++)",
      options: ["23", "24", "20", "25"],
      answer: 4
   },
   {
      question: "2) Python framework is",
      options: ['Django', 'Flask', 'Both of these', 'None of these'],
      answer: 3
   },
   {
      question: "3) What is the output of the following code: print(type([]))?",
      options: ['<class \'list\'>', '<class \'tuple\'>', '<class \'dict\'>', '<class \'set\'>'],
      answer: 1
   },
   {
      question: "4) Which of the following is the correct file extension for Python files?",
      options: [".pyth", ".pt", ".py", ".pyt"],
      answer: 3
   },
   {
      question: "5) What is the result of: len('Python')?",
      options: ["5", "6", "7", "8"],
      answer: 2
   },
   {
      question: "6) Which of the following functions is used to read a line from user input in Python?",
      options: ["input()", "raw_input()", "read()", "readline()"],
      answer: 1
   },
   {
      question: "7) What is the output of the following expression: 2**3?",
      options: ["6", "8", "9", "12"],
      answer: 2
   },
   {
      question: "8) Which of the following keywords is used to define a function in Python?",
      options: ["func", "function", "def", "define"],
      answer: 3
   },
   {
      question: "9) Which data structure in Python is mutable and ordered?",
      options: ["Tuple", "Set", "List", "Dictionary"],
      answer: 3
   },
   {
      question: "10) Which of the following is used to handle exceptions in Python?",
      options: ["try-except", "throw-catch", "try-catch", "handle-error"],
      answer: 1
   },
   {
      question: "11) What will be the output of print(10 // 3)?",
      options: ["3.33", "3", "4", "None"],
      answer: 2
   },
   {
      question: "12) How do you create a dictionary in Python?",
      options: ["{key: value}", "(key, value)", "[key: value]", "{key, value}"],
      answer: 1
   },
   {
      question: "13) Which of the following is not a core data type in Python?",
      options: ["List", "Dictionary", "Tuples", "Class"],
      answer: 4
   },
   {
      question: "14) What is the maximum possible length of an identifier in Python?",
      options: ["16", "32", "128", "No limit"],
      answer: 4
   },
   {
      question: "15) What is the output of: 'Python'.lower()?",
      options: ["PYTHON", "python", "Python", "pYthon"],
      answer: 2
   },
   {
      question: "16) Which of the following is used to iterate over a sequence in Python?",
      options: ["for", "while", "do-while", "repeat-until"],
      answer: 1
   },
   {
      question: "17) Which of the following is the correct syntax for defining a class in Python?",
      options: ["class MyClass[]", "class MyClass:", "MyClass:", "define class MyClass:"],
      answer: 2
   },
   {
      question: "18) What does the 'pass' keyword do in Python?",
      options: ["Terminates a loop", "Skips the current iteration", "Does nothing", "Raises an exception"],
      answer: 3
   },
   {
      question: "19) How do you access an element in a list?",
      options: ["list.get(index)", "list.index()", "list[index]", "list.fetch(index)"],
      answer: 3
   },
   {
      question: "20) Which of these is not a valid Python data type?",
      options: ["str", "int", "float", "real"],
      answer: 4
   }
];


export const phpQuiz = [
   {
      question: "1) Which of the following is the correct way to start a PHP block of code?",
      options: ["<?php ?>", "<script>", "<php>", "<?php ?>"],
      answer: 1
   },
   {
      question: "2) PHP is a ____ language.",
      options: ["Server-side", "Client-side", "Both", "None"],
      answer: 1
   },
   {
      question: "3) Which of the following is the correct way to declare a variable in PHP?",
      options: ["var $varName;", "dim $varName;", "$varName;", "$varName = 0;"],
      answer: 3
   },
   {
      question: "4) Which symbol is used to access a variable in PHP?",
      options: ["$", "#", "&", "*"],
      answer: 1
   },
   {
      question: "5) What is the correct way to create a function in PHP?",
      options: ["function myFunction()", "def myFunction()", "func myFunction()", "create myFunction()"],
      answer: 1
   },
   {
      question: "6) Which of the following is used to include a PHP file into another file?",
      options: ["import", "require", "include", "both include and require"],
      answer: 4
   },
   {
      question: "7) Which of the following function checks if a file exists?",
      options: ["file_exist()", "file_exists()", "is_file()", "exists_file()"],
      answer: 2
   },
   {
      question: "8) Which function is used to get the length of a string in PHP?",
      options: ["strlen()", "length()", "strlength()", "size()"],
      answer: 1
   },
   {
      question: "9) How can you add a comment in PHP?",
      options: ["// for single-line comment", "/* for multi-line comment */", "# for single-line comment", "All of the above"],
      answer: 4
   },
   {
      question: "10) What is the correct way to define a constant in PHP?",
      options: ["const MY_CONSTANT = 1;", "define('MY_CONSTANT', 1);", "const MY_CONSTANT: 1;", "defineConst(MY_CONSTANT, 1);"],
      answer: 2
   },
   {
      question: "11) Which of the following is true about PHP sessions?",
      options: ["Sessions are used to store user information across multiple pages.", "Session data is stored on the client-side.", "Sessions last only until the user closes the browser.", "PHP doesn't support sessions."],
      answer: 1
   },
   {
      question: "12) How do you create an array in PHP?",
      options: ["array[]", "array()", "createArray()", "array_new()"],
      answer: 2
   },
   {
      question: "13) Which of the following is used to redirect in PHP?",
      options: ["header()", "redirect()", "move()", "goTo()"],
      answer: 1
   },
   {
      question: "14) Which of the following function is used to include the contents of one PHP file into another PHP file?",
      options: ["include()", "require()", "Both include() and require()", "import()"],
      answer: 3
   },
   {
      question: "15) What will be the output of: echo 10 + '20 cars';?",
      options: ["30", "1020 cars", "Error", "10"],
      answer: 1
   },
   {
      question: "16) What is the difference between include() and require() in PHP?",
      options: ["require() stops the script if the file is not found, include() does not.", "include() stops the script if the file is not found, require() does not.", "Both functions are identical.", "include() works for HTML only."],
      answer: 1
   },
   {
      question: "17) What is the default data type of variables in PHP?",
      options: ["int", "string", "Depends on the variable value", "None"],
      answer: 3
   },
   {
      question: "18) Which of the following is used to connect to a MySQL database in PHP?",
      options: ["mysqli_connect()", "db_connect()", "connect_mysql()", "mysql_connect()"],
      answer: 1
   },
   {
      question: "19) Which PHP function is used to stop a script?",
      options: ["stop()", "end()", "exit()", "terminate()"],
      answer: 3
   },
   {
      question: "20) How do you check if a variable is set in PHP?",
      options: ["isset()", "defined()", "is_set()", "check_set()"],
      answer: 1
   }
];


export const reactQuiz = [
   {
      question: "1) What is React?",
      options: ["A JavaScript framework", "A JavaScript library", "A backend framework", "A CSS library"],
      answer: 2
   },
   {
      question: "2) Which of the following command is used to create a new React app?",
      options: ["npx create-react-app appname", "npm install react", "npm create-react-app appname", "react-new appname"],
      answer: 1
   },
   {
      question: "3) What is a component in React?",
      options: ["A reusable piece of UI", "A function returning HTML", "A CSS style", "Both A and B"],
      answer: 4
   },
   {
      question: "4) What is JSX in React?",
      options: ["A syntax extension for JavaScript", "A template engine", "A package manager", "None of the above"],
      answer: 1
   },
   {
      question: "5) How do you pass data from a parent component to a child component?",
      options: ["Using props", "Using state", "Using context", "Using hooks"],
      answer: 1
   },
   {
      question: "6) What is the purpose of a React key prop?",
      options: ["To identify DOM elements", "To optimize re-rendering", "To style components", "To pass data to child components"],
      answer: 2
   },
   {
      question: "7) What is the use of useState hook in React?",
      options: ["For handling side effects", "For handling component lifecycle", "For managing state in functional components", "For performing DOM manipulations"],
      answer: 3
   },
   {
      question: "8) Which of the following method is used to update the state in a React component?",
      options: ["setState", "changeState", "updateState", "None of the above"],
      answer: 1
   },
   {
      question: "9) What is the virtual DOM in React?",
      options: ["A real DOM tree", "A copy of the real DOM used to optimize updates", "A plugin for React", "A debugging tool"],
      answer: 2
   },
   {
      question: "10) Which of the following hook is used to handle side effects in functional components?",
      options: ["useEffect", "useState", "useReducer", "useContext"],
      answer: 1
   },
   {
      question: "11) What will happen if you call setState() in a React component?",
      options: ["The state is updated immediately", "The component re-renders", "It causes an error", "The state is reset to default"],
      answer: 2
   },
   {
      question: "12) How do you create a functional component in React?",
      options: ["function MyComponent() {}", "class MyComponent {}", "React.Component {}", "function {}"],
      answer: 1
   },
   {
      question: "13) What is the difference between state and props in React?",
      options: ["State is mutable, props are immutable", "Props are used to pass data to child components, state is used to manage internal data", "Both A and B", "None of the above"],
      answer: 3
   },
   {
      question: "14) How do you handle forms in React?",
      options: ["Using controlled components", "Using uncontrolled components", "Using refs", "All of the above"],
      answer: 4
   },
   {
      question: "15) Which of the following is true about React fragments?",
      options: ["They allow grouping of child elements without adding extra nodes to the DOM", "They are required for managing state", "They are used for form validation", "They act as a lifecycle method"],
      answer: 1
   },
   {
      question: "16) What does the useContext hook do in React?",
      options: ["It manages global state", "It triggers re-renders", "It provides a way to pass data deeply through the component tree without props", "It handles side effects"],
      answer: 3
   },
   {
      question: "17) What is the purpose of React Router?",
      options: ["For state management", "For handling form validation", "For navigating between different components/pages", "For connecting to a database"],
      answer: 3
   },
   {
      question: "18) How can you prevent a component from re-rendering in React?",
      options: ["Using shouldComponentUpdate", "Using memoization", "Using pure components", "All of the above"],
      answer: 4
   },
   {
      question: "19) What is the purpose of the useReducer hook?",
      options: ["To manage more complex state logic", "To handle side effects", "To interact with the DOM", "To manage global state"],
      answer: 1
   },
   {
      question: "20) What is the main difference between useEffect and useLayoutEffect in React?",
      options: ["useEffect is synchronous, useLayoutEffect is asynchronous", "useEffect runs after painting the DOM, useLayoutEffect runs before painting the DOM", "useEffect is used for state management, useLayoutEffect is for DOM manipulations", "There is no difference"],
      answer: 2
   }
];



export const frontendQuiz = [
   {
      question: "1) What does HTML stand for?",
      options: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyperlinks and Text Markup Language"],
      answer: 3
   },
   {
      question: "2) Which of the following tags is used to create an unordered list in HTML?",
      options: ["<ol>", "<ul>", "<li>", "<list>"],
      answer: 2
   },
   {
      question: "3) Which of the following CSS properties is used to change the text color of an element?",
      options: ["font-style", "text-color", "color", "font-color"],
      answer: 3
   },
   {
      question: "4) In CSS, which of the following properties is used to control the layout of elements using a grid system?",
      options: ["flex", "grid", "float", "block"],
      answer: 2
   },
   {
      question: "5) What is the correct syntax for including an external JavaScript file?",
      options: ['<script href="file.js">', '<script link="file.js">', '<script src="file.js">', '<script file="file.js">'],
      answer: 3
   },
   {
      question: "6) What is the purpose of the <div> tag in HTML?",
      options: ["To create hyperlinks", "To group block-level elements", "To define headers", "To insert images"],
      answer: 2
   },
   {
      question: "7) Which of the following is not a JavaScript data type?",
      options: ["Boolean", "Undefined", "Float", "Object"],
      answer: 3
   },
   {
      question: "8) Which of the following methods is used to select an element by its ID in JavaScript?",
      options: ["getElementById()", "querySelectorAll()", "getElementByClass()", "getElement()"],
      answer: 1
   },
   {
      question: "9) In CSS, how do you make all <p> elements bold?",
      options: ["p {font-weight: bold;}", "p {text-weight: bold;}", "p {bold: true;}", "p {style: bold;}"],
      answer: 1
   },
   {
      question: "10) Which of the following is used to define a class in CSS?",
      options: [".classname", "#classname", "&classname", "%classname"],
      answer: 1
   },
   {
      question: "11) What is the purpose of the 'alt' attribute in the <img> tag?",
      options: ["To specify the alignment of the image", "To specify an alternate text for the image if it cannot be displayed", "To add a title to the image", "To style the image"],
      answer: 2
   },
   {
      question: "12) Which HTML attribute is used to define inline styles?",
      options: ["class", "style", "css", "font"],
      answer: 2
   },
   {
      question: "13) What does the box model in CSS consist of?",
      options: ["Content, Padding, Margin, Background", "Content, Padding, Border, Margin", "Content, Margin, Width, Height", "Content, Border, Padding, Color"],
      answer: 2
   },
   {
      question: "14) Which JavaScript method is used to add an event listener to an element?",
      options: ["addEventListener()", "onEvent()", "attachEvent()", "setEvent()"],
      answer: 1
   },
   {
      question: "15) Which of the following CSS frameworks is used for responsive web design?",
      options: ["Foundation", "Bootstrap", "Tailwind CSS", "All of the above"],
      answer: 4
   },
   {
      question: "16) In JavaScript, how do you declare a variable?",
      options: ["var myVar;", "v myVar;", "variable myVar;", "var = myVar;"],
      answer: 1
   },
   {
      question: "17) Which of the following is used to create a form in HTML?",
      options: ["<input>", "<form>", "<textarea>", "<select>"],
      answer: 2
   },
   {
      question: "18) In CSS, how do you center an element horizontally?",
      options: ["margin-left: auto; margin-right: auto;", "text-align: center;", "position: absolute;", "padding: 0 auto;"],
      answer: 1
   },
   {
      question: "19) What does the 'display: flex' property do in CSS?",
      options: ["It creates a block-level container", "It applies grid layout to an element", "It enables a flexbox container", "It centers the content inside the element"],
      answer: 3
   },
   {
      question: "20) Which of the following JavaScript libraries is often used for DOM manipulation?",
      options: ["React", "Vue", "jQuery", "Angular"],
      answer: 3
   }
];


export const djangoQuiz = [
   {
      question: "1) What is Django primarily used for?",
      options: ["Data analysis", "Web development", "Game development", "Mobile app development"],
      answer: 2
   },
   {
      question: "2) Which command is used to start a new Django project?",
      options: ["django-admin startproject", "django-admin createproject", "django startproject", "django createproject"],
      answer: 1
   },
   {
      question: "3) What is the purpose of Django's 'models.py' file?",
      options: ["To manage URL routing", "To define database models", "To handle HTTP requests", "To configure settings"],
      answer: 2
   },
   {
      question: "4) Which of the following is Django’s ORM layer?",
      options: ["SQLAlchemy", "MongoDB", "Django ORM", "Hibernate"],
      answer: 3
   },
   {
      question: "5) In Django, what does the function 'render()' do?",
      options: ["Renders HTML templates", "Renders JavaScript code", "Fetches database data", "Compiles CSS"],
      answer: 1
   },
   {
      question: "6) What is the default database for Django?",
      options: ["SQLite", "MySQL", "PostgreSQL", "MongoDB"],
      answer: 1
   },
   {
      question: "7) Which file is used to define URL patterns in Django?",
      options: ["urls.py", "routes.py", "patterns.py", "urls.conf"],
      answer: 1
   },
   {
      question: "8) What is the function of the 'migrate' command in Django?",
      options: ["Starts the server", "Creates database tables", "Deletes database tables", "Adds new templates"],
      answer: 2
   },
   {
      question: "9) How can you create a new Django app within a project?",
      options: ["django startapp", "django-admin startapp", "django createapp", "django-admin createapp"],
      answer: 2
   },
   {
      question: "10) Which decorator is used in Django to require that a user be logged in to access a view?",
      options: ["@login_required", "@authenticated", "@require_login", "@user_required"],
      answer: 1
   },
   {
      question: "11) In Django, what is the purpose of the 'views.py' file?",
      options: ["To manage static files", "To define request handlers", "To manage database models", "To handle project settings"],
      answer: 2
   },
   {
      question: "12) Which of these is used to load data from a model in Django?",
      options: ["ModelView", "ModelForm", "QuerySet", "DataLoader"],
      answer: 3
   },
   {
      question: "13) How do you specify a primary key in Django models?",
      options: ["primary=True", "primary_key=True", "key=primary", "pk=True"],
      answer: 2
   },
   {
      question: "14) Which command is used to create migrations in Django?",
      options: ["django make", "python manage.py migrate", "python manage.py makemigrations", "django migrate"],
      answer: 3
   },
   {
      question: "15) In Django templates, which syntax is used for a for loop?",
      options: ["{% for item in list %}", "{{ for item in list }}", "{# for item in list #}", "<% for item in list %>"],
      answer: 1
   },
   {
      question: "16) Which command is used to run the Django development server?",
      options: ["python runserver", "python manage.py runserver", "django-admin runserver", "python server.py"],
      answer: 2
   },
   {
      question: "17) Which file is used for global settings in a Django project?",
      options: ["config.py", "urls.py", "settings.py", "init.py"],
      answer: 3
   },
   {
      question: "18) How do you define a foreign key relationship in Django models?",
      options: ["models.ForeignKey()", "models.Link()", "models.ForeignKeyField()", "models.RelatedField()"],
      answer: 1
   },
   {
      question: "19) What does the 'static' directory in a Django app contain?",
      options: ["HTML templates", "Database files", "Static files like CSS and JS", "Configuration files"],
      answer: 3
   },
   {
      question: "20) How can you access form data in a Django view?",
      options: ["request.get()", "request.POST", "form.data", "request.query"],
      answer: 2
   }
];

export const sqlQuiz = [
   {
      question: "1) What does SQL stand for?",
      options: [
         "Structured Query Language",
         "Simple Query Language",
         "Sequential Query Language",
         "Standard Query Language"
      ],
      answer: 0
   },
   {
      question: "2) Which command is used to retrieve data from a database?",
      options: [
         "RETRIEVE",
         "GET",
         "SELECT",
         "EXTRACT"
      ],
      answer: 2
   },
   {
      question: "3) Which SQL clause is used to filter records?",
      options: [
         "FILTER",
         "WHERE",
         "LIMIT",
         "ORDER BY"
      ],
      answer: 1
   },
   {
      question: "4) Which function is used to count the number of rows in SQL?",
      options: [
         "COUNT()",
         "SUM()",
         "TOTAL()",
         "ROWCOUNT()"
      ],
      answer: 0
   },
   {
      question: "5) Which SQL statement is used to insert new data into a database?",
      options: [
         "ADD",
         "INSERT INTO",
         "UPDATE",
         "APPEND"
      ],
      answer: 1
   },
   {
      question: "6) Which SQL clause is used to sort data in ascending or descending order?",
      options: [
         "SORT BY",
         "ORDER BY",
         "GROUP BY",
         "FILTER BY"
      ],
      answer: 1
   },
   {
      question: "7) What does the SQL DISTINCT keyword do?",
      options: [
         "Filters unique rows",
         "Counts the rows",
         "Deletes duplicate rows",
         "Groups similar rows"
      ],
      answer: 0
   },
   {
      question: "8) Which command is used to remove a table from a database?",
      options: [
         "REMOVE TABLE",
         "DELETE TABLE",
         "DROP TABLE",
         "CLEAR TABLE"
      ],
      answer: 2
   },
   {
      question: "9) How do you select all columns from a table named 'employees'?",
      options: [
         "SELECT * FROM employees;",
         "SELECT ALL FROM employees;",
         "SELECT columns FROM employees;",
         "SELECT employees FROM all;"
      ],
      answer: 0
   },
   {
      question: "10) Which SQL keyword is used to specify a condition on a group of rows?",
      options: [
         "WHERE",
         "GROUP BY",
         "ORDER BY",
         "HAVING"
      ],
      answer: 3
   },
   {
      question: "11) Which SQL command is used to change existing data in a table?",
      options: [
         "MODIFY",
         "CHANGE",
         "ALTER",
         "UPDATE"
      ],
      answer: 3
   },
   {
      question: "12) Which SQL clause is used to combine rows from two or more tables based on a related column?",
      options: [
         "JOIN",
         "UNION",
         "INTERSECT",
         "COMBINE"
      ],
      answer: 0
   },
   {
      question: "13) What is the default sorting order of the ORDER BY clause?",
      options: [
         "Descending",
         "No Order",
         "Alphabetical",
         "Ascending"
      ],
      answer: 3
   },
   {
      question: "14) Which of the following is NOT a type of SQL JOIN?",
      options: [
         "INNER JOIN",
         "OUTER JOIN",
         "LEFT JOIN",
         "UPPER JOIN"
      ],
      answer: 3
   },
   {
      question: "15) Which SQL function returns the highest value in a column?",
      options: [
         "MAX()",
         "HIGHEST()",
         "TOP()",
         "UPPER()"
      ],
      answer: 0
   },
   {
      question: "16) Which SQL function is used to combine text values from two or more columns?",
      options: [
         "MERGE()",
         "JOIN()",
         "CONCAT()",
         "COMBINE()"
      ],
      answer: 2
   },
   {
      question: "17) Which command is used to delete all rows from a table but keep the structure intact?",
      options: [
         "DROP",
         "DELETE",
         "TRUNCATE",
         "REMOVE"
      ],
      answer: 2
   },
   {
      question: "18) How do you rename a table in SQL?",
      options: [
         "RENAME TABLE old_table_name TO new_table_name;",
         "ALTER TABLE old_table_name RENAME TO new_table_name;",
         "UPDATE TABLE SET name=new_table_name WHERE name=old_table_name;",
         "MODIFY TABLE old_table_name RENAME TO new_table_name;"
      ],
      answer: 1
   },
   {
      question: "19) Which SQL keyword is used to retrieve unique values?",
      options: [
         "UNIQUE",
         "DISTINCT",
         "FILTER",
         "SPECIFIC"
      ],
      answer: 1
   },
   {
      question: "20) Which SQL function is used to add two columns in a SELECT statement?",
      options: [
         "SUM()",
         "ADD()",
         "COMBINE()",
         "PLUS()"
      ],
      answer: 0
   }
];
