<<<<<<< HEAD

=======
>>>>>>> 776e6e7e49a04a03b5029719d8d472e136ae7201
// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data
<<<<<<< HEAD
    // console.log('count call'+(this.data.length));//clg is also work as return
    return this.data.length //got to ass return to ake function work
  } 
  printNumbers(){
    //print the numbers in data
  // forEach mathod  num is print number, index is recall index value,
    this.data.forEach((num, index,x )=> {
    console.log('index is:', index);   
    console.log(num);
    console.log(x);

    })
  } 
  

  odds(){
  //map think transfrom number to string   
  //return the odd numbers in data use filter mathid x%2 = 1
    // return this.data.filter(num=>{
    //   return num%2 != 0;
      
    // })//use more implicice for arrow function 
    return this.data.filter(num=>num%2 == 1)
   
  } 

  evens(){
  //   //return the even numbers in data
  // return this.data.filter(num=>num%2 == 0)
  //use forEach
  //let evens =[]
  let string =''//work it as string

  this.data.forEach(num => {
    if(num%2==0){
      //foreach will return string array or print we need to retuen as array
      //we need to push the number to array
      // evens.push(num) 
      string+=num+','
    }
  })
    // return evens
    return string
  }

  sum(){
  //   //return the sum of the numbers
  // let sum = 0
  // this.data.forEach(num =>{
  //   if(true){
  //     sum+=num
  //   }
  // })
  // return sum
  //  }
  //  return this.data.reduce((prev,acc,i) => {
  //   prev[i]=acc*2
  //   return prev
  // },[])
  return this.data.reduce((prev,acc) => {
     prev+=acc
     return prev
   },0)//start at 0

}
product=()=>this.data.reduce((prev,acc) => prev * acc)//implicite

//   //return the product of the numbers
    
  //start at 0

   
  // product(){
  // //   //return the product of the numbers
  // return this.data.reduce((prev,acc) => prev * acc)
    
  // //start at 0

  //  }
  greaterThan(target){
  // return the numbers greater than the target remove all the things less than 3
    let numGreaterthan3 = this.data.filter(n => n> target)
    return numGreaterthan3
  }
  howMany(target){
  //   //return the count of a given number dupicate number
  return this.data.filter(n => n == target).length//this will return 2
  //this.data.filter(n => n == target) this will return [3,3]
   }
 }

//Prompt the user for a list of integers separated by commas
const str = window.prompt('enter some numbers, like this', '1,2,3,3,5,9');

//create an instance of numbers
const n1 = new Numbers(str);

//console.log(n1.data);
console.log(n1.count());//returns count of numbers

n1.printNumbers();//prints the number along with their indexes
console.log(n1.odds());//returns odd numbers
console.log(n1.evens());//returns even numbers
console.log(n1.sum());//returns sum of numbers
console.log(n1.product());//returns product of numbers
console.log(n1.greaterThan(3));//returns numbers greater than another number
console.log(n1.howMany(3));//return the count of a specific number

=======
  }
  printNumbers() {
    //print the numbers in data
  }
  odds() {
    //return the odd numbers in data
  }
  evens() {
    //return the even numbers in data
  }
  sum() {
    //return the sum of the numbers
  }
  product() {
    //return the product of the numbers
  }
  greaterThan(target) {
    //return the numbers greater than the target
  }
  howMany(target) {
    //return the count of a given number
  }
}
>>>>>>> 776e6e7e49a04a03b5029719d8d472e136ae7201

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
