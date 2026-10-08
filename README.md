# BYUI FTC Engineering Handbook Presentation

This repository contains a draft web presentation for introducing the BYUI FTC Engineering Handbook to the engineering team.

## Quick start

From the repository root, run:

```bash
python3 -m http.server 5500
```

Then open `http://localhost:5500/` in a browser. You may also use VS Code with the Live Server extension.

## Navigation

- Scroll through the presentation.
- Use the navigation dots on the right side.
- Use the arrow keys, Page Up, Page Down, Home, and End keys.

## Presentation content

This draft introduces:

- Project consultation and approval.
- Owner, Author, Reviewer, and Tester roles.
- Standard GitHub repository structure.
- Pull Requests, protected branches, and local Git hooks.
- Conventional Commits and Semantic Versioning.
- Hosting and deployment expectations.
- Google Apps Script source control and deployment practices.
- Documentation and continuity when a team member leaves.

## Editing the presentation

The content is in `js/app.js`. Each slide is a `<Section>` component. Add, remove, or reorder sections there.

Reusable components are in `js/components.js`, and the visual system is in `css/styles.css`.

Image areas intentionally use placeholders. Add approved screenshots or diagrams to `assets/` or `pictures/` and reference them from `js/app.js`.

After editing JavaScript, perform a hard refresh if the browser is showing cached content. Update the `?v=` value in `index.html` if needed.

## Documentation

- `docs/presentation-notes.md` contains suggested speaker notes.
- `docs/placeholder-assets.md` lists visual assets that may be added later.

## Draft status

This is a presentation draft for team discussion. It is not a replacement for the official handbook. Update the content after the team reviews and approves the proposed standards.
