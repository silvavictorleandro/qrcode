import chalk from "chalk";

const promptQRcode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QRCode"),
  },
  {
    name: "type",
    description: chalk.yellow(
      "Escolha entre o tipo de QRCode (1 - NORMAL ou (2 - TERMINAL"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas 1 ou 2"),
    required: true,
  },
];

export default promptQRcode;
