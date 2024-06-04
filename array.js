// array 

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros =["Ajay", " Sunil", "Aksshay"];
console.log(myArr);

// revers array 
const reversArr = myArr.reverse();
console.log(reversArr);

// Combine tow diffrece array in the single array
const combinArr= myArr.concat(myHeros);
console.log(combinArr);
console.log(myArr, myHeros);

// Add the new element in the aaray 
 const newArry = myArr.push("Pratap");
console.log(newArry);


//Object literal

const jsUser= {
    fristName : "Pratap",
    lastName : " Shirame",
    age : 25,
    calAge: function(age){
        const currentYear = new Date().getFullYear();
        return this.birthYear = currentYear - this.age;
    }
    
}
console.log(jsUser.calAge());
console.log(jsUser);

