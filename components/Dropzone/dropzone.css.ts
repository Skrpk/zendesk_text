import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  width: "100%",
  height: "100%",
  padding: "20px",
  backgroundColor: "#fffbf0",
  borderRadius: "10px",
  marginTop: "20px",

  ":hover": {
    cursor: "pointer",
  },
});

export const dropzone = style({
  width: "100%",
  height: "100%",
  border: "2px dashed orange",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "10px",
});

export const textStyle = style({
  textAlign: "center",
});
