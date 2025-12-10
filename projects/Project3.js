function change(){
    let colour = ["blue","red","black","yellow","pink","green","purple","beige"];

    let c = colour[Math.floor (Math.random() * colour.length)];
    document.body.style.backgroundColor = c;

}