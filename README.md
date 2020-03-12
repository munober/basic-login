# Basic login screen

This is a very basic implementation of a login screen built with some basic html and javascript, running on a node.js express server on your local machine (localhost). It is still missing most of the backend user-database management and will be updated at some point in the future. The express server is configured to send data over https.

## Installation instructions

1. Install nodejs
2. Initialize the js package manager
    ```
    npm init
    ```
3. Install express for js servers
    ```
    npm install express --save
    ```
4. Navigate to https://localhost:3000 in your browser. Your browser might throw up a security warning, to get rid of that first ignore the warning and then optionally add the given certificate to your computer's local list of trusted Root CA's to have a normal https padlock displayed in the top bar.