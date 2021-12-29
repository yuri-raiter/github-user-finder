import Image from "next/image";
import { useRouter } from "next/router";
import styles from './styles.module.scss'

export default function Custom404() {
  const router = useRouter()

  function handleButtonClick() {
    router.push('/')
  }

  return (
    <div className={styles.container}>
      <Image
        src='/astronaut.svg'
        height={1000}
        width={1000}
        alt='404 image'
      />
      <div className={styles.content}>
        <h1>404</h1>
        <div className={styles.line}/>
        <p>The username you've searched doesn't exist</p>
        <button onClick={handleButtonClick}>Go Back</button>
      </div>
    </div>
  )
}