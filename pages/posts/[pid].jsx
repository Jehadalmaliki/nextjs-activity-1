
import React from 'react'

export default function Pid({ posts }) {

  return (
    <div>
[pid]
    </div>
  )}
// }
// export async function getStaticPaths() {
//   // When this is true (in preview environments) don't
//   // prerender any static pages
//   // (faster builds, but slower initial page load)
//   if (process.env.SKIP_BUILD_STATIC_GENERATION) {
//     return {
//       paths: [],
//       fallback: 'blocking',
//     }
//   }

//   // Call an external API endpoint to get posts
//   const res = await fetch('https://dummyjson.com/posts/')
//   const posts = await res.json()

//   // Get the paths we want to prerender based on posts
//   // In production environments, prerender all pages
//   // (slower builds, but faster initial page load)
//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }))

//   // { fallback: false } means other routes should 404
//   return { paths, fallback: false }
// }