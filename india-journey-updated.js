// Modal functionality for image gallery
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.close');
  const clickableImages = document.querySelectorAll('.clickable-img img');

  console.log('Found', clickableImages.length, 'clickable images'); // Debug log

  // Open modal when clicking on images
  clickableImages.forEach((img, index) => {
    console.log('Adding click listener to image', index); // Debug log
    img.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Image clicked:', this.src); // Debug log
      
      modal.classList.remove('hidden');
      modal.classList.add('visible');
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  });

  // Close modal function
  function closeModal() {
    console.log('Closing modal'); // Debug log
    modal.classList.remove('visible');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  // Close modal when clicking the close button
  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    });
  }

  // Close modal when clicking outside the image
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('visible')) {
      closeModal();
    }
  });

  // Smooth scrolling for better UX
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
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

  // Observe all destinations for scroll animations
  document.querySelectorAll('.destination').forEach(destination => {
    destination.style.opacity = '0';
    destination.style.transform = 'translateY(30px)';
    destination.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(destination);
  });

  // Enhanced hover effects for polaroids
  document.querySelectorAll('.polaroid').forEach(polaroid => {
    polaroid.addEventListener('mouseenter', function() {
      this.style.zIndex = '10';
    });
    
    polaroid.addEventListener('mouseleave', function() {
      this.style.zIndex = '2';
    });
  });

  // Alternative click handler for polaroid figures
  document.querySelectorAll('.polaroid').forEach((polaroid, index) => {
    polaroid.addEventListener('click', function(e) {
      console.log('Polaroid clicked:', index); // Debug log
      const img = this.querySelector('img');
      if (img) {
        modal.classList.remove('hidden');
        modal.classList.add('visible');
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Add parallax effect to zigzag background
  let ticking = false;
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.journey');
    
    if (parallax) {
      const speed = scrolled * 0.5;
      parallax.style.backgroundPosition = `0 ${speed}px, 100px ${100 + speed}px`;
    }
    
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick);

  // Add staggered animation for photo items
  const photoItems = document.querySelectorAll('.photo-item');
  
  const photoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 150); // Stagger the animations
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  photoItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    photoObserver.observe(item);
  });

  // Add dynamic rotation to polaroids on scroll
  const polaroids = document.querySelectorAll('.polaroid');
  
  function updatePolaroidRotation() {
    const scrolled = window.pageYOffset;
    
    polaroids.forEach((polaroid, index) => {
      const rect = polaroid.getBoundingClientRect();
      const centerY = window.innerHeight / 2;
      const distance = Math.abs(rect.top + rect.height / 2 - centerY);
      const maxDistance = window.innerHeight / 2;
      const rotation = (distance / maxDistance) * 5; // Max 5 degrees
      
      const baseRotation = index % 2 === 0 ? -2 : 2;
      const finalRotation = baseRotation + (index % 2 === 0 ? rotation : -rotation);
      
      if (!polaroid.matches(':hover')) {
        polaroid.style.transform = `rotate(${finalRotation}deg)`;
      }
    });
  }

  let polaroidTicking = false;
  
  function requestPolaroidTick() {
    if (!polaroidTicking) {
      requestAnimationFrame(updatePolaroidRotation);
      polaroidTicking = true;
    }
  }

  window.addEventListener('scroll', () => {
    requestPolaroidTick();
    polaroidTicking = false;
  });

  // Add keyboard navigation for modal
  document.addEventListener('keydown', function(e) {
    if (modal.classList.contains('visible')) {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        
        const currentSrc = modalImg.src;
        const currentIndex = Array.from(clickableImages).findIndex(img => img.src === currentSrc);
        
        let nextIndex;
        if (e.key === 'ArrowLeft') {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : clickableImages.length - 1;
        } else {
          nextIndex = currentIndex < clickableImages.length - 1 ? currentIndex + 1 : 0;
        }
        
        const nextImg = clickableImages[nextIndex];
        modalImg.src = nextImg.src;
        modalImg.alt = nextImg.alt;
      }
    }
  });

  // Add touch gesture support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  modal.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  modal.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      const currentSrc = modalImg.src;
      const currentIndex = Array.from(clickableImages).findIndex(img => img.src === currentSrc);
      
      let nextIndex;
      if (diff > 0) { // Swiped left
        nextIndex = currentIndex < clickableImages.length - 1 ? currentIndex + 1 : 0;
      } else { // Swiped right
        nextIndex = currentIndex > 0 ? currentIndex - 1 : clickableImages.length - 1;
      }
      
      const nextImg = clickableImages[nextIndex];
      modalImg.src = nextImg.src;
      modalImg.alt = nextImg.alt;
    }
  }

  // Add loading state for images
  clickableImages.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
    
    img.addEventListener('error', function() {
      console.warn('Failed to load image:', this.src);
    });
  });

  console.log('Travel timeline application initialized successfully');
});

// Journey conditional rendering functionality
function initializeJourneyFilter() {
  // Journey configuration
  const journeyConfig = {
    'all-india': {
      title: '15-Day All India Experience',
      subtitle: 'From Spiritual Awakening to Startup Innovation',
      articles: ['rishikesh', 'delhi', 'agra', 'jaipur', 'mumbai', 'bangalore']
    },
    'north-india': {
      title: '8-Day North India Focus',
      subtitle: 'Golden Triangle plus Varanasi - Cultural Immersion',
      articles: ['rishikesh', 'delhi', 'agra', 'jaipur']
    },
    'religious': {
      title: '5-Day Religious Pilgrimage',
      subtitle: 'Spiritual Transformation Through Sacred Sites',
      articles: ['rishikesh']
    }
  };

  // Get journey type from URL parameters
  function getJourneyTypeFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('journey') || 'all-india'; // Default to all-india
  }

  // Update page content based on journey type
  function updatePageContent(journeyType) {
    const config = journeyConfig[journeyType];
    if (!config) {
      console.warn('Unknown journey type:', journeyType);
      return;
    }

    // Update title and subtitle
    const titleElement = document.getElementById('journey-title');
    const subtitleElement = document.getElementById('journey-subtitle');
    
    if (titleElement) titleElement.textContent = config.title;
    if (subtitleElement) subtitleElement.textContent = config.subtitle;

    // Show/hide articles based on journey type
    const allArticles = document.querySelectorAll('.destination');
    
    allArticles.forEach(article => {
      const articleId = article.id;
      const journeyData = article.getAttribute('data-journey');
      
      if (config.articles.includes(articleId) && journeyData && journeyData.includes(journeyType)) {
        article.style.display = 'block';
        article.classList.add('visible');
      } else {
        article.style.display = 'none';
        article.classList.remove('visible');
      }
    });

    console.log(`Loaded ${journeyType} journey with ${config.articles.length} destinations`);
  }

  // Initialize journey filtering
  const journeyType = getJourneyTypeFromURL();
  updatePageContent(journeyType);

  // Listen for journey changes (if navigating between different journey types)
  window.addEventListener('popstate', () => {
    const newJourneyType = getJourneyTypeFromURL();
    updatePageContent(newJourneyType);
  });

  console.log('Journey filter initialized for:', journeyType);
}

// Call the journey filter initialization
initializeJourneyFilter();
