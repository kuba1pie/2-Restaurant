window.onload = function() {
    document.getElementById("hamburger").addEventListener("click", hamburger);
    let c = document.getElementById("menu").children;
    let i;
    for (i = 0; i < c.length; i++) {
      c[i].addEventListener("click", hideMenu);
    } 


    hamWrapper();
}
function hamburger() {
    let menu = document.getElementById("menu")
    if (menu.style.display == "block"){
        menu.style.display = "none"
        menu.classList.remove("display") 
    }else {
        menu.style.display = "block"
        menu.classList.add("display") 
    }
}
function hideMenu(){    
    let menu = document.getElementById("menu")
    if (menu.classList.contains("display")){
        menu.style.display = "none"
        menu.classList.remove("display")
    }
}
function hamWrapper(){
    let el = document.getElementById("hamWrapper")
    
    data={
        "burgers": [
            {
                "name": "Hamburger",
                "cla": "right",
                "title": "Big and Meaty",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac feugiat sapien, a dapibus lacus.",
                "photo": "burger1.png",
                "price": "14.00"
            },
            {
                "name": "Cheeseburger",
                "cla": "left",
                "title": "Big and Meaty",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac feugiat sapien, a dapibus lacus.",
                "photo": "burger2.png",
                "price": "14.00"
            },
            {
                "name": "Hamburger",
                "cla": "right",
                "title": "Big and Meaty",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac feugiat sapien, a dapibus lacus.",
                "photo": "burger3.png",
                "price": "14.00"
            }
            ,
            {
                "name": "Hamburger",
                "cla": "left",
                "title": "Big and Meaty",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac feugiat sapien, a dapibus lacus.",
                "photo": "burger4.png",
                "price": "14.00"
            }
        ]
    }

    for (i = 0; i<data.burgers.length; i++) {
        let para = document.createElement("div");   // Create a <p> element
        let name = data.burgers[i].name
        let cla = data.burgers[i].cla
        let title = data.burgers[i].title
        let description = data.burgers[i].description
        let photo = data.burgers[i].photo
        let price = data.burgers[i].price
        para.classList.add("hamItem", cla)
        para.innerHTML = "<div class='text'><h4>"+name+"</h4><h5>"+title+"</h5><p>"+description+"</p><span class='price'>$"+price+"</span></div><img src='img/"+photo+"' alt='"+name+" photo'>";    // Insert content
        el.appendChild(para);   // Append <p> to <body> */
    }
}