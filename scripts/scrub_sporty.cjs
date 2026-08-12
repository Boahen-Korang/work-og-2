const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'index.html');
let s = fs.readFileSync(file, 'utf8');
const replacements = [
  [/sportybet/gi, 'example'],
  [/www\.sportybet\.com/g, 'www.example.com'],
  [/https?:\/\/www\.sportybet\.com/g, 'https://www.example.com'],
  [/alive-gh\.sportybet\.com/g, 'alive-gh.example.com'],
  [/livescore\.sportybet\.com/g, 'livescore.example.com'],
  [/faro-sportybet\.sportydog\.net/g, 'faro-example.sportydog.net'],
  [/@sportybet\.com/g, '@example.com'],
  [/https?:\/\/www\.sportybet\.com\/gh\//g, 'https://www.example.com/gh/'],
  [/sportybet\.com/g, 'example.com']
];
for (const [re, val] of replacements) s = s.replace(re, val);
fs.writeFileSync(file, s, 'utf8');
console.log('Scrub complete');
