import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "john",
    email: "john@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "jane",
    email: "jane@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
