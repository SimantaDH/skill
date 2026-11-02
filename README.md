# PressReady

**A modular LLM skill for formatting research manuscripts to the Bloomsbury and Routledge (Taylor & Francis) house styles.**

Simanta Nandi, MA Digital Humanities and Social Sciences, Indian Institute of Technology (Indian School of Mines) Dhanbad
Project supervision: Shanmugapriya T and Sourav Ghosh
Version 1.0, 3 November 2026
Project website: https://simantadh.github.io/skill/

## What it does

PressReady teaches a large language model to audit and format book chapters, monographs and edited-collection contributions according to:

- Bloomsbury Publishing Plc, Academic and Professional Division, *House Style Guidelines for Authors and Editors*, Version 2 (September 2025), including the T&T Clark, Arden Shakespeare and Methuen Drama appendices;
- Taylor & Francis Books (Routledge, CRC Press), *Manuscript preparation guide* and *Manuscript submission guide*.

It changes form, not content. It never invents references, page numbers, DOIs or ORCID iDs; missing data is marked `[CHECK: ...]`.

## Files

| File | Purpose |
|---|---|
| `SKILL.md` | Entry point: workflow, ground rules, module map, quick reference |
| `bloomsbury-manuscript.md` | Bloomsbury layout, prelims, figures, tables, biographies |
| `bloomsbury-style.md` | Bloomsbury spelling, numbers, dates, punctuation, quotations |
| `bloomsbury-references.md` | Bloomsbury notes, author–date and short-title referencing |
| `bloomsbury-imprints.md` | T&T Clark, Arden Shakespeare and Methuen Drama rules |
| `routledge-manuscript.md` | Routledge chapter files, callouts, abstracts, ORCID, prelims |
| `routledge-artwork-permissions.md` | Routledge artwork, alt text, permissions, new editions |
| `routledge-submission.md` | Routledge file naming and submission |
| `publisher-comparison.md` | Thirty-point comparison and conversion steps |
| `checklists.md` | Pre-submission checklists and audit report template |
| `worked-examples.md` | Before-and-after examples |
| `pressready-all-in-one.md` | Every module in one file, for assistants that take a single file |
| `pressready-skill.zip` | Ready-to-upload skill package (folder `pressready/` with all modules) |
| `index.html`, `style.css`, `script.js`, `simanta-nandi.jpg`, `favicon.svg`, `.nojekyll` | Project website (GitHub Pages) |

## Using the skill

- **Claude**: upload `pressready-skill.zip` in the Skills area of your settings. In Claude Code, copy the `pressready` folder from the zip into `~/.claude/skills/`.
- **ChatGPT (custom GPT) or Gemini (Gem)**: paste the body of `SKILL.md` into the instructions, then add the other `.md` files as knowledge files.
- **Any other assistant**: attach or paste `pressready-all-in-one.md` at the start of the conversation.

Then ask, for example: *"Format this chapter for Bloomsbury, UK English, author–date references"* or *"Audit this chapter for Routledge and list the blocking issues."*

## Hosting the website on GitHub Pages

All files sit at the top level of the repository. In the repository's **Settings > Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`. Keep the empty `.nojekyll` file so the Markdown skill files are served as they are.

## Limitations

These are book guidelines, not journal instructions. Publishers revise their guides, and the commissioning editor's instructions always take priority. LLM output must be checked by the author. See the project website for the full discussion.

## Citation

Nandi, S. (2026). *PressReady: A modular LLM skill for formatting research manuscripts to Bloomsbury and Routledge house styles* (Version 1.0) [Computer software]. GitHub. https://github.com/SimantaDH/skill

See `CITATION.cff` or the website for other formats.

## Licence

Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0). See `LICENSE`.

The publisher guidelines summarised here remain the property of Bloomsbury Publishing Plc and Taylor & Francis Group. This project is independent and is not endorsed by either publisher.

## Contact

25ma0013@iitism.ac.in · https://about.me/simantanandi
