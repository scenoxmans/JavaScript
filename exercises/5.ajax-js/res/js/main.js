//gotta do this aldo way
let text = document.getElementById("text");
let image = document.getElementById("image")

document.getElementById("button").addEventListener("click", loadquote);
function loadquote(){

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://thatsthespir.it/api", true);

    xhr.onload = function(){
        if (this.status == 200){
        
            var quote = JSON.parse(this.responseText);
            var output = "";
            output += "<p>"+quote.quote+"</p>";
        }

        document.getElementById("text").innerHTML = output;
    }
    xhr.send();
}     
//find a way to make this easier for yourself
document.getElementById("button").addEventListener("click", loadpic);

function loadpic(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://thatsthespir.it/api", true);
    xhr.onload = function(){
        if (this.status == 200){

        var pic = JSON.parse(this.responseText);
        var output = "";
        output += "<img src = '"+pic.photo+"'>";
        if (pic.photo === "" ) {
            console.log("Error: Photo was not found!");}
        }
        document.getElementById("image").innerHTML = output;
    }
    xhr.send();
}

image = "";