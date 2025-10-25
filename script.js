// 🎙️ Voice Recording + Language Switcher
let mediaRecorder;
let audioChunks = [];
let currentLang = "en";

const recordBtn = document.getElementById("recordBtn");
const audioPlayback = document.getElementById("audioPlayback");

// Record Button Handler
recordBtn.addEventListener("click", async () => {
  if (recordBtn.dataset.recording === "true") {
    mediaRecorder.stop();
    recordBtn.dataset.recording = "false";
    recordBtn.innerText = translations[currentLang].recordBtn;
  } else {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];

      mediaRecorder.ondataavailable = e => audioChunks.push(e.data);

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
        const audioUrl = URL.createObjectURL(audioBlob);
        audioPlayback.src = audioUrl;
        audioPlayback.style.display = "block";
      };

      mediaRecorder.start();
      recordBtn.dataset.recording = "true";
      recordBtn.innerText = translations[currentLang].stopBtn;
    } else {
      alert("Your browser does not support voice recording.");
    }
  }
});

// 🌍 Language Translations
const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    hello: "Hello, It's Me",
    iam: "Web Developer",
    intro: "I am a 3rd year Information Systems student with skills in Web Development, Video Editing, and Digital Marketing.",
    moreBtn: "More About Me",
    aboutTitle: "About Me",
    role: "Web Developer",
    aboutDesc: "I am constantly expanding my skills through projects and coursework, aiming to build responsive, user-friendly applications that solve real-world problems.",
    servicesTitle: "My Services",
    service1: "Web Development",
    service1Desc: "Responsive, scalable websites with clean code and modern frameworks.",
    service2: "Video Editing",
    service2Desc: "Editing for social media, effects, and motion graphics.",
    service3: "Digital Marketing",
    service3Desc: "Social media strategy, SEO optimization, and content planning.",
    contactTitle: "Contact Me",
    contactDesc: "Have a project in mind? Reach out for a quick response.",
    recordBtn: "🎤 Record Message",
    stopBtn: "⏹ Stop Recording",
    sendBtn: "Submit"
  },
  am: {
    home: "መነሻ",
    about: "ስለ እኔ",
    services: "አገልግሎቶች",
    contact: "አድራሻ",
    hello: "ሰላም፣ እኔ ነኝ",
    iam: "ድር አበልፃጊ",
    intro: "እኔ 3ኛ ዓመት የመረጃ ስርዓት ተማሪ ነኝ፣ እና በድር ልማት፣ ቪዲዮ ኤዲቲንግ፣ ዲጂታል ማርኬቲንግ ችሎታ አለኝ።",
    moreBtn: "በተጨማሪ ስለ እኔ",
    aboutTitle: "ስለ እኔ",
    role: "ድር አበልፃጊ",
    aboutDesc: "እየተማርኩና እየተሻሻልኩ በቀጣይ ላይ ነኝ፣ እውነተኛ ችግሮችን የሚፈቱ ተጠቃሚ የሆኑ መተግበሪያዎችን ልገነባ ነው ዓላማዬ።",
    servicesTitle: "አገልግሎቶቼ",
    service1: "ድር ልማት",
    service1Desc: "ተጠቃሚ በሆነ መንገድ የተዘጋጀ ድር ጣቢያ።",
    service2: "ቪዲዮ ኤዲቲንግ",
    service2Desc: "ለማህበራዊ ሚዲያ ቪዲዮ ኤዲቲንግ።",
    service3: "ዲጂታል ማርኬቲንግ",
    service3Desc: "ማህበራዊ ሚዲያ፣ SEO፣ ይዘት ስርዓት።",
    contactTitle: "አድራሻ",
    contactDesc: "ፕሮጀክት ካለዎት፣ በፍጥነት ያነጋግሩኝ።",
    recordBtn: "🎤 መልዕክት ቅዳ",
    stopBtn: "⏹ ቅዳ አቁም",
    sendBtn: "ላክ"
  },
  om: {
    home: "Mana",
    about: "Waa’ee Koo",
    services: "Tajaajiloota",
    contact: "Quunnamtii",
    hello: "Akkam, Anuma",
    iam: "Qopheessaa Webii",
    intro: "Ani barataa IS waggaa 3ffaa, webii, viidiyoo gulaaluu fi digitaalaa marsariitii irratti dandeettii qaba.",
    moreBtn: "Waa’ee Koo Dabalata",
    aboutTitle: "Waa’ee Koo",
    role: "Qopheessaa Webii",
    aboutDesc: "Projektoota fi barnoota koo waliin dandeettii koo bal’isuun webii fayyadamaa uumuuf hojjechaa jira.",
    servicesTitle: "Tajaajiloota Koo",
    service1: "Hojii Webii",
    service1Desc: "Webii saffisaa fi fayyadamummaa qabu.",
    service2: "Gulaala Viidiyoo",
    service2Desc: "Viidiyoo gulaaluu fi miidiyaa hawaasaa irratti hojjechuu.",
    service3: "Digitaalaa Marsariitii",
    service3Desc: "SEO, miidiyaa hawaasaa fi tarsiimoo.",
    contactTitle: "Quunnamtii",
    contactDesc: "Projektii qabda? Siif deebii ariifachiisaa nan kenna.",
    recordBtn: "🎤 Sagalee Galmeessi",
    stopBtn: "⏹ Galmee Dhaabi",
    sendBtn: "Ergi"
  },
  ti: {
    home: "መእተዊ",
    about: "ብዛዕባኒ",
    services: "ኣገልግሎታት",
    contact: "ተራኸቡ",
    hello: "ሰላም፣ ኣነ እየ",
    iam: "ኣብ መርበብ ኣበልፃጊ",
    intro: "እዚ ሰማእቲ መረብ መማህር ዝሓለፈ ተማሃሮ እየ።",
    moreBtn: "ብዛዕባኒ ተወሳኺ",
    aboutTitle: "ብዛዕባኒ",
    role: "ኣብ መርበብ ኣበልፃጊ",
    aboutDesc: "ብፕሮጀክትን ብትምህርቲን ክህሎትየ እየ ዝንፀፈ።",
    servicesTitle: "ኣገልግሎታትየ",
    service1: "ልማት መርበብ",
    service1Desc: "ኣዳላዊ ዝሓለፈ ድር ጣብያ።",
    service2: "ቪድዮ ኤዲቲንግ",
    service2Desc: "ቪድዮ ንማሕበራዊ መርበብ።",
    service3: "ዲጂታል ማርኬቲንግ",
    service3Desc: "SEOን መርበብ ማሕበራዊን።",
    contactTitle: "ተራኸቡ",
    contactDesc: "ፕሮጀክት ካለኩም፣ ብፍጥነት እትሕብሩኒ።",
    recordBtn: "🎤 መልእኽቲ ቅዳ",
    stopBtn: "⏹ ቅዳ ኣቁም",
    sendBtn: "ላክ"
  }
};

// Switch Language
function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  if (recordBtn.dataset.recording !== "true") {
    recordBtn.innerText = translations[lang].recordBtn;
  }
}

// Back to top
let topBtn = document.getElementById("topBtn");
window.onscroll = function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
