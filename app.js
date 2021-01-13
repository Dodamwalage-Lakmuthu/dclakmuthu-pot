
const skill = () =>{
   console.log("contact click");
 document.getElementById('desc').innerHTML = "";
//set1
var he1 = document.createElement('h2');
var textArea = document.createTextNode('Languages');
he1.setAttribute('id','skilltype1');
he1.appendChild(textArea);
document.getElementById('desc').appendChild(he1);

var p1 = document.createElement('p');
var textArea = document.createTextNode('Java, Javascript, python, c++');
p1.setAttribute('id','skills1');
p1.appendChild(textArea);
document.getElementById('desc').appendChild(p1);

//set2   
var he2 = document.createElement('h2');
var textArea = document.createTextNode('Technologies');
he2.setAttribute('id','skilltype1');
he2.appendChild(textArea);
document.getElementById('desc').appendChild(he2);

var p2 = document.createElement('p');
var textArea = document.createTextNode(' ReactJs, Django, NodeJs,');
p2.setAttribute('id','skills1');
p2.appendChild(textArea);
document.getElementById('desc').appendChild(p2);

//set3
var he3 = document.createElement('h2');
var textArea = document.createTextNode('databases');
he3.setAttribute('id','skilltype1');
he3.appendChild(textArea);
document.getElementById('desc').appendChild(he3);

var p3 = document.createElement('p');
var textArea = document.createTextNode('mysql, mongodb, postgressql');
p3.setAttribute('id','skills1');
p3.appendChild(textArea);
document.getElementById('desc').appendChild(p3);

}


const edu = () =>{
    console.log("contact education");
 document.getElementById('desc').innerHTML = "";
//set1
var he1 = document.createElement('h2');
var textArea = document.createTextNode('Tertiary Education');
he1.setAttribute('id','skilltype1');
he1.appendChild(textArea);
document.getElementById('desc').appendChild(he1);

var p1 = document.createElement('p');
var textArea = document.createTextNode("Trincomalee Campus, Eastern University, Sri Lanka (2017- Present) - Bachelor of Computer Science" );
p1.setAttribute('id','skills1');
p1.appendChild(textArea);
document.getElementById('desc').appendChild(p1);


//set2   
var he2 = document.createElement('h2');
var textArea = document.createTextNode('School Education');
he2.setAttribute('id','skilltype1');
he2.appendChild(textArea);
document.getElementById('desc').appendChild(he2);

var p2 = document.createElement('p');
var textArea = document.createTextNode(' Ch/Senanayake Central Collage Madampe.');
p2.setAttribute('id','skills1');
p2.appendChild(textArea);
document.getElementById('desc').appendChild(p2);

//set3
var he3 = document.createElement('h2');
var textArea = document.createTextNode('G.C.E A/L Examination (2015)');
he3.setAttribute('id','skilltype1');
he3.appendChild(textArea);
document.getElementById('desc').appendChild(he3);

var p3 = document.createElement('p');
var textArea = document.createTextNode('Index No – 5801320 Physical Science stream Passed with 1B, 1C, 1S');
p3.setAttribute('id','skills1');
p3.appendChild(textArea);
document.getElementById('desc').appendChild(p3);

}

const con = () =>{
    console.log("contact education");
 document.getElementById('desc').innerHTML = "";
//set1
 var phonediv = document.createElement('div');

 //icon
 var picon = document.createElement('i');
 picon.setAttribute('class','fas fa-mobile-alt');
 phonediv.appendChild(picon);

 //
 var number = document.createElement('h5');
 var text = document.createTextNode('0773725601');
number.appendChild(text);
phonediv.appendChild(number);

document.getElementById('desc').appendChild(phonediv);


//set2
 var emaildiv = document.createElement('div');

 //icon
 var eicon = document.createElement('i');
 eicon.setAttribute('class','far fa-envelope');
 emaildiv.appendChild(eicon);

 //
 var email = document.createElement('h5');
 var emailtext = document.createTextNode('lakmuthu1024dodamwalage@gmail.com');
email.appendChild(emailtext);
emaildiv.appendChild(email);

document.getElementById('desc').appendChild(emaildiv);




}