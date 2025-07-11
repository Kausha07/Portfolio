import { fetchGitHubData } from "../lib/github";

export async function getStaticProps() {
  const data = await fetchGitHubData();
  return {
    props: { data },
    revalidate: 86400,
  };
}

export default function Home({ data }) {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>{data.profile.name}</h1>
      <p>{data.profile.bio}</p>
      <img src={data.profile.avatar_url} alt="Avatar" width={120} />

      <h2>GitHub Repositories</h2>
      <ul>
        {data.repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank">{repo.name}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
