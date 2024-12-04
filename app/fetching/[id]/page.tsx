import { notFound } from "next/navigation";

interface Post {
  id: string;
  title: string;
  content: string;
}

async function getPost(id: string) {
  let res = await fetch(`https://api.vercel.app/blog/${id}`, {
    cache: "force-cache",
  });
  let post: Post = await res.json();
  if (!post) notFound();
  return post;
}



export async function generateMetadata({ params }: { params: { id: string } }) {
  let post = await getPost(params.id);

  return {
    title: post.title,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  let post = await getPost(params.id);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
