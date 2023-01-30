import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.css";


function Layout(props) {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
