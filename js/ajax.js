$(document).ready(function (e) {
   e.preventDefault();
   const $employeeCard = $('#employee-card');
   const $employeeContactInfo = $('#employee-contact-info');
   const $employeeAvatar = $('#employee-avatar');
   const $employeeName = $('#employee-name');
   const $employeeEmail = $('#employee-email');
   const $employeeLocation = $('#employee-location');

    // the AJAX part
    var randomUserAPI = {
          url: 'https://randomuser.me/api/?format=json&inc=picture,name,email,location,phone,dob&results=12&callback=randomuserdata',
          dataType: 'json',
          success: function(data) {
            console.log(data);
        };


    function displayEmployees(data) {
      var employeeCardHTML = '<div>';
      $.each(data.items,function(i,card) {
        employeeCardHTML += '<img src=' + card.picture + ' class="employee-avatar">';
        employeeCardHTML += '<div class="employee-contact-info"'>;
        employeeCardHTML += '<h2 class="employee-name">' + card.name + '</h2>';
        employeeCardHTML += '<p class="employee-email"><a href="' + card.email + '"> </p>';
        employeeCardHTML += '<p class="employee-location">' + card.location + '</p>';
      }); // end each
      employeeCardHTML += '</div>';
      employeeCardHTML += '</div>';
      $(employeeCard).html(employeeCardHTML);
    }
    $.getJSON(randomUserAPI, displayEmployees); //need to get this to go with my code