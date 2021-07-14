$(document).ready(function(){

  $('#sign_up_form').submit(function(e){
    e.preventDefault();

    let userInfo = {
      name: $('.name-input').val(),
      username: $('.username_input').val(),
      password: $('.password_input').val()
    };

    console.log(userInfo)
  });






});
