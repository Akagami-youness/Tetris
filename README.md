# Tetris

## guidance: 
1. Open your terminal and run the following script to install all the necessary dependencies for Webpack to run: npm install 

2. Webpack has it's own dev-server, so you're not supposed to use the live server app from vscode. All you have to do is to run the following scrip in the terminal to get going: npm start.  This will run webpack in development mode. If you want to see what the production code will look like, you can run the following command: npm run build. This will create a folder called dist which will contain on JavaScript file that is minified and optimized from the browser. Try it for fun! Again, we will mostly be working in development mode.

3. We will be build our React components inside the components file inside of the src folder. Low level components will be imported to higher level components, which will be imported the App.js file. the index.js file import our App.js file and renders it inside of hour template.html file.

4. Adding a feature should start by creating a new git branch before making any changes. We are not supposed to make changes directly to the Master branch.
:)