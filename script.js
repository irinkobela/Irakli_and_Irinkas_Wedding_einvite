// ============================================================
// IRINE & IRAKLI — WEDDING E-INVITE
// 1) Deploy the Apps Script from apps-script.gs as a Web App.
// 2) Paste the /exec URL below so RSVP submissions reach Google Sheets.
// ============================================================
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby5sH8Hr40BAJ4QPqVDOZuS4Y_s3aanRUKI7QLd8QFVa7PV57Dz-1CyXj8QL-7royPN/exec";

const translations = {
  ka: {
    navDay:"დღის გეგმა", rsvpNav:"RSVP",
    invite:"დიდი სიყვარულითა და პატივისცემით\nგეპატიჟებით ჩვენს ქორწილში! 💍",
    irine:"ირინე", irakli:"ირაკლი", dateLong:"29 სექტემბერი 2026, სამშაბათი",
    days:"დღე", hours:"საათი", minutes:"წუთი", seconds:"წამი",
    rsvpButton:"დასწრების დადასტურება 💌", calendar:"კალენდარში დამატება 📅",
    photoCaption:"ჩვენი დღის ფერები",
    ourDay:"ჩვენი დღე", celebrate:"გაიზიარეთ ჩვენი სიხარული",
    ceremony:"ჯვრისწერა", monastery:"სამთავროს მონასტერი, მცხეთა",
    eveningVenue:"საღამოს ლოკაცია", lisi:"ლისი ივენთ ჰოლი, თბილისი",
    champagne:"შამპანურით დახვედრა", signing:"ხელის მოწერის ცერემონია", reception:"საზეიმო წვეულება",
    map:"რუკის ნახვა",
    locationsKicker:"ლოკაციები", locationsTitle:"მისამართები და რუკა", weatherKicker:"29 სექტემბრისთვის", weatherTitle:"ქორწილის დღის ამინდი",
    weatherWaiting:"ზუსტი პროგნოზი აქ ავტომატურად გამოჩნდება ქორწილის თარიღთან მოახლოებისას.",
    mtskheta:"მცხეთა", tbilisi:"თბილისი", ceremonyShort:"ჯვრისწერა", receptionShort:"საზეიმო წვეულება",
    forecastSoon:"პროგნოზი მალე გამოჩნდება", forecastUnavailable:"პროგნოზის ჩატვირთვა ვერ მოხერხდა",
    precip:"ნალექის ალბათობა", wind:"ქარი",
    dress:"დრეს კოდი", whiteBride:"თეთრი ფერი მხოლოდ პატარძლისთვის 🤍",
    joining:"შემოგვიერთდებით? 💫",
    replyIntro:"გთხოვთ, დაგვიდასტუროთ შეძლებთ თუ არა ჩვენს განსაკუთრებულ დღეს ჩვენთან ერთად ყოფნას.",
    yes:"დიახ, სიამოვნებით ❤️", no:"სამწუხაროდ, ვერ მოვალ",
    nameLabel:"სახელი და გვარი", namePlaceholder:"სახელი და გვარი",
    namesHint:"თუ პასუხობთ წყვილის ან ოჯახის სახელით, შეგიძლიათ ყველა სახელი აქ ჩაწეროთ.",
    confirm:"დადასტურება", sending:"იგზავნება…",
    thanksYes:"გმადლობთ! ❤️ თქვენი პასუხი მიღებულია. მოუთმენლად ველით თქვენთან ერთად აღნიშვნას!",
    thanksNo:"გმადლობთ, რომ შეგვატყობინეთ. დაგვაკლდებით. 🤍",
    error:"დაფიქსირდა შეცდომა. გთხოვთ, სცადოთ თავიდან.",
    setupError:"RSVP ჯერ არ არის დაკავშირებული Google Sheets-თან.",
    footer:"ირინე & ირაკლი · 29.09.2026",
    metaTitle:"ირინე & ირაკლი — 29 სექტემბერი 2026",
    metaDescription:"დიდი სიყვარულითა და პატივისცემით გეპატიჟებით ჩვენს ქორწილში! 💍"
  },
  en: {
    navDay:"Our day", rsvpNav:"RSVP",
    invite:"WITH LOVE AND GREAT PLEASURE\nWE INVITE YOU TO CELEBRATE OUR WEDDING WITH US 💍",
    irine:"Irine", irakli:"Irakli", dateLong:"29 September 2026, Tuesday",
    days:"DAYS", hours:"HOURS", minutes:"MINUTES", seconds:"SECONDS",
    rsvpButton:"RSVP 💌", calendar:"ADD TO CALENDAR 📅",
    photoCaption:"The colors of our day",
    ourDay:"OUR DAY", celebrate:"Celebrate With Us ✨",
    ceremony:"CHURCH CEREMONY", monastery:"Samtavro Monastery, Mtskheta",
    eveningVenue:"EVENING LOCATION", lisi:"Lisi Event Hall, Tbilisi",
    champagne:"Champagne Welcome", signing:"Signing Ceremony", reception:"Wedding Reception",
    map:"VIEW MAP",
    locationsKicker:"LOCATIONS", locationsTitle:"Locations & Map", weatherKicker:"FOR 29 SEPTEMBER", weatherTitle:"Wedding Day Weather ☀️",
    weatherWaiting:"The exact forecast will appear here automatically as the wedding date gets closer.",
    mtskheta:"Mtskheta", tbilisi:"Tbilisi", ceremonyShort:"Church ceremony", receptionShort:"Wedding reception",
    forecastSoon:"Forecast coming soon", forecastUnavailable:"Forecast could not be loaded",
    precip:"Chance of rain", wind:"Wind",
    dress:"DRESS CODE", whiteBride:"White is reserved for the bride 🤍",
    joining:"Will you be celebrating with us? 💫",
    replyIntro:"Please let us know if you'll be joining us on our special day.",
    yes:"YES, WITH PLEASURE ❤️", no:"UNFORTUNATELY, NO",
    nameLabel:"Your full name", namePlaceholder:"Name and surname",
    namesHint:"If replying for a couple or family, you can enter all names here.",
    confirm:"CONFIRM RSVP", sending:"Sending…",
    thanksYes:"Thank you! ❤️ Your RSVP has been received. We can't wait to celebrate with you!",
    thanksNo:"Thank you for letting us know. You will be missed. 🤍",
    error:"Something went wrong. Please try again.",
    setupError:"RSVP is not connected to Google Sheets yet.",
    footer:"Irine & Irakli · 29.09.2026",
    metaTitle:"Irine & Irakli — 29 September 2026",
    metaDescription:"With love and great pleasure, we invite you to celebrate our wedding with us."
  }
};

