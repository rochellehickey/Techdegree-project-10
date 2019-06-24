$(document).ready(function() {
  // ADDING EMPLOYEES TO THE PAGE
  // Accessing randomuser.me/api
  $.ajax({
    url: 'https://randomuser.me/api/?format=json&inc=picture,name,email,location,phone,dob&nat=us,fr,gb,nz&results=12',
    dataType: 'json',
    type: 'GET',
    success: function(data) {

      const randomUserURL = "https://randomuser.me/api/?format=json&inc=picture,name,email,location,phone,dob&nat=us,fr,gb,nz&results=12";
      let p = '';

      fetch(randomUserURL)
        .then((response) => response.json())
        .then(function(data){
           fetchInformation(randomUserURL);
        })

      // Using randomuser.me to fill in HTML
      function fetchInformation(randomUserURL){
        fetch(randomUserURL)
        .then((response) => response.json())
        .then(function(data){
          // Adding HTML to the page
          data.results.forEach(person => {
            p = `<a href="#${person.name.first}-${person.name.last}" class="employee-card"> <!-- EMPLOYEE CARD -->
            <img src="${person.picture.medium}" class="employee-avatar" alt="Employee Picture">
            <div class="employee-contact-info">
              <h2 class="employee-name" data-name="${person.name.first} ${person.name.last}">${person.name.first} ${person.name.last}</h2>
              <p class="employee-email">${person.email}</p>
            <p class="employee-location">${person.location.city}</p>
            </div>
            </a>
            <div id="${person.name.first}-${person.name.last}" class="overlay">
              <a href="#" class="close"><span class="fas fa-times"></span></a>
              <img src="${person.picture.medium}" class="employee-avatar-overlay" alt="Employee Picture">
              <div class="employee-contact-info-overlay">
                <h2 class="employee-name-overlay" data-name="${person.name.first} ${person.name.last}">${person.name.first} ${person.name.last}</h2>
                <p class="employee-email-overlay">${person.email}</p>
              <p class="employee-location-overlay">${person.location.city}</p>
              <hr>
              <p class="employee-phone-overlay">${person.phone}</p>
              <p class="employee-address-overlay">${person.location.street}, ${person.location.city}, ${person.location.state} ${person.location.postcode}</p>
              <p class="employee-birthday-overlay">Birthday: ${person.dob.date}</p>
              </div>
              <div class="button-container">
              <button class="back"><span class="fas fa-chevron-circle-left"></span></button>
              <button class="next"><span class="fas fa-chevron-circle-right"></span></button>
              </div>
            </div>`;
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


  // NAVIGATING BETWEEN MODALS
  // Opens Modal
  $(document).on('click', '.employee-card', function() {
    $overlayID = $(this).attr('href');
    $($overlayID).addClass('show');
    event.preventDefault();
  });

  // Closes Modal
  $(document).on('click', '.close', function() {
    $(this).closest('.overlay').removeClass('show');
    event.preventDefault();
  });

  // if the NEXT link is clicked in the overlay
  $(document).on('click', '.next', function() {
    $thisOverlay = $(this).closest('.overlay');
    $nextOverlay = $(this).closest('.overlay').nextAll('.employee-card:visible').first().next();
    $firstOverlay = $(this).closest('.overlay').prevAll('.employee-card:visible').last().next();


    if ($nextOverlay.length > 0) {
      $('.overlay').removeClass('show');
      $($nextOverlay).addClass('show');
    } else {
      $($thisOverlay).removeClass('show');
      $($firstOverlay).addClass('show');
    }

    event.preventDefault();

  });

  // if the BACK link is clicked in the overlay
  $(document).on('click', '.back', function() {
    $thisOverlay = $(this).closest('.overlay');
    $prevOverlay = $(this).closest('.overlay').prevAll('.employee-card:visible').eq(1).next();
    $lastOverlay = $(this).closest('.overlay').nextAll('.employee-card:visible').last().next();

    if ($prevOverlay.length > 0) {
      $('.overlay').removeClass('show');
      $($prevOverlay).addClass('show');
    } else {
      $($thisOverlay).removeClass('show');
      $($lastOverlay).addClass('show');
    }

    event.preventDefault();
  });

}); // end document ready














