import axios from "axios";

const getUsersGitHub=()=>{
  return axios.get(`https://api.github.com/search/users?q=${search}`)
}
export { getUsersGitHub };