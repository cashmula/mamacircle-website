const translations = {
  nb: {
    "nav.features": "Funksjoner",
    "nav.privacy": "Personvern",
    "nav.faq": "Spørsmål",
    "hero.title": "Aldri alene som nybakt mor",
    "hero.subtitle": "MamaCircle finner mødre i nærheten med barn i samme alder, så du kan avtale lekestund, dele erfaringer og bygge ekte vennskap nær der du bor.",
    "hero.get_it": "Prøv den på",
    "hero.note": "Foreløpig i intern testing. Trykk på knappen for å bli med som tester.",
    "features.heading": "Bygget for det første året (og de neste)",
    "features.nearby.title": "Finn din krets",
    "features.nearby.body": "MamaCircle matcher deg med mødre i nærheten som har barn i samme alder, slik at du kan planlegge lekestunder og bygge ekte vennskap nær der du bor. Din nøyaktige adresse er alltid privat: kun ditt nabolag vises.",
    "features.feed.title": "Feed og grupper",
    "features.feed.body": "Del oppdateringer, bilder og spørsmål med mødrene rundt deg. Bli med i eller start grupper basert på interesser, nabolag eller livsfase.",
    "features.chat.title": "Chat",
    "features.chat.body": "Snakk direkte med en annen mor, eller i gruppe, i sanntid.",
    "features.forum.title": "Spørsmål og svar",
    "features.forum.body": "Spør om hva som helst, søkbart, besvart av mødre som har vært der selv. Pluss et kunnskapsbibliotek med artikler bidratt og kvalitetssikret av fellesskapet.",
    "privacy.heading": "Bygget med omtanke",
    "privacy.item1": "Personvern først: aldri nøyaktig hjemadresse, og barnets profil bruker kun kallenavn og fødselsmåned, aldri fullt fødselsdato eller navn",
    "privacy.item2": "Ingen annonser, og ingen analyse- eller sporingsverktøy av noe slag",
    "privacy.item3": "Rapportering og blokkering er innebygd fra dag én",
    "privacy.item4": "Full mørk modus",
    "privacy.item5": "Tilgjengelig på norsk, engelsk, svensk og dansk (og flere til)",
    "privacy.link": "Les hele personvernerklæringen →",
    "faq.heading": "Spørsmål",
    "faq.q1.q": "Er MamaCircle tilgjengelig nå?",
    "faq.q1.a": "Appen er i intern testing på Google Play. Trykk på “Google Play”-knappen øverst for å bli med som tester: du legges til på testlisten og kan installere appen kort tid etter.",
    "faq.q2.q": "Fungerer MamaCircle på iPhone?",
    "faq.q2.a": "Ikke ennå. Appen er foreløpig kun tilgjengelig for Android.",
    "faq.q3.q": "Hvor er MamaCircle tilgjengelig?",
    "faq.q3.a": "MamaCircle er laget for mødre i Norge, Sverige og Danmark, og støtter flere språk i tillegg.",
    "faq.q4.q": "Hvem står bak MamaCircle?",
    "faq.q4.a": "MamaCircle drives av Hafmula Group. Spørsmål kan sendes til <a href=\"mailto:hafmulagroup@gmail.com\">hafmulagroup@gmail.com</a>.",
    "footer.copy": "© 2026 Hafmula Group. MamaCircle er et kallenavn under utvikling.",
    "footer.privacy": "Personvern",
    "footer.contact": "Kontakt",
  },
  en: {
    "nav.features": "Features",
    "nav.privacy": "Privacy",
    "nav.faq": "FAQ",
    "hero.title": "Never alone as a new mom",
    "hero.subtitle": "MamaCircle finds nearby moms with babies around the same age, so you can plan playdates, swap advice, and build real friendships close to home.",
    "hero.get_it": "Try it on",
    "hero.note": "Currently in internal testing. Tap the button to join as a tester.",
    "features.heading": "Built for the first year (and the ones after)",
    "features.nearby.title": "Find your circle",
    "features.nearby.body": "MamaCircle matches you with nearby mothers who have babies around the same age, so you can plan playdates and build real friendships close to home. Your exact address stays private: only your neighborhood is ever shown.",
    "features.feed.title": "Feed & groups",
    "features.feed.body": "Post updates, photos, and questions to the moms around you. Join or start groups around shared interests, neighborhoods, or stages.",
    "features.chat.title": "Chat",
    "features.chat.body": "Message one-on-one or in groups, in real time.",
    "features.forum.title": "Q&A forum",
    "features.forum.body": "Ask anything, searchable, answered by moms who have been there. Plus a knowledge base of articles contributed and reviewed by the community.",
    "privacy.heading": "Built with care",
    "privacy.item1": "Privacy first: no precise home location, and your child's profile uses a nickname and birth month only, never a full birthdate or legal name",
    "privacy.item2": "No ads, and no advertising or analytics tracking of any kind",
    "privacy.item3": "Reporting and blocking are built in from day one",
    "privacy.item4": "Full dark mode",
    "privacy.item5": "Available in Norwegian, English, Swedish, and Danish (and more)",
    "privacy.link": "Read the full privacy policy →",
    "faq.heading": "FAQ",
    "faq.q1.q": "Is MamaCircle available now?",
    "faq.q1.a": "The app is in internal testing on Google Play. Tap the “Google Play” button above to join as a tester: you'll be added to the tester list and can install the app shortly after.",
    "faq.q2.q": "Does MamaCircle work on iPhone?",
    "faq.q2.a": "Not yet. The app is currently Android only.",
    "faq.q3.q": "Where is MamaCircle available?",
    "faq.q3.a": "MamaCircle is built for mothers in Norway, Sweden, and Denmark, and supports several more languages besides.",
    "faq.q4.q": "Who's behind MamaCircle?",
    "faq.q4.a": "MamaCircle is operated by Hafmula Group. Questions can be sent to <a href=\"mailto:hafmulagroup@gmail.com\">hafmulagroup@gmail.com</a>.",
    "footer.copy": "© 2026 Hafmula Group. MamaCircle is a working name.",
    "footer.privacy": "Privacy",
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
  document.getElementById("lang-toggle").textContent = lang === "nb" ? "EN" : "NO";
  localStorage.setItem("mc-lang", lang);
}

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
