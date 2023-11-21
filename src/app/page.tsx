import prisma from "../lib/prisma";
import DeleteButton from "@/components/DeleteButton";

export default async function Home() {
  const jobBoard = await prisma.jobs.findMany();

  return (
    <div className="feed">
      {jobBoard.map((jobs) => (
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
