$(document).ready(function(){
  var name, company, emailFrom, text;
  $("#sendMail").click(function(e){
    e.preventDefault();

    name = $("#inputName").val();
    company = $("#inputCompany").val();
    emailFrom = $("#inputEmail").val();
    text = $("#emailText").val();

    $.ajax({
      type: 'POST',
      url: '/send',
      contentType: 'application/json',
      data: JSON.stringify({name:name,company:company,emailFrom:emailFrom,text:text}),
      dataType: 'json',
      success: function(data){
        $("#inputName").val('');
        $("#inputCompany").val('');
        $("#inputEmail").val('');
        $("#emailText").val('');
      }
    });
  });
});
