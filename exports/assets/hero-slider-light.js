/**
 * Light hero slider for exported HTML blocks.
 *
 * Použití mimo Next.js:
 * - připojit CSS bundle (exports/assets/app.css)
 * - připojit tento skript na stránku, kde je vyexportovaný blok hero.html
 *
 * <link rel="stylesheet" href="exports/assets/app.css" />
 * <script src="exports/assets/hero-slider-light.js" defer></script>
 */

(function () {
  const SLIDE_DURATION = 8000;

  /** Zjednodušená data slideru – jen to, co potřebujeme pro light verzi */
  const slides = [
    {
      badge: 'Hotelový systém',
      title: 'Spravujte svůj hotel, penzion i apartmány z jednoho místa',
      description:
        'Přidejte se k více jak 4 000 spokojeným klientům. Previo je nejpoužívanější hotelový systém v Česku.',
      buttonText: 'Zjistěte více',
      buttonHref: '#',
      image: './exports/img/hero-1.png',
    },
    {
      badge: 'Virtuální recepční Alfred',
      title: 'Pořiďte si majordoma, který pracuje nonstop.',
      description:
        'Ulehčete své recepci automatizací check-in a check-out. Nechte webovou aplikaci Alfred pracovat za Vás.',
      buttonText: 'Zjistěte více',
      buttonHref: '#',
      image: './exports/img/hero-2.png',
    },
    {
      badge: 'Weby pro hotely',
      title: 'Zvyšte přímé rezervace z vlastního webu',
      description:
        'Rychlý web a rezervační systém, který hostům nekomplikuje cestu. Vyšší konverze, méně provizí.',
      buttonText: 'Zjistěte více',
      buttonHref: '#',
      image: './exports/img/hero-3.png',
    },
    {
      badge: 'Channel manager',
      title: 'Mějte ceny a dostupnost pod kontrolou všude',
      description:
        'Napojte prodejní kanály do jednoho místa a spravujte ceníky i restrikce bez přepisování. Méně chyb, méně overbookingu.',
      buttonText: 'Zjistěte více',
      buttonHref: '#',
      image: './exports/img/hero-4.png',
    },
    {
      badge: 'Automatizace hotelů',
      title: 'Uvolněte recepci díky automatizaci',
      description:
        'Zautomatizujte rutiny, které berou čas: komunikaci, platby, check-in i doklady. Vy se soustředíte na hosty, ne na tabulky.',
      buttonText: 'Zjistěte více',
      buttonHref: '#',
      image: './exports/img/hero-5.png',
    },
    {
      badge: 'Klientská linka',
      title: 'Podpora, na kterou se dá spolehnout',
      description:
        'Jsme k dispozici 7 dní v týdnu. Když hoří provoz, potřebujete rychlou odpověď a člověka, který zná hotely.',
      buttonText: '+420 251 613 924',
      buttonHref: 'tel:+420251613924',
      image: './exports/img/hero-6.png',
    },
  ];

  // Připravené texty pro dvě overlay bubliny pro každý slide (musí odpovídat pořadí v hero.tsx)
  const overlaySets = [
    [
      { title: 'Obsazenost', value: '94% dnes' },
      { title: 'Rezervace', value: 'Nová objednávka' },
    ],
    [
      { title: 'Alfred', value: 'Check-in dokončen' },
      { title: 'Platba', value: 'Uhrazeno online' },
    ],
    [
      { title: 'Rezervace', value: 'Přímá rezervace potvrzena' },
      { title: 'Web', value: 'Dostupnost ověřena online' },
    ],
    [
      { title: 'Kanály', value: 'Dostupnost synchronizována' },
      { title: 'Ceník', value: 'Ceny aktualizovány všude' },
    ],
    [
      { title: 'Komunikace', value: 'Instrukce odeslány automaticky' },
      { title: 'Provoz', value: 'Méně ručních kroků' },
    ],
    [
      { title: 'Podpora', value: 'K dispozici 7 dní v týdnu' },
      { title: 'Telefon', value: 'Zavolejte a vyřešíme to' },
    ],
  ];

  function initHeroSlider(section) {
    let current = 0;
    let timer = null;

    const titleEl = section.querySelector('[data-hero-title]');
    const descEl = section.querySelector('[data-hero-description]');
    const primaryEl = section.querySelector('[data-hero-primary]');
    const primaryTextEl = section.querySelector('[data-hero-primary-text]');
    const imageEl =
      section.querySelector('img[data-hero-image]') ||
      section.querySelector('[data-hero-image] img') ||
      section.querySelector('img');

    const dotButtons = Array.from(
      section.querySelectorAll('button[aria-label^="Slide "]')
    );

    const overlayTitleEls = Array.from(
      section.querySelectorAll('[data-hero-overlay-title-index]')
    );
    const overlayValueEls = Array.from(
      section.querySelectorAll('[data-hero-overlay-value-index]')
    );

    if (!titleEl || !descEl || !primaryEl || !primaryTextEl || !imageEl) {
      return;
    }

    function restartProgressBar(index) {
      if (!dotButtons.length) return;
      dotButtons.forEach((btn, i) => {
        // smažeme všechny vnitřní prvky (včetně původního Next.js progress divu)
        while (btn.firstChild) {
          btn.removeChild(btn.firstChild);
        }

        if (i === index) {
          // aktivní slider – neklikací vzhled
          btn.style.cursor = 'default';
          const bar = document.createElement('div');
          bar.setAttribute('data-hero-progress', 'true');
          bar.style.position = 'absolute';
          bar.style.insetBlock = '0';
          bar.style.left = '0';
          bar.style.backgroundColor = 'rgb(181, 0, 0)'; // primary-600
          bar.style.borderRadius = '9999px';
          bar.style.width = '100%';
          bar.style.transformOrigin = 'left';
          bar.style.animation = `heroProgress ${SLIDE_DURATION}ms linear forwards`;
          btn.appendChild(bar);
        } else {
          // neaktivní slidery – můžou být klikací
          btn.style.cursor = 'pointer';
        }
      });
    }

    function fadeIn(el) {
      if (!el) return;
      // reset transition, nastavíme výchozí stav
      el.style.transition = 'none';
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      // force reflow, aby prohlížeč zaregistroval počáteční stav
      void el.offsetHeight;
      // pak zapneme animaci do finálního stavu
      el.style.transition = 'opacity 450ms ease-out, transform 450ms ease-out';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }

    function applySlide(index) {
      const slide = slides[index];
      current = index;

      titleEl.textContent = slide.title;
      descEl.textContent = slide.description;
      primaryTextEl.textContent = slide.buttonText;
      primaryEl.setAttribute('href', slide.buttonHref || '#');

      imageEl.setAttribute('src', slide.image);
      imageEl.setAttribute('alt', slide.title);

      // přemapujeme texty v overlay bublinách, pokud jsou k dispozici
      const overlays = overlaySets[index];
      if (overlays && overlayTitleEls.length && overlayValueEls.length) {
        overlays.forEach((overlay, i) => {
          if (overlayTitleEls[i]) overlayTitleEls[i].textContent = overlay.title;
          if (overlayValueEls[i]) overlayValueEls[i].textContent = overlay.value;
        });
      }

       // jednoduchý fade-in při každém přepnutí
       fadeIn(titleEl);
       fadeIn(descEl);
       fadeIn(primaryEl);
       fadeIn(imageEl);

       // restart progress baru pro aktuální slide
       restartProgressBar(index);
    }

    function next() {
      const nextIndex = (current + 1) % slides.length;
      applySlide(nextIndex);
    }

    function start() {
      stop();
      timer = setInterval(next, SLIDE_DURATION);
    }

    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    // Autoplay
    applySlide(0);
    start();

    // Kliknutí na tečky – ruční přepnutí slide
    if (dotButtons.length) {
      dotButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          if (index === current) return; // na aktivní nic neděláme
          applySlide(index);
          start();
        });
      });
    }

    // Pauza při hoveru hero image (pokud existuje)
    const imageWrapper = section.querySelector('[data-hero-image]')?.parentElement || imageEl.parentElement;
    if (imageWrapper) {
      imageWrapper.addEventListener('mouseenter', stop);
      imageWrapper.addEventListener('mouseleave', start);
    }
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.addEventListener('DOMContentLoaded', function () {
      const section = document.querySelector('[data-hero-slider="light"]');
      if (section) {
        initHeroSlider(section);
      }
    });
  }
})();

