import React from "react";
import Link from "next/link";
import getAllPosts from "@/lib/getAllPosts";

export default async function Posts() {
  const posts = await getAllPosts();
  //   console.log(posts);

  return (
    <div className="mt-6">
      <h1>All posts</h1>

      <ul className="mt-6">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
