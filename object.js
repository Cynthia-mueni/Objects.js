//Given an array of objects, each object representing a person with a name and age property,
// write a function that returns a new array containing the names of all people who are 18 years old or older.
const people=[
   {name:'Alice',age:17},
   {name:'Eunice',age:22}, 
   {name:'Charlie',age:14},
   {name:'max',age:19},
]

const older=people.filter(item=>{
return(item.age>=18)
})
console.log({older})

2
// Write a function that takes an array of objects, where each object represents a product with a name, price,and category property.
// The function should return an object that groups the products by their categories, with the category names as keys and the arrays of products as values.
function gruopByCategory(product){ 
    let product=Object.gruopBy(product,Property=>Property.category)
    console.log(product)
}
const product=[
    
    {name:'Laptop'price:1200,category:'ElectronicS'},
    {name:'Shirt'price:25,category:'clothing'},
    {name:'Headphone'price:80,category:'Electronics'},
    {name:'Shoes'price:60,category:'clothing'},
];
gruopByCategory(product)






//3Given an array of objects, where each object represents a student with a name and an array of scores,
//write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85.
const p





//4Given an object representing a car, with properties for the make, model, year,and a method to display
//the car's information, write a function that takes the car object and adds a new method to the object called age.
//The age method should return the current age of the car based on the current year and the car's year property.
function myCar(car){
    car['age']=(2024-car.year)
    console.log(car)
}
car={
    make:'Ford',
    model:'Ranger',
    year:2023,
    displayinfo:function(){
        console.log(`make:${this.make},model:${this.model},year:${this.year}`);
    }
}
myCar(car)