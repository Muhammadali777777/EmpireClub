import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Computers } from './components/Computers';
import { Pricing } from './components/Pricing';
import { Booking } from './components/Booking';
import { Gallery } from './components/Gallery';
import { ReviewsAndFaq } from './components/ReviewsAndFaq';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { soundFx } from './utils/audio';
import { PhoneIcon, SparklesIcon } from './components/Icons';
import { CLUB_INFO } from './data/clubData';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [selectedZone, setSelectedZone] = useState('standard');
  const [selectedTariff, setSelectedTariff] = useState('pack_3h');
  const [selectedPc, setSelectedPc] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    soundFx.enabled = soundEnabled;
  }, [soundEnabled]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    setSoundEnabled(prev => {
      const next = !prev;
      soundFx.enabled = next;
      if (next) soundFx.playCyberClick();
      return next;
    });
  };

  const handleBookClick = () => {
    soundFx.playCyberClick();
    const el = document.querySelector('#booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    soundFx.playCyberClick();
    const el = document.querySelector('#computers');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectZone = (zoneId) => {
    soundFx.playCyberClick();
    setSelectedZone(zoneId);
    const el = document.querySelector('#booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectTariff = (tariffId, zoneId) => {
    soundFx.playCyberClick();
    setSelectedTariff(tariffId);
    if (zoneId) setSelectedZone(zoneId);
    const el = document.querySelector('#booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    soundFx.playCyberClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{ position: 'relative', overflowX: 'hidden' }}>
      
      {/* Navbar */}
      <Navbar 
        soundEnabled={soundEnabled} 
        toggleSound={toggleSound} 
        onBookClick={handleBookClick} 
      />

      {/* Main Sections */}
      <main>
        {/* 1. Главная страница (Hero) */}
        <Hero 
          onBookClick={handleBookClick} 
          onExploreClick={handleExploreClick} 
        />

        {/* 2. О клубе (About) */}
        <About />

        {/* 3. Наши компьютеры (Computers) */}
        <Computers 
          onSelectZone={handleSelectZone} 
        />

        {/* 4. Тарифы (Pricing) */}
        <Pricing 
          onSelectTariff={handleSelectTariff} 
        />

        {/* 5. Бронирование и Интерактивная схема зала (Booking + SeatMap) */}
        <Booking 
          selectedZone={selectedZone}
          setSelectedZone={setSelectedZone}
          selectedTariff={selectedTariff}
          setSelectedTariff={setSelectedTariff}
          selectedPc={selectedPc}
          setSelectedPc={setSelectedPc}
        />

        {/* 6. Галерея (Gallery) */}
        <Gallery />

        {/* 7. Отзывы и FAQ (Reviews & FAQ) */}
        <ReviewsAndFaq />

        {/* 8. Контакты (Contacts) */}
        <Contacts />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Buttons */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          zIndex: 40
        }}
      >
        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            title="Наверх"
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(18, 22, 33, 0.9)',
              border: '1.5px solid var(--gold-400)',
              color: 'var(--gold-400)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
              fontSize: '1.2rem',
              fontWeight: 800,
              transition: 'all 0.2s'
            }}
          >
            ↑
          </button>
        )}

        {/* Direct Call Button */}
        <a
          href={`tel:${CLUB_INFO.phoneRaw}`}
          title="Позвонить в клуб"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FFE259 0%, #D4AF37 100%)',
            color: '#07080B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 25px rgba(212, 175, 55, 0.6)',
            textDecoration: 'none',
            transition: 'transform 0.2s'
          }}
          className="animate-pulse-glow"
        >
          <PhoneIcon className="w-5 h-5" />
        </a>
      </div>

    </div>
  );
}
