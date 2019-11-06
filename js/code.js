window.onload = function() {
    document.getElementById("hamburger").addEventListener("click", hamburger);
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
function hamWrapper(){
    let el = document.getElementById("hamWrapper")
    let para = document.createElement("div");   // Create a <p> element
    // Start Variables
    let name = "Hamburger"
    let cla ="right"
    let title = "Big and Meaty"
    let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac feugiat sapien, a dapibus lacus."
    let photo = "burger1.png"
    let price="34.00"
    // End Variables
    para.classList.add("hamItem", cla)
    para.innerHTML = "<h4>"+name+"</h4><h5>"+title+"</h5><p>"+description+"</p><span class='price'>$"+price+"</span><img src='img/"+photo+"' alt='"+name+" photo'>";    // Insert content
    el.appendChild(para);   // Append <p> to <body> 
}