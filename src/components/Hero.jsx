import React from 'react';
import { CrownIcon, ZapIcon, SparklesIcon, ArrowRightIcon, ShieldIcon } from './Icons';
import { CLUB_INFO, POPULAR_GAMES } from '../data/clubData';

export const Hero = ({ onBookClick, onExploreClick }) => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '130px',
        paddingBottom: '80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 30%, rgba(26, 20, 10, 0.7) 0%, rgba(7, 8, 11, 0.98) 75%)'
      }}
    >
      {/* Background Hero Image with Cyber RGB Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(180deg, rgba(7, 8, 11, 0.5) 0%, rgba(7, 8, 11, 0.85) 60%, #07080B 100%), 
                            radial-gradient(ellipse at 70% 40%, rgba(212, 175, 55, 0.15) 0%, transparent 60%),
                            url('https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1920&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.42,
          filter: 'contrast(1.15) brightness(0.9)',
          zIndex: 0
        }}
      />

      {/* Decorative Gold & Neon Light Beams */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '350px',
          background: 'radial-gradient(ellipse, rgba(212, 175, 55, 0.22) 0%, rgba(255, 226, 89, 0.05) 45%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        
        {/* Top Floating Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div
            className="badge-gold animate-float"
            style={{
              padding: '8px 20px',
              fontSize: '0.88rem',
              gap: '8px',
              border: '1px solid rgba(255, 226, 89, 0.45)',
              background: 'rgba(21, 25, 36, 0.85)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <ZapIcon className="w-4 h-4 text-amber-400" />
            <span>КИБЕРСПОРТИВНЫЙ КЛУБ ПРЕМИУМ-КЛАССА В МОСКВА-СИТИ</span>
          </div>
        </div>

        {/* 1. Большой логотип EMPIRE */}
        <div
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '20px'
          }}
        >
          <div
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(255, 226, 89, 0.25) 0%, rgba(18, 22, 33, 0.95) 100%)',
              border: '2px solid var(--gold-400)',
              boxShadow: '0 0 35px rgba(212, 175, 55, 0.45), inset 0 0 20px rgba(255, 226, 89, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}
            className="animate-pulse-glow"
          >
            <CrownIcon style={{ width: '52px', height: '52px' }} />
          </div>

          <div
            className="font-orbitron gold-gradient-text gold-glow-text"
            style={{
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 900,
              letterSpacing: '0.14em',
              lineHeight: 1,
              textTransform: 'uppercase'
            }}
          >
            EMPIRE
          </div>
          <div
            className="font-rajdhani"
            style={{
              fontSize: '1rem',
              letterSpacing: '0.45em',
              color: 'var(--gold-400)',
              fontWeight: 600,
              marginTop: '4px'
            }}
          >
            CYBER ARENA & VIP LOUNGE
          </div>
        </div>

        {/* 2. Эффектный заголовок: «EMPIRE — ТВОЯ ТЕРРИТОРИЯ ПОБЕД» */}
        <h1
          className="font-orbitron"
          style={{
            fontSize: 'clamp(1.6rem, 4.2vw, 3.2rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.25,
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}
        >
          EMPIRE — <span className="gold-gradient-text-pure">ТВОЯ ТЕРРИТОРИЯ ПОБЕД</span>
        </h1>

        {/* 3. Подзаголовок: «Играй. Побеждай. Становись легендой» */}
        <p
          className="font-rajdhani"
          style={{
            fontSize: 'clamp(1.2rem, 2.4vw, 1.7rem)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            color: '#E5E7EB',
            maxWidth: '820px',
            margin: '0 auto 36px auto',
            lineHeight: 1.5
          }}
        >
          <span style={{ color: 'var(--gold-400)' }}>Играй.</span>{' '}
          <span style={{ color: '#FFFFFF' }}>Побеждай.</span>{' '}
          <span className="gold-gradient-text">Становись легендой.</span>
          <br />
          <span
            style={{
              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              display: 'inline-block',
              marginTop: '8px'
            }}
          >
            Мощнейшие сетапы на RTX 4090, мониторы 360Hz ZOWIE, гигабитный пинг 1ms и атмосфера настоящего киберспорта 24/7.
          </span>
        </p>

        {/* 4. Кнопки действия (Кнопка «ЗАБРОНИРОВАТЬ МЕСТО») */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '18px',
            marginBottom: '60px'
          }}
        >
          <button
            onClick={onBookClick}
            className="btn-gold"
            style={{
              padding: '18px 40px',
              fontSize: '1.05rem',
              letterSpacing: '0.08em'
            }}
          >
            <SparklesIcon className="w-5 h-5" />
            <span>ЗАБРОНИРОВАТЬ МЕСТО</span>
          </button>

          <button
            onClick={onExploreClick}
            className="btn-outline-gold"
            style={{
              padding: '17px 34px',
              fontSize: '1rem'
            }}
          >
            <span>ВЫБРАТЬ СЕКТОР И ПК</span>
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            maxWidth: '1060px',
            margin: '0 auto'
          }}
        >
          {CLUB_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="cyber-card"
              style={{
                padding: '20px 16px',
                background: 'rgba(18, 21, 31, 0.75)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                textAlign: 'center'
              }}
            >
              <div
                className="font-orbitron gold-gradient-text"
                style={{
                  fontSize: '2.1rem',
                  fontWeight: 900,
                  marginBottom: '4px'
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  fontWeight: 500
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Бегущая строка киберспортивных дисциплин (Marquee) */}
      <div
        style={{
          marginTop: '70px',
          background: 'rgba(10, 12, 18, 0.92)',
          borderTop: '1px solid rgba(212, 175, 55, 0.2)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
          padding: '14px 0',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div className="animate-marquee" style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
          {[...POPULAR_GAMES, ...POPULAR_GAMES].map((game, i) => (
            <div
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '16px',
                whiteSpace: 'nowrap'
              }}
            >
              <span
                className="font-orbitron"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: '#FFFFFF'
                }}
              >
                {game}
              </span>
              <span style={{ color: 'var(--gold-400)', fontSize: '1rem' }}>✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
