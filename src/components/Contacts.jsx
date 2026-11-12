import React, { useState } from 'react';
import { 
  MapPinIcon, PhoneIcon, ClockIcon, SparklesIcon, 
  TelegramIcon, VKIcon, DiscordIcon, CheckCircleIcon, ArrowRightIcon 
} from './Icons';
import { CLUB_INFO } from '../data/clubData';

export const Contacts = () => {
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCallback = (e) => {
    e.preventDefault();
    if (!callbackName || !callbackPhone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setCallbackName('');
      setCallbackPhone('');
    }, 4000);
  };

  return (
    <section id="contacts" className="section-padding" style={{ position: 'relative' }}>
      
      {/* Background Accent */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '20%',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MapPinIcon className="w-4 h-4" />
            <span>ЛОКАЦИЯ И СВЯЗЬ</span>
          </div>
          <h2 className="section-title">
            КАК НАС <span className="gold-gradient-text">НАЙТИ</span>
          </h2>
          <p className="section-desc">
            Мы находимся в самом сердце деловой столицы. Удобный подземный паркинг, отдельный VIP-вход и шаговая доступность от метро.
          </p>
        </div>

        {/* Contacts Grid: Info Cards + Map & Quick Call */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            marginBottom: '48px'
          }}
        >
          {/* Left Column: Address, Phone, Hours, Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Address Card */}
            <div
              className="cyber-card"
              style={{
                padding: '28px',
                background: 'rgba(16, 20, 30, 0.85)',
                border: '1px solid var(--gold-border)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: 'rgba(212, 175, 55, 0.15)',
                    border: '1px solid var(--gold-400)',
                    color: 'var(--gold-400)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--gold-400)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.08em' }}>
                    АДРЕС КЛУБА
                  </div>
                  <div style={{ fontSize: '1.15rem', color: '#FFFFFF', fontWeight: 700, margin: '4px 0' }}>
                    {CLUB_INFO.address}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    🚇 {CLUB_INFO.metro}
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & Schedule */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px'
              }}
            >
              {/* Phone */}
              <div
                className="cyber-card"
                style={{
                  padding: '24px',
                  background: 'rgba(16, 20, 30, 0.85)',
                  border: '1px solid var(--gold-border)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <div style={{ color: 'var(--gold-400)' }}>
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
                    КРУГЛОСУТОЧНЫЙ ТЕЛЕФОН
                  </span>
                </div>
                <a
                  href={`tel:${CLUB_INFO.phoneRaw}`}
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: '#FFE259',
                    fontFamily: 'var(--font-tech)',
                    textDecoration: 'none',
                    display: 'block'
                  }}
                >
                  {CLUB_INFO.phone}
                </a>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>
                  Звонок бесплатный по всей РФ
                </span>
              </div>

              {/* Hours */}
              <div
                className="cyber-card"
                style={{
                  padding: '24px',
                  background: 'rgba(16, 20, 30, 0.85)',
                  border: '1px solid var(--gold-border)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <div style={{ color: '#10B981' }}>
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>
                    РЕЖИМ РАБОТЫ
                  </span>
                </div>
                <div
                  className="font-orbitron"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#34D399'
                  }}
                >
                  24 / 7 NON-STOP
                </div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>
                  Без перерывов и праздников
                </span>
              </div>
            </div>

            {/* Social Media Links */}
            <div
              className="cyber-card"
              style={{
                padding: '24px',
                background: 'rgba(16, 20, 30, 0.85)',
                border: '1px solid var(--gold-border)'
              }}
            >
              <div style={{ fontSize: '0.85rem', color: 'var(--gold-400)', fontWeight: 700, marginBottom: '16px', letterSpacing: '0.06em' }}>
                МЫ В СОЦИАЛЬНЫХ СЕТЯХ И СООБЩЕСТВАХ:
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a
                  href={CLUB_INFO.socials.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-gold"
                  style={{ padding: '10px 18px', fontSize: '0.85rem', gap: '8px' }}
                >
                  <TelegramIcon className="w-4 h-4 text-sky-400" />
                  <span>Telegram Канал</span>
                </a>

                <a
                  href={CLUB_INFO.socials.vk}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-gold"
                  style={{ padding: '10px 18px', fontSize: '0.85rem', gap: '8px' }}
                >
                  <VKIcon className="w-4 h-4 text-blue-400" />
                  <span>VKontakte</span>
                </a>

                <a
                  href={CLUB_INFO.socials.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-gold"
                  style={{ padding: '10px 18px', fontSize: '0.85rem', gap: '8px' }}
                >
                  <DiscordIcon className="w-4 h-4 text-indigo-400" />
                  <span>Discord Сервер</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Cyber Map Card + Fast Callback */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Interactive Map Showcase */}
            <div
              className="cyber-card"
              style={{
                height: '320px',
                position: 'relative',
                overflow: 'hidden',
                background: '#090B10',
                border: '1.5px solid var(--gold-500)',
                borderRadius: '14px'
              }}
            >
              {/* Map Graphic Simulation with Cyber Grid and Marker */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `linear-gradient(to right, rgba(212, 175, 55, 0.08) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(212, 175, 55, 0.08) 1px, transparent 1px),
                                    radial-gradient(circle at 50% 50%, rgba(18, 26, 42, 0.9) 0%, rgba(9, 11, 16, 0.98) 100%)`,
                  backgroundSize: '30px 30px, 30px 30px, cover'
                }}
              />

              {/* Glowing Roads & Landmark overlay */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35 }}>
                <path d="M 0 100 Q 180 120 300 200 T 600 240" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
                <path d="M 120 0 Q 150 160 220 320" fill="none" stroke="#00F0FF" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 400 0 L 300 320" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
              </svg>

              {/* Centered Map Pin */}
              <div
                style={{
                  position: 'absolute',
                  top: '48%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  zIndex: 2
                }}
              >
                <div
                  className="animate-pulse-glow"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FFE259 0%, #D4AF37 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 8px auto',
                    boxShadow: '0 0 30px rgba(212, 175, 55, 0.8)',
                    color: '#07080B'
                  }}
                >
                  <MapPinIcon className="w-8 h-8" />
                </div>

                <div
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: 'rgba(7, 8, 11, 0.95)',
                    border: '1px solid var(--gold-400)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.8)'
                  }}
                >
                  <div className="font-orbitron" style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFF' }}>
                    EMPIRE CLUB
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gold-400)' }}>
                    Москва-Сити, Башня Федерация
                  </div>
                </div>
              </div>

              {/* Open in external navigator button */}
              <div style={{ position: 'absolute', bottom: '16px', right: '16px', zIndex: 3 }}>
                <a
                  href="https://yandex.ru/maps/?text=Москва-Сити+Башня+Федерация"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold"
                  style={{ padding: '8px 16px', fontSize: '0.78rem' }}
                >
                  ОТКРЫТЬ В НАВИГАТОРЕ ↗
                </a>
              </div>
            </div>

            {/* Quick Callback Form */}
            <div
              className="cyber-card"
              style={{
                padding: '28px',
                background: 'linear-gradient(135deg, rgba(20, 24, 36, 0.9) 0%, rgba(10, 12, 17, 0.95) 100%)',
                border: '1px solid var(--gold-border)'
              }}
            >
              <div className="badge-gold" style={{ marginBottom: '10px' }}>
                <SparklesIcon className="w-3.5 h-3.5" />
                БЫСТРАЯ СВЯЗЬ
              </div>

              <h3 className="font-orbitron" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFF', marginBottom: '8px' }}>
                ОСТАЛИСЬ ВОПРОСЫ?
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '18px' }}>
                Оставьте контактные данные — старший администратор перезвонит вам в течение 5 минут.
              </p>

              {submitted ? (
                <div
                  style={{
                    padding: '16px',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid #10B981',
                    color: '#34D399',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.9rem'
                  }}
                >
                  <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
                  <span>Заявка принята! Администратор уже набирает ваш номер.</span>
                </div>
              ) : (
                <form onSubmit={handleCallback} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={callbackName}
                      onChange={(e) => setCallbackName(e.target.value)}
                      required
                      className="cyber-input"
                      style={{ padding: '11px 14px' }}
                    />
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={callbackPhone}
                      onChange={(e) => setCallbackPhone(e.target.value)}
                      required
                      className="cyber-input"
                      style={{ padding: '11px 14px' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold"
                    style={{ padding: '12px 20px', fontSize: '0.9rem', width: '100%' }}
                  >
                    <span>ЗАКАЗАТЬ ЗВОНОК</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
