import styles from "./navigation.module.css";
import { menuItem } from "./menuItem";
import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";
export default function Navigation() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      {menuItem.map((item) => {
        const activeStyle =
          item.path === router.pathname ? styles.activeNavItem : "";
        return (
          <Link
            key={item.id}
            className={`${styles.link} ${activeStyle}`}
            href={item.path}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
