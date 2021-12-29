import type { NextPage } from 'next'
import Image from 'next/image'
import Form from '../components/Form/index'
import styles from './home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Image
        src='/github-logo.svg'
        height={200}
        width={200}
        alt='Github Logo'
        priority
      />
      <h1>Enter a Github Username</h1>
      <Form />
    </div>
  )
}

export default Home
