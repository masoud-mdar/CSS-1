
const colorFunction = () => {
    let colorString = "ABCDEF123456";
    let colorArr = colorString.split("");
    let finalArr = [];
    let i=0;
    while (i<6){
        let n = Math.floor(Math.random()*12);
        finalArr.push(colorArr[n]);     
        i++;
    }
    let c = finalArr.join("");
    let color = "#" + c;
    document.getElementById("body").style.background = color;
    document.getElementById("code").innerHTML = color;
}