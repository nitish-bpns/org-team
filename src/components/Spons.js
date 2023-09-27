import React from 'react';
import Sidebar from './Sidebar'
import styles from './comp.module.css'
import Rightbar from './Rightbar';
import { Link } from "react-router-dom";

const Over = [
  {
    img: "./images/Team/Rishi.png",
    Name: "Rishi Kumar",
    Position: "N/A",
    Facebook: "https://www.facebook.com/profile.php?id=100006118908643",
    LinkedIn: "https://www.linkedin.com/in/rishi-kumar-01a752221/",
    Email: "mailto:kumarrishi.iitkgp@gmail.com",
    Phone: "+918084927363"
  },
  {
    img: "./images/Team/nikhil.png",
    Name: "Nikhil Goyal",
    Position: "N/A",
    Facebook: "https://www.facebook.com/profile.php?id=100056865170803",
    LinkedIn: "https://www.linkedin.com/in/nikhil-goyal-612700205/",
    Email: "mailto:nikhilgoyal.iitkgp@gmail.com",
    Phone: "+919855342222"
  },
  {
    img: "./images/Team/avanish.png",
    Name: "Awanish Kumar",
    Position: "N/A",
    Facebook: "https://www.facebook.com/profile.php?id=100007226146644&mibextid=LQQJ4d",
    LinkedIn: "http://linkedin.com/in/awanish-kumar-413781205",
    Email: "mailto:Awanish.iitkgp@gmail.com",
    Phone: "+919351114364"
  }
]
function Spons() {
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
        <img src="./images/SPONSORSHIP.png" className={styles.banner} alt="" />
        {/* <div className={styles.mhead}>
          <center>Sponsorship</center>
        </div> */}

        <div className={styles.card}>
          {Over.map((member) => (
            <div className={styles.pcard}>
              <img src={member.img} alt="pic" className={styles.ppic} />
              <div className={styles.name2}>{member.Name}</div>



              <div className={styles.links}>
                <div className={styles.link1}>
                  <a href={member.Email} target="blank" rel="noreferrer">
                    <img
                      src="./images/mail.svg"
                      className={styles.mail}
                      alt="mail"
                    />
                  </a>
                </div>
                <div className={styles.link1} target="blank" rel="noreferrer">
                  <a href={member.Facebook}>
                    <img
                      src="./images/fb.svg"
                      className={styles.mail}
                      alt="fb"
                    />
                  </a>
                </div>
                <div className={styles.link1} target="blank" rel="noreferrer">
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
  )
}

export default Spons