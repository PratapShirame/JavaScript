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
console.log(`${Pratap.firstName} is a ${Pratap.calAge()} year old and ${Pratap.getSummary()}.`);

