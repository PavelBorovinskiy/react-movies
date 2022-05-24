import React, { Component } from "react";

export default class Search extends Component {
  state = {
    search: "",
    type: "all",
  };

  handelKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handelFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              id="search_inline"
              className="validate"
              type="search"
              placeholder="search"
              value={this.state.search}
              onChange={(e) =>
                this.setState({
                  search: e.target.value,
                })
              }
              onKeyDown={this.handelKey}
            />
            <button
              className="btn search-btn"
              onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
            >
              Search
            </button>
            <div className="radio-group">
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="all"
                  onChange={this.handelFilter}
                  checked={this.state.type === "all"}
                />
                <span>All</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="movie"
                  onChange={this.handelFilter}
                  checked={this.state.type === "movie"}
                />
                <span>Movies only</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  data-type="series"
                  onChange={this.handelFilter}
                  checked={this.state.type === "series"}
                />
                <span>Series only</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
