import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";

export class Form extends Component {
  state = {
    isBlocking: false
  };
  render() {
    const { isBlocking } = this.state;
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          event.target.reset();
          this.setState(() => ({
            isBlocking: false
          }));
        }}
      >
        <Prompt
          when={isBlocking}
          message={location =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />
        <p>
          Blocking?{" "}
          {isBlocking === true
            ? "yes, click a link or the back button"
            : "Nope"}
        </p>
        <p>
          <input
            size="50"
            placeholder="type something to block transition"
            onChange={event => {
              const isBlocking = event.target.value.length > 0;
              this.setState(() => ({
                isBlocking
              }));
            }}
          />
        </p>

        <p>
          <button>Submit to stop blocking</button>
        </p>
      </form>
    );
  }
}
