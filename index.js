// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var patterOne =
  /[\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]/g;
var checKFine = document.querySelector('body .unicode span');
var fullText = document.querySelector('body .unicode');
var firstLine = checKFine.textContent.match(patterOne);
var AllLine = fullText.textContent.match(patterOne);
console.log(firstLine.length);
appDiv.innerHTML = `<h1>Chinnese character count first line: ${firstLine.length}</h1><h2>Chinnese character count all line: ${AllLine.length}</h2>`;

//alert("Chineese character count")
// var character_xp = new RegExp(
//   String.raw`[\u{FA0E}\u{FA0F}\u{FA11}\u{FA13}\u{FA14}\u{FA1F}\u{FA21}\u{FA23}\u{FA24}\u{FA27}-\u{FA29}]|[\u{3400}-\u{4DB5}]|[\u{20000}-\u{2A6D6}]|[\u{2A700}-\u{2B734}]|[\u{2B740}-\u{2B81D}]|[\u{2B820}-\u{2CEAF}]|[\u{2CEB0}-\u{2EBEF}]`
// );
// console.log(checK.textContent.match(character_xp));
