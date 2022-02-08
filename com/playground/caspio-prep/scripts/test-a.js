$(document).ready(function () {
     $(".progress-bar").parent().dblclick(function(){
        $("p").text("Hello!");
     }); 

     $("#click-me-btn").click(function(){
         console.log($(this).attr("href"));
         console.log($(this).toggleClass("btn-success"))
        $(this).parent().load("./data/student.json",{ 'Access-Control-Allow-Origin': '*', "Content-Type":"jsonp"},
        function(){
            console.log("loaded!")
        });
     });

     //getData();
     $("#message").text(JSON.stringify(getFileData("./data/student.json")))
     

});


async function getData(){
    fetch("https://testnet.binance.vision/api/v3/ticker/24hr?symbol=BTCUSDT").then(function(result){
        if(result.ok){
            result.json().then(function(data){
                $("#message").text(JSON .stringify(data));
            })
        }
    });

}

async function getFileData(path){
    await fetch("./data/student.json").then(function(result){
        result.json().then(function(json){
            
        })
    });
}