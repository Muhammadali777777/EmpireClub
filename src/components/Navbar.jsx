import React, { useState, useEffect } from 'react';
import { CrownIcon, MenuIcon, CloseIcon, SparklesIcon, SoundOnIcon, SoundOffIcon } from './Icons';
import { CLUB_INFO } from '../data/clubData';

export const Navbar = ({ soundEnabled, toggleSound, onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "О клубе", href: "#about" },
    { label: "Компьютеры", href: "#computers" },
    { label: "Тарифы", href: "#tariffs" },
    { label: "Схема зала", href: "#seat-map" },
    { label: "Галерея", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
    { label: "Контакты", href: "#contacts" }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s ease',
          backgroundColor: isScrolled ? 'rgba(7, 8, 11, 0.94)' : 'rgba(7, 8, 11, 0.65)',
          backdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.25)' : '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.8)' : 'none'
        }}
      >
        <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          
          {/* Logo */}
          <a
            href="#"
            style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.25) 0%, rgba(14, 16, 23, 0.9) 100%)',
                border: '1.5px solid var(--gold-500)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)'
              }}
            >
              <CrownIcon className="w-7 h-7" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                className="font-orbitron gold-gradient-text"
                style={{
                  fontSize: '1.65rem',
                  fontWeight: 900,
                  letterSpacing: '0.12em',
                  lineHeight: 1
                }}
              >
                EMPIRE
              </span>
              <span
                className="font-rajdhani"
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.28em',
                  color: 'var(--gold-400)',
                  fontWeight: 600,
                  marginTop: '2px'
                }}
              >
                CYBER CLUB
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '28px' }} className="desktop-nav">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  padding: '6px 0'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-400)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            
            {/* Live Status indicator */}
            <div
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-tech)',
                fontWeight: 700,
                color: '#34D399',
                letterSpacing: '0.05em'
              }}
              className="live-status-pill"
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10B981',
                  boxShadow: '0 0 10px #10B981'
                }}
              />
              24/7 OPEN
            </div>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? "Выключить кибер-эффекты" : "Включить кибер-эффекты"}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                color: soundEnabled ? 'var(--gold-400)' : 'var(--text-dim)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {soundEnabled ? <SoundOnIcon className="w-4 h-4" /> : <SoundOffIcon className="w-4 h-4" />}
            </button>

            {/* CTA Button */}
            <button
              onClick={() => {
                if (onBookClick) onBookClick();
                else {
                  const el = document.querySelector('#booking');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-gold"
              style={{
                padding: '10px 20px',
                fontSize: '0.85rem'
              }}
            >
              <SparklesIcon className="w-4 h-4" />
              <span>БРОНЬ</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                background: 'rgba(18, 21, 31, 0.8)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                color: 'var(--gold-400)',
                cursor: 'pointer'
              }}
              className="mobile-toggle"
              aria-label="Меню"
            >
              {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '80px',
            background: 'rgba(7, 8, 11, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 49,
            display: 'flex',
            flexDirection: 'column',
            padding: '30px 24px',
            borderTop: '1px solid rgba(212, 175, 55, 0.3)',
            animation: 'fadeIn 0.25s ease'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  color: '#FFFFFF',
                  fontSize: '1.2rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  textDecoration: 'none',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onBookClick) onBookClick();
                else {
                  const el = document.querySelector('#booking');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-gold"
              style={{ width: '100%', padding: '16px', fontSize: '1rem' }}
            >
              ЗАБРОНИРОВАТЬ МЕСТО
            </button>

            <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <p>{CLUB_INFO.address}</p>
              <a href={`tel:${CLUB_INFO.phoneRaw}`} style={{ color: 'var(--gold-400)', textDecoration: 'none', fontWeight: 700 }}>
                {CLUB_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Responsive media styling for desktop vs mobile nav */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .live-status-pill { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
};
