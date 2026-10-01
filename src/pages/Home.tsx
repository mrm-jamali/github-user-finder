import Footer from "../components/Footer"
import Header from "../components/Header"
import Nav from "../components/Nav"
import PopularUsers from "../components/PopularUsers"
import Users from "../components/Users"

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