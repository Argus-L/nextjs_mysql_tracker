"use client";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: number }) {
  const router = useRouter();

  async function deleteJob(id: number) {
    try {
      await fetch(`/api/job/${id}`, {
        method: "DELETE",
      });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  return <button onClick={() => deleteJob(id)}>Delete</button>;
}
