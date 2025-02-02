import React from 'react';
import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <section className="guitar__screen">
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
}

export default NotFound;
