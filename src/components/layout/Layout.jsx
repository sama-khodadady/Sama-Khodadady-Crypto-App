import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1>Crypto App</h1>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>
          Developed By
          <a
            href="https://github.com/sama-khodadady"
            target="_blank"
            rel="noreferrer"
          >
            Sama-Khodadady
          </a>
          &#128150;
        </p>
      </footer>
    </div>
  );
};

export default Layout;
