import React, { Fragment, useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// console.log(Blogs);
const Blog = (props) => {
  // console.log(props);

  const [blogs, setBlogs] = useState(props.data);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogItem) => {
          return (
            <div key={blogItem.slug}>
              <Link href={`/blog/${blogItem.slug}`}>
                <h1 className={styles.blogItemH3}>{blogItem.title}</h1>
              </Link>
              <p>{blogItem.metadesc}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/blogs");
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Blog;
