export const config = { matcher: ['/((?!km-logo|favicon).*)'] };

const PASS = 'haljine2026';

const COMING_SOON = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">
<title>Katarina Mamić Design — Uskoro</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400&display=swap" rel="stylesheet">
<style>
  :root{
    --paper:#fcfaf9; --ink:#0e0d0d; --stone:#948b8e;
    --rose:#f3ccd6; --rose-deep:#c98ba0; --line:#ebe3e5;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  body{
    font-family:'Jost',sans-serif;background:var(--paper);color:var(--ink);
    min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;
    text-align:center;padding:40px 24px;font-weight:300;overflow:hidden;position:relative;
  }
  .bg-heart{
    position:fixed;font-size:70vh;line-height:1;color:var(--rose);opacity:.07;
    top:50%;left:50%;transform:translate(-50%,-52%);pointer-events:none;user-select:none;
  }
  .inner{position:relative;z-index:2;max-width:520px;opacity:0;animation:fadeUp 1.4s cubic-bezier(.22,1,.36,1) .2s forwards}
  @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
  .logo{height:110px;width:auto;margin:0 auto 30px;display:block;animation:breathe 4s ease-in-out infinite}
  @keyframes breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
  h1{font-family:'Cormorant Garamond',serif;font-weight:300;font-size:clamp(30px,6vw,44px);letter-spacing:.04em;line-height:1.15}
  .sub{font-size:10.5px;letter-spacing:.5em;text-transform:uppercase;color:var(--rose-deep);margin:14px 0 34px}
  .line{width:56px;height:1px;background:var(--rose-deep);margin:0 auto 34px}
  p.msg{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:21px;color:var(--stone);line-height:1.6;margin-bottom:44px}
  .ig{
    display:inline-flex;align-items:center;gap:12px;
    font-size:11px;letter-spacing:.32em;text-transform:uppercase;color:var(--ink);text-decoration:none;
    border-bottom:1px solid var(--ink);padding-bottom:6px;transition:all .3s;
  }
  .ig:hover{color:var(--rose-deep);border-color:var(--rose-deep)}
  .unlock{margin-top:70px}
  .unlock button.reveal{
    background:none;border:none;cursor:pointer;font-family:'Jost',sans-serif;
    font-size:10px;letter-spacing:.34em;text-transform:uppercase;color:var(--stone);
    padding:8px;transition:color .3s;
  }
  .unlock button.reveal:hover{color:var(--rose-deep)}
  .gate{display:none;margin-top:16px;justify-content:center;border-bottom:1px solid var(--line);max-width:280px;margin-left:auto;margin-right:auto}
  .gate.open{display:flex}
  .gate input{
    flex:1;border:none;background:none;outline:none;padding:12px 4px;text-align:center;
    font-family:'Jost',sans-serif;font-size:16px;letter-spacing:.14em;color:var(--ink);
  }
  .gate input::placeholder{color:var(--stone);font-size:12px;letter-spacing:.1em}
  .gate button{
    background:none;border:none;cursor:pointer;font-size:16px;color:var(--ink);padding:12px 6px;
    transition:color .3s;
  }
  .gate button:hover{color:var(--rose-deep)}
  .err{font-size:11px;color:#a04b4b;letter-spacing:.08em;margin-top:10px;min-height:16px}
  footer{position:fixed;bottom:22px;left:0;right:0;font-size:10px;letter-spacing:.24em;text-transform:uppercase;color:var(--stone);z-index:2}
</style>
</head>
<body>
<span class="bg-heart">♡</span>
<div class="inner">
  <img class="logo" src="/km-logo.png" alt="Katarina Mamić Design">
  <h1>Katarina Mamić</h1>
  <div class="sub">Design</div>
  <div class="line"></div>
  <p class="msg">Nešto lijepo se šije...<br>Naša nova web stranica uskoro stiže.</p>
  <a class="ig" href="https://www.instagram.com/katarinamamic/" target="_blank" rel="noopener">♡ Prati nas na Instagramu</a>
  <div class="unlock">
    <button class="reveal" onclick="document.querySelector('.gate').classList.add('open');this.style.display='none';document.getElementById('pw').focus()">Prijava</button>
    <form class="gate" onsubmit="return unlock(event)">
      <input id="pw" type="password" placeholder="Lozinka" autocomplete="current-password">
      <button type="submit">→</button>
    </form>
    <div class="err" id="err"></div>
  </div>
</div>
<footer>© Katarina Mamić Design · Zagreb</footer>
<script>
function unlock(e){
  e.preventDefault();
  var v = document.getElementById('pw').value.trim();
  if(!v) return false;
  var d = new Date(); d.setDate(d.getDate()+7);
  document.cookie = 'km_auth=' + encodeURIComponent(v) + '; path=/; expires=' + d.toUTCString() + '; SameSite=Lax; Secure';
  location.reload();
  return false;
}
// ako je lozinka bila kriva, cookie postoji ali smo opet ovdje
if(document.cookie.indexOf('km_auth=') !== -1){
  document.getElementById('err').textContent = 'Neispravna lozinka, pokušaj ponovno.';
  document.querySelector('.reveal').click();
  document.cookie = 'km_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
}
</script>
</body>
</html>`;

export default function middleware(req) {
  const cookies = req.headers.get('cookie') || '';
  const match = cookies.match(/(?:^|;\s*)km_auth=([^;]*)/);
  if (match && decodeURIComponent(match[1]) === PASS) return;
  return new Response(COMING_SOON, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}
