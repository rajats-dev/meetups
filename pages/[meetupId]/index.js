import Card from "@/components/ui/Card";
import React, { Fragment } from "react";
import classes from "@/components/meetups/MeetupItem.module.css";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

const MeetupsDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="decsription" content={props.meetupData.description}></meta>
      </Head>
      <div className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img src={props.meetupData.image} alt={props.meetupData.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.meetupData.title}</h3>
            <address>{props.meetupData.address}</address>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://rajat-user:rajatsundriyal@cluster0.zfkoszx.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetID = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://rajat-user:rajatsundriyal@cluster0.zfkoszx.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const objectId = new ObjectId(meetID);

  const selectedMeetup = await meetupsCollection.findOne({ _id: objectId });
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupsDetails;
