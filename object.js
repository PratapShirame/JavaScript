const Pratap = {
firstName : 'Pratap',
lastName : 'Shirame',
birthYear : 1999,
job : 'Enggineer',
hasDrivingLinces : true,
calAge: function(){
    this.age = 2024 - this.birthYear;
    return this.age;
},
getSummary: function (){
    if (this.hasDrivingLinces){
        return 'He has a drivers linces'
    } else{
        return 'He dont have driver linces'
    }
}
}
console.log(`${Pratap.firstName} is a ${Pratap.calAge()} year old ${Pratap.job} and ${Pratap.getSummary()}.`);

const john ={
    fullName : 'John Smith',
    mass:78,
    height:1.69,

    calcBMI: function(){
        this.bmi=this.mass/(this.height*this.height);
        return this.bmi;
    }
}
const mark ={
    fullName : 'Mark Miller',
    mass:92,
    height:1.95,

    calcBMI: function(){
        this.bmi=this.mass/(this.height*this.height);
        return this.bmi;
    }
}
//"John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
const higherBMI = function(){
    if (john.calcBMI >= mark.calcBMI){
     return 'higher';
    }else{
        return 'less';
    }
}
console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is ${higherBMI()} than ${mark.fullName}'s (${mark.calcBMI()})`);