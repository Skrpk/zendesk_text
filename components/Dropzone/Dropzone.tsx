import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import * as styles from "./dropzone.css";

interface DropzoneProps {
  onChange: (data: string[][]) => void;
  copies: {
    undropped: string;
    dropped: string;
  };
}

export function Dropzone({ onChange, copies }: DropzoneProps) {
  const { undropped, dropped } = copies;
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);
    fetch(fileUrl)
      .then((response) => response.text())
      .then((text) => {
        const lines = text.split("\n");
        const _data = lines.map((line) => line.split(","));
        onChange(_data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={styles.wrapper}>
      <div className={styles.dropzone}>
        <input
          {...getInputProps({
            multiple: false,
          })}
        />
        {isDragActive ? (
          <p className={styles.textStyle}>{dropped}</p>
        ) : (
          <p className={styles.textStyle}>{undropped}</p>
        )}
      </div>
    </div>
  );
}
