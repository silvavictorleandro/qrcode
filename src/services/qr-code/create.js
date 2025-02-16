import prompt from "prompt";
import qrcode from "../../prompts/prompt-qrcode.js";
import promptQRcode from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";

async function createQRcode() {
  prompt.get(promptQRcode, handle);
}

export default createQRcode;
