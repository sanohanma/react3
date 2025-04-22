import React from 'react'
import styles from './style.module.scss'
import "../../app/index.css"

export default function FooterWidget() {
  return (
    <footer className={styles.footer}>
    <div className={styles.info}>
      <div className={styles.logo}>
        <img  alt="Cyber Logo" className={styles.img} />
        <p className={styles.logoTxt}>
          We are a residential interior design firm located in Portland. Our boutique-studio offers more than
        </p>
      </div>
    </div>
    <div className={""}>
          <div>
            <h3>Services</h3>
            <ul>
              <li>Bonus program</li>
              <li>Gift cards</li>
              <li>Credit and payment</li>
              <li>Service contracts</li>
              <li>Non-cash account</li>
              <li>Payment</li>
            </ul>
          </div>
          <div>
            <h3>Assistance to the buyer</h3>
            <ul>
              <li>Find an order</li>
              <li>Terms of delivery</li>
              <li>Exchange and return of goods</li>
              <li>Guarantee</li>
              <li>Frequently asked questions</li>
              <li>Terms of use of the site</li>
            </ul>
          </div>
        </div>
    <div className={styles.social}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </footer>
  )
}