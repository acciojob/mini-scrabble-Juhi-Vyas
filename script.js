let text = document.getElementById("evaluatedText")
let letter = document.getElementById("letterCount")

let count = 0
text.addEventListener("input", (event)=>{
	letter.innerHTML = text.value.length
	// if(event.key == "Backspace"){
	// 	if(count > 0){
	// 		count--
	// 	    letter.innerHTML = count
	// 	}
	// }else{
	// 	count++
	// 	letter.innerHTML = count
	// }
})