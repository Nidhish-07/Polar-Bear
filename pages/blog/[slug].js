import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
const Slug = (props) => {
  // console.log(router.query.slug);

  function createMarkup(content) {
    return { __html: content };
  }

  const [blog, setBlog] = useState(props.data);

  return (
    <Fragment>
      <main className={styles.container}>
        <div className={styles.main}>
          <h1>{blog && blog.title}</h1>
          <hr />
          {blog && (
            <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
          )}
        </div>
      </main>
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const res = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Slug;
