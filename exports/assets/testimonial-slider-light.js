/**
 * Light testimonial slider for exported HTML blocks.
 *
 * Použití:
 * - připojit CSS bundle (exports/assets/app.css)
 * - připojit tento skript na stránku s blokem exports/sections/testimonial.html
 *
 * <script src="exports/assets/testimonial-slider-light.js" defer></script>
 */

(function () {
  const AUTO_DURATION = 6000;

  const testimonials = [
    {
      quote: 'Přechod na Previo bylo to nejlepší rozhodnutí pro náš hotel.',
      text: 'Díky automatizaci jsme ušetřili desítky hodin měsíčně na administrativě. Channel manager funguje bezchybně a přímé rezervace přes náš web stouply o 40 %. Systém je navíc neuvěřitelně intuitivní, takže zaškolení nových recepčních trvá zlomek času.',
      name: 'Jan Novák',
      role: 'Ředitel',
      hotel: 'Grand Hotel Praha',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      logo: 'https://picsum.photos/seed/logo1/200/100',
      stat: '+40%',
      statText: 'Nárůst přímých rezervací během prvního půl roku',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
    },
    {
      quote: 'Konečně máme všechny rezervace přehledně na jednom místě.',
      text: 'Dříve jsme řešili overbookingy a ruční přepisování dat z různých portálů. S Previem je vše plně automatizované. Recepční systém je rychlý a přehledný, což nám umožňuje věnovat více času samotným hostům místo papírování.',
      name: 'Petra Svobodová',
      role: 'Provozní manažerka',
      hotel: 'Penzion U Lesa',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      logo: 'https://picsum.photos/seed/logo2/200/100',
      stat: '0',
      statText: 'Overbookingů od nasazení Previa',
      image: 'https://images.unsplash.com/photo-1762719300018-3a8c7af6d60b?w=800&q=80',
    },
    {
      quote: 'Skvělá technická podpora a neustálý vývoj nových funkcí.',
      text: 'Na Previu si nejvíce ceníme jejich přístupu k zákazníkům. Kdykoliv potřebujeme s něčím poradit, podpora reaguje okamžitě. Navíc systém neustále vylepšují a přidávají nové funkce, které nám pomáhají zvyšovat tržby a zefektivňovat provoz.',
      name: 'Tomáš Kučera',
      role: 'Majitel',
      hotel: 'Boutique Hotel centrum',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      logo: 'https://picsum.photos/seed/logo3/200/100',
      stat: '24/7',
      statText: 'Dostupnost profesionální podpory',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
    },
    {
      quote: 'Previo Pay nám neuvěřitelně zjednodušilo platby.',
      text: 'Automatické strhávání plateb z karet hostů nám ušetřilo spoustu starostí s nezaplacenými rezervacemi. Vše je plně integrované přímo v recepčním systému, takže máme okamžitý přehled o všech transakcích bez nutnosti kontrolovat bankovní účet.',
      name: 'Lucie Dvořáková',
      role: 'Finanční ředitelka',
      hotel: 'Resort & Spa Riviéra',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      logo: 'https://picsum.photos/seed/logo4/200/100',
      stat: '100%',
      statText: 'Automatizace platebních procesů',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
    },
  ];

  function initTestimonialSlider(section) {
    let current = 0;
    let timer = null;

    const quoteEl = section.querySelector('[data-testimonial-quote]');
    const textEl = section.querySelector('[data-testimonial-text]');
    const nameEl = section.querySelector('[data-testimonial-name]');
    const roleEl = section.querySelector('[data-testimonial-role]');
    const hotelEl = section.querySelector('[data-testimonial-hotel]');
    const statEl = section.querySelector('[data-testimonial-stat]');
    const statTextEl = section.querySelector('[data-testimonial-stat-text]');

    const avatarImg =
      section.querySelector('img[data-testimonial-avatar]') ||
      section.querySelector('[data-testimonial-avatar] img');
    const logoImg =
      section.querySelector('img[data-testimonial-logo]') ||
      section.querySelector('[data-testimonial-logo] img');
    const imageImg =
      section.querySelector('img[data-testimonial-image]') ||
      section.querySelector('[data-testimonial-image] img');

    const prevBtn = section.querySelector('button[aria-label="Předchozí reference"]');
    const nextBtn = section.querySelector('button[aria-label="Další reference"]');
    const dots = Array.from(section.querySelectorAll('[data-testimonial-dot-index]'));

    if (
      !quoteEl ||
      !textEl ||
      !nameEl ||
      !roleEl ||
      !hotelEl ||
      !statEl ||
      !statTextEl ||
      !avatarImg ||
      !logoImg ||
      !imageImg
    ) {
      return;
    }

    function fadeIn(el) {
      if (!el) return;
      el.style.transition = 'none';
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
      void el.offsetHeight;
      el.style.transition = 'opacity 350ms ease-out, transform 350ms ease-out';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }

    function apply(index) {
      const t = testimonials[index];
      current = index;

      quoteEl.textContent = `„${t.quote}“`;
      textEl.textContent = `„${t.text}“`;
      nameEl.textContent = t.name;
      roleEl.textContent = t.role;
      hotelEl.textContent = t.hotel;
      statEl.textContent = t.stat;
      statTextEl.textContent = t.statText;

      avatarImg.src = t.avatar;
      avatarImg.alt = t.name;
      logoImg.src = t.logo;
      logoImg.alt = `Logo ${t.hotel}`;
      imageImg.src = t.image;
      imageImg.alt = `Hotel ${t.hotel}`;

      fadeIn(quoteEl);
      fadeIn(textEl);
      fadeIn(nameEl);
      fadeIn(statEl);
      fadeIn(imageImg);

      // active state for dots
      if (dots.length) {
        dots.forEach((btn, i) => {
          const active = i === index;
          btn.style.cursor = active ? 'default' : 'pointer';
        });
      }
    }

    function next() {
      const nextIndex = (current + 1) % testimonials.length;
      apply(nextIndex);
    }

    function start() {
      stop();
      timer = setInterval(next, AUTO_DURATION);
    }

    function stop() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    // init
    apply(0);
    start();

    // buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const prevIndex = (current - 1 + testimonials.length) % testimonials.length;
        apply(prevIndex);
        stop();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        next();
        stop();
      });
    }

    if (dots.length) {
      dots.forEach((btn, i) => {
        btn.addEventListener('click', () => {
          if (i === current) return;
          apply(i);
          stop();
        });
      });
    }
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.addEventListener('DOMContentLoaded', function () {
      const section = document.querySelector('[data-testimonial-slider="light"]');
      if (section) {
        initTestimonialSlider(section);
      }
    });
  }
})();

