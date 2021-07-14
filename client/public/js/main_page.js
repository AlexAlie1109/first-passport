$(document).ready(function(){

  $(".sign_up_bttn").on('click', function(){
    console.log("Hello World");

    $.ajax({
      method:'GET',
      url:'/api/sign-up'
    }).then(function(res){
      console.log(res.message);
      window.location.href = "/sign-up"
    })
  });



  $(".sign_in_bttn").on('click', function(){
    console.log("Hello World 2");

    $.ajax({
      method:'GET',
      url:'api/sign-in'
    }).then(function(res){
      console.log(res.message);
      window.location.href = "/sign_in"
    })
  })

})
