"use client";
import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/Footer/Footer";
import { menuItems } from "./idsanpham";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <h1 className={styles.sectionTitle}>Cyber <span>Menu</span></h1>
          <div className={styles.neonDivider}></div>
        </div>
        
        <div className={styles.menuGrid}>
          {menuItems.map((item) => (
            <div key={item.id} className={styles.foodCard}>
              <div className={styles.imageArea}>
                <span className={styles.badge}>{item.tag}</span>
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill 
                  className={styles.foodImage} 
                />
              </div>
              
              <div className={styles.infoArea}>
                <h3>{item.name}</h3>
                <p className={styles.price}>{item.price}</p>
                
                <div className={styles.stockWrapper}>
                  <div className={styles.stockInfo}>
                    <span>Sẵn sàng:</span>
                    <span>{item.remain}/{item.total} suất</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill} 
                      style={{ width: `${(item.remain / item.total) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <Link href={`/chitietsanpham/${item.id}`}>
                  <button className={styles.orderBtn}>Xem chi tiết</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}