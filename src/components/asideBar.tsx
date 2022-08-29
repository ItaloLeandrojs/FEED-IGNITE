import {PencilLine} from 'phosphor-react'
import styles from './asideBar.module.css';
import { Avatar } from './Avatar';

export function AsideBar(){
    return(
        <aside className={styles.AsideBar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt=""
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/italoLeandrojs.png"/>
                <strong>Italo Leandro</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}