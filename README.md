html {
  scroll-behavior: smooth;
}

:root {
  --bg: #f5efe8;
  --panel: #fffaf5;
  --primary: #7e5c48;
  --primary-dark: #52382d;
  --accent: #d7b89e;
  --text: #2a1f1e;
  --muted: #6d5a52;
  --success: #2d7d56;
  --shadow: 0 18px 40px rgba(76, 52, 41, 0.12);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(180deg, #f7f2ec 0%, #f9f5f1 100%);
  color: var(--text);
}

a {
  text-decoration: none;
}

button,
input,
select {
  font: inherit;
}

.page-shell,
.admin-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 28px 24px 60px;
}

.topbar,
.admin-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 22px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(126, 92, 72, 0.08);
  box-shadow: var(--shadow);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  position: sticky;
  top: 18px;
  z-index: 2;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-logo {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary), #a67962);
  color: #fff;
  font-weight: 700;
  font-size: 1.4rem;
}

.brand-name {
  margin: 0;
  font-weight: 700;
  font-size: 1.08rem;
}

.brand-sub {
  color: var(--muted);
  font-size: 0.73rem;
}

.nav {
  display: flex;
  align-items: center;
  gap: 18px;
}

.nav a {
  color: var(--text);
  font-weight: 600;
}

.language-switch,
.primary-btn,
.secondary-btn {
  border: none;
  border-radius: 999px;
  padding: 11px 18px;
  font-weight: 700;
  transition: 0.2s ease;
  cursor: pointer;
}

.language-switch,
.secondary-btn {
  background: #f4e7de;
  color: var(--primary-dark);
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), #a97d66);
  color: #fff;
  box-shadow: 0 10px 24px rgba(126, 92, 72, 0.24);
}

.primary-btn:hover,
.secondary-btn:hover,
.language-switch:hover {
  transform: translateY(-1px);
}

.hero-section {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 30px;
  align-items: center;
  padding: 52px 0 30px;
}

.hero-copy h1 {
  font-size: clamp(2.6rem, 5vw, 4.4rem);
  line-height: 1.05;
  margin: 18px 0;
}

.hero-copy p {
  max-width: 650px;
  font-size: 1.08rem;
  color: var(--muted);
  line-height: 1.8;
}

.tag,
.eyebrow {
  display: inline-block;
  background: #f0e3d8;
  color: var(--primary);
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-actions {
  display: flex;
  gap: 14px;
  margin-top: 24px;
  flex-wrap: wrap;
}

.benefits-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 30px;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(126, 92, 72, 0.08);
  border-radius: 14px;
  padding: 12px 14px;
  min-width: 170px;
}

.benefit-item span {
  width: 26px;
  height: 26px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: var(--accent);
  color: var(--primary-dark);
  font-weight: 700;
}

.hero-card {
  min-height: 460px;
  background: linear-gradient(160deg, rgba(126, 92, 72, 0.96), rgba(175, 141, 115, 0.9));
  border-radius: 32px;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.mini-card {
  position: absolute;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 22px;
  color: #fff;
  padding: 18px 20px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.1);
}

.mini-card p {
  margin: 0;
  font-size: 1.7rem;
  font-weight: 700;
}

.mini-card span {
  display: block;
  margin-top: 6px;
  color: rgba(255,255,255,0.82);
}

.top-card { top: 56px; left: 42px; }
.center-card { top: 180px; right: 42px; }
.bottom-card { bottom: 48px; left: 68px; }

.content-block {
  padding: 54px 0 12px;
}

.section-heading {
  margin-bottom: 24px;
}

.section-heading h2 {
  margin: 12px 0 0;
  font-size: clamp(2rem, 4vw, 3rem);
}

.service-grid,
.therapist-grid,
.testimonial-grid,
.stats-grid {
  display: grid;
  gap: 22px;
}

.service-grid {
  grid-template-columns: repeat(4, minmax(180px, 1fr));
}

.service-card,
.therapist-card,
.stat-box,
.table-panel,
.booking-panel {
  background: rgba(255,255,255,0.7);
  border: 1px solid rgba(126, 92, 72, 0.08);
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.service-card {
  padding: 24px 20px;
}

.card-icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: linear-gradient(135deg, #f2dbca, #f7e9e3);
  color: var(--primary-dark);
  font-size: 1.3rem;
}

.service-card h3,
.therapist-card h3 {
  margin: 18px 0 8px;
}

.service-card p,
.therapist-card p,
.about-block p,
.booking-copy p,
.booking-copy li {
  color: var(--muted);
}

.service-card strong {
  display: block;
  margin-top: 12px;
  color: var(--primary);
  font-size: 1.1rem;
}

.alt-bg { background: rgba(255,255,255,0.2); }

.therapist-grid { grid-template-columns: repeat(3, minmax(200px, 1fr)); }

.therapist-card {
  padding: 26px 20px;
  text-align: center;
}

.avatar {
  width: 90px;
  height: 90px;
  margin: 0 auto 14px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  display: grid;
  place-items: center;
  font-size: 2rem;
  color: #fff;
  font-weight: 700;
}

.booking-section {
  padding-top: 30px;
}

.booking-panel {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 24px;
  align-items: start;
  padding: 26px;
}

.booking-copy ul {
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
}

.booking-form {
  display: grid;
  gap: 18px;
}

.field-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--text);
  font-weight: 600;
}

input,
select {
  background: #f6efe8;
  border: 1px solid rgba(126, 92, 72, 0.12);
  border-radius: 12px;
  padding: 12px 14px;
  color: var(--text);
}

.full-width {
  width: 100%;
}

.success-box {
  background: rgba(45, 125, 86, 0.12);
  color: var(--success);
  border: 1px solid rgba(45,125,86,0.13);
  border-radius: 12px;
  padding: 12px 14px;
  font-weight: 600;
}

.testimonial-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.testimonial-grid blockquote {
  margin: 0;
  background: rgba(255,255,255,0.7);
  border-radius: 20px;
  padding: 22px 20px;
  color: var(--muted);
  border: 1px solid rgba(126, 92, 72, 0.08);
  box-shadow: var(--shadow);
}

.admin-shell {
  display: grid;
  gap: 24px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.stats-grid {
  grid-template-columns: repeat(3, minmax(160px, 1fr));
}

.stat-box {
  padding: 22px 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-box strong {
  font-size: 2rem;
}

.stat-box.accent {
  background: linear-gradient(135deg, rgba(126,92,72,0.96), rgba(175,141,115,0.9));
  color: #fff;
}

.table-panel {
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 16px 14px;
  border-bottom: 1px solid rgba(126,92,72,0.08);
  text-align: start;
}

th {
  background: rgba(126,92,72,0.04);
}

select {
  min-width: 140px;
}

@media (max-width: 860px) {
  .hero-section,
  .booking-panel,
  .service-grid,
  .therapist-grid,
  .testimonial-grid,
  .stats-grid,
  .field-row {
    grid-template-columns: 1fr;
  }

  .topbar,
  .admin-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav {
    flex-wrap: wrap;
  }

  .hero-card {
    min-height: 320px;
  }
}
