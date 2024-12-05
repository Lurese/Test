// var myName ="Lurese"
// console.log(myName)
// let Name ="john doe"
// console.log(Name)
// const job ="QA Tester"
// console.log(job)
// var school ="LASU"
// console.log(school)
// let mySchool = "STA"
// console.log(mySchool)
// const School ="EMU"
// console.log(School)
// const day ="Tuesday"
// const number = 2
// const output ="Today is " + day + "." + " It is the number " + number + " day of the week" + "."
// console.log(output)

const number = 10
if (number % 2 === 0){
    console.log('Number is even')
}
else{
    console.log('Number is even')
}

const myNumber = 5
if(myNumber % 2 === 0){
    console.log('Number is even')
}
else{
    console.log('Number is odd')
}

const side1 = 6
const side2 = 5
const side3 = 6
if(side1 ===  side2 === side3){
    console.log('Equilateral triangle')
} else if(side1 === side2 || side1 === side3 || side2 === side3){
    console.log('Isoscele triangle')
}
else{
    console.log('Scalene triangle')
}

let odd = 1 // starting point
while(odd <=20) {
    console.log(odd)
    odd = odd + 2
}
 
let oddOnes = 1 // starting point
for(; oddOnes <= 20;){
    console.log(oddOnes)
    oddOnes = oddOnes + 2
}