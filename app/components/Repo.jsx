import Link from "next/link";
import { FaCodeBranch, FaStar } from "react-icons/fa";

async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/users/Ree-m/repos/${name}`
  );
  const repo = await response.json();
  return repo;
}
const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  console.log(repo);

  return <>
  <h2>{repo.name}</h2>
  <p>{repo.description}</p>
  </>;
};

export default Repo;
