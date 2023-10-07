// =========add hoverd class to selected list item==================

let list=document.querySelectorAll(".navigation li")


list.forEach(item=>item.addEventListener("mouseover",activeLink))
function activeLink(){

    list.forEach((item)=>{
        item.classList.remove("hovered")
    });
    this.classList.add("hovered");

}

let toggle=document.querySelector(".toggle");
let navigation=document.querySelector(".navigation");
let main =document.querySelector(".main")

toggle.onclick=()=>{
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}   