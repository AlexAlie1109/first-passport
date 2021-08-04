$(document).ready(function(){

 $(".submit-bttn").submit(function(e){
   e.preventDefault();
   console.log("Hello World");

   let signIn = {
     username: $('.username-input').val(),
     password: $('.password-input').val()
    }

    $.ajax({
      method:'POST',
      method:'/api/sign-in',
      url:'json',
      data: JSON.strignify(signIn),
      contentType:'application/json'
    }).then(function(res){
      console.log(res);
    })
 })

});
