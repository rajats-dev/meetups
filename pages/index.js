import Layout from "@/components/layout/Layout";
import MeetupList from "@/components/meetups/MeetupList";

const HomePage = () => {
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

  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
