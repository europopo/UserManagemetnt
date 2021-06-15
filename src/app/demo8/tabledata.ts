import { User } from "../class/user";
export class CreateData {

  users: User[];

  constructor() {
    this.users = [];
    this.create();
  }

  create() {
    for (let index = 1; index < 20000; index++){
      this.users.push({
        id: index,
        name: '王'+index.toString()
      })
    }
  }

}

