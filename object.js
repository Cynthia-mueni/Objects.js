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



const product=[
    {name:'Laptop',price:1200,category:'ElectronicS'},
    {name:'Shirt',price:25,category:'clothing'},
    {name:'Headphone',price:80,category:'Electronics'},
    {name:'Shoes',price:60,category:'clothing'},
];

const groupByCategory=Object.groupBy(product,({category}) =>{
    return category;
})
console.log(groupByCategory)

//3Given an array of objects, where each object represents a student with a name and an array of scores,
//write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85.
function Avarage(student){
    student.map(student=>{
        console.log(student)
    
    const studentScores=student.Scores
    console.log(student.scores)
        const sum=student.score.reduce((acc,curr)=>acc+curr)
        console.log(sum)
     const avarage=sum/studentScores.length
     console.log(avarage)

     if(avarage>=85){
        console.log(student,name,avarage)
     }
})
}

const student=[
    {name:'John',scores:[90,80,85]},
    {name:'Jane',score:[95,92,88]},
    {name:'Jim',score:[70,80,75]},
    {name:'Jill',score:[85,90,84]}
]
console.log()



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