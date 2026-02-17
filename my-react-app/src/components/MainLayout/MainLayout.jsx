import { Outlet } from "react-router-dom";
import HomeBtn from "../HomeBtn/HomeBtn";
import styles from "./MainLayout.module.css";

function MainLayout() {
  return (
    <>
      <header className={styles.header}>
        <HomeBtn />
      </header>
      <Outlet />
    </>
  );
}

export default MainLayout;
