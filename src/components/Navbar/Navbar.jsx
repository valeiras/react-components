/* eslint-disable react/prop-types */
import './Navbar.css';
import { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ sections, currSection, setCurrSection }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [isSectionChanging, setIsSectionChanging] = useState(false);

  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);

  const styleLinks = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

  const handleBtnClick = () => {
    setShowLinks(!showLinks);
    console.log(showLinks);
  };

  const handleNavbarClick = (sectionId) => {
    setCurrSection(
      sections.find((section) => {
        return section.id === sectionId;
      })
    );
    setIsSectionChanging(true);
    setTimeout(() => {
      setIsSectionChanging(false);
    }, 500);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <img
          src={
            'https://1000logos.net/wp-content/uploads/2021/10/Batman-Logo.png'
          }
          className="nav-logo"
          alt="Logo"
        />
      </div>
      <div
        className="nav-links-container"
        ref={linksContainerRef}
        style={styleLinks}
      >
        <ul className={'nav-links'} ref={linksRef}>
          {sections.map((section) => {
            const { id, name } = section;
            return (
              <li
                key={id}
                className={
                  'nav-link' +
                  (showLinks ? ' solid-bg' : '') +
                  (id === currSection.id && !isSectionChanging
                    ? ' current-section'
                    : '')
                }
                onClick={() => {
                  {
                    handleNavbarClick(section.id);
                    setShowLinks(false);
                  }
                }}
              >
                {name}{' '}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="nav-button-container">
        <button
          type="button"
          className="nav-toggle"
          id="nav-toggle"
          onClick={handleBtnClick}
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
