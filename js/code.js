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
    let para = document.createElement("div");               // Create a <p> element
    para.classList.add("hamItem", "right")
    para.innerHTML = "<h4>Hamburger</h4><h5>Big and Meaty</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac feugiat sapien, a dapibus lacus.</p><span class='price'>$34.00</span><img src='img/burger1.png' alt='burger'>";               // Insert text
    el.appendChild(para);                      // Append <p> to <body> 
}