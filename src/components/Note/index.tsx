import styles from './note.module.css'

interface NoteProps {
  tasks: number
  completedTasks: number
}
export function Note({ tasks, completedTasks }: NoteProps) {
  return (
    <main>
      <header>
        <div className={styles.taskCount}>
          <h2 className={styles.firstHeading}>Tarefas criadas</h2>
          <span>{tasks} </span>
        </div>
        <div className={styles.taskCount}>
          <h2 className={styles.secondHeading}>Concluídas</h2>
          <span>
            {completedTasks} de {tasks}
          </span>
        </div>
      </header>
    </main>
  )
}
