let text = document.getElementById("evaluatedText")
let letter = document.getElementById("letterCount")

let count = 1
text.addEventListener("keydown", (event)=>{
	if(event.key == "Backspace"){
		letter.innerHTML = count--
	}else{
		letter.innerHTML = count++
	}

		// letter.innerHTML = event.key
})