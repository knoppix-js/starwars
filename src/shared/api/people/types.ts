export type PersonDTO = {
  name: string;
  height: string;
  mass: string;
  url: string;
  gender: string;
  birth_year: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
};

export type PeopleDTO = {
  count: number;
  results: PersonDTO[];
};

export type Person = {
  id: string;
  name: string;
  height: string;
  mass: string;
  gender: string;
  birthYear: string;
};

export type People = {
  count: number;
  list: Person[];
};

export type PersonFull = {
  id: string;
  name: string;
  height: string;
  mass: string;
  gender: string;
  birthYear: string;
  skinColor: string;
  eyeColor: string;
  hairColor: string;
};

export type PersonForm = Omit<PersonFull, 'id'>;
