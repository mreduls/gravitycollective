// Gravity Travel - Interactive Features with Journey Map Animations
// Enhanced with scroll-triggered map storytelling and immersive journey experiences

(function() {
    'use strict';

    // Data from JSON
    const inspirationData = {
        festivals: {
            heading: "Festivals & Unity",
            paragraph: "India hosts over 30 major festivals annually, generating more than $15 billion in economic activity. The Kumbh Mela alone draws 200 million pilgrims, demonstrating unparalleled communal coordination and scale.",
            stats: ["$15 bn festival economy","200 m Kumbh pilgrims","50+ UNESCO cultural practices"],
            image: "https://i.natgeofe.com/k/aa3a7720-96bd-4bb7-b765-226d052b354e/holi-kids-in-circle_16x9.jpg"
        },
        hustle: {
            heading: "Entrepreneurial Hustle",
            paragraph: "Street entrepreneurship is India's heartbeat: 10 million vendors power ₹8,000 crores of daily commerce. Top vada-pav sellers in Mumbai earn ₹24 lakh a year – proof that ambition starts at sidewalk level.",
            stats: ["₹8,000 cr daily vendor turnover","10 m vendors nation-wide","₹24 lakh top vendor income"],
            image: "https://c8.alamy.com/comp/2X70Y1T/local-man-buying-food-from-street-vendor-in-india-maharashtra-nashik-2X70Y1T.jpg"
        },
        spiritual: {
            heading: "Spiritual Depth",
            paragraph: "India's faith economy is valued at $60 billion. Varanasi's 88 ghats host 300 + daily rituals, blending 3,000-year traditions with modern mindfulness retreats.",
            stats: ["$60 bn faith economy","88 ghats active daily","3,000 yrs living rituals"],
            image: "https://pplx-res.cloudinary.com/image/upload/v1751350240/pplx_project_search_images/fde16621c72a4c1cf2790aab7f75aa78ae565653.jpg"
        },
        startup: {
            heading: "Startup Energy",
            paragraph: "With 100,000 registered startups and 115 unicorns, India ranks #3 globally. Bengaluru alone attracted $7.5 billion VC in 2024, driving AI, SaaS, and fintech breakthroughs.",
            stats: ["100k+ startups","115 unicorns","$7.5 bn VC in BLR 2024"],
            image: "https://www.startupinsider.in/wp-content/uploads/2022/04/Startup-Company-In-Bangalor.jpg"
        },
        heritage: {
            heading: "Diverse Heritage",
            paragraph: "India's 22 official languages and 700+ tribal dialects feed the world's largest cultural mosaic, supporting a handicraft market worth $4 billion exported to 100+ countries.",
            stats: ["22 official languages","700+ dialects","$4 bn handicrafts"],
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Bihu_dance_Assam._jpg.jpg"
        },
        dreams: {
            heading: "Ambitious Dreams",
            paragraph: "ISRO's Chandrayaan-3 landed on the lunar south pole for just $75 million, exemplifying frugal innovation. India's space sector is projected to hit $13 billion by 2025.",
            stats: ["$75 m lunar mission","$13 bn space sector","4th nation on Moon"],
            image: "https://cdn.mos.cms.futurecdn.net/3FnczamRyWU6MvRMEXWaGD.jpg"
        }
    };

    // Journey data with detailed sections for scroll-triggered storytelling
    const journeyData = {
        'all-india': {
            title: '15-Day All India Experience',
            subtitle: 'The ultimate journey across India\'s diverse landscapes and cultures',
            sections: [
                {
                    id: 'spiritual-awakening',
                    title: 'Spiritual Awakening & Adventure',
                    location: 'Rishikesh & Haridwar',
                    coordinates: [30.0869, 78.2676],
                    content: 'Begin your journey where spirit meets adrenaline—meditate in ancient ashrams, practice sunrise yoga by the Ganges, and embrace the thrill of white-water rafting in the Himalayan foothills.',
                    highlights: [
                        { title: 'Ganga Aarti Ceremony', description: 'Witness the mesmerizing evening prayers along the sacred Ganges' },
                        { title: 'Ashram Meditation', description: 'Deep spiritual practice with renowned yoga masters' },
                        { title: 'Adventure Sports', description: 'White-water rafting and trekking in Himalayan foothills' }
                    ],
                    marker: 'rishikesh'
                },
                {
                    id: 'political-insights',
                    title: 'Meet a politician in Delhi',
                    location: 'Delhi',
                    coordinates: [28.6139, 77.2090],
                    content: 'Experience Delhi\'s legendary cuisine and dynamic energy. Meet influential political figures and understand India\'s democratic processes from the inside.',
                    highlights: [
                        { title: 'Political Meetings', description: 'Exclusive access to political leaders and policy makers' },
                        { title: 'Street Food Tour', description: 'Explore Delhi\'s vibrant culinary landscape' },
                        { title: 'Historic Architecture', description: 'From Red Fort to India Gate - architectural marvels' }
                    ],
                    marker: 'delhi'
                },
                {
                    id: 'diwali-celebration',
                    title: 'Celebrate Diwali at a local home in Agra',
                    location: 'Agra',
                    coordinates: [27.1767, 78.0081],
                    content: 'Marvel at the Taj Mahal and celebrate Diwali with a local family—candles, laughter, and tradition. Experience authentic Indian hospitality and age-old customs.',
                    highlights: [
                        { title: 'Taj Mahal Sunrise', description: 'Private viewing of the world\'s most beautiful monument' },
                        { title: 'Family Diwali', description: 'Authentic celebration with local family traditions' },
                        { title: 'Artisan Workshops', description: 'Learn marble inlay work from master craftsmen' }
                    ],
                    marker: 'agra'
                },
                {
                    id: 'royal-heritage',
                    title: 'Royalty, Artistry & Culture',
                    location: 'Jaipur & Udaipur',
                    coordinates: [26.9124, 75.7873],
                    content: 'Explore Rajasthan\'s royal heritage—majestic forts, serene lakes, and colorful bazaars. Meet local artists and be a guest at a joyous Indian wedding. Live life at a local home in village.',
                    highlights: [
                        { title: 'Palace Architecture', description: 'Amber Fort, City Palace - architectural marvels' },
                        { title: 'Indian Wedding', description: 'Be a guest at an authentic Rajasthani wedding celebration' },
                        { title: 'Village Homestay', description: 'Experience rural life with local families' }
                    ],
                    marker: 'jaipur'
                },
                {
                    id: 'urban-innovation',
                    title: 'Urban Pulse & Innovation',
                    location: 'Mumbai & Bangalore',
                    coordinates: [19.0760, 72.8777],
                    content: 'Feel Mumbai\'s cinematic energy and entrepreneurial spirit. In Bangalore, connect with visionary founders and celebrate with India\'s next generation of innovators.',
                    highlights: [
                        { title: 'Bollywood Studios', description: 'Behind-the-scenes access to film industry' },
                        { title: 'Startup Ecosystem', description: 'Meet unicorn founders and venture capitalists' },
                        { title: 'Tech Innovation', description: 'Exclusive access to leading technology companies' }
                    ],
                    marker: 'mumbai'
                }
            ]
        },
        'north-india': {
            title: '8-Day North India Focus',
            subtitle: 'Golden Triangle plus spiritual Varanasi immersion',
            sections: [
                {
                    id: 'spiritual-awakening',
                    title: 'Spiritual Awakening & Adventure',
                    location: 'Rishikesh & Haridwar',
                    coordinates: [30.0869, 78.2676],
                    content: 'Begin your journey where spirit meets adrenaline—meditate in ancient ashrams, practice sunrise yoga by the Ganges, and embrace the thrill of white-water rafting in the Himalayan foothills.',
                    highlights: [
                        { title: 'Yoga Capital', description: 'Learn from world-renowned yoga masters' },
                        { title: 'River Rafting', description: 'Adventure sports in sacred Himalayan waters' }
                    ],
                    marker: 'rishikesh'
                },
                {
                    id: 'political-insights',
                    title: 'Political Capital Experience',
                    location: 'Delhi',
                    coordinates: [28.6139, 77.2090],
                    content: 'Explore India\'s political heart with exclusive access to government institutions and political leaders.',
                    highlights: [
                        { title: 'Parliament Tours', description: 'Inside access to democratic institutions' },
                        { title: 'Political Networking', description: 'Meet influential policy makers' }
                    ],
                    marker: 'delhi'
                },
                {
                    id: 'royal-heritage',
                    title: 'Mughal Grandeur',
                    location: 'Agra & Jaipur',
                    coordinates: [27.1767, 78.0081],
                    content: 'Marvel at Mughal architecture and Rajasthani royal heritage in India\'s Golden Triangle.',
                    highlights: [
                        { title: 'Taj Mahal', description: 'Symbol of eternal love and architectural perfection' },
                        { title: 'Royal Palaces', description: 'Live like maharajas in heritage hotels' }
                    ],
                    marker: 'agra'
                }
            ]
        },
        'religious': {
            title: '5-Day Religious Pilgrimage',
            subtitle: 'Spiritual transformation through India\'s sacred destinations',
            sections: [
                {
                    id: 'spiritual-awakening',
                    title: 'Spiritual Awakening & Adventure',
                    location: 'Rishikesh & Haridwar',
                    coordinates: [30.0869, 78.2676],
                    content: 'Begin your journey where spirit meets adrenaline—meditate in ancient ashrams, practice sunrise yoga by the Ganges, and embrace the thrill of white-water rafting in the Himalayan foothills.',
                    highlights: [
                        { title: 'Sacred Rituals', description: 'Participate in ancient Vedic ceremonies' },
                        { title: 'Meditation Retreat', description: 'Deep spiritual practice and inner transformation' }
                    ],
                    marker: 'rishikesh'
                },
                {
                    id: 'sacred-varanasi',
                    title: 'Sacred City Experience',
                    location: 'Varanasi',
                    coordinates: [25.3176, 82.9739],
                    content: 'Experience the spiritual intensity of one of the world\'s oldest living cities, where life and death dance together on the ghats.',
                    highlights: [
                        { title: 'Ganga Aarti', description: 'Divine river worship ceremonies at sunset' },
                        { title: 'Ancient Philosophy', description: 'Dialogues with spiritual masters and scholars' }
                    ],
                    marker: 'delhi'
                }
            ]
        }
    };

    // JavaScript namespace to avoid global pollution
    const GravityApp = {
        // Configuration
        config: {
            carouselSpeed: 600,
            scrollAmount: 340,
            debounceDelay: 16,
            intersectionThreshold: 0.1
        },

        // State management
        state: {
            currentSlide: 0,
            isScrolling: false,
            touchStartX: 0,
            touchEndX: 0,
            modalOpen: false,
            focusedElementBeforeModal: null,
            currentJourney: null,
            currentSection: 0,
            journeyPageActive: false
        },

        // DOM elements cache
        elements: {},

        // Initialize the application
        init() {
            try {
                this.cacheElements();
                this.bindEvents();
                this.initializeCarousel();
                this.initializeHorizontalScroll();
                this.initializeAnimations();
                this.initializeAccessibility();
                this.initializePerformanceFeatures();
                this.initializeModal();
                this.initializeContactForm();
                this.initializeJourneyButtons();
                
                // Remove loading states once images are loaded
                this.handleImageLoading();
                
                console.info('Gravity Travel: Application initialized successfully');
            } catch (error) {
                this.handleError('Initialization failed', error);
            }
        },

        // Cache DOM elements for performance
        cacheElements() {
            try {
                this.elements = {
                    header: document.querySelector('.header'),
                    slides: document.querySelectorAll('.carousel-slide'),
                    indicators: document.querySelectorAll('.indicator'),
                    prevBtn: document.getElementById('prevSlide'),
                    nextBtn: document.getElementById('nextSlide'),
                    carouselContainer: document.querySelector('.carousel-container'),
                    cardsContainer: document.getElementById('philosophyCards'),
                    scrollLeftBtn: document.getElementById('scrollLeft'),
                    scrollRightBtn: document.getElementById('scrollRight'),
                    navLinks: document.querySelectorAll('.nav-link'),
                    carouselTitles: document.querySelectorAll('.carousel-title'),
                    carouselCaptions: document.querySelectorAll('.carousel-caption'),
                    animatedElements: document.querySelectorAll('.trip-card, .team-member, .inspiration-card'),
                    focusableElements: document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'),
                    buttons: document.querySelectorAll('.btn'),
                    inspirationCards: document.querySelectorAll('.inspiration-card'),
                    tripCards: document.querySelectorAll('.trip-card'),
                    teamMembers: document.querySelectorAll('.team-member'),
                    linkedinLinks: document.querySelectorAll('.linkedin-link'),
                    images: document.querySelectorAll('img'),
                    modal: document.getElementById('inspirationModal'),
                    modalBackdrop: document.querySelector('.modal-backdrop'),
                    modalClose: document.querySelector('.modal-close'),
                    modalImage: document.getElementById('modal-image'),
                    modalTitle: document.getElementById('modal-title'),
                    modalParagraph: document.getElementById('modal-paragraph'),
                    modalStats: document.getElementById('modal-stats'),
                    contactForm: document.getElementById('contactForm'),
                    successToast: document.getElementById('successToast'),
                    journeyButtons: document.querySelectorAll('.journey-details-btn'),
                    mainContent: document.getElementById('main-content')
                };
            } catch (error) {
                this.handleError('Failed to cache DOM elements', error);
            }
        },

        // Bind all event listeners
        bindEvents() {
            try {
                // Header scroll effect with debouncing
                if (this.elements.header) {
                    window.addEventListener('scroll', this.debounce(this.handleHeaderScroll.bind(this), this.config.debounceDelay));
                }

                // Carousel controls
                if (this.elements.nextBtn) {
                    this.elements.nextBtn.addEventListener('click', this.nextSlide.bind(this));
                }
                if (this.elements.prevBtn) {
                    this.elements.prevBtn.addEventListener('click', this.prevSlide.bind(this));
                }

                // Carousel indicators
                this.elements.indicators.forEach((indicator, index) => {
                    indicator.addEventListener('click', () => this.showSlide(index));
                });

                // Navigation links
                this.elements.navLinks.forEach(link => {
                    link.addEventListener('click', this.handleNavClick.bind(this));
                });

                // Horizontal scroll controls
                if (this.elements.scrollLeftBtn) {
                    this.elements.scrollLeftBtn.addEventListener('click', this.scrollLeft.bind(this));
                }
                if (this.elements.scrollRightBtn) {
                    this.elements.scrollRightBtn.addEventListener('click', this.scrollRight.bind(this));
                }

                // Keyboard navigation
                document.addEventListener('keydown', this.handleKeydown.bind(this));

                // Touch/swipe support
                this.initializeTouchSupport();

                // Button interactions
                this.initializeButtonEffects();

                // Card interactions
                this.initializeCardEffects();

                // Window resize handling
                window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 100));

            } catch (error) {
                this.handleError('Failed to bind events', error);
            }
        },

        // Initialize carousel functionality
        initializeCarousel() {
            try {
                // Set up initial carousel text animation
                this.elements.carouselTitles.forEach(title => {
                    title.style.transition = 'all 0.8s ease';
                });
                
                this.elements.carouselCaptions.forEach(caption => {
                    caption.style.transition = 'all 0.8s ease';
                });

                // Trigger initial animation
                setTimeout(() => this.animateCarouselText(), 500);

            } catch (error) {
                this.handleError('Failed to initialize carousel', error);
            }
        },

        // Initialize horizontal scrolling
        initializeHorizontalScroll() {
            try {
                if (!this.elements.cardsContainer) return;

                // Set up drag scrolling
                this.initializeDragScroll();

                // Update button states initially
                this.updateScrollButtonStates();

                // Listen for scroll events
                this.elements.cardsContainer.addEventListener('scroll', 
                    this.debounce(this.updateScrollButtonStates.bind(this), this.config.debounceDelay)
                );

            } catch (error) {
                this.handleError('Failed to initialize horizontal scroll', error);
            }
        },

        // Initialize intersection observer for animations
        initializeAnimations() {
            try {
                const observerOptions = {
                    threshold: this.config.intersectionThreshold,
                    rootMargin: '0px 0px -50px 0px'
                };

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }
                    });
                }, observerOptions);

                // Observe elements for animation
                this.elements.animatedElements.forEach(el => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(30px)';
                    el.style.transition = 'all 0.6s ease';
                    observer.observe(el);
                });

                // Create scroll progress indicator
                this.createScrollProgress();

            } catch (error) {
                this.handleError('Failed to initialize animations', error);
            }
        },

        // Initialize accessibility features
        initializeAccessibility() {
            try {
                // Focus management
                this.elements.focusableElements.forEach(el => {
                    el.addEventListener('focus', this.handleFocus);
                    el.addEventListener('blur', this.handleBlur);
                });

                // Enhanced keyboard support
                document.addEventListener('keydown', this.handleAccessibilityKeydown.bind(this));

                // Announce slide changes to screen readers
                this.setupAriaLiveRegion();

            } catch (error) {
                this.handleError('Failed to initialize accessibility', error);
            }
        },

        // Initialize performance features
        initializePerformanceFeatures() {
            try {
                // Implement prefers-reduced-motion support
                if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                    document.body.classList.add('reduced-motion');
                }

                // Passive event listeners for better performance
                this.elements.cardsContainer?.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
                this.elements.cardsContainer?.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: true });

            } catch (error) {
                this.handleError('Failed to initialize performance features', error);
            }
        },

        // Initialize modal functionality
        initializeModal() {
            try {
                // Add click listeners to inspiration cards
                this.elements.inspirationCards.forEach(card => {
                    card.addEventListener('click', () => {
                        const cardType = card.getAttribute('data-card');
                        this.openModal(cardType);
                    });
                });

                // Modal close events
                if (this.elements.modalClose) {
                    this.elements.modalClose.addEventListener('click', () => this.closeModal());
                }

                if (this.elements.modalBackdrop) {
                    this.elements.modalBackdrop.addEventListener('click', () => this.closeModal());
                }

                // ESC key to close modal
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && this.state.modalOpen) {
                        this.closeModal();
                    }
                });

            } catch (error) {
                this.handleError('Failed to initialize modal', error);
            }
        },

        // Initialize contact form
        initializeContactForm() {
            try {
                if (!this.elements.contactForm) return;

                this.elements.contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleContactSubmit();
                });

            } catch (error) {
                this.handleError('Failed to initialize contact form', error);
            }
        },

        // Initialize journey buttons to show immersive pages
        initializeJourneyButtons() {
            try {
                this.elements.journeyButtons.forEach(button => {
                    button.addEventListener('click', (e) => {
                        e.preventDefault();
                        const journey = button.getAttribute('data-journey');
                        this.showJourneyExperience(journey);
                    });
                });
            } catch (error) {
                this.handleError('Failed to initialize journey buttons', error);
            }
        },

        // Show immersive journey experience with scroll-triggered map animations
        showJourneyExperience(journey) {
            try {
                const journeyInfo = journeyData[journey];
                if (!journeyInfo) return;

                this.state.currentJourney = journey;
                this.state.journeyPageActive = true;
                this.state.currentSection = 0;

                // Create journey experience page
                const experiencePage = this.createJourneyExperiencePage(journeyInfo);
                
                // Hide main content and show experience page
                this.elements.mainContent.style.display = 'none';
                document.body.appendChild(experiencePage);

                // Initialize scroll-triggered animations
                setTimeout(() => {
                    this.initializeJourneyAnimations(journeyInfo);
                }, 100);

                // Scroll to top
                window.scrollTo(0, 0);

            } catch (error) {
                this.handleError('Failed to show journey experience', error);
            }
        },

        // Create immersive journey experience page with fixed map background
        createJourneyExperiencePage(journeyInfo) {
            const experiencePage = document.createElement('div');
            experiencePage.className = 'journey-detail-page';
            experiencePage.id = 'journeyExperiencePage';
            
            experiencePage.innerHTML = `
                <!-- Fixed Background Map -->
                <div class="journey-map-container">
                    <div class="journey-map">
                        <svg class="journey-route" width="100%" height="100%" style="position: absolute; top: 0; left: 0;">
                            <defs>
                                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" style="stop-color:#f4c430;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#d4722a;stop-opacity:1" />
                                </linearGradient>
                            </defs>
                            <path class="route-line" stroke="url(#routeGradient)" stroke-width="4" fill="none" 
                                  d="M 250,150 Q 270,180 280,220 Q 290,260 300,300 Q 320,340 340,380 Q 360,420 380,460" />
                        </svg>
                        ${journeyInfo.sections.map((section, index) => `
                            <div class="map-marker marker-${section.marker}" data-section="${index}"></div>
                        `).join('')}
                    </div>
                </div>

                <!-- Hero Section -->
                <div class="journey-hero">
                    <button class="back-btn" onclick="GravityApp.hideJourneyExperience()" aria-label="Back to main page">
                        ← Back to Journeys
                    </button>
                    <div class="journey-hero-content">
                        <h1 class="journey-hero-title">${journeyInfo.title}</h1>
                        <p class="journey-hero-subtitle">${journeyInfo.subtitle}</p>
                        <div class="scroll-indicator">
                            <span class="scroll-text">Scroll to explore</span>
                            <span class="scroll-arrow">↓</span>
                        </div>
                    </div>
                </div>

                <!-- Journey Sections -->
                <div class="journey-sections">
                    ${journeyInfo.sections.map((section, index) => `
                        <div class="journey-section" data-section="${index}">
                            <div class="container">
                                <div class="section-content">
                                    <div class="section-number">Section ${index + 1}</div>
                                    <h2 class="section-title">${section.title}</h2>
                                    <div class="section-location">${section.location}</div>
                                    <p class="section-description">${section.content}</p>
                                    <div class="section-highlights">
                                        ${section.highlights.map(highlight => `
                                            <div class="highlight-item">
                                                <h3 class="highlight-title">${highlight.title}</h3>
                                                <p class="highlight-description">${highlight.description}</p>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Contact CTA Section -->
                <div class="journey-section" style="background: var(--gradient-hero);">
                    <div class="container">
                        <div class="section-content" style="text-align: center;">
                            <h2 class="section-title">Ready to Begin Your Journey?</h2>
                            <p class="section-description">Contact our team to customize this experience for your group and create memories that will last a lifetime.</p>
                            <button class="btn btn-hero" onclick="GravityApp.scrollToContact()">Get In Touch</button>
                        </div>
                    </div>
                </div>
            `;

            return experiencePage;
        },

        // Initialize scroll-triggered animations for journey experience
        initializeJourneyAnimations(journeyInfo) {
            try {
                const sections = document.querySelectorAll('.journey-section');
                const markers = document.querySelectorAll('.map-marker');
                const routeLine = document.querySelector('.route-line');

                // Intersection Observer for section reveals
                const sectionObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        const sectionIndex = parseInt(entry.target.getAttribute('data-section'));
                        
                        if (entry.isIntersecting) {
                            // Activate section
                            entry.target.classList.add('active');
                            
                            // Update current section
                            this.state.currentSection = sectionIndex;
                            
                            // Activate corresponding marker
                            markers.forEach((marker, index) => {
                                if (index <= sectionIndex) {
                                    marker.classList.add('active');
                                } else {
                                    marker.classList.remove('active');
                                }
                            });

                            // Animate route drawing
                            if (routeLine) {
                                const progress = (sectionIndex + 1) / journeyInfo.sections.length;
                                routeLine.style.strokeDashoffset = 5000 * (1 - progress);
                            }

                            // Auto-pan map (subtle zoom effect)
                            const mapContainer = document.querySelector('.journey-map');
                            if (mapContainer && journeyInfo.sections[sectionIndex]) {
                                const coords = journeyInfo.sections[sectionIndex].coordinates;
                                // Subtle transform to center on region
                                const transformX = (coords[1] - 77) * -2; // Longitude offset
                                const transformY = (coords[0] - 26) * -2; // Latitude offset
                                mapContainer.style.transform = `translate(-50%, -50%) translate(${transformX}px, ${transformY}px) scale(1.1)`;
                            }
                        }
                    });
                }, {
                    threshold: 0.3,
                    rootMargin: '0px 0px -20% 0px'
                });

                // Observe all sections
                sections.forEach(section => {
                    sectionObserver.observe(section);
                });

                // Enhanced scroll handler for journey page
                const journeyScrollHandler = this.debounce(() => {
                    if (!this.state.journeyPageActive) return;
                    
                    const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
                    
                    // Dynamic header opacity
                    if (this.elements.header) {
                        this.elements.header.style.background = `rgba(28, 28, 28, ${0.9 + scrollProgress * 0.1})`;
                    }

                    // Parallax effect for map
                    const mapContainer = document.querySelector('.journey-map');
                    if (mapContainer) {
                        mapContainer.style.transform += ` translateY(${scrollProgress * 50}px)`;
                    }
                }, this.config.debounceDelay);

                window.addEventListener('scroll', journeyScrollHandler);

                // Store cleanup function
                this.journeyCleanup = () => {
                    window.removeEventListener('scroll', journeyScrollHandler);
                    sectionObserver.disconnect();
                };

            } catch (error) {
                this.handleError('Failed to initialize journey animations', error);
            }
        },

        // Hide journey experience and return to main page
        hideJourneyExperience() {
            try {
                const experiencePage = document.getElementById('journeyExperiencePage');
                if (experiencePage) {
                    experiencePage.remove();
                }
                
                // Cleanup animations
                if (this.journeyCleanup) {
                    this.journeyCleanup();
                    this.journeyCleanup = null;
                }
                
                this.elements.mainContent.style.display = 'block';
                this.state.currentJourney = null;
                this.state.journeyPageActive = false;
                this.state.currentSection = 0;

                // Scroll back to trips section
                setTimeout(() => {
                    this.scrollToSection('#trips');
                }, 100);

            } catch (error) {
                this.handleError('Failed to hide journey experience', error);
            }
        },

        // Scroll to contact from journey experience page
        scrollToContact() {
            try {
                this.hideJourneyExperience();
                setTimeout(() => {
                    this.scrollToSection('#contact');
                }, 200);
            } catch (error) {
                this.handleError('Failed to scroll to contact', error);
            }
        },

        // Open modal with content
        openModal(cardType) {
            try {
                const data = inspirationData[cardType];
                if (!data) return;

                // Store focus
                this.state.focusedElementBeforeModal = document.activeElement;

                // Set modal content
                this.elements.modalImage.src = data.image;
                this.elements.modalImage.alt = data.heading;
                this.elements.modalTitle.textContent = data.heading;
                this.elements.modalParagraph.textContent = data.paragraph;

                // Clear and populate stats
                this.elements.modalStats.innerHTML = '';
                data.stats.forEach(stat => {
                    const li = document.createElement('li');
                    li.textContent = stat;
                    this.elements.modalStats.appendChild(li);
                });

                // Show modal
                this.elements.modal.classList.add('show');
                this.elements.modal.setAttribute('aria-hidden', 'false');
                this.state.modalOpen = true;

                // Focus on close button
                setTimeout(() => {
                    this.elements.modalClose.focus();
                }, 100);

                // Trap focus
                this.trapFocus(this.elements.modal);

            } catch (error) {
                this.handleError('Failed to open modal', error);
            }
        },

        // Close modal
        closeModal() {
            try {
                this.elements.modal.classList.remove('show');
                this.elements.modal.setAttribute('aria-hidden', 'true');
                this.state.modalOpen = false;

                // Restore focus
                if (this.state.focusedElementBeforeModal) {
                    this.state.focusedElementBeforeModal.focus();
                }

            } catch (error) {
                this.handleError('Failed to close modal', error);
            }
        },

        // Trap focus within modal
        trapFocus(element) {
            try {
                const focusableElements = element.querySelectorAll(
                    'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                const handleTabKey = (e) => {
                    if (e.key === 'Tab') {
                        if (e.shiftKey) {
                            if (document.activeElement === firstElement) {
                                e.preventDefault();
                                lastElement.focus();
                            }
                        } else {
                            if (document.activeElement === lastElement) {
                                e.preventDefault();
                                firstElement.focus();
                            }
                        }
                    }
                };

                element.addEventListener('keydown', handleTabKey);

                // Remove listener when modal closes
                const removeListener = () => {
                    element.removeEventListener('keydown', handleTabKey);
                };

                this.elements.modalClose.addEventListener('click', removeListener, { once: true });
                this.elements.modalBackdrop.addEventListener('click', removeListener, { once: true });

            } catch (error) {
                this.handleError('Failed to trap focus', error);
            }
        },

        // Handle contact form submission
        handleContactSubmit() {
            try {
                const formData = new FormData(this.elements.contactForm);
                const name = formData.get('name').trim();
                const email = formData.get('email').trim();
                const phone = formData.get('phone').trim();
                const interest = formData.get('interest').trim();

                // Validate form
                let isValid = true;

                // Clear previous errors
                document.querySelectorAll('.error-message').forEach(error => {
                    error.classList.remove('show');
                });

                // Name validation
                if (!name) {
                    this.showFieldError('name-error', 'Name is required');
                    isValid = false;
                }

                // Email validation
                const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
                if (!email) {
                    this.showFieldError('email-error', 'Email is required');
                    isValid = false;
                } else if (!emailPattern.test(email)) {
                    this.showFieldError('email-error', 'Please enter a valid email address');
                    isValid = false;
                }

                // Phone validation
                if (!phone) {
                    this.showFieldError('phone-error', 'Contact number is required');
                    isValid = false;
                }

                if (!isValid) return;

                // Construct mailto URL
                const subject = encodeURIComponent('Gravity Enquiry');
                const body = encodeURIComponent(
                    `Name: ${name}\n` +
                    `Email: ${email}\n` +
                    `Contact Number: ${phone}\n` +
                    `Interests: ${interest || 'Not specified'}\n\n` +
                    `Sent from Gravity Travel Website`
                );

                const mailtoUrl = `mailto:mredul.sarda@gmail.com?subject=${subject}&body=${body}`;

                // Open mailto in new tab
                window.open(mailtoUrl, '_blank');

                // Show success toast
                this.showSuccessToast();

                // Reset form
                this.elements.contactForm.reset();

            } catch (error) {
                this.handleError('Failed to handle contact form submission', error);
            }
        },

        // Show field error
        showFieldError(errorId, message) {
            try {
                const errorElement = document.getElementById(errorId);
                if (errorElement) {
                    errorElement.textContent = message;
                    errorElement.classList.add('show');
                }
            } catch (error) {
                this.handleError('Failed to show field error', error);
            }
        },

        // Show success toast
        showSuccessToast() {
            try {
                this.elements.successToast.classList.add('show');
                setTimeout(() => {
                    this.elements.successToast.classList.remove('show');
                }, 3000);
            } catch (error) {
                this.handleError('Failed to show success toast', error);
            }
        },

        // Handle image loading states
        handleImageLoading() {
            try {
                this.elements.images.forEach(img => {
                    if (img.complete) {
                        img.classList.add('loaded');
                    } else {
                        img.addEventListener('load', () => {
                            img.classList.add('loaded');
                        });
                        img.addEventListener('error', () => {
                            img.classList.add('error');
                            this.handleError('Failed to load image', new Error(`Image failed to load: ${img.src}`));
                        });
                    }
                });
            } catch (error) {
                this.handleError('Failed to handle image loading', error);
            }
        },

        // Carousel methods
        showSlide(index) {
            try {
                // Remove active class from all slides and indicators
                this.elements.slides.forEach(slide => slide.classList.remove('active'));
                this.elements.indicators.forEach(indicator => {
                    indicator.classList.remove('active');
                    indicator.setAttribute('aria-selected', 'false');
                });
                
                // Add active class to current slide and indicator
                if (this.elements.slides[index]) {
                    this.elements.slides[index].classList.add('active');
                }
                if (this.elements.indicators[index]) {
                    this.elements.indicators[index].classList.add('active');
                    this.elements.indicators[index].setAttribute('aria-selected', 'true');
                }
                
                this.state.currentSlide = index;
                
                // Trigger text animation
                setTimeout(() => this.animateCarouselText(), 100);

                // Announce to screen readers
                this.announceSlideChange(index);

            } catch (error) {
                this.handleError('Failed to show slide', error);
            }
        },

        nextSlide() {
            try {
                const next = (this.state.currentSlide + 1) % this.elements.slides.length;
                this.showSlide(next);
            } catch (error) {
                this.handleError('Failed to show next slide', error);
            }
        },

        prevSlide() {
            try {
                const prev = (this.state.currentSlide - 1 + this.elements.slides.length) % this.elements.slides.length;
                this.showSlide(prev);
            } catch (error) {
                this.handleError('Failed to show previous slide', error);
            }
        },

        animateCarouselText() {
            try {
                this.elements.carouselTitles.forEach((title, index) => {
                    if (index === this.state.currentSlide) {
                        setTimeout(() => {
                            title.style.opacity = '1';
                            title.style.transform = 'translateY(0)';
                        }, 300);
                    } else {
                        title.style.opacity = '0';
                        title.style.transform = 'translateY(30px)';
                    }
                });
                
                this.elements.carouselCaptions.forEach((caption, index) => {
                    if (index === this.state.currentSlide) {
                        setTimeout(() => {
                            caption.style.opacity = '1';
                            caption.style.transform = 'translateY(0)';
                        }, 600);
                    } else {
                        caption.style.opacity = '0';
                        caption.style.transform = 'translateY(30px)';
                    }
                });
            } catch (error) {
                this.handleError('Failed to animate carousel text', error);
            }
        },

        // Scroll methods
        scrollLeft() {
            try {
                if (!this.elements.cardsContainer || this.state.isScrolling) return;

                this.state.isScrolling = true;
                const currentScrollPosition = this.elements.cardsContainer.scrollLeft;
                
                if (currentScrollPosition > 0) {
                    this.elements.cardsContainer.scrollBy({
                        left: -this.config.scrollAmount,
                        behavior: 'smooth'
                    });
                }

                setTimeout(() => {
                    this.state.isScrolling = false;
                }, 300);

            } catch (error) {
                this.handleError('Failed to scroll left', error);
            }
        },

        scrollRight() {
            try {
                if (!this.elements.cardsContainer || this.state.isScrolling) return;

                this.state.isScrolling = true;
                const currentScrollPosition = this.elements.cardsContainer.scrollLeft;
                const maxScrollPosition = this.elements.cardsContainer.scrollWidth - this.elements.cardsContainer.clientWidth;
                
                if (currentScrollPosition < maxScrollPosition - 10) {
                    this.elements.cardsContainer.scrollBy({
                        left: this.config.scrollAmount,
                        behavior: 'smooth'
                    });
                }

                setTimeout(() => {
                    this.state.isScrolling = false;
                }, 300);

            } catch (error) {
                this.handleError('Failed to scroll right', error);
            }
        },

        updateScrollButtonStates() {
            try {
                if (!this.elements.cardsContainer) return;

                const currentScrollPosition = this.elements.cardsContainer.scrollLeft;
                const maxScrollPosition = this.elements.cardsContainer.scrollWidth - this.elements.cardsContainer.clientWidth;

                // Update left button
                if (this.elements.scrollLeftBtn) {
                    if (currentScrollPosition <= 0) {
                        this.elements.scrollLeftBtn.style.opacity = '0.5';
                        this.elements.scrollLeftBtn.style.cursor = 'not-allowed';
                        this.elements.scrollLeftBtn.setAttribute('aria-disabled', 'true');
                    } else {
                        this.elements.scrollLeftBtn.style.opacity = '1';
                        this.elements.scrollLeftBtn.style.cursor = 'pointer';
                        this.elements.scrollLeftBtn.setAttribute('aria-disabled', 'false');
                    }
                }

                // Update right button
                if (this.elements.scrollRightBtn) {
                    if (currentScrollPosition >= maxScrollPosition - 10) {
                        this.elements.scrollRightBtn.style.opacity = '0.5';
                        this.elements.scrollRightBtn.style.cursor = 'not-allowed';
                        this.elements.scrollRightBtn.setAttribute('aria-disabled', 'true');
                    } else {
                        this.elements.scrollRightBtn.style.opacity = '1';
                        this.elements.scrollRightBtn.style.cursor = 'pointer';
                        this.elements.scrollRightBtn.setAttribute('aria-disabled', 'false');
                    }
                }

            } catch (error) {
                this.handleError('Failed to update scroll button states', error);
            }
        },

        // Touch and drag support
        initializeTouchSupport() {
            try {
                // Carousel touch support
                if (this.elements.carouselContainer) {
                    this.elements.carouselContainer.addEventListener('touchstart', this.handleCarouselTouchStart.bind(this), { passive: true });
                    this.elements.carouselContainer.addEventListener('touchend', this.handleCarouselTouchEnd.bind(this));
                }

            } catch (error) {
                this.handleError('Failed to initialize touch support', error);
            }
        },

        initializeDragScroll() {
            try {
                if (!this.elements.cardsContainer) return;

                let isDown = false;
                let startX;
                let scrollLeftPos;

                this.elements.cardsContainer.addEventListener('mousedown', (e) => {
                    isDown = true;
                    this.elements.cardsContainer.style.cursor = 'grabbing';
                    startX = e.pageX - this.elements.cardsContainer.offsetLeft;
                    scrollLeftPos = this.elements.cardsContainer.scrollLeft;
                });

                this.elements.cardsContainer.addEventListener('mouseleave', () => {
                    isDown = false;
                    this.elements.cardsContainer.style.cursor = 'grab';
                });

                this.elements.cardsContainer.addEventListener('mouseup', () => {
                    isDown = false;
                    this.elements.cardsContainer.style.cursor = 'grab';
                });

                this.elements.cardsContainer.addEventListener('mousemove', (e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - this.elements.cardsContainer.offsetLeft;
                    const walk = (x - startX) * 2;
                    this.elements.cardsContainer.scrollLeft = scrollLeftPos - walk;
                });

            } catch (error) {
                this.handleError('Failed to initialize drag scroll', error);
            }
        },

        // Event handlers
        handleHeaderScroll() {
            try {
                if (!this.elements.header) return;

                if (window.scrollY > 100) {
                    this.elements.header.style.background = 'rgba(28, 28, 28, 0.95)';
                } else {
                    this.elements.header.style.background = 'rgba(28, 28, 28, 0.9)';
                }
            } catch (error) {
                this.handleError('Failed to handle header scroll', error);
            }
        },

        handleNavClick(e) {
            try {
                // Don't prevent default for contact nav link
                if (e.target.classList.contains('contact-nav')) {
                    return;
                }
                
                e.preventDefault();
                const targetId = e.target.getAttribute('href');
                this.scrollToSection(targetId);
            } catch (error) {
                this.handleError('Failed to handle navigation click', error);
            }
        },

        handleKeydown(e) {
            try {
                // Handle ESC key for journey experience
                if (e.key === 'Escape' && this.state.journeyPageActive) {
                    this.hideJourneyExperience();
                    return;
                }

                switch (e.key) {
                    case 'ArrowLeft':
                        if (e.target.closest('.hero-carousel')) {
                            e.preventDefault();
                            this.prevSlide();
                        }
                        break;
                    case 'ArrowRight':
                        if (e.target.closest('.hero-carousel')) {
                            e.preventDefault();
                            this.nextSlide();
                        }
                        break;
                }
            } catch (error) {
                this.handleError('Failed to handle keydown', error);
            }
        },

        handleAccessibilityKeydown(e) {
            try {
                // Allow Enter and Space to trigger button clicks
                if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('btn')) {
                    e.preventDefault();
                    e.target.click();
                }
            } catch (error) {
                this.handleError('Failed to handle accessibility keydown', error);
            }
        },

        handleTouchStart(e) {
            try {
                this.state.touchStartX = e.touches[0].pageX - this.elements.cardsContainer.offsetLeft;
                this.state.scrollLeftPos = this.elements.cardsContainer.scrollLeft;
            } catch (error) {
                this.handleError('Failed to handle touch start', error);
            }
        },

        handleTouchMove(e) {
            try {
                if (!this.state.touchStartX) return;
                const x = e.touches[0].pageX - this.elements.cardsContainer.offsetLeft;
                const walk = (x - this.state.touchStartX) * 2;
                this.elements.cardsContainer.scrollLeft = this.state.scrollLeftPos - walk;
            } catch (error) {
                this.handleError('Failed to handle touch move', error);
            }
        },

        handleCarouselTouchStart(e) {
            try {
                this.state.touchStartX = e.changedTouches[0].screenX;
            } catch (error) {
                this.handleError('Failed to handle carousel touch start', error);
            }
        },

        handleCarouselTouchEnd(e) {
            try {
                this.state.touchEndX = e.changedTouches[0].screenX;
                this.handleCarouselSwipe();
            } catch (error) {
                this.handleError('Failed to handle carousel touch end', error);
            }
        },

        handleCarouselSwipe() {
            try {
                const swipeThreshold = 50;
                const diff = this.state.touchStartX - this.state.touchEndX;

                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        this.nextSlide();
                    } else {
                        this.prevSlide();
                    }
                }
            } catch (error) {
                this.handleError('Failed to handle carousel swipe', error);
            }
        },

        handleFocus(e) {
            try {
                e.target.style.outline = '2px solid #f4c430';
                e.target.style.outlineOffset = '2px';
            } catch (error) {
                // Silent error for non-critical focus styling
            }
        },

        handleBlur(e) {
            try {
                e.target.style.outline = '';
                e.target.style.outlineOffset = '';
            } catch (error) {
                // Silent error for non-critical focus styling
            }
        },

        handleResize() {
            try {
                this.updateScrollButtonStates();
            } catch (error) {
                this.handleError('Failed to handle resize', error);
            }
        },

        // Interactive effects
        initializeButtonEffects() {
            try {
                this.elements.buttons.forEach(button => {
                    button.addEventListener('mouseenter', function() {
                        this.style.transform = 'translateY(-3px)';
                    });
                    
                    button.addEventListener('mouseleave', function() {
                        this.style.transform = 'translateY(0)';
                    });
                    
                    button.addEventListener('mousedown', function() {
                        this.style.transform = 'translateY(-1px) scale(0.98)';
                    });
                    
                    button.addEventListener('mouseup', function() {
                        this.style.transform = 'translateY(-3px)';
                    });
                });
            } catch (error) {
                this.handleError('Failed to initialize button effects', error);
            }
        },

        initializeCardEffects() {
            try {
                // Inspiration cards
                this.elements.inspirationCards.forEach(card => {
                    card.addEventListener('mouseenter', function() {
                        this.style.boxShadow = '0 20px 60px rgba(244, 196, 48, 0.2), 0 0 30px rgba(244, 196, 48, 0.1)';
                    });
                    
                    card.addEventListener('mouseleave', function() {
                        this.style.boxShadow = '';
                    });
                });

                // Trip cards
                this.elements.tripCards.forEach(card => {
                    card.addEventListener('mouseenter', function() {
                        this.style.background = 'rgba(255, 255, 255, 0.2)';
                    });
                    
                    card.addEventListener('mouseleave', function() {
                        this.style.background = 'rgba(255, 255, 255, 0.1)';
                    });
                });

                // Team members
                this.elements.teamMembers.forEach(member => {
                    member.addEventListener('mouseenter', function() {
                        const image = this.querySelector('.team-image');
                        if (image) {
                            image.style.borderColor = '#f9d24c';
                            image.style.boxShadow = '0 0 30px rgba(244, 196, 48, 0.4)';
                        }
                    });
                    
                    member.addEventListener('mouseleave', function() {
                        const image = this.querySelector('.team-image');
                        if (image) {
                            image.style.borderColor = '#f4c430';
                            image.style.boxShadow = '';
                        }
                    });
                });

            } catch (error) {
                this.handleError('Failed to initialize card effects', error);
            }
        },

        // Utility methods
        scrollToSection(targetId) {
            try {
                const targetSection = document.querySelector(targetId);
                if (targetSection && this.elements.header) {
                    const headerHeight = this.elements.header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            } catch (error) {
                this.handleError('Failed to scroll to section', error);
            }
        },

        createScrollProgress() {
            try {
                const progressBar = document.createElement('div');
                progressBar.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 0%;
                    height: 3px;
                    background: linear-gradient(90deg, #f4c430, #d4722a);
                    z-index: 9999;
                    transition: width 0.1s ease;
                `;
                progressBar.setAttribute('aria-hidden', 'true');
                document.body.appendChild(progressBar);

                const updateProgress = this.debounce(() => {
                    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
                    progressBar.style.width = Math.min(100, Math.max(0, scrollPercent)) + '%';
                }, this.config.debounceDelay);

                window.addEventListener('scroll', updateProgress);

            } catch (error) {
                this.handleError('Failed to create scroll progress', error);
            }
        },

        setupAriaLiveRegion() {
            try {
                const liveRegion = document.createElement('div');
                liveRegion.setAttribute('aria-live', 'polite');
                liveRegion.setAttribute('aria-atomic', 'true');
                liveRegion.className = 'sr-only';
                liveRegion.id = 'carousel-live-region';
                document.body.appendChild(liveRegion);
            } catch (error) {
                this.handleError('Failed to setup ARIA live region', error);
            }
        },

        announceSlideChange(index) {
            try {
                const liveRegion = document.getElementById('carousel-live-region');
                if (liveRegion) {
                    const slideTitle = this.elements.carouselTitles[index]?.textContent || `Slide ${index + 1}`;
                    liveRegion.textContent = `Now showing: ${slideTitle}`;
                }
            } catch (error) {
                this.handleError('Failed to announce slide change', error);
            }
        },

        // Utility functions
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func.apply(this, args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        handleError(message, error) {
            console.error(`Gravity Travel Error: ${message}`, error);
            // In production, you might want to send errors to a logging service
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => GravityApp.init());
    } else {
        GravityApp.init();
    }

    // Expose minimal API for external use if needed
    window.GravityApp = {
        scrollToSection: GravityApp.scrollToSection.bind(GravityApp),
        hideJourneyExperience: GravityApp.hideJourneyExperience.bind(GravityApp),
        scrollToContact: GravityApp.scrollToContact.bind(GravityApp)
    };

    // Global scroll function for backward compatibility
    window.scrollToSection = function(targetId) {
        GravityApp.scrollToSection(targetId);
    };

})();