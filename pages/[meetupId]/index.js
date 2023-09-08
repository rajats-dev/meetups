import Card from "@/components/ui/Card";
import { useRouter } from "next/router";
import React from "react";
import classes from "@/components/meetups/MeetupItem.module.css";

const MeetupsDetails = () => {
  const router = useRouter();
  const meetID = router.query.meetupId;

  const DUMMY_MEETUPS = [
    {
      id: "m1",
      title: "A First Meetup",
      image:
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      address: "Some Address 5, 12345 Some City",
      description: "First MeetUp",
    },
    {
      id: "m2",
      title: "A Second Meetup",
      image:
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      address: "Some Address 10, 12345 Some City",
      description: "Second MeetUp",
    },
  ];

  const content = DUMMY_MEETUPS.filter((ele) => ele.id == meetID);
  return (
    <div className={classes.item}>
      {content.map((el) => (
        <Card>
          <div className={classes.image}>
            <img src={el.image} alt={el.title} />
          </div>
          <div className={classes.content}>
            <h3>{el.title}</h3>
            <address>{el.address}</address>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MeetupsDetails;
