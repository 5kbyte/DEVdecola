import type { ComponentProps } from "react";

import styles from "./styles.module.css";

interface ILink extends ComponentProps<"a"> {
	label: string;
	href: string;
}

export const Link = ({ label, href }: ILink) => {
	return (
		<a className={styles.a} href={href}>
			{label}
		</a>
	);
};
