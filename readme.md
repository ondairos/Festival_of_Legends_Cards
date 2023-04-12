# HS Festival of Legends Full Stack APP
- Frontend deployed at: Netlify https://luxury-taffy-98aa2d.netlify.app/
- Backend deployed at: render https://fol-api.onrender.com/api/mage

## Client
Client-Side Code for Hearthstone: Festival of Legends Expansion

This is the client-side code for the Hearthstone: Festival of Legends Expansion web application. The application is built using React and Axios for data fetching.
Dependencies

The following dependencies are used in this project:

    Axios: A Promise based HTTP client for the browser and node.js
    React: A JavaScript library for building user interfaces
    React-DOM: A package that serves as the entry point of the DOM-related rendering paths

Dev Dependencies

    @types/react: TypeScript definitions for React
    @types/react-dom: TypeScript definitions for React-DOM
    @vitejs/plugin-react: A Vite plugin that enables the use of React
    Typescript: A typed superset of JavaScript that compiles to plain JavaScript
    Vite: A build tool that focuses on speed and simplicity

Scripts

    dev: Starts the development server using Vite
    build: Builds the project using TypeScript and Vite
    preview: Starts a preview server to preview the production build



This is the client-side code for the Hearthstone: Festival of Legends Expansion web application. The application is built using React and Axios for data fetching.
Dependencies

The following dependencies are used in this project:

    Axios: A Promise based HTTP client for the browser and node.js
    React: A JavaScript library for building user interfaces
    React-DOM: A package that serves as the entry point of the DOM-related rendering paths

Dev Dependencies

    @types/react: TypeScript definitions for React
    @types/react-dom: TypeScript definitions for React-DOM
    @vitejs/plugin-react: A Vite plugin that enables the use of React
    Typescript: A typed superset of JavaScript that compiles to plain JavaScript
    Vite: A build tool that focuses on speed and simplicity

Scripts

    dev: Starts the development server using Vite
    build: Builds the project using TypeScript and Vite
    preview: Starts a preview server to preview the production build

Functionality

The App component is the main component of the application. It fetches card data from the server using Axios and renders it in a grid. The useEffect hook is used to fetch data when the class is changed. The useState hook is used to store the chosen class and the card data. The changeClass function is used to update the chosen class. The formatted_class_title function is used to format the chosen class title to uppercase and remove underscores. The color_class_picker function is used to pick a color for the class title based on the chosen class.

Overall, the application allows the user to view Hearthstone cards for different classes in a responsive grid. The user can switch between different classes using the buttons rendered by the ClassButtons component.

## Server

Node.js server-side written in TypeScript using Express.js framework. Provides two endpoints for an API:

    GET /api - Returns a simple message "Hello to Expansion Festival of Legends!" when the root URL is accessed.
    GET /api/:class - Returns a JSON response containing an array of card data corresponding to the class name passed as a parameter in the URL.

The card_data is imported from a separate file named card_data.ts, which exports an object containing arrays of card objects. The card_data.ts file also defines the types for the Card and CardData.

The server uses the cors package to allow cross-origin requests and the axios package to make HTTP requests to other APIs if needed. The server is configured to run on port 5000, but it can also run on the process.env.PORT if it is set.

The server has three commands:

    npm start - Starts the server in production mode, running the compiled JavaScript code.
    npm run dev - Starts the server in development mode, using nodemon to automatically restart the server when changes are detected in the TypeScript code.
    npm run build - Builds the TypeScript code and creates a dist directory with the compiled JavaScript code.

## Author

Ioannis Kantiloros
