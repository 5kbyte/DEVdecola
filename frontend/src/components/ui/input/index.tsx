import { type ComponentProps, useState } from "react";
import { Eye, EyeOff, Lock, AtSign } from "lucide-react";
import styles from "./styles.module.css";

interface IInputProps extends ComponentProps<"input"> {
	label: string;
	iconLeft?: React.ReactNode;
	state?: "default" | "error" | "warning" | "success";
	helperText?: string;
}

export const Input = ({
	label,
	iconLeft,
	type = "text",
	state = "default",
	helperText,
	...rest
}: IInputProps) => {
	const isPassword = type === "password";
	const [showPassword, setShowPassword] = useState(false);
	const inputType = isPassword ? (showPassword ? "text" : "password") : type;

	const inputClassName = `${styles.input} ${
		state === "error" ? styles.input__error : ""
	} ${state === "warning" ? styles.input__warning : ""} ${
		state === "success" ? styles.input__success : ""
	}`;

	return (
		<div className={styles.input__wrapper}>
			<label className={styles.label}>
				<span className={styles.label__text}>{label}</span>

				<div className={styles.input__container}>
					<input
						{...rest}
						type={inputType}
						className={inputClassName}
					/>

					<div
						className={`${styles.icon__left} ${
							state === "error" ? styles.icon__left__error : ""
						} ${
							state === "warning"
								? styles.icon__left__warning
								: ""
						}`}
					>
						{iconLeft ??
							(isPassword ? (
								<Lock className={styles.icon} />
							) : (
								<AtSign className={styles.icon} />
							))}
					</div>

					{/* {errors.email && (
						<div className={mobile.errorMsg}>
							<AlertCircle size={18} />
							<span>{errors.email.message}</span>
						</div>
					)} */}

					{isPassword && (
						<button
							type="button"
							className={`${styles.icon__right} ${styles.eyeToggle}`}
							onClick={() => setShowPassword((f) => !f)}
						>
							{showPassword ? (
								<EyeOff className={styles.icon} />
							) : (
								<Eye className={styles.icon} />
							)}
						</button>
					)}
				</div>
			</label>

			{helperText && (
				<span
					className={`${styles.helper__text} ${
						state === "error" ? styles.helper__text__error : ""
					} ${
						state === "warning" ? styles.helper__text__warning : ""
					}`}
				>
					{helperText}
				</span>
			)}
		</div>
	);
};
