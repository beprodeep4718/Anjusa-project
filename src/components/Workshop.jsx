import CardWorkshop from "./CardWorkshop";

const Workshop = () => {
  const data = [
    {
      img: "./images/belur.webp",
      place: "Belur Math",
      date: "July 24",
    },
    {
      img: "./images/img7.webp",
      place: "Mayapur",
      date: "Jan 24",
    },
    {
      img: "./images/img2.webp",
      place: "Itachuna Rajbari",
      date: "July 23",
    },
  ];
  return (
    <div className="card-cont space-y-8">
      {data.map((item, index) => (
        <CardWorkshop key={index} data={item} />
      ))}
    </div>
  );
};

export default Workshop;
