import React from "react";
import Sidebar from "./Sidebar";
import styles from "./comp.module.css";
import Rightbar from "./Rightbar";

const Over = [
  {
    img: "./images/Aryan.jpg",
    Name: "Rane Aryan Pannalal",
    Position: "Dance + Lifestyle Coordinator",
    Facebook: "https://m.facebook.com/profile.php/?id=100006483914831",
    LinkedIn: "https://www.linkedin.com/in/aryan-rane-22a8241b9",
    Email: "aryanrane1000@gmail.com",
    Phone: "+919112817950",
  },
  {
    img: "./images/Zaid.jpg",
    Name: "Md Zaid Alam",
    Position: "Dramatics Coordinator",
    Facebook: "https://www.facebook.com/Mallickzaid7",
    LinkedIn: "https://www.linkedin.com/in/md-zaid-alam-a99874217",
    Email: "Mallickzaid7@gmail.com",
    Phone: "+919508551256",
  },
  {
    img: "./images/Nithish.jpg",
    Name: "Burra Nitish",
    Position: "Music Coordinator",
    Facebook: "https://www.facebook.com/nithish.nani.50?mibextid=9R9pXO",
    LinkedIn: "https://www.linkedin.com/in/burra-nithish-78279a230",
    Email: "nithishnani.277@gmail.com",
    Phone: "+919885989222",
  },
  {
    img: "./images/Soni.jpg",
    Name: "Jai Kumar Soni",
    Position: "Fine Arts Coordinator",
    Facebook:
      "https://www.facebook.com/profile.php?id=100062647992139&mibextid=ZbWKwL",
    LinkedIn: "https://www.linkedin.com/in/jai-kumar-soni-64b21a211",
    Email: "sonij7767@gmail.com",
    Phone: "+919001927934",
  },
  {
    img: "./images/Sanchay.jpg",
    Name: "Sanchay Mahato",
    Position: "Quiz Coordinator",
    Facebook: "https://www.facebook.com/heavymetal17/",
    LinkedIn: "https://www.linkedin.com/in/sanchay17/",
    Email: "15sanchay@gmail.com",
    Phone: "+919479087949",
  },
  {
    img: "./images/Harish.jpg",
    Name: "Harishwar",
    Position: "Film + Photography Coordinator",
    Facebook: "https://www.facebook.com/Harishwar.Adithya.S?mibextid=ZbWKwL",
    LinkedIn: "https://www.linkedin.com/in/harishwar-adithya-s-5499b922a",
    Email: "harishwar017@gmail.com",
    Phone: "+917200132555",
  },
];

function Events() {
  return (
    <>
      <div className={styles.sbar}>
        <Sidebar />
      </div>

      <div className={styles.rbar}>
        <Rightbar />
      </div>

      <div className={styles.over}>
        <img src="./images/left.svg" alt="left" className={styles.left} />
        <img src="./images/right.svg" alt="left" className={styles.right} />

        <div className={styles.mhead}>
          <center>Events</center>
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
              <div className={styles.phone}>{member.Phone}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Events;
