import React from "react";
import styles from './Sidebar.module.css';
import { Link, useLocation } from "react-router-dom";

function Sidebar() {

    const path = useLocation();

  // console.log(path);


  return (
    <div>
     <center>
        <div className={styles.bar}>
        <Link to="/overall">
            <button className={(path.pathname ==='/overall') ? styles.butActive : styles.but2}>
              Overall Coordinator
              </button>
          </Link>
          <Link to="/event">
            <button className={(path.pathname ==='/event') ? styles.butActive : styles.but2}>Events</button>
          </Link>
          <Link to="/logistics">
            <button className={(path.pathname ==='/logistics') ? styles.butActive : styles.but2}>Logistics</button>
          </Link>
          <Link to="/tech">
            <button className={(path.pathname ==='/tech') ? styles.butActive : styles.but2}>Tech</button>
          </Link>
          <Link to="/spons">
            <button className={(path.pathname ==='/spons') ? styles.butActive : styles.but2}>Sponsorship</button>
          </Link>
          <Link to="/media">
            <button className={(path.pathname ==='/media') ? styles.butActive : styles.but2}>Media and Publicity</button>
          </Link>
          <Link to="/outreach">
            <button className={(path.pathname ==='/outreach') ? styles.butActive : styles.but2}>Outreach and Hospitality</button>
          </Link>
        </div>
      </center>
    </div>
  );
}

export default Sidebar;
