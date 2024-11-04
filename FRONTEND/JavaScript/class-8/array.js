/*let newArray=[];
console.log(newArray);
console.log(typeof newArray);

let name="sameer";
let age= 60;
let profession= "student";
let ismarried= true;
 console.log(name,age,profession,ismarried);
 let user = ["sameer", 60,"student",true];
 console.log(user);

 let newNumber=new Array(1,2,3,4,5,6);
 console.log(newNumber);

 //Array methods :
 let newNumber1=new Array(1,2,3,4,5,6,7,8);
 console.log(newNumber1.length);

 //length :
//  console.log(numbers.length); //5

 //Accessing :
 let cities = ["Bhubaneswar", "Cuttuck", "Balasore","Jajpur","Bhadrak"];
 console.log(cities[0]); //Bhubaneswar
 console.log(cities[4]); //Balasore

 //Last element :

 let lastCity = cities.length -1; //4
 console.log(cities[lastCity]);

 //Balasore
 console.log(cities[2]);
 console.log(cities[lastCity / 2]);
 console.log(cities[lastCity - 2]);

 //Modify :

 let modifyCity = "Kendrapada";
 cities[2] = modifyCity;
 console.log(cities);

 //Add element :
 //push() :
 console.log(cities);
 let addCity = "Jagatsinghpur";
 cities.push(addCity);
 console.log(cities);

 //shift()
 console.log(cities);
 cities.shift();
 console.log(cities);

 //unshift()
 console.log(cities);
 cities.unshift("B");
 console.log(cities);

 */

//  // Array method

// //concat :
// let fruits=["apple","orange","strawberry"]; 
// let addArray=fruits.concat(["mango","litchi"]);
// console.log(addArray);

// //The includes() method of Array instances determines whether an array includes a certain value among 
// //Its entries ,returning true or false as appropriate

// let std=["sameer","rudra","sritam","rashmi"];
// let result =std.includes("rashmi");
// console.log(result);

// //slice()
//  const fruit=["apple","orange","strawberry","mango","banana"];
//  const newarray= fruit.slice(1,3);
//  console.log(newarray);

//  //tosplice
//  const months=["jan","march","april","june"];
//  months.splice(1,0,"feb"); //1=index.no where needed add 0=delete no(0)
//  console.log(months); //jan,march,april,june

const letter= ["a","e","i","o","u"];
letter.splice(4,1 ,"s");
console.log(letter);

//forEach()
const array = ["1","2","3","4","5"];
for(let i=0; i<array.length;i++){
    const double=array[i] * 2;
    array[i] double;

}
console.log();

//foreach()
array.forEach(result)=>{
    console.log(result);
};








