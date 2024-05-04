# 426scratch
Make sure to install 'express' and 'nodemon' by running this command in the terminal:
    npm install express nodemon

'express' is the middleware to parse the requests and 'nodemon' runs the server in the backend, and the activity log is shown in the terminal

To start the application, start nodemon by running this command:
    nodemon index.js

When the application has compiled, and you see '[nodemon] starting `node index.js`', navigate to http://localhost:3000/home to see the homepage and fill out the form.

Right now the CSS is refusing to apply because of this error: 
    Refused to apply style from 'http://localhost:3000/styles.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.
I'm not entirely sure how to fix this so that's why it looks plain atm.
