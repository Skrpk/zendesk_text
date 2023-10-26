import { style } from "@vanilla-extract/css";

export const fileUploader = style({
  width: "300px",
  height: "300px",
  margin: "0 auto",
  selectors: {
    "&[data-hidden='true']": {
      display: "none",
    },
  },
});
