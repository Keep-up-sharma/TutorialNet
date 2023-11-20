### Frontend Setup:

1. **Clone the Frontend Repository:**
   ```bash
   git clone https://github.com/Keep-up-sharma/TutorialNet.git
   cd TutorialNet
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Backend URL:**
   Open `src/main.js` and set the `app.config.globalProperties.host` to your backend URL.
   ```javascript
   app.config.globalProperties.host = 'http://localhost/TutoriaNetBackend/TutorialNetBackend';
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```

   This will start the development server, and you can access the application at `http://localhost:3000`.

5. **Build for Production:**
   ```bash
   npm run build
   ```

   This command generates a `dist` folder that contains the optimized production build.

### Backend Setup:

1. **Clone the Backend Repository:**
   ```bash
   git clone https://github.com/Keep-up-sharma/TutorialNetBackend.git
   cd TutorialNetBackend
   ```

2. **Configure Frontend URL:**
   Open `config.php` and add your frontend URL to the allowed origins.
   ```php
   header('Access-Control-Allow-Origin: http://your-frontend-url');
   ```

3. **Configure Apache:**
   Ensure that your Apache server is configured to serve the backend. Make sure the `DocumentRoot` points to the backend's public directory.

4. **Start Apache:**
   Start or restart your Apache server.

### Documentation:

1. **Frontend Configuration:**
   - Explain the steps to clone the frontend repository.
   - Guide users through installing dependencies using `npm install`.
   - Highlight the importance of configuring the backend URL in `src/main.js`.

2. **Backend Configuration:**
   - Describe the process of cloning the backend repository.
   - Show how to configure the allowed frontend origins in `config.php`.
   - Remind users to configure their Apache server to serve the backend.

3. **Running the Application:**
   - Provide instructions on how to run the frontend in development mode (`npm run dev`).
   - Mention how to build the frontend for production (`npm run build`).
   - Emphasize the importance of starting or restarting the Apache server for the backend.

4. **Troubleshooting:**
   - Include a section for common issues and their solutions.
   - Provide guidance on where to check logs for both frontend and backend.

5. **Usage and Testing:**
   - Give users an overview of how to use the application.
   - Include any sample data or test scenarios for users to try.

6. **Deployment:**
   - If applicable, provide instructions on deploying the application to a production environment.

7. **Contributing:**
   - Encourage users to contribute to the project and provide guidelines if any.

Remember to update the documentation whenever there are changes to the setup process or any important information.