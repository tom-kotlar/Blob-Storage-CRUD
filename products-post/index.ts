import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { productService } from "../shared";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    await productService.addProduct(context);
};

export default httpTrigger;