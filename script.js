// ===== Navigation Scroll Effect =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Menu Toggle =====
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ===== Dark Mode Toggle =====
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});


// ===== Scroll to Top Button =====
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTop.classList.add('active');
    } else {
        scrollTop.classList.remove('active');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Smooth Scroll for Anchor Links =====
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

// ===== AOS (Animate On Scroll) Implementation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(element => {
    observer.observe(element);
});

// ===== Menu Modal Functionality =====
const menuData = {
    espresso: {
        name: 'Classic Espresso',
        price: '$3.50',
        image: 'images/espresso.jpg',
        description: 'A rich, bold shot of pure coffee perfection. Our espresso is made from carefully selected Arabica beans, roasted to perfection and extracted with precision. The result is a concentrated coffee with a thick golden crema, intense aroma, and complex flavor profile featuring notes of dark chocolate and caramel.',
        ingredients: 'Single origin Arabica beans, purified water',
        caffeine: 'High (75mg per shot)'
    },
    cappuccino: {
        name: 'Cappuccino',
        price: '$4.50',
        image: 'images/cappuccino.jpg',
        description: 'The perfect balance of espresso, steamed milk, and velvety foam. Our cappuccino is crafted with equal parts espresso, steamed milk, and milk foam, creating a harmonious blend that\'s both strong and creamy. Topped with a dusting of cocoa powder for an extra touch of indulgence.',
        ingredients: 'Espresso, whole milk, cocoa powder',
        caffeine: 'Medium (75mg)'
    },
    latte: {
        name: 'Caffe Latte',
        price: '$4.75',
        image: 'images/latte.jpg',
        description: 'Smooth espresso combined with velvety steamed milk and topped with a thin layer of foam. Our latte is the perfect choice for those who prefer a milder coffee flavor with a creamy texture. Can be customized with various flavored syrups.',
        ingredients: 'Espresso, steamed milk, milk foam',
        caffeine: 'Medium (75mg)'
    },
    mocha: {
        name: 'Mocha',
        price: '$5.25',
        image: 'images/mocha.jpg',
        description: 'A decadent blend of rich espresso, premium chocolate, and steamed milk, topped with whipped cream. Our mocha is made with high-quality dark chocolate, creating a perfect marriage of coffee and chocolate flavors that will satisfy any sweet tooth.',
        ingredients: 'Espresso, dark chocolate, steamed milk, whipped cream',
        caffeine: 'Medium (75mg)'
    },
    americano: {
        name: 'Americano',
        price: '$3.75',
        image: 'images/americano.jpg',
        description: 'A smooth and bold coffee made by diluting rich espresso with hot water. Our Americano offers the intensity of espresso with a lighter body, similar to drip coffee but with more depth and complexity. Perfect for those who enjoy a strong, straightforward coffee.',
        ingredients: 'Espresso, hot water',
        caffeine: 'High (150mg)'
    },
    coldbrew: {
        name: 'Cold Brew',
        price: '$4.95',
        image: 'images/cold-brew.jpg',
        description: 'Smooth, refreshing coffee steeped in cold water for 24 hours. Our cold brew process extracts the coffee\'s natural sweetness while minimizing acidity, resulting in a naturally sweet, smooth, and highly caffeinated beverage. Served over ice.',
        ingredients: 'Cold-steeped coffee, ice',
        caffeine: 'Very High (200mg)'
    }
};

