import { style } from "@vanilla-extract/css";

export const table = style({
  borderCollapse: "collapse",
  width: "100%",
});

export const tableHeaderCell = style({
  background: "#f2f2f2",
  fontWeight: "bold",
});

export const tableCell = style({
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
});

export const tableRow = style({
  transition: "background-color 0.2s ease-in-out",
  ":hover": {
    cursor: "pointer",
    backgroundColor: "#ddd",
  },
  selectors: {
    "&:nth-child(even)": {
      backgroundColor: "#f2f2f2",
    },
  },
});

export const mapping = style({
  display: "flex",
});

export const headerWrapper = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1rem",
  padding: "20px 0",
});
