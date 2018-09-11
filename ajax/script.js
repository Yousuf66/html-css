// let person = {
// "name":"ali",
// "age":14,
// 'nationality':'pakistani'
// }

// let people = [
//     {'name':'ali',
//         'age':14,
//     'nationality':'pakistani'
//     },
//     {'name':'usama',
//     'age':16,
// 'nationality':'amreeki'
// },
// {'name':'yousuf'
// 'age':21,
// 'nationality':'bhutani'
// }, {'name':'ahmed',
// 'age':10,
// 'nationality':'sudani'
// }   
// ];

// alert(people[2]['name']);


let pageCounter = 1;

function fetchAnimals(){
    let data = new XMLHttpRequest();
    data.open('GET',`https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);
   
    data.onload = function(){
    let myData = JSON.parse(data.responseText);
    
    console.log(myData[0]['name']);
    renderHTML(myData);
    };
    data.send();
    pageCounter++;
    if(pageCounter>3){
        document.querySelector('button').classList.add('hide-me');
    }
    
}
let string='';
function renderHTML(data){
   
    for(i=0;i<data.length;i++){
        string += `<p>name : ${data[i].name} eats : ${data[i].foods.likes[0]}</p>`;
    }
    console.log(string);
    document.querySelector('div').innerHTML = string;
}


// con.addEventListener('click',function(){
   
// });
