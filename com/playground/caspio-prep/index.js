$(document).ready(function(){
    let speed = Math.random() *100;
    let increment = Math.random() * 2;

    let currentWidth = 0;
    let progressBar = $('.progress-bar');
    $("#stop-button").click(function (e) { 
        e.preventDefault();
        clearInterval(progressBar.data("interval"));
    });
    $("#start-button").click(function (e) { 
        e.preventDefault();
        progressBar.data('interval', setInterval(function(){
            if(currentWidth >= 100){
                clearInterval($('.progress-bar').data('interval'));
                alert("Something was loaded successfully!");
            }else{
                progressBar.width(`${currentWidth += increment}%`);
                console.log("CurrentWidth: " + currentWidth );
            }
            
        },speed));
    });
    
})



function startLoading(speed,increment){
    let currentWidth = 0;
    let progressBar = $('.progress-bar');
    progressBar.data('interval', setInterval(function(){
        if(currentWidth >= 100){
            clearInterval($('.progress-bar').data('interval'));
            alert("Something was loaded successfully!");
        }else{
            progressBar.width(`${currentWidth += increment}%`);
            console.log("CurrentWidth: " + currentWidth );
        }
        
    },speed));
}



