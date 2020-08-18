//Business Logic

const isPalindrome = (string) => {
  const inputString = string.toLowerCase();
  const reverseString = inputString.split('').reverse().join('');

  if (inputString === reverseString) {
    return true;
  }
  return false;
}

//UI logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const userString = $("input#userInput").val();
    let result = isPalindrome(userString);
    
    if (result === true) {
      $(".output").text("This is a palindrome!");
    } else {
      $(".output").text("This is NOT a palindrome...");

    }
  });
});