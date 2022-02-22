import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import { changeTheme, loadTheme } from "../../utils/theme";
import PropTypes from "prop-types";
import "./estilo.css";

const Header = ({ icon, title }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    changeTheme();
  };

  useEffect(() => {
    setChecked(loadTheme());
  }, []);
  return (
    <nav className="Header bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <Switch
        onChange={handleChange}
        checked={checked}
        className="react-switch"
        onColor="#888"
        offColor="#ccc"
        uncheckedIcon={false}
        checkedIcon={false}
        uncheckedHandleIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 20,
            }}
          >
            ☀️
          </div>
        }
        checkedHandleIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              color: "red",
              fontSize: 18,
            }}
          >
            🌓
          </div>
        }
      />
    </nav>
  );
};

Header.defaultProps = {
  title: "Reminders",
  icon: "fa-solid fa-list-check",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Header;
