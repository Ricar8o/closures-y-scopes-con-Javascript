const person = () => {
    var savedName = 'Name';

    return {
        getName: () => {
            return savedName;
        },
        setName: (name) => {
            savedName = name;
        },
    };
};

let newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Ricardo');
console.log(newPerson.getName());