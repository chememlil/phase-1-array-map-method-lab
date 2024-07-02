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

const titleCased = () => {
  return tutorials.map(function(title) {
    // Split the title into words
    let words = title.split(' ');
    
    // Capitalize each word
    let capitalizedWords = words.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    // Join the capitalized words into a title case sentence
    let titleCaseTitle = capitalizedWords.join(' ');
    
    return titleCaseTitle;
  });
};

// Example output
console.log(titleCased());

// Export the function for testing purposes if necessary
module.exports = {
  titleCased
};
