const coding=['js','ruby','python','C++']
coding.forEach(element => {
    console.log(element);
});
//ForEach in call back function
const numbers=[1,5,4,3,7]
numbers.forEach(function(item){console.log(item)})

//ForEach in arrow function
const employee_names=['garry','harry','tommy']
//in for each we have values,index and full array in our parameter
employee_names.forEach((employee_names,index,arr)=>{
console.log(employee_names,index,arr);
})

//We use function as a parameter in ForEach
const anyname=['']
function greeting(){
    console.log('Hye! Whats Your name?'); 
}
anyname.forEach(greeting);

//now we will use objects in a array and apply FOR EACH
const myCoding=[
    {
        languageName:"Javascript",
        languageFileName:"JS"
    },
    {
        languageName:"Java",
        languageFileName:"Java"
    },
    {
        languageName:"python",
        languageFileName:"Py"
    }
]
myCoding.forEach((myCoding)=>{
    console.log(`My coding language name is ${myCoding.languageName} and my filename is ${myCoding.languageFileName}`);
})