import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { RiHeart2Fill as Heart, RiSunLine as Sun, RiMoonClearLine as Moon } from 'react-icons/ri';
import { useTheme } from 'next-themes';

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme()

  const handleTheme = () => {

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>AuntFly</title>
      </Head>

      <button className='absolute top-3 right-3' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme === 'light' ? <Moon size='1.5rem' /> : <Sun size='1.5rem' />}</button>

      <main className={styles.main}>
        <h1 className={styles.title}>
          AuntFly
        </h1>

        <p className={styles.description}>
          Tu powstaje stronka netowa zespołu AuntFly
        </p>
        <Image src='/construction.png' alt='' width={110} height={100} className="opacity-95 dark:invert" />


      </main>
      <footer className={styles.footer}>
        Wykonane z <Heart className='mx-1' /> przez Domela
      </footer>
    </div>
  )
}

export default Home
