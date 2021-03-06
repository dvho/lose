# Lose
As a response to [_Flay_](https://www.npmjs.com/package/flay), which flays the diacritical marks off your strings, [_Lose_](https://www.npmjs.com/package/lose) loses the base characters but keeps the combining diacritical marks.

_________________________
## API
### lose(`string`)
```js
var lose = require('lose');
```
&nbsp;
_________________________
#### -- Example --
```js
const splitCombiningCharsArray = lose('I’m emailing my friend Chloë from a café in Chișinău.');

splitCombiningCharsArray.forEach(i => console.log(`For ${i.character} the diacritical mark is ${i.diacritic}, so we'll split it from ${i.character} and lose ${i.lose}.`));
```
> Output will be:
```
"For ë the diacritical mark is   ̈  , so we'll split it from ë and lose e."
"For é the diacritical mark is   ́  , so we'll split it from é and lose e."
"For ș the diacritical mark is   ̗  , so we'll split it from ŗ and lose r."
"For ă the diacritical mark is   ̆  , so we'll split it from ă and lose a."
```
_________________________
&nbsp;
## Notes
As a response to [_Flay_](https://www.npmjs.com/package/flay), which flays the diacritical marks off your strings, [_Lose_](https://www.npmjs.com/package/lose) loses the base characters but keeps the combining diacritical marks. [_Lose_](https://www.npmjs.com/package/lose) features attention to ISO 192-383 and a whole lot more. Currently supporting: Afrikaans, Albanian, Azerbaijani, Basque, Bosnian, Catalan, Cebuano, Corsican, Croatian, Czech, Danish, Dutch, Eastern Frisian, \*English, Esperanto, Estonian, Filipino, Finnish, French, Gaelic, Galician, German, Haitian Creole, Hausa, Hawaiian, \*Hmong Thoob Teb, Hungarian, Icelandic, Igbo, Italian, Javanese, \*Kinyarwanda, Kurdish, Latvian, Lithuanian, Luxembourgish, Maltese, Maori, North Frisian, Northern Sotho, Norwegian, Polish, Portuguese, Romanian, \*Samoan, Scottish Gaelic, \*Shona, Slovak, Slovenian, \*Somali, Southern Sotho, Spanish, Sundanese, \*Swahili, Swedish, Tagalog, Turkish, Turkmen, Vietnamese, \*Welsh, Western Frisian, Xhosa, Yoruba, \*Zulu

\*No regular diacritical marks

## Installation
With [npm](http://npmjs.org) do
```bash
$ npm install lose
```

## License
(MIT)

Copyright (c) 2022 David H. &lt;email6@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
