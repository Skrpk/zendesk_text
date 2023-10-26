import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  width: "100%",
  padding: "20px",
  backgroundColor: "#fffbf0",
});

export const header = style({
  maxWidth: "1240px",
  margin: "0 auto",
  width: "100%",
});

export const logoWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "fit-content",
  gap: "10px",
  ":hover": {
    cursor: "pointer",
  },
});
