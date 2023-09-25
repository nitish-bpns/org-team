import React from 'react';
import Sidebar from './Sidebar'
import styles from './comp.module.css'
import Rightbar from './Rightbar';

const Over = [
  {
    img: "./images/Ishan.jpg",
    Name: "Ishan Nargolkar",
    Position: "N/A",
    Facebook: "https://www.facebook.com/ishan.nargolkar.3",
    LinkedIn: "www.linkedin.com/in/ishan-nargolkar",
    Email: "ishan.nargolkar@gmail.com",
    Phone: "+917261970250"
},
{
    img: "./images/Akshat.jpg",
    Name: "Akshat Ansh Nayak",
    Position: "N/A",
    Facebook: "https://www.facebook.com/BludgerMist16850?mibextid=V3Yony",
    LinkedIn: "https://www.linkedin.com/in/akshat-ansh-nayak-752480205",
    Email: "akshatansh.nayak@gmail.com",
    Phone: "+918597986876"
},
{
    img: "./images/Kusuma.jpg",
    Name: "Kusuma Ullasa",
    Position: "N/A",
    Facebook: "https://www.facebook.com/vskusuma.ullasa?mibextid=ZbWKwL",
    LinkedIn: "https://www.linkedin.com/in/kusuma-ullasa",
    Email: "kusumaullasa11@gmail.com",
    Phone: "+916305767377"
}
];

function Logistics() {
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
          <center>Logistics</center>
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

export default Logistics