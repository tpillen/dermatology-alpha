# DermKnowledge Alpha 1.0.1 — Readable Longitudinal Visit Notes

## Changed
- Longitudinal records display a readable clinical visit note first.
- Raw JSON is retained in a separate collapsed technical section.

## Added
- Provider Workspace stores the generated clinic note with each newly saved encounter.
- Older encounters without a stored note are converted into a readable note dynamically.
- Improved mobile readability.

## Safety
Synthetic testing only. Browser localStorage remains unsuitable for real patient information.
