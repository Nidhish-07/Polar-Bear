import React, { Fragment, useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// console.log(Blogs);
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    return async () => {
      const res = await fetch("http://localhost:3000/api/blogs");

      const data = await res.json();
      // console.log(data);
      return setBlogs(data);
    };
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogItem) => {
          return (
            <div key={blogItem.slug}>
              <Link href={`/blog/${blogItem.slug}`}>
                <h1 className={styles.blogItemH3}>{blogItem.title}</h1>
              </Link>
              <p>{blogItem.content.substr(0, 150)}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Blog;
