/**
* PHP Email Form Validation - v3.1
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
    let forms = document.querySelectorAll('.php-email-form');
    const submitBtn = document.querySelector('#submit');

//   forms.forEach( function(e) {
    submitBtn.addEventListener('click', (event) => {

console.log("I submitted")
//       let thisForm = this;

//       let action = thisForm.getAttribute('action');
//       let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');

//       if( ! action ) {
//         displayError(thisForm, 'The form action property is not set!')
//         return;
//       }
// timer = setInterval(function () {
    document.querySelector('.loading').classList.add('d-block');

// }, 1000)
setTimeout(showMessage, 3000)

function showMessage(){
    document.querySelector('.error-message').classList.remove('d-block');
    document.querySelector('.sent-message').classList.add('d-block');
    document.querySelector('.loading').classList.remove('d-block');

    }
    event.preventDefault();


//       let formData = new FormData( thisForm );

//       if ( recaptcha ) {
//         if(typeof grecaptcha !== "undefined" ) {
//           grecaptcha.ready(function() {
//             try {
//               grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
//               .then(token => {
//                 formData.set('recaptcha-response', token);
//                 php_email_form_submit(thisForm, action, formData);
//               })
//             } catch(error) {
//               displayError(thisForm, error)
//             }
//           });
//         } else {
//           displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
//         }
//       } else {
//         php_email_form_submit(thisForm, action, formData);
//       }
//     });

    })

//   function php_email_form_submit(thisForm, action, formData) {
//     fetch(action, {
//       method: 'POST',
//       body: formData,
//       headers: {'X-Requested-With': 'XMLHttpRequest'}
//     })
//     .then(response => {
//       if( response.ok ) {
//         return response.text()
//       } else {
//         throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
//       }
//     })
//     .then(data => {
//       thisForm.querySelector('.loading').classList.remove('d-block');
//       if (data.trim() == 'OK') {
//         thisForm.querySelector('.sent-message').classList.add('d-block');
//         thisForm.reset(); 
//       } else {
//         throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
//       }
//     })
//     .catch((error) => {
//       displayError(thisForm, error);
//     });
//   }

    function displayError(thisForm, error) {
        document.querySelector('.loading').classList.remove('d-block');
        document.querySelector('.error-message').innerHTML = error;
        document.querySelector('.error-message').classList.add('d-block');
    }
