
import { Header } from "./components/Header/Header"
import { Post } from "./components/Post"

import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar/Sidebar"

export function App() {


  return (
    <>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          <Post
            author='Alessander'
            content='Set to true to exit if port is already in use, instead of automatically try the next available port.'
          />
        </main>
      </div>

    </>
  )
}

