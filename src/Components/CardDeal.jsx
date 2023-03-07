import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        {' '}
        Find a a better card deal <br className="sm:block hidden" /> in few easy
        steps{' '}
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Arcu tortor, purus in mattis <br className="sm:block hidden" /> at sed
        integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet
        ultrices ac, ametau.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt=" card image" className="w-[100%] h-[100%]" />
    </div>
  </section>
)

export default CardDeal
