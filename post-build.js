/**
 * This script takes your package.json info and prepends the necessary header comments to the userscript.
 * You'll have to add your @match url and @include if needed (below an example)
 * 
 * // @match        https://a-cool-website.com
 * // @include      /someRegExOrOtherUrl/
 */

const fs = require('fs');
const package = require('./package.json');

const distUserScript = package.name + '.user.js';
const url = package.repository.url.replace('git+', '').replace('.git', '');
const updateUrl = package.repository.url.replace('git+', '').replace('.git', '') + '/raw/master/dist/' + distUserScript;
const downloadUrl = updateUrl;

const HEADER = `// ==UserScript==
// @name         ${package.name}
// @namespace    ${url}
// @version      ${package.version}
// @description  ${package.description}
// @licence      ${package.license}
// @author       ${package.author}
// @match        http*://example.com/
// @grant        none
// @updateURL    ${updateUrl}
// @downloadURL  ${downloadUrl}
// ==/UserScript==

`;

/**
 * It's dangerous to go alone, make sure to be well equiped if you want to fiddle with this code ;D
 */

const data = fs.readFileSync('./dist/' + distUserScript);
const fd = fs.openSync('./dist/' + distUserScript, 'w+');
const insert = new Buffer.alloc(HEADER.length, HEADER);

fs.writeSync(fd, insert, 0, insert.length, 0);
fs.writeSync(fd, data, 0, data.length, insert.length);
fs.close(fd, (err) => {
  if (err){ 
    throw err;
  } else {
    console.info('Successfully added the header to the userscript !');
  }
});