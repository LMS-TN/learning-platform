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


//////////
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
{fullName:"Tesnim Drissi",email:"drissitesnime8@gmail.com",grade:"good"},
{fullName:"Mohamed Selim Thebet ",email:"MohamedSelimThebet@gmail.com",grade:"excellent"},
{fullName:"Nadine Benarbia",email:"NadineBenarbia@gmail.com",grade:"good"},
{fullName:"Yecine Amrouche",email:"YecineAmrouche@gmail.com",grade:"very good"},
]

var studentList = document.createElement('div')

function showList(data){
return map(data , function(element){
    var list = `<div>
    <p>${element.fullName}</p>
    <p>${element.email}</p>
    <p>${element.grade}</p>
</div>`;
   return studentList.innerHTML=list
})
}

showList(data)

console.log(showList(data));

