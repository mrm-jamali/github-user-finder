import axios from "axios";
import type {SearchProps } from "../types/users";
import type { GitHubSearchResponse } from "../types/users";

const searchGitHubUsers=async({search}:SearchProps)=>{
const response=await axios.get<GitHubSearchResponse>(`https://api.github.com/search/users?q=${search}`)
  return response.data;
}
type Props={
  login: string;
}
const getGitHubUser=async({login}:Props)=>{
  const response=await axios.get(`https://api.github.com/users/${login}`)
  return response.data
}
export { searchGitHubUsers,getGitHubUser };