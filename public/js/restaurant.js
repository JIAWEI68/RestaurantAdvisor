//This function is to call the movies api and get all the movies
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function getRestaurantData() {
  var request = new XMLHttpRequest();
  request.open("GET", restaurant_url, true);
  //This function will be called when data returns from the web api
  request.onload = function () {
    //get all the movies records into our movie array
    restaurant_array = JSON.parse(request.responseText);
    //Fetch the comments as well
    fetchComments();
    console.log(restaurant_array); // output to console
    //call the function so as to display all movies tiles for "Now Showing"
    displayRestaurants(category);
  };

  //This command starts the calling of the movies web api
  request.send();
}

function displayRestaurants(category) {
  var table = document.getElementById("restaurantTable");
  var restaurantCount = 0;
  document.getElementById("summary").textContent = "";
  document.getElementById("parent").textContent = "";

  table.innerHTML = "";
  totalRestaurant = restaurant_array.length;
  for (var count = 0; count < totalRestaurant; count++) {
    //if (restaurant_array[count].availability == category) {
    var thumbnail = restaurant_array[count].home_picture;
    console.log(thumbnail);
    var name = restaurant_array[count].name;
    var cell =
      '<div class="card col-lg-4 text-center cardBg" >\
      <img class="card-img-top" width: 100%; width = "200px" height = "200px" src="' +
      thumbnail +
      '" alt="Card image cap">\
      <div class = "card-body">\
      <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
      count +
      '" onClick="showRestaurantDetails(this)">' +
      name +
      '</h5></div>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
      count +
      '> Details </a>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
      count +
      "> Reviews </a>\
      </div>";
    table.insertAdjacentHTML("beforeend", cell);
    restaurantCount++;
  }
}

function showRestaurantDetails(element) {
  var item = element.getAttribute("item");
  currentIndex = item;
  document.getElementById("restaurantName").textContent =
    restaurant_array[item].name;
  document.getElementById("restaurantPicture").src =
    restaurant_array[item].home_picture;
  document.getElementById("location").textContent =
    restaurant_array[item].location;
  document.getElementById("telephoneNumber").textContent =
    restaurant_array[item].telephone_number;
  document.getElementById("cuisine").textContent =
    restaurant_array[item].cuisine;
  document.getElementById("openingHours").textContent =
    restaurant_array[item].opening_hours;
  document.getElementById("rating").textContent = restaurant_array[item].rating;
  document.getElementById("description").textContent =
    restaurant_array[item].description;
  document.getElementById("map").src = restaurant_array[item].map;
}

//This function opens a new window/tab and loads the
//particular movie in the cinema website

function searchRestaurants(category) {
  var table = document.getElementById("restaurantTable");
  var restaurantCount = 0;
  document.getElementById("summary").textContent = "";
  document.getElementById("parent").textContent = "";

  table.innerHTML = "";
  totalRestaurant = restaurant_array.length;
  for (var count = 0; count < totalRestaurant; count++) {
    if (
      restaurant_array[count].name
        .toLowerCase()
        .includes(document.getElementById("restaurantName").value.toLowerCase())
    ) {
      var thumbnail = restaurant_array[count].home_picture;
      console.log(thumbnail);
      var name = restaurant_array[count].name;
      var cell =
        '<div class="card col-lg-4 text-center cardBg" >\
    <img class="card-img-top" width: 100%; width = "200px" height = "200px" src="' +
        thumbnail +
        '" alt="Card image cap">\
    <div class = "card-body">\
    <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
        count +
        '" onClick="showRestaurantDetails(this)">' +
        name +
        '</h5></div>\
    <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
        count +
        '> Details </a>\
    <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
        count +
        "> Reviews </a>\
    </div>";
      table.insertAdjacentHTML("beforeend", cell);
      restaurantCount++;
    }
  }
}

