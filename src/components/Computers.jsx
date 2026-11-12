import React, { useState } from 'react';
import { 
  CpuIcon, GpuIcon, RamIcon, MonitorIcon, MouseIcon, 
  SparklesIcon, ArrowRightIcon, ZapIcon, CheckIcon 
} from './Icons';
import { PC_ZONES } from '../data/clubData';

export const Computers = ({ onSelectZone }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredZones = selectedFilter === 'all' 
    ? PC_ZONES 
    : PC_ZONES.filter(z => z.id === selectedFilter);

  return (
    <section id="computers" className="section-padding" style={{ position: 'relative' }}>
      
      {/* Background Accent */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <CpuIcon className="w-4 h-4" />
            <span>БОЕВОЙ АРСЕНАЛ EMPIRE</span>
          </div>
          <h2 className="section-title">
            НАШИ <span className="gold-gradient-text">ИГРОВЫЕ КОМПЬЮТЕРЫ</span>
          </h2>
          <p className="section-desc">
            Бескомпромиссная мощность для тех, кто не признает компромиссов в графике и отклике. 
            Флагманские видеокарты RTX 40-й серии, сверхбыстрые процессоры с 3D V-Cache и киберспортивные мониторы до 360Hz.
          </p>
        </div>

        {/* Filter Zone Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '48px'
          }}
        >
          <button
            onClick={() => setSelectedFilter('all')}
            style={{
              padding: '10px 22px',
              borderRadius: '8px',
              fontFamily: 'var(--font-tech)',
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              border: selectedFilter === 'all' ? '1px solid var(--gold-400)' : '1px solid rgba(255, 255, 255, 0.1)',
              background: selectedFilter === 'all' ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.3) 0%, rgba(18, 22, 33, 0.9) 100%)' : 'rgba(18, 21, 31, 0.6)',
              color: selectedFilter === 'all' ? '#FFE259' : 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: selectedFilter === 'all' ? '0 0 15px rgba(212, 175, 55, 0.3)' : 'none'
            }}
          >
            Все зоны ({PC_ZONES.length})
          </button>

          {PC_ZONES.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setSelectedFilter(zone.id)}
              style={{
                padding: '10px 22px',
                borderRadius: '8px',
                fontFamily: 'var(--font-tech)',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                border: selectedFilter === zone.id ? '1px solid var(--gold-400)' : '1px solid rgba(255, 255, 255, 0.1)',
                background: selectedFilter === zone.id ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.3) 0%, rgba(18, 22, 33, 0.9) 100%)' : 'rgba(18, 21, 31, 0.6)',
                color: selectedFilter === zone.id ? '#FFE259' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: selectedFilter === zone.id ? '0 0 15px rgba(212, 175, 55, 0.3)' : 'none'
              }}
            >
              {zone.name}
            </button>
          ))}
        </div>

        {/* PC Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}
        >
          {filteredZones.map((zone) => (
            <div
              key={zone.id}
              className="cyber-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(15, 18, 26, 0.88)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(212, 175, 55, 0.25)'
              }}
            >
              {/* PC Image & Badges */}
              <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
                <img
                  src={zone.image}
                  alt={zone.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 18, 26, 1) 0%, rgba(15, 18, 26, 0.3) 50%, transparent 100%)'
                  }}
                />

                {/* Top Badge */}
                <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                  <span className="badge-gold">
                    <SparklesIcon className="w-3.5 h-3.5" />
                    {zone.badge}
                  </span>
                </div>

                {/* Price tag */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    background: 'rgba(7, 8, 11, 0.85)',
                    border: '1px solid var(--gold-500)',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '4px'
                  }}
                >
                  <span className="font-orbitron gold-gradient-text" style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                    {zone.hourlyPrice} ₽
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {zone.isTeam ? '/час (зал)' : '/час'}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                
                <div style={{ marginBottom: '16px' }}>
                  <h3
                    className="font-orbitron"
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginBottom: '6px'
                    }}
                  >
                    {zone.name}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {zone.description}
                  </p>
                </div>

                {/* Specs List */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    padding: '16px',
                    borderRadius: '10px',
                    background: 'rgba(10, 12, 17, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    marginBottom: '20px'
                  }}
                >
                  {/* Процессор */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ color: 'var(--gold-400)', marginTop: '2px' }}>
                      <CpuIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Процессор (CPU)
                      </div>
                      <div style={{ fontSize: '0.9rem', color: '#FFFFFF', fontWeight: 600 }}>
                        {zone.specs.cpu}
                      </div>
                    </div>
                  </div>

                  {/* Видеокарта */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ color: 'var(--cyan-neon)', marginTop: '2px' }}>
                      <GpuIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Видеокарта (GPU)
                      </div>
                      <div style={{ fontSize: '0.9rem', color: '#FFFFFF', fontWeight: 600 }}>
                        {zone.specs.gpu}
                      </div>
                    </div>
                  </div>

                  {/* Оперативная память */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ color: 'var(--gold-400)', marginTop: '2px' }}>
                      <RamIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Оперативная память (RAM)
                      </div>
                      <div style={{ fontSize: '0.9rem', color: '#FFFFFF', fontWeight: 600 }}>
                        {zone.specs.ram}
                      </div>
                    </div>
                  </div>

                  {/* Монитор */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ color: 'var(--gold-400)', marginTop: '2px' }}>
                      <MonitorIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Монитор (Display)
                      </div>
                      <div style={{ fontSize: '0.9rem', color: '#FFFFFF', fontWeight: 600 }}>
                        {zone.specs.monitor}
                      </div>
                    </div>
                  </div>

                  {/* Периферия */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ color: 'var(--gold-400)', marginTop: '2px' }}>
                      <MouseIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Периферия и кресло
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        {zone.specs.peripherals}
                      </div>
                    </div>
                  </div>
                </div>

                {/* FPS Benchmark Indicators */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--gold-400)', fontWeight: 700, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ZapIcon className="w-3.5 h-3.5" />
                    СРЕДНИЙ FPS В КИБЕРСПОРТИВНЫХ ДИСЦИПЛИНАХ:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                    {zone.fpsBenchmark.map((bench, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: 'rgba(21, 25, 36, 0.5)',
                          padding: '6px 10px',
                          borderRadius: '6px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          fontSize: '0.78rem'
                        }}
                      >
                        <span style={{ color: 'var(--text-dim)' }}>{bench.game}:</span>
                        <span style={{ color: '#34D399', fontWeight: 700, fontFamily: 'var(--font-tech)' }}>
                          {bench.fps}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div style={{ marginTop: 'auto' }}>
                  <button
                    onClick={() => onSelectZone(zone.id)}
                    className="btn-gold"
                    style={{
                      width: '100%',
                      padding: '13px',
                      fontSize: '0.9rem'
                    }}
                  >
                    <span>ВЫБРАТЬ ЭТОТ СЕТАП</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
