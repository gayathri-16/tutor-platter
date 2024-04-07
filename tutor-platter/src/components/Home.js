import React from "react";
import "../styleSheets/home.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Teachers from "./Teachers";
export default function Home() {
  return (
    <div>
      <header className="headerPart">
        <div className="logoSec">
          <div className="img-container">
            <img
              src="https://png.pngtree.com/png-clipart/20240103/original/pngtree-hand-holding-graduation-cap-png-image_14008116.png"
              alt="Tutor Platter"
            />
          </div>
          <h3>tutor platter</h3>
          <div className="divider"></div>
          <p> teach the world</p>
        </div>
        <div className="authSec">
          <FaRegCircleUser className="icon" />
          <p>login</p>
        </div>
      </header>
      <nav className="navBar">
        <p>home</p>
        <p>featured jobs</p>
        <p>hire teachers</p>
      </nav>
      <section className="banner">
        <div className="hero-image">
          <img
            src="https://media.istockphoto.com/id/1044232206/photo/diverse-females-involved-in-stem.jpg?s=612x612&w=0&k=20&c=Zkzc03fAoVzHpabgNluLF7f3jfku5_3Ai8BwgEZXkPs="
            alt=""
          />
        </div>
        <div className="content">
          <h3>find teaching jobs in india</h3>
          <p>
            Search hundres of teaching jobs ahead, including <br />
            opportunities with international schools, government <br />
            program, universities and language colleges in INDIA
          </p>
          <button>
            more <FaAngleRight />
          </button>
        </div>
      </section>
      <section className="search_job">
        <h3>job search</h3>
        <p>job portal exclusively private & govt aided schools in india</p>
        <div className="search_area">
          <div className="search">
            <label>title</label>
            <input type="text" />
          </div>
          <div className="search">
            <label>location</label>
            <input type="text" />
          </div>
          <div className="search">
            <label>type</label>
            <input type="text" className="type_input" />
          </div>
        </div>
        <button>
          search
          <FaSearch />
        </button>
      </section>
      <Teachers />
    </div>
  );
}
