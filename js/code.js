$(document).ready(function() {
    $('.hamburger').click(function() {
            $('#menuul').slideToggle("fast");
    });
});

$( window ).resize(function() {
    if ($(window).width()>1000){
        document.getElementById("menuul").style.display = "block";
    } else{
        document.getElementById("menuul").style.display = "none";
    }
  });

var template = '\
<ul class="flex-container">\
    {{#names}}\
    <li class="flex-item">\
        <div class="squares">\
            <div class="square3"></div>\
            <div class="square2"></div>\
            <div class="square1">\
                <div class="item camera">\
                    <img src="{{path}}" class="{{type}}" alt="{{city}} photo">\
                    <p>{{city}}</p>\
                </div>\
            </div>\
        </div>\
        </li>\
    {{/names}}\
    </ul>'

var data = {
    "Subject": "",
    "names": [
        {"city": "Warsaw", "path": "img/imgWarsaw.jpg", "type": "photo"},
        {"city": "Paris", "path": "img/img2.jpg", "type": "photo"},
        {"city": "Rio", "path": "img/img3.jpg", "type": "photo"},
        {"city": "London", "path": "img/img.png", "type": "blank"},
        {"city": "Rome", "path": "img/img.png", "type": "blank"},
        {"city": "Venice", "path": "img/img.png", "type": "blank"}
    ]
};

var box=document.getElementById("templateMoustache");
var html = Mustache.to_html(template, data);
box.innerHTML=html;