"use client";

import { useMemo, useState } from 'react';

const services = [
  { id: 'swedish', nameAr: 'مساج السويدية', nameEn: 'Swedish Massage', duration: '60 دقيقة', price: '220 ر.س' },
  { id: 'deep', nameAr: 'مساج عميق', nameEn: 'Deep Tissue', duration: '75 دقيقة', price: '280 ر.س' },
  { id: 'relax', nameAr: 'استرخاء كامل', nameEn: 'Full Relaxation', duration: '90 دقيقة', price: '340 ر.س' },
  { id: 'couple', nameAr: 'مساج زوجي', nameEn: 'Couples Massage', duration: '60 دقيقة', price: '390 ر.س' },
];

const therapists = [
  { id: 'sara', nameAr: 'سارة', nameEn: 'Sara', specialtyAr: 'إسترخاء وشفاء', specialtyEn: 'Relaxation & Recovery' },
  { id: 'omar', nameAr: 'عمر', nameEn: 'Omar', specialtyAr: 'تخفيف التوتر', specialtyEn: 'Stress Relief' },
  { id: 'nora', nameAr: 'نورا', nameEn: 'Nora', specialtyAr: 'مساجات عميقة', specialtyEn: 'Deep Therapy' },
];

const slots = ['09:00', '10:30', '12:00', '14:00', '16:30', '18:00', '19:30'];

const translations = {
  ar: {
    navHome: 'الرئيسية',
    navBooking: 'الحجز',
    navAdmin: 'لوحة الإدارة',
    lang: 'English',
    heroTitle: 'استمتع بتجربة استرخاء فاخرة في كاندل اسبا',
    heroText: 'احجز جلسة مخصصة لك أو لكِ مع أفضل الخبراء في المركز، في بيئة هادئة وراقية.',
    bookingNow: 'احجز الآن',
    whyTitle: 'لماذا نحن؟',
    why1: 'معالجون محترفون',
    why2: 'إعدادات هادئة',
    why3: 'مواعيد مرنة',
    servicesTitle: 'خدماتنا',
    therapistsTitle: 'معالجونا',
    bookingTitle: 'احجز موعدك',
    formName: 'الاسم',
    formEmail: 'البريد الإلكتروني',
    formService: 'نوع الخدمة',
    formTherapist: 'المعالج',
    formDate: 'تاريخ الحجز',
    formTime: 'الوقت',
    submit: 'تأكيد الحجز',
    success: 'تم استلام الحجز بنجاح',
    summaryTitle: 'ملخص الحجز',
    summaryText: 'سيتم التواصل معك خلال 15 دقيقة لتأكيد الموعد.',
    aboutTitle: 'من نحن',
    aboutText: 'مركز كاندل اسبا يقدم خدمات المساج والعناية الذاتية بتصميم أنيق وتجربة مريحة.',
    testimonialsTitle: 'آراء العملاء',
    adminTitle: 'لوحة إدارة المواعيد',
    adminText: 'عرض المواعيد القادمة والإدارة السريعة.',
    statusPending: 'قيد الانتظار',
    statusConfirmed: 'مؤكد',
    statusDone: 'مكتمل',
    noBookings: 'لا توجد مواعيد حاليا',
    homeButton: 'العودة للرئيسية',
  },
  en: {
    navHome: 'Home',
    navBooking: 'Booking',
    navAdmin: 'Admin',
    lang: 'العربية',
    heroTitle: 'Enjoy a luxurious relaxation experience at Candel Spa',
    heroText: 'Book a customized session with our expert therapists in a peaceful and premium environment.',
    bookingNow: 'Book Now',
    whyTitle: 'Why Choose Us?',
    why1: 'Professional Therapists',
    why2: 'Calm and Premium Atmosphere',
    why3: 'Flexible Timings',
    servicesTitle: 'Our Services',
    therapistsTitle: 'Our Therapists',
    bookingTitle: 'Book Your Appointment',
    formName: 'Name',
    formEmail: 'Email',
    formService: 'Service',
    formTherapist: 'Therapist',
    formDate: 'Appointment Date',
    formTime: 'Time',
    submit: 'Confirm Booking',
    success: 'Booking received successfully',
    summaryTitle: 'Booking Summary',
    summaryText: 'We will contact you within 15 minutes to confirm your appointment.',
    aboutTitle: 'About Us',
    aboutText: 'Candel Spa offers massage and self-care services in a refined atmosphere with comfort-first care.',
    testimonialsTitle: 'Client Reviews',
    adminTitle: 'Appointment Dashboard',
    adminText: 'Track upcoming bookings and manage them efficiently.',
    statusPending: 'Pending',
    statusConfirmed: 'Confirmed',
    statusDone: 'Completed',
    noBookings: 'No bookings yet',
    homeButton: 'Back to Home',
  },
};

const sampleBookings = [
  { id: 1, name: 'أحمد', email: 'ahmed@example.com', service: 'Deep Tissue', therapist: 'Omar', date: '2026-10-15', time: '10:30', status: 'confirmed' },
  { id: 2, name: 'سارة', email: 'sara@example.com', service: 'Full Relaxation', therapist: 'Nora', date: '2026-10-17', time: '18:00', status: 'pending' },
];

