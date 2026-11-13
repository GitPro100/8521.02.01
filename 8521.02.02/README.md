# Study 8521.02.02 — Product Equivalence Recalibration (Version A)

**Study status:** App implemented; not yet launched or validated with new participants.  
**Date:** 2026-11-13  
**Source:** Study 8521.02.01 app v1.3.1  
**Current app:** Study 8521.02.02 v1.0.0  
**Stimulus:** A_conservative

## Purpose

Assess whether recalibrated, objectively equivalent energy-bar profiles yield similar baseline product choice and perceived objective fit/desirability **in the absence of AI recommendations**. This is a new study and must not be pooled indiscriminately with Study 8521.02.01.

## Stimuli

Targets: 7.0 g total fat; 11.0 g protein; 30.0 g carbohydrates. Above/below target deviations count equally, and attributes are presented as equally important. Equal price and serving size are stated; numeric price and serving size are not displayed.

| Profile | Total fat (g) | Protein (g) | Carbohydrates (g) | kcal calculated (9/4/4) | Total absolute deviation | MAD |
|---|---:|---:|---:|---:|---:|---:|
| X | 5.4 | 10.3 | 34.3 | 227 | 6.60 | 2.20 |
| Y | 8.6 | 11.7 | 25.7 | 227 | 6.60 | 2.20 |

These attributes are **theoretically motivated candidates**, not empirically demonstrated to be perceived as equivalent.

## Counterbalancing (4 cells)

| assignment | Energy Bar A | Energy Bar B | Bar A physical position |
|---|---|---|---|
| T_X_L | Profile X | Profile Y | left |
| T_X_R | Profile X | Profile Y | right |
| T_Y_L | Profile Y | Profile X | left |
| T_Y_R | Profile Y | Profile X | right |

For **live** use, the survey host (Qualtrics) must create and persist `assignment` (1 of 4 cells, 25% each) *before* loading the iframe. The app intentionally does not re-randomize live participants.

## Files

- `index.html` — complete stand-alone single-file app.
- `implementation.json` — full protocol/specification embedded in the app.
- `qualtrics-question.html` — Qualtrics question HTML container.
- `qualtrics-bridge.js` — Qualtrics question JavaScript bridge for this study ID and postMessage namespace.
- `ANALYSIS_PLAN.md` — diagnostic and confirmatory analysis guidance.
- `TEST_PLAN.md` — prelaunch verification checklist.

## Researcher preview

To inspect every counterbalance condition without submitting data, save `index.html` locally and open in a desktop browser; or open the hosted app with `?preview=1`. Researcher Preview offers back navigation, configuration selection, screen jumping, and JSON/CSV export. Preview produces **test data only**.

Intended hosted path if GitHub Pages publishes from `main` root: `https://gitpro100.github.io/8521.02.01/8521.02.02/`.

## Live URL contract

`?live=1&pid=PARTICIPANT_ID&assignment=T_X_L&parent_origin=https%3A%2F%2Fsurvey-host.example`

Parameters: `pid` (or `PROLIFIC_PID`), `assignment` (one of 4 cells), and HTTPS `parent_origin` are required for live operation. The host origin is checked for event handoff. Live data are not stored by GitHub Pages. **Data are saved only after the Qualtrics survey is actually submitted**; the app's ACK does not certify server-side persistence.

### Qualtrics setup

1. Duplicate the existing pretest survey as a **new** Qualtrics survey; do not edit an active Study 8521.02.01 survey.
2. In Survey Flow, create `PROLIFIC_PID`, `assignment`, and all output fields as Embedded Data **before** the app question block. Set `assignment` via four equally weighted randomizer branches with the values above and maintain that assignment for the whole response.
3. Create a Descriptive Text question containing `qualtrics-question.html`. In the question's JavaScript editor, paste `qualtrics-bridge.js` (without enclosing `<script>` tags).
4. Confirm that the next block is the survey's correctly configured End-of-Survey path. Configure Prolific completion/screenout codes in Qualtrics, **not** in the app.
5. Check institutional consent/contact details and the withdrawal/screenout route against the approved protocol. The original approved consent text is retained, including its contact-channel wording; the HTML itself does not display an investigator email.
6. Run all four assignments end-to-end, export actual Qualtrics responses, and verify the raw values and persisted study identifier before recruiting participants.

## Data separation and caution

- New `study_id`: `8521.02.02`; new browser storage namespace: `8521.02.02.v1.0.`; new postMessage namespace: `8521_0202_`.
- Additional audit fields: `stimulus_version`, `source_study_id`, full X/Y profile values, and the computed metric.
- Participant interface intentionally hides study/researcher metadata.
- Recalibration is an **exploratory** diagnostic step; new data are needed before claiming equivalence or deploying in the parent study.

Source application and study configuration are preserved separately at `../index.html` for Study 8521.02.01. No AI recommendation, sponsorship disclosure, or representational mandate is presented in this pretest.
