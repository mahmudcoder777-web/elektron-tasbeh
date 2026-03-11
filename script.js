const body = document.body;
const reset = document.getElementById("reset");
const hisob = document.getElementById("hisob");
const count = document.getElementById("count");
const select = document.querySelectorAll("select");
const result = document.querySelector(".result");
const ism = document.getElementById("asmaulhusna");
const z = document.getElementById("z")

let a = 0;
count.addEventListener("click", function () {
    a++;
    hisob.textContent = a
    if (a == qiymat.value) {
        hisob.textContent = 0;
        a = 0;
        body.style ="background: green";
        setInterval(()=>{
            body.style ="background: White";
        },1000)
    }
})
reset.addEventListener("click", function () {
    a = 0;
    hisob.textContent = a
})
select.forEach((function (sel) {
    sel.addEventListener("change", function () {
        a = 0;
        hisob.textContent = a
    })
}))
ism.addEventListener("change",()=>{
    result.textContent = ism.value
})
z.addEventListener("change",function(){
    result.textContent = z.value
})