export default function HomePage() {
  const [language, setLanguage] = useState('ar');
  const [bookings, setBookings] = useState(sampleBookings);
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: services[0].id,
    therapist: therapists[0].id,
    date: '',
    time: slots[0],
  });
  const [submitted, setSubmitted] = useState(false);

  const t = translations[language];
  const selectedService = services.find((item) => item.id === form.service) ?? services[0];
  const selectedTherapist = therapists.find((item) => item.id === form.therapist) ?? therapists[0];

  const bookingSummary = useMemo(
    () => ({
      service: language === 'ar' ? selectedService.nameAr : selectedService.nameEn,
      therapist: language === 'ar' ? selectedTherapist.nameAr : selectedTherapist.nameEn,
      date: form.date || '—',
      time: form.time,
    }),
    [form.date, form.time, language, selectedService, selectedTherapist]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBooking = {
      id: Date.now(),
      name: form.name || 'Guest',
      email: form.email || 'guest@example.com',
      service: selectedService.nameEn,
      therapist: selectedTherapist.nameEn,
      date: form.date,
      time: form.time,
      status: 'pending',
    };

    setBookings((prev) => [newBooking, ...prev]);
    setSubmitted(true);
    setForm({
      name: '',
      email: '',
      service: services[0].id,
      therapist: therapists[0].id,
      date: '',
      time: slots[0],
    });
  };

  return (
    <main className="page-shell" style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-logo">C</div>
          <div>
            <p className="brand-name">Candel Spa</p>
            <span className="brand-sub">Wellness & Massage</span>
          </div>
        </div>

        <nav className="nav">
          <a href="#home">{t.navHome}</a>
          <a href="#booking">{t.navBooking}</a>
          <a href="/admin">{t.navAdmin}</a>
        </nav>

        <button className="language-switch" onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}>
          {t.lang}
        </button>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <span className="tag">Candel Spa</span>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>
          <div className="hero-actions">
            <a href="#booking" className="primary-btn">{t.bookingNow}</a>
            <a href="/admin" className="secondary-btn">{t.navAdmin}</a>
          </div>
          <div className="benefits-row">
            {['why1', 'why2', 'why3'].map((key) => (
              <div key={key} className="benefit-item">
                <span>✓</span>
                <p>{t[key]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-card">
          <div className="mini-card top-card">
            <p>90+</p>
            <span>Happy Guests</span>
          </div>
          <div className="mini-card center-card">
            <p>4.9/5</p>
            <span>Client Rating</span>
          </div>
          <div className="mini-card bottom-card">
            <p>Open Daily</p>
            <span>9:00 AM - 10:00 PM</span>
          </div>
        </div>
      </section>

      <section className="content-block">
        <div className="section-heading">
          <span className="eyebrow">{t.servicesTitle}</span>
          <h2>{t.servicesTitle}</h2>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article key={service.id} className="service-card">
              <div className="card-icon">✦</div>
              <h3>{language === 'ar' ? service.nameAr : service.nameEn}</h3>
              <p>{service.duration}</p>
              <strong>{service.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="content-block alt-bg">
        <div className="section-heading">
          <span className="eyebrow">{t.therapistsTitle}</span>
          <h2>{t.therapistsTitle}</h2>
        </div>

        <div className="therapist-grid">
          {therapists.map((therapist) => (
            <div key={therapist.id} className="therapist-card">
              <div className="avatar">{therapist.nameEn.charAt(0)}</div>
              <h3>{language === 'ar' ? therapist.nameAr : therapist.nameEn}</h3>
              <p>{language === 'ar' ? therapist.specialtyAr : therapist.specialtyEn}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="booking" className="booking-section">
        <div className="booking-panel">
          <div className="booking-copy">
            <span className="eyebrow">{t.bookingTitle}</span>
            <h2>{t.bookingTitle}</h2>
            <p>{t.summaryText}</p>
            <ul>
              <li>{bookingSummary.service}</li>
              <li>{bookingSummary.therapist}</li>
              <li>{bookingSummary.date} • {bookingSummary.time}</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="booking-form">
            <div className="field-row">
              <label>
                <span>{t.formName}</span>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder={language === 'ar' ? 'اكتب اسمك' : 'Your name'} required />
              </label>
              <label>
                <span>{t.formEmail}</span>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="name@example.com" required />
              </label>
            </div>

            <div className="field-row">
              <label>
                <span>{t.formService}</span>
                <select name="service" value={form.service} onChange={handleChange}>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>{language === 'ar' ? service.nameAr : service.nameEn}</option>
                  ))}
                </select>
              </label>

              <label>
                <span>{t.formTherapist}</span>
                <select name="therapist" value={form.therapist} onChange={handleChange}>
                  {therapists.map((therapist) => (
                    <option key={therapist.id} value={therapist.id}>{language === 'ar' ? therapist.nameAr : therapist.nameEn}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="field-row">
              <label>
                <span>{t.formDate}</span>
                <input type="date" name="date" value={form.date} onChange={handleChange} required />
              </label>

              <label>
                <span>{t.formTime}</span>
                <select name="time" value={form.time} onChange={handleChange}>
                  {slots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </label>
            </div>

            <button type="submit" className="primary-btn full-width">{t.submit}</button>
            {submitted && <div className="success-box">{t.success}</div>}
          </form>
        </div>
      </section>

      <section className="content-block testimonials-block">
        <div className="section-heading">
          <span className="eyebrow">{t.testimonialsTitle}</span>
          <h2>{t.testimonialsTitle}</h2>
        </div>

        <div className="testimonial-grid">
          <blockquote>
            "أفضل تجربة استرخاء في المدينة. الجو رائع والمعالج محترف جدًا."
          </blockquote>
          <blockquote>
            "The spa experience was calm, luxurious, and beautifully organized. We will come back."
          </blockquote>
        </div>
      </section>

      <section className="content-block about-block">
        <div className="section-heading">
          <span className="eyebrow">{t.aboutTitle}</span>
          <h2>{t.aboutTitle}</h2>
        </div>
        <p>{t.aboutText}</p>
      </section>
    </main>
  );
}
