for ( var i = 1; i <= 100; i++ ) {
  var message = i;
  if (i % 5 === 0 && i % 3 === 0) {
    message = "FRIZZBUZZ";
  } else if (i % 3 === 0) {
    message = "FRIZZ";
  } else if (i % 5 === 0) {
    message = "BUZZ";
  }
  document.getElementById('list').innerHTML += "<li>" + message + "</li>";
}

console.log(message);
