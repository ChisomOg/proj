const unhap = document.querySelector(".unhappy");
const hap = document.querySelector(".happy");
const shock = document.querySelector(".shock");


unhap.addEventListener("click", function(){
    if (hap.classList.contains("happy")){
        hap.classList.add("active");
        unhap.classList.remove("active");
        shock.classList.remove("active");
    }
});

hap.addEventListener("click", function(){
    if (unhap.classList.contains("unhappy")){
        unhap.classList.add("active");
        shock.classList.add("active");
        hap.classList.remove("active");
    }
});

shock.addEventListener("click", function(){
    if (hap.classList.contains("happy")){
        unhap.classList.add("active");
        hap.classList.remove("active");
        shock.classList.remove("active");
    }
});

let data = [
    {
        name: "matero",
        age: "30"
    },
    {
        name: "steph",
        age: "28"
    },
    {
        name: "josh",
        age: "22"
    },
    {
        name: "sam",
        age: "41"
    },
    {
        name: "rick",
        age: "29"
    },
    {
        name: "joey",
        age: "34"
    }
];
const info = document.querySelector("#info");

let details = data.map(function(item) {
    return "<div>" + item.name + " is " + item.age  + " years old"+ "</div>";  
});

info.innerHTML = details.join("\n");

const circle = document.querySelector(".circle");

circle.addEventListener("mouseenter", function(){
    if(!circle.classList.contains("hover")){
        circle.classList.add("hover");
    }
});
circle.addEventListener("mouseleave", function(){
    if(circle.classList.contains("hover")){
        circle.classList.remove("hover");
    }
});

const loadTe = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurr, 30);

function blurr() {
    load++;
    
    if (load > 99){
        clearInterval(int)
    };
    
    loadTe.innerText = `${load}%`;
    loadTe.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min))/ (in_max - in_min) + out_min;
}