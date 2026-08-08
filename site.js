// Talks directly to the app's live Supabase project via its public anon
// key (same project the Flutter app uses, same key type) -- no separate
// backend for this static site. Plain fetch() against PostgREST rather
// than pulling in the @supabase/supabase-js CDN bundle: one fewer
// third-party script on a site whose whole privacy pitch is "no
// analytics or tracking of any kind."
const SUPABASE_URL = "https://hhyuzwgsubqyxvphfhho.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoeXV6d2dzdWJxeXh2cGhmaGhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0NzYzOTksImV4cCI6MjEwMDA1MjM5OX0.x4biFVUYxTcADACzSo-T4DNGkMC7-haf4DNwBu6r29I";

function currentLang() {
  return document.documentElement.dataset.lang === "nb" ? "nb" : "en";
}

async function loadCircleStats() {
  const loadingEl = document.getElementById("stats-loading");
  const errorEl = document.getElementById("stats-error");
  const numbersEl = document.getElementById("stats-numbers");
  if (!numbersEl) return;
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/public_circle_stats`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
      },
      body: "{}",
    });
    if (!res.ok) throw new Error(`status ${res.status}`);
    const rows = await res.json();
    const stats = Array.isArray(rows) ? rows[0] : rows;
    document.getElementById("stat-mamas").textContent = stats.mamas_count ?? "–";
    document.getElementById("stat-cities").textContent = stats.cities_count ?? "–";
    document.getElementById("stat-groups").textContent = stats.groups_count ?? "–";
    loadingEl.hidden = true;
    numbersEl.hidden = false;
  } catch (err) {
    loadingEl.hidden = true;
    if (errorEl) errorEl.hidden = false;
  }
}

function initNewsletterForm() {
  const form = document.getElementById("newsletter-form");
  if (!form) return;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const input = document.getElementById("newsletter-email");
    const status = document.getElementById("newsletter-status");
    const button = form.querySelector("button[type=submit]");
    const email = input.value.trim();
    if (!email) return;

    button.disabled = true;
    status.hidden = true;
    let key = "newsletter.error";
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/newsletter_subscribers`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ email }),
      });
      if (res.status === 201 || res.status === 204) {
        key = "newsletter.success";
        input.value = "";
      } else if (res.status === 409) {
        key = "newsletter.already";
      } else {
        throw new Error(`status ${res.status}`);
      }
    } catch (err) {
      key = "newsletter.error";
    } finally {
      button.disabled = false;
      status.dataset.i18n = key;
      status.textContent = translations[currentLang()][key];
      status.hidden = false;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadCircleStats();
  initNewsletterForm();
});
