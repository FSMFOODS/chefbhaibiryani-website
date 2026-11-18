const menuGroups = [
    {
        title: "Chicken Biryani",
        category: "biryani",
        description: "Slow-cooked chicken dum biryani with basmati rice, saffron and our house spice blend. Add Chicken 65 to make it a feast.",
        image: "chicken_bri.jpg",
        imageAlt: "Chef Bhai chicken biryani menu board with mini, regular and 1 kg portions",
        items: [
            { name: "Mini", price: 140 },
            { name: "Regular", price: 180 },
            { name: "Regular + Chicken 65", price: 220, note: "50g" },
            { name: "1 kg", price: 240 },
            { name: "1 kg + Chicken 65", price: 280, note: "50g" }
        ]
    },
    {
        title: "Mutton Biryani",
        category: "biryani",
        description: "Tender mutton layered with fragrant rice and cooked on dum. Available in mini, regular and one-kilo portions.",
        image: "mutton_bri.jpg",
        imageAlt: "Chef Bhai mutton biryani menu board with mini, regular and 1 kg portions",
        items: [
            { name: "Mini", price: 200 },
            { name: "Regular", price: 300 },
            { name: "Regular + Chicken 65", price: 340, note: "50g" },
            { name: "1 kg", price: 360 },
            { name: "1 kg + Chicken 65", price: 400, note: "50g" }
        ]
    },
    {
        title: "Plain, Egg & 65 Biryani",
        category: "biryani",
        description: "Everyday biryani favourites, cooked fresh in small batches. Simple, aromatic and ready to serve.",
        image: "egg_bri.jpg",
        imageAlt: "Chef Bhai plain and egg biryani menu board",
        items: [
            { name: "Plain Biryani", price: 110, note: "500g" },
            { name: "Egg Biryani", price: 130, note: "500g · 2 eggs" },
            { name: "1 kg Plain Biryani", price: 220, note: "1 egg" },
            { name: "65 Biryani Half Plate", price: 210 }
        ]
    },
    {
        title: "Bucket Biryani",
        category: "bucket",
        description: "A sharing bucket for gatherings, layered with rice, meat and aromatics. Choose chicken or mutton.",
        image: "bucket_biryani.jpg",
        imageAlt: "Chef Bhai chicken bucket biryani menu board with large and mini sizes",
        note: "Accompaniments: egg, raita, brinjal, sweet & chicken 65.",
        items: [
            { name: "Mini · Chicken", price: 650, note: "Serves 3-4" },
            { name: "Mini · Mutton", price: 1000, note: "Serves 3-4" },
            { name: "Large · Chicken", price: 1300, note: "Serves 6-7" },
            { name: "Large · Mutton", price: 1900, note: "Serves 6-7" }
        ]
    },
    {
        title: "Starters",
        category: "starters",
        description: "Crisp, hot and built for sharing. Order chicken 65 by weight, or pick a fry, lollipop or pepper special.",
        image: "chicken65.jpg",
        imageAlt: "Chef Bhai chicken 65 bone and boneless menu board",
        items: [
            { name: "Chicken 65 Bone", price: 50, note: "50g" },
            { name: "Chicken 65 Bone", price: 100, note: "100g" },
            { name: "Chicken 65 Bone", price: 180, note: "200g" },
            { name: "Chicken 65 Boneless", price: 240, note: "200g" },
            { name: "Chicken Lollipop", price: 220, note: "5-6 pieces" },
            { name: "Leg Fry", price: 120, note: "1 piece" },
            { name: "Leg Fry", price: 220, note: "2 pieces" },
            { name: "Egg Masala", price: 150, note: "4 pieces" },
            { name: "Pepper Chicken", price: 240, note: "200g" }
        ]
    },
    {
        title: "Add-ons",
        category: "addons",
        description: "The extras that complete the meal — cooling raita, brinjal salan, boiled egg and bread halwa.",
        images: [
            { src: "bread_halwa.jpg", alt: "Bread halwa garnished with cashews and raisins" },
            { src: "brinjal.jpg", alt: "Brinjal gravy served in a bowl" },
            { src: "raitha.jpg", alt: "Fresh onion raitha in a bowl" }
        ],
        items: [
            { name: "Bread Halwa", price: 100, note: "200g" },
            { name: "Extra Egg", price: 10 },
            { name: "Extra Brinjal / Raita", price: 10 }
        ]
    },
    {
        title: "Party & Special Orders",
        category: "party",
        description: "Planning a function, office lunch or family gathering? We cook in bulk and customize to your headcount.",
        featured: true,
        cta: "call",
        note: "Party orders: per plate serves 6 persons (ratio 1:1.5). Accompaniments: egg, raita, brinjal & sweet. Bulk, party and corporate orders undertaken.",
        items: [
            { name: "Chicken Biryani Per Kg", price: 1400 },
            { name: "Mutton Biryani Per Kg", price: 2400 },
            { name: "Ghee Rice with Mutton Dalcha & Seeraga Samba Biryani", priceLabel: "Pre-order", note: "Minimum order 2 kg" }
        ]
    }
];

