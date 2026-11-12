import styles from "./Modal.module.css"

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export function Modal({isOpen, onClose, children}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <strong>Правила игры:</strong>
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                                    >
                    X
                </button>
                {children}
            </div>
        </div>
    );
}