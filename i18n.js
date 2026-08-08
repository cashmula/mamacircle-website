const testimonials = [
  // Empty until real tester feedback comes in — see README for how to add
  // one: { quote: { nb, en }, author: { nb, en } }. The section itself
  // renders an honest "just getting started" state instead of any
  // placeholder/invented quote while this stays empty.
];

const littleNotes = [
  { nb: "I dag følte jeg at jeg endelig fant folkene mine.", en: "Today I felt like I was finally finding my people.", place: { nb: "En mamma i Oslo", en: "A Mama in Oslo" } },
  { nb: "Jeg forventet ikke at en fremmed skulle forstå akkurat hvordan jeg hadde det. Hun gjorde det.", en: "I didn't expect a stranger to understand exactly how I felt. She did.", place: { nb: "En mamma i Trondheim", en: "A Mama in Trondheim" } },
  { nb: "Et sted i denne kretsen er det en annen mamma som også er våken med babyen sin akkurat nå.", en: "Somewhere in this circle, someone else is awake with their baby right now too.", place: { nb: "En mamma i Bergen", en: "A Mama in Bergen" } },
];

const translations = {
  nb: {
    "nav.about": "Om oss",
    "nav.features": "Funksjoner",
    "nav.privacy": "Personvern",
    "nav.faq": "Spørsmål",

    "hero.kicker": "Ikke alene. Forstått. Du hører til.",
    "hero.title": "Aldri alene som nybakt mor",
    "hero.tagline": "Finn dine folk. Finn din plass. Finn din krets.",
    "hero.subtitle": "MamaCircle finner mødre i nærheten med barn i samme alder, så du kan avtale lekestund, dele erfaringer og bygge ekte vennskap nær der du bor.",
    "hero.get_it": "Bli med som tester",
    "hero.chat_web": "Chat på web",
    "hero.note": "Foreløpig i lukket testing på Google Play. Bli med i testgruppen, så får du tilgang til appen på Play Store kort tid etter.",
    "hero.needToday": "Hva trenger du i dag?",
    "hero.needTalk": "☕ Noen å snakke med",
    "hero.needFriend": "🤝 En ny venn",
    "hero.needActivity": "🎨 Noe å gjøre med",
    "hero.needLanguage": "🗣️ Hjelp med språk",
    "hero.needSettling": "🌍 Hjelp til å finne seg til rette",
    "hero.needEncouragement": "🖤 Bare litt oppmuntring",

    "note.heading": "En liten hilsen fra en mamma ✒︎",
    "note.cta": "Legg igjen en hilsen →",

    "alone.prompt": "Kjenner du deg litt alene i dag?",
    "alone.title": "Du er ikke alene.",
    "alone.body": "Et sted i vår krets er det sikkert en annen mamma som er våken med babyen sin akkurat nå, og lurer på om hun er den eneste som har det slik.",
    "alone.cta": "Bli med i kretsen →",

    "about.heading": "Om Mama Circle",
    "about.what.heading": "Hva er Mama Circle?",
    "about.what.body": "MamaCircle er et fellesskap for mødre: finn mødre i nærheten med barn i samme alder, del erfaringer i grupper, chat, spør og svar, og et kunnskapsbibliotek skrevet av fellesskapet selv.",
    "about.who.heading": "Hvem er det for?",
    "about.who.body": "For nybakte og gravide mødre, uansett bakgrunn eller morsmål. MamaCircle er bygget for integrering og inkludering fra første dag: å koble mødre sammen tvers av språk og kulturer, ikke bare i eget nabolag.",
    "about.expect.heading": "Hva kan du forvente?",
    "about.expect.body": "Lag en profil, fortell oss om nabolaget og den lille, og begynn å koble deg til andre mødre i nærheten. Ingen nøyaktig adresse deles noensinne, kun nabolaget ditt.",

    "founder.heading": "Et ord fra grunnleggeren",
    "founder.body1": "Hei, jeg heter Saga, og jeg grunnla MamaCircle.",
    "founder.body2": "Når et barn blir født, blir også en mor født, og ingen bør måtte finne ut av den fødselen helt alene.",
    "founder.body3": "Jeg bygde MamaCircle fordi jeg ville at hver mor skulle ha et sted å finne sin krets: en mamma i nærheten med en baby i samme alder, en gruppe som føles som hjemme, et spørsmål besvart av noen som har vært akkurat der du er.",
    "founder.body4": "Uansett hvem du er, hva du snakker, eller hvor du kommer fra: det er en plass for deg her.",
    "founder.signature": "— Saga",

    "languages.heading": "Rundt om i vår krets",
    "languages.tagline": "Én krets. Mange språk. Én følelse: å høre til.",

    "menwithbabies.heading": "Menn med babyer",
    "menwithbabies.badge": "Kommer snart",
    "menwithbabies.body": "Et sted for pappaer også. Under utvikling.",

    "features.heading": "Laget for øyeblikkene som betyr noe",
    "features.nearby.title": "Finn din krets",
    "features.nearby.body": "MamaCircle matcher deg med mødre i nærheten som har barn i samme alder, slik at du kan planlegge lekestunder og bygge ekte vennskap nær der du bor. Din nøyaktige adresse er alltid privat: kun ditt nabolag vises.",
    "features.feed.title": "Feed og grupper",
    "features.feed.body": "Del oppdateringer, bilder og spørsmål med mødrene rundt deg. Bli med i eller start grupper basert på interesser, nabolag eller livsfase.",
    "features.chat.title": "Chat",
    "features.chat.body": "Snakk direkte med en annen mor, eller i gruppe, i sanntid.",
    "features.forum.title": "Spørsmål og svar",
    "features.forum.body": "Spør om hva som helst, søkbart, besvart av mødre som har vært der selv. Pluss et kunnskapsbibliotek med artikler bidratt og kvalitetssikret av fellesskapet.",

    "stats.heading": "Kretsen vokser",
    "stats.mamas": "Mammaer",
    "stats.cities": "Byer",
    "stats.groups": "Grupper",
    "stats.loading": "Teller kretsen...",
    "stats.error": "Kunne ikke laste tall akkurat nå.",

    "testimonials.heading": "Fine ord fra andre mammaer",
    "testimonials.empty": "Kretsen vår er akkurat i gang. Kom tilbake snart for fine ord fra mammaer i fellesskapet.",

    "privacy.heading": "Bygget med omtanke",
    "privacy.item1": "Personvern først: aldri nøyaktig hjemadresse, og barnets profil bruker kun kallenavn og fødselsmåned, aldri fullt fødselsdato eller navn",
    "privacy.item2": "Ingen annonser, og ingen analyse- eller sporingsverktøy av noe slag",
    "privacy.item3": "Rapportering og blokkering er innebygd fra dag én",
    "privacy.item4": "Full mørk modus",
    "privacy.item5": "Tilgjengelig på norsk, engelsk, svensk og dansk (og flere til)",
    "privacy.link": "Les hele personvernerklæringen →",

    "faq.heading": "Spørsmål",
    "faq.q1.q": "Er MamaCircle tilgjengelig nå?",
    "faq.q1.a": "Appen er i lukket testing på Google Play. Trykk på “Google Play”-knappen øverst for å bli med i testgruppen: du får så tilgang til appen på Play Store kort tid etter.",
    "faq.q2.q": "Fungerer MamaCircle på iPhone?",
    "faq.q2.a": "Ikke ennå. Appen er foreløpig kun tilgjengelig for Android.",
    "faq.q3.q": "Hvor er MamaCircle tilgjengelig?",
    "faq.q3.a": "MamaCircle er laget for mødre i Norge, Sverige og Danmark, og støtter flere språk i tillegg.",
    "faq.q4.q": "Hvem står bak MamaCircle?",
    "faq.q4.a": "MamaCircle drives av Hafmula Group. Spørsmål kan sendes til <a href=\"mailto:hafmulagroup@gmail.com\">hafmulagroup@gmail.com</a>.",
    "faq.q5.q": "Hvordan blir jeg medlem?",
    "faq.q5.a": "Trykk “Bli med som tester” og meld deg inn i testgruppen på Google Groups. Du får tilgang til appen på Play Store kort tid etter, og registrerer deg med e-post rett i appen.",
    "faq.q6.q": "Er det aktiviteter eller møter, ikke bare chat?",
    "faq.q6.a": "Grupper i appen er en fin måte å møte andre mødre rundt en delt interesse, nabolag eller livsfase. En egen aktivitets- og arrangementskalender er under utvikling.",
    "faq.q7.q": "Hva gjør fellesskapet i MamaCircle annerledes?",
    "faq.q7.a": "MamaCircle er bygget for integrering og inkludering fra dag én: å koble mødre sammen tvers av språk, kulturer og bakgrunn, ikke bare i eget nabolag.",
    "faq.q8.q": "Hvilke språk støtter MamaCircle?",
    "faq.q8.a": "Norsk, engelsk, svensk, dansk, arabisk, somali, spansk, tigrinja og amharisk, med et språkvalg rett i appen.",

    "contact.heading": "Forslag og spørsmål",
    "contact.body": "Vi vil gjerne høre fra deg. Velg det som passer best:",
    "contact.suggestion": "💡 Forslag",
    "contact.question": "❓ Spørsmål",
    "contact.inquiry": "📩 Forespørsel",
    "contact.feedback": "🗣️ Tilbakemelding",

    "newsletter.heading": "Bli i kretsen",
    "newsletter.body": "Få kommende MamaCircle-arrangementer, fellesskapsoppdateringer og små hilsener fra oss, rett i innboksen.",
    "newsletter.placeholder": "din@epost.no",
    "newsletter.button": "Abonner",
    "newsletter.success": "Takk! Du er med i kretsen.",
    "newsletter.error": "Noe gikk feil. Prøv igjen om litt.",
    "newsletter.already": "Denne e-posten er allerede med i kretsen.",

    "joinclub.heading": "Klar for å bli med?",
    "joinclub.button": "Bli med i klubben",

    "footer.copy": "© 2026 Hafmula Group. MamaCircle er et kallenavn under utvikling.",
    "footer.privacy": "Personvern",
    "footer.terms": "Vilkår",
    "footer.contact": "Kontakt",
  },
  en: {
    "nav.about": "About",
    "nav.features": "Features",
    "nav.privacy": "Privacy",
    "nav.faq": "FAQ",

    "hero.kicker": "Not alone. Understood. Belong.",
    "hero.title": "Never alone as a new mom",
    "hero.tagline": "Find your people. Find your place. Find your circle.",
    "hero.subtitle": "MamaCircle finds nearby moms with babies around the same age, so you can plan playdates, swap advice, and build real friendships close to home.",
    "hero.get_it": "Join as a tester",
    "hero.chat_web": "Chat on web",
    "hero.note": "Currently in closed testing on Google Play. Join the tester group, and you'll get Play Store access shortly after.",
    "hero.needToday": "What do you need today?",
    "hero.needTalk": "☕ Someone to talk to",
    "hero.needFriend": "🤝 A new friend",
    "hero.needActivity": "🎨 Something to do",
    "hero.needLanguage": "🗣️ Help with language",
    "hero.needSettling": "🌍 Help settling in",
    "hero.needEncouragement": "🖤 Just some encouragement",

    "note.heading": "A little note from a mama ✒︎",
    "note.cta": "Leave a little note →",

    "alone.prompt": "Feeling a little alone today?",
    "alone.title": "You're not alone.",
    "alone.body": "Somewhere in our circle, another mama is probably awake with a baby right now, wondering if she's the only one feeling this way.",
    "alone.cta": "Join the circle →",

    "about.heading": "About Mama Circle",
    "about.what.heading": "What is Mama Circle?",
    "about.what.body": "MamaCircle is a community for mothers: find nearby moms with babies around the same age, share the journey through a group feed, chat, Q&A, and a knowledge base written by the community itself.",
    "about.who.heading": "Who is it for?",
    "about.who.body": "New and expecting mothers, whatever their background or first language. MamaCircle is built for integration and inclusion from day one: connecting mothers across languages and cultures, not just within one neighborhood.",
    "about.expect.heading": "What to expect",
    "about.expect.body": "Create a profile, tell us about your neighborhood and your little one, and start connecting with nearby mothers. Your exact address is never shared, only your neighborhood.",

    "founder.heading": "A word from the founder",
    "founder.body1": "Hi, I'm Saga, and I founded MamaCircle.",
    "founder.body2": "When a child is born, a mother is born too, and nobody should have to figure out that second birth alone.",
    "founder.body3": "I built MamaCircle because I wanted every mother to have somewhere to find her circle: a nearby mom with a baby the same age, a group that feels like home, a question answered by someone who's been exactly where you are.",
    "founder.body4": "Whoever you are, whatever you speak, wherever you're from: there's a place for you here.",
    "founder.signature": "— Saga",

    "languages.heading": "Around the world in our circle",
    "languages.tagline": "One circle. Many languages. One feeling: Belonging.",

    "menwithbabies.heading": "Men With Babies",
    "menwithbabies.badge": "Coming soon",
    "menwithbabies.body": "A space for dads too. In the works.",

    "features.heading": "Made for the moments that matter",
    "features.nearby.title": "Find your circle",
    "features.nearby.body": "MamaCircle matches you with nearby mothers who have babies around the same age, so you can plan playdates and build real friendships close to home. Your exact address stays private: only your neighborhood is ever shown.",
    "features.feed.title": "Feed & groups",
    "features.feed.body": "Post updates, photos, and questions to the moms around you. Join or start groups around shared interests, neighborhoods, or stages.",
    "features.chat.title": "Chat",
    "features.chat.body": "Message one-on-one or in groups, in real time.",
    "features.forum.title": "Q&A forum",
    "features.forum.body": "Ask anything, searchable, answered by moms who have been there. Plus a knowledge base of articles contributed and reviewed by the community.",

    "stats.heading": "The circle is growing",
    "stats.mamas": "Mamas",
    "stats.cities": "Cities",
    "stats.groups": "Groups",
    "stats.loading": "Counting the circle...",
    "stats.error": "Couldn't load the numbers right now.",

    "testimonials.heading": "Kind words from other mamas",
    "testimonials.empty": "Our circle is just getting started. Check back soon for kind words from mamas in the community.",

    "privacy.heading": "Built with care",
    "privacy.item1": "Privacy first: no precise home location, and your child's profile uses a nickname and birth month only, never a full birthdate or legal name",
    "privacy.item2": "No ads, and no advertising or analytics tracking of any kind",
    "privacy.item3": "Reporting and blocking are built in from day one",
    "privacy.item4": "Full dark mode",
    "privacy.item5": "Available in Norwegian, English, Swedish, and Danish (and more)",
    "privacy.link": "Read the full privacy policy →",

    "faq.heading": "FAQ",
    "faq.q1.q": "Is MamaCircle available now?",
    "faq.q1.a": "The app is in closed testing on Google Play. Tap the “Google Play” button above to join the tester group: you'll get Play Store access shortly after.",
    "faq.q2.q": "Does MamaCircle work on iPhone?",
    "faq.q2.a": "Not yet. The app is currently Android only.",
    "faq.q3.q": "Where is MamaCircle available?",
    "faq.q3.a": "MamaCircle is built for mothers in Norway, Sweden, and Denmark, and supports several more languages besides.",
    "faq.q4.q": "Who's behind MamaCircle?",
    "faq.q4.a": "MamaCircle is operated by Hafmula Group. Questions can be sent to <a href=\"mailto:hafmulagroup@gmail.com\">hafmulagroup@gmail.com</a>.",
    "faq.q5.q": "How do I become a member?",
    "faq.q5.a": "Tap “Join as a tester” and join the tester group on Google Groups. You'll get Play Store access shortly after, and sign up with your email right in the app.",
    "faq.q6.q": "Are there activities or meetups, not just chat?",
    "faq.q6.a": "Groups in the app are a great way to meet other mothers around a shared interest, neighborhood, or stage. A dedicated activities & events calendar is in the works.",
    "faq.q7.q": "What makes MamaCircle's community different?",
    "faq.q7.a": "MamaCircle is built for integration and inclusion from day one: connecting mothers across languages, cultures, and backgrounds, not just within one neighborhood.",
    "faq.q8.q": "What languages does MamaCircle support?",
    "faq.q8.a": "Norwegian, English, Swedish, Danish, Arabic, Somali, Spanish, Tigrinya, and Amharic, with a language picker right in the app.",

    "contact.heading": "Suggestions & inquiries",
    "contact.body": "We'd love to hear from you. Pick whatever fits best:",
    "contact.suggestion": "💡 Suggestion",
    "contact.question": "❓ Question",
    "contact.inquiry": "📩 Inquiry",
    "contact.feedback": "🗣️ Feedback",

    "newsletter.heading": "Stay in the Circle",
    "newsletter.body": "Get upcoming MamaCircle events, community updates, and little notes from us, straight to your inbox.",
    "newsletter.placeholder": "you@example.com",
    "newsletter.button": "Subscribe",
    "newsletter.success": "Thank you! You're in the circle.",
    "newsletter.error": "Something went wrong. Please try again shortly.",
    "newsletter.already": "That email is already in the circle.",

    "joinclub.heading": "Ready to join?",
    "joinclub.button": "Join the Club",

    "footer.copy": "© 2026 Hafmula Group. MamaCircle is a working name.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.contact": "Contact",
  },
};

