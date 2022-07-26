import { useState } from "react";
const INITIAL_PERSONS_STATE = [];
function usePersons() {
  const [persons, setPersons] = useState(INITIAL_PERSONS_STATE);
  const [total, setTotal] = useState(0);
  function addPerson(person) {
    let average = parseInt(
      (total + parseInt(person.sum)) / (persons.length + 1)
    );

    console.log(average);
    setPersons((prevState) => {
      return [...prevState, person].map((person) => {
        if (persons.length > 0) {
          return { ...person, split: person.sum - average };
        } else {
          return { ...person, split: 0 };
        }
      });
    });
  }
  function removePerson(removedPerson) {
    let newPersons = persons.filter((person) => {
      return person.name !== removedPerson.name;
    });
    setPersons(newPersons);
  }
  function addSum(sum) {
    setTotal((prevState) => {
      return prevState + sum;
    });
  }
  function setSplit(total, persons) {
    if (persons.length > 0) {
      let average = total / persons.length;
      let personsModified = persons.map((person) => {
        return { ...person, split: person.sum - average };
      });
      console.log(persons);
      console.log(personsModified);
      setPersons(personsModified);
    }
  }

  return [persons, total, addPerson, removePerson, addSum, setSplit];
}

export default usePersons;
