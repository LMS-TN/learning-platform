const addPeople = document.querySelector('.addPeople')
const addOne = document.querySelector('.addOne')
const closeOne= document.querySelector('.closeOne')

addOne.addEventListener('click',show)
closeOne.addEventListener('click',hide)

function show() {
    addPeople.style.display = 'block'
  }
  
function hide() {
    addPeople.style.display = 'none'
  }


/////////////// show list students //////////
//each
function each(coll, f) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                f(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                f(coll[key], key); 
          } 
    } 
} 

//map
function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
}

var data =[
{fullName:"Tesnim Drissi", email:"drissitesnime8@gmail.com", grade:"good"},
{fullName:"Mohamed Selim Thebet " , email:"MohamedSelimThebet@gmail.com", grade:"excellent"},
{fullName:"Nadine Benarbia", email:"NadineBenarbia@gmail.com", grade:"good"},
{fullName:"Yecine Amrouche", email:"YecineAmrouche@gmail.com", grade:"very good"}
]

var studentList = document.createElement('div')
// studentList.classList.add('studentsList')

function showList(data){
return map(data , function(element){
    var list = `<div>
    <ul>
    <li class="name">Name: ${element.fullName}</li>
    <li class="email">Email: ${element.email}</li>
    <li class="grade">Grade: ${element.grade}</li>
    </ul>
</div>`;
   return studentList.innerHTML=list
})
}


console.log(showList(data));

var lists = document.getElementsByClassName('list')

// lists[0].appendChild(studentList)
// lists[0].innerHTML = `<div class="studentsList">${showList(data)}</div>`


////////////////// add student //////////

const button = document.querySelector('#button')

console.log(button);


console.log(data);


var added= {}



button.onclick=function (e){
    e.preventDefault()
    var full= document.getElementById('FullName').value
    var mail= document.getElementById('email').value
    var  grad= document.getElementById('Grade').value
    added.grade = grad
    added.email = mail
    added.fullName = full
    console.log(data);
console.log(mail, "full");
      data.push(added)
      
      setTimeout(() => {
        lists[0].innerHTML = `<div class="studentsList">${showList(data)}</div>`
    }, 1000);
    showList(data)
    console.log(added);
    console.log(data);
}




// function addEmail(){
//     mail= document.getElementById('email').value
//     added.email = mail
   
// }

// function addGrad(){
//     grad= document.getElementById('Grade').value
//     added.Grade = grad
    
// }


/////////  search //////






