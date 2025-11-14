document.addEventListener('DOMContentLoaded', function() {
    // 1. Toggle Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // 2. Fungsi Pemesanan WhatsApp
    const whatsappLink = document.getElementById('whatsapp-link');
    const orderButtons = document.querySelectorAll('.order-btn');
    const phoneNumber = '6285852079194'; // Ganti dengan Nomor WA Rumah Makan Cak Slamet (format internasional tanpa +)
    const initialMessage = encodeURIComponent("Halo Cak Slamet, saya ingin memesan makanan/reservasi. ");

    // Set link default WhatsApp untuk Reservasi/Kontak
    whatsappLink.href = `https://wa.me/${phoneNumber}?text=${initialMessage}`;

    // Fungsi untuk membuat pesan WhatsApp dari tombol menu
    orderButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const itemName = this.getAttribute('data-item');
            const message = encodeURIComponent(`Halo Cak Slamet, saya ingin memesan: 1x ${itemName}. Mohon konfirmasi total harga dan ongkir.`);
            
            // Buka WhatsApp dengan pesan spesifik
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        });
    });

    // 3. Smooth Scrolling (Opsional)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Hanya berlaku untuk link internal yang menuju ke section
            if (this.getAttribute('href').length > 1 && this.getAttribute('href') !== '#') {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                // Tutup menu mobile setelah klik
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });

});
