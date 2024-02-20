import React from 'react'
import styles from './index.module.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id='footer' className={styles.footer}>
      <div className="img_container">
        <Image width={173} height={109} src={'/assets/svgs/footer.svg'} />
      </div>
    </footer>
  )
}

export default Footer