<template>
    <section class="therapists">
        <div class="container">
            <div class="section-header">
                <h2>THERAPISTS</h2>
                <p>You're in the confident hands of our professional team.</p>
                <p>We are proud of our exceptionally effective skin rejuvenation treatments, due to the combination of
                    our hi tech lasers and medical professionalism.</p>
            </div>
            <div class="therapists-list">
                <p><strong>Our Therapists:</strong> Tanya Gafney, Mandy Pretorius, Dawn Frost and Nicola Waller</p>
            </div>
            <div class="therapists-image">
                <img src="@/assets/therapists.jpeg" alt="Our team of professional therapists" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.therapists {
    padding: var(--space-12) 0;
}

.therapists-list {
    text-align: center;
}

.therapists-list p {
    font-size: var(--text-base);
    color: var(--color-gray-700);
    max-width: 600px;
    margin: 0 auto;
}

.therapists-image {
    text-align: center;
    margin-top: var(--space-8);
}

.therapists-image img {
    width: 80%;
    max-width: 80%;
    height: auto;
    border-radius: var(--radius-xl);
    display: block;
    margin: 0 auto;
}

/* Mobile spacing improvements */
@media (max-width: 639px) {

    .therapists-image img {
        width: 100%;
        max-width: 100%;
    }
}
</style>