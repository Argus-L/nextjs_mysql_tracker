import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, location, skills, salary, company, description } = req.body;
  const result = await prisma.jobs.create({
    data: {
      title: title,
      location: location,
      skills: skills,
      salary: salary,
      company: company,
      description: description,
    },
  });
  return res.status(201).json(result);
}
