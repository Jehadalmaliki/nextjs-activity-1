import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
   <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/posts">Blog Post</Link>
      </li>
    </ul>

    </div>
  )
}
