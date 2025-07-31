export function scrollToContact() {
  const el = document.getElementById('contact');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export function handleSectionNavigation(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export function initializeScrollBehavior() {
  const handler = () => {
    const id = window.location.hash.replace('#', '');
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  if (window.location.hash) handler();
  window.addEventListener('hashchange', handler);
  return () => window.removeEventListener('hashchange', handler);
}
