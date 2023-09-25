import React from 'react';
import Sidebar from './Sidebar'
import styles from './comp.module.css'
import Rightbar from './Rightbar';

const Over = [
  {
    img: "./images/Zeeshan.jpg",
    Name: "Zeeshan Khan",
    Position: "N/A",
    Facebook: "https://www.facebook.com/profile.php/?id=100003497188793",
    LinkedIn: "https://www.linkedin.com/in/zeeshan-khan-05a25211b",
    Email: "zeeshankhan.iitkgp@gmail.com",
    Phone: "+919770583095"
},
{
    img: "./images/Rishitha.jpg",
    Name: "Rishitha Marlapati",
    Position: "Outreach and Hospitality Coordinator ",
    Facebook: "https://www.facebook.com/rishitha.marlapati?mibextid=ZbWKwL",
    LinkedIn: "https://www.linkedin.com/in/rishitha-marlapati-a7096521b",
    Email: "marlapatirishitha@gmail.com",
    Phone: "+918850412529"
},
{
    img: "./images/Sarath.png",
    Name: "GVK Sai Sarath",
    Position: "N/A",
    Facebook: "https://www.facebook.com/sarathgarimella17/",
    LinkedIn: "https://www.linkedin.com/in/saisarathgarimella/",
    Email: "saisarath857@gmail.com",
    Phone: "+919618790643"
}
];


function Outreach() {
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
          <center>Outreach</center>
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

export default Outreach