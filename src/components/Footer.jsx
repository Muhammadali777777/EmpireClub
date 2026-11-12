import React from 'react';
import { CrownIcon, TelegramIcon, VKIcon, DiscordIcon, SparklesIcon } from './Icons';
import { CLUB_INFO } from '../data/clubData';

export const Footer = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#040507',
        borderTop: '1px solid rgba(212, 175, 55, 0.25)',
        paddingTop: '70px',
        paddingBottom: '40px',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container-custom">
        
        {/* Top Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}
        >
          {/* Column 1: Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.3), #0C0E14)',
                  border: '1.5px solid var(--gold-400)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <CrownIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="font-orbitron gold-gradient-text" style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '0.12em' }}>
                  EMPIRE
                </span>
                <span className="font-rajdhani" style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.25em', color: 'var(--gold-400)' }}>
                  CYBER LOUNGE
                </span>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Премиальное киберспортивное пространство нового поколения в Москва-Сити. 
              Твой надежный проводник в мир максимального FPS, комфорта и побед.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={CLUB_INFO.socials.telegram}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  color: 'var(--gold-400)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
              >
                <TelegramIcon className="w-4 h-4" />
              </a>

              <a
                href={CLUB_INFO.socials.vk}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  color: 'var(--gold-400)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
              >
                <VKIcon className="w-4 h-4" />
              </a>

              <a
                href={CLUB_INFO.socials.discord}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  color: 'var(--gold-400)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
              >
                <DiscordIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <div className="font-orbitron" style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', marginBottom: '18px', letterSpacing: '0.05em' }}>
              НАВИГАЦИЯ
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'О клубе', id: '#about' },
                { label: 'Боевой арсенал ПК', id: '#computers' },
                { label: 'Тарифные планы', id: '#tariffs' },
                { label: 'Интерактивная схема зала', id: '#seat-map' },
                { label: 'Онлайн бронирование', id: '#booking' },
                { label: 'Фотогалерея интерьеров', id: '#gallery' },
                { label: 'Частые вопросы (FAQ)', id: '#faq' }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: 0,
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-400)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Club Info */}
          <div>
            <div className="font-orbitron" style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', marginBottom: '18px', letterSpacing: '0.05em' }}>
              КОНТАКТЫ
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <div>
                <strong style={{ color: '#FFF', display: 'block', marginBottom: '2px' }}>Локация:</strong>
                {CLUB_INFO.address}
              </div>
              <div>
                <strong style={{ color: '#FFF', display: 'block', marginBottom: '2px' }}>Телефон:</strong>
                <a href={`tel:${CLUB_INFO.phoneRaw}`} style={{ color: 'var(--gold-400)', textDecoration: 'none', fontWeight: 700 }}>
                  {CLUB_INFO.phone}
                </a>
              </div>
              <div>
                <strong style={{ color: '#FFF', display: 'block', marginBottom: '2px' }}>График:</strong>
                {CLUB_INFO.workHours}
              </div>
            </div>
          </div>

          {/* Column 4: Club Rules summary */}
          <div>
            <div className="font-orbitron" style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', marginBottom: '18px', letterSpacing: '0.05em' }}>
              ПРАВИЛА EMPIRE
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
              <li>• Вход в ночное время (с 22:00) строго 18+ при наличии паспорта</li>
              <li>• Курение сигарет запрещено на всей территории</li>
              <li>• Бережное отношение к профессиональной периферии</li>
              <li>• В клубе действует Face-control & Dress-code</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            fontSize: '0.82rem',
            color: 'var(--text-dim)'
          }}
        >
          <div>
            © 2026 EMPIRE CYBER CLUB. Все права защищены.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Политика конфиденциальности</span>
            <span>Пользовательское соглашение</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
