import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <h1>Tour of Heroes</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/Heroes">Heroes</Link>
      </nav>
    </>
  );
}
