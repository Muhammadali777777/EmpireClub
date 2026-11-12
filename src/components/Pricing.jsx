import React, { useState } from 'react';
import { SparklesIcon, CheckIcon, ArrowRightIcon, ZapIcon, ClockIcon } from './Icons';
import { TARIFF_PACKS, PC_ZONES } from '../data/clubData';

export const Pricing = ({ onSelectTariff }) => {
  const [activeZone, setActiveZone] = useState('standard');
  const [calcHours, setCalcHours] = useState(3);
  const [includeEnergyDrink, setIncludeEnergyDrink] = useState(true);
  const [includeSnack, setIncludeSnack] = useState(false);

  const zoneNames = {
    standard: "Standard Zone",
    pro: "PRO Arena",
    vip: "VIP Lounge",
    bootcamp: "Bootcamp (5v5)"
  };

  // Calculator logic
  const currentZoneObj = PC_ZONES.find(z => z.id === activeZone) || PC_ZONES[0];
  const baseCalcPrice = currentZoneObj.hourlyPrice * calcHours;
  const drinkPrice = includeEnergyDrink ? 250 : 0;
  const snackPrice = includeSnack ? 350 : 0;
  const totalCalcPrice = baseCalcPrice + drinkPrice + snackPrice;

  return (
    <section id="tariffs" className="section-padding" style={{ position: 'relative' }}>
      
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <SparklesIcon className="w-4 h-4" />
            <span>ПРОЗРАЧНЫЕ ТАРИФЫ</span>
          </div>
          <h2 className="section-title">
            ВЫБЕРИ СВОЙ <span className="gold-gradient-text">ИГРОВОЙ ПАКЕТ</span>
          </h2>
          <p className="section-desc">
            Гибкая система тарифов от коротких разминочных матчей до эпических 10-часовых ночных марафонов. 
            Чем дольше ты играешь в EMPIRE — тем выгоднее стоимость часа.
          </p>
        </div>

        {/* Zone Selector Pills */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
            Выберите игровую зону для отображения точной стоимости:
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              padding: '6px',
              borderRadius: '12px',
              background: 'rgba(18, 21, 31, 0.85)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {Object.entries(zoneNames).map(([key, label]) => {
              const isSelected = activeZone === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveZone(key)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-tech)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    border: 'none',
                    background: isSelected ? 'linear-gradient(135deg, #FFE259 0%, #D4AF37 100%)' : 'transparent',
                    color: isSelected ? '#07080B' : 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? '0 0 15px rgba(212, 175, 55, 0.4)' : 'none'
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tariffs Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '24px',
            marginBottom: '64px'
          }}
        >
          {TARIFF_PACKS.map((pack) => {
            const price = pack.prices[activeZone];
            const isFeatured = pack.popular;

            return (
              <div
                key={pack.id}
                className="cyber-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '32px 26px',
                  background: isFeatured 
                    ? 'linear-gradient(180deg, rgba(28, 33, 48, 0.95) 0%, rgba(14, 17, 25, 0.95) 100%)' 
                    : 'rgba(15, 18, 26, 0.85)',
                  border: isFeatured ? '2px solid var(--gold-400)' : '1px solid rgba(212, 175, 55, 0.25)',
                  boxShadow: isFeatured ? '0 10px 30px rgba(212, 175, 55, 0.2)' : 'none',
                  transform: isFeatured ? 'scale(1.02)' : 'none'
                }}
              >
                {/* Badge if present */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: '28px', marginBottom: '14px' }}>
                  {pack.badge ? (
                    <span className="badge-gold">
                      <SparklesIcon className="w-3.5 h-3.5" />
                      {pack.badge}
                    </span>
                  ) : pack.discountBadge ? (
                    <span className="badge-cyan">
                      {pack.discountBadge}
                    </span>
                  ) : <span />}

                  {pack.timeRange && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-tech)' }}>
                      {pack.timeRange}
                    </span>
                  )}
                </div>

                {/* Title */}
                <div style={{ marginBottom: '16px' }}>
                  <div
                    className="font-orbitron"
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginBottom: '4px'
                    }}
                  >
                    {pack.duration}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {pack.title}
                  </div>
                </div>

                {/* Price Display */}
                <div
                  style={{
                    padding: '16px 0',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    marginBottom: '20px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                    <span
                      className="font-orbitron gold-gradient-text"
                      style={{
                        fontSize: '2.5rem',
                        fontWeight: 900,
                        lineHeight: 1
                      }}
                    >
                      {price} ₽
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                      / сессия
                    </span>
                  </div>

                  <div style={{ fontSize: '0.78rem', color: 'var(--gold-400)', marginTop: '4px', fontWeight: 600 }}>
                    Зона: {zoneNames[activeZone]}
                  </div>
                </div>

                {/* Perks */}
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    marginBottom: '28px',
                    flex: 1
                  }}
                >
                  {pack.perks.map((perk, pIdx) => (
                    <li
                      key={pIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '0.85rem',
                        color: '#E5E7EB',
                        lineHeight: 1.4
                      }}
                    >
                      <CheckIcon className="w-4 h-4 text-amber-400" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectTariff(pack.id, activeZone)}
                  className={isFeatured ? "btn-gold" : "btn-outline-gold"}
                  style={{ width: '100%', padding: '13px' }}
                >
                  <span>ВЫБРАТЬ ТАРИФ</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Custom Session Calculator */}
        <div
          className="cyber-card"
          style={{
            padding: '36px',
            background: 'linear-gradient(135deg, rgba(20, 24, 36, 0.9) 0%, rgba(10, 12, 17, 0.95) 100%)',
            border: '1.5px solid rgba(212, 175, 55, 0.35)',
            borderRadius: '16px'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              alignItems: 'center'
            }}
          >
            <div>
              <div className="badge-gold" style={{ marginBottom: '12px' }}>
                <ZapIcon className="w-3.5 h-3.5" />
                КАЛЬКУЛЯТОР СЕССИИ
              </div>

              <h3 className="font-orbitron" style={{ fontSize: '1.7rem', fontWeight: 800, color: '#FFF', marginBottom: '12px' }}>
                РАССЧИТАЙ СВОЁ <span className="gold-gradient-text">ВРЕМЯ ИГРЫ</span>
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
                Настрой параметры индивидуальной игровой сессии, добавь энергетические напитки и закуски, и сразу переходи к бронированию.
              </p>

              {/* Hours Slider / Buttons */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--gold-400)', fontWeight: 700, marginBottom: '8px' }}>
                  ДЛИТЕЛЬНОСТЬ ИГРЫ: {calcHours} {calcHours === 1 ? 'ЧАС' : calcHours < 5 ? 'ЧАСА' : 'ЧАСОВ'}
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {[1, 2, 3, 4, 5, 8, 10].map(h => (
                    <button
                      key={h}
                      onClick={() => setCalcHours(h)}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '6px',
                        background: calcHours === h ? 'var(--gold-400)' : 'rgba(255, 255, 255, 0.05)',
                        color: calcHours === h ? '#07080B' : '#FFF',
                        border: calcHours === h ? '1px solid #FFF' : '1px solid rgba(255, 255, 255, 0.1)',
                        fontWeight: 700,
                        cursor: 'pointer',
                        fontFamily: 'var(--font-tech)'
                      }}
                    >
                      {h} ч
                    </button>
                  ))}
                </div>
              </div>

              {/* Extra check items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.9rem', color: '#E5E7EB' }}>
                  <input
                    type="checkbox"
                    checked={includeEnergyDrink}
                    onChange={(e) => setIncludeEnergyDrink(e.target.checked)}
                    style={{ accentColor: '#D4AF37', width: '18px', height: '18px' }}
                  />
                  <span>Фирменный энергетик Red Bull / Monster Energy (+250 ₽)</span>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.9rem', color: '#E5E7EB' }}>
                  <input
                    type="checkbox"
                    checked={includeSnack}
                    onChange={(e) => setIncludeSnack(e.target.checked)}
                    style={{ accentColor: '#D4AF37', width: '18px', height: '18px' }}
                  />
                  <span>Крафтовый бургер / горячий комбо-сэндвич (+350 ₽)</span>
                </label>
              </div>
            </div>

            {/* Total Calculation Display */}
            <div
              style={{
                background: 'rgba(10, 12, 17, 0.85)',
                border: '1px solid var(--gold-border)',
                borderRadius: '12px',
                padding: '28px',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                ИТОГО К ОПЛАТЕ:
              </div>

              <div
                className="font-orbitron gold-gradient-text"
                style={{
                  fontSize: '3.2rem',
                  fontWeight: 900,
                  lineHeight: 1,
                  marginBottom: '10px'
                }}
              >
                {totalCalcPrice} ₽
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '24px' }}>
                {calcHours} ч в {zoneNames[activeZone]} 
                {includeEnergyDrink ? ' + напиток' : ''} 
                {includeSnack ? ' + закуска' : ''}
              </div>

              <button
                onClick={() => onSelectTariff(`custom_${calcHours}h`, activeZone)}
                className="btn-gold"
                style={{ width: '100%', padding: '16px', fontSize: '1rem' }}
              >
                <SparklesIcon className="w-5 h-5" />
                <span>ЗАБРОНИРОВАТЬ ЭТОТ РАСЧЕТ</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
