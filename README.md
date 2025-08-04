# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

## Azure Deployment

This application is configured for deployment to Azure Static Web Apps.

### Prerequisites

1. **Azure Account**: You need an active Azure subscription
2. **Azure OpenAI Service**: Set up an Azure OpenAI resource with a deployed model
3. **GitHub Repository**: The code should be in a GitHub repository

### Environment Variables

The application requires the following environment variables:

- `REACT_APP_AZURE_OPENAI_API_KEY`: Your Azure OpenAI API key
- `REACT_APP_AZURE_OPENAI_ENDPOINT`: Your Azure OpenAI endpoint URL

### Deployment Steps

#### Option 1: Deploy via Azure Portal

1. **Create Azure Static Web App**:
   - Go to the Azure Portal
   - Create a new "Static Web App" resource
   - Connect to your GitHub repository
   - Set the build details:
     - App location: `/`
     - Output location: `build`

2. **Configure Environment Variables**:
   - In the Azure Portal, go to your Static Web App
   - Navigate to "Configuration" → "Application settings"
   - Add the required environment variables:
     - `REACT_APP_AZURE_OPENAI_API_KEY`
     - `REACT_APP_AZURE_OPENAI_ENDPOINT`

3. **Deploy**:
   - Push your code to the main branch
   - Azure will automatically build and deploy your app

#### Option 2: Deploy via GitHub Actions (Manual Setup)

If you prefer to set up the GitHub Actions workflow manually:

1. **Get Azure Static Web Apps API Token**:
   - Create a Static Web App in Azure Portal
   - Copy the deployment token from the "Manage deployment token" option

2. **Configure GitHub Secrets**:
   - In your GitHub repository, go to Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `AZURE_STATIC_WEB_APPS_API_TOKEN`: Your deployment token
     - `REACT_APP_AZURE_OPENAI_API_KEY`: Your Azure OpenAI API key
     - `REACT_APP_AZURE_OPENAI_ENDPOINT`: Your Azure OpenAI endpoint

3. **Deploy**:
   - The GitHub Actions workflow will automatically trigger on push to main branch

### Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Setup**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual Azure OpenAI credentials
   ```

3. **Run Development Server**:
   ```bash
   npm start
   ```

### Features

- **FortuneSheet Integration**: Full-featured spreadsheet component
- **Azure OpenAI Chat**: AI-powered chat functionality
- **Fluent UI**: Microsoft's design system for consistent UX
- **Responsive Design**: Works on desktop and mobile devices

### Troubleshooting

- **CORS Issues**: Azure OpenAI is configured with `dangerouslyAllowBrowser: true` for client-side usage
- **Environment Variables**: Ensure all variables are prefixed with `REACT_APP_` for React apps
- **Build Failures**: Check that all dependencies are properly installed

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
