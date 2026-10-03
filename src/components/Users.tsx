import UserCard from "./UserCard"

import type {GitHubUser} from  "../types/users";

type usersProps={
  users:GitHubUser[]
}

function Users({users}:usersProps) {
  return (
    <div>
      hi
      {users.map(user=> <UserCard user={user} />)}
   
    </div>
  )
}

export default Users