const categoryLabels = {
    all: "the full menu",
    biryani: "biryani",
    bucket: "bucket biryani",
    starters: "starter",
    addons: "add-on",
    party: "party & special"
};

const categoryDisplay = {
    biryani: "Biryani",
    bucket: "Bucket Biryani",
    starters: "Starters",
    addons: "Add-ons",
    party: "Party & Special"
};

const menuContainer = document.getElementById("menuContainer");
const menuCount = document.getElementById("menu-count");
const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
const menuReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const validFilters = new Set(Object.keys(categoryLabels));

const partnerLinks = {
    swiggy: "https://www.swiggy.com/direct/brand/589856?source=swiggy-direct&subSource=generic",
    zomato: "https://link.zomato.com/xqzv/rshare?id=9325551730563a99",
    whatsapp: "https://wa.me/918000786767"
};

let activeFilter = getInitialFilter();
let swapTimer = null;

function getInitialFilter() {
    const requested = new URLSearchParams(window.location.search).get("category");
    return requested && validFilters.has(requested) ? requested : "all";
}

function filterGroups(filter) {
    if (filter === "all") {
        return menuGroups;
    }

    return menuGroups.filter((group) => group.category === filter);
}

function countLabel(total, filter) {
    if (filter === "all") {
        return "Showing the full menu";
    }

    return `Showing ${total} ${categoryLabels[filter]} ${total === 1 ? "section" : "sections"}`;
}

function priceRowTemplate(item) {
    const hasPrice = typeof item.price === "number";
    const price = hasPrice ? `₹${item.price.toLocaleString("en-IN")}` : item.priceLabel;
    const note = item.note
        ? `<span class="menu-list__item-note">${item.note}</span>`
        : "";

    return `
        <li class="menu-list__row">
            <span class="menu-list__name">${item.name}${note}</span>
            <span class="menu-list__leader" aria-hidden="true"></span>
            <span class="menu-list__price${hasPrice ? "" : " menu-list__price--label"}">${price}</span>
        </li>
    `;
}

function mediaTemplate(group) {
    if (group.images) {
        const images = group.images
            .map(
                (image) => `
                    <img src="assets/img/menu/${image.src}" width="720" height="540" alt="${image.alt}" loading="lazy" decoding="async">
                `
            )
            .join("");

        return `
            <div class="menu-group__media menu-group__media--collage">
                ${images}
                <span class="menu-group__tag">${categoryDisplay[group.category]}</span>
            </div>
        `;
    }

    if (!group.image) {
        return "";
    }

    return `
        <div class="menu-group__media menu-group__media--board">
            <img src="assets/img/menu/${group.image}" width="720" height="540" alt="${group.imageAlt}" loading="lazy" decoding="async">
            <span class="menu-group__tag">${categoryDisplay[group.category]}</span>
        </div>
    `;
}

function whatsappOrderUrl(group) {
    const lines = group.items.map((item) => {
        const price = typeof item.price === "number"
            ? `₹${item.price.toLocaleString("en-IN")}`
            : item.priceLabel;
        const note = item.note ? ` (${item.note})` : "";

        return `• ${item.name}${note} — ${price}`;
    });

    const message = [
        `Hi Chef Bhai Biriyani, I'd like to order from the ${group.title} menu:`,
        "",
        ...lines,
        "",
        "Please confirm availability and total."
    ].join("\n");

    return `${partnerLinks.whatsapp}?text=${encodeURIComponent(message)}`;
}

