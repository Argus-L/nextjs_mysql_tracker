import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jobId = req.query.id;

  switch (req.method) {
    case "DELETE":
      return handleDelete(jobId, res);

    default:
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`
      );
  }
}

async function handleDelete(jobId: unknown, res: NextApiResponse<any>) {
  const job = await prisma.jobs.delete({
    where: { id: Number(jobId) },
  });
  return res.json(job);
}
