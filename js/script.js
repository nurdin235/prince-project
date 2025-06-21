// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Toggle hamburger icon between bars and times
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-times');
        });

        // Close nav menu when a link is clicked (for single-page feel or if nav items cover screen)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.querySelector('i').classList.remove('fa-times');
                    hamburger.querySelector('i').classList.add('fa-bars');
                }
            });
        });
    }

    // 2. Initialize Swiper for Testimonial Carousel
    // Ensure Swiper JS library is loaded in your HTML before this script
    if (typeof Swiper !== 'undefined') {
        const testimonialSwiper = new Swiper('.testimonial-carousel .swiper-container', {
            loop: true, // Enable continuous loop mode
            slidesPerView: 1, // Show one slide at a time
            spaceBetween: 30, // Space between slides
            autoplay: {
                delay: 5000, // 5 seconds
                disableOnInteraction: false, // Continue autoplay after user interaction
            },
            pagination: {
                el: '.swiper-pagination', // Pagination dots container
                clickable: true, // Make dots clickable
            },
            // Optional: If you want navigation arrows
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 768px
                768: {
                    slidesPerView: 1, // Still one slide for testimonials, but good to define
                }
            }
        });
    }

    // 3. Initialize AOS (Animate On Scroll) Library
    // AOS.init() is already called in index.html, but confirming usage here.
    // Make sure the AOS.js library is loaded in your HTML.
    // Example usage: <h1 data-aos="fade-up">Hello</h1>
    // You've already included the basic AOS.init() in index.html, which is good.
    // No additional JS needed here if you're just using data-aos attributes.

    // Add more general page interactivity here as needed
});







// js/script.js - Add these to your existing DOMContentLoaded listener

document.addEventListener('DOMContentLoaded', () => {
    // ... (existing JavaScript for mobile nav, Swiper, AOS) ...

    // 4. Pricing Page - Monthly/Annual Toggle
    const billingToggle = document.getElementById('billingToggle');
    const priceValues = document.querySelectorAll('.price-value');

    if (billingToggle && priceValues.length > 0) {
        billingToggle.addEventListener('change', () => {
            const isAnnual = billingToggle.checked; // true if annual, false if monthly

            priceValues.forEach(priceSpan => {
                const monthlyPrice = priceSpan.getAttribute('data-monthly');
                const annuallyPrice = priceSpan.getAttribute('data-annually');

                if (isAnnual) {
                    priceSpan.textContent = annuallyPrice;
                    // Optional: update period text if needed
                    priceSpan.nextElementSibling.textContent = '/year';
                } else {
                    priceSpan.textContent = monthlyPrice;
                    // Optional: update period text if needed
                    priceSpan.nextElementSibling.textContent = '/month';
                }
            });
        });

        // Initialize prices based on default toggle state (usually monthly)
        // Ensure price values reflect monthly prices on page load
        billingToggle.checked = false; // Default to monthly on load
        priceValues.forEach(priceSpan => {
            priceSpan.textContent = priceSpan.getAttribute('data-monthly');
            priceSpan.nextElementSibling.textContent = '/month';
        });
    }

    // 5. Pricing Page - FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const accordionItem = header.closest('.accordion-item');
                const accordionContent = accordionItem.querySelector('.accordion-content');

                // Toggle the 'open' class on the clicked accordion item
                accordionItem.classList.toggle('open');
                header.classList.toggle('active'); // Toggle active class on header for icon rotation

                // Set max-height for smooth transition
                if (accordionItem.classList.contains('open')) {
                    // Set max-height to scrollHeight to smoothly expand
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                } else {
                    // Set max-height back to 0 to smoothly collapse
                    accordionContent.style.maxHeight = '0';
                }

                // Optional: Close other open accordions
                accordionHeaders.forEach(otherHeader => {
                    const otherAccordionItem = otherHeader.closest('.accordion-item');
                    if (otherHeader !== header && otherAccordionItem.classList.contains('open')) {
                        otherAccordionItem.classList.remove('open');
                        otherHeader.classList.remove('active');
                        otherAccordionItem.querySelector('.accordion-content').style.maxHeight = '0';
                    }
                });
            });
        });

        // Initial state for accordions (all closed)
        accordionHeaders.forEach(header => {
            const accordionItem = header.closest('.accordion-item');
            const accordionContent = accordionItem.querySelector('.accordion-content');
            accordionContent.style.maxHeight = '0';
        });
    }
});