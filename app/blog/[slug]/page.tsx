export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const pa = await params;
  console.log(pa);

  return <div>My Post: {pa.slug}</div>;
}

export async function generateStaticParams() {
  const posts: [] = await new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          { name: "John Doe", details: "Team Lead", slug: "omg" },
          { name: "John Doe", details: "Team Lead", slug: "omg2" },
        ]),
      1000
    )
  );

  var a = posts.map((post: []) => ({
    slug: post.slug,
  }));
  console.log(a);

  return a;
}
