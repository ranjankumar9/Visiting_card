import React from "react";
import styles from "../Styles/Card.module.scss";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const VisitingCard2 = ({ data }) => {
  console.log(data);

  return (
    <div className={styles.main}>
      <div className={styles.box2}>
        <div className={styles.card}>
          <img src={data.logo} alt="" />
          <div className={styles.call}>
            <IoCall />
            <p>+91{data.phone}</p>
          </div>
        </div>
        <h2>{data.name}</h2>
        <p className={styles.desc}>{data.description}</p>
        <p className={styles.email}>
          <MdOutlineMail className={styles.emails} />
          {data.email}
        </p>
        <p className={styles.address}>
          <IoLocation className={styles.icon} />
          {data.address}
        </p>
      </div>
    </div>
  );
};

export default VisitingCard2;
