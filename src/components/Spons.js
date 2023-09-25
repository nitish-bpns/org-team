import React from 'react';
import Sidebar from './Sidebar'
import styles from './comp.module.css'
import Rightbar from './Rightbar';

const Over = [
  {
    img: "./images/Rishi.jpg",
    Name: "RISHI KUMAR",
    Position: "N/A",
    Facebook: "https://www.facebook.com/profile.php?id=100006118908643",
    LinkedIn: "https://www.linkedin.com/in/rishi-kumar-01a752221/",
    Email: "kumarrishi.iitkgp@gmail.com",
    Phone: "+918084927363"
},
{
    img: "./images/Nikhil.jpeg",
    Name: "Nikhil Goyal",
    Position: "N/A",
    Facebook: "https://www.facebook.com/profile.php?id=100056865170803",
    LinkedIn: "https://www.linkedin.com/in/nikhil-goyal-612700205/",
    Email: "nikhilgoyal.iitkgp@gmail.com",
    Phone: "+919855342222"
},
{
    img: "./images/Awanish.jpg",
    Name: "Awanish Kumar",
    Position: "N/A",
    Facebook: "https://www.facebook.com/profile.php?id=100007226146644&mibextid=LQQJ4d",
    LinkedIn: "http://linkedin.com/in/awanish-kumar-413781205",
    Email: "Awanish.iitkgp@gmail.com",
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
    <Rightbar/>
    </div>

    <div className={styles.over}>
  
    <img src='./images/left.svg' alt='left' className={styles.left}/>
    <img src='./images/right.svg' alt='left' className={styles.right}/>
  
    <div className={styles.mhead}>
          <center>Sponsorship</center>
        </div>
  
    <div className={styles.card}>
          {Over.map((member) => (
            <div className={styles.pcard}>
              <img src={member.img} alt="pic" className={styles.ppic} />
              <div className={styles.name}>{member.Name}</div>



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