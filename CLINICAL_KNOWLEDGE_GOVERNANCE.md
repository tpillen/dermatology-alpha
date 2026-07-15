# Clinical Knowledge Governance

## Current status
Alpha prototype. The knowledge library is clinician-authored and not yet formally validated.

## Change control
Each clinical content revision should:
1. Update `knowledgeVersion` in `data/clinical-knowledge.js`.
2. Document the changed pathway and rationale in `CHANGELOG.md`.
3. Record the reviewing clinician and review date.
4. Re-run pathway-specific test cases.
5. Confirm that the user interface and exported JSON remain backward compatible.

## Safety boundary
The engine organizes patient-entered information. It does not diagnose, triage, prescribe, or replace independent clinician judgment.
