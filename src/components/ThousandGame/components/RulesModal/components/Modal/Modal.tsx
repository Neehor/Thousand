import styles from "./Modal.module.css"
import React from "react";

type ModalPropsType = {
    isOpen: boolean;
    onClose: () => void;
    changeLanguage: () => void;
    languageRules: string;
    children: React.ReactNode;
};

export function Modal(props: ModalPropsType) {
    const {isOpen, onClose, changeLanguage, languageRules, children} = props;

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}
             onClick={onClose}
        >
            <div className={styles.modalContent}
                 onClick={(e) => e.stopPropagation()}
            >
                <header className={styles.header}>
                    <h2>{languageRules === "eu" ? "Game Rules" : "Правила Игры"}</h2>
                    <button className={styles.modalButton}
                            onClick={changeLanguage}
                    >
                        {languageRules === "eu" ? "ru" : "eu"}
                    </button>
                    <button className={styles.modalButton}
                            onClick={onClose}
                    >
                        X
                    </button>
                </header>
                {children}
            </div>
        </div>
    );
}
