import React from "react";

import * as styles from "./container.css";
import { clsx } from "../utils";

interface ContainerProps extends React.PropsWithChildren {
  className?: string;
}

export default function Container({
  children,
  className,
  ...otherProps
}: ContainerProps) {
  const style = clsx(styles.container, className);
  return (
    <div className={style} {...otherProps}>
      {children}
    </div>
  );
}
