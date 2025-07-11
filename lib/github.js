// lib/github.js
import axios from 'axios';

export const fetchGitHubData = async () => {
  const username = "Kausha07";
  const user = await axios.get(`https://api.github.com/users/${username}`);
  const repos = await axios.get(`https://api.github.com/users/${username}/repos`);
  return {
    profile: user.data,
    repos: repos.data,
  };
};
