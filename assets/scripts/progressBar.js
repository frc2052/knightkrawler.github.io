
var i = 0;
function makeProgress(){
    if(i < 100){
        i = i + 1;
        $(".progress-bar").css("width", i + "%").text(i + " %");
    }
    // Wait for sometime before running this script again
    setTimeout("makeProgress()", 100);
}
makeProgress();


function makeProgress(){
    $(".progress-bar").forEach(bar => {
      var width = window.getComputedStyle(document.querySelector('#mainbar')).width;
      var i;
      for(i = 0;  i < width+1; i++){
        bar.css("width", i + "%").text(i + " %");
      }
    });
    // Wait for sometime before running this script again
    setTimeout("makeProgress()", 100);
}
makeProgress();

//css("width", i + "%").text(i + " %")
