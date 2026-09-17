# CUBECRAFT 5×5

Mobile-first camera-assisted 5×5 Rubik's Cube solver for GitHub Pages.

## Deploy
1. Create a GitHub repository.
2. Upload the contents of this ZIP to the repository root.
3. In Settings → Pages set **Source: GitHub Actions**.
4. Open Actions and wait for **Build and deploy CUBECRAFT** to finish.
5. Open the Pages URL over HTTPS and allow camera access.

The GitHub Action compiles the included Rust solver to WebAssembly. No server/API is required at runtime.

## Scan orientation
The app guides the six faces in the solver's required order:
Up/white, Down/yellow, Front/green, Back/blue, Left/orange, Right/red.
Keep the indicated UP/FRONT reference while scanning so sticker orientation is preserved.

The 5×5 solve uses the included deterministic reduction engine and independently replays all returned low-level moves before displaying the solution.
