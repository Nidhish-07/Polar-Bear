import React, { Fragment } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  console.log(router.query.slug);

  return (
    <Fragment>
      <main className={styles.container}>
        <div className={styles.main}>
          <h1>Title: {slug}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            voluptate consequuntur illum inventore laborum tenetur iure
            dignissimos consequatur a deserunt. Nesciunt eius enim quo
            repudiandae obcaecati totam quae minus sit tempore pariatur sint
            architecto aliquam natus aperiam voluptatem, hic, saepe porro
            incidunt rerum in. Reprehenderit maiores obcaecati quaerat accusamus
            excepturi?
          </p>
        </div>
      </main>
    </Fragment>
  );
};

export default Slug;
