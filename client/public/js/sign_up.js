$(document).ready(function(){

  // $.ajax({
  //   method:'GET',
  //   url:'/api/sign-up'
  // }).then(function(res){
  //   if(res.message === "signed-in"){
  //     window.location.href= '/profile/' + res.user_id
  //   }
  // })

  $('#sign_up_form').on('submit',function(e){
    e.preventDefault();

    let userInfo = {
      name: $('.name-input').val(),
      username: $('.username-input').val(),
      password: $('.password-input').val()
    };

    console.log(userInfo)

    $.ajax({
      method:'POST',
      url: '/api/sign-up',
      dataType: 'json',
      data: JSON.stringify(userInfo),
      contentType: 'application/json'
    }).then(function(res){
      // console.log(res.info.message);
      if(!res.user){
        if(res.info.message === "username taken"){
          alert("Username Taken")
        }
      }else{
        window.location.href= '/sign-in'
      }
    })
  });




});