function displayIndian() {
  var table = document.getElementById("restaurantTable");
  var restaurantCount = 0;


  const indCheck = document.querySelector("#Indian");
  console.log(indCheck.checked);

  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  if (indCheck.checked == true) 
  {
      for (var count = 0; count < totalRestaurants; count ++) {
              if (restaurant_array[count].cuisine == "Indian") 
          {
              var thumbnail = restaurant_array[count].home_picture;
              var name = restaurant_array[count].name;
              var cell = '<div class="card col-lg-4 text-center cardBg" >\
              <img class="card-img-top" width: 100%; width = "200px" height = "200px" src="' +
              thumbnail +
              '" alt="Card image cap">\
              <div class = "card-body">\
              <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
              count +
              '" onClick="showRestaurantDetails(this)">' +
              name +
              '</h5></div>\
              <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
              count +
              '> Details </a>\
              <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
              count +
              "> Reviews </a>\
              </div>";
              table.insertAdjacentHTML('beforeend', cell);
              restaurantCount++;

          }
      }
      message = "";
      document.getElementById("summary").textContent = message;
      document.getElementById("parent").textContent = "";
  }
  else {
  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  for (var count = 0; count < totalRestaurants; count ++) {
      var thumbnail = restaurant_array[count].home_picture;
      var name = restaurant_array[count].name;
      var cell = '<div class="card col-lg-4 text-center cardBg" >\
      <img class="card-img-top" width: 100%; width = "200px" height = "200px" src="' +
      thumbnail +
      '" alt="Card image cap">\
      <div class = "card-body">\
      <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
      count +
      '" onClick="showRestaurantDetails(this)">' +
      name +
      '</h5></div>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
      count +
      '> Details </a>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
      count +
      "> Reviews </a>\
      </div>";
      table.insertAdjacentHTML('beforeend', cell);
      restaurantCount++;

  }
 
  document.getElementById("summary").textContent = message;
  document.getElementById("parent").textContent = "";
  }
}

function displayChinese() {
  var table = document.getElementById("restaurantTable");
  var restaurantCount = 0;
  var message = "";

  const chCheck = document.querySelector("#Chinese");
  console.log(chCheck.checked);

  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  if (chCheck.checked == true) 
  {
      for (var count = 0; count < totalRestaurants; count ++) {
              if (restaurant_array[count].cuisine == "Chinese") 
          {
              var thumbnail = restaurant_array[count].home_picture;
              var name = restaurant_array[count].name;
              var cell = '<div class="card col-lg-4 text-center cardBg" >\
              <img class="card-img-top" width: 100%; width = "200px" height = "200px" src="' +
              thumbnail +
              '" alt="Card image cap">\
              <div class = "card-body">\
              <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
              count +
              '" onClick="showRestaurantDetails(this)">' +
              name +
              '</h5></div>\
              <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
              count +
              '> Details </a>\
              <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
              count +
              "> Reviews </a>\
              </div>";
              table.insertAdjacentHTML('beforeend', cell);
              restaurantCount++;

          }
      }
      message = "";
      document.getElementById("summary").textContent = message;
      document.getElementById("parent").textContent = "";
  }
  else {
  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  for (var count = 0; count < totalRestaurants; count ++) {
      var thumbnail = restaurant_array[count].home_picture;
      var name = restaurant_array[count].name;
      var cell = '<div class="card col-lg-4 text-center cardBg" >\
      <img class="card-img-top" width = "200px" height = "200px" src="' +
      thumbnail +
      '" alt="Card image cap">\
      <div class = "card-body">\
      <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
      count +
      '" onClick="showRestaurantDetails(this)">' +
      name +
      '</h5></div>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
      count +
      '> Details </a>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
      count +
      "> Reviews </a>\
      </div>";
      table.insertAdjacentHTML('beforeend', cell);
      restaurantCount++;

  }
  message = "";
  document.getElementById("summary").textContent = message;
  document.getElementById("parent").textContent = "";
  }
}

function displayMalay() {
  var table = document.getElementById("restaurantTable");
  var restaurantCount = 0;
  var message = "";

  const mCheck = document.querySelector("#Malay");
  console.log(mCheck.checked);

  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  if (mCheck.checked == true) 
  {
      for (var count = 0; count < totalRestaurants; count ++) {
              if (restaurant_array[count].cuisine == "Malay") 
          {
              var thumbnail = restaurant_array[count].home_picture;
              var name = restaurant_array[count].name;
              var cell = '<div class="card col-lg-4 text-center cardBg" >\
              <img class="card-img-top" width: 100%; width = "200px" height = "200px" src="' +
              thumbnail +
              '" alt="Card image cap">\
              <div class = "card-body">\
              <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
              count +
              '" onClick="showRestaurantDetails(this)">' +
              name +
              '</h5></div>\
              <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
              count +
              '> Details </a>\
              <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
              count +
              "> Reviews </a>\
              </div>";
              table.insertAdjacentHTML('beforeend', cell);
              restaurantCount++;

          }
      }
      message = "";
      document.getElementById("summary").textContent = message;
      document.getElementById("parent").textContent = "";
  }
  else {
  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  for (var count = 0; count < totalRestaurants; count ++) {
      var thumbnail = restaurant_array[count].home_picture;
      var name = restaurant_array[count].name;
      var cell = '<div class="card col-lg-4 text-center cardBg" >\
      <img class="card-img-top" width = "200px" height = "200px" src="' +
      thumbnail +
      '" alt="Card image cap">\
      <div class = "card-body">\
      <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
      count +
      '" onClick="showRestaurantDetails(this)">' +
      name +
      '</h5></div>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
      count +
      '> Details </a>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
      count +
      "> Reviews </a>\
      </div>";
      table.insertAdjacentHTML('beforeend', cell);
      restaurantCount++;

  }
  message = "";
  document.getElementById("summary").textContent = message;
  document.getElementById("parent").textContent = "";
  }
}

