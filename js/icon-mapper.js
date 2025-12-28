(function(){
  const map = {
    'base-icon-email1': 'fas fa-envelope',
    'base-icon-pin2': 'fas fa-map-marker-alt',
    'base-icon-globe1': 'fas fa-globe',
    'base-icon-angle-down': 'fas fa-angle-down',
    'base-icon-search-1': 'fas fa-search',
    'base-icon-next': 'fas fa-angle-right',
    'base-icon-radio-checked': 'fas fa-check-circle',
    'base-icon-share2': 'fas fa-share-alt',
    'base-icon-facebook': 'fab fa-facebook-f',
    'base-icon-instagram': 'fab fa-instagram',
    'base-icon-twitter': 'fab fa-twitter',
    'base-icon-behance': 'fab fa-behance',
    'base-icon-map': 'fas fa-map-marker-alt',
    'base-icon-094-email-2': 'fas fa-envelope',
    'base-icon-phone-2': 'fas fa-phone',
    'base-icon-phone-call': 'fas fa-phone',
    'base-icon-address': 'fas fa-map-marker-alt',
    'base-icon-share2': 'fas fa-share-alt'
  };

  function replaceIcons() {
    Object.keys(map).forEach(oldClass => {
      document.querySelectorAll('.' + oldClass).forEach(el => {
        const faClass = map[oldClass];
        // preserve other classes except the oldClass
        const otherClasses = Array.from(el.classList).filter(c => c !== oldClass).join(' ');
        const newEl = document.createElement('i');
        newEl.className = faClass + (otherClasses ? ' ' + otherClasses : '');
        // copy attributes like aria-hidden, id, title if present
        for (let attr of el.attributes) {
          if (attr.name !== 'class') newEl.setAttribute(attr.name, attr.value);
        }
        el.parentNode.replaceChild(newEl, el);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', replaceIcons);
  } else {
    replaceIcons();
  }
})();
