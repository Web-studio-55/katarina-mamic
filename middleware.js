export const config = { matcher: ['/((?!favicon).*)'] };

const USER = 'katarina';
const PASS = 'haljine2026';

export default function middleware(req) {
  const auth = req.headers.get('authorization');
  if (auth) {
    const [scheme, encoded] = auth.split(' ');
    if (scheme === 'Basic' && encoded) {
      try {
        const [u, p] = atob(encoded).split(':');
        if (u === USER && p === PASS) return;
      } catch (e) {}
    }
  }
  return new Response('Stranica je u izradi — potrebna je prijava.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Katarina Mamic Design"',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
