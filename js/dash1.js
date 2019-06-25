$(document).ready(function () {


    var plot1 = document.getElementById("plot1")
    var plot2 = document.getElementById("plot2")
    var plot3 = document.getElementById("plot3")
    var plot4 = document.getElementById("plot4")
    var plot5 = document.getElementById("plot5")
    var plot6 = document.getElementById("plot6")



    $("#plot1").click(function () {
        $("#manipulate").append(plot1);
        console.log("plot1");
    });

    $("#plot2").click(function () {
        $("#manipulate").append(plot2);
        console.log("plot2");
    });

    $("#plot3").click(function () {
        $("#manipulate").append(plot3);
        console.log("plot3");
    });

    $("#plot4").click(function () {
        $("#manipulate").append(plot4);
        console.log("plot4");
    });

    $("#plot5").click(function () {
        $("#manipulate").append(plot5);
        console.log("plot5");
    });

    $("#plot6").click(function () {
        $("#manipulate").append(plot6);
        console.log("plot6");
    });

});




