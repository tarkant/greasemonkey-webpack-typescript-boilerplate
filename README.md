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
// @match        http://example.com/
```

**Note:** You can still install the current boilerplate userscript [by clicking here](https://github.com/tarkant/greasemonkey-webpack-typescript-boilerplate/raw/master/dist/greasemonkey-webpack-typescript-boilerplate.user.js) then headint to [http://example.com/](http://example.com/), you'll see a div with injected html and CSS 😊 .

## ⚙ How does the post-build.js work?

This script file will be ran by NodeJS to prepend the header needed for Greasemonkey to detect that it is a userscript. I tried to make it as automatic as possible so it will read the package.json information and add them to the userscript.

Mainly the script will take these information from the package.json :
- name
- version
- description
- license
- author

**Important note:** To gather the Github repo url, the script replaces some strings in this funky line of code :
```js
const url = package.repository.url.replace('git+', '').replace('.git', '');
```
If by some change something goes wrong, you know where to look.

**Important note 2:** The script also adds the update and download url by taking the precedent url and adding some static text using this funky line :
```js
const updateUrl = package.repository.url.replace('git+', '').replace('.git', '') + '/raw/master/dist/' + distUserScript;
```
Again, if you don't understand why something is going wrong, this might be the culprit.

## ⚒ How to build my userscript ?

To build your userscript just run :

```bash
npm run build
```

This will the userscript in the `dist` folder that you can install on Greasemonkey or Tampermonkey.


## 🆘 Issues and contributions

If you have an issue with the boilerplate or want to contribute, please let me know I'll be happy to interact with you.

Happy hacking!

## ⏲ Changelog

- v1.0.4: Improve HTML importing
- v1.0.3: Fix example.com `@match` pattern
- v1.0.2: Bump packages version
- v1.0.1: Minor fixes & made userscript work for example.com
- v1.0.0: Base boilerplate