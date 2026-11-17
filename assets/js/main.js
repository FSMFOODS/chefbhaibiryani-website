const body = document.body;
const header = document.getElementById("header");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = Array.from(document.querySelectorAll(".nav__link[href^='#']"));
const scrollTopLink = document.getElementById("scroll-top");
const copyButton = document.getElementById("copy-phone");
const toast = document.getElementById("toast");
const marquee = document.getElementById("quality-marquee");
const marqueeToggle = document.getElementById("marquee-toggle");
const year = document.getElementById("year");

const desktopQuery = window.matchMedia("(min-width: 900px)");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let toastTimer = null;

function setNavOpen(open) {
    if (!navToggle) {
        return;
    }

    body.classList.toggle("nav-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

function closeNav(returnFocus = false) {
    if (!body.classList.contains("nav-open")) {
        return;
    }

    setNavOpen(false);

    if (returnFocus && navToggle) {
        navToggle.focus();
    }
}

if (navToggle) {
    navToggle.addEventListener("click", () => {
        setNavOpen(!body.classList.contains("nav-open"));
    });
}

if (navMenu) {
    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => closeNav());
    });
}

document.addEventListener("click", (event) => {
    if (!body.classList.contains("nav-open") || !header) {
        return;
    }

    if (!header.contains(event.target)) {
        closeNav();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeNav(true);
    }
});

const handleDesktopChange = (event) => {
    if (event.matches) {
        closeNav();
    }
};

if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", handleDesktopChange);
} else {
    desktopQuery.addListener(handleDesktopChange);
}

const onScroll = () => {
    if (header) {
        header.classList.toggle("is-scrolled", window.scrollY > 8);
    }

    if (scrollTopLink) {
        scrollTopLink.classList.toggle("is-visible", window.scrollY > 640);
    }
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

if (navLinks.length && "IntersectionObserver" in window) {
    const sections = new Map();

    navLinks.forEach((link) => {
        const id = link.getAttribute("href").slice(1);
        const section = document.getElementById(id);

        if (section) {
            sections.set(section, link);
        }
    });

    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                navLinks.forEach((link) => link.classList.remove("active-link"));
                const activeLink = sections.get(entry.target);

                if (activeLink) {
                    activeLink.classList.add("active-link");
                }
            });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((link, section) => sectionObserver.observe(section));
}

const revealItems = Array.from(document.querySelectorAll(".reveal"));

if (revealItems.length) {
    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
        revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
        );

        revealItems.forEach((item) => revealObserver.observe(item));
    }
}

function showToast(message) {
    if (!toast) {
        return;
    }

    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
        toast.classList.remove("is-visible");
    }, 2800);
}

async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch {
        }
    }

    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.top = "-9999px";
    field.style.opacity = "0";
    body.appendChild(field);
    field.select();

    let copied = false;

    try {
        copied = document.execCommand("copy");
    } catch (error) {
        copied = false;
    }

    field.remove();
    return copied;
}

if (copyButton) {
    copyButton.addEventListener("click", async () => {
        const phone = copyButton.dataset.phone || "+91 80007 86767";
        const copied = await copyText(phone);

        showToast(
            copied
                ? "Phone number copied. See you soon."
                : "Could not copy. Please call +91 80007 86767."
        );
    });
}

if (marquee && marqueeToggle) {
    const setMarqueePaused = (paused) => {
        marquee.classList.toggle("is-paused", paused);
        marqueeToggle.setAttribute("aria-pressed", String(paused));
        marqueeToggle.setAttribute(
            "aria-label",
            paused ? "Play quality marquee animation" : "Pause quality marquee animation"
        );

        const label = marqueeToggle.querySelector(".marquee__toggle-label");
        if (label) {
            label.textContent = paused ? "Play" : "Pause";
        }
    };

    marqueeToggle.addEventListener("click", () => {
        setMarqueePaused(!marquee.classList.contains("is-paused"));
    });
}

if (year) {
    year.textContent = String(new Date().getFullYear());
}
