import React from "react";

function Header(props) {
  return (
    <header>
      <h1>Keeper App</h1>

      <input
        type="text"
        placeholder="Search notes by title..."
        value={props.searchTerm}
        onChange={(event) => props.onSearchChange(event.target.value)}
      />
    </header>
  );
}

export default Header;
