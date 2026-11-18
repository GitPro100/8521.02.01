# Study 8521.02.03 — Moderate Saturated Fat and Added Sugars

**Status:** Experimental app implemented; not yet validated end-to-end in Qualtrics–Prolific or used for recruitment.  
**App:** `index.html` · **Manifest:** `implementation.json`  
**Source app:** Study 8521.02.02 v1.0.0  
**Stimulus version:** `moderate_satfat_sugar` · **Date:** 2026-11-18.

## Selected nutritional profiles

| Nutrient | Target | X | Y |
|---|---:|---:|---:|
| Saturated fat (g) | 2.0 | 1.5 | 2.5 |
| Added sugars (g) | 10 | 13 | 7 |
| Sodium (mg) | 180 | 180 | 180 |

Each profile deviates by **0.5 g saturated fat**, **3 g added sugars**, and **0 mg sodium** from the same target values. Both have an equal mean absolute percentage deviation of **18.33%**, counting all three attributes. Sodium is held constant.

Total fat 7 g, protein 11 g, total carbohydrates 30 g, calculated calories 227 kcal, price, and serving size are held constant as design assumptions. The participant-facing product cards display only the three attributes above.

## Procedure and counterbalancing

The study retains consent, instructions, objectives, choice, per-product perceived fit and desirability, demographics, and Qualtrics handoff, with a no-AI/no-sponsorship/no-mandate baseline. Both profiles are assigned to letter A/B and left/right position with four equally weighted configurations:

- `T_X_L`: A=X, A left
- `T_X_R`: A=X, A right
- `T_Y_L`: A=Y, A left
- `T_Y_R`: A=Y, A right

Assignment is persisted by Qualtrics before the application loads in live mode. New app postMessage namespace: `8521_0203_`. The browser storage namespace is distinct from previous studies.

## Access

- [Researcher Preview](https://gitpro100.github.io/8521.02.01/8521.02.03/?preview=1) — inspect all screens, switch configurations, export synthetic test records.
- [App source](index.html) — downloadable single-file HTML.

**Do not use the application as a data-collection endpoint on its own.** GitHub Pages does not persist response data. Live responses require a configured Qualtrics iframe and bridge; confirmation of receipt at the iframe does not constitute Qualtrics server submission.

## Essential prelaunch tests

Import the corresponding QSF *as a new survey*, confirm each of four counterbalance cells, inspect actual SPSS/CSV export columns, and verify positive completion, wrong-profile rejection, and consent-decline screenout in Qualtrics. Set the new Prolific completion URL (never reuse previous study's code). Verify investigator contact/ethics approval and do not recruit until the integration is validated.

### Analysis caution

Identical arithmetic deviations are **not evidence of perceived product equivalence**. Pretest fit, desirability, and baseline choice; prespecify equivalence margins and adequately power a separate confirmatory validation sample.
