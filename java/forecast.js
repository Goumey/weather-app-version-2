$(document).ready(function(){

    $("form").submit(function(event){
    event.preventDefault();
    console.log($("input").val());
    let city=$("#citys").val();
    let number=$("#number").val()
    let key="b965294b6d00bd0c41e73d6c2427f51f"
   
    let apiUrl=`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${number}&appid=${key}&units=metric`
 
    $.ajax({
        url:apiUrl,
        method:"GET",
        dataType:"json",
      
       
        success:function(post){
          
               
                console.log(post);
             
                    $(".resultat").fadeIn(2000)
    
     $("#name").text(post.city.name); 
 $("#country").text(post.city.country); 

 $("#tbody").html(""); 

  for (let i = 0; i < number; i++) {
 
      let table  = "<tr>";
      table += `<td><img src="http://openweathermap.org/img/wn/${post.list[i].weather[0].icon}.png" alt="" ></td><td>${post.list[i].weather[0].main}</td><td>${post.list[i].weather[0].description}</td><td>${post.list[i].temp.morn} °C</td><td>${post.list[i].temp.night} °C</td><td>${post.list[i].temp.max}°C</td><td>${post.list[i].temp.min}°C</td><td>${post.list[i].pressure}</td><td>${post.list[i].humidity} %</td><td>${post.list[i].speed}m/s</td><td>${post.list[i].deg}°</td></tr>`;


  

    $("#tbody").append(table);   
  }
   
    
     
          },
        Error:function(){
            console.log("il y'a une erreur");
        }
    })
    })
    
    
    
    
    })