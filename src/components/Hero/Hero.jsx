import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from './../../utils';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I`m <br /> Tin <br /> Tosanguan</h1>
                <p className={styles.description}>I`m a Software Developer</p>
                <a href="mailto:tinto543@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/tinimg.jpg")} alt="My Image" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}
