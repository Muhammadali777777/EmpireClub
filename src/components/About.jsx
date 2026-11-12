import React from 'react';
import { 
  CpuIcon, MonitorIcon, WifiIcon, MouseIcon, 
  FanIcon, CoffeeIcon, GamepadIcon, ShieldIcon,
  SparklesIcon, CheckIcon
} from './Icons';
import { CLUB_ADVANTAGES, CLUB_INFO } from '../data/clubData';

export const About = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'cpu': return <CpuIcon className="w-6 h-6" />;
      case 'monitor': return <MonitorIcon className="w-6 h-6" />;
      case 'wifi': return <WifiIcon className="w-6 h-6" />;
      case 'mouse': return <MouseIcon className="w-6 h-6" />;
      case 'air': return <FanIcon className="w-6 h-6" />;
      case 'coffee': return <CoffeeIcon className="w-6 h-6" />;
      case 'gamepad': return <GamepadIcon className="w-6 h-6" />;
      case 'shield': return <ShieldIcon className="w-6 h-6" />;
      default: return <SparklesIcon className="w-6 h-6" />;
    }
  };

  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <SparklesIcon className="w-4 h-4" />
            <span>О КЛУБЕ EMPIRE</span>
          </div>
          <h2 className="section-title">
            НОВЫЙ СТАНДАРТ <span className="gold-gradient-text">КИБЕРСПОРТИВНОГО</span> КОМФОРТА
          </h2>
          <p className="section-desc">
            EMPIRE — это не просто компьютерный клуб, а закрытая экосистема премиум-уровня в деловом сердце Москвы. 
            Здесь каждый сантиметр пространства спроектирован для достижения максимального соревновательного преимущества и абсолютного погружения в игру.
          </p>
        </div>

        {/* Story & Visual Banner */}
        <div
          className="cyber-card"
          style={{
            marginBottom: '64px',
            background: 'linear-gradient(135deg, rgba(18, 22, 33, 0.85) 0%, rgba(10, 12, 17, 0.95) 100%)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            padding: '36px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '36px',
            alignItems: 'center'
          }}
        >
          <div>
            <div className="badge-cyan" style={{ marginBottom: '16px' }}>
              <span>ПРЕМИУМ ЛОКАЦИЯ В МОСКВА-СИТИ</span>
            </div>
            
            <h3
              className="font-orbitron"
              style={{
                fontSize: '1.8rem',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '16px',
                lineHeight: 1.3
              }}
            >
              АРЕНА ДЛЯ ТЕХ, КТО ПРИВЫК <span className="gold-gradient-text">ПОБЕЖДАТЬ</span>
            </h3>

            <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.7 }}>
              Мы объединили передовые киберспортивные технологии с сервисом пятизвездочного отеля. 
              Никаких шумных очередей, перегретых компьютеров и потерь кадров. Каждое место изолировано, 
              а системы очистки воздуха обеспечивают приток 100% свежего кислорода для сохранения максимальной реакции даже в 10-часовых ночных сессиях.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                "Только топовые компоненты ASUS ROG, BenQ ZOWIE и Wooting",
                "Круглосуточный шеф-бар: крафтовое меню прямо к твоему столу",
                "Регулярные закрытые LAN-турниры с призовыми фондами",
                "Изолированные VIP-апартаменты с отдельным саунд-дизайном"
              ].map((item, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#E5E7EB', fontSize: '0.95rem' }}>
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: 'rgba(212, 175, 55, 0.2)',
                      border: '1px solid var(--gold-400)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <CheckIcon className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Showcase */}
          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.6)' }}>
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop"
              alt="Игровой зал EMPIRE"
              style={{
                width: '100%',
                height: '380px',
                objectFit: 'cover',
                display: 'block',
                filter: 'brightness(0.9) contrast(1.1)'
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(7, 8, 11, 0.95) 0%, rgba(7, 8, 11, 0.2) 60%, transparent 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '24px'
              }}
            >
              <div className="badge-gold" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
                LIVE FROM EMPIRE
              </div>
              <div className="font-orbitron" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFF' }}>
                АРЕНА НОВОГО ПОКОЛЕНИЯ
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Москва-Сити • Башня Федерация • 24/7
              </div>
            </div>
          </div>
        </div>

        {/* 8 Key Advantages Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '24px'
          }}
        >
          {CLUB_ADVANTAGES.map((adv, index) => (
            <div
              key={index}
              className="cyber-card"
              style={{
                padding: '28px 24px',
                background: 'rgba(15, 18, 26, 0.75)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(18, 21, 31, 0.8) 100%)',
                  border: '1.5px solid rgba(212, 175, 55, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-400)',
                  marginBottom: '20px',
                  boxShadow: '0 0 16px rgba(212, 175, 55, 0.2)'
                }}
              >
                {getIcon(adv.icon)}
              </div>

              <h4
                className="font-orbitron"
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '10px'
                }}
              >
                {adv.title}
              </h4>

              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6
                }}
              >
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
