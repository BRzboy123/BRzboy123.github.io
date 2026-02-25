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

    // Stripe Checkout Logic
    const basicPlanButton = document.getElementById('basic-plan-cta');
    if (basicPlanButton) {
        const stripe = Stripe('pk_live_51Som61JuuVUrfrDt0NXKohrahswLuLP6KBrDzVghVPw8DxJN87kjHY6GSM6lx4gjvhwcBRHEGuQ729lxQwiUsV6U00HT3hYabh');
        
        basicPlanButton.addEventListener('click', function(e) {
            e.preventDefault();
            stripe.redirectToCheckout({
                lineItems: [{ price: 'price_1T4UaPJuuVUrfrDtNMNjd5SO', quantity: 1 }],
                mode: 'payment',
                successUrl: window.location.origin + '/?payment=success',
                cancelUrl: window.location.origin + '/?payment=cancel',
            })
            .then(function(result) {
                if (result.error) {
                    alert(result.error.message);
                }
            });
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
