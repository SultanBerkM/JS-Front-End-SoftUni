const person = {
    firstName: 'Peter',
    lastName: 'Johnson',
    fullName: () => {
        this.firstName + ' ' + this.lastName;
    }
};
const getName = person.fullName();
console.log(getName);
