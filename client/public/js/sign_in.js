$(document).ready(function(){

  $.ajax({
    method: 'GET',
    url: '/api/sign-in'
  }).then(function(res){
    if(res.message === "signed-in"){
      window.location.href ='/profile/' + res.user_id
      console.log(res.user_id);
    }
  })


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
      console.log(res.info);
      if(!res.success){
        if(res.info.message === "incorrect password"){
          alert("Enter Correct Password")
        }else if(res.info.message === "no user"){
          alert("Username Not Found")
        }
      }else{
        window.location.href = '/signed-in'
      }
    })
 })

});
