import React, { Component } from "react";
import Store from "../store";

class footer extends Component {
  render() {
    return (
      <Store.Consumer>
        {store => {
          return (
            <div className="footer">
              <div className="complete-all">
                <input
                  className="custom-checkbox"
                  type="checkbox"
                  id="ck-complete-all"
                  onChange={store.allComplete}
                />
                <label htmlFor="ck-complete-all">Mark all as complete</label>
              </div>
              <div className="clear-completed">
                <button className="btn" onClick={store.clearComplete}>
                  Clear completed (
                  <span className="completed-todos">
                    {store.completedNumber()}
                  </span>
                  )
                </button>
                <strong className="active-todos">
                  {store.unCompletedNumber()}
                </strong>{" "}
                items left
              </div>
            </div>
          );
        }}
      </Store.Consumer>
    );
  }
}

export default footer;
