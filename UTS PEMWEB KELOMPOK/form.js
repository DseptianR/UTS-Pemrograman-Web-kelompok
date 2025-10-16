document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const successPopup = document.getElementById('success-popup');

    // Fungsi helper untuk membersihkan semua pesan error
    const clearErrors = () => {
        document.querySelectorAll('.error-text').forEach(span => {
            span.textContent = '';
            span.style.opacity = '0';
        });
    };

    // Fungsi helper untuk menampilkan error inline (Merah)
    const displayError = (id, message) => {
        const errorElement = document.getElementById(`${id}-error`);
        errorElement.textContent = `* ${message}`;
        errorElement.style.opacity = '1';
        document.getElementById(id).focus();
    };
    
    // Fungsi helper untuk menampilkan pop-up sukses (Hijau)
    const displaySuccess = () => {
        successPopup.style.display = 'block';
    };

    // Fungsi helper untuk validasi format email
    const isValidEmail = (emailString) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailString);

    // Fungsi validasi utama
    const validateForm = () => {
        clearErrors(); // Bersihkan error sebelum validasi baru

        const fields = {
            name: { value: document.getElementById('name').value.trim(), error: 'Nama tidak boleh kosong.' },
            email: { value: document.getElementById('email').value.trim(), error: 'Email tidak boleh kosong.' },
            subject: { value: document.getElementById('subject').value.trim(), error: 'Subjek tidak boleh kosong.' },
            message: { value: document.getElementById('message').value.trim(), error: 'Pesan tidak boleh kosong.' }
        };

        for (const id in fields) {
            const field = fields[id];
            
            // Cek jika kosong
            if (field.value === '') {
                displayError(id, field.error);
                return false;
            }

            // Validasi Email
            if (id === 'email' && !isValidEmail(field.value)) {
                displayError(id, 'Format Email tidak valid.');
                return false;
            }
            
            // Validasi Pesan (minimal 10 karakter)
            if (id === 'message' && field.value.length < 10) {
                displayError(id, 'Pesan minimal harus 10 karakter.');
                return false;
            }
        }

        return true;
    };

    // Event Listener untuk Submit
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        if (validateForm()) {
            // Jika validasi sukses:
            console.log('Formulir berhasil divalidasi dan siap dikirim.');
            
            // Tampilkan pop-up sukses
            displaySuccess();
            
            // Kosongkan formulir
            form.reset(); 
            clearErrors(); // Pastikan tidak ada error yang tersisa
        }
    });
});