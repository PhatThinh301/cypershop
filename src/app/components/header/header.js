import styles from "./header.module.css";
export function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
          CYBER<span>MENU</span>
        </div>
        
        <nav className={styles.nav}>
          <ul>
            <li className={styles.active}>Trang Chủ</li>
            <li>Nạp Giờ</li>
            <li>Dịch Vụ</li>
            <li>Trợ Giúp</li>
          </ul>
        </nav>

        <div className={styles.headerActions}>
          <button className={styles.cartBtn}>
            <span className={styles.cartIcon}>🛒</span>
            Giỏ Hàng
            <span className={styles.cartBadge}>3</span>
          </button>
          <button className={styles.loginBtn}>Tài Khoản</button>
        </div>
      </header>
  );
}