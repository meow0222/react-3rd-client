import React from "react";
function Table({ columns, data }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, points}) => (
          <tr key={name + points}>
            <td>{name}</td>
            <td>{points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;