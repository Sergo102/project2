window.addEventListener('DOMContentLoaded', function(){
  // Push notifications code
  let submit = document.querySelector('input[type="submit"]');
  let emailInput = document.querySelector('input[type="email"]');
  
  submit.addEventListener('click', function(){

    Notification.requestPermission().then(perm => {
      if(perm === "granted"){
        const notif = new Notification("Click on it",{
          body: "This will 'alert' your email",
          data: { hello: "world"}
        }
      )

        notif.addEventListener('click', e => {
          if(emailInput.value === ""){
            alert("Input your email pls")
          }
          else if(emailInput.checkValidity()){
            alert(`Hi ${emailInput.value}`)
            emailInput.value = "";
          }
          else{
            alert("Your email isn't valid")
          }
        })
      }
    }) 
  })

  // Burger menu code
  let menuButton = document.querySelector('.sections__button');
  let menuButton2 = document.querySelector('.sections__button2');
  let menuWrapper = document.querySelector('#menu-wrapper');
  
  menuButton.addEventListener('click', function(){
    menuWrapper.className = "menu-wrapper";    
  });

  menuButton2.addEventListener('click', function(){
    menuWrapper.className = "menu-wrapper-hidden";    
  });
});

