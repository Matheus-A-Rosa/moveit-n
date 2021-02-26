import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/61835486?s=400&u=38bb13931413cb58ba9604d2a9cfd1a3afd72582&v=4" alt="Matheus Rosa"></img>
        <div>
        <strong>Matheus Rosa</strong>
            <p>
                <img src="icons/level.svg" alt="Level"/>
                Level {level}
            </p>
        </div>
        </div>
    );
}