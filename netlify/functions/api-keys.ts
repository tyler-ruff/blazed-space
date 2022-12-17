import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  return {
    statusCode: 200,
    body: JSON.stringify( { admin: "639c76cd0acf8b003dddb2ff:fde63f6dfd99cbf7d4a219a50316adce3e0a6039646e639c6f19bb9ada5d5548" } )
  }
};

export { handler };