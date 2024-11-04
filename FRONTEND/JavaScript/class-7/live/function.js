// let student={
//              name:"somya",
//              age:22,
//              greet:function(){
//                 console.log('Hello,${this.name}') //student.name
//                 console.log('Hello,${student.name}');
//              }
// }
// student.greet();
//Add to cart

let product={
             id:10,
             productname:"iphone",
             stock:30,
             newstock(x){
                this.stock=x
             }
}
product.newstock(20);
console.log(product);


