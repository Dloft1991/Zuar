
// const newDash = 

// $(document).ready(function(){
//     $("img").click(function(){
//         document.getElementById("manipulate").replaceWith("newDash");
//     //   document.getElementById("manipulate").append(newDash);
//     });
//   });
var testing = document.getElementById("plot1")
var testing2 = document.getElementById("plot2")


$(document).ready(function () {

    $("#plot1").click(function () {
        $("#manipulate").append(testing);
        console.log("clicked");
    });

    $("#plot2").click(function () {
        $("#manipulate").append(testing2);
        console.log("clicked");
    });
});




