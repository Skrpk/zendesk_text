import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  boxSizing: "border-box",
  padding: 0,
  color: "inherit",
  fontFamily: `
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    Helvetica Neue,
    sans-serif`,
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("img", {
  maxWidth: "100%",
  height: "auto",
});
