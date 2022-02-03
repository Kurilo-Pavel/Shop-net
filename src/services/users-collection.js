import Collection from "./collection";

export  class UsersCollection extends Collection{
  constructor() {
    super();
    this.collectionName = 'users'
  }
  getUser(username){
    return this.readDocument(username);
  }
}
const userCollection = new UsersCollection();
export default userCollection;