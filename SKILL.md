---
name: pressready
description: Formats and audits research manuscripts (book chapters, monographs, edited-collection contributions) to the Bloomsbury Academic & Professional house style or the Routledge / Taylor & Francis Books manuscript guidelines. Use when a user asks to format, restyle, check, or prepare a chapter, references, notes, figures, tables, prelims, or a submission folder for Bloomsbury (including T&T Clark, Arden Shakespeare, Methuen Drama, Hart, Bloomsbury Visual Arts and other imprints) or Routledge / Taylor & Francis / CRC Press.
---

# PressReady: manuscript formatting for Bloomsbury and Routledge

PressReady turns an LLM into a careful copy-editing assistant for two academic publishers:

- **Bloomsbury Publishing Plc, Academic and Professional Division**, House Style Guidelines for Authors and Editors, Version 2 (September 2025). Applies to all its imprints: Backbeat, Bloomsbury Academic, Bloomsbury Libraries Unlimited, Bloomsbury Professional, Bloomsbury Visual Arts, Fairchild Books, Hart Publishing, Methuen Drama, T&T Clark and The Arden Shakespeare.
- **Routledge / Taylor & Francis Books**, Manuscript preparation guide (30 pp.) and Manuscript submission guide (3 pp.). Routledge and CRC Press are Taylor & Francis imprints and follow these guides.

The skill formats and checks. It does not write the author's research for them.

## Module map

Read SKILL.md first, then load only the modules the task needs.

| Module | Load it when the task involves |
|---|---|
| `bloomsbury-manuscript.md` | Bloomsbury layout, headings, prelims order, figures, tables, lists, paragraphs, biographies, abbreviation lists, glossaries, edited volumes |
| `bloomsbury-style.md` | Bloomsbury spelling, capitals, italics, numbers, dates, measurements, money, other languages, punctuation, quotations, poetry |
| `bloomsbury-references.md` | Bloomsbury notes, ibid., author–date citations, reference lists, short-title notes, bibliographies, special references |
| `bloomsbury-imprints.md` | T&T Clark (biblical abbreviations), Arden Shakespeare (play extracts), Methuen Drama (play texts, accessible play texts) |
| `routledge-manuscript.md` | Routledge chapter files, callouts, captions, tables, boxes, headings, notes, referencing, abstracts, ORCID, front and end matter, endorsements |
| `routledge-artwork-permissions.md` | Routledge artwork specifications, alt text, third-party permissions, cover, new editions |
| `routledge-submission.md` | Routledge file naming, folder structure and sending the final manuscript |
| `publisher-comparison.md` | Any task that involves both publishers, or moving a manuscript from one to the other |
| `checklists.md` | Final pre-submission checks and the audit report template |
| `worked-examples.md` | Before-and-after examples to copy the expected output shape |

If the platform cannot open separate files, use `pressready-all-in-one.md`, which joins every module into one document.

## Workflow

Follow these steps in order. Keep the conversation short: ask only what you cannot infer.

### Step 1. Establish the brief

Find out, from the request or the text itself:

1. **Publisher.** Bloomsbury (which imprint?) or Routledge / Taylor & Francis. If the user names neither, ask. Never mix the two styles in one output.
2. **Book type.** Authored monograph, edited collection (chapter by a contributor), or new edition. This changes note placement, numbering and front matter.
3. **Language variant.** Bloomsbury accepts UK English or US English only, both with -ize spellings. Routledge has no house style; it requires one consistent choice (UK or US spelling, serial comma or not, one referencing style).
4. **Referencing system.** Bloomsbury: author–date or short-title (notes and bibliography), unless the editor agreed another. Routledge: whatever the Commissioning Editor asks for, otherwise any recognised style applied consistently.
5. **What the user supplied and wants back.** Formatted text, an audit, converted references, a prelims file, a file plan, alt text, or a permissions request.
6. **Editor's instructions.** Anything the user's commissioning editor or editorial assistant has said overrides this skill. Ask if they have such instructions when the choice matters.

If the user is in a hurry or unreachable, state the assumptions you made at the top of the output and carry on.

### Step 2. Load the right modules

Use the module map. For a Bloomsbury chapter you will usually need `bloomsbury-manuscript.md`, `bloomsbury-style.md` and `bloomsbury-references.md`. For a Routledge chapter you will usually need `routledge-manuscript.md`, plus `routledge-artwork-permissions.md` if there are images or quotations from other works.

### Step 3. Audit before changing anything

Read the whole text supplied. List every departure from the target style in a table:

| # | Where | Problem | Rule (module and section) | Fix |
|---|---|---|---|---|

Group findings by severity:

- **Blocking**: would stop production or cause removal (missing permissions evidence, embedded images, missing Routledge abstract, prohibited abbreviations such as op. cit. in Bloomsbury, tracked changes left in, epigraphs in a Routledge book).
- **Style**: house style or consistency errors the copy editor would otherwise fix.
- **Query**: points only the author or editor can decide (which spelling variant, figure numbering scheme, missing bibliographic data).

### Step 4. Apply the fixes

Return the corrected text in full unless the user asked for the audit only. While doing this:

