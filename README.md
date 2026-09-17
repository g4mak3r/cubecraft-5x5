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

## v3 scanner integration
The camera grid is converted to the solver's exact `Face::ALL` order: Up, Down, Front, Back, Left, Right. The Down-face guide intentionally places the green/front edge at the TOP of the camera frame (Up uses green at the BOTTOM), matching `cube_core::face_cell_to_coord`.
Before a scan is sent to reduction, v3 enumerates in-plane face rotations and filters them against all eight legal/unique corner color triples. It then accepts an orientation only if the actual reduction result independently replays to solved.

`/selftest.html` bypasses the camera entirely: it creates a legal 5×5 scramble inside CubeLab, exports only its 150 sticker colors, sends those through the same Web Worker, and independently replays the returned moves. PASS proves the deployed solver pipeline itself is working.
