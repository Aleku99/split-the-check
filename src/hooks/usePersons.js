import { useState } from "react";
const INITIAL_PERSONS = [];
function usePersons() {
  const [persons, setPersons] = useState(INITIAL_PERSONS);
  const [total, setTotal] = useState(0);
  function addPerson(person) {
    setPersons((prevState) => {
      return [...prevState, person];
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
    let average = total / persons.length;
    persons.forEach((person) => {
      let split = person.sum - average;
      person.split = split;
      setPersons((prevState) => {
        return [...prevState, person];
      });
    });
  }

  return [persons, total, addPerson, removePerson, addSum, setSplit];
}

export default usePersons;
