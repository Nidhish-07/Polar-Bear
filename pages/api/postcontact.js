import * as fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).send("hello");
    console.log(req.body);

    let data = await fs.promises.readdir("contactData");
    fs.promises.writeFile(
      `contactData/${data.length+1}.json`,
      JSON.stringify(req.body),
      (err) => {
        if (err) {
          throw new Error(err);
        }
        console.log("Saved");
      }
    );
  } else {
    res.status(200).send("Not a post ");
  }
}
