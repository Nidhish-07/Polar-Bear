// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { log } from "console";
import * as fs from "fs";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export default function handler(req, res) {
  // console.log(req);
  // let blog;

  fs.readFile(`blogData/${req.query.slug}.json`, "utf-8", (error, data) => {
    // console.log(JSON.parse(data));
    // blog = data;

    if (error) {
      return res.status(404).send({ error: "Blog not found" });
    }

    console.log(req.query.slug);
    res.status(200).send(JSON.parse(data));
  });
//   res.status(200).send({ name: "Jane Doe" });
}
