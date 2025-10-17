        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            feather.replace();
        });

        const contactForm = document.getElementById('contact-form');
        const successMessage = document.getElementById('success-message');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('name-error');
            if (nameInput.value.trim() === '') {
                nameError.classList.remove('hidden');
                isValid = false;
            } else {
                nameError.classList.add('hidden');
            }
            
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('email-error');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailError.classList.remove('hidden');
                isValid = false;
            } else {
                emailError.classList.add('hidden');
            }
            
            const subjectInput = document.getElementById('subject');
            const subjectError = document.getElementById('subject-error');
            if (subjectInput.value === '') {
                subjectError.classList.remove('hidden');
                isValid = false;
            } else {
                subjectError.classList.add('hidden');
            }
            
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('message-error');
            if (messageInput.value.trim() === '') {
                messageError.classList.remove('hidden');
                isValid = false;
            } else {
                messageError.classList.add('hidden');
            }
            
            if (isValid) {
                setTimeout(() => {
                    contactForm.reset();
                    successMessage.style.opacity = '1';
                    successMessage.style.height = 'auto';
                    successMessage.style.padding = '1rem';
                    
                    setTimeout(() => {
                        anime({
                            targets: '#success-message',
                            opacity: 0,
                            height: 0,
                            padding: 0,
                            duration: 500,
                            easing: 'easeOutExpo'
                        });
                    }, 5000);
                }, 1000);
            }
        });


        document.addEventListener('DOMContentLoaded', () => {
            feather.replace();
            

            anime({
                targets: '.contact-card',
                opacity: [0, 1],
                translateY: [30, 0],
                delay: anime.stagger(100),
                duration: 800,
                easing: 'easeOutExpo'
            });
            
            anime({
                targets: '#contact-form',
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 800,
                delay: 300,
                easing: 'easeOutExpo'
            });
        });
            

            anime({
                targets: '.timeline-item',
                opacity: [0, 1],
                translateX: [-30, 0],
                delay: anime.stagger(200),
                duration: 800,
                easing: 'easeOutExpo'
            });
            

            const stats = document.querySelectorAll('.stat-number');
            stats.forEach(stat => {
                const target = +stat.textContent;
                stat.textContent = '0';
                
                anime({
                    targets: stat,
                    innerHTML: [0, target],
                    round: 1,
                    duration: 1500,
                    easing: 'easeOutExpo'
                });
            });

        document.addEventListener('DOMContentLoaded', () => {
            feather.replace();
            

            anime({
                targets: '.timeline-item',
                opacity: [0, 1],
                translateX: [-30, 0],
                delay: anime.stagger(200),
                duration: 800,
                easing: 'easeOutExpo'
            });
            

            const stats = document.querySelectorAll('.stat-number');
            stats.forEach(stat => {
                const target = +stat.textContent;
                stat.textContent = '0';
                
                anime({
                    targets: stat,
                    innerHTML: [0, target],
                    round: 1,
                    duration: 1500,
                    easing: 'easeOutExpo'
                });
            });
        });

                const track = document.querySelector('.carousel-track');
        const slides = Array.from(document.querySelectorAll('.carousel-slide'));
        const nextButton = document.querySelector('.carousel-next');
        const prevButton = document.querySelector('.carousel-prev');
        
        const slideWidth = slides[0].getBoundingClientRect().width;
        let currentIndex = 0;
        
        slides.forEach((slide, index) => {
            slide.style.left = `${slideWidth * index}px`;
        });
        
        const moveToSlide = (track, currentSlide, targetSlide) => {
            track.style.transform = `translateX(-${targetSlide.style.left})`;
            currentIndex = slides.indexOf(targetSlide);
        };
        
        nextButton.addEventListener('click', () => {
            const currentSlide = document.querySelector('.carousel-slide.active') || slides[0];
            const nextSlide = currentSlide.nextElementSibling || slides[0];
            moveToSlide(track, currentSlide, nextSlide);
        });
        
        prevButton.addEventListener('click', () => {
            const currentSlide = document.querySelector('.carousel-slide.active') || slides[0];
            const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
            moveToSlide(track, currentSlide, prevSlide);
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        const modal = document.getElementById('art-modal');
        const closeModal = document.getElementById('close-modal');
        
        closeModal.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
        
        function openModal(imageSrc, title, artist, description) {
            document.getElementById('modal-image').src = imageSrc;
            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-artist').textContent = artist;
            document.getElementById('modal-description').textContent = description;
            modal.classList.remove('hidden');
        }
            anime.timeline({
                easing: 'easeOutExpo',
            })
            .add({
                targets: '.hero-bg h1',
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 1000
            })
            .add({
                targets: '.hero-bg p',
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 800,
                offset: '-=500'
            })
            .add({
                targets: '.hero-bg a',
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 600,
                delay: anime.stagger(100),
                offset: '-=600'
            });

            anime({
                targets: '#featured .grid > div',
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 1000,
                delay: anime.stagger(200),
                easing: 'easeOutExpo'
            });

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value.trim(),
        subscribe: document.getElementById('subscribe').checked,
        timestamp: new Date().toISOString()
    };

    try {
        const response = await fetch('/save_message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            contactForm.reset();
            successMessage.style.opacity = '1';
            successMessage.style.height = 'auto';
        } else {
            alert('Error saving your message. Try again.');
        }
    } catch (err) {
        console.error('Error:', err);
    }
});