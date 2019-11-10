import React from "react";
import { TodoConsumer } from "./mainView";

const footer = () => {
  return (
    <TodoConsumer>
      {value => (
        <div className="footer">
          <div className="complete-all">
            <input
              className="custom-checkbox"
              type="checkbox"
              id="ck-complete-all"
              onChange={value.actions.allComplete}
            />
            <label htmlFor="ck-complete-all">Mark all as complete</label>
          </div>
          <div className="clear-completed">
            <button className="btn" onClick={value.actions.clearComplete}>
              Clear completed (
              <span className="completed-todos">
                {value.actions.completedNumber()}
              </span>
              )
            </button>
            <strong className="active-todos">
              {value.actions.unCompletedNumber()}
            </strong>{" "}
            items left
          </div>
        </div>
      )}
    </TodoConsumer>
  );
};

export default footer;
