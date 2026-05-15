"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";
// Sửa đường dẫn: components nằm cùng cấp với page.js trong folder [id]
import { Header } from "../../components/header/header";
import { Footer } from "../../components/Footer/Footer";
import SimpleSlider from "../../components/Slider/slider"; // Bỏ dấu { } vì Slider là export default
import { useParams } from "next/navigation";
import { menuItems } from "../../idsanpham"; // Lùi 2 cấp để ra ngoài app/idsanpham.js

export default function ChiTietSanPham() {
  const { id } = useParams();
  
  // Tìm sản phẩm theo ID từ dữ liệu idsanpham.js
  const item = menuItems.find((p) => p.id === parseInt(id));
  
  // Lấy các sản phẩm liên quan (trừ sản phẩm hiện tại)
  const relatedProducts = menuItems.filter((p) => p.id !== parseInt(id)).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return <div className={styles.loading}><h1>Dữ liệu đang được nạp...</h1></div>;
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.navigation}>
          <Link href="/" className={styles.backLink}>← QUAY LẠI THỰC ĐƠN</Link>
        </div>

        <div className={styles.productContainer}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageBox}>
              <span className={styles.statusTag}>{item.tag || "HOT"}</span>
              {/* Truyền ảnh của sản phẩm vào Slider nếu muốn, ở đây dùng Slider mặc định của bạn */}
              <SimpleSlider productImg={item.img} />
            </div>
          </div>

          <div className={styles.detailsWrapper}>
            <header className={styles.headerInfo}>
              <span className={styles.category}>GAMING FOOD</span>
              <h1 className={styles.itemName}>{item.name}</h1>
              <div className={styles.priceHighlight}>{item.price}</div>
            </header>

            <p className={styles.descriptionText}>
              Nạp đầy năng lượng với món <strong>{item.name}</strong>. 
              Công thức chuẩn Cyber Game giúp bạn duy trì sự tỉnh táo và phong độ cao nhất.
            </p>

            <div className={styles.miniStats}>
              <div className={styles.statItem}>
                <label>STAMINA +85%</label>
                <div className={styles.barBackground}><div className={styles.barFill} style={{width: '85%'}}></div></div>
              </div>
              <div className={styles.statItem}>
                <label>HP REGEN +70%</label>
                <div className={styles.barBackground}><div className={styles.barFill} style={{width: '70%'}}></div></div>
              </div>
            </div>

            <div className={styles.stockStatus}>
              <div className={styles.stockLabel}>
                <span>Sẵn sàng: <b>{item.remain}/{item.total}</b></span>
                <span className={styles.readyText}>● Online</span>
              </div>
              <div className={styles.stockBarBase}>
                <div className={styles.stockBarFill} style={{ width: `${(item.remain / item.total) * 100}%` }}></div>
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <button className={styles.primaryBtn}>GỌI MÓN NGAY</button>
              <button className={styles.secondaryBtn}>GIỎ HÀNG</button>
            </div>
          </div>
        </div>

        {/* Phần sản phẩm liên quan */}
        <section className={styles.relatedSection}>
          <h2 className={styles.relatedTitle}>⚡ COMBO NẠP MANA KHÁC</h2>
          <div className={styles.relatedGrid}>
            {relatedProducts.map((relItem) => (
              <Link key={relItem.id} href={`/chitietsanpham/${relItem.id}`} className={styles.relatedCard}>
                <div className={styles.relImageArea}>
                  <Image src={relItem.img} alt={relItem.name} fill className={styles.relImage} />
                  <span className={styles.relBadge}>{relItem.tag}</span>
                </div>
                <div className={styles.relInfoArea}>
                  <h3>{relItem.name}</h3>
                  <p className={styles.relPrice}>{relItem.price}</p>
                  <button className={styles.relBtn}>Chi tiết</button>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}