function displayWestern() {
  var table = document.getElementById("restaurantTable");
  var restaurantCount = 0;

  const wCheck = document.querySelector("#Western");
  console.log(wCheck.checked);

  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  if (wCheck.checked == true) 
  {
      for (var count = 0; count < totalRestaurants; count ++) {
              if (restaurant_array[count].cuisine == "Western") 
          {
              var thumbnail = restaurant_array[count].home_picture;
              var name = restaurant_array[count].name;
              var cell = '<div class="card col-lg-4 text-center cardBg" >\
              <img class="card-img-top" width: 100%; width = "200px" height = "200px" src="' +
              thumbnail +
              '" alt="Card image cap">\
              <div class = "card-body">\
              <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
              count +
              '" onClick="showRestaurantDetails(this)">' +
              name +
              '</h5></div>\
              <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
              count +
              '> Details </a>\
              <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
              count +
              "> Reviews </a>\
              </div>";
              table.insertAdjacentHTML('beforeend', cell);
              restaurantCount++;

          }
      }
      document.getElementById("summary").textContent = "";
      document.getElementById("parent").textContent = "";
  }
  else {
  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  for (var count = 0; count < totalRestaurants; count ++) {
      var thumbnail = restaurant_array[count].home_picture;
      var name = restaurant_array[count].name;
      var cell = '<div class="card col-lg-4 text-center cardBg" >\
      <img class="card-img-top" width = "200px" height = "200px" src="' +
      thumbnail +
      '" alt="Card image cap">\
      <div class = "card-body">\
      <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
      count +
      '" onClick="showRestaurantDetails(this)">' +
      name +
      '</h5></div>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
      count +
      '> Details </a>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
      count +
      "> Reviews </a>\
      </div>";
      table.insertAdjacentHTML('beforeend', cell);
      restaurantCount++;

  }
  message = "";
  document.getElementById("summary").textContent = message;
  document.getElementById("parent").textContent = "";
  }
}

function displayJapanese() {
  var table = document.getElementById("restaurantTable");
  var restaurantCount = 0;
  var message = "";

  const jCheck = document.querySelector("#Japanese");
  console.log(jCheck.checked);

  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  if (jCheck.checked == true) 
  {
      for (var count = 0; count < totalRestaurants; count ++) {
              if (restaurant_array[count].cuisine == "Japanese") 
          {
              var thumbnail = restaurant_array[count].home_picture;
              var name = restaurant_array[count].name;
              var cell = '<div class="card col-lg-4 text-center cardBg" >\
              <img class="card-img-top" width: 100%; width = "200px" height = "200px" src="' +
              thumbnail +
              '" alt="Card image cap">\
              <div class = "card-body">\
              <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
              count +
              '" onClick="showRestaurantDetails(this)">' +
              name +
              '</h5></div>\
              <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
              count +
              '> Details </a>\
              <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
              count +
              "> Reviews </a>\
              </div>";
              table.insertAdjacentHTML('beforeend', cell);
              restaurantCount++;

          }
      }
      message = "";
      document.getElementById("summary").textContent = message;
      document.getElementById("parent").textContent = "";
  }
  else {
  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  for (var count = 0; count < totalRestaurants; count ++) {
      var thumbnail = restaurant_array[count].home_picture;
      var name = restaurant_array[count].name;
      var cell = '<div class="card col-lg-4 text-center cardBg" >\
      <img class="card-img-top" width = "200px" height = "200px" src="' +
      thumbnail +
      '" alt="Card image cap">\
      <div class = "card-body">\
      <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
      count +
      '" onClick="showRestaurantDetails(this)">' +
      name +
      '</h5></div>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
      count +
      '> Details </a>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
      count +
      "> Reviews </a>\
      </div>";
      table.insertAdjacentHTML('beforeend', cell);
      restaurantCount++;

  }
  message = "";
  document.getElementById("summary").textContent = message;
  document.getElementById("parent").textContent = "";
  }
}

