const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



//function titleCased(){
  //const words = tutorials.toLowerCase().split(' ');
  //console.log(words);
  //words.map(caps => { 
    //return caps.charAt(0).toUpperCase() + caps.slice(1);
  //})
  //.join(' ');

  //return tutorials;
//}

function titleCased(){
  return tutorials.map(tutorial => {
    const words = tutorial.split(' ');
    const capWords = words.map(word => word[0].toUpperCase() + word.slice(1))
    const capString = capWords.join(' ')
    return capString
  })
}

