import prompt from "prompt";
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";
import createQRcode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
  prompt.get(promptSchemaMain, async (err, result) => {
    if (err) console.log(err);

    if (result.select == 1) await createQRcode();
    if (result.select == 2) await createPassword();
  });

  prompt.start();
}

main();
