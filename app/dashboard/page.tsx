// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL

import { Suspense } from "react";
import Loading from "./loading";

export default async function Page() {
  // Simulate a data fetching delay
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve({ name: "John Doe", details: "Team Lead" }), 1000)
  );

  const data2 = await new Promise((resolve) =>
    setTimeout(() => resolve({ name: "John Doe", details: "Team Lead" }), 2000)
  );

  return (
    <>
      <hr></hr>
      <Suspense fallback={<p>Loading data2...</p>}>
        <div>
          <h1>Team Member: A</h1>
          <p>Details: B</p>
        </div>
      </Suspense>
      <Suspense fallback={<Loading/>}>
        <div>
          <h1>Team Member: {data.name}</h1>
          <p>Details: {data.details}</p>
        </div>
      </Suspense>
      D
    </>
  );
}
