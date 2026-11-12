import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/clubData';
import { SparklesIcon, CloseIcon, ArrowRightIcon } from './Icons';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'Все локации' },
    { id: 'arena', label: 'Главный зал' },
    { id: 'vip', label: 'VIP-комнаты' },
    { id: 'bootcamp', label: 'Bootcamp' },
    { id: 'lounge', label: 'Лаундж & Бар' },
    { id: 'hardware', label: 'Кастомные ПК' }
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="section-padding" style={{ position: 'relative' }}>
      
      {/* Background Accent */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container-custom">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <SparklesIcon className="w-4 h-4" />
            <span>АТМОСФЕРА КИБЕРСПОРТА</span>
          </div>
          <h2 className="section-title">
            ГАЛЕРЕЯ <span className="gold-gradient-text">ИГРОВОГО ЗАЛА</span>
          </h2>
          <p className="section-desc">
            Взгляните на футуристические интерьеры клуба EMPIRE: изолированные VIP-комнаты с акустической отделкой, 
            турнирные зоны Bootcamp и зону отдыха с PlayStation 5.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '40px'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '10px 20px',
                borderRadius: '8px',
                fontFamily: 'var(--font-tech)',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                border: activeCategory === cat.id ? '1px solid var(--gold-400)' : '1px solid rgba(255, 255, 255, 0.1)',
                background: activeCategory === cat.id ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.3) 0%, rgba(18, 22, 33, 0.9) 100%)' : 'rgba(18, 21, 31, 0.6)',
                color: activeCategory === cat.id ? '#FFE259' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="cyber-card"
              style={{
                height: '280px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                border: '1px solid rgba(212, 175, 55, 0.2)'
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  display: 'block'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(7, 8, 11, 0.95) 0%, rgba(7, 8, 11, 0.2) 50%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '20px',
                  transition: 'background 0.3s'
                }}
              >
                <div style={{ display: 'inline-block', marginBottom: '6px' }}>
                  <span className="badge-gold" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
                    {item.categoryName}
                  </span>
                </div>

                <h4 className="font-orbitron" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF', marginBottom: '4px' }}>
                  {item.title}
                </h4>

                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="modal-backdrop" onClick={closeLightbox}>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '900px',
              width: '100%',
              background: '#0B0D14',
              borderRadius: '16px',
              border: '2px solid var(--gold-500)',
              overflow: 'hidden',
              boxShadow: '0 0 50px rgba(212, 175, 55, 0.35)',
              position: 'relative'
            }}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(0, 0, 0, 0.75)',
                border: '1px solid var(--gold-400)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: '#FFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}
            >
              <CloseIcon className="w-6 h-6" />
            </button>

            {/* Prev Image Button */}
            <button
              onClick={prevImage}
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.7)',
                border: '1px solid var(--gold-400)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                color: 'var(--gold-400)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                fontSize: '1.2rem',
                fontWeight: 900
              }}
            >
              ❮
            </button>

            {/* Next Image Button */}
            <button
              onClick={nextImage}
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.7)',
                border: '1px solid var(--gold-400)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                color: 'var(--gold-400)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                fontSize: '1.2rem',
                fontWeight: 900
              }}
            >
              ❯
            </button>

            {/* Image */}
            <div style={{ maxHeight: '65vh', overflow: 'hidden', background: '#000' }}>
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '65vh',
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto'
                }}
              />
            </div>

            {/* Lightbox details caption */}
            <div style={{ padding: '24px 30px', background: '#0E111A', borderTop: '1px solid rgba(212, 175, 55, 0.25)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className="badge-gold">
                  {filteredItems[lightboxIndex].categoryName}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontFamily: 'var(--font-tech)' }}>
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
              
              <h3 className="font-orbitron" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFF', marginBottom: '6px' }}>
                {filteredItems[lightboxIndex].title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                {filteredItems[lightboxIndex].desc}
              </p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
