
import Header from "../components/Header"

import PopularUsers from "../components/PopularUsers"
import Users from "../components/Users"
import { getUsersGitHub } from "../api/githubApi"
import { useQuery } from "@tanstack/react-query";

function Home() {
  return (
    <div>
        
        <Header />
     
        <Users />
          <PopularUsers />
    </div>
  )
}

export default Home