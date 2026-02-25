document.addEventListener('DOMContentLoaded', function() {

    // Contact Modal Logic
    const contactModal = document.getElementById('contact-modal');
    const contactLink = document.querySelector('a[href="#contact"]');
    if (contactModal && contactLink) {
        const contactCloseButton = contactModal.querySelector('.close-button');

        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            contactModal.style.display = 'block';
        });

        if (contactCloseButton) {
            contactCloseButton.addEventListener('click', () => {
                contactModal.style.display = 'none';
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.style.display = 'none';
            }
        });
    }

    // Payment Link Logic
    const basicPlanButton = document.getElementById('basic-plan-cta');
    if (basicPlanButton) {
        basicPlanButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'https://buy.stripe.com/bJe3cw7Fg2zD2CygL37EQ00';
        });
    }

    // Success Modal Logic
    const successModal = document.getElementById('success-modal');
    if (successModal) {
        const successCloseButton = successModal.querySelector('.close-button');
        
        if (successCloseButton) {
            successCloseButton.addEventListener('click', () => {
                successModal.style.display = 'none';
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.style.display = 'none';
            }
        });

        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('payment') === 'success') {
            successModal.style.display = 'block';
        }
    }

});
