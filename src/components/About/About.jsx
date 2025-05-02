import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.JPG")}
          alt="Me posing in front of a walkway"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/bulbIcon.png")} alt="Bulb icon" />
            <div className={styles.aboutItemText}>
              <h3>Product Strategy</h3>
              <p>
                I create product goals and timelines by understanding user needs
                and working with teams to build solutions that matter.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/barChart.png")} alt="Chart icon" />
            <div className={styles.aboutItemText}>
              <h3>User Research & Feedback</h3>
              <p>
                I gather input from real users and use that feedback to shape
                features that improve the product experience.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/handshake.jpg")} alt="Handshake icon" />
            <div className={styles.aboutItemText}>
              <h3>Team Collaboration</h3>
              <p>
                I work closely with designers, developers, and stakeholders to
                turn ideas into finished products.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
