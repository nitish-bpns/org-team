import React from 'react';
import Sidebar from './Sidebar'
import styles from './comp.module.css'
import Rightbar from './Rightbar';
import { Link} from "react-router-dom";


const Over = [
  {
    img: "./images/Nidhi.jpg",
    Name: "Nidhi Goyal",
    Position: "N/A",
    Facebook: "https://www.facebook.com/profile.php?id=100059180424213",
    LinkedIn: "https://www.linkedin.com/in/nidhi-goyal-iitkgp",
    Email: "mailto:nidhigoyal1310@gmail.com",
    Phone: "+919319142576"
},
{
    img: "./images/Shreyas.jpg",
    Name: "Shreyas Anilal",
    Position: "N/A",
    Facebook: "https://www.facebook.com/shreyas.anilal/",
    LinkedIn: "https://www.linkedin.com/in/shreyas-anilal-883166179/",
    Email: "mailto:shreyas2.0sv@gmail.com",
    Phone: "+917219284505"
}
];


function Media() {
  return (
    <>

 <div className={styles.sbar} >
    <Sidebar />
    </div>

    <div className={styles.rbar} >
    <Rightbar/>
    </div>

    <div className={styles.over}>
  
      <Link to='/'>
        <img src="./images/left.svg" alt="left" className={styles.left} />
        </Link>
        <Link to='/'>
        <img src="./images/right.svg" alt="left" className={styles.right} />
        </Link>

    <div className={styles.mhead}>
          <center>Media</center>
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

export default Media