import styles from './Sidebar.module.css'

export function Sidebar() {

  return (

    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50' alt='Capa'
      />

      <div className={styles.profile}>
        <strong> Alessander</strong>
        <span>Web Dev</span>
      </div>

      <footer>
        <a href='#'>Editar seu perfil</a>
      </footer>
    </aside>
  )
}