// Romantic Birthday Website - JavaScript
// Simple, clean, and accessible interactions

(function() {
    'use strict';
    
    // DOM Elements
    const surpriseBtn = document.getElementById('surpriseBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalContent = modalOverlay.querySelector('.modal-content');
    
    // Animation Elements
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    // Petals Container
    const petalsContainer = document.querySelector('.petals-container');
    
    // Celebration Container
    const celebrationContainer = document.getElementById('celebrationContainer');
    
    // Initialize everything when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        initAnimations();
        initModal();
        initPetals();
        initAccessibility();
        initCountdown();
    });
    
    // Intersection Observer for scroll animations
    function initAnimations() {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            // If reduced motion is preferred, just show all elements
            animatedElements.forEach(el => {
                el.classList.add('animate');
            });
            return;
        }
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    // Unobserve after animation to prevent re-triggering
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
    
    // Modal functionality
    function initModal() {
        if (!surpriseBtn || !modalOverlay || !modalClose) return;
        
        // Open modal
        surpriseBtn.addEventListener('click', openModal);
        
        // Close modal
        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
        
        // ESC key to close
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeModal();
            }
        });
    }
    
    function openModal() {
        // Start birthday celebration first!
        startBirthdayCelebration();
        
        // Then open modal after a short delay
        setTimeout(() => {
            modalOverlay.classList.add('active');
            modalOverlay.setAttribute('aria-hidden', 'false');
            
            // Focus trap
            trapFocus(modalContent);
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
            
            // Announce to screen readers
            announceToScreenReader('Special birthday message opened with celebration!');
        }, 500);
    }
    
    function closeModal() {
        modalOverlay.classList.remove('active');
        modalOverlay.setAttribute('aria-hidden', 'true');
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Return focus to button
        surpriseBtn.focus();
        
        // Announce to screen readers
        announceToScreenReader('Special message closed');
    }
    
    // Focus trap for modal
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
        
        // Focus first element
        firstElement.focus();
    }
    
    // Birthday celebration functions
    function startBirthdayCelebration() {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion || !celebrationContainer) {
            return;
        }
        
        // Clear any existing celebration elements
        celebrationContainer.innerHTML = '';
        
        // Create celebration effects
        createConfetti();
        createFirecrackers();
        createCandles();
        createSparkles();
        createBalloons();
        createEnhancedFireworks();
        createPartyPoppers();
        createStreamers();
        
        // Play celebration sound effect (optional - can be added later)
        // playBirthdaySound();
    }
    
    function createConfetti() {
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                
                // Random position and properties
                const startX = Math.random() * window.innerWidth;
                const delay = Math.random() * 2;
                const duration = Math.random() * 2 + 2; // 2-4 seconds
                
                confetti.style.left = startX + 'px';
                confetti.style.animationDelay = delay + 's';
                confetti.style.animationDuration = duration + 's';
                
                // Random colors
                const colors = ['var(--accent-rose)', 'var(--accent-mauve)', '#FFD700', '#FF69B4', '#FF4500'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.background = randomColor;
                
                celebrationContainer.appendChild(confetti);
                
                // Remove confetti after animation
                setTimeout(() => {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                }, (duration + delay) * 1000);
            }, i * 50);
        }
    }
    
    function createFirecrackers() {
        const firecrackerCount = 20;
        
        for (let i = 0; i < firecrackerCount; i++) {
            setTimeout(() => {
                const firecracker = document.createElement('div');
                firecracker.className = 'firecracker';
                
                // Random position
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                const delay = Math.random() * 1;
                
                firecracker.style.left = x + 'px';
                firecracker.style.top = y + 'px';
                firecracker.style.animationDelay = delay + 's';
                
                celebrationContainer.appendChild(firecracker);
                
                // Remove firecracker after animation
                setTimeout(() => {
                    if (firecracker.parentNode) {
                        firecracker.parentNode.removeChild(firecracker);
                    }
                }, (1.5 + delay) * 1000);
            }, i * 100);
        }
    }
    
    function createCandles() {
        const candleCount = 15;
        
        for (let i = 0; i < candleCount; i++) {
            setTimeout(() => {
                const candle = document.createElement('div');
                candle.className = 'candle';
                
                // Random position
                const x = Math.random() * (window.innerWidth - 20);
                const y = Math.random() * (window.innerHeight - 30);
                const delay = Math.random() * 1;
                
                candle.style.left = x + 'px';
                candle.style.top = y + 'px';
                candle.style.animationDelay = delay + 's';
                
                celebrationContainer.appendChild(candle);
                
                // Remove candle after animation
                setTimeout(() => {
                    if (candle.parentNode) {
                        candle.parentNode.removeChild(candle);
                    }
                }, (3 + delay) * 1000);
            }, i * 150);
        }
    }
    
    function createSparkles() {
        const sparkleCount = 30;
        
        for (let i = 0; i < sparkleCount; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.className = 'birthday-sparkle';
                
                // Random position
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                const delay = Math.random() * 2;
                
                sparkle.style.left = x + 'px';
                sparkle.style.top = y + 'px';
                sparkle.style.animationDelay = delay + 's';
                
                celebrationContainer.appendChild(sparkle);
                
                // Remove sparkle after animation
                setTimeout(() => {
                    if (sparkle.parentNode) {
                        sparkle.parentNode.removeChild(sparkle);
                    }
                }, (4 + delay) * 1000);
            }, i * 80);
        }
    }
    
    function createBalloons() {
        const balloonCount = 25;
        const balloonColors = ['red', 'pink', 'purple', 'blue', 'yellow', 'green', 'orange'];
        
        for (let i = 0; i < balloonCount; i++) {
            setTimeout(() => {
                const balloon = document.createElement('div');
                balloon.className = 'balloon';
                
                // Random color
                const randomColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
                balloon.classList.add(randomColor);
                
                // Random position and properties
                const startX = Math.random() * window.innerWidth;
                const delay = Math.random() * 3;
                const duration = Math.random() * 3 + 6; // 6-9 seconds
                
                balloon.style.left = startX + 'px';
                balloon.style.animationDelay = delay + 's';
                balloon.style.animationDuration = duration + 's';
                
                celebrationContainer.appendChild(balloon);
                
                // Remove balloon after animation
                setTimeout(() => {
                    if (balloon.parentNode) {
                        balloon.parentNode.removeChild(balloon);
                    }
                }, (duration + delay) * 1000);
            }, i * 200);
        }
    }
    
    function createEnhancedFireworks() {
        const fireworkCount = 30;
        const fireworkColors = ['red', 'blue', 'green', 'purple', 'yellow', 'pink'];
        
        for (let i = 0; i < fireworkCount; i++) {
            setTimeout(() => {
                const firework = document.createElement('div');
                firework.className = 'firework';
                
                // Random color
                const randomColor = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
                firework.classList.add(randomColor);
                
                // Random position
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                const delay = Math.random() * 2;
                
                firework.style.left = x + 'px';
                firework.style.top = y + 'px';
                firework.style.animationDelay = delay + 's';
                
                celebrationContainer.appendChild(firework);
                
                // Remove firework after animation
                setTimeout(() => {
                    if (firework.parentNode) {
                        firework.parentNode.removeChild(firework);
                    }
                }, (2 + delay) * 1000);
            }, i * 120);
        }
    }
    
    function createPartyPoppers() {
        const popperCount = 20;
        
        for (let i = 0; i < popperCount; i++) {
            setTimeout(() => {
                const popper = document.createElement('div');
                popper.className = 'party-popper';
                
                // Random position
                const x = Math.random() * (window.innerWidth - 20);
                const y = Math.random() * (window.innerHeight - 30);
                const delay = Math.random() * 1.5;
                
                popper.style.left = x + 'px';
                popper.style.top = y + 'px';
                popper.style.animationDelay = delay + 's';
                
                celebrationContainer.appendChild(popper);
                
                // Remove popper after animation
                setTimeout(() => {
                    if (popper.parentNode) {
                        popper.parentNode.removeChild(popper);
                    }
                }, (1.5 + delay) * 1000);
            }, i * 100);
        }
    }
    
    function createStreamers() {
        const streamerCount = 40;
        
        for (let i = 0; i < streamerCount; i++) {
            setTimeout(() => {
                const streamer = document.createElement('div');
                streamer.className = 'streamer';
                
                // Random position and properties
                const startX = Math.random() * window.innerWidth;
                const delay = Math.random() * 2;
                const duration = Math.random() * 2 + 2; // 2-4 seconds
                
                streamer.style.left = startX + 'px';
                streamer.style.animationDelay = delay + 's';
                streamer.style.animationDuration = duration + 's';
                
                celebrationContainer.appendChild(streamer);
                
                // Remove streamer after animation
                setTimeout(() => {
                    if (streamer.parentNode) {
                        streamer.parentNode.removeChild(streamer);
                    }
                }, (duration + delay) * 1000);
            }, i * 60);
        }
    }
    
    // Petals animation
    function initPetals() {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion || !petalsContainer) {
            return;
        }
        
        createPetals();
        
        // Create new petals periodically
        setInterval(createPetals, 3000);
    }
    
    function createPetals() {
        const petalCount = Math.floor(Math.random() * 3) + 2; // 2-4 petals at a time
        
        for (let i = 0; i < petalCount; i++) {
            setTimeout(() => {
                createSinglePetal();
            }, i * 200);
        }
    }
    
    function createSinglePetal() {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Random position and properties
        const startX = Math.random() * window.innerWidth;
        const size = Math.random() * 4 + 4; // 4-8px
        const duration = Math.random() * 10 + 10; // 10-20 seconds
        const delay = Math.random() * 2; // 0-2 seconds delay
        
        petal.style.left = startX + 'px';
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        petal.style.animationDuration = duration + 's';
        petal.style.animationDelay = delay + 's';
        
        // Random color variation
        const colors = ['var(--accent-rose)', 'var(--accent-mauve)'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        petal.style.background = randomColor;
        
        petalsContainer.appendChild(petal);
        
        // Remove petal after animation
        setTimeout(() => {
            if (petal.parentNode) {
                petal.parentNode.removeChild(petal);
            }
        }, (duration + delay) * 1000);
    }
    
    // Accessibility enhancements
    function initAccessibility() {
        // Add skip link for keyboard navigation
        addSkipLink();
        
        // Enhance focus indicators
        enhanceFocusIndicators();
        
        // Add ARIA labels where needed
        addAriaLabels();
    }
    
    function addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--accent-mauve);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', function() {
            this.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
    
    function enhanceFocusIndicators() {
        // Add focus indicators to interactive elements
        const interactiveElements = document.querySelectorAll('button, a, [tabindex]');
        
        interactiveElements.forEach(el => {
            el.addEventListener('focus', function() {
                this.style.outline = '2px solid var(--accent-mauve)';
                this.style.outlineOffset = '2px';
            });
            
            el.addEventListener('blur', function() {
                this.style.outline = '';
                this.style.outlineOffset = '';
            });
        });
    }
    
    function addAriaLabels() {
        // Add ARIA labels to decorative elements
        const heartElements = document.querySelectorAll('❤️');
        heartElements.forEach(heart => {
            heart.setAttribute('aria-label', 'heart');
        });
    }
    
    // Screen reader announcements
    function announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.style.cssText = `
            position: absolute;
            left: -10000px;
            width: 1px;
            height: 1px;
            overflow: hidden;
        `;
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }
    
    // Smooth scroll for anchor links
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
    
    // Handle window resize for petals
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Clear existing petals on resize to prevent overflow
            if (petalsContainer) {
                const existingPetals = petalsContainer.querySelectorAll('.petal');
                existingPetals.forEach(petal => {
                    if (petal.parentNode) {
                        petal.parentNode.removeChild(petal);
                    }
                });
            }
        }, 250);
    });
    
    // Performance optimization: Pause animations when tab is not visible
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // Pause petals animation
            if (petalsContainer) {
                const petals = petalsContainer.querySelectorAll('.petal');
                petals.forEach(petal => {
                    petal.style.animationPlayState = 'paused';
                });
            }
        } else {
            // Resume petals animation
            if (petalsContainer) {
                const petals = petalsContainer.querySelectorAll('.petal');
                petals.forEach(petal => {
                    petal.style.animationPlayState = 'running';
                });
            }
        }
    });
    
    // Countdown functionality
    function initCountdown() {
        const countdownBtn = document.getElementById('countdownBtn');
        const countdownModalOverlay = document.getElementById('countdownModalOverlay');
        const countdownModalClose = document.getElementById('countdownModalClose');
        const countdownModalContent = countdownModalOverlay.querySelector('.countdown-modal-content');
        
        // Target date: April 1, 2026, 00:00:00 (midnight)
        const targetDate = new Date('2026-04-01T00:00:00').getTime();
        
        // Countdown elements
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        let countdownInterval = null;
        
        if (!countdownBtn || !countdownModalOverlay || !countdownModalClose) return;
        
        // Open countdown modal
        countdownBtn.addEventListener('click', openCountdownModal);
        
        // Close countdown modal
        countdownModalClose.addEventListener('click', closeCountdownModal);
        countdownModalOverlay.addEventListener('click', function(e) {
            if (e.target === countdownModalOverlay) {
                closeCountdownModal();
            }
        });
        
        // ESC key to close
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && countdownModalOverlay.classList.contains('active')) {
                closeCountdownModal();
            }
        });
        
        function openCountdownModal() {
            countdownModalOverlay.classList.add('active');
            countdownModalOverlay.setAttribute('aria-hidden', 'false');
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
            
            // Start countdown
            updateCountdown();
            countdownInterval = setInterval(updateCountdown, 1000);
            
            // Focus trap
            trapFocusCountdown(countdownModalContent);
            
            // Announce to screen readers
            announceToScreenReader('Countdown to meeting opened');
        }
        
        function closeCountdownModal() {
            countdownModalOverlay.classList.remove('active');
            countdownModalOverlay.setAttribute('aria-hidden', 'true');
            
            // Restore body scroll
            document.body.style.overflow = '';
            
            // Stop countdown interval
            if (countdownInterval) {
                clearInterval(countdownInterval);
                countdownInterval = null;
            }
            
            // Return focus to button
            countdownBtn.focus();
            
            // Announce to screen readers
            announceToScreenReader('Countdown closed');
        }
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;
            
            if (distance < 0) {
                // Date has passed
                daysEl.textContent = '000';
                hoursEl.textContent = '00';
                minutesEl.textContent = '00';
                secondsEl.textContent = '00';
                
                if (countdownInterval) {
                    clearInterval(countdownInterval);
                    countdownInterval = null;
                }
                return;
            }
            
            // Calculate time units
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Update display with animation
            updateCountdownElement(daysEl, days, 3);
            updateCountdownElement(hoursEl, hours, 2);
            updateCountdownElement(minutesEl, minutes, 2);
            updateCountdownElement(secondsEl, seconds, 2);
        }
        
        function updateCountdownElement(element, value, digits) {
            const formattedValue = String(value).padStart(digits, '0');
            const currentValue = element.textContent.trim();
            
            if (currentValue !== formattedValue) {
                // Add pulse animation
                element.classList.add('updating');
                
                // Update value
                element.textContent = formattedValue;
                
                // Remove animation class after animation completes
                setTimeout(() => {
                    element.classList.remove('updating');
                }, 500);
            }
        }
        
        // Focus trap for countdown modal
        function trapFocusCountdown(element) {
            const focusableElements = element.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            const handleKeyDown = function(e) {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            lastElement.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            firstElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            };
            
            element.addEventListener('keydown', handleKeyDown);
            
            // Focus first element
            if (firstElement) {
                firstElement.focus();
            }
        }
    }
    
})();

