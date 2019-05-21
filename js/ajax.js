$(document).ready(function() {
  // ADDING EMPLOYEES TO THE PAGE
  $.ajax({
    url: 'https://randomuser.me/api/?format=json&inc=picture,name,email,location,phone,dob&nat=us,dk,fr,gb,nz&results=12',
    dataType: 'json',
    type: 'GET',
    success: function(data) {
      console.log('ajax request success');
      console.log(data);

      const randomUserURL = "https://randomuser.me/api/?format=json&inc=picture,name,email,location,phone,dob&nat=us,dk,fr,gb,nz&results=12";
      let p = '';

      fetch(randomUserURL)
        .then((response) => response.json())
        .then(function(data){
           url = "https://randomuser.me/api/?format=json&inc=picture,name,email,location,phone,dob&nat=us,dk,fr,gb,nz&results=12";
           fetchInformation(randomUserURL);
        })

      function fetchInformation(randomUserURL){
        fetch(randomUserURL)
        .then((response) => response.json())
        .then(function(data){
          data.results.forEach(person => {
            p = `<div id="employee-card" class="employee-card"> <!-- EMPLOYEE CARD -->
            <img src="${person.picture.medium}" id="employee-avatar" class="employee-avatar" alt="Employee Picture">
            <div id="employee-contact-info" class="employee-contact-info">
            <h2 id="employee-name" class="employee-name"> ${person.name.first} ${person.name.last}</h2>
            <p id="employee-email" class="employee-email"> ${person.email} <a href=""></a></p>
            <p id="employee-location" class="employee-location"> ${person.location.city}</p>
            </div>
            </div>
            </div>`;
            console.log(p);
            $(".card-group").append(p);
          }); // end forEach
        }); // end function(data)
      }; // end fetchInformation
    }, // end success
    error: function(potato) {
        console.log('error', potato);
      } // end error
  }); // end ajax


  // SEARCH BOX
  $("#searchBox").keyup(function(){
    // input field value for filtering
    let filter = $(this).val().toLowerCase();

    // if filter does not equal name: hide card
    if (filter !== "") {
      $('#employee-card').hide();
      $('#employee-card').each(function(){
        let firstName = $(this).find('h2').text("${person.name.first}").toLowerCase();
        let lastName = $(this).find('h2').text("${person.name.last}").toLowerCase();

        // if filter does equal name: show card
        if (firstName.indexOf(filter) >= 0 || lastName.indexOf(filter) >= 0) {
          $(this).show();
        }
      })
    } else {
      $('#employee-card').show();
    }
  });








}); // end document ready














