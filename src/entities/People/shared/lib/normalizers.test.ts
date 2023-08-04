import { personNormalize, peopleNormalize } from './normalizers';

describe('test normalizer functions', () => {
  it('test personNormalize', () => {
    expect(
      personNormalize({
        name: '1',
        height: '2',
        mass: '3',
        gender: '4',
        url: '/asasas/1/',
        birth_year: '12',
        hair_color: 'blue',
        skin_color: 'white',
        eye_color: 'green',
      }),
    ).toEqual({
      birthYear: '12',
      eyeColor: 'green',
      gender: '4',
      hairColor: 'blue',
      height: '2',
      id: '1',
      mass: '3',
      name: '1',
      skinColor: 'white',
    });
  });

  it('test peopleNormalize', () => {
    expect(
      peopleNormalize({
        count: 20,
        results: [
          {
            name: '1',
            height: '2',
            mass: '3',
            gender: '4',
            url: '/asasas/1/',
            birth_year: '12',
            hair_color: 'blue',
            skin_color: 'white',
            eye_color: 'green',
          },
          {
            name: '12',
            height: '22',
            mass: '32',
            gender: '42',
            url: '/asasas/2/',
            birth_year: '122',
            hair_color: 'blue2',
            skin_color: 'white2',
            eye_color: 'green2',
          },
        ],
      }),
    ).toEqual({
      count: 20,
      list: [
        {
          birthYear: '12',
          gender: '4',
          height: '2',
          id: '1',
          mass: '3',
          name: '1',
        },
        {
          birthYear: '122',
          gender: '42',
          height: '22',
          id: '2',
          mass: '32',
          name: '12',
        },
      ],
    });
  });
});
