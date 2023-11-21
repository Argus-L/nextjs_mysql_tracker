"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddJob() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [salary, setSalary] = useState(0);
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, location, skills, salary, company, description };
      await fetch("/api/job", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={submitData}>
        <h1>Enter your info</h1>
        <div>
          <label htmlFor="title">Job Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            name="location"
            required
          />
        </div>
        <div>
          <label htmlFor="skills">Skills</label>
          <input
            onChange={(e) => setSkills(e.target.value)}
            type="text"
            name="skills"
            required
          />
        </div>
        <div>
          <label htmlFor="salary">Salary</label>
          <input
            onChange={(e) => setSalary(e.target.valueAsNumber)}
            type="number"
            name="salary"
            required
          />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            name="company"
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
            required
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
