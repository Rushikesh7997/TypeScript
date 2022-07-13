interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

function useradmin( obj:User | Admin) {
return obj.type
}

const InputUser: User = {
type: "user",
  name: "user",
  age: 10,
  occupation: "engineering"

}
const InputUser1: Admin = {
type: "admin",
  name: "admin",
  age: 20,
  role: "developer"

}
console.log(useradmin(InputUser));
console.log(useradmin(InputUser));