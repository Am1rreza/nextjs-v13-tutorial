import Repo from "@/components/Repo";
import RepoDirs from "@/components/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";

export default function RepoPage({ params }) {
  return (
    <div className="card">
      <Link className="btn btn-back" href={"/code/repos"}>
        Back to Repositories
      </Link>
      <Suspense fallback={<h4>Loading Repo...</h4>}>
        <Repo repoName={params.repoName} />
      </Suspense>
      <Suspense fallback={<h4>Loading Directories...</h4>}>
        <RepoDirs repoName={params.repoName} />
      </Suspense>
    </div>
  );
}
