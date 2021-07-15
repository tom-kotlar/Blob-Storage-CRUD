import { Context } from "@azure/functions";
import containers from "./config";

async function getProducts({req, res}: Context) {
    try {
      const response = await req.body.products
      res.status(200).json(response);
    } catch (error) {
      res.status(500).send(error)
    }
}

// generate random id 
const getRandomInt = () => {
  const max = 1000;
  const min = 100;
  return Math.floor(Math.random() * Math.floor(max) + min);
};


  // helper  method for converting the buffer stream
  async function streamToBuffer(readableStream) {
    return new Promise((resolve, reject) => {
      const chunks = [];
      readableStream.on("data", (data) => {
        chunks.push(data instanceof Buffer ? data : Buffer.from(data));
      });
      readableStream.on("end", () => {
        resolve(Buffer.concat(chunks));
      });
      readableStream.on("error", reject);
    });
  }

async function addProduct({req, res}: Context) {
  const product = {
    id: getRandomInt(),
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity
  };

  const blockBlobClient = containers.products.getBlockBlobClient(`${product.id}`)
  try {
    await blockBlobClient.upload(JSON.stringify(product),JSON.stringify(product).length);
    // download created Blob from Azure Blob Storage
     const downloadBlockBlobResponse = await blockBlobClient.download(); 
     const newProduct = (await streamToBuffer(downloadBlockBlobResponse.readableStreamBody)).toString();
    
     res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).send(error);
  }
}


async function updateProduct({req, res}: Context) {
  const product = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity
  };

  const blockBlobClient = containers.products.getBlockBlobClient(`${req.params.id}`)
  try {
    await blockBlobClient.upload(JSON.stringify(product),JSON.stringify(product).length);
    // download created Blob from Azure Blob Storage
     const downloadBlockBlobResponse = await blockBlobClient.download(); 
     const newProduct = (await streamToBuffer(downloadBlockBlobResponse.readableStreamBody)).toString();
    
     res.status(202).json(newProduct);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteProduct({req, res}: Context) {
  const blockBlobClient = containers.products.getBlockBlobClient(`${req.params.id}`)
  try {
        await blockBlobClient.deleteIfExists()
        const response = 'Product was Deleted successfully 😎'
        res.status(200).json(response);
      } catch (error) {
        res.status(500).send(error);
      }
}


export default {getProducts, addProduct, updateProduct, deleteProduct}