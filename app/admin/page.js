"use client";

import { useMemo, useState } from 'react';

const initialBookings = [
  { id: 1, name: 'أحمد', email: 'ahmed@example.com', service: 'Deep Tissue', therapist: 'Omar', date: '2026-10-15', time: '10:30', status: 'confirmed' },
  { id: 2, name: 'سارة', email: 'sara@example.com', service: 'Full Relaxation', therapist: 'Nora', date: '2026-10-17', time: '18:00', status: 'pending' },
  { id: 3, name: 'محمود', email: 'mohamed@example.com', service: 'Swedish Massage', therapist: 'Sara', date: '2026-10-18', time: '16:30', status: 'done' },
];

const statusLabels = {
  ar: {
    pending: 'قيد الانتظار',
    confirmed: 'مؤكد',
    done: 'مكتمل',
  },
  en: {
    pending: 'Pending',
    confirmed: 'Confirmed',
    done: 'Completed',
  },
};

export default function AdminPage() {
  const [language, setLanguage] = useState('ar');
  const [bookings, setBookings] = useState(initialBookings);

  const t = statusLabels[language];

  const stats = useMemo(() => ({
    pending: bookings.filter((item) => item.status === 'pending').length,
    confirmed: bookings.filter((item) => item.status === 'confirmed').length,
    done: bookings.filter((item) => item.status === 'done').length,
  }), [bookings]);

  const updateStatus = (id, nextStatus) => {
    setBookings((prev) =>
      prev.map((booking) => (booking.id === id ? { ...booking, status: nextStatus } : booking))
    );
  };

  return (
    <main className="admin-shell" style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
      <header className="admin-header">
        <div>
          <span className="eyebrow">Candel Spa</span>
          <h1>{language === 'ar' ? 'لوحة إدارة المواعيد' : 'Appointment Dashboard'}</h1>
        </div>

        <div className="header-actions">
          <button className="language-switch" onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}>
            {language === 'ar' ? 'English' : 'العربية'}
          </button>
          <a href="/" className="secondary-btn">{language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}</a>
        </div>
      </header>

      <section className="stats-grid">
        <div className="stat-box">
          <span>{language === 'ar' ? 'قيد الانتظار' : 'Pending'}</span>
          <strong>{stats.pending}</strong>
        </div>
        <div className="stat-box accent">
          <span>{language === 'ar' ? 'مؤكد' : 'Confirmed'}</span>
          <strong>{stats.confirmed}</strong>
        </div>
        <div className="stat-box">
          <span>{language === 'ar' ? 'مكتمل' : 'Completed'}</span>
          <strong>{stats.done}</strong>
        </div>
      </section>

      <section className="table-panel">
        <table>
          <thead>
            <tr>
              <th>{language === 'ar' ? 'الاسم' : 'Name'}</th>
              <th>{language === 'ar' ? 'الخدمة' : 'Service'}</th>
              <th>{language === 'ar' ? 'المعالج' : 'Therapist'}</th>
              <th>{language === 'ar' ? 'التاريخ' : 'Date'}</th>
              <th>{language === 'ar' ? 'الوقت' : 'Time'}</th>
              <th>{language === 'ar' ? 'الحالة' : 'Status'}</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.name}</td>
                <td>{booking.service}</td>
                <td>{booking.therapist}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>
                  <select value={booking.status} onChange={(event) => updateStatus(booking.id, event.target.value)}>
                    <option value="pending">{t.pending}</option>
                    <option value="confirmed">{t.confirmed}</option>
                    <option value="done">{t.done}</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
