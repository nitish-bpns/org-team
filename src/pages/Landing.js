import React from "react";
import styles from "./pages.module.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className={styles.landBg}>
      <center>
        <img src="./images/cover.svg" alt="cover" className={styles.cover} />
        <img src="./images/mcover.svg" alt="cover" className={styles.mcover} />
      </center>

      <br />

      <center>
        <Link to='./overall'>
          <button className={styles.but1}>Overall Coordinator</button>
        </Link>
      </center>

      <center>
        <div className={styles.land2}>
          <Link to="/event">
            <button className={styles.but2}>Events</button>
          </Link>
          <Link to="/logistics">
            <button className={styles.but2}>Logistics</button>
          </Link>
          <Link to="/tech">
            <button className={styles.but2}>Tech</button>
          </Link>
          <Link to="/spons">
            <button className={styles.but2}>Sponsorship</button>
          </Link>
          <Link to="/media">
            <button className={styles.but2}>Media and Publicity</button>
          </Link>
          <Link to="/outreach">
            <button className={styles.but2}>Outreach and Hospitality</button>
          </Link>
        </div>
      </center>
    </div>
  );
}

export default Landing;
