import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const links = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
    { name: "EquiCore", href: "#EquiCore" },
    { name: "Contact Us", href: "#contact" },
  ];

  useEffect(() => {
    if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        color: "white",
        backgroundColor: isScrolled || isMobile ? "#ffc34d" : "transparent",
        backdropFilter: isScrolled && !isMobile ? "blur(200px)" : "none",
        transition:
          "background-color 0.3s ease, backdrop-filter 0.3s ease, transform 0.3s ease, padding 0.3s ease",
        transform: isScrolled ? "translateY(-10px)" : "translateY(0)",
        padding: isScrolled ? "18px 16px 4px 16px" : "16px 16px",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <div
          style={{
            height: isScrolled
              ? isMobile
                ? "36px"
                : "60px"
              : isMobile
              ? "48px"
              : "80px",
            display: "flex",
            alignItems: "center",
            transition: "all 0.3s ease",
            marginLeft: isMobile ? "-10px" : "-100px",
            marginTop: isMobile && isScrolled ? "4px" : "0px",
          }}
        >
          <img
            src="/images/logo-nexus-1.png"
            alt="MyBrand Logo"
            style={{
              height: isScrolled
                ? isMobile
                  ? "50px"
                  : "120px"
                : isMobile
                ? "80px"
                : "160px",
              width: "auto",
              background: "transparent",
              filter: "invert(1)",
              mixBlendMode: "normal",
              transition: "height 0.3s ease",
            }}
          />
        </div>

        {/* Desktop nav links */}
        <ul
          style={{
            listStyle: "none",
            display: "none",
            margin: 0,
            padding: 0,
            gap: "32px",
            fontWeight: 500,
          }}
          className="desktop-nav"
        >
          {links.map((link) => (
            <li key={link.name} style={{ display: "inline-block" }}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div
          className="mobile-menu-button"
          style={{ display: "block", fontSize: "24px" }}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "none",
              border: "none",
              color: "inherit",
              cursor: "pointer",
              fontSize: "24px",
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile nav links */}
      {isOpen && (
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: "8px 24px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            backgroundColor: "#ffc34d",
            color: "white",
          }}
        >
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "18px",
                  display: "block",
                  transition: "color 0.3s ease",
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Styles */}
      <style>{`
        @media(min-width: 768px) {
          .desktop-nav {
            display: flex !important;
            gap: 32px;
          }
          .mobile-menu-button {
            display: none !important;
          }
        }

        .desktop-nav li a {
          position: relative;
          display: inline-block;
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .desktop-nav li a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 2px;
          background-color: white;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .desktop-nav li a:hover {
          color: rgba(255, 255, 255, 0.7);
          transform: scaleX(1.05) rotateY(5deg);
        }

        .desktop-nav li a:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
