import styles from "./GameButton.module.css";
import type {ComponentPropsWithoutRef} from "react";

type GameButtonPropsType = {
    title: string,
    onClick: () => void;
} & Omit<ComponentPropsWithoutRef<'button'>, "title" | "onClick">

export const GameButton = (props:GameButtonPropsType) => {
    const {title, onClick, ...otherProps} = props;

    return (
        <button
            className={styles.gameButton}
            onClick={onClick}
            {...otherProps}
        >
            {title}
        </button>
    )
}
