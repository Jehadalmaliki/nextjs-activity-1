import React from "react";
import Link from "next/link";

export default function Posts({ posts }) {
  return (
    <div>
      {posts.posts.map((tag ) => (
        <div key={tag.id}>
          <h2>{tag.title}</h2>
          <p>{tag.body}</p>
          <Link href={`/posts/{tag.id}}`}>Read more</Link>
        </div>
      ))}
      <p>hi</p>
    </div>
  );
}
export async function getStaticProps(context) {
  const res = await fetch(" https://dummyjson.com/posts ");

  const posts = await res.json();

  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}
