
$(document).ready(function() {
  $.ajax({
  url: 'https://randomuser.me/api/?format=json&inc=picture,name,email,location,phone,dob&results=12',
  dataType: 'json',
  type: 'GET',
  success: function(data) {
    console.log('ajax request success');
    console.log(data);
  },
  error: function(potato) {
    console.log('error', potato);
  }
});
});

const employeeCard = document.getElementById('employee-card');

const template = results => {
  return '<img src="${results.picture.medium}" id="employee-avatar" class="employee-avatar" alt="Employee Picture">
        <div id="employee-contact-info" class="employee-contact-info">
          <h2 id="employee-name" class="employee-name">${results.name.first} ${results.name.last}</h2>
          <p id="employee-email" class="employee-email">${results.email}<a href=""></a></p>
          <p id="employee-location" class="employee-location">${results.location.city}</p>
        </div>
      </div>';
};

fetch('https://randomuser.me/api/?format=json&inc=picture,name,email,location,phone,dob&results=12', { method: 'get' })
  .then(response => response.json())
  .then(data => data.results.forEach(result => employeeCard.innerHTML += template(result)))
  .catch(error => console.log(error));