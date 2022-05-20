import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
const Slug = () => {
  // console.log(router.query.slug);

  const [blog, setBlog] = useState();

  const router = useRouter();
  useEffect(() => {
    return async () => {
      if (!router.isReady) {
        return;
      }

      const { slug } = router.query;
      const res = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
      const data = await res.json();
      setBlog(data);
    };
  }, [router.isReady]);

  return (
    <Fragment>
      <main className={styles.container}>
        <div className={styles.main}>
          <h1>{blog && blog.title}</h1>
          <p>{blog && blog.content}</p>
        </div>
      </main>
    </Fragment>
  );
};

export default Slug;
