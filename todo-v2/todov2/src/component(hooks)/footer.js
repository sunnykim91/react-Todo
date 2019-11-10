import React from "react";

const footer = ({
  allComplete,
  clearComplete,
  completedNumber,
  unCompletedNumber
}) => {
  return (
    <div className="footer">
      <div className="complete-all">
        <input
          className="custom-checkbox"
          type="checkbox"
          id="ck-complete-all"
          onChange={allComplete}
        />
        <label htmlFor="ck-complete-all">Mark all as complete</label>
      </div>
      <div className="clear-completed">
        <button className="btn" onClick={clearComplete}>
          Clear completed (
          <span className="completed-todos">{completedNumber()}</span>)
        </button>
        <strong className="active-todos">{unCompletedNumber()}</strong> items
        left
      </div>
    </div>
  );
};

export default footer;
