import styles from "./Modal.module.css"

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    changeLanguage: () => void;
    languageRules: string;
    children: React.ReactNode;
};

export function Modal({isOpen, onClose, changeLanguage, languageRules, children}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <strong>{languageRules === "en" ? "Game Rules" : "Правила Игры"}:</strong>
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                >
                    X
                </button>
                <button
                    className={styles.changeLanguage}
                    onClick={changeLanguage}
                >
                    {languageRules === "en" ? "ru" : "en"}
                </button>
                {children}
            </div>
        </div>
    );
}