const findTheOldest = function(people) {
    let oldestPerson;

    people.forEach(person=>{
        if(oldestPerson===undefined){
            oldestPerson=person;
        }else {

            if(person.yearOfDeath===undefined || oldestPerson.yearOfDeath===undefined){
                if(person.yearOfBirth<oldestPerson.yearOfBirth){
                    oldestPerson=person;
                }        
                return;    
            } else {
                if((oldestPerson.yearOfDeath - oldestPerson.yearOfBirth)<(person.yearOfDeath-person.yearOfBirth)){
                    oldestPerson=person;
            }
        }
    }

    })

    return oldestPerson;

};

module.exports = findTheOldest;
