// Comparitive operators in javascript

// let nikhil = 0;
// let ashish = 80000;
// let vp = 22500;

// // Here vp wants grater value then her so she could continue her life with him
// console.log("is nikhil deserves vp" , nikhil > vp);
// console.log("is ashish deserves vp" , ashish > vp);

// Logocal operators in javascript

// let a = 5;
// let b = 3;
// let c = 3;

// let cond1 = a > b;
// let cond2 = b === c;

// console.log(cond1 && cond2)

// if/else condition in javascript

// let age = 15;

// if (age >= 18) {
//     console.log("chodi ji ko vote de sakta he");
// }
// else { console.log("sorry bro mummy papa ko bol jaldi karna tha");
// }

// Lets Solve some faltu questions for practice of if/else

// Lets Create Grade system 
let score = prompt("Chal Apne marks daal");

const gradea = ("Hey You recive grade A");
const gradeb = ("Hey You recive grade b");
const gradec = ("Hey You recive grade c");
const graded = ("Hey You recive grade d");
const fail = ("atty gatty🖕")

if (score > 81 && score < 100){
    console.log(gradea);
}
else if (score > 71 && score < 80){
    console.log(gradeb);
}
 else if (score > 61 && score < 70){
    console.log(gradec);
}
else if (score > 35 && score < 60){
    console.log(graded);
}
else{
    console.log(fail);
}



