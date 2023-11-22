import prisma from "../lib/prisma";
import DeleteButton from "@/components/DeleteButton";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

export async function getServerSideProps() {
  const jobBoard = await prisma.jobs.findMany();
  return { props: { jobBoard } };
}

export default async function Home({ jobBoard }: any) {
  return (
    <div className="feed">
      {jobBoard.map((jobs: any) => (
        <div key={jobs.id} className="jobPost">
          <h2>{jobs.title}</h2>
          <div>
            <p>Location: {jobs.location}</p>
            <p>Skills: {jobs.skills}</p>
            <p>Salary: {jobs.salary}</p>
            <p>Company: {jobs.company}</p>
            <p>Description: {jobs.description}</p>
          </div>
          <DeleteButton id={jobs.id} />
        </div>
      ))}
    </div>
  );
}
