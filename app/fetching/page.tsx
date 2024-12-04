export default async function Page() {
  let data = await fetch("https://api.vercel.app/blog");
  let posts = await data.json();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.id} -- {post.title}
        </li>
      ))}
    </ul>
  );
}

export async function generateStaticParams() {
    let posts = await fetch("https://api.vercel.app/blog", {
      cache: "force-cache",
    }).then((res) => res.json());
  
    return posts.map((post: Post) => ({
      id: post.id,
    }));
  }