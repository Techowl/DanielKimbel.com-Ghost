function addEmailAddressToMailingList(e) {
  e.preventDefault();

  // extract email address from form
  //
  var emailAddress = e.target.getElementsByTagName("input")[0].value;

  // brief client-side validation
  //
  if (emailAddress === "") {
    alert("You must enter an email address.");
    return;
  }

  var data = {email: emailAddress};

  var request = new XMLHttpRequest();
  request.open('POST', '/url', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success -- clear form contents
      //
      e.target.getElementsByTagName("input")[0].value = '';
      alert("Thanks! Your email address was successfully added.");

    } else {
      // Failure
      //
      alert("There was an error adding your email address to the list.");
    }
  };

  request.onerror = function() {
    // Connection Error
    //
    alert("A connection error occurred -- please try again later.");
  };

  request.send(data);
}

function setFormListener() {
  var form = document.getElementById('email-newsletter-form');
  form.addEventListener("submit", addEmailAddressToMailingList);
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(setFormListener);


