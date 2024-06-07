// //JSON (javascript Objact Notation)  Both vareable and the  value contain inverted commas
// //simple obj
// let obj ={name :"ERUM AZEEMI QAIMKHANI",
// age:18,
// is_student:true


// }
// console.log(obj);


// //Json syntax
// let obj2={
//     name:"KIRAN NAVEED AZEEMI ANSARI",
//     age:5,
//     child:true,

// }
// console.log(JSON.stringify(obj2));


// 
//union litrals


// let myname: string | null;

// myname = null;
// console.log(myname);

// myname = "kiran";
// console.log(myname);

//myname = undefined; //Error
//myname = 12; //Error



// let myname: string | null;

// myname = null;
// console.log(myname);

// myname = "zia";
// console.log(myname);

// //myname = undefined; //Error
// //myname = 12; //Error







//let age1:number|"deid"|"unknown"
// age1="kiran";
// age1 = 90;//OK
// age1 = "died";//OK
// age1 = "unknown";//OK
// //age = "living";//Error
// age1=68;





let teacher = {
    name: "Zeeshan",
    experience: "10",
isTeachear:true,
language:"Arabic",
}



console.log(teacher.name,teacher.isTeachear,teacher.language);

console.log(teacher["language"]);
