# CUBECRAFT 5x5 v14 — Dual Reduction Race

Offline GitHub Pages/WASM build for 5x5 camera solving.

## v14 solver change
For 5x5 the Rust/WASM path now has two distinct reduction lanes:
- `compact-reduction`: legacy propose-and-verify center + edge placers, then the existing checked 3x3 finish.
- `deterministic-reduction`: the existing robust deterministic reducer.

Both candidates must finish solved and then pass the existing independent replay gate. The shorter valid candidate is returned. If compact stalls, deterministic remains the fallback.

The existing 3D exact-slice guidance and adaptive human/machine presentation are preserved.

## CI
GitHub Actions is the authoritative Rust/WASM compilation/test gate. The generation environment used for this archive does not contain the Rust toolchain, so no claim is made that Rust was compiled locally before packaging.