let language = "ka";
let weatherCache = null;

const langToggle = document.getElementById("langToggle");
const ogTitle = document.getElementById("ogTitle");
const ogDescription = document.getElementById("ogDescription");
const metaDescription = document.querySelector('meta[name="description"]');

function setLanguage(lang){
  language = lang;
  document.documentElement.lang = lang;
  langToggle.textContent = lang === "en" ? "ქარ" : "ENG";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    el.placeholder = translations[lang][key] || "";
  });

  document.title = translations[lang].metaTitle;
  if (ogTitle) ogTitle.setAttribute("content", translations[lang].metaTitle);
  if (ogDescription) ogDescription.setAttribute("content", translations[lang].metaDescription);
  if (metaDescription) metaDescription.setAttribute("content", translations[lang].metaDescription);

  if (weatherCache) renderWeather(weatherCache);
}

langToggle.addEventListener("click", () => setLanguage(language === "en" ? "ka" : "en"));
setLanguage("ka");

// Wedding countdown — ceremony begins at 15:00 Georgia time (UTC+4).
const weddingDate = new Date("2026-09-29T15:00:00+04:00");
function updateCountdown(){
  const diff = Math.max(0, weddingDate - new Date());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;
  document.getElementById("days").textContent = String(d).padStart(2,"0");
  document.getElementById("hours").textContent = String(h).padStart(2,"0");
  document.getElementById("minutes").textContent = String(m).padStart(2,"0");
  document.getElementById("seconds").textContent = String(s).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown,1000);

