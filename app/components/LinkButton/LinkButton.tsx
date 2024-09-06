'use client';

import Link from "next/link";
import cn from "classnames";
import {inspect} from "util";
import styles from './LinkButton.module.css';

export function LinkButton({ text, style, link }: { text: string; style: 'outline' | 'gradient' | 'link'; link: string }) {

    const className = style === 'outline' ? styles.btnOutline : styles.btnGradient;

    return (
       <Link href={link} className={cn(styles.btn, className)}>
          <span>{text}</span>
       </Link>
    );
}
