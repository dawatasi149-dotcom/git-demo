//dark mode changer 
let btn1 = document.querySelector("#btn");
let curMode = "dark";
btn1.addEventListener("click", () => {
    if (curMode === "dark") {
        curMode = "light";
         document.querySelector("h1").style.color = "black";
        document.querySelector("body").style.backgroundColor = "white";
    }
    else {
        curMode = "dark";
        document.querySelector("h1").style.color = "white";
        document.querySelector("body").style.backgroundColor = "black";
    }
})