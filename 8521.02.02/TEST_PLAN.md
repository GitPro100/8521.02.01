# Study 8521.02.02 — Prelaunch Test Plan

- [ ] Verify researcher preview loads the study ID `8521.02.02`, app v1.0.0 and stimulus version `A_conservative`.
- [ ] Verify every display shows X=(5.4,10.3,34.3), Y=(8.6,11.7,25.7), depending on label mapping.
- [ ] Test each of the four assignment cells: T_X_L, T_X_R, T_Y_L and T_Y_R; confirm actual left/right presentation and A/B-to-X/Y mapping.
- [ ] Ensure the stated targets remain fat 7 g, protein 11 g, carbohydrate 30 g; equal-price and equal-serving text unchanged.
- [ ] Ensure no AI recommendation, sponsorship disclosure or researcher-only notes appear in Participant Mode.
- [ ] Ensure consent, choice, fit ratings, desirability ratings and demographics are required; age 18–80.
- [ ] Check researcher Back, Jump, Restart, Export JSON and Export CSV.
- [ ] Ensure restarting/switching preview assignments clears all prior choice and rating values.
- [ ] Verify live URL requires HTTPS host_origin, a participant ID and one valid four-cell assignment.
- [ ] Verify mobile/tablet blocked, where browser user-agent identification is effective.
- [ ] Test live Qualtrics iframe handoff, ACK, submission, and persisted response on Qualtrics export.
- [ ] Confirm handoff message types use `8521_0202_` only, and old app data/localStorage cannot contaminate the new study.
- [ ] Test a failed/unresponsive bridge and ensure the participant receives an actionable error and retry path.
- [ ] Audit consent decline and any Prolific screenout routing separately against the approved Qualtrics flow.
- [ ] Freeze exact stimulus values, app source and analysis rule before launching recruitment.

**Completion is not confirmed until an actual saved Qualtrics response has been exported and inspected.**
