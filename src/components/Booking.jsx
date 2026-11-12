import React, { useState } from 'react';
import { 
  CalendarIcon, ClockIcon, MonitorIcon, UserIcon, 
  PhoneIcon, SparklesIcon, CheckCircleIcon, CloseIcon, CheckIcon 
} from './Icons';
import { SeatMap } from './SeatMap';
import { PC_ZONES, TARIFF_PACKS, COMPUTER_SEATS, CLUB_INFO } from '../data/clubData';

export const Booking = ({ 
  selectedZone, 
  setSelectedZone, 
  selectedTariff, 
  setSelectedTariff, 
  selectedPc, 
  setSelectedPc 
}) => {
  // Form State
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestNick, setGuestNick] = useState('');
  const [bookingDate, setBookingDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [bookingTime, setBookingTime] = useState('18:00');
  const [notes, setNotes] = useState('');
  
  // Validation errors
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketModal, setTicketModal] = useState(null);

  // Quick date options
  const getQuickDates = () => {
    const now = new Date();
    const dates = [];
    const dayNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    
    for (let i = 0; i < 4; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() + i);
      const iso = d.toISOString().split('T')[0];
      const label = i === 0 ? 'Сегодня' : i === 1 ? 'Завтра' : `${d.getDate()} ${dayNames[d.getDay()]}`;
      dates.push({ iso, label });
    }
    return dates;
  };

  const quickDates = getQuickDates();

  const quickTimes = ['12:00', '15:00', '18:00', '20:00', '22:00 (Ночь)'];

  const validate = () => {
    const newErrors = {};

    if (!guestName.trim() || guestName.trim().length < 2) {
      newErrors.guestName = 'Пожалуйста, укажите ваше имя (минимум 2 буквы)';
    }

    const cleanPhone = guestPhone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.guestPhone = 'Введите корректный номер телефона (минимум 10 цифр)';
    }

    if (!bookingDate) {
      newErrors.bookingDate = 'Выберите дату посещения';
    }

    if (!bookingTime) {
      newErrors.bookingTime = 'Выберите время начала';
    }

    if (!selectedPc) {
      newErrors.selectedPc = 'Пожалуйста, выберите номер компьютера на карте или в списке';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate cyber-booking generation
    setTimeout(() => {
      const bookingCode = `EMP-${Math.floor(100000 + Math.random() * 900000)}`;
      const currentTariffObj = TARIFF_PACKS.find(t => t.id === selectedTariff) || TARIFF_PACKS[1];
      const currentZoneObj = PC_ZONES.find(z => z.id === selectedZone) || PC_ZONES[0];
      const price = currentTariffObj.prices[selectedZone] || currentZoneObj.hourlyPrice * 3;

      setTicketModal({
        bookingCode,
        name: guestName,
        phone: guestPhone,
        nick: guestNick || 'GUEST',
        date: bookingDate,
        time: bookingTime,
        pc: selectedPc,
        zoneName: currentZoneObj.name,
        tariffName: currentTariffObj.duration,
        price,
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });

      setIsSubmitting(false);
    }, 700);
  };

  const handleSelectPc = (pcNumber, pcZone) => {
    setSelectedPc(pcNumber);
    if (pcZone) {
      setSelectedZone(pcZone);
    }
    if (errors.selectedPc) {
      setErrors(prev => ({ ...prev, selectedPc: null }));
    }
  };

  // Available PCs for select dropdown
  const zonePcs = COMPUTER_SEATS.filter(s => s.zone === selectedZone && s.status === 'free');

  return (
    <section id="booking" className="section-padding" style={{ position: 'relative' }}>
      
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(212, 175, 55, 0.12) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <CalendarIcon className="w-4 h-4" />
            <span>ОНЛАЙН СИСТЕМА</span>
          </div>
          <h2 className="section-title">
            ЗАБРОНИРОВАТЬ <span className="gold-gradient-text">ИГРОВОЕ МЕСТО</span>
          </h2>
          <p className="section-desc">
            Выберите дату, удобное время и желаемый сетап на интерактивной схеме клуба. 
            Бронь закрепляется за вами моментально, а ПК будет полностью готов к вашему визиту.
          </p>
        </div>

        {/* 1. Интерактивная карта зала */}
        <SeatMap 
          selectedPc={selectedPc} 
          onSelectPc={handleSelectPc} 
        />

        {/* 2. Рабочая форма бронирования с проверкой заполнения */}
        <div
          className="cyber-card"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '40px 32px',
            background: 'linear-gradient(145deg, rgba(16, 20, 30, 0.95) 0%, rgba(9, 11, 16, 0.98) 100%)',
            border: '1.5px solid var(--gold-border)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.15)'
          }}
        >
          <form onSubmit={handleSubmit}>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '28px' }}>
              
              {/* Дата */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--gold-400)', fontWeight: 700, marginBottom: '8px' }}>
                  <CalendarIcon className="w-4 h-4" />
                  ДАТА ВИЗИТА *
                </label>

                {/* Quick Date Buttons */}
                <div style={{ display: 'flex', gap: '6px', marginBottom: '10px', flexWrap: 'wrap' }}>
                  {quickDates.map((item) => (
                    <button
                      key={item.iso}
                      type="button"
                      onClick={() => setBookingDate(item.iso)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        fontFamily: 'var(--font-tech)',
                        background: bookingDate === item.iso ? 'var(--gold-400)' : 'rgba(255, 255, 255, 0.06)',
                        color: bookingDate === item.iso ? '#07080B' : 'var(--text-body)',
                        border: '1px solid rgba(212, 175, 55, 0.25)',
                        cursor: 'pointer'
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="cyber-input"
                  style={{ borderColor: errors.bookingDate ? '#EF4444' : undefined }}
                />
                {errors.bookingDate && (
                  <span style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '4px', display: 'block' }}>
                    {errors.bookingDate}
                  </span>
                )}
              </div>

              {/* Время начала */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--gold-400)', fontWeight: 700, marginBottom: '8px' }}>
                  <ClockIcon className="w-4 h-4" />
                  ВРЕМЯ НАЧАЛА *
                </label>

                {/* Quick Times */}
                <div style={{ display: 'flex', gap: '6px', marginBottom: '10px', flexWrap: 'wrap' }}>
                  {quickTimes.map((t) => {
                    const cleanTime = t.split(' ')[0];
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setBookingTime(cleanTime)}
                        style={{
                          padding: '6px 10px',
                          borderRadius: '6px',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          fontFamily: 'var(--font-tech)',
                          background: bookingTime === cleanTime ? 'var(--gold-400)' : 'rgba(255, 255, 255, 0.06)',
                          color: bookingTime === cleanTime ? '#07080B' : 'var(--text-body)',
                          border: '1px solid rgba(212, 175, 55, 0.25)',
                          cursor: 'pointer'
                        }}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>

                <input
                  type="time"
                  value={bookingTime}
                  onChange={(e) => setBookingTime(e.target.value)}
                  className="cyber-input"
                  style={{ borderColor: errors.bookingTime ? '#EF4444' : undefined }}
                />
                {errors.bookingTime && (
                  <span style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '4px', display: 'block' }}>
                    {errors.bookingTime}
                  </span>
                )}
              </div>

            </div>

            {/* Зона и Номер ПК */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '28px' }}>
              
              {/* Игровая Зона */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--gold-400)', fontWeight: 700, marginBottom: '8px' }}>
                  ИГРОВАЯ ЗОНА *
                </label>
                <select
                  value={selectedZone}
                  onChange={(e) => {
                    setSelectedZone(e.target.value);
                    setSelectedPc(''); // reset pc on zone change
                  }}
                  className="cyber-input"
                  style={{ cursor: 'pointer' }}
                >
                  {PC_ZONES.map((zone) => (
                    <option key={zone.id} value={zone.id} style={{ background: '#0E111A', color: '#FFF' }}>
                      {zone.name} ({zone.hourlyPrice} ₽/ч)
                    </option>
                  ))}
                </select>
              </div>

              {/* Номер компьютера */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--gold-400)', fontWeight: 700, marginBottom: '8px' }}>
                  <span>НОМЕР КОМПЬЮТЕРА *</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 400 }}>
                    (или кликните по схеме выше)
                  </span>
                </label>
                <select
                  value={selectedPc || ''}
                  onChange={(e) => {
                    setSelectedPc(Number(e.target.value));
                    if (errors.selectedPc) setErrors(prev => ({ ...prev, selectedPc: null }));
                  }}
                  className="cyber-input"
                  style={{ 
                    cursor: 'pointer',
                    borderColor: errors.selectedPc ? '#EF4444' : selectedPc ? 'var(--gold-400)' : undefined 
                  }}
                >
                  <option value="" disabled style={{ background: '#0E111A' }}>
                    -- Выберите свободный ПК --
                  </option>
                  {zonePcs.map((pc) => (
                    <option key={pc.id} value={pc.number} style={{ background: '#0E111A', color: '#FFF' }}>
                      ПК #{pc.number} ({pc.gpu} • {pc.monitor})
                    </option>
                  ))}
                </select>
                {errors.selectedPc && (
                  <span style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '4px', display: 'block' }}>
                    {errors.selectedPc}
                  </span>
                )}
              </div>

            </div>

            {/* Тариф */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--gold-400)', fontWeight: 700, marginBottom: '8px' }}>
                ТАРИФ / ПРОДОЛЖИТЕЛЬНОСТЬ *
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                {TARIFF_PACKS.map((pack) => {
                  const isSelected = selectedTariff === pack.id;
                  const price = pack.prices[selectedZone];
                  return (
                    <div
                      key={pack.id}
                      onClick={() => setSelectedTariff(pack.id)}
                      style={{
                        padding: '14px',
                        borderRadius: '8px',
                        background: isSelected ? 'rgba(212, 175, 55, 0.2)' : 'rgba(10, 12, 17, 0.7)',
                        border: isSelected ? '1.5px solid var(--gold-400)' : '1px solid rgba(255, 255, 255, 0.08)',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        textAlign: 'center'
                      }}
                    >
                      <div className="font-orbitron" style={{ fontSize: '0.95rem', fontWeight: 700, color: isSelected ? '#FFE259' : '#FFF' }}>
                        {pack.duration}
                      </div>
                      <div className="font-rajdhani" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--gold-400)', marginTop: '4px' }}>
                        {price} ₽
                      </div>
                      {pack.discountBadge && (
                        <div style={{ fontSize: '0.7rem', color: '#00F0FF', marginTop: '2px' }}>
                          {pack.discountBadge}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Контактные данные: Имя, Телефон, Никнейм */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '28px' }}>
              
              {/* Имя */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--gold-400)', fontWeight: 700, marginBottom: '8px' }}>
                  <UserIcon className="w-4 h-4" />
                  ВАШЕ ИМЯ *
                </label>
                <input
                  type="text"
                  placeholder="Константин"
                  value={guestName}
                  onChange={(e) => {
                    setGuestName(e.target.value);
                    if (errors.guestName) setErrors(prev => ({ ...prev, guestName: null }));
                  }}
                  className="cyber-input"
                  style={{ borderColor: errors.guestName ? '#EF4444' : undefined }}
                />
                {errors.guestName && (
                  <span style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '4px', display: 'block' }}>
                    {errors.guestName}
                  </span>
                )}
              </div>

              {/* Телефон */}
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--gold-400)', fontWeight: 700, marginBottom: '8px' }}>
                  <PhoneIcon className="w-4 h-4" />
                  НОМЕР ТЕЛЕФОНА *
                </label>
                <input
                  type="tel"
                  placeholder="+7 (999) 000-00-00"
                  value={guestPhone}
                  onChange={(e) => {
                    setGuestPhone(e.target.value);
                    if (errors.guestPhone) setErrors(prev => ({ ...prev, guestPhone: null }));
                  }}
                  className="cyber-input"
                  style={{ borderColor: errors.guestPhone ? '#EF4444' : undefined }}
                />
                {errors.guestPhone && (
                  <span style={{ fontSize: '0.78rem', color: '#EF4444', marginTop: '4px', display: 'block' }}>
                    {errors.guestPhone}
                  </span>
                )}
              </div>

              {/* Игровой ник */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '8px' }}>
                  ИГРОВОЙ НИКНЕЙМ (ОПЦИОНАЛЬНО)
                </label>
                <input
                  type="text"
                  placeholder="s1mple / shadow"
                  value={guestNick}
                  onChange={(e) => setGuestNick(e.target.value)}
                  className="cyber-input"
                />
              </div>

            </div>

            {/* Пожелания */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '8px' }}>
                ПОЖЕЛАНИЯ / ИГРЫ ДЛЯ ПРЕДУСТАНОВКИ:
              </label>
              <textarea
                rows="2"
                placeholder="Например: обновите CS2 перед моим приходом, подготовьте холодный Monster Energy..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="cyber-input"
                style={{ resize: 'none' }}
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold"
                style={{
                  width: '100%',
                  padding: '18px',
                  fontSize: '1.05rem',
                  letterSpacing: '0.08em',
                  cursor: isSubmitting ? 'wait' : 'pointer',
                  opacity: isSubmitting ? 0.8 : 1
                }}
              >
                <SparklesIcon className="w-5 h-5" />
                <span>{isSubmitting ? 'ФОРМИРОВАНИЕ БРОНИРОВАНИЯ...' : 'ПОДТВЕРДИТЬ БРОНИРОВАНИЕ'}</span>
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '14px' }}>
                Нажимая кнопку, вы подтверждаете бронь. Оплата производится на ресепшене клуба при визите.
              </div>
            </div>

          </form>
        </div>

      </div>

      {/* Luxury E-Ticket Confirmation Modal */}
      {ticketModal && (
        <div className="modal-backdrop" onClick={() => setTicketModal(null)}>
          <div
            className="cyber-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '520px',
              width: '100%',
              background: 'linear-gradient(145deg, #0E121B 0%, #07090E 100%)',
              border: '2px solid var(--gold-400)',
              borderRadius: '20px',
              padding: '36px',
              boxShadow: '0 0 50px rgba(212, 175, 55, 0.35)',
              position: 'relative'
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setTicketModal(null)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                color: '#FFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CloseIcon className="w-5 h-5" />
            </button>

            {/* Ticket Header */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '2px solid #10B981',
                  color: '#34D399',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto',
                  boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)'
                }}
              >
                <CheckCircleIcon className="w-9 h-9" />
              </div>

              <span className="badge-gold" style={{ marginBottom: '8px' }}>
                БРОНИРОВАНИЕ УСПЕШНО ОФОРМЛЕНО!
              </span>

              <h3 className="font-orbitron gold-gradient-text" style={{ fontSize: '1.6rem', fontWeight: 900, marginTop: '6px' }}>
                EMPIRE CYBER PASS
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Код бронирования: <strong style={{ color: '#FFE259' }}>{ticketModal.bookingCode}</strong>
              </p>
            </div>

            {/* Ticket Details Box with perforated edge illusion */}
            <div
              style={{
                background: 'rgba(18, 22, 33, 0.85)',
                border: '1px dashed rgba(212, 175, 55, 0.4)',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', fontSize: '0.88rem' }}>
                <div>
                  <span style={{ color: 'var(--text-dim)', display: 'block', fontSize: '0.75rem' }}>ГОСТЬ:</span>
                  <strong style={{ color: '#FFF' }}>{ticketModal.name} ({ticketModal.nick})</strong>
                </div>

                <div>
                  <span style={{ color: 'var(--text-dim)', display: 'block', fontSize: '0.75rem' }}>МЕСТО:</span>
                  <strong style={{ color: 'var(--gold-400)' }}>ПК #{ticketModal.pc}</strong>
                </div>

                <div>
                  <span style={{ color: 'var(--text-dim)', display: 'block', fontSize: '0.75rem' }}>ДАТА И ВРЕМЯ:</span>
                  <strong style={{ color: '#FFF' }}>{ticketModal.date} в {ticketModal.time}</strong>
                </div>

                <div>
                  <span style={{ color: 'var(--text-dim)', display: 'block', fontSize: '0.75rem' }}>ЗОНА:</span>
                  <strong style={{ color: '#FFF' }}>{ticketModal.zoneName}</strong>
                </div>

                <div>
                  <span style={{ color: 'var(--text-dim)', display: 'block', fontSize: '0.75rem' }}>ТАРИФ:</span>
                  <strong style={{ color: '#FFF' }}>{ticketModal.tariffName}</strong>
                </div>

                <div>
                  <span style={{ color: 'var(--text-dim)', display: 'block', fontSize: '0.75rem' }}>ИТОГО К ОПЛАТЕ:</span>
                  <strong style={{ color: 'var(--gold-400)', fontSize: '1.1rem' }}>{ticketModal.price} ₽</strong>
                </div>
              </div>

              {/* Fake QR Code */}
              <div
                style={{
                  marginTop: '18px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                  Предъявите этот билет или номер телефона администратору на стойке ресепшн.
                </div>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    background: '#FFFFFF',
                    padding: '4px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <svg viewBox="0 0 24 24" style={{ width: '100%', height: '100%', color: '#000' }}>
                    <rect x="2" y="2" width="8" height="8" fill="#000" />
                    <rect x="14" y="2" width="8" height="8" fill="#000" />
                    <rect x="2" y="14" width="8" height="8" fill="#000" />
                    <rect x="4" y="4" width="4" height="4" fill="#FFF" />
                    <rect x="16" y="4" width="4" height="4" fill="#FFF" />
                    <rect x="4" y="16" width="4" height="4" fill="#FFF" />
                    <rect x="12" y="12" width="3" height="3" fill="#000" />
                    <rect x="18" y="12" width="4" height="4" fill="#000" />
                    <rect x="12" y="18" width="4" height="4" fill="#000" />
                    <rect x="19" y="19" width="3" height="3" fill="#000" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => {
                  alert(`Билет ${ticketModal.bookingCode} сохранен на ваше устройство! Ждем вас в EMPIRE!`);
                  setTicketModal(null);
                }}
                className="btn-gold"
                style={{ flex: 1, padding: '14px' }}
              >
                СОХРАНИТЬ БИЛЕТ
              </button>

              <button
                onClick={() => setTicketModal(null)}
                className="btn-outline-gold"
                style={{ padding: '14px 20px' }}
              >
                ЗАКРЫТЬ
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
