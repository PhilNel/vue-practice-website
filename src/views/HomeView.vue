<script setup lang="ts">
// Simple landing page - no complex logic needed yet
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              <span class="highlight">SKIN THERAPY</span>
              <span class="subtitle">inside and out</span>
            </h1>
            <p class="hero-tagline">
              Perfection in practice / Excellence in therapy
            </p>
            <p class="hero-description">
              With almost two decades laser therapy and skin care experience, with <strong>Dr. Len Nel</strong> (Dermatologist) on hand, we offer the full spectrum of anti-ageing treatments.
            </p>
            <div class="hero-actions">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Treatments Overview -->
    <section class="treatments-overview">
      <div class="container">
        <div class="section-header">
          <h2>OUR TREATMENTS</h2>
          <p>We only use therapies we believe in, signature therapies, that are cutting-edge technology, in the search for your skin's natural balance and anti ageing rejuvenation.</p>
        </div>
        <div class="treatments-grid">
          <div class="treatment-card">
            <h3>Facial Cosmetics</h3>
            <p>Professional facial treatments for skin rejuvenation</p>
          </div>
          <div class="treatment-card">
            <h3>Botox and Fillers</h3>
            <p>Expert anti-aging injectable treatments</p>
          </div>
          <div class="treatment-card">
            <h3>Chemical Peels</h3>
            <p>Advanced skin resurfacing treatments</p>
          </div>
          <div class="treatment-card">
            <h3>State of the Art Lasers</h3>
            <p>Cutting-edge laser therapy solutions</p>
          </div>
          <div class="treatment-card">
            <h3>Pearl Fractional</h3>
            <p>Advanced fractional laser treatments</p>
          </div>
          <div class="treatment-card">
            <h3>Hair Removal</h3>
            <p>Professional laser hair removal services</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Therapists -->
    <section class="therapists">
      <div class="container">
        <div class="section-header">
          <h2>OUR THERAPISTS</h2>
          <p>You're in the confident hands of our professional team.</p>
          <p>We are proud of our exceptionally effective skin rejuvenation treatments, due to the combination of our hi tech lasers and medical professionalism.</p>
        </div>
        <div class="therapists-list">
          <p><strong>Our Therapists:</strong> Tanya Gafney, Mandy Pretorius, Dawn Frost and Nicola Waller</p>
        </div>
      </div>
    </section>

    <!-- Monthly Specials CTA -->
    <section class="specials-cta">
      <div class="container">
        <div class="cta-content">
          <h2>MONTHLY Specials</h2>
          <p>A little luxury for all your senses. See our specials page for what's in store for your skin this season.</p>
          <button class="btn btn-secondary btn-lg">
            View Specials
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section */
.hero {
  background: linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-white) 100%);
  padding: var(--space-20) 0 var(--space-24) 0;
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  margin-bottom: var(--space-6);
}

.hero-title .highlight {
  display: block;
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  color: var(--color-primary);
  letter-spacing: 0.05em;
  margin-bottom: var(--space-2);
}

.hero-title .subtitle {
  display: block;
  font-size: var(--text-2xl);
  font-weight: var(--font-light);
  color: var(--color-gray-700);
  font-style: italic;
}

.hero-tagline {
  font-size: var(--text-lg);
  color: var(--color-gray-600);
  margin-bottom: var(--space-6);
  font-weight: var(--font-medium);
}

.hero-description {
  font-size: var(--text-base);
  color: var(--color-gray-600);
  margin-bottom: var(--space-8);
  line-height: var(--leading-relaxed);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  justify-content: center;
}

/* Treatments Overview */
.treatments-overview {
  padding: var(--space-20) 0;
  background-color: var(--color-white);
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.section-header h2 {
  font-size: var(--text-3xl);
  color: var(--color-gray-900);
  margin-bottom: var(--space-6);
  font-weight: var(--font-semibold);
  letter-spacing: 0.02em;
}

.section-header p {
  font-size: var(--text-base);
  color: var(--color-gray-600);
  max-width: 700px;
  margin: 0 auto var(--space-4);
  line-height: var(--leading-relaxed);
}

.treatments-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
  max-width: 800px;
  margin: 0 auto;
}

.treatment-card {
  text-align: center;
  padding: var(--space-6);
  background-color: var(--color-gray-50);
  border-radius: var(--radius-lg);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.treatment-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.treatment-card h3 {
  font-size: var(--text-lg);
  color: var(--color-primary);
  margin-bottom: var(--space-3);
  font-weight: var(--font-semibold);
}

.treatment-card p {
  color: var(--color-gray-600);
  font-size: var(--text-sm);
  margin: 0;
}

/* Therapists Section */
.therapists {
  padding: var(--space-20) 0;
  background-color: var(--color-gray-50);
}

.therapists-list {
  text-align: center;
  margin-top: var(--space-8);
}

.therapists-list p {
  font-size: var(--text-base);
  color: var(--color-gray-700);
  max-width: 600px;
  margin: 0 auto;
}

/* Specials CTA */
.specials-cta {
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%);
  padding: var(--space-20) 0;
  color: var(--color-white);
}

.cta-content {
  text-align: center;
}

.specials-cta h2 {
  font-size: var(--text-3xl);
  margin-bottom: var(--space-4);
  color: var(--color-white);
  font-weight: var(--font-semibold);
}

.specials-cta p {
  font-size: var(--text-base);
  margin-bottom: var(--space-8);
  color: var(--color-white);
  opacity: 0.95;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-3) var(--space-6);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  min-width: 160px;
}

.btn-lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-lg);
  min-width: 200px;
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background-color: var(--color-white);
  color: var(--color-secondary);
  border: 2px solid var(--color-white);
}

.btn-secondary:hover {
  background-color: transparent;
  color: var(--color-white);
  border-color: var(--color-white);
}

/* Responsive Design */
@media (min-width: 640px) {
  .treatments-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .hero-title .highlight {
    font-size: var(--text-5xl);
  }
  
  .hero-title .subtitle {
    font-size: var(--text-3xl);
  }
  
  .treatments-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .hero-title .highlight {
    font-size: 4rem;
  }
}
</style>
