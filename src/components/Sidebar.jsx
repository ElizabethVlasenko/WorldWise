import style from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import Footer from "./Footer";

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />
      <p>list of cities</p>
      <Footer />
    </div>
  );
}

export default Sidebar;
