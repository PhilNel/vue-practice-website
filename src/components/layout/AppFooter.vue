<template>
    <footer class="app-footer">
        <div class="container">
            <div class="footer-content">
                <div class="contact-section">
                    <h2>CONTACT US</h2>
                    <ContactInfo :contact-items="contactItems" />
                </div>

                <div class="addresses-section">
                    <h2>FIND US</h2>

                    <div class="address-group">
                        <a href="https://www.google.com/maps/place/Dr.+Len+Nel+Dermatologists+%26+Nel+Skin+Care+Clinic/@-29.727341,31.0670785,17z/data=!3m1!4b1!4m6!3m5!1s0x1ef705f2243f6f3b:0xeffe56ad2d9d72b1!8m2!3d-29.7273457!4d31.0696534!16s%2Fg%2F11c528fm1c?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank" rel="noopener noreferrer" class="address address-link">
                            <div class="address-icon">
                                <MapIcon color="var(--color-white)" size="20" />
                            </div>
                            <div class="address-text">
                                <p>325 Umhlanga Rocks Drive,</p>
                                <p>Suite 105 Ingenuity House,</p>
                                <p>Umhlanga Rocks, Durban, 4320</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="social-section">
                    <SocialIcons variant="footer" />
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; {{ currentYear }}, Nel Skin Care</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SocialIcons from '@/components/ui/SocialIcons.vue'
import ContactInfo from '@/components/ui/ContactInfo.vue'
import { MapIcon, PhoneIcon } from '@/components/ui/icons'

const currentYear = computed(() => new Date().getFullYear())

const contactItems = [
    {
        id: 'laser-clinic',
        service: 'Laser Clinic Bookings',
        number: '+27 31 584 8110',
        href: 'tel:+27315848110',
        icon: PhoneIcon
    },
    {
        id: 'consultations',
        service: 'Mole Mapping/Skin Consultations with Dr. Nel',
        number: '+27 31 584 8097',
        href: 'tel:+27315848097',
        icon: PhoneIcon
    }
]
</script>

<style scoped>
.app-footer {
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: var(--space-16) 0 var(--space-8);
}

.footer-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-12);
    margin-bottom: var(--space-12);
}

.contact-section h2,
.addresses-section h2 {
    margin-bottom: var(--space-6);
    color: var(--color-white);
    text-align: center;
}

.address-group {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    align-items: center;
}

.address {
    display: flex;
    align-items: center;
    gap: var(--space-3);
}

.address-icon {
    flex-shrink: 0;
    color: var(--color-white);
    width: 20px;
    height: 20px;
    fill: currentColor;
}

.address-text {
    font-size: var(--text-md);
    color: var(--color-white);
    line-height: var(--leading-relaxed);
}

.address-text p {
    margin: 0;
    color: var(--color-white);
}

.address-link {
    text-decoration: none;
    transition: opacity var(--transition-normal);
}

.address-link:hover {
    opacity: 0.8;
}

.social-section {
    display: flex;
    justify-content: center;
}

.footer-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-4);
    padding-top: var(--space-8);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    font-size: var(--text-sm);
    color: var(--color-white);
}

.footer-bottom p {
    color: var(--color-white);
}

.footer-links {
    display: flex;
    gap: var(--space-6);
}

.footer-link {
    color: var(--color-white);
    text-decoration: none;
    transition: opacity var(--transition-normal);
}

.footer-link:hover {
    opacity: 0.8;
}

</style>