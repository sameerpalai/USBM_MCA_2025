//using "new" keyword ->constructor

// const person = new Object();
// person.name="sameer";
// person.age="24";
// person.roll="21";
//Nested object
//Let person={name:"sameer",age:"24",roll:21,address:{city:"bbsr",post:"rrl",pin:"752011"}};

//social media comments
// let user={ username:"abc",
//     email:"sam@gmail.com",
//     gender:"male",
//     age:25,
//     comments:["abc","sad","gdh"],
//     address: {
//                 city:"bbsr",
//                 pin:752011,
//                 state:"odisha"
//              };

// console.log(${user.username}$,{user.})
// console.log


//This keyword

let student={ 
             name:"papu",
             age:55,
             greet:function(){
                console.log('Hello,${this.name}');
             }

            }
            student.greet();
 

