

// function currencyExchange()
// {
//     let from = document.getElementById("from").value;
//     let from = document.getElementById("to").value;
//     let xmlhttp = new XMLHttpRequest();
//     let url = https//api.exchangeratesapi.io/latest?base=" + from + "," to;
//     xmlhttp.open("GET", url, true);
//     xmlhttp.onreadystatexchange = function(){
//         if (xmlhttp.readyState)
//     }
// }
$(document).ready(function() {
    $('#currencyType').click(function() {
      const city = $('#currency').val();
      $('#currency').val("");
  
      let request = new XMLHttpRequest();
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[API-KEY-GOES-HERE]`;
  
      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        }
      }
  
      request.open("GET", url, true);
      request.send();
  
    //  const getElements = function(response) {
    //     $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
    //     $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      
    
    })
});