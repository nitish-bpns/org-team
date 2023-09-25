import React from 'react';
import Sidebar from './Sidebar'
import styles from './comp.module.css'
import Rightbar from './Rightbar';

const Over = [
  {
    img: "./images/Nitish.jpg",
    Name: "Nitish Kumar",
    Position: "Tech",
    Facebook: "https://www.facebook.com/nitishk1005",
    LinkedIn: "https://www.linkedin.com/in/nitish-bpns",
    Email: "nitishkumar1.iitkgp@gmail.com",
    Phone: "+919507816000"
},
{
    img: "./images/Shivam.jpg",
    Name: "Shivam Dwivedi",
    Position: "N/A",
    Facebook: "https://www.facebook.com/profile.php?id=100048948850858",
    LinkedIn: "https://www.linkedin.com/in/shivam-dwivedi-764006217/",
    Email: "shivamkval@gmail.com",
    Phone: "+919044162170"
},
];

function Tech() {
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
          <center>Tech Coordinators</center>
        </div>
  
    <div className={styles.card}>
          {Over.map((member) => (
            <div className={styles.pcard}>
              <img src={member.img} alt="pic" className={styles.ppic} />
              <div className={styles.name}>{member.Name}</div>



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
  )
}

export default Tech