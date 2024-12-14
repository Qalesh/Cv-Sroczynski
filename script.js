document.addEventListener('DOMContentLoaded', () => {
    const kontenery = document.querySelectorAll('.kontener');

    const handleScroll = () => {
        kontenery.forEach(kontener => {
            const kontenerPosition = kontener.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Sprawdzamy, czy kontener jest w widocznym obszarze
            if (kontenerPosition.top < windowHeight - 100 && kontenerPosition.bottom > 100) {
                kontener.classList.add('visible');
            } else {
                kontener.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Aby zadziałało od razu po załadowaniu strony
});