function displayNorth() {
  var table = document.getElementById("restaurantTable");
  var restaurantCount = 0;
  var message = "";

  const nCheck = document.querySelector("#North");
  console.log(nCheck.checked);

  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  if (nCheck.checked == true) 
  {
      for (var count = 0; count < totalRestaurants; count ++) {
              if (restaurant_array[count].compass_location == "North") 
          {
              var thumbnail = restaurant_array[count].home_picture;
              var name = restaurant_array[count].name;
              var cell = '<div class="card col-lg-4 text-center cardBg" >\
              <img class="card-img-top" width: 100%; width = "200px" height = "200px" src="' +
              thumbnail +
              '" alt="Card image cap">\
              <div class = "card-body">\
              <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
              count +
              '" onClick="showRestaurantDetails(this)">' +
              name +
              '</h5></div>\
              <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
              count +
              '> Details </a>\
              <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
              count +
              "> Reviews </a>\
              </div>";
              table.insertAdjacentHTML('beforeend', cell);
              restaurantCount++;

          }
      }
      message = "";
      document.getElementById("summary").textContent = message;
      document.getElementById("parent").textContent = "";
  }
  else {
  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  for (var count = 0; count < totalRestaurants; count ++) {
      var thumbnail = restaurant_array[count].home_picture;
      var name = restaurant_array[count].name;
      var cell = '<div class="card col-lg-4 text-center cardBg" >\
      <img class="card-img-top" width = "200px" height = "200px" src="' +
      thumbnail +
      '" alt="Card image cap">\
      <div class = "card-body">\
      <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
      count +
      '" onClick="showRestaurantDetails(this)">' +
      name +
      '</h5></div>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
      count +
      '> Details </a>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
      count +
      "> Reviews </a>\
      </div>";
      table.insertAdjacentHTML('beforeend', cell);
      restaurantCount++;

  }
  message = "";
  document.getElementById("summary").textContent = message;
  document.getElementById("parent").textContent = "";
  }
}

function displaySouth() { //display the filter result
  var table = document.getElementById("restaurantTable");
  var restaurantCount = 0;
  var message = "";

  const sCheck = document.querySelector("#South");
  console.log(sCheck.checked);

  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  if (sCheck.checked == true) 
  {
      for (var count = 0; count < totalRestaurants; count ++) {
              if (restaurant_array[count].compass_location == "South") 
          {
              var thumbnail = restaurant_array[count].home_picture;
              var name = restaurant_array[count].name;
              var cell = '<div class="card col-lg-4 text-center cardBg" >\
              <img class="card-img-top" width: 100%; width = "200px" height = "200px" src="' +
              thumbnail +
              '" alt="Card image cap">\
              <div class = "card-body">\
              <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
              count +
              '" onClick="showRestaurantDetails(this)">' +
              name +
              '</h5></div>\
              <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
              count +
              '> Details </a>\
              <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
              count +
              "> Reviews </a>\
              </div>";
              table.insertAdjacentHTML('beforeend', cell);
              restaurantCount++;

          }
      }
      message = "";
      document.getElementById("summary").textContent = message;
      document.getElementById("parent").textContent = "";
  }
  else {
  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  for (var count = 0; count < totalRestaurants; count ++) {
      var thumbnail = restaurant_array[count].home_picture;
      var name = restaurant_array[count].name;
      var cell = '<div class="card col-lg-4 text-center cardBg" >\
      <img class="card-img-top" width = "200px" height = "200px" src="' +
      thumbnail +
      '" alt="Card image cap">\
      <div class = "card-body">\
      <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
      count +
      '" onClick="showRestaurantDetails(this)">' +
      name +
      '</h5></div>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
      count +
      '> Details </a>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
      count +
      "> Reviews </a>\
      </div>";
      table.insertAdjacentHTML('beforeend', cell);
      restaurantCount++;

  }
  message = "";
  document.getElementById("summary").textContent = message;
  document.getElementById("parent").textContent = "";
  }
}

