import React from 'react'
import styles from './style.module.scss'
import '../../app/index.css'

export default function CatalogPage() {
const koloygays: [
    "phones",
    'watches',
    "Cameras",
    "Headphones",
    "computers",
    "gaming"

]



  return (
    <div className={styles.catalogPage}>
        <div className="container">
            <div className={styles.catalogPagein}>
                <div className={styles.filtersBlock}>
                    <h2 className={styles.filtersTitle}>All products</h2>
                    <div className={styles.filters}>
                    {koloygays.map(  =>
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />

                    </label>
                    )
                    }

                    </div>
                </div>
                <div className={styles.catalog}>
                    <div className={styles.options}>
                        <h2 className={styles.selectedProducts}>
                            Selected products: <span>24</span>
                        </h2>
                        <button className={styles.button}>
                            By rating
                            <span className={styles.products}>
                            <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M6 9L12 15L18 9' stroke='#9F9F9F' />
                            </svg>
                            </span>
                        </button>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
