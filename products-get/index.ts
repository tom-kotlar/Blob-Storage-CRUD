import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { productService } from "../shared";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
     context.req.body = context.bindings.getProducts
     await productService.getProducts(context)
};

export default httpTrigger;