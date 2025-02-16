import prompt from "prompt";
import qrcode from "../../prompts-schema/prompt-schema-qrcode.js";
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

async function createQRcode() {
  prompt.get(promptSchemaQRCode, handle);
}

export default createQRcode;
