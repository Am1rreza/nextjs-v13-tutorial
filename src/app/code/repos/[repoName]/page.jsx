import Repo from "@/components/Repo";
import RepoDirs from "@/components/RepoDirs";
import Link from "next/link";

export default function RepoPage({ params }) {
  return (
    <div className="card">
      <Link className="btn btn-back" href={"/code/repos"}>
        Back to Repositories
      </Link>
      <Repo repoName={params.repoName} />
      <RepoDirs repoName={params.repoName} />
    </div>
  );
}
