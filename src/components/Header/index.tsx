import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styles from "./style.module.css";
import { UserIcon } from "./components/UserIcon";

export const Header = () => {
  const auth = useAuth();

  // debugging
  //@ts-expect-error
  window["auth"] = auth;

  return (
    <header className={styles.header}>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className={styles.logo}>
          🍃 Nav<span>IA</span>
        </div>
      </Link>
      <div className={styles.spacing} />
      <div className={styles.actions}></div>
      <UserIcon />
    </header>
  );
};
