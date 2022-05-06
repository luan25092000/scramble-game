var typeIH = document.getElementById("input");
var wordIH = document.getElementById("text");
var words = ["hello","happy","window","pizza","puzzle","fired","jumped","amaze","scramble"];
var word = "";
var cword = "";
var aword = "";
var sword = "";

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

document.getElementById("fileinput").addEventListener("change", function() {
    var fr = new FileReader();
    fr.onload = function() {
        words = fr.result;
        fileWords = fr.result.split("\n");
        while (true) {
            aword = fileWords[Math.floor(Math.random()*fileWords.length)];
            if (aword.length <= 5) {
                sword = aword.shuffle();
                wordIH.innerHTML = sword;
                break
            }
        }
        
    }
    fr.readAsText(this.files[0]);
    this.value = '';
});

document.getElementById("text").innerHTML = sword;

document.addEventListener("keydown",function(event)
{
  const key = event.key; 
	if (letters.indexOf(event.key) !== -1) {
		word+= event.key;
		typeIH.innerHTML = word;
	}
	else if (event.key == "Enter") {
		cword = word;
	    typeIH.innerHTML = word;
		word = "";
		if (cword == aword) {
			cword = "";
			typeIH.innerHTML = "";
			wordIH.innerHTMl = "<span style='color:green;>Yes</span>";
            console.log("Correct");
		}
        else {
            cword = "";
            typeIH.innerHTML = "";
            wordIH.innerHTML = "<span style='color:red;'>X</span>";
        }
	}
	else if (event.key == "Backspace") {
		word = "";
        typeIH.innerHTML = "";
	}
});