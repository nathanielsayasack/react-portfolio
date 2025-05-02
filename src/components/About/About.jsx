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
            <img src={getImageUrl("about/bulbIcon.png")} alt="bulb icon" />
            <div className={styles.aboutItemText}>
              <h3>Product Strategy</h3>
              <p>
              I define clear product goals and roadmaps by identifying user needs, aligning with business objectives, and collaborating with stakeholders to deliver impactful solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/barChart.png")} alt="bar chart icon" />
            <div className={styles.aboutItemText}>
              <h3>User Research & Data-Driven Decisions</h3>
              <p>
                I conduct user research and analyze data to guide product direction—translating insights into actionable features and continuously iterating based on feedback.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/handshake.jpg")} alt="Handshake Icon" />
            <div className={styles.aboutItemText}>
              <h3>Cross-Functional Collaboration</h3>
              <p>
              I work closely with design, engineering, and business teams to ensure product alignment, drive execution, and foster a shared vision from ideation to launch.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
