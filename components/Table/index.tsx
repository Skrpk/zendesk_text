import React from "react";

import * as styles from "./table.css";
import { clsx } from "../../uikit/utils";
import Select from "../../uikit/Select";

interface TableProps {
  headers: string[];
  rows: string[][];
  className?: string;
  mapping?: {
    fields: string[];
    onSettingMap: (field: string, index: number) => void;
  };
}

const Table: React.FC<TableProps> = ({ headers, rows, className, mapping }) => {
  return (
    <table className={clsx(styles.table, className)}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className={styles.tableHeaderCell}>
              <div className={styles.headerWrapper}>
                {mapping && (
                  <Select
                    options={mapping.fields.map((field) => ({
                      name: field,
                      value: field,
                    }))}
                    onChange={(value) => {
                      console.log("GGGGGG", value);
                    }}
                    value={mapping.fields[0]}
                  />
                )}
                {header}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} className={styles.tableRow}>
            {row.map((cell, index) => (
              <td key={index} className={styles.tableCell}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
