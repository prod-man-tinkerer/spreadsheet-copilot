#!/bin/bash

# Azure Static Web Apps Deployment Script
# This script helps deploy the React app to Azure Static Web Apps using Azure CLI

set -e

echo "🚀 Deploying FortuneSheet App to Azure Static Web Apps"

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo "❌ Azure CLI is not installed. Please install it first:"
    echo "   https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
    exit 1
fi

# Check if user is logged in
if ! az account show &> /dev/null; then
    echo "🔐 Please log in to Azure CLI:"
    az login
fi

# Variables (customize these)
RESOURCE_GROUP_NAME="rg-fortunesheet-app"
STATIC_WEB_APP_NAME="fortunesheet-app"
LOCATION="East US 2"
SKU="Free"

echo "📋 Configuration:"
echo "   Resource Group: $RESOURCE_GROUP_NAME"
echo "   App Name: $STATIC_WEB_APP_NAME"
echo "   Location: $LOCATION"
echo "   SKU: $SKU"

# Create resource group if it doesn't exist
echo "🏗️  Creating resource group (if it doesn't exist)..."
az group create \
    --name $RESOURCE_GROUP_NAME \
    --location "$LOCATION" \
    --output table

# Create Static Web App
echo "🌐 Creating Static Web App..."
DEPLOYMENT_TOKEN=$(az staticwebapp create \
    --name $STATIC_WEB_APP_NAME \
    --resource-group $RESOURCE_GROUP_NAME \
    --location "$LOCATION" \
    --sku $SKU \
    --query "defaultHostname" \
    --output tsv)

if [ $? -eq 0 ]; then
    echo "✅ Static Web App created successfully!"
    echo "🌍 Your app will be available at: https://$DEPLOYMENT_TOKEN"
    echo ""
    echo "📝 Next steps:"
    echo "1. Get your deployment token from the Azure Portal:"
    echo "   - Go to your Static Web App in Azure Portal"
    echo "   - Click 'Manage deployment token'"
    echo "   - Copy the token"
    echo ""
    echo "2. Add the following secrets to your GitHub repository:"
    echo "   - AZURE_STATIC_WEB_APPS_API_TOKEN: [your deployment token]"
    echo "   - REACT_APP_AZURE_OPENAI_API_KEY: [your Azure OpenAI API key]"
    echo "   - REACT_APP_AZURE_OPENAI_ENDPOINT: [your Azure OpenAI endpoint]"
    echo ""
    echo "3. Configure environment variables in Azure Portal:"
    echo "   - Go to Configuration → Application settings"
    echo "   - Add the React environment variables"
    echo ""
    echo "4. Push your code to trigger deployment!"
else
    echo "❌ Failed to create Static Web App"
    exit 1
fi
