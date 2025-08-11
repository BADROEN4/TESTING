// Mendapatkan elemen tombol dari HTML
const myButton = document.getElementById("myButton");

// Mendapatkan elemen paragraf untuk pesan
const messageElement = document.getElementById("message");

// Menambahkan event listener untuk menangani klik
myButton.addEventListener("click", () => {
  // Mengubah konten teks dari elemen paragraf
  messageElement.textContent = "Halo! Anda baru saja mengklik tombol.";
});
// Fungsi untuk memperbarui waktu
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Mengubah konten teks dari elemen jam
  document.getElementById("clock").textContent = timeString;
}

// Memanggil fungsi untuk pertama kali
updateClock();

// Memperbarui jam setiap 1 detik (1000 milidetik)
setInterval(updateClock, 1000);
