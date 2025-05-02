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
          alt="A profile view in a scenic walkway"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/bulbIcon.png")} alt="Bulb icon" />
            <div className={styles.aboutItemText}>
              <h3>Product Strategy</h3>
              <p>
                I create clear product goals and roadmaps by identifying user
                needs, aligning with objectives, and collaborating with stakeholders.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/barChart.png")} alt="Bar chart icon" />
            <div className={styles.aboutItemText}>
              <h3>User Research & Feedback</h3>
              <p>
                I gather insights from users, analyze data, and shape features to
                meet user needs and improve experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/handshake.jpg")}
              alt="Handshake icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Team Collaboration</h3>
              <p>
                I work closely with design, engineering, and business teams to
                bring ideas to life and deliver meaningful solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
