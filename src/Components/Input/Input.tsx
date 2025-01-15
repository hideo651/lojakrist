import React from "react";
import styles from "./Input.module.css";

type IDataInput = React.ComponentProps<"input"> & {
  label: string;
  error: string | undefined;
};

const Input = React.forwardRef(
  (
    { label, type, name, value, onChange, error, onBlur }: IDataInput,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={styles.wrapper}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
        <input
          className={styles.input}
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);

export default Input;
