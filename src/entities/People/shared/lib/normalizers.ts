import { People, PeopleDTO, PersonDTO, PersonFull } from 'shared/api/people';

export const getPersonIdFromUrl = (url: string) => {
  const urlParts = url.split('/');

  return urlParts[urlParts.length - 2];
};

export const personNormalize = ({
  name,
  height,
  mass,
  gender,
  url,
  birth_year,
  hair_color,
  skin_color,
  eye_color,
}: PersonDTO): PersonFull => ({
  id: getPersonIdFromUrl(url),
  birthYear: birth_year,
  hairColor: hair_color,
  skinColor: skin_color,
  eyeColor: eye_color,
  name,
  height,
  mass,
  gender,
});

export const peopleNormalize = ({ count, results }: PeopleDTO): People => ({
  count,
  list: results.map(({ name, height, mass, url, birth_year, gender }) => ({
    id: getPersonIdFromUrl(url),
    birthYear: birth_year,
    name,
    height,
    mass,
    gender,
  })),
});
