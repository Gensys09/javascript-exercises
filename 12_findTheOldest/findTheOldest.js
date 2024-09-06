const findTheOldest = function(people) {
    let oldgePerson = null;
    let maxAge = 0;
    people.forEach(person => {
        const { name, yearOfBirth, yearOfDeath } = person;

        // Calculate the age of the person
        let age;
        if (yearOfDeath === undefined) {
            const currentYear = new Date().getFullYear();
            age = currentYear - yearOfBirth; 
        } else {
            age = yearOfDeath - yearOfBirth;
        }
        
        // Update the oldest person if this person is older
        if (maxAge < age) {
            maxAge = age;
            oldgePerson = person;
        }
        
    });

    return oldgePerson;
};

// Do not edit below this line
module.exports = findTheOldest;
