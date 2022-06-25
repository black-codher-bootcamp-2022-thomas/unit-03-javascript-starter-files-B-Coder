// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
// console.log(document.body.parentNode)
// console.log(document.getElementById('description'))
// console.log(document.getElementsByClassName('.about'))
// console.log(document.getElementById('title'))

// var body = document.body.parentNode
// var description = document.getElementById('description')
// var about = document.getElementsByClassName('about')
// var title = document.getElementById('title')

// console.log(body)
// console.log(description)
// console.log(about)
// console.log(title)

// function sayHey() { 
//     console.log("Hey!");
// }

// sayHey();

// function conversation() {
// sayHey();
// console.log("How are you?");
// console.log("Goodbye");
// }
//MULTIPLE PARAMETERS
function futureAge(name, age) {
        const ageIn5years = age + 5;
         return "Hi I'm " + name + "! " + "and I will be " + ageIn5years + " years old in five years" 
}

console.log(futureAge('Stephanie', 40));
