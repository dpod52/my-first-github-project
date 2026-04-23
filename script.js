document.addEventListener('DOMContentLoaded', () => {
    // Dynamically update the copyright year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Button interaction with simulated delay
    const contactBtn = document.getElementById('contactBtn');
    contactBtn.addEventListener('click', () => {
        const originalText = contactBtn.textContent;
        contactBtn.textContent = 'Opening GitHub...';
        
        setTimeout(() => {
            window.open('https://github.com/dpod52/my-first-github-project/issues/new', '_blank');
            
            // Reset button text after a delay
            setTimeout(() => {
                contactBtn.textContent = originalText;
            }, 1000);
        }, 800);
    });

    // Subtle Parallax Effect on the glass container based on mouse movement
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const container = document.querySelector('.glass-container');
        // Small translation range (-10px to 10px) to keep it subtle and elegant
        container.style.transform = `translate(${x * 20 - 10}px, ${y * 20 - 10}px)`;
    });
});
