# 🐵 Greasemonkey Webpack + TypeScript boilerplate

Create your Greasemonkey userscripts with the comfort of Webpack and TypeScript.

## 📑 What's the purpose of this boilerplate?

This will help you generate a userscript file while being able to write everything in TypeSript. You can also inject SCSS files and HTML. This uses no fancy frameworks or libs to avoid interfering with your destination website but of course, you're free to do whatever you like. I believe that Webpack will bundle your libs in a way that they will not interfere with the destination page.

## 🍴 How to use this boilerplate ?

Simple, just click the "Use this template" button or better, [click here](https://github.com/tarkant/greasemonkey-webpack-typescript-boilerplate/generate) and create your repo.

Next, run the good old :
```bash
npm install
```

Finally and very importantly, go to the file `post-build.js` and replace the @match pattern with your destination website :

```js
// @match        http://localhost:3000/
```

## ⚒ How to build my userscript ?

To build your userscript just run :

```bash
npm run build
```

This will the userscript in the `dist` folder that you can install on Greasemonkey or Tampermonkey.


## 🆘 Issues and contributions

If you have an issue with the boilerplate or want to contribute, please let me know I'll be happy to interact with you.

Happy hacking!