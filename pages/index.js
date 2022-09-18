import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slices/counterSlice'

export default function Home() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>

    <h1>The landing page</h1>
      


      
    <h1>The value of counter is {count}</h1>
    <button onClick={() => dispatch(increment())} className="w-full h-10 bg-green-400/50">increment</button>
    <button onClick={() => dispatch(decrement())} className="w-full h-10 bg-red-400/50">Decrement</button>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
