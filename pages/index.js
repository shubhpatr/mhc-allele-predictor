import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Store from './store/store'
import Comp from './Comp'
export default  function Home() {
 
  return (
<div>
<Store>
  <Comp/>
</Store>
</div>
  )
}
