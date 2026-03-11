/**
 * Jednoduchý akordeon pro FAQ sekci v exportovaném HTML.
 *
 * Předpoklady:
 * - Každá otázka je .border (card) s vnořeným <button> a případným odpovědním <div>.
 * - První otázka má odpověď vloženou v <div> hned za <button>.
 * - Ostatní otázky zatím obsahují jen <button>; tento skript jim doplní odpověď jako skrytý blok,
 *   pokud je v HTML připravený (nebo zůstanou bez odpovědi, ale stále klikatelné).
 *
 * Cíl:
 * - Každá otázka je samostatně rozbalitelná / sbalitelná (může být otevřeno víc najednou).
 * - Otevřená otázka má zvýrazněné pozadí a border (primary varianta).
 * - Rozbalení / sbalení je animované přes max-height.
 */

(function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  window.addEventListener('DOMContentLoaded', function () {
    var faqSection = document.querySelector('section[data-export-section="faq"]');
    if (!faqSection) return;

    var cards = Array.prototype.slice.call(
      faqSection.querySelectorAll('.space-y-4 > .border')
    );
    if (!cards.length) return;

    function setCardState(card, isOpen) {
      var icon = card.querySelector('svg.lucide-chevron-down');
      var body = card.querySelector('[data-faq-answer]');

      // Přepínání tříd na card
      if (isOpen) {
        card.classList.remove('border-slate-200', 'bg-white', 'hover:border-slate-300');
        card.classList.add('border-primary-200', 'bg-primary-50/50');
      } else {
        card.classList.remove('border-primary-200', 'bg-primary-50/50');
        card.classList.add('border-slate-200', 'bg-white', 'hover:border-slate-300');
      }

      // Přepínání rotace ikony
      if (icon) {
        icon.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      }

      // Přepínání těla odpovědi s animací max-height
      if (body) {
        body.style.overflow = 'hidden';
        body.style.transition = 'max-height 250ms ease';

        if (isOpen) {
          body.style.display = 'block';
          var fullHeight = body.scrollHeight;
          body.style.maxHeight = fullHeight + 'px';
        } else {
          body.style.maxHeight = '0px';
          // Po konci animace schováme obsah úplně
          body.addEventListener(
            'transitionend',
            function handleEnd(e) {
              if (e.propertyName === 'max-height') {
                body.style.display = 'none';
                body.removeEventListener('transitionend', handleEnd);
              }
            }
          );
        }
      }
      card.setAttribute('data-open', isOpen ? 'true' : 'false');
    }

    // Inicializace: první card necháme otevřenou, ostatní zavřeme; všechny jsou klikatelné
    cards.forEach(function (card, index) {
      var existingBodyWrapper = null;

      // Odpověď očekáváme v <div> hned za <button>
      var btn = card.querySelector('button');
      if (!btn) return;

      existingBodyWrapper = btn.nextElementSibling;

      // Pokud existuje odpověď, označíme ji
      if (index === 0) {
        if (existingBodyWrapper) {
          existingBodyWrapper.setAttribute('data-faq-answer', 'true');
        }
      }

      // U ostatních karet, pokud mají odpověď, také ji označíme
      var body = card.querySelector('[data-faq-answer]');
      if (!body && existingBodyWrapper) {
        existingBodyWrapper.setAttribute('data-faq-answer', 'true');
        body = existingBodyWrapper;
      }

      setCardState(card, index === 0);

      btn.addEventListener('click', function (event) {
        event.preventDefault();

        var isCurrentlyOpen = card.getAttribute('data-open') === 'true';
        setCardState(card, !isCurrentlyOpen);
      });
    });
  });
})();

