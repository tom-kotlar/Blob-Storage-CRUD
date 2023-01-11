# Azure Storage CRUD Api


##  Prerequisite Tools:

- [Node.js](https://nodejs.org/en/download/)
- [TypeScript](https://www.typescriptlang.org/download)
- [VSCode Azure Functions extension](https://github.com/Microsoft/vscode-azurefunctions)
- [Azure Functions Core Tools](https://github.com/Azure/azure-functions-core-tools)
- [Postman](https://www.postman.com/)
- [Azure Storage Explorer](https://azure.microsoft.com/en-us/features/storage-explorer/) / Optional
- [Azurite](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azurite) / Optional


 - name of the Azure Storage container **products**


# :clipboard:  GET STARTED

1. Clone repo
    ```sh
    https://github.com/tom-kotlar/Blob-Storage-CRUD.git
   ```
1. NPM install dependencies

   ```sh
    npm install
   ```
1. Download Remote Settings
   ```sh
    Navigate to Azure extentnion > Resources > Subscription > Function App > Choose the Function App > Right Click on Application Settings
   ```

1. Change **AZURE_STORAGE_CONNECTION_STRING**

    ```bash
    local.settings.json
    ```
    - The **Connection string** Can be find on Storage Blade >  Access keys

1. Change **STORAGE_CONTAINER_NAME**
    ```bash
    local.settings.json
    ```
    - Your Development Storage Container name 

1. Upload Local Settings

   ```sh
    Navigate to Azure extentnion > Resources > Subscription > Function App > Choose the Function App > Right Click on Application Settings
   ```


---