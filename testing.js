const { test, expect } = require('@playwright/test');

test.describe('Halaman Login', () => {

  test.beforeEach(async ({ page }) => {
    // Mengunjungi halaman login sebelum setiap tes
    await page.goto('http://localhost:3000/login');
  });

  test('Harus berhasil login dengan kredensial yang valid', async ({ page }) => {
    // Memasukkan username dan password
    await page.fill('input[name="username"]', 'user@example.com');
    await page.fill('input[name="password"]', 'password123');

    // Menekan tombol login
    await page.click('button[type="submit"]');

    // Memverifikasi bahwa navigasi berhasil ke halaman dashboard
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.locator('text=Selamat Datang, user!')).toBeVisible();
  });

  test('Harus menampilkan pesan error untuk kredensial yang tidak valid', async ({ page }) => {
    // Memasukkan kredensial yang salah
    await page.fill('input[name="username"]', 'salah@example.com');
    await page.fill('input[name="password"]', 'salah_password');

    // Menekan tombol login
    await page.click('button[type="submit"]');

    // Memverifikasi bahwa URL tidak berubah dan pesan error terlihat
    await expect(page).toHaveURL(/login/);
    await expect(page.locator('text=Username atau password salah.')).toBeVisible();
  });
});
