// Short links on samievargas.com. Paths match case-insensitively and with or
// without a trailing slash, and anything else is passed through to the site.
const LINKS = {
  '/linkedin': 'https://www.linkedin.com/in/samievargas12/',
  '/github': 'https://github.com/SamieVargas',
  '/kaggle': 'https://www.kaggle.com/samievargas',
};

export default {
  async fetch(request) {
    const { pathname } = new URL(request.url);
    const key = pathname.toLowerCase().replace(/\/+$/, '');
    const target = LINKS[key];
    if (target) return Response.redirect(target, 302);
    return fetch(request);
  },
};
