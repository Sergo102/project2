window.addEventListener('DOMContentLoaded', function(){
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
})