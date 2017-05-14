// Code goes here

function weather() {

  var location = document.querySelector(".descripcion");
  var ciudad = document.querySelector(".ciudad");
  var apiKey = 'f941c9d5ba61513ba6332b4d3bbea3bd';
  var url = 'https://api.darksky.net/forecast/';

  //get current position
  navigator.geolocation.getCurrentPosition(success, error);
  function success(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
      $.ajax({
        url: url   + apiKey + "/" + lat + "," + lon,
        dataType: "jsonp",
        success: function (data) {
          console.log(data);
          //console.log(data.hourly.summary);
        }
      });

  }
  function error(){

  }
}
weather();
