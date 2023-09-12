import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://rajat-user:rajatsundriyal@cluster0.zfkoszx.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();
    res.status(200).json({ message: "Data saved successfully" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

export default handler;
