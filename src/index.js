import prompt from "prompt";

import mainPrompt from "./prompts/prompt-main.js";
import createQRcode from "./services/qr-code/create.js";

async function main() {
  prompt.get(mainPrompt, async (err, result) => {
    if (result.select === 1) await createQRcode();
    if (result.select === 2) {
      console.log("escolheu o PASSWORD");
    }
  });

  prompt.start();
}

main();
