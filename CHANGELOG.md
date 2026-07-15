# DermKnowledge Alpha 0.8 — Progressive Complaint Workflow

## Changed
- Removed redundant free-text prompts asking the patient to restate the concern.
- Complaint type, adaptive questions, location, duration, and comments now define the concern.
- Renamed the comment field to “Describe additional symptoms/concerns.”

## Added
- Complaint #1 is shown initially.
- Complaint #2 opens only when the patient reports another concern.
- Complaint #3 opens only when the patient reports one more concern.
- The patient is advised that the workflow addresses no more than three prioritized concerns.
- Hidden complaint modules are excluded from the provider summary and JSON.

## Preserved
- Clinical Knowledge Engine.
- Disclosure workflow.
- Provider Workspace.
- JSON export.
- Voice entry.
- Transparent prototype attention flags.
