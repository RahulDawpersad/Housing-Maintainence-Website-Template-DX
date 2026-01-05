  // JavaScript for Hamburger Menu, Form Submission (AJAX for Netlify), and Scroll Effects
        const hamburger = document.querySelector('.hamburger');
        const navUl = document.querySelector('nav ul');
        const header = document.querySelector('header');

        hamburger.addEventListener('click', () => {
            navUl.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        const form = document.getElementById('contactForm');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            try {
                const response = await fetch('/', {
                    method: 'POST',
                    body: formData
                });
                if (response.ok) {
                    alert('Message sent successfully! Thank you.');
                    form.reset();
                } else {
                    alert('Failed to send message. Please try again later.');
                }
            } catch (error) {
                alert('Failed to send message. Please try again later.');
                console.error('Form submission error:', error);
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });