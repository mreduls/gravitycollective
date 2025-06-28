// Gravity - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    
    // Header scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(28, 28, 28, 0.95)';
        } else {
            header.style.background = 'rgba(28, 28, 28, 0.9)';
        }
    });

    // Carousel functionality
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentSlide = 0;

    // Dynamic text effects for carousel
    const carouselTitles = document.querySelectorAll('.carousel-title');
    const carouselCaptions = document.querySelectorAll('.carousel-caption');
    
    function animateCarouselText() {
        carouselTitles.forEach((title, index) => {
            if (index === currentSlide) {
                setTimeout(() => {
                    title.style.opacity = '1';
                    title.style.transform = 'translateY(0)';
                }, 300);
            } else {
                title.style.opacity = '0';
                title.style.transform = 'translateY(30px)';
            }
        });
        
        carouselCaptions.forEach((caption, index) => {
            if (index === currentSlide) {
                setTimeout(() => {
                    caption.style.opacity = '1';
                    caption.style.transform = 'translateY(0)';
                }, 600);
            } else {
                caption.style.opacity = '0';
                caption.style.transform = 'translateY(30px)';
            }
        });
    }

    function showSlide(index) {
        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Add active class to current slide and indicator
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        
        currentSlide = index;
        
        // Trigger text animation
        setTimeout(animateCarouselText, 100);
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }

    // Event listeners for carousel controls
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }

    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Initial carousel text animation setup
    carouselTitles.forEach(title => {
        title.style.transition = 'all 0.8s ease';
    });
    
    carouselCaptions.forEach(caption => {
        caption.style.transition = 'all 0.8s ease';
    });

    // Trigger initial animation
    setTimeout(animateCarouselText, 500);

    // Smooth scrolling function
    window.scrollToSection = function(targetId) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId);
        });
    });

    // Horizontal scrolling for inspiration cards
    const cardsContainer = document.getElementById('philosophyCards');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');
    
    if (cardsContainer && scrollLeftBtn && scrollRightBtn) {
        const cardWidth = 320; // Card width in pixels
        const cardGap = 20; // Gap between cards in pixels
        const scrollAmount = cardWidth + cardGap;
        
        // Initial scroll position
        let currentScrollPosition = 0;
        const maxScrollPosition = cardsContainer.scrollWidth - cardsContainer.clientWidth;
        
        // Update button states
        function updateButtonStates() {
            currentScrollPosition = cardsContainer.scrollLeft;
            
            // Disable left button at the beginning
            if (currentScrollPosition <= 0) {
                scrollLeftBtn.style.opacity = '0.5';
                scrollLeftBtn.style.cursor = 'not-allowed';
            } else {
                scrollLeftBtn.style.opacity = '1';
                scrollLeftBtn.style.cursor = 'pointer';
            }
            
            // Disable right button at the end
            if (currentScrollPosition >= maxScrollPosition - 10) {
                scrollRightBtn.style.opacity = '0.5';
                scrollRightBtn.style.cursor = 'not-allowed';
            } else {
                scrollRightBtn.style.opacity = '1';
                scrollRightBtn.style.cursor = 'pointer';
            }
        }
        
        // Scroll left functionality
        scrollLeftBtn.addEventListener('click', function() {
            if (currentScrollPosition > 0) {
                cardsContainer.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            }
        });
        
        // Scroll right functionality
        scrollRightBtn.addEventListener('click', function() {
            if (currentScrollPosition < maxScrollPosition - 10) {
                cardsContainer.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        });
        
        // Listen for scroll events to update button states
        cardsContainer.addEventListener('scroll', updateButtonStates);
        
        // Initial button state setup
        updateButtonStates();
        
        // Handle window resize
        window.addEventListener('resize', function() {
            updateButtonStates();
        });
    }

    // Touch/swipe support for mobile devices - Inspiration cards
    let isDown = false;
    let startX;
    let scrollLeftPos;

    if (cardsContainer) {
        cardsContainer.addEventListener('mousedown', function(e) {
            isDown = true;
            cardsContainer.style.cursor = 'grabbing';
            startX = e.pageX - cardsContainer.offsetLeft;
            scrollLeftPos = cardsContainer.scrollLeft;
        });

        cardsContainer.addEventListener('mouseleave', function() {
            isDown = false;
            cardsContainer.style.cursor = 'grab';
        });

        cardsContainer.addEventListener('mouseup', function() {
            isDown = false;
            cardsContainer.style.cursor = 'grab';
        });

        cardsContainer.addEventListener('mousemove', function(e) {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - cardsContainer.offsetLeft;
            const walk = (x - startX) * 2;
            cardsContainer.scrollLeft = scrollLeftPos - walk;
        });

        // Touch events for mobile
        cardsContainer.addEventListener('touchstart', function(e) {
            startX = e.touches[0].pageX - cardsContainer.offsetLeft;
            scrollLeftPos = cardsContainer.scrollLeft;
        });

        cardsContainer.addEventListener('touchmove', function(e) {
            if (!startX) return;
            const x = e.touches[0].pageX - cardsContainer.offsetLeft;
            const walk = (x - startX) * 2;
            cardsContainer.scrollLeft = scrollLeftPos - walk;
        });
    }

    // Touch/swipe support for carousel
    let carouselStartX = 0;
    let carouselEndX = 0;
    const carouselContainer = document.querySelector('.carousel-container');

    if (carouselContainer) {
        carouselContainer.addEventListener('touchstart', function(e) {
            carouselStartX = e.changedTouches[0].screenX;
        });

        carouselContainer.addEventListener('touchend', function(e) {
            carouselEndX = e.changedTouches[0].screenX;
            handleCarouselSwipe();
        });

        function handleCarouselSwipe() {
            const swipeThreshold = 50;
            const diff = carouselStartX - carouselEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swiped left, go to next slide
                    nextSlide();
                } else {
                    // Swiped right, go to previous slide
                    prevSlide();
                }
            }
        }
    }

    // Keyboard navigation for carousel
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.trip-card, .team-member, .inspiration-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
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

    // Card hover effects enhancement
    const inspirationCards = document.querySelectorAll('.inspiration-card');
    
    inspirationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add glow effect
            this.style.boxShadow = '0 20px 60px rgba(244, 196, 48, 0.2), 0 0 30px rgba(244, 196, 48, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });

    // Trip card interactions
    const tripCards = document.querySelectorAll('.trip-card');
    
    tripCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    });

    // Team member card interactions
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
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

    // Scroll progress indicator
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.style.position = 'fixed';
        progressBar.style.top = '0';
        progressBar.style.left = '0';
        progressBar.style.width = '0%';
        progressBar.style.height = '3px';
        progressBar.style.background = 'linear-gradient(90deg, #f4c430, #d4722a)';
        progressBar.style.zIndex = '9999';
        progressBar.style.transition = 'width 0.1s ease';
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    };

    // Initialize scroll progress
    createScrollProgress();

    // LinkedIn link analytics (optional)
    const linkedinLinks = document.querySelectorAll('.linkedin-link');
    linkedinLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('LinkedIn profile visited:', this.href);
            // Add analytics tracking here if needed
        });
    });

    // Enhanced accessibility
    document.addEventListener('keydown', function(e) {
        // Allow Enter and Space to trigger button clicks
        if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('btn')) {
            e.preventDefault();
            e.target.click();
        }
    });

    // Ensure proper focus management
    const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    focusableElements.forEach(el => {
        el.addEventListener('focus', function() {
            this.style.outline = '2px solid #f4c430';
            this.style.outlineOffset = '2px';
        });
        
        el.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });

    console.log('Gravity - Interactive features loaded successfully');
});