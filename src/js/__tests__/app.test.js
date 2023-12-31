import Team from '../app';

test('addCheck', () => {
  const team = new Team();
  const character = {
    name: 'hero',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  team.add(character);

  const result = team.members.size;
  const size = 1;

  expect(result).toBe(size);
});

test('addThrowErrorCheck', () => {
  const team = new Team();
  const character = {
    name: 'hero',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  team.add(character);

  expect(() => team.add(character)).toThrow('Данный персонаж уже существует в вашей команде');
});

test('addAllCheck', () => {
  const team = new Team();
  const bowman = {
    name: 'hero',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const zombie = {
    name: 'hero_2',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  team.addAll(bowman, zombie);

  const result = team.members.size;
  const size = 2;

  expect(result).toBe(size);
});

test('toArrayCheck', () => {
  const team = new Team();
  const bowman = {
    name: 'hero',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const zombie = {
    name: 'hero_2',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  team.addAll(bowman, zombie);

  const array = team.toArray();
  const result = [
    {
      name: 'hero',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
    {
      name: 'hero_2',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ];

  expect(result).toEqual(array);
});
