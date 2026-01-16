// Smooth scrolling for anchor links
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

// Waitlist form handling
const waitlistForm = document.getElementById('waitlist-form');
const formMessage = document.getElementById('form-message');
const emailInput = document.getElementById('email');

waitlistForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = emailInput.value.trim();

    // Basic email validation
    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Disable submit button during processing
    const submitButton = waitlistForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Joining...';

    try {
        // Store email in localStorage (in production, send to your backend/email service)
        const waitlistEmails = JSON.parse(localStorage.getItem('waitlistEmails') || '[]');

        if (waitlistEmails.includes(email)) {
            showMessage('You\'re already on the waitlist!', 'success');
        } else {
            waitlistEmails.push(email);
            localStorage.setItem('waitlistEmails', JSON.stringify(waitlistEmails));
            showMessage('Success! You\'re on the waitlist. We\'ll be in touch soon.', 'success');
            emailInput.value = '';
        }

        // In production, you would send the email to your backend:
        // const response = await fetch('/api/waitlist', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email })
        // });
        // const data = await response.json();

    } catch (error) {
        showMessage('Oops! Something went wrong. Please try again.', 'error');
        console.error('Error:', error);
    } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show message helper
function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;

    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }
}

// Add fade-in animation to sections on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('.content-block').forEach(block => {
    block.style.opacity = '0';
    block.style.transform = 'translateY(30px)';
    block.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(block);
});
