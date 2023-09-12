import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React MeetUp</title>
        <meta
          name="decsription"
          content="Browse all active React Meetup Places"
        ></meta>
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
};

// export async function getServerSideProps(context) {
//   //fetching the API
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetching the API
  const client = await MongoClient.connect(
    "mongodb+srv://rajat-user:rajatsundriyal@cluster0.zfkoszx.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const result = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: result.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
