import plus from '../../assets/plus.svg'
import styles from './input.module.css'
import { Note } from '../Note'
import { useState, FormEvent } from 'react'
import { Task } from '../Task';
import { TaskPropsInput } from '../Task';
import Clipboard from '../../assets/Clipboard.svg'
export function Input(){
    const [tasks, setTasks] = useState<TaskPropsInput[]>([]);
    const [newTaskText, setNewTaskText] = useState('');
    const [completedCount, setCompletedCount] = useState(0);

    function handleCreateTask(event : FormEvent){
        event.preventDefault()
        setTasks([...tasks, { text: newTaskText, isChecked: false }]);
        setNewTaskText('');
    }

    function handleDeleteTask(taskDelete : string){
        const taskWithoutDeleted = tasks.filter(task => task.text !== taskDelete);
        setTasks(taskWithoutDeleted);
        setCompletedCount(taskWithoutDeleted.filter(task => task.isChecked).length)
    }

    function handleCheckTask(taskText: string, isChecked: boolean) {
        const updatedTasks = tasks.map(task =>
            task.text === taskText ? { ...task, isChecked } : task
        );
        setTasks(updatedTasks);
        setCompletedCount(updatedTasks.filter(task => task.isChecked).length);
    }
   

    return(
        <>
        <form className={styles.noteForm} onSubmit={handleCreateTask}> 
            <input value={newTaskText}
            onChange={(event) => setNewTaskText(event.target.value)} 
            placeholder="Adicione uma nova tarefa" />
            <button onClick={handleCreateTask} type="submit">
            Criar
            
            <img src={plus} alt="" />
            </button>
        </form>
        <Note tasks={tasks.length} completedTasks={completedCount} />
        
        
        { 
        tasks.length === 0 &&
        <div className={styles.taskDefault}>

            <img src={Clipboard} alt="" />
            <p><span>Você ainda não tem tarefas cadastradas</span>
            Crie tarefas e organize seus itens a fazer</p>
        </div>
        }
        {tasks.map((tas) =>
            <Task key={tas.text} text={tas.text} onDeleteTask={handleDeleteTask} onCheckTask={handleCheckTask} />
        )}
        </>
    )
}