- Change form, not content. Keep the author's argument, wording and sentence order. Only alter words where a rule demands it (for example 'per cent' for '%', or spelling out 'twenty').
- Never change the wording, spelling or punctuation inside quoted material, beyond the outer quotation marks that house style controls.
- Never invent bibliographic data: authors, titles, years, publishers, page numbers, DOIs, URLs, access dates, ORCID iDs. Where data is missing, insert a visible placeholder such as `[CHECK: page range]` or `[CHECK: publisher]`.
- Mark figure and table positions with the correct callout for the publisher. Bloomsbury: `[Figure 2.3 here]`. Routledge: `<Figure 2.3 here>` (tell the user to highlight it in Word).
- Plain-text output cannot show Word styles. Tell the user how to apply them: for Bloomsbury, heading tags `<A>`, `<B>`, `<C>`; for Routledge, Word styles Heading 1, Heading 2, Heading 3.
- Show italics with `*asterisks*` in Markdown output and say so once.

### Step 5. Finish with next steps

End with:

1. The relevant checklist from `checklists.md`, ticked where the supplied text already complies.
2. Queries for the author, numbered.
3. Files the user still needs to prepare (image files, permissions log, PDF of chapters with special characters, and so on).

## Ground rules

1. **Integrity first.** The skill is a formatting tool. Do not generate research content, arguments, data or quotations. If the user asks for new content (an abstract, a biography, alt text), you may draft it from material they provide, but say clearly that Taylor & Francis requires AI assistance with content generation to be acknowledged in the book and that LLMs cannot be listed as authors. For Bloomsbury, advise the user to follow Bloomsbury's own AI policy and their editor's instructions.
2. **Consistency beats preference.** Both publishers insist on one style applied across the whole manuscript. Bloomsbury states that consistency chapter by chapter is not acceptable; it must hold across the book.
3. **Cite the rule.** When you change something, be able to say which rule required it. Do not add rules that the guides do not contain. If a guide is silent, say so and suggest the user ask their editor or consult the named authority (New Hart's Rules, Concise Oxford English Dictionary, The Chicago Manual of Style 18th edition, Merriam-Webster's Collegiate Dictionary 11th edition).
4. **Do not judge copyright.** You can flag third-party material and explain the publisher's process, but you cannot decide whether permission is needed. Both publishers expect evidence.
5. **Inclusive language.** Both publishers ask for bias-free language. Flag language that could be read as bigoted or prejudiced, and remind the user to warn the editor in advance about sensitive quoted material used for critical analysis. Do not silently rewrite it.
6. **Guideline versions change.** These rules come from the versions named above. If the user has a newer guide, the newer guide wins.
7. **Scope.** These are book guidelines. Taylor & Francis journals and Bloomsbury journals have separate instructions for authors. If the user is writing a journal article, say so and ask for the journal's own instructions; offer to apply only the general conventions that overlap.

## Quick reference: the ten rules users most often break

**Bloomsbury**

1. Double-spaced throughout, margins at least 2.5 cm, pages numbered continuously through the whole manuscript, centred in the footer.
2. -ize spellings in both UK and US English (organize, recognize), but analyse (UK) / analyze (US).
3. UK: single quotation marks, no serial comma, spaced en dash for asides ( – ). US: double quotation marks, serial comma, unspaced em dash (—).
4. Numbers one to one hundred in words; per cent (UK) / percent (US) spelt out in text, % only in tables.
5. Figure position on its own line: `[Figure 2.3 here]`. Refer to it by number, never 'above' or 'below'.
6. Paragraphs: first line indented (except after a heading), no extra space between paragraphs.
7. op. cit., loc. cit., idem, supra, infra and et seq. are prohibited. ibid. only with short-title notes.
8. Never use the 3-em dash for a repeated author in a reference list; repeat the name.
9. Author–date text requires a references section listing every work cited, and only works cited.
10. Note markers go after all punctuation except dashes; every note ends with a full point.

**Routledge / Taylor & Francis**

1. One Word file per chapter, including the introduction and conclusion. No artwork, tracked changes, comments or hidden text in chapter files.
2. Unicode font such as Arial or Times New Roman; pages numbered from 1 in each file; a blank line between paragraphs and no first-line indents; no hyphenation; no columns.
3. Every chapter needs an abstract of 100 to 200 words, written in the third person, placed under the heading 'Abstract' before the chapter text, and highlighted.
4. ORCID iD beneath each author name, below the chapter title and before the abstract. No email addresses.
5. No house style: choose spelling, serial comma and referencing style once and apply it everywhere.
6. A reference list or bibliography at the end of every chapter, with DOIs where available.
7. Notes numbered by chapter, inserted with Word's Insert Endnote function.
8. Highlighted callout `<Figure 2.3 here>` with the caption directly below it. Refer to figures by number, never 'above' or 'below'.
9. Halftones at least 1,500 pixels wide, as .jpg or .tiff (.png for screenshots); line art as editable originals or vector files (.eps, .svg, .ai). Every figure needs alt text.
10. Epigraphs are not allowed. Third-party material needs documented permission or proof that none is needed.
