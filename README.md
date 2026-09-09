# Irine & Irakli — wedding e-invite

Mobile-first bilingual wedding invitation for 29 September 2026.

## Files
- `index.html` — page structure
- `style.css` — responsive design and animations
- `script.js` — Georgian/English switch, countdown, weather, calendar download, RSVP logic
- `apps-script.gs` — Google Apps Script that writes RSVPs to Google Sheets
- `Assets/centerpiece-close.jpg` and `Assets/centerpiece-table.jpg` — centerpiece references from your photos

## Connect RSVP to Google Sheets
1. Create/open the Google Sheet that should receive RSVPs.
2. In Google Sheets, open **Extensions → Apps Script**.
3. Replace the default code with the contents of `apps-script.gs`.
4. Click **Deploy → New deployment → Web app**.
5. Set **Execute as: Me**.
6. Set access to the option that allows your invited guests to use the web app without signing in.
7. Deploy and copy the URL ending in `/exec`.
8. Open `script.js` and replace:

   `PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE`

   with your deployed `/exec` URL.

The first RSVP automatically creates an `RSVP` sheet with columns for timestamp, name, attendance, language, and browser submission time.

## Weather
The page uses Open-Meteo without an API key. Until the wedding falls within the forecast horizon, the weather cards display a "forecast coming soon" message. Closer to the wedding they automatically show weather for:
- Mtskheta at 15:00
- Tbilisi at 18:00

## Maps
The invitation contains embedded maps plus external Google Maps buttons for:
- Samtavro Monastery, Mtskheta
- Lisi Event Hall, Tbilisi

## Default language
Georgian is the default. Guests can switch to English using the `ENG` button in the top-right corner.
