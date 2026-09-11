// we use in memory database
let users = [
  { id: 1, name: "Ananya", mob: "748816****", email: "ananya@gmail.com" },
  {
    id: 2,
    name: "shivangi rai",
    mob: "748815***",
    email: "raishivangi@gmail.com",
  },
];
let nextId = 3;

export const getUsers = () => users;
