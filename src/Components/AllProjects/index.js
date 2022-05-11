/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';

function AllProjects() {
  return (
    <section>
      All Projects
      <Link to="/">
        <button type="button">Home</button>
      </Link>
      <Footer />
    </section>
  );
}

export default AllProjects;
