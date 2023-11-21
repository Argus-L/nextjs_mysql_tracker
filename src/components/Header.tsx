"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();
  return (
    <nav>
      <button type="button" onClick={() => router.push("/")}>
        Home
      </button>
      <button
        className="right"
        type="button"
        onClick={() => router.push("/addJob")}
      >
        Add Job
      </button>
    </nav>
  );
}
