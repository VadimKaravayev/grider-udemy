import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map(({ label, header }) => {
    return header ? (
      <Fragment key={label}>{header()}</Fragment>
    ) : (
      <th key={label}>{label}</th>
    );
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((col) => (
      <td key={col.label} className="p-3">
        {col.render(rowData)}
      </td>
    ));

    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
