#!/usr/bin/env node
import terminalImage from "terminal-image";
import chalk from "chalk";
import got from "got";


got("https://avatars.githubusercontent.com/u/148815537?v=4", {
  responseType: "buffer",
})
  .then(function (image) {
    return terminalImage.buffer(image.body, { width: "33%" });
  })
  .then(function (image) {
    print("\n");
    console.log(image);

    console.log(chalk.bgGreen("I am " + chalk.bold(chalk.cyan("BE2K\n"))));

    console.log(
      chalk.blue(
        "I am a developer based in Kansas City!\nI play all sorts of games, like Destiny, Minecraft, and more!\n\nYou can find me at these links:\n\n",
      ),
    );
    console.log(
      chalk.red(
        "Email: me@be2k.net\nGithub: https://github.com/be2k\nMore coming soon...",
      ),
    );
  });
