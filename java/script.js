$(document).ready(function(){

    $("form").submit(function(event){
    event.preventDefault();
    console.log($("input").val());
    let city=$("input").val();
    let key="5fde20b7e8293ffda01c8d53698690aa"
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ key}&units=metric`
    $.ajax({
        url:apiUrl,
        method:"GET",
        dataType:"json",
      
       
        success:function(post){
            $(".resultat").fadeIn(2000)
   
    $("#name").text(post.name)
    $("#country").text(post.sys.country)
     $("#weather").text(post.weather[0].main)
     $("#image").attr('src',`http://openweathermap.org/img/wn/${post.weather[0].icon}.png`)
     $("#description").html(`${post.weather[0].description}`)
     $("#temperature").text(`${post.main.temp} °C`)
     $("#pressure").text(`${post.main.pressure} hpa`)
     $("#humidity").text(`${post.main.humidity} %`)
     $("#maxtemp").text(`${post.main.temp_max}°C`)
     $("#mintemp").text(`${post.main.temp_min}°C`)
     $("#speed").text(`${post.wind.speed}m/s`)
     $("#deg").text(`${post.wind.deg}°`)
   
  
    
     
          },
        Error:function(){
            console.log("il y'a une erreur");
        }
    })
    })
    
    
    
    
    })