// pages/index.js
import { fetchGitHubData } from '../lib/github'; // Import GitHub fetching logic

export default function Home({ data }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>{data.profile.name}</h1>
      <p>{data.profile.bio}</p>
      <img src={data.profile.avatar_url} alt="Avatar" width="150" />

      <h2>Repositories</h2>
      <ul>
        {data.repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 👇 This runs at build time to fetch data and pass it as props
export async function getStaticProps() {
  const data = await fetchGitHubData('your_github_username'); // Replace with your GitHub username
  return {
    props: { data },
    revalidate: 86400, // Rebuild the page once every 24 hours
  };
}
