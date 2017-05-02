var firstname = document.getElementById('first-name')
firstname.addEventListener('input', upDate)
var lastname = document.getElementById('last-name')
lastname.addEventListener('input', upDate)
var describe = document.getElementById('describe')
describe.addEventListener('input', upDate)
var email = document.getElementById('email')
email.addEventListener('input', upDate)
var phone = document.getElementById('phone')
phone.addEventListener('input', upDate)
var preview = document.getElementById('preview')
var raw = document.getElementById('raw')

function upDate() {
  // HAHA GET IT? UP"DATE"! Like in dating? date? alright, i'll settle down
  var profile = '<h1>Hi, my name is ' + firstname.value + ' ' + lastname.value + ' !</h1>'  +
                '<p>' + describe.value + '</p>' +
                '<p> If you\'re interested in a date, you can email me at' +
                '<a href="mailto:' + email.value + '" target="_blank">' + email.value + '</a>'  +
                 'or give me a call at <a href="tel:' + phone.value + '" target="_blank">' + phone.value + '</a>.' +
                '</p>'
  preview.innerHTML = profile
  raw.textContent = profile
}
