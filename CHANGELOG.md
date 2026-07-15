# DermKnowledge Alpha 0.6 — Clinical Knowledge Engine

## Architectural change
Clinical knowledge is now separated from the intake user interface.

## New file
- `data/clinical-knowledge.js`

## Added
- Versioned clinical knowledge engine metadata.
- Centralized pathway order and labels.
- Centralized question definitions.
- Module title and clinical-purpose statement for every complaint pathway.
- Knowledge-engine metadata in structured JSON.
- Knowledge-module provenance in each complaint record.
- Provider summary identifies the clinical knowledge module used.
- Explicit safety boundary embedded in the engine metadata.

## Preserved
- Disclosure acknowledgment workflow.
- Direct intake-route protection.
- Three prioritized complaints.
- Adaptive questions.
- Transparent prototype attention flags.
- Voice entry.
- Provider summary.
- JSON download.
- Print / Save as PDF.

## Validation status
Prototype only. Clinical pathways and rules require formal expert review, testing, and governance before clinical deployment.
