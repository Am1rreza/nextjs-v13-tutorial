import Link from "next/link";

async function fetchRepoContents(repoName) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/am1rreza/${repoName}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const contents = await response.json();
  return contents;
}

export default async function RepoDirs({ repoName }) {
  const contents = await fetchRepoContents(repoName);
  const dirs = contents.filter(({ type }) => type === "dir");

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${repoName}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
