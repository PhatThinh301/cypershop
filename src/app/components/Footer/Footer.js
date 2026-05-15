
import styles from "./Footer.module.css";

export function Footer() {
  return (
<footer className={styles.footer}>
      <div className={styles.footerContent}>
          {/* Cột 1: Branding */}
          <div className={styles.footerBrand}>
            <div className={styles.logo}>CYBER<span>MENU</span></div>
            <p>Hệ thống phòng máy đẳng cấp, mang đến trải nghiệm giải trí và thi đấu chuyên nghiệp nhất.</p>
          </div>

          {/* Cột 2: Quick Links */}
          <div className={styles.footerLinks}>
            <h4>Dịch Vụ</h4>
            <ul>
              <li><a href="#">Nạp giờ chơi</a></li>
              <li><a href="#">Thực đơn Menu</a></li>
              <li><a href="#">Đặt máy VIP / Thi đấu</a></li>
            </ul>
          </div>

          {/* Cột 3: Contact & Socials */}
          <div className={styles.footerContact}>
            <h4>Kết Nối</h4>
            <p>Hotline: 1900 xxxx</p>
            <p>Email: hotro@cybermenu.vn</p>
            <div className={styles.socials}>
              <span>Fb</span>
              <span>IG</span>
              <span>Yt</span>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className={styles.footerBottom}>
          <p>© 2026 Nguyễn Phat - Cyber Game System. All rights reserved.</p>
        </div>
      </footer>
  );
}