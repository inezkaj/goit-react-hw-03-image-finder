// import css from './contact.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    let query = form.elements[1].value;

    this.props.onSubmit(query);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
