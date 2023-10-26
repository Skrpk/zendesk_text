import React from "react";
import Image from "next/image";

import * as styles from "./header.css";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <a href="/" className={styles.logoWrapper}>
          <Image src="/logo.png" width={30} height={30} alt="FinTrack" />
          <span>FinTrack</span>
        </a>
      </div>
    </header>
  );
}
