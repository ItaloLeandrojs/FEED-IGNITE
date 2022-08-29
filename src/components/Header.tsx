import styles from  './Header.module.css';

import igniteLogo from '../img/ignite-simbol.svg';

console.log(igniteLogo);

export function Header(){
    return (
        <header className={styles.header}>
            <img src="/src/img/ignite-simbol.svg" alt="" />
            <strong >Ignite Feed</strong>
        </header>
    );    
}