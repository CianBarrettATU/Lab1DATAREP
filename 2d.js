const ages = [25,31,42,77];

let product = ages.map((value)=>{
   if(value <= 70) {
    return value * 2;
   }
 })

console.log(product);


