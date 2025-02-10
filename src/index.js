import prompt from "prompt";

import mainPrompt from "./prompt/prompt-main.js";

async function main() {
  prompt.get(mainPrompt, async (err, result) => {
    if (result.select === 1) {
      console.log("escolheu o QRCODE");
    }
    if (result.select === 2) {
      console.log("escolheu o PASSWORD");
    }
  });

  prompt.start();
}

main();
