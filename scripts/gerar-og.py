"""
Gera public/og.png (1200x630), a imagem que aparece ao compartilhar o site.

Uso:
    python scripts/gerar-og.py

Monta um HTML com as fontes e a foto embutidas em base64 e o renderiza com o
Edge ou o Chrome em modo headless. Rode de novo sempre que o nome, o cargo,
a foto ou os números mudarem.
"""

import base64
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent

NOME = "Tarso Hebert"
CARGO = "Desenvolvedor de Software"
FOCO = "Python · Backend · Automação"
DOMINIO = "tarsohebert.dev.br"
NUMEROS = [("40", "automações em produção"), ("370", "usuários"), ("97,32%", "de sucesso")]

NAVEGADORES = [
    Path("C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"),
    Path("C:/Program Files/Microsoft/Edge/Application/msedge.exe"),
    Path("C:/Program Files/Google/Chrome/Application/chrome.exe"),
    Path("C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"),
]


def b64(caminho: Path) -> str:
    return base64.b64encode(caminho.read_bytes()).decode()


def html() -> str:
    fontes = RAIZ / "node_modules/@fontsource"
    sans400 = b64(fontes / "ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff2")
    sans600 = b64(fontes / "ibm-plex-sans/files/ibm-plex-sans-latin-600-normal.woff2")
    mono400 = b64(fontes / "ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2")
    foto = b64(RAIZ / "src/assets/tarso.jpg")
    numeros = '<span class="dot">·</span>'.join(f"<span><b>{v}</b> {r}</span>" for v, r in NUMEROS)

    return f"""<!doctype html><html><head><meta charset="utf-8"><style>
@font-face {{ font-family: Plex; font-weight: 400; src: url(data:font/woff2;base64,{sans400}) format("woff2"); }}
@font-face {{ font-family: Plex; font-weight: 600; src: url(data:font/woff2;base64,{sans600}) format("woff2"); }}
@font-face {{ font-family: PlexMono; font-weight: 400; src: url(data:font/woff2;base64,{mono400}) format("woff2"); }}
* {{ margin: 0; box-sizing: border-box; }}
html, body {{ width: 1200px; height: 630px; overflow: hidden; background: #09090b; color: #f4f4f5; -webkit-font-smoothing: antialiased; }}
.frame {{ position: absolute; inset: 0; padding: 72px 80px; display: flex; gap: 72px; }}
.left {{ flex: 1; display: flex; flex-direction: column; }}
.label {{ font-family: PlexMono; font-size: 19px; letter-spacing: .06em; text-transform: uppercase; color: #85858e; }}
.name {{ font-family: Plex; font-weight: 600; font-size: 92px; line-height: 1; letter-spacing: -0.02em; margin-top: auto; }}
.role {{ font-family: Plex; font-size: 38px; margin-top: 22px; }}
.focus {{ font-family: PlexMono; font-size: 25px; color: #85858e; margin-top: 12px; }}
.stats {{ margin-top: 56px; padding-top: 24px; border-top: 1px solid #2e2e33; display: flex; gap: 12px; white-space: nowrap;
          font-family: PlexMono; font-size: 17px; letter-spacing: .04em; text-transform: uppercase; color: #a1a1aa; }}
.stats b {{ font-weight: 400; color: #f4f4f5; }}
.dot {{ color: #52525b; }}
.right {{ width: 300px; display: flex; flex-direction: column; justify-content: space-between; }}
.photo {{ width: 300px; height: 375px; object-fit: cover; border-radius: 2px; filter: grayscale(1) brightness(.88); }}
</style></head><body><div class="frame">
  <div class="left">
    <p class="label">{DOMINIO}</p>
    <p class="name">{NOME}</p>
    <p class="role">{CARGO}</p>
    <p class="focus">{FOCO}</p>
    <p class="stats">{numeros}</p>
  </div>
  <div class="right">
    <img class="photo" src="data:image/jpeg;base64,{foto}" alt="">
    <p class="label">Brasília, DF</p>
  </div>
</div></body></html>"""


def main() -> int:
    navegador = next((n for n in NAVEGADORES if n.exists()), None)
    if navegador is None:
        print("Edge ou Chrome não encontrado. Ajuste a lista NAVEGADORES.", file=sys.stderr)
        return 1

    with tempfile.TemporaryDirectory() as tmp:
        pasta = Path(tmp)
        origem = pasta / "og.html"
        origem.write_text(html(), encoding="utf8")
        destino = RAIZ / "public/og.png"

        subprocess.run(
            [
                str(navegador),
                "--headless=new",
                "--disable-gpu",
                "--hide-scrollbars",
                "--no-first-run",
                f"--user-data-dir={pasta / 'perfil'}",
                "--virtual-time-budget=4000",
                "--force-device-scale-factor=1",
                "--window-size=1200,630",
                f"--screenshot={destino}",
                origem.as_uri(),
            ],
            check=True,
            capture_output=True,
        )

    print(f"gerado: {destino} ({destino.stat().st_size // 1024} KB)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
