var activeContentID = "1";
var highlightColor = "#f71d3ad8";
var colorBlack = "black";
var selectBox;
// var highlightColor = "#f73d2cd8";

$(document).ready ( function(){
    document.getElementById("topic-1").style.color = highlightColor;
    document.getElementById("content-1").style.display = "block";

    if ($(window).width() < 768) {
       repositionTopicsSection("top");
    }
    else{
        repositionTopicsSection("left");
    }

    selectBox =  document.getElementById("selectBox");
})

$(window).resize(function() {
    if ($(window).width() < 768) {
        repositionTopicsSection("top");
        selectBox.value = activeContentID;
     }
     else {
        repositionTopicsSection("left");
     }

    
});

function showContent(id){
    document.getElementById("content-"+activeContentID).style.display = "none";
    document.getElementById("content-"+id).style.display = "block";
    document.getElementById("topic-"+activeContentID).style.color = colorBlack;
    document.getElementById("topic-"+id).style.color = highlightColor;
    activeContentID = id;
    window.scrollTo(0, 0);
}

function repositionTopicsSection(position){
    if(position == "top"){
        document.getElementById("topic-dropdown").style.display = "block";
        document.getElementById("topics").style.display = "none";
    }
    else{
        document.getElementById("topics").style.display = "block";
        document.getElementById("topic-dropdown").style.display = "none";
    }
    
}

function onSelectOptionChange(){
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    showContent(selectedValue);
}

function goToDocs(){
    window.location.href = "/docs.html";
}

