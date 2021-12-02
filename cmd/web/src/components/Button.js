import React from "react";

import styles from "../styles/components/Button.module.css";

export default function Button({
  title,
  icon,
  formId = "",
  type = "button",
  sx = "primary",
  onPress = "",
}) {
  return (
    <button
      type={type}
      form={formId}
      className={styles[`${sx}-container`] + " button"}
      onClick={onPress}
    >
      {icon && (
        <img
          src={icon}
          alt={title}
          className={sx === "primary" ? "fill-white" : "fill-secondary-blue"}
        />
      )}
      {title}
    </button>
  );
}