function openModal(itemId) {
    const modal = document.getElementById('menuModal');
    const modalBody = document.getElementById('modalBody');
    const item = menuData[itemId];
    
    if (item) {
        modalBody.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p class="price">${item.price}</p>
            <p><strong>Description:</strong> ${item.description}</p>
            <p><strong>Ingredients:</strong> ${item.ingredients}</p>
            <p><strong>Caffeine Content:</strong> ${item.caffeine}</p>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('menuModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('menuModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ===== Newsletter Form Handling =====
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('newsletterEmail').value;
        const button = newsletterForm.querySelector('.btn');
        const originalText = button.innerHTML;
        
        // Show loading state
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
        button.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Show success message
            button.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
            button.style.background = '#4CAF50';
            
            // Show success notification
            showNotification('Success! Welcome to our coffee community! ☕', 'success');
            
            // Reset form after delay
            setTimeout(() => {
                newsletterForm.reset();
                button.innerHTML = originalText;
                button.disabled = false;
                button.style.background = '';
            }, 3000);
        }, 1500);
    });
}

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For now, we'll just show an alert
        showNotification(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`, 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// ===== Notification System =====
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ===== Enhanced Menu Slider =====
const menuSlider = document.getElementById('menuSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (menuSlider && prevBtn && nextBtn) {
    let currentIndex = 0;
    let autoScrollInterval;
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    
    const slides = menuSlider.querySelectorAll('.menu-slide');
    const totalSlides = slides.length;
    
    // Calculate slide width dynamically
    function getSlideWidth() {
        return slides[0].offsetWidth + 32; // width + gap
    }
    
    // Get visible slides count
    function getVisibleSlides() {
        const containerWidth = menuSlider.parentElement.offsetWidth;
        if (containerWidth <= 768) return 1;
        if (containerWidth <= 1024) return 2;
        return 3;
    }
    
    // Update slider position
    function updateSliderPosition(smooth = true) {
        const slideWidth = getSlideWidth();
        const translateX = -currentIndex * slideWidth;
        
        menuSlider.style.transition = smooth ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
        menuSlider.style.transform = `translateX(${translateX}px)`;
        
        // Update button states
        updateButtonStates();
    }
    
    // Update button visibility
    function updateButtonStates() {
        const maxIndex = totalSlides - getVisibleSlides();
        
        if (currentIndex <= 0) {
            prevBtn.style.opacity = '0.5';
            prevBtn.style.cursor = 'not-allowed';
        } else {
            prevBtn.style.opacity = '1';
            prevBtn.style.cursor = 'pointer';
        }
        
        if (currentIndex >= maxIndex) {
            nextBtn.style.opacity = '0.5';
            nextBtn.style.cursor = 'not-allowed';
        } else {
            nextBtn.style.opacity = '1';
            nextBtn.style.cursor = 'pointer';
        }
    }
    
    // Slide to next
    function slideNext() {
        const maxIndex = totalSlides - getVisibleSlides();
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSliderPosition();
        } else {
            // Loop back to start
            currentIndex = 0;
            updateSliderPosition();
        }
    }
    
    // Slide to previous
    function slidePrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    }
    
    // Auto-scroll functionality
    function startAutoScroll() {
        stopAutoScroll();
        autoScrollInterval = setInterval(() => {
            slideNext();
        }, 4000);
    }
    
    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
        }
    }
    
    // Touch/Mouse drag functionality
    function touchStart(index) {
        return function(event) {
            isDragging = true;
            startPos = getPositionX(event);
            animationID = requestAnimationFrame(animation);
            menuSlider.style.cursor = 'grabbing';
            stopAutoScroll();
        }
    }
    
    function touchMove(event) {
        if (isDragging) {
            const currentPosition = getPositionX(event);
            currentTranslate = prevTranslate + currentPosition - startPos;
        }
    }
    
    function touchEnd() {
        isDragging = false;
        cancelAnimationFrame(animationID);
        menuSlider.style.cursor = 'grab';
        
        const movedBy = currentTranslate - prevTranslate;
        
        // Determine if we should slide to next or previous
        if (movedBy < -100 && currentIndex < totalSlides - getVisibleSlides()) {
            currentIndex++;
        }
        
        if (movedBy > 100 && currentIndex > 0) {
            currentIndex--;
        }
        
        updateSliderPosition();
        prevTranslate = -currentIndex * getSlideWidth();
        
        startAutoScroll();
    }
    
    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }
    
    function animation() {
        if (isDragging) {
            menuSlider.style.transform = `translateX(${currentTranslate}px)`;
            requestAnimationFrame(animation);
        }
    }
    
    // Event listeners for buttons
    nextBtn.addEventListener('click', () => {
        stopAutoScroll();
        slideNext();
        startAutoScroll();
    });
    
    prevBtn.addEventListener('click', () => {
        stopAutoScroll();
        slidePrev();
        startAutoScroll();
    });
    
    // Touch events
    menuSlider.addEventListener('touchstart', touchStart(0));
    menuSlider.addEventListener('touchmove', touchMove);
    menuSlider.addEventListener('touchend', touchEnd);
    
    // Mouse events
    menuSlider.addEventListener('mousedown', touchStart(0));
    menuSlider.addEventListener('mousemove', touchMove);
    menuSlider.addEventListener('mouseup', touchEnd);
    menuSlider.addEventListener('mouseleave', () => {
        if (isDragging) {
            touchEnd();
        }
    });
    
    // Prevent context menu on long press
    menuSlider.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
    
    // Pause auto-scroll on hover
    menuSlider.addEventListener('mouseenter', stopAutoScroll);
    menuSlider.addEventListener('mouseleave', () => {
        if (!isDragging) {
            startAutoScroll();
        }
    });
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const maxIndex = totalSlides - getVisibleSlides();
            if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }
            updateSliderPosition(false);
        }, 250);
    });
    
    // Update center card scale effect
    function updateCenterCard() {
        const sliderRect = menuSlider.parentElement.getBoundingClientRect();
        const centerX = sliderRect.left + sliderRect.width / 2;
        
        slides.forEach((slide, index) => {
            const slideRect = slide.getBoundingClientRect();
            const slideCenterX = slideRect.left + slideRect.width / 2;
            const distance = Math.abs(centerX - slideCenterX);
            const maxDistance = sliderRect.width / 2;
            
            // Calculate scale based on distance from center
            const scale = Math.max(0.85, 1 - (distance / maxDistance) * 0.15);
            const opacity = Math.max(0.6, 1 - (distance / maxDistance) * 0.4);
            
            const card = slide.querySelector('.menu-card');
            if (card) {
                // Check if card is in center (within threshold)
                if (distance < slideRect.width / 2) {
                    card.style.transform = `scale(${scale})`;
                    card.style.opacity = opacity;
                    card.classList.add('center-card');
                } else {
                    card.style.transform = `scale(${scale})`;
                    card.style.opacity = opacity;
                    card.classList.remove('center-card');
                }
            }
        });
    }
    
    // Update center card on scroll
    const originalUpdatePositionFunc = updateSliderPosition;
    updateSliderPosition = function(smooth = true) {
        originalUpdatePositionFunc(smooth);
        setTimeout(updateCenterCard, smooth ? 500 : 0);
    };
    
    // Update on animation frame during drag
    const originalAnimation = animation;
    animation = function() {
        if (isDragging) {
            menuSlider.style.transform = `translateX(${currentTranslate}px)`;
            updateCenterCard();
            requestAnimationFrame(animation);
        }
    };
    
    // Initialize
    menuSlider.style.cursor = 'grab';
    updateSliderPosition(false);
    updateCenterCard();
    startAutoScroll();
    
    // Add smooth scroll indicator dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'slider-dots';
    menuSlider.parentElement.parentElement.appendChild(dotsContainer);
    
    function updateDots() {
        dotsContainer.innerHTML = '';
        const maxIndex = totalSlides - getVisibleSlides();
        for (let i = 0; i <= maxIndex; i++) {
            const dot = document.createElement('span');
            dot.className = 'slider-dot';
            if (i === currentIndex) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                stopAutoScroll();
                currentIndex = i;
                updateSliderPosition();
                updateDots();
                startAutoScroll();
            });
            dotsContainer.appendChild(dot);
        }
    }
    
    updateDots();
    
    // Update dots on slide change
    const originalUpdatePos = updateSliderPosition;
    updateSliderPosition = function(smooth = true) {
        originalUpdatePos(smooth);
        updateDots();
    };
    
    // Update center card on window resize
    window.addEventListener('resize', () => {
        updateCenterCard();
    });
    
    // Update center card on scroll (for smooth dragging)
    menuSlider.addEventListener('scroll', updateCenterCard);
}

// ===== Page Load Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
