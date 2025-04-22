import React from 'react'
import styles from './style.module.scss'
import '../../app/index.css'
import '../../widgets/ButtonWidget'

export default function ProductWidget() {
  return (
    <section className={styles.productsWisget}>
        <div className={styles.content}>
            <div className={styles.iphone}>
                <div className="container">
                    <div className={styles.iphoneIn}>
                        <div className={styles.description}>
                            <p></p>
                            <h2 className={styles.iphoneText}>
                                Iphone 14 <h3 className={styles.pro}>Pro</h3>
                            </h2>
                            <p className={styles.iphoneTxt}>
                                Create to changge evetuthing for the better. For everyone

                            </p>
                            <ButtonWidget />
                        </div>
                        <div className={styles.iphoneImg}></div>
                    </div>
                </div>
                <div className={styles.anothetProucts}></div>
            </div>
        </div>

    </section>
  )
}


