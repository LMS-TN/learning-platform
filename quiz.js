 // Questions to ask/////
 var Questions = [{
	id: 0,
	q: "What is the capital of Ireland?",
	a: [{ text: "Dublin", isCorrect: true },
		{ text: "Surat", isCorrect: false },
		{ text: "Delhi", isCorrect: false },
		{ text: "mumbai", isCorrect: false }
	]

},
{
	id: 1,
	q: "How many stars are on the Chinese flag?",
	a: [{ text: "3", isCorrect: false, isSelected: false },
		{ text: "10", isCorrect: false },
		{ text: "7", isCorrect: false },
		{ text: "5", isCorrect: true }
	]

},
{
	id: 2,
	q: "What is the capital of Canada?",
	a: [{ text: "surat", isCorrect: false },
		{ text: "vadodara", isCorrect: false },
		{ text: "Ottawa", isCorrect: true },
		{ text: "rajkot", isCorrect: false }
	]

}

]

///// Set to start //
var start = true;

////// Iterate /////
function iterate(id) {

// Get the result display section////
var result = document.getElementsByClassName("result");
result[0].innerText = "";

////// Get the question///
var question = document.getElementById("question");


/////// Setting the question text
question.innerText = Questions[id].q;

/////// Getting the options
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');


//// Provid option text /////
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

/// Provid the true or false value to the options /////
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

////// Show selection for op1 /////
op1.addEventListener("click", () => {
	op1.style.backgroundColor = "lightgoldenrodyellow";
	op2.style.backgroundColor = "lightskyblue";
	op3.style.backgroundColor = "lightskyblue";
	op4.style.backgroundColor = "lightskyblue";
	selected = op1.value;
})

///// Show selection for op2 ////////
op2.addEventListener("click", () => {
	op1.style.backgroundColor = "lightskyblue";
	op2.style.backgroundColor = "lightgoldenrodyellow";
	op3.style.backgroundColor = "lightskyblue";
	op4.style.backgroundColor = "lightskyblue";
	selected = op2.value;
})

//////// Show selection for op3//////
op3.addEventListener("click", () => {
	op1.style.backgroundColor = "lightskyblue";
	op2.style.backgroundColor = "lightskyblue";
	op3.style.backgroundColor = "lightgoldenrodyellow";
	op4.style.backgroundColor = "lightskyblue";
	selected = op3.value;
})

//////// Show selection for op4////////
op4.addEventListener("click",() => {
	op1.style.backgroundColor = "lightskyblue";
	op2.style.backgroundColor = "lightskyblue";
	op3.style.backgroundColor = "lightskyblue";
	op4.style.backgroundColor = "lightgoldenrodyellow";
	selected = op4.value;
})

////////// Grabbing the evaluate button //////
var evaluate = document.getElementsByClassName("evaluate");

// Evaluate method//////////
evaluate[0].addEventListener("click", () => {
	if (selected == "true") {
		result[0].innerHTML = "True";
		result[0].style.color = "green";
		result[0].style.backgroundColor=" #000000db"
	} else {
		result[0].innerHTML = "False";
		result[0].style.color = "red";
		result[0].style.backgroundColor=" #000000db"
	}
})
}

if(start) {
iterate("0");
}

/////////// Next button and method////////////////
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
	id++;
	iterate(id);
	console.log(id);
}

})