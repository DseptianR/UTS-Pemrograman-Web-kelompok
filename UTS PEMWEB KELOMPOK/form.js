// form.js

function validateForm() {
    // 1. Ambil nilai dari input form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Variable untuk melacak status validasi
    let isValid = true;

    // Fungsi utilitas untuk menampilkan pesan error dan mengubah border input
    function displayError(fieldId, message) {
        const errorElement = document.getElementById(fieldId + 'Error');
        const inputElement = document.getElementById(fieldId);
        
        errorElement.textContent = message;
        inputElement.style.borderColor = '#ff4444'; // Mengubah border input menjadi merah
    }

    // Fungsi utilitas untuk menghapus pesan error dan mengembalikan border
    function clearError(fieldId) {
        const errorElement = document.getElementById(fieldId + 'Error');
        const inputElement = document.getElementById(fieldId);

        errorElement.textContent = '';
        inputElement.style.borderColor = '#333'; // Mengembalikan border ke warna normal
    }

    // --- Validasi Nama Lengkap ---
    if (name === "") {
        displayError('name', 'Nama wajib diisi.');
        isValid = false;
    } else if (name.length < 3) {
        displayError('name', 'Nama minimal 3 karakter.');
        isValid = false;
    } else {
        clearError('name');
    }

    // --- Validasi Email ---
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (email === "") {
        displayError('email', 'Email wajib diisi.');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        displayError('email', 'Format email tidak valid (contoh: user@example.com).');
        isValid = false;
    } else {
        clearError('email');
    }

    // --- Validasi Subjek ---
    if (subject === "") {
        displayError('subject', 'Subjek wajib diisi.');
        isValid = false;
    } else {
        clearError('subject');
    }

    // --- Validasi Pesan ---
    if (message === "") {
        displayError('message', 'Pesan wajib diisi.');
        isValid = false;
    } else if (message.length < 10) {
        displayError('message', 'Pesan terlalu singkat, minimal 10 karakter.');
        isValid = false;
    } else {
        clearError('message');
    }

    // Jika semua valid, tampilkan pesan sukses (simulasi)
    if (isValid) {
        alert('Pesan Anda berhasil dikirim! (Simulasi)');
        document.getElementById('contactForm').reset();
        return false; // Mencegah pengiriman form
    }
    
    // Jika ada yang tidak valid, return false agar form tidak disubmit
    return isValid;
}