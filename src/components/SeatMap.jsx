import React from 'react';
import { COMPUTER_SEATS } from '../data/clubData';
import { SparklesIcon, MonitorIcon } from './Icons';

export const SeatMap = ({ selectedPc, onSelectPc }) => {
  // Group seats by zone
  const standardSeats = COMPUTER_SEATS.filter(s => s.zone === 'standard');
  const proSeats = COMPUTER_SEATS.filter(s => s.zone === 'pro');
  const vipSeats = COMPUTER_SEATS.filter(s => s.zone === 'vip');
  const bootcampSeats = COMPUTER_SEATS.filter(s => s.zone === 'bootcamp');

  const renderSeat = (seat) => {
    const isSelected = selectedPc === seat.number;
    const isBusy = seat.status === 'busy';

    let seatClass = 'seat-pc ';
    if (isSelected) seatClass += 'seat-selected';
    else if (isBusy) seatClass += 'seat-busy';
    else seatClass += 'seat-free';

    return (
      <div
        key={seat.id}
        onClick={() => {
          if (!isBusy) {
            onSelectPc(seat.number, seat.zone);
          }
        }}
        className={seatClass}
        title={
          isBusy 
            ? `ПК #${seat.number} (${seat.zoneName}) — Сейчас занят` 
            : `ПК #${seat.number} (${seat.zoneName}) — Свободен. Нажмите для выбора!`
        }
      >
        <span style={{ fontSize: '0.62rem', opacity: 0.8, textTransform: 'uppercase' }}>
          {seat.zone === 'vip' ? 'VIP' : seat.zone === 'bootcamp' ? 'BC' : 'ПК'}
        </span>
        <span style={{ lineHeight: 1 }}>{seat.number}</span>
      </div>
    );
  };

  return (
    <div id="seat-map" style={{ marginBottom: '48px' }}>
      
      {/* Interactive Hall Schema Box */}
      <div
        className="cyber-card"
        style={{
          padding: '32px 24px',
          background: 'rgba(13, 16, 24, 0.92)',
          border: '1.5px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '16px'
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div>
            <h3 className="font-orbitron" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFF', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MonitorIcon className="w-5 h-5 text-amber-400" />
              ИНТЕРАКТИВНАЯ СХЕМА ЗАЛА
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Кликните на свободный компьютер, чтобы выбрать его для бронирования
            </p>
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', fontSize: '0.8rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: 'rgba(18, 22, 34, 0.9)', border: '1px solid var(--gold-500)' }} />
              <span style={{ color: '#E5E7EB' }}>Свободен</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: 'linear-gradient(135deg, #FFE259, #D4AF37)' }} />
              <span style={{ color: '#FFE259', fontWeight: 700 }}>Выбран вами</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: 'rgba(30, 32, 40, 0.5)', border: '1px solid rgba(255,255,255,0.1)' }} />
              <span style={{ color: 'var(--text-dim)' }}>Занят</span>
            </div>
          </div>
        </div>

        {/* Selected PC Announcement banner */}
        {selectedPc && (
          <div
            style={{
              padding: '12px 20px',
              borderRadius: '8px',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid var(--gold-400)',
              marginBottom: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SparklesIcon className="w-5 h-5 text-amber-400" />
              <span style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.92rem' }}>
                Выбран компьютер: <strong style={{ color: 'var(--gold-400)', fontSize: '1.05rem' }}>ПК #{selectedPc}</strong>
              </span>
            </div>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Данные автоматически подставлены в форму бронирования ниже ↓
            </span>
          </div>
        )}

        {/* The Hall Map Grid Layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          {/* VIP Rooms Section */}
          <div
            style={{
              padding: '20px',
              borderRadius: '12px',
              background: 'rgba(20, 16, 10, 0.4)',
              border: '1px dashed rgba(212, 175, 55, 0.4)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span className="font-orbitron" style={{ color: 'var(--gold-400)', fontSize: '0.9rem', fontWeight: 700 }}>
                ★ VIP LOUNGE ROOMS (RTX 4090 • OLED 240Hz)
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Изолированные комнаты</span>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              {vipSeats.map(renderSeat)}
            </div>
          </div>

          {/* Standard Hall & Pro Arena Side by Side */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {/* Standard Zone (ПК 1 - 20) */}
            <div
              style={{
                padding: '20px',
                borderRadius: '12px',
                background: 'rgba(10, 12, 18, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span className="font-orbitron" style={{ color: '#FFF', fontSize: '0.9rem', fontWeight: 700 }}>
                  STANDARD ZONE (240Hz ZOWIE)
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>20 мест</span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(44px, 1fr))',
                  gap: '10px'
                }}
              >
                {standardSeats.map(renderSeat)}
              </div>
            </div>

            {/* Pro Gaming Arena (ПК 21 - 32) */}
            <div
              style={{
                padding: '20px',
                borderRadius: '12px',
                background: 'rgba(12, 18, 28, 0.6)',
                border: '1px solid rgba(0, 240, 255, 0.25)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span className="font-orbitron" style={{ color: 'var(--cyan-neon)', fontSize: '0.9rem', fontWeight: 700 }}>
                  PRO ARENA (360Hz • 7800X3D)
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>12 мест</span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(44px, 1fr))',
                  gap: '10px'
                }}
              >
                {proSeats.map(renderSeat)}
              </div>
            </div>
          </div>

          {/* Bootcamp 5v5 Room */}
          <div
            style={{
              padding: '20px',
              borderRadius: '12px',
              background: 'rgba(18, 21, 31, 0.5)',
              border: '1px solid rgba(212, 175, 55, 0.25)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span className="font-orbitron" style={{ color: 'var(--gold-400)', fontSize: '0.9rem', fontWeight: 700 }}>
                ⚔ BOOTCAMP ARENA (5v5 Lan Team Rooms)
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Team A & Team B</span>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {bootcampSeats.map(renderSeat)}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
