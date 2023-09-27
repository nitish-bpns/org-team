import React from "react";
import Sidebar from "./Sidebar";
import styles from "./comp.module.css";
import Rightbar from "./Rightbar";
import { Link } from "react-router-dom";
// import TeamData from './TeamData'

const Over = [
  {
    img: "./images/Team/rahul.png",
    Position: "Overall Coordinator",
    Facebook: "https://www.facebook.com/profile.php?id=100056602879445",
    LinkedIn: "www.linkedin.com/in/rahul-k-r-30a687201",
    Email: "mailto:krrahul.iitkgp@gmail.com",
    Phone: "+919642196970",
  }
];

function Overall() {
  return (
    <>

      <div className={styles.sbar} >
        <Sidebar />
      </div>

      <div className={styles.rbar} >
        <Rightbar />
      </div>

      <div className={styles.over}>

        <Link to='/'>
          <img src="./images/left.svg" alt="left" className={styles.left} />
        </Link>
        <Link to='/'>
          <img src="./images/right.svg" alt="left" className={styles.right} />
        </Link>
        <img src="./images/OVERALL.png" className={styles.banner} alt="" />
        {/* <div className={styles.mhead}>
          <center>Overall Coordinator</center>
        </div> */}

        <div className={styles.card}>
          {Over.map((member) => (
            <div className={styles.pcard}>
              <img src={member.img} alt="pic" className={styles.ppic} />
              <div className={styles.name2} >K.R.Rahul</div>
              {/* <img src="./images/KRahul.png" className={styles.name} alt="" /> */}



              <div className={styles.links}>
                <div className={styles.link1}>
                  <a href={member.Email} target="blank">
                    <img
                      src="./images/mail.svg"
                      className={styles.mail}
                      alt="mail"
                    />
                  </a>
                </div>
                <div className={styles.link1} target="blank">
                  <a href={member.Facebook}>
                    <img
                      src="./images/fb.svg"
                      className={styles.mail}
                      alt="fb"
                    />
                  </a>
                </div>
                <div className={styles.link1} target="blank">
                  <a href={member.LinkedIn}>
                    <img src="./images/li.svg" className={styles.li} alt="LI" />
                  </a>
                </div>
              </div>
              <div className={styles.phone}>
                {member.Phone}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Overall;
