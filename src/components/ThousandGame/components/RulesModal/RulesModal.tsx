import {useState} from "react";
import styles from "./RulesModal.module.css"
import {Modal} from "./components/Modal";
import {rules} from "./rules.ts";


export function RulesModal() {
    const [modal, setModal] = useState(false);


    return (
        <>
            <button onClick={() => setModal(true)} className={styles.imageButton}>
                <img src="/changeMeBagYou.png" className={styles.imageButtonImg} />
            </button>
            <Modal
                isOpen={modal}
                onClose={() => setModal(false)}
            >
                <p><strong>{rules.goal.head}</strong>{rules.goal.text}</p>
                <p><strong>{rules.combiScore.head}</strong></p>
                <p>{rules.combiScore.text}</p>
                <p><strong>{rules.gamePlay.head}</strong></p>
                <p>{rules.gamePlay.text}</p>
                <p><strong>{rules.restrictions.head}</strong></p>
                <p>{rules.restrictions.text}</p>
            </Modal>
        </>
    )
}

