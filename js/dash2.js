document.getElementById("Efficiency").hidden = true;
document.getElementById("listView").hidden = true;
document.getElementById("fullDash").hidden = true;

$("#speed").click(function () {
    document.getElementById("Efficiency").hidden = false;
    console.log("viewing efficiency");
    document.getElementById("listView").hidden = true;
document.getElementById("fullDash").hidden = true;
});

$("#list").click(function () {
    document.getElementById("listView").hidden = false;
    console.log("viewing list ")
    document.getElementById("Efficiency").hidden = true;
    document.getElementById("fullDash").hidden = true;
});

$("#full").click(function () {
    document.getElementById("fullDash").hidden = false;
    console.log("viewing full dash");
    document.getElementById("Efficiency").hidden = true;
document.getElementById("listView").hidden = true;
});