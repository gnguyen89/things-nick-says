import React from 'react';
import { Link } from 'react-router';

export default function About() {
  return <div>
    <div>About!</div>
    <Link to='home'>Go back home.</Link>
  </div>;
}

About.displayname = 'About';
