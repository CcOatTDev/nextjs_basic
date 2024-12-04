"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row">
      <p> Link - next/link </p>
      <Link href="/dashboard">Dashboard</Link>
      <p> ### useRouter hook</p>
      <button type="button" onClick={() => router.push("/dashboard")}>
        Dashboard
      </button>
    </div>
  );
}
