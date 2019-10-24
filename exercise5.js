// Let's Form a Sentence
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word+' '+second+' '+third+' '+fourth+' '+fifth+' '+sixth+' '+seventh)

// Index Accesing - 1 by 1

var word = 'Wow JavaScript is so cool';
var exaxmpleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4]+word[5]+word[6]+word[7]+word[8]+word[9]+word[10]+word[11]+word[12]+word[13];
var thirdWord = word[15]+word[16];
var fourthWord = word[18]+word[19];
var fifthWord = word[21]+word[22]+word[23]+word[24];

console.log('First word: '+exaxmpleFirstWord);
console.log('Second word: '+secondWord);
console.log('Third word: '+thirdWord);
console.log('Fourth word: '+fourthWord);
console.log('Fifth word: '+fifthWord);

// Breaking Sentence (Again) using Substring

var word = 'Wow JavaScript is so cool';
var exaxmpleFirstWord3 = word.substring(0,3);
var secondWord3 = word.substring(4,14);
var thirdWord3 = word.substring(15,17);
var fourthWord3 = word.substring(18,20);
var fifthWord3 = word.substring(21);

console.log('First word: '+exaxmpleFirstWord3);
console.log('Second word: '+secondWord3);
console.log('Third word: '+thirdWord3);
console.log('Fourth word: '+fourthWord3);
console.log('Fifth word: '+fifthWord3);

// Breaking Sentence (yet Again) and Count Each Length

var word = 'Wow JavaScript is so cool';
var exaxmpleFirstWord4 = word.substring(0,3);
var secondWord4 = word.substring(4,14);
var thirdWord4 = word.substring(15,17);
var fourthWord4 = word.substring(18,20);
var fifthWord4 = word.substring(21);

var firstWordLength = exaxmpleFirstWord4.length;
var secondWordLength = secondWord4.length;
var thirdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;

console.log('First word: '+exaxmpleFirstWord4+' with length: '+firstWordLength);
console.log('Second word: '+secondWord4+' with length: '+secondWordLength);
console.log('Third word: '+thirdWord4+' with length: '+thirdWordLength);
console.log('Fourth word: '+fourthWord4+' with length: '+fourthWordLength);
console.log('Fifth word: '+fifthWord4+' with length: '+fifthWordLength);