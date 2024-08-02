import { useState } from 'react';
import styles from './task.module.css'
import { Trash, Circle, CheckCircle } from 'phosphor-react';

export interface TaskProps {
    text: string;
    onDeleteTask: (taskText: string) => void;
    onCheckTask: (taskText: string, isChecked: boolean) => void;
    isChecked?: boolean;
  }

  export interface TaskPropsInput {
    text: string;
    isChecked: boolean;
  }

export function Task({ text, onDeleteTask, onCheckTask, isChecked } : TaskProps){
    const [isCheck, setIsCheck] = useState(isChecked);
  
   
    function handleDeleteTask(){
        onDeleteTask(text)
    }
    function handleCheckTask() {
        const newCheckState = !isCheck;
        setIsCheck(newCheckState);
        onCheckTask(text, newCheckState); // Notifica o pai do novo estado
    }
    
    return(
        <div className={styles.menuNote}>
                <button className={styles.buttonCheck} onClick={handleCheckTask}>{isCheck ? <CheckCircle color='#5E60CE' size={24} /> : <Circle size={24}/>}</button>
                {isCheck ? < div className={styles.lineCheck}>{text} </div> : <p>{text}</p>}
                <button className={styles.buttonTrash} onClick={handleDeleteTask}><Trash size={24} /></button>
                
         </div>
    )
}