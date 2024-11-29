Setup Instruction
Installing and Running Locally
Clone the Repository:
Create a New Vite React App

1. Open your terminal or command prompt.
2. Clone the repo from our Github using this command: 
git clone https://github.com/Nmesoma-solomon-peter/animalsolutionfeedmill.git
cd frontend
1. Install Dependencies
To add the required dependencies used to develop the website, run the following command:
yarn add bootstrap@5.3.3 js-cookie@^3.0.5 react-fast-marquee@^1.6.5 react-router-dom@^6.28.0
Add Local Dependency (`frontend`)
To include the local dependency `frontend`, link it using Yarn:
   Navigate to the `frontend` package directory:  cd /frontend                   
   Run the Application: yarn dev
Access the Application:
Open your browser and navigate to:
Example: http://localhost:5173/



Build for Production
To create a production build of your application: yarn build

The output will be in the `dist` folder. You can deploy this folder to any static hosting provider.
Testing and Debugging

 Run the development server to test your application locally.
Use the browser console and React DevTools for debugging.
Check `package.json` for any misconfigurations in dependencies.

