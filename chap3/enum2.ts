const enum Flippable {
  Burger,
  Chair,
  Cup,
  Skateboard,
  Table'
}

const enum Flippable {
  Burger = 'Burger',
  Chair = 'Chair',
  Cup = 'Cup',
  Skateboard = 'Skateboard',
  Table = 'Table'
}

function flip(f: Flippable) {
  return 'flipped it';
}

flip(Flippable.Chair);
flip(Flippable.Cup);
flip(12);
