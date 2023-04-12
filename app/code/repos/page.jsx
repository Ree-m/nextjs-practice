// 'use client';  If i type "use-client",then the coponent becomes a client side component.But in nextjs,components are by default server side components.
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import { resolve } from "styled-jsx/css";

async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/Ree-m/repos");

  await new Promise((resolve)=>setTimeout(resolve,2000))
  const repos = await response.json();
  return repos;
}
const ReposPage = async () => {
  const repos = await fetchRepos();
  console.log(repos);

  return (
    <div className="repos-container">
      <h1>Repositories</h1>

      <ul className="repo-list">
        {repos.map((repo) => (
          <li>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
