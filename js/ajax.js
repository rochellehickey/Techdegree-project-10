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
            <h2 id="employee-name" class="employee-name" data-name="${person.name.first} ${person.name.last}">${person.name.first} ${person.name.last}</h2>
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
  $("#searchBox").keyup(function(event){
    // event.preventDefault();
    console.log("1");
    // input field value for filtering
    let $filter = $("input[type=search]").val().toLowerCase();
    // let $name = $(this).find('#employee-name').attr('data-name').toLowerCase();
    console.log("filter: " + $filter);
    // console.log("name: " + $name);

    // if filter does not equal name: hide card
    if ($filter !== '') {
      console.log("2");
      let $name = $(this).find('#employee-name').attr('data-name').toLowerCase();
      console.log("name: " + $name);
      $('#employee-card').hide();
      console.log("3");
      Object.keys($name).forEach(function(){
        console.log("4");
        // if filter does equal name: show card
        if ($name.indexOf($filter) >= 0) {
          console.log("5");
          $('#employee-card').show();
        }
      }) // end of forEach
    } else {
      console.log("6");
      $('#employee-card').show();
    }
  });








}); // end document ready














