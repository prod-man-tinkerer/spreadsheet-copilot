# Azure Deployment Checklist

This checklist will help you deploy the FortuneSheet app to Azure successfully.

## ✅ Pre-deployment Checklist

### 1. Azure Resources Required
- [ ] Azure subscription with sufficient credits/billing
- [ ] Azure OpenAI Service resource created
- [ ] Azure OpenAI model deployed (e.g., GPT-3.5-turbo or GPT-4)
- [ ] Note down your Azure OpenAI endpoint and API key

### 2. GitHub Repository Setup
- [ ] Code pushed to GitHub repository
- [ ] Repository is public or you have appropriate permissions
- [ ] All sensitive information removed from code (no hardcoded secrets)

### 3. Environment Variables
- [ ] `REACT_APP_AZURE_OPENAI_API_KEY` - Your Azure OpenAI API key
- [ ] `REACT_APP_AZURE_OPENAI_ENDPOINT` - Your Azure OpenAI endpoint URL

## 🚀 Deployment Options

### Option A: Azure Static Web Apps (Recommended)

#### Via Azure Portal:
1. [ ] Go to Azure Portal → Create Resource → Static Web App
2. [ ] Connect to your GitHub repository
3. [ ] Configure build settings:
   - App location: `/`
   - Output location: `build`
4. [ ] Add environment variables in Configuration → Application settings
5. [ ] Deploy automatically triggers on push to main branch

#### Via Azure CLI:
1. [ ] Run `./deploy-azure.sh` script
2. [ ] Follow the instructions to configure GitHub secrets
3. [ ] Push code to trigger deployment

### Option B: Azure Container Instances (Docker)

1. [ ] Build Docker image: `docker build -t fortunesheet-app .`
2. [ ] Push to Azure Container Registry
3. [ ] Deploy to Azure Container Instances
4. [ ] Configure environment variables in container settings

### Option C: Azure App Service

1. [ ] Create Azure App Service (Linux, Node.js)
2. [ ] Configure deployment from GitHub
3. [ ] Set build command: `npm run build`
4. [ ] Configure environment variables in Application Settings

## 🔍 Post-deployment Verification

### 1. Application Health
- [ ] App loads successfully at the Azure URL
- [ ] No console errors in browser dev tools
- [ ] Spreadsheet component renders correctly
- [ ] Chat functionality works (if Azure OpenAI is configured)

### 2. Performance
- [ ] Page load time is acceptable
- [ ] Static assets are cached properly
- [ ] Gzip compression is enabled

### 3. Security
- [ ] HTTPS is enabled
- [ ] Environment variables are not exposed in client
- [ ] CORS settings are configured correctly for Azure OpenAI

## 🛠️ Troubleshooting Common Issues

### Build Failures
- [ ] Check Node.js version compatibility (Node 16+ recommended)
- [ ] Verify all dependencies are in package.json
- [ ] Check for TypeScript/ESLint errors

### Runtime Errors
- [ ] Verify environment variables are set correctly
- [ ] Check Azure OpenAI endpoint and API key
- [ ] Verify CORS configuration in Azure OpenAI

### Performance Issues
- [ ] Enable gzip compression
- [ ] Configure CDN if needed
- [ ] Optimize bundle size (current: ~638KB gzipped)

## 📊 Monitoring and Maintenance

### Azure Monitor Setup
- [ ] Enable Application Insights for the Static Web App
- [ ] Set up alerts for errors and performance issues
- [ ] Monitor Azure OpenAI usage and quotas

### Regular Maintenance
- [ ] Update dependencies regularly
- [ ] Monitor security vulnerabilities
- [ ] Review and optimize bundle size
- [ ] Keep Azure OpenAI models updated

## 📋 Environment-Specific Notes

### Development
- Use `.env.local` for local development
- Test with local Azure OpenAI instance

### Staging
- Use separate Azure OpenAI resource for staging
- Test deployment process thoroughly

### Production
- Use production Azure OpenAI resource
- Enable monitoring and alerting
- Set up backup and disaster recovery

## 📞 Support Resources

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [Azure OpenAI Service Documentation](https://docs.microsoft.com/en-us/azure/cognitive-services/openai/)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)
- [FortuneSheet Documentation](https://github.com/ruilisi/fortune-sheet)
