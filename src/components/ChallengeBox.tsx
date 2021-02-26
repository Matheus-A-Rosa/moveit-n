import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'
import { CompletedChallenges } from './CompleteChallenges';

export function ChallengeBox(){
const {activeChallenge, resetChallenge, compleChallenge} = useContext(ChallengesContext);
const { resetCountdown } = useContext(CountdownContext);

    function handChallengeSucceeded(){
        compleChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return(
        <div className={styles.challengeBoxConatiner}>
            { activeChallenge ? (
                <div className={styles.challengActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                    <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                        
                    <footer>
                    <button 
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button 
                        type="button"
                        className={styles.challengeSucceededButton}
                        onClick={handChallengeSucceeded}
                        >
                            Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level-up"/>
                    Avance de level completando desafios
                </p>
            </div>
            )}
        </div>
    )
}