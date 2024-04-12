//for lowercase:
let personName: String="Babar Azam";
console.log("lowercase:", personName.toLocaleLowerCase() );

//for uppercase:
console.log("uppercase:", personName.toLocaleUpperCase());

// //for titlecase:
// console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));



// for titlecase 
console.log("titlecase:", personName.replace(/\bw/g,c=>c.toUpperCase()) )