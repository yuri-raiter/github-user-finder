import { useRouter } from 'next/router'
import { useState } from "react"
import styles from './styles.module.scss'

const useInputValue = (inputValue: string) => {
  const [value, setValue] = useState<string>(inputValue)

  return {
    value,
    onChange: (e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value),
    resetValue: () => setValue('')
  }
}

export default function Form() {
  const { resetValue, ...input } = useInputValue('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    router.push(`../../users/${input.value}`)

    resetValue()
  }

  return (
    <form onSubmit={e => handleSubmit(e)} className={styles.container}>
      <div className={styles.div}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...input}/>
      </div>
      <button type="submit">Browse</button>
    </form>
  )
}