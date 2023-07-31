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

  // "View all" code (767px width or lower)
  const li = document.querySelectorAll('.li');
  const li2 = document.querySelectorAll('.li2');
  const viewButton = document.querySelector('.top__view');
  let ul1 = document.querySelector('#top-stories__ul-first');
  let ul2 = document.querySelector('#top-stories__ul-second');

  for(let i = 0;i < li.length;i++){
    li2[i].innerText = li[i].innerHTML.slice(1, 55) + "...";
  }

  viewButton.addEventListener('click', function(){
    if(ul1.style.display == 'none'){
      ul1.style.display = 'block';
      ul2.style.display = 'none';
    }else{
      ul1.style.display = 'none';
      ul2.style.display = 'block';
    }
  })
});

