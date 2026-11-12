import React, { useState } from 'react';
import { FAQ_ITEMS, REVIEWS } from '../data/clubData';
import { SparklesIcon, ChevronDownIcon, StarIcon, ShieldIcon } from './Icons';

export const ReviewsAndFaq = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <section id="faq" className="section-padding" style={{ position: 'relative' }}>
      
      {/* Background radial */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container-custom">
        
        {/* Reviews Section */}
        <div style={{ marginBottom: '90px' }}>
          <div className="section-header">
            <div className="section-tag">
              <StarIcon className="w-4 h-4 text-amber-400" />
              <span>ОТЗЫВЫ ГОСТЕЙ</span>
            </div>
            <h2 className="section-title">
              ЧТО ГОВОРЯТ <span className="gold-gradient-text">КИБЕРСПОРТСМЕНЫ</span>
            </h2>
            <p className="section-desc">
              В клубе EMPIRE тренируются про-игроки, топовые стримеры и любители бескомпромиссного качества.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '24px'
            }}
          >
            {REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="cyber-card"
                style={{
                  padding: '30px 24px',
                  background: 'rgba(16, 20, 30, 0.85)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '4px', color: '#FFE259', marginBottom: '16px' }}>
                    {Array.from({ length: rev.rating }).map((_, sIdx) => (
                      <StarIcon key={sIdx} className="w-4 h-4" />
                    ))}
                  </div>

                  <p style={{ color: '#E5E7EB', fontSize: '0.92rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '24px' }}>
                    «{rev.text}»
                  </p>
                </div>

                {/* Author Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '16px' }}>
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '1.5px solid var(--gold-400)'
                    }}
                  />
                  <div>
                    <div className="font-orbitron" style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFF' }}>
                      {rev.name}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--gold-400)' }}>
                      {rev.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <div className="section-header">
            <div className="section-tag">
              <SparklesIcon className="w-4 h-4" />
              <span>ВОПРОСЫ И ОТВЕТЫ</span>
            </div>
            <h2 className="section-title">
              ЧАСТО ЗАДАВАЕМЫЕ <span className="gold-gradient-text">ВОПРОСЫ</span>
            </h2>
            <p className="section-desc">
              Все, что нужно знать перед визитом в компьютерный клуб EMPIRE
            </p>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="cyber-card"
                  style={{
                    background: isOpen ? 'rgba(20, 24, 35, 0.95)' : 'rgba(14, 17, 25, 0.75)',
                    border: isOpen ? '1px solid var(--gold-400)' : '1px solid rgba(212, 175, 55, 0.18)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      background: 'transparent',
                      border: 'none',
                      color: '#FFFFFF',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    <span style={{ color: isOpen ? 'var(--gold-400)' : '#FFF' }}>
                      {item.q}
                    </span>
                    <div
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        color: 'var(--gold-400)',
                        flexShrink: 0
                      }}
                    >
                      <ChevronDownIcon className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 24px 20px 24px',
                        color: 'var(--text-muted)',
                        fontSize: '0.92rem',
                        lineHeight: 1.6,
                        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                        paddingTop: '14px'
                      }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
