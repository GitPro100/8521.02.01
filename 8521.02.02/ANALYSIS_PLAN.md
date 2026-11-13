# Study 8521.02.02 — Diagnostic Analysis Plan

**Pretest objective.** Determine whether Version A (conservative nutritional trade-off) is a viable stimulus configuration, preserving objective-fit equivalence while reducing systematic preferences for Profile X.

## Sample and assignment

Recruit approximately **40–50 new valid participants**, using one of four equally weighted randomization cells (about 10–13 participants/cell). No participant should enter both Study 8521.02.01 and Study 8521.02.02; apply exclusion on Prolific as feasible. This sample is for **diagnostic calibration**, not definitive equivalence certification.

## Variables

- `choice_X` (binary; 1 when Profile X is chosen).
- `desirability_X`, `desirability_Y` and `desirability_X_minus_Y` (1–7).
- `fit_X`, `fit_Y`, and `fit_X_minus_Y` (1–7).
- `configuration_id`, `profile_A`, `A_position`, `stimulus_version`.

## Analyses

1. **Descriptives:** choice_X n/N and exact 95% CI; unadjusted binomial p-value vs 50% may be reported as a diagnostic but not as proof of equivalence. Report all four cells' counts and completion/attrition.
2. **Within-person differences:** paired means, SDs and 95% CIs for X minus Y on perceived objective fit and overall desirability; run two one-sided tests (TOST) for equivalence with a *provisionally prespecified* ±0.50-point bound (90% CI entirely inside [-0.50,+0.50] at alpha=.05).
3. **Behavioral balance:** 45–55% X choice is a desirable calibration point estimate, not an equivalence test. For independent validation, a formal example criterion is 90% CI for X choice entirely within [0.40,0.60], assuming that margin is theoretically justified and the sample adequately powered.
4. **Counterbalancing:** report X choice by profile-to-A mapping and physical position (four cells), and exploratory regression of choice_X on profile_A_is_X and A_position_left; with small cell counts, prefer descriptive effect sizes or exact approaches and avoid overinterpreting p-values.
5. **Exploratory choice drivers:** describe relationships between profile choice and X–Y ratings without interpreting correlations causally.

## Decision rule

Prefer a candidate with objective-fit equivalence, smaller desirability bias, X choice nearer 50%, and no obvious counterbalance artifacts. **Do not** interpret a nonsignificant binomial test or nonsignificant paired t test as equivalence. Freeze the selected profile before an independent confirmatory validation sample sized for the intended margins.

## Statistical reference

Lakens, D. (2017). Equivalence tests: A practical primer for t tests, correlations, and meta-analyses. *Social Psychological and Personality Science, 8*(4), 355–362. https://doi.org/10.1177/1948550617697177
