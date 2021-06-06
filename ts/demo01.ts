type person = {
  name: string;
  age: number;
};

const p: Pick<person, 'name'> = {
  name: 'z',
};
let pKey: keyof person = 'age';
