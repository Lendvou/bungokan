import React from "react";
import clsx from "clsx";
import { useInputStyles } from "./styles";

interface IInputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {}

export const Input: React.FC<IInputProps> = ({ className, ...restProps }) => {
    const styles = useInputStyles();
    return <input {...restProps} className={clsx(styles.input, className)} />;
};
