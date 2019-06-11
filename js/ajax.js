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
            p = `<a href="#" class="employee-card"> <!-- EMPLOYEE CARD -->
            <img src="${person.picture.medium}" class="employee-avatar" alt="Employee Picture">
            <div class="employee-contact-info">
              <h2 class="employee-name" data-name="${person.name.first} ${person.name.last}">${person.name.first} ${person.name.last}</h2>
              <p class="employee-email">${person.email}</p>
            <p class="employee-location">${person.location.city}</p>
            </div>
            </a>`;
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
    let $searchFilter = $("input[type=search]").val().toLowerCase();
    console.log("filter: " + $searchFilter); // checking to see if key pressed equals filter value

    // if search bar is not empty
    if ($searchFilter !== "") {
      // hide all the cards
      $('.employee-card').hide();
      // go through each card
      $('.employee-card').each(function(){
        // get all names on page
        let $eNames = $(this).find('.employee-name').text();

        // if search bar does equal the name: show card
        if ($eNames.indexOf($searchFilter) >= 0) {
          $(this).show();
        }
      })
    } else {
      $('.employee-card').show();
    }

  });






}); // end document ready














