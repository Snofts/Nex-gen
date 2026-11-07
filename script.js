
const promoMessages = [
  "30-day money-back guarantee",
  "Free domain for the first year",
  "24/7 customer support"
];
const promoText = document.getElementById("promoText");
let promoIndex = 0;

setInterval(() => {
  promoText.classList.add("fade");
  setTimeout(() => {
    promoIndex = (promoIndex + 1) % promoMessages.length;
    promoText.textContent = promoMessages[promoIndex];
    promoText.classList.remove("fade");
  }, 400);
}, 3500);
const slider = document.getElementById("slider");
const dotsBox = document.getElementById("dots");
const cards = slider.querySelectorAll(".card");

cards.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dotsBox.appendChild(dot);
});
const dots = dotsBox.querySelectorAll("span");

slider.addEventListener("scroll", () => {
  const cardWidth = cards[0].offsetWidth + 18;
  const index = Math.round(slider.scrollLeft / cardWidth);
  dots.forEach((d, i) => d.classList.toggle("active", i === index));
});
document.getElementById("backBtn").addEventListener("click", () => history.back());
document.getElementById("fwdBtn").addEventListener("click", () => history.forward());
document.getElementById("closeBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const connectBtn = document.getElementById("connectBtn");

connectBtn.addEventListener("click", () => {
  const connected = connectBtn.classList.toggle("connected");
  connectBtn.textContent = connected ? "✓ Connected" : "🔗 Connect";
});
const regions = {
  na: { name: "North America", cities: ["Phoenix", "Boston", "Asheville"],
        dots: [{x: 30, y: 62}, {x: 68, y: 50}, {x: 62, y: 60}] },
  sa: { name: "South America", cities: ["São Paulo"],
        dots: [{x: 55, y: 60}] },
  eu: { name: "Europe", cities: ["Amsterdam", "Frankfurt", "Vilnius", "London"],
        dots: [{x: 40, y: 45}, {x: 50, y: 52}, {x: 65, y: 40}, {x: 36, y: 40}] },
  af: { name: "South Africa", cities: ["Johannesburg"],
        dots: [{x: 55, y: 55}] },
  as: { name: "Asia", cities: ["Mumbai", "Singapore", "Jakarta"],
        dots: [{x: 35, y: 50}, {x: 62, y: 65}, {x: 68, y: 72}] },
  au: { name: "Australia", cities: ["Sydney"],
        dots: [{x: 70, y: 62}] }
};
const dcTabs = document.querySelectorAll(".dc-tab");
const dcMap = document.getElementById("dcMap");
const dcTitle = document.getElementById("dcTitle");
const dcList = document.getElementById("dcList");
function showRegion(key) {
  const region = regions[key];
  dcTitle.textContent = "Locations in " + region.name;
  dcList.innerHTML = region.cities.map(c => `<li>${c}</li>`).join("");
  dcMap.innerHTML = region.dots
    .map(d => `<span class="dc-dot" style="left:${d.x}%; top:${d.y}%"></span>`)
    .join("");
}

dcTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    dcTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    showRegion(tab.dataset.region);
  });
});

showRegion("na");   
const menuItems = document.querySelectorAll("#mockMenu li");
menuItems.forEach(item => {
  item.addEventListener("click", () => {
    menuItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});
const cpuValue = document.getElementById("cpuValue");
setInterval(() => {
  const cpu = 50 + Math.floor(Math.random() * 11);   
  cpuValue.textContent = cpu + "%";
}, 2000);
const ecoCount = document.getElementById("ecoCount");
let ecoDone = false;
const ecoObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !ecoDone) {
    ecoDone = true;
    let n = 0;
    const timer = setInterval(() => {
      n += 2;
      ecoCount.textContent = n;
      if (n >= 100) clearInterval(timer);
    }, 20);
  }
}, { threshold: 0.5 });

ecoObserver.observe(ecoCount);
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-q");

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    faqItems.forEach(i => {
      i.classList.remove("open");
      i.querySelector(".faq-q").setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("open");
      question.setAttribute("aria-expanded", "true");
    }
  });
});
