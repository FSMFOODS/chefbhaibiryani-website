const body = document.body;
const header = document.getElementById("header");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = Array.from(document.querySelectorAll(".nav__link[href^='#']"));
const scrollTopLink = document.getElementById("scroll-top");
const marquee = document.getElementById("quality-marquee");
const marqueeToggle = document.getElementById("marquee-toggle");
const reviewsMarquee = document.getElementById("reviews-marquee");
const reviewsToggle = document.getElementById("reviews-toggle");
const year = document.getElementById("year");

const desktopQuery = window.matchMedia("(min-width: 900px)");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

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

if (reviewsMarquee) {
    const reviewsTrack = reviewsMarquee.querySelector(".reviews__track");
    const reviewsGroup = reviewsTrack ? reviewsTrack.querySelector(".reviews__group") : null;

    if (reviewsTrack && reviewsGroup) {
        const reviewCards = Array.from(reviewsGroup.querySelectorAll(".reviews__card"));
        const ratings = reviewCards
            .map((card) => Number(card.dataset.rating))
            .filter((rating) => Number.isFinite(rating) && rating > 0);
        const score = document.querySelector(".reviews__score-number");
        const count = document.querySelector(".reviews__summary-count");
        const summaryStars = document.querySelector(".reviews__summary-stars");

        if (ratings.length) {
            const average = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
            const averageLabel = average.toFixed(1);

            if (score) {
                score.textContent = averageLabel;
            }

            if (count) {
                count.textContent = `Average from ${ratings.length} shared ${ratings.length === 1 ? "review" : "reviews"}`;
            }

            if (summaryStars) {
                summaryStars.setAttribute("aria-label", `Average rating ${averageLabel} out of 5`);
            }
        }

        const clone = reviewsGroup.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        clone.querySelectorAll("[id]").forEach((element) => element.removeAttribute("id"));
        reviewsTrack.appendChild(clone);

        const setReviewDuration = () => {
            const groupWidth = reviewsGroup.getBoundingClientRect().width;
            if (!groupWidth) {
                return;
            }

            const duration = Math.min(120, Math.max(40, groupWidth / 55));
            reviewsMarquee.style.setProperty("--reviews-duration", `${duration.toFixed(1)}s`);
        };

        setReviewDuration();
        reviewsMarquee.classList.add("is-ready");
        window.addEventListener("resize", setReviewDuration, { passive: true });
    }
}

if (reviewsMarquee && reviewsToggle) {
    const setReviewsPaused = (paused) => {
        reviewsMarquee.classList.toggle("is-paused", paused);
        reviewsToggle.setAttribute("aria-pressed", String(paused));
        reviewsToggle.setAttribute(
            "aria-label",
            paused ? "Play customer review marquee animation" : "Pause customer review marquee animation"
        );

        const label = reviewsToggle.querySelector(".reviews__toggle-label");
        if (label) {
            label.textContent = paused ? "Play reviews" : "Pause reviews";
        }
    };

    reviewsToggle.addEventListener("click", () => {
        setReviewsPaused(!reviewsMarquee.classList.contains("is-paused"));
    });
}

if (year) {
    year.textContent = String(new Date().getFullYear());
}
