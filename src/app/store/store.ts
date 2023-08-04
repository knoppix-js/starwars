import { PeopleStore, PersonStore } from 'entities/People';

export const store = {
  peopleStore: new PeopleStore(),
  personStore: new PersonStore(),
};
