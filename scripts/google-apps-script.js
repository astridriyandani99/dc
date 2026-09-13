/**
 * =========================================================================
 * GOOGLE APPS SCRIPT: SPREADSHEET TO TELEGRAM NOTIFICATION FOR PT DAYA CIPTA MANDIRI
 * =========================================================================
 * 
 * INSTRUKSI PENYIAPAN (HANYA 3 MENIT):
 * -------------------------------------------------------------------------
 * 1. Buka Google Sheets (spreadsheet baru) di https://sheets.new
 * 2. Beri nama spreadsheet, misal: "Data Masuk Form Web PT Daya Cipta Mandiri"
 * 3. Klik menu: Ekstensi > Apps Script (Extensions > Apps Script).
 * 4. Hapus semua kode default, lalu COPAS seluruh isi script ini ke editor.
 * 5. Isi konfigurasi TELEGRAM_BOT_TOKEN dan TELEGRAM_CHAT_ID di bawah ini.
 * 6. Klik "Deploy" (Terapkan) > "New deployment" (Penerapan baru).
 *    - Pilih type: "Web app" (Aplikasi web).
 *    - Execute as: "Me" (Saya).
 *    - Who has access: "Anyone" (Siapa saja / Bahkan anonim).
 * 7. Klik "Deploy" dan Berikan Izin Akun Google Anda.
 * 8. Salin "Web app URL" (akhiran /exec) dan tempelkan ke src/data/companyProfile.js
 * =========================================================================
 */

// KONFIGURASI TELEGRAM:
// 1. Buat bot di Telegram via @BotFather -> ketik /newbot -> dapatkan Token
var TELEGRAM_BOT_TOKEN = "GANTI_DENGAN_TOKEN_BOT_TELEGRAM_ANDA";

// 2. Chat ID Telegram pemilik nomor 085727642200:
// Cara dapatkan Chat ID: Kirim pesan apa saja dari akun Telegram 085727642200 ke bot @userinfobot atau bot Anda,
// lalu lihat ID angka yang muncul (contoh: 123456789).
var TELEGRAM_CHAT_ID = "GANTI_DENGAN_CHAT_ID_ANDA"; // Contoh: "1234567890"

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Inisialisasi Header jika spreadsheet masih kosong
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Waktu Input",
        "Nama Lengkap / Instansi",
        "Email",
        "No. WhatsApp / HP",
        "Kategori Layanan",
        "Subjek",
        "Pesan / Kebutuhan"
      ]);
      // Format header agar rapi
      var headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setBackground("#0F172A").setFontColor("#FFFFFF").setFontWeight("bold");
    }

    var data;
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }

    var timestamp = Utilities.formatDate(new Date(), "Asia/Jakarta", "dd/MM/yyyy HH:mm:ss");
    var name = data.name || "-";
    var email = data.email || "-";
    var phone = data.phone || "-";
    var serviceCategory = data.serviceCategory || "-";
    var subject = data.subject || "-";
    var message = data.message || "-";

    // 1. Simpan baris ke Google Sheets
    sheet.appendRow([
      timestamp,
      name,
      email,
      phone,
      serviceCategory,
      subject,
      message
    ]);

    // 2. Kirim Notifikasi Otomatis ke Telegram
    if (TELEGRAM_BOT_TOKEN !== "GANTI_DENGAN_TOKEN_BOT_TELEGRAM_ANDA" && TELEGRAM_CHAT_ID !== "GANTI_DENGAN_CHAT_ID_ANDA") {
      var telegramText = "🔔 *NOTIFIKASI PESAN BARU DARI WEBSITE DC* 🔔\n\n" +
        "⏰ *Waktu:* " + timestamp + " WIB\n" +
        "👤 *Nama / Instansi:* " + name + "\n" +
        "📧 *Email:* " + email + "\n" +
        "📱 *No. HP / WA:* " + phone + "\n" +
        "🏷️ *Pilar Layanan:* " + serviceCategory + "\n" +
        "📝 *Subjek:* " + subject + "\n" +
        "💬 *Pesan:* \n" + message + "\n\n" +
        "👉 _Pesan ini diteruskan otomatis dari formulir website PT Daya Cipta Mandiri ke nomor tujuan 085727642200._";

      sendTelegramMessage(TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, telegramText);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Data berhasil disimpan dan notifikasi Telegram terkirim" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendTelegramMessage(botToken, chatId, text) {
  var url = "https://api.telegram.org/bot" + botToken + "/sendMessage";
  var payload = {
    chat_id: chatId,
    text: text,
    parse_mode: "Markdown"
  };

  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  UrlFetchApp.fetch(url, options);
}
