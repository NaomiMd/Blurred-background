let btnJoin = document.querySelector(".btn");
let containerEl = document.querySelector(".container");
let mainContainerEl = document.querySelector(".main-container");
let closeIconEl = document.querySelector(".close-icon");

btnJoin.addEventListener("click", ()=>{
    containerEl.classList.add("active");
    mainContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", ()=>{
    containerEl.classList.remove("active");
    mainContainerEl.classList.add("active");
});
