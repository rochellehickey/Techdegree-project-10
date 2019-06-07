$(document).ready(function() {
  // ADDING EMPLOYEES TO THE PAGE
  // Accessing randomuser.me/api
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

      // Using randomuser.me to fill in HTML
      function fetchInformation(randomUserURL){
        fetch(randomUserURL)
        .then((response) => response.json())
        .then(function(data){
          // Adding HTML to the page
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
    // input field value for filtering
    let $filter = $("input[type=search]").val().toLowerCase();
    // getting array of names to compare to filter
    let $name = $(this).find('#employee-name');
    console.log("filter: " + $filter); // checking to see if key pressed equals filter value
    console.log("name: " + JSON.stringify($name)); // checking to see if $name is an array


    $name.filter(function() {
        return $(this).text().toLowerCase().indexOf($filter) !== -1;
    }).hide();



    // if filter is not empty
    // if ($filter !== '') {
    //   // go through each employee name
    //   Object.keys($name).forEach(function(){
    //     // if name does not match filter: hide the employee card
    //   $('#employee-card').hide();
    //     // if filter does equal name: show card
    //     if ($name.indexOf($filter)) {
    //       $('#employee-card').show();
    //     }
    //   }) // end of forEach
    // } else {
    //   // else, show employee card
    //   $('#employee-card').show();
    // }
  });

// .attr('data-name').toLowerCase();





}); // end document ready














