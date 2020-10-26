for (var i = 1; i < 100; i++) {
  message = i;
  if (i % 3 === 0) {
    message = "FRIZZ"
  } else if (i % 5 === 0) {
    message = "BUZZ"
  } else (i % 5 == 0 && i % 3 == 0) {
    message = "FRIZZBUZZ"
  }
};

var message;

console.log(message);

document.getElementById('listNumbers').innerHTML = "<li>" + message + "</li>";
