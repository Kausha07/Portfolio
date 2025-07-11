import axios from 'axios';

export const fetchGitHubData = async (username) => {
  const { data } = await axios.get(`https://api.github.com/users/${username}`);
  const { data: repos } = await axios.get(`https://api.github.com/users/${username}/repos`);
  return { profile: data, repos };
};
