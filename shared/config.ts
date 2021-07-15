const { BlobServiceClient } = require('@azure/storage-blob');
const connStr = process.env["AzureWebJobsStorage"];

const blobServiceClient = new BlobServiceClient.fromConnectionString(connStr);
const containerName = process.env["container-name"];

const containers = {
    products: blobServiceClient.getContainerClient(containerName)
  };
  
  export default containers;
