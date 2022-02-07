import React from "react";
import styles from './articlelist.module.scss';
import Articlepreview from "../articlepreview";

function Articlelist() {
  return (
    <ul className={styles.list}>
    <li className={styles.preview}><Articlepreview/></li>
    <li className={styles.preview}><Articlepreview/></li>
    <li className={styles.preview}><Articlepreview/></li>
    </ul>
  );
}

export default Articlelist;