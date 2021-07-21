import styles from "./styles.module.css";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import accountIcon from "@iconify-icons/mdi-light/account";

export function Header({ user }) {
  return (
    <header className={styles.header}>
      <HomeTitle />
      <UserAvatar user={user} />
    </header>
  );
}

function HomeTitle() {
  return (
    <Link className={styles.homePageLink} to="/">
      <img className={styles.img} src={logo} alt="Jira" />
      <h1>INNO Jira</h1>
    </Link>
  );
}

function UserAvatar({ user }) {
  // We don`t have user =(

  return (
    <div className={styles.user}>
      <Icon icon={accountIcon} width={40} />
    </div>
  );
}
