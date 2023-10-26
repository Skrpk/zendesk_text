import { style } from "@vanilla-extract/css";

export const trigger = style({
  borderRadius: "5px",
  border: "1px solid #ddd",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#fff",
  padding: "10px",
  ":hover": {
    cursor: "pointer",
  },
});

export const viewport = style({
  backgroundColor: "#fff",
  borderRadius: "5px",
  border: "1px solid #ddd",
  top: "100%",
});

export const item = style({
  padding: "10px 10px",
  ":hover": {
    backgroundColor: "#f5f5f5",
    cursor: "pointer",
  },
});
