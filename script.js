// Start DarkMode
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark'){
    body.classList.add('dark-theme');
    themeToggleBtn.textContent = '☀️ Light Mode';
}

if (themeToggleBtn){
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = '☀️ Light Mode';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = '🌙 Dark Mode';
        }
    });
} 
// End DarkMode
// Start Scroll Reveal
const elementsToReveal = document.querySelectorAll('.card, .col-md-5');
    elementsToReveal.forEach(el => el.classList.add('reveal'));

    // Membuat Observer untuk mengecek apakah elemen sudah masuk ke layar
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Memicu animasi CSS
                observer.unobserve(entry.target);     // Menghentikan pantauan jika sudah muncul
            }
        });
    }, {
        threshold: 0.15 // Elemen akan muncul ketika 15% bagiannya masuk ke layar
    });

    // Menjalankan pantauan ke semua elemen
    elementsToReveal.forEach(el => revealObserver.observe(el));
// End Scroll Reveal