function displayEast() {
  var table = document.getElementById("restaurantTable");
  var restaurantCount = 0;
  var message = "";

  const eCheck = document.querySelector("#East");
  console.log(eCheck.checked);

  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  if (eCheck.checked == true) 
  {
      for (var count = 0; count < totalRestaurants; count ++) {
              if (restaurant_array[count].compass_location == "East") 
          {
              var thumbnail = restaurant_array[count].home_picture;
              var name = restaurant_array[count].name;
              var cell = '<div class="card col-lg-4 text-center cardBg" >\
              <img class="card-img-top" width: 100%; width = "200px" height = "200px" src="' +
              thumbnail +
              '" alt="Card image cap">\
              <div class = "card-body">\
              <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
              count +
              '" onClick="showRestaurantDetails(this)">' +
              name +
              '</h5></div>\
              <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
              count +
              '> Details </a>\
              <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
              count +
              "> Reviews </a>\
              </div>";
              table.insertAdjacentHTML('beforeend', cell);
              restaurantCount++;

          }
      }
      message = "";
      document.getElementById("summary").textContent = message;
      document.getElementById("parent").textContent = "";
  }
  else {
  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  for (var count = 0; count < totalRestaurants; count ++) {
      var thumbnail = restaurant_array[count].home_picture;
      var name = restaurant_array[count].name;
      var cell = '<div class="card col-lg-4 text-center cardBg" >\
      <img class="card-img-top" width = "200px" height = "200px" src="' +
      thumbnail +
      '" alt="Card image cap">\
      <div class = "card-body">\
      <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
      count +
      '" onClick="showRestaurantDetails(this)">' +
      name +
      '</h5></div>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
      count +
      '> Details </a>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
      count +
      "> Reviews </a>\
      </div>";
      table.insertAdjacentHTML('beforeend', cell);
      restaurantCount++;

  }
  message = "";
  document.getElementById("summary").textContent = message;
  document.getElementById("parent").textContent = "";
  }
}

function displayWest() {
  var table = document.getElementById("restaurantTable");
  var restaurantCount = 0;
  var message = "";

  const wCheck = document.querySelector("#West");
  console.log(wCheck.checked);

  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  if (wCheck.checked == true) 
  {
      for (var count = 0; count < totalRestaurants; count ++) {
              if (restaurant_array[count].compass_location == "West") 
          {
              var thumbnail = restaurant_array[count].home_picture;
              var name = restaurant_array[count].name;
              var cell = '<div class="card col-lg-4 text-center cardBg" >\
              <img class="card-img-top" width: 100%; width = "200px" height = "200px" src="' +
              thumbnail +
              '" alt="Card image cap">\
              <div class = "card-body">\
              <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
              count +
              '" onClick="showRestaurantDetails(this)">' +
              name +
              '</h5></div>\
              <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
              count +
              '> Details </a>\
              <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
              count +
              "> Reviews </a>\
              </div>";
              table.insertAdjacentHTML('beforeend', cell);
              restaurantCount++;

          }
      }
      message = "";
      document.getElementById("summary").textContent = message;
      document.getElementById("parent").textContent = "";
  }
  else {
  table.innerHTML = "";
  totalRestaurants = restaurant_array.length;
  for (var count = 0; count < totalRestaurants; count ++) {
      var thumbnail = restaurant_array[count].home_picture;
      var name = restaurant_array[count].name;
      var cell = '<div class="card col-lg-4 text-center cardBg" >\
      <img class="card-img-top" width = "200px" height = "200px" src="' +
      thumbnail +
      '" alt="Card image cap">\
      <div class = "card-body">\
      <h5 style="cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' +
      count +
      '" onClick="showRestaurantDetails(this)">' +
      name +
      '</h5></div>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#restaurantModal" class="card-title" onClick="showRestaurantDetails(this)" item=' +
      count +
      '> Details </a>\
      <a class = "btn btn-warning cardBg" data-toggle="modal" data-target="#commentModal" class="card-title" onClick="showComments(this)" item=' +
      count +
      "> Reviews </a>\
      </div>";
      table.insertAdjacentHTML('beforeend', cell);
      restaurantCount++;

  }
  message = "";
  document.getElementById("summary").textContent = message;
  document.getElementById("parent").textContent = "";
  }
}