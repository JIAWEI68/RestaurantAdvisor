$(document).ready(function (){
    var token = sessionStorage.getItem("token");
    if (token != null){
        $('#register').hide();
        $('#login').hide();
        $('#logout').show();
        $('#editMenu').show();
    }
    else{
        window.location.href="index.html"
    }
})