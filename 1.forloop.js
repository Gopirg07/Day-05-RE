// 1. For the given JSON literate over all for loops(for,for in, forEadh)
var student = [{
    "Name" : "Gopi",
    "Age" : "22",
    "Address" : "Chennai",
    "Id" : "07"
}]
//JSON For loop

for(let i=0;i<student.length;i++){
    console.log(student[i]); //{ Name: 'Gopi', Age: '22', Address: 'Chennai', Id: '07' }
}

//JSON forin loop

for(let j in student){
    console.log(student[j]); //{ Name: 'Gopi', Age: '22', Address: 'Chennai', Id: '07' }
}

//JSON forof loop

for(arr of student){
    console.log(arr); //{ Name: 'Gopi', Age: '22', Address: 'Chennai', Id: '07' }
}

//JSON forEach loop

student.forEach((ele)=>console.log(ele)); //{ Name: 'Gopi', Age: '22', Address: 'Chennai', Id: '07' }