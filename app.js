function weather() {
  var $listadoProductos = $('.weather__daily');
  var plantillaProducto = $listadoProductos.html();
  $listadoProductos.empty();
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
        url: url   + apiKey + "/" + lat + "," + lon+ '?lang=es&units=ca',
        dataType: "jsonp",
        success: function (data) {}
      }).done(getCurrent);

  }
  function error(){
    //error in case couldnt get location
  }

  //current weather
  function getCurrent(data){
    var plantilla = document.querySelector(".weather__current");
    document.querySelector(".weather__current__location").innerHTML = data.timezone;
    document.querySelector(".weather__current__feels__like").innerHTML = "Feels like " + data.currently.apparentTemperature + " <sup>o</sup>C";
    document.querySelector(".weather__current__temperature").innerHTML = "Current " + data.currently.temperature + " <sup>o</sup>C";
    document.querySelector(".weather__current__summary").innerHTML = data.currently.summary;

    var daily = data.daily.data;
    daily.forEach(getDaily);
  }
  //daily weather
  function getDaily(daily){
    console.log(daily);
    var $producto = $(plantillaProducto);
    //convert time
    function getTime(){
      var h = daily.time.getHours();
      console.log(h);
    }
    $('.weather__daily__summary', $producto).html(daily.summary);
    $('.weather__daily__feels__like', $producto).html("Max temp " + daily.apparentTemperatureMax + " <sup>o</sup>C");
    $listadoProductos.append($producto);

  }

}
weather();
