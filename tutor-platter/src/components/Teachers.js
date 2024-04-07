import React from "react";
import "../styleSheets/teachers.css";
import { FaRegBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
export default function Teachers() {
  const details = [
    {
      title: "art teacher",
      place: "ludhiyana,up",
      pincode: "pincode 24534",
      teachline: "only for online teaching",
      image:
        "https://previews.123rf.com/images/enterline/enterline1610/enterline161000420/64365266-the-word-art-painted-in-black-ink-over-a-colorful-watercolor-washed-background-concept-and-theme.jpg",
    },
    {
        title: "art teacher",
        place: "ludhiyana,up",
        pincode: "pincode 24534",
        teachline: "only for online teaching",
        image:
          "https://previews.123rf.com/images/enterline/enterline1610/enterline161000420/64365266-the-word-art-painted-in-black-ink-over-a-colorful-watercolor-washed-background-concept-and-theme.jpg",
      },
      {
        title: "art teacher",
        place: "ludhiyana,up",
        pincode: "pincode 24534",
        teachline: "only for online teaching",
        image:
          "https://previews.123rf.com/images/enterline/enterline1610/enterline161000420/64365266-the-word-art-painted-in-black-ink-over-a-colorful-watercolor-washed-background-concept-and-theme.jpg",
      },
  ];
  return (
    <div className="recurit_container">
      <h2>recurting teachers made easy</h2>
      {details.map((data) => (
        <>
           <div className="about_teacher">
          <div className="image">
            <img src={data.image} alt="" />
          </div>

          <div className="details_container">
            <h3>{data.title}</h3>
            <div className="details">
              <p>
                {" "}
                <FaRegBuilding className="icon" />
                {data.place}{" "}
              </p>
              <p>
                {" "}
                <FaLocationDot className="icon" /> {data.pincode}{" "}
              </p>
              <p>
                {" "}
                <GoDotFill className="icon" /> {data.teachline}
              </p>
            </div>
          </div>

        </div>
        <br/>
        </>
     
      ))}

    </div>
  );
}
