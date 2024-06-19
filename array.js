// array 

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros =["Ajay", " Sunil", "Aksshay"];
//console.log(myArr);

// revers array 
const reversArr = myArr.reverse();
//console.log(reversArr);

// Combine tow diffrece array in the single array
const combinArr= myArr.concat(myHeros);
//console.log(combinArr);
//console.log(myArr, myHeros);

// Add the new element in the aaray 
 const newArry = myArr.push("Pratap");
//console.log(newArry);


//Object literal

const jsUser= {
    fristName : "Pratap",
    lastName : " Shirame",
    calAge: function(age){
        const currentYear = new Date().getFullYear();
        return this.birthYear = currentYear - age;
    }

    
}
const age2 = jsUser.calAge(17);
//console.log(age2);



const myArray = new Array(2, 5, 9, 3, 7, 4, 6, 1, );


myArray.sort((a, b) =>  b - a );
const evenNumbers = myArray.filter(number => number % 2 === 0);
const primeNumbers = myArray.filter(number => number % 2 === 1);


// console.log(myArray);
// console.log(evenNumbers);
// console.log(primeNumbers);

// const myArray1 = ["banana", "apple", "orange", "grape"];

// const newArry2= myArray1.sort();
// const newArry3 = myArray.sort((a, b) => {
//     return localeCompare(a); // Compare strings in reverse order
// });

//console.log(newArry2);
//console.log(newArry3);



//const userName = "Pratap"

function userLog(userName) {
    const userNames = ["Pratap", "Shan", "Anil", "Rupali", "Nitu", "Ashu"];
    if (userNames.includes(userName)) {
        console.log(`${userName} is logging in to the database successfully`);
    } else {
        console.log(`The provided user name is not correct`);
    }
    return userName;
}

userLog("Pratap");


const brainMind = 'coffe2';

if( brainMind === "coffe"){
    console.log("Keep Coding");
}else{
    console.log("Order Coffer");
}
