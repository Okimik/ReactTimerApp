var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer App
          </li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          <li>
            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
          </li>
          <li>
          </li>


        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://github.com/Okimik" target="_blank">Pedro Chaves</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Nav;