function actionsTemplate(group) {
    if (group.cta === "call") {
        return `
            <a class="button button--light" href="tel:+918000786767" aria-label="Call Chef Bhai Biriyani to place a party or special order">
                Call to order
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M6.6 3h2.7l1.4 4.2-2 1.4a14 14 0 0 0 6.7 6.7l1.4-2L21 14.7v2.7a2.6 2.6 0 0 1-2.8 2.6A17.4 17.4 0 0 1 3.4 5.8 2.6 2.6 0 0 1 6.6 3Z"/>
                </svg>
            </a>
        `;
    }

    return `
        <a class="button button--primary" href="${whatsappOrderUrl(group)}" target="_blank" rel="noopener" aria-label="Order ${group.title} on WhatsApp with your menu selection prefilled">
            WhatsApp
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
        </a>
        <a class="menu-group__partner" href="${partnerLinks.swiggy}" target="_blank" rel="noopener" aria-label="Order ${group.title} on Swiggy">Swiggy</a>
        <a class="menu-group__partner" href="${partnerLinks.zomato}" target="_blank" rel="noopener" aria-label="Order ${group.title} on Zomato">Zomato</a>
    `;
}

function revealTemplate(group) {
    if (group.image) {
        return `<div class="menu-group__reveal" style="background-image: url('assets/img/menu/${group.image}')" aria-hidden="true"></div>`;
    }

    if (group.images) {
        const images = group.images
            .map((image) => `<img src="assets/img/menu/${image.src}" alt="" loading="lazy" decoding="async">`)
            .join("");

        return `<div class="menu-group__reveal menu-group__reveal--collage" aria-hidden="true">${images}</div>`;
    }

    return "";
}

function groupTemplate(group, index) {
    const classes = ["menu-group"];

    if (group.featured) {
        classes.push("menu-group--feature");
    }

    if (!group.featured && index % 2 === 1) {
        classes.push("menu-group--reverse");
    }

    if (!group.featured && (group.image || group.images)) {
        classes.push("menu-group--reveal");
    }

    const note = group.note
        ? `<p class="menu-group__note">${group.note}</p>`
        : "";

    return `
        <article class="${classes.join(" ")}" style="--card-index: ${index}">
            ${mediaTemplate(group)}
            ${revealTemplate(group)}
            <div class="menu-group__content">
                <p class="menu-group__kicker">${categoryDisplay[group.category]}</p>
                <h3>${group.title}</h3>
                <p class="menu-group__description">${group.description}</p>
                <ul class="menu-list">
                    ${group.items.map(priceRowTemplate).join("")}
                </ul>
                ${note}
                <div class="menu-group__actions">
                    ${actionsTemplate(group)}
                </div>
            </div>
        </article>
    `;
}

function emptyStateTemplate() {
    return `
        <p class="menu__empty">
            No dishes in this category yet.
            <button type="button" class="menu__empty-reset">Show the full menu</button>
        </p>
    `;
}

function renderMenu(filter) {
    if (!menuContainer) {
        return;
    }

    const groups = filterGroups(filter);

    menuContainer.innerHTML = groups.length
        ? groups.map(groupTemplate).join("")
        : emptyStateTemplate();

    if (menuCount) {
        menuCount.textContent = countLabel(groups.length, filter);
    }

    filterButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
    });

    const resetButton = menuContainer.querySelector(".menu__empty-reset");
    if (resetButton) {
        resetButton.addEventListener("click", () => applyFilter("all"));
    }
}

function syncUrl(filter) {
    const url = new URL(window.location.href);

    if (filter === "all") {
        url.searchParams.delete("category");
    } else {
        url.searchParams.set("category", filter);
    }

    window.history.replaceState(null, "", url);
}

function applyFilter(filter, options = {}) {
    const nextFilter = validFilters.has(filter) ? filter : "all";
    const shouldAnimate = options.animate !== false && !menuReduceMotion.matches;

    if (nextFilter === activeFilter && menuContainer && menuContainer.childElementCount) {
        return;
    }

    activeFilter = nextFilter;
    syncUrl(nextFilter);

    if (!menuContainer) {
        return;
    }

    if (!shouldAnimate) {
        renderMenu(nextFilter);
        return;
    }

    window.clearTimeout(swapTimer);
    menuContainer.setAttribute("aria-busy", "true");
    menuContainer.classList.add("is-swapping");

    swapTimer = window.setTimeout(() => {
        renderMenu(nextFilter);
        menuContainer.removeAttribute("aria-busy");
        menuContainer.classList.remove("is-swapping");
    }, 160);
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        if (filter && filter !== activeFilter) {
            applyFilter(filter);
        }
    });
});

window.addEventListener("popstate", () => {
    activeFilter = getInitialFilter();
    syncUrl(activeFilter);
    renderMenu(activeFilter);
});

if (menuContainer) {
    renderMenu(activeFilter);
    syncUrl(activeFilter);
}