function applyLang(lang) {
  document.documentElement.lang = lang === "nb" ? "nb" : "en";
  document.documentElement.dataset.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = translations[lang][key];
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const value = translations[lang][key];
    if (value !== undefined) el.placeholder = value;
  });
  document.getElementById("lang-toggle").textContent = lang === "nb" ? "EN" : "NO";
  localStorage.setItem("mc-lang", lang);
  renderTestimonials(lang);
  renderLittleNote(lang);
}

function renderTestimonials(lang) {
  const list = document.getElementById("testimonials-list");
  const empty = document.getElementById("testimonials-empty");
  if (!list || !empty) return;
  if (testimonials.length === 0) {
    list.style.display = "none";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";
  list.style.display = "grid";
  list.innerHTML = testimonials
    .map(
      (t) =>
        `<blockquote class="testimonial-card"><p>“${t.quote[lang]}”</p><cite>— ${t.author[lang]}</cite></blockquote>`
    )
    .join("");
}

function renderLittleNote(lang) {
  const el = document.getElementById("little-note-text");
  const placeEl = document.getElementById("little-note-place");
  if (!el || !placeEl) return;
  const note = littleNotes[Math.floor(Math.random() * littleNotes.length)];
  el.textContent = `“${note[lang]}”`;
  placeEl.textContent = note.place[lang];
}

document.addEventListener("DOMContentLoaded", () => {
  const aloneBtn = document.getElementById("alone-prompt-btn");
  const aloneReveal = document.getElementById("alone-reveal");
  if (aloneBtn && aloneReveal) {
    aloneBtn.addEventListener("click", () => {
      const isHidden = aloneReveal.hasAttribute("hidden");
      if (isHidden) aloneReveal.removeAttribute("hidden");
      else aloneReveal.setAttribute("hidden", "");
    });
  }
});

function initLang() {
  const saved = localStorage.getItem("mc-lang");
  const browserLang = navigator.language && navigator.language.toLowerCase();
  const guessed = browserLang && (browserLang.startsWith("nb") || browserLang.startsWith("no") || browserLang.startsWith("nn"))
    ? "nb"
    : browserLang && !browserLang.startsWith("nb") && !browserLang.startsWith("no")
      ? (saved || "nb")
      : "nb";
  applyLang(saved || "nb");
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  const current = document.documentElement.dataset.lang === "nb" ? "en" : "nb";
  applyLang(current);
});

initLang();