// Gentle reveal animation.
const revealSections = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window){
  const observer = new IntersectionObserver((entries,obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  },{threshold:.12,rootMargin:"0px 0px -40px 0px"});
  revealSections.forEach(el => observer.observe(el));
}else{
  revealSections.forEach(el => el.classList.add("visible"));
}

// Add to Calendar (.ics)
function formatICSDate(date){
  return date.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,"");
}
function escapeICS(text){
  return text.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/,/g,"\\,").replace(/;/g,"\\;");
}
function downloadCalendarInvite(){
  const start = new Date("2026-09-29T15:00:00+04:00");
  const end = new Date("2026-09-29T23:30:00+04:00");
  const uid = "irine-irakli-20260929@wedding";
  const summary = language === "ka" ? "ირინე & ირაკლი — ქორწილი" : "Irine & Irakli — Wedding";
  const description = language === "ka"
    ? "ჯვრისწერა — სამთავროს მონასტერი, მცხეთა, 15:00. შამპანურით დახვედრა — 17:00. ხელის მოწერის ცერემონია — 17:30. საზეიმო წვეულება — 18:00. ლისი ივენთ ჰოლი, თბილისი."
    : "Church ceremony — Samtavro Monastery, Mtskheta, 15:00. Champagne Welcome — 17:00. Signing Ceremony — 17:30. Wedding Reception — 18:00. Lisi Event Hall, Tbilisi.";

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Irine & Irakli//Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${formatICSDate(new Date())}`,
    `DTSTART:${formatICSDate(start)}`,
    `DTEND:${formatICSDate(end)}`,
    `SUMMARY:${escapeICS(summary)}`,
    `LOCATION:${escapeICS("Samtavro Monastery, Mtskheta / Lisi Event Hall, Tbilisi")}`,
    `DESCRIPTION:${escapeICS(description)}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([ics],{type:"text/calendar;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "irine-irakli-wedding.ics";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
document.getElementById("addToCalendar")?.addEventListener("click",downloadCalendarInvite);

// ------------------------------------------------------------
// Wedding-day weather
// Uses Open-Meteo, no API key required. The forecast is requested
// only when the wedding is within the provider's forecast horizon.
// ------------------------------------------------------------
const WEDDING_DAY = "2026-09-29";
const WEATHER_POINTS = {
  mtskheta:{lat:41.8455,lon:44.7188,hour:15},
  tbilisi:{lat:41.7151,lon:44.8271,hour:18}
};

function daysUntilWedding(){
  const now = new Date();
  const target = new Date("2026-09-29T00:00:00+04:00");
  return Math.ceil((target-now)/86400000);
}

function weatherEmoji(code){
  if (code === 0) return "☀️";
  if ([1,2].includes(code)) return "🌤️";
  if (code === 3) return "☁️";
  if ([45,48].includes(code)) return "🌫️";
  if ([51,53,55,56,57].includes(code)) return "🌦️";
  if ([61,63,65,66,67,80,81,82].includes(code)) return "🌧️";
  if ([71,73,75,77,85,86].includes(code)) return "🌨️";
  if ([95,96,99].includes(code)) return "⛈️";
  return "🌤️";
}

function weatherText(code,lang){
  const ka = {
    clear:"მზიანი", partly:"ნაწილობრივ მოღრუბლული", cloudy:"მოღრუბლული", fog:"ნისლი",
    drizzle:"მსუბუქი ნალექი", rain:"წვიმა", snow:"თოვლი", storm:"ჭექა-ქუხილი"
  };
  const en = {
    clear:"Clear", partly:"Partly cloudy", cloudy:"Cloudy", fog:"Fog",
    drizzle:"Light precipitation", rain:"Rain", snow:"Snow", storm:"Thunderstorms"
  };
  const d = lang === "ka" ? ka : en;
  if (code === 0) return d.clear;
  if ([1,2].includes(code)) return d.partly;
  if (code === 3) return d.cloudy;
  if ([45,48].includes(code)) return d.fog;
  if ([51,53,55,56,57].includes(code)) return d.drizzle;
  if ([61,63,65,66,67,80,81,82].includes(code)) return d.rain;
  if ([71,73,75,77,85,86].includes(code)) return d.snow;
  if ([95,96,99].includes(code)) return d.storm;
  return d.partly;
}

async function fetchWeatherPoint(point){
  const params = new URLSearchParams({
    latitude:String(point.lat),
    longitude:String(point.lon),
    hourly:"temperature_2m,precipitation_probability,weather_code,wind_speed_10m",
    timezone:"Asia/Tbilisi",
    forecast_days:"16"
  });
  const res = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
  if (!res.ok) throw new Error("weather");
  const data = await res.json();
  const wanted = `${WEDDING_DAY}T${String(point.hour).padStart(2,"0")}:00`;
  const idx = data.hourly.time.indexOf(wanted);
  if (idx < 0) throw new Error("date-not-in-forecast");
  return {
    temp:Math.round(data.hourly.temperature_2m[idx]),
    precip:Math.round(data.hourly.precipitation_probability[idx]),
    code:data.hourly.weather_code[idx],
    wind:Math.round(data.hourly.wind_speed_10m[idx])
  };
}

function renderWeather(cache){
  Object.entries(cache).forEach(([key,value]) => {
    const card = document.querySelector(`[data-weather-card="${key}"]`);
    if (!card || !value) return;
    card.querySelector(".weather-symbol").textContent = weatherEmoji(value.code);
    card.querySelector(".weather-temp").textContent = `${value.temp}°`;
    const detail = `${weatherText(value.code,language)} · ${translations[language].precip}: ${value.precip}% · ${translations[language].wind}: ${value.wind} km/h`;
    card.querySelector(".weather-detail").textContent = detail;
  });
}

async function loadWeddingWeather(){
  // 16 days matches the request horizon used above. Before that, keep the elegant placeholder.
  const remaining = daysUntilWedding();
  if (remaining > 16 || remaining < 0) return;
  try{
    const [mtskheta,tbilisi] = await Promise.all([
      fetchWeatherPoint(WEATHER_POINTS.mtskheta),
      fetchWeatherPoint(WEATHER_POINTS.tbilisi)
    ]);
    weatherCache = {mtskheta,tbilisi};
    renderWeather(weatherCache);
  }catch(err){
    document.querySelectorAll(".weather-detail").forEach(el => {
      el.textContent = translations[language].forecastUnavailable;
    });
  }
}
loadWeddingWeather();

// ------------------------------------------------------------
// RSVP → Google Sheets via Apps Script
// ------------------------------------------------------------
const form = document.getElementById("rsvpForm");
const nameBlock = document.getElementById("nameBlock");
const guestName = document.getElementById("guestName");
const status = document.getElementById("formStatus");
const submit = document.getElementById("submitButton");

document.querySelectorAll('input[name="attending"]').forEach(radio => {
  radio.addEventListener("change",() => {
    nameBlock.classList.remove("hidden");
    guestName.required = true;
    setTimeout(() => guestName.focus(),100);
  });
});

form.addEventListener("submit",async e => {
  e.preventDefault();
  const attending = form.elements.attending.value;
  const name = guestName.value.trim();
  if (!attending || !name) return;

  if (!SCRIPT_URL || SCRIPT_URL.includes("PASTE_YOUR")){
    status.className = "form-status error";
    status.textContent = translations[language].setupError;
    return;
  }

  submit.disabled = true;
  submit.textContent = translations[language].sending;
  status.textContent = "";

  try{
    await fetch(SCRIPT_URL,{
      method:"POST",
      mode:"no-cors",
      headers:{"Content-Type":"text/plain;charset=utf-8"},
      body:JSON.stringify({
        name,
        attending,
        language,
        submittedAt:new Date().toISOString()
      })
    });

    status.className = "form-status success";
    status.textContent = attending === "YES" ? translations[language].thanksYes : translations[language].thanksNo;
    form.querySelectorAll("input").forEach(input => input.disabled = true);
    submit.style.display = "none";
  }catch(err){
    status.className = "form-status error";
    status.textContent = translations[language].error;
    submit.disabled = false;
    submit.textContent = translations[language].confirm;
  }
});
