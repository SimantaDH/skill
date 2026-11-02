# PressReady (all-in-one edition)

This single file joins SKILL.md and all ten modules of PressReady v1.0 (Simanta Nandi, 2026, CC BY-NC 4.0, https://github.com/SimantaDH/skill). Use it with assistants that accept only one file or a pasted prompt. Wherever SKILL.md tells you to load a module, read the section of this file with that module's name.

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

---

<!-- module: bloomsbury-manuscript.md -->

# Module B1: Bloomsbury manuscript preparation and structure

Source: Bloomsbury Publishing Plc, Academic and Professional Division, *House Style Guidelines for Authors and Editors*, Version 2 (September 2025), pp. 1–9. Applies to every Bloomsbury A&P imprint. Imprint-specific rules are in `bloomsbury-imprints.md`.

The guide is written in UK English. For a US English title, adapt quotation marks and punctuation as shown in `bloomsbury-style.md`.

## Page layout

- Format the entire manuscript at least double-spaced, including notes and bibliography.
- Leave margins of at least 2.5 cm (1 in.) at left, right, top and bottom.
- Number pages for the whole manuscript, centred in the footer, from the first page of text to the end. Do not restart numbering for each chapter. This applies to multi-author works too.
- Show italics by italicizing. Underlining is not needed.

## Cross-references

- Avoid cross-references in the text as a rule.
- Where one is needed, refer by chapter and subheading, not by page, because pagination changes and ebooks have no fixed pages. Example (UK quotation style): See Chapter 6, 'Challenges and Limitations'.

## Headings

- Differentiate headings by level so their order of importance is clear: chapter headings, subheadings, sub-subheadings.
- Keep each level consistent across the book.
- Mark levels with tags to avoid confusion: `<A>` for the first subheading level, `<B>` for the next, `<C>` for the next.
- Use a minimum of capital letters in chapter headings and subheadings (proper nouns keep their capitals). See `bloomsbury-style.md`, Capitalization.

## Images

- Do not embed images in the manuscript file; they cannot then be checked for resolution and quality.
- Supply images as .tif or high-resolution .jpg files.
- Minimum resolution at a size appropriate to the book's dimensions (aim for at least half a page): halftone and colour images 300 dpi at print size; line diagrams and maps 600 dpi at print size.
- To check a file: required pixel width = intended printed width in inches × dpi. A 4 in. wide halftone needs at least 1,200 px; a 4 in. wide map needs at least 2,400 px. If the book's dimensions are unknown, the author should ask the editor.
- Crop images to remove extraneous detail. Remove watermarks, colour bars and similar.
- Tell the editor about any changes needed (for example cropping) at handover, so production can be briefed.

## Language

- Bloomsbury titles use either UK English or US English. Both follow -ize spellings.
- Variant forms (Australian, Canadian and so on) are not acceptable. The copy editor will amend them.
- Submit the manuscript in the chosen variant throughout. Queries go to the editor.
- Reference works: UK English: *Concise Oxford English Dictionary* and *New Hart's Rules*, 2nd ed. (Oxford UP, 2014). US English: *Merriam-Webster's Collegiate Dictionary*, 11th ed., and *The Chicago Manual of Style*, 18th ed. (Chicago UP, 2024).
- Bloomsbury authors can ask their editor for free access to *Cite Them Right* online (Chicago, Harvard, APA, IEEE, MLA and other styles).

## Preliminary pages (prelims)

- Include a set of prelims at the start of the manuscript on delivery.
- Number prelim pages with Roman numerals.
- If a page has no content yet (for example the imprint/copyright page), still insert a correctly numbered page with its heading, such as 'Imprint page'.
- Order of prelims:
  1. Half-title
  2. Series page (where applicable)
  3. Frontispiece (where applicable)
  4. Title page
  5. Imprint/copyright page
  6. Dedication (where applicable)
  7. Epigraph (where applicable; permission must be obtained, as epigraphs are not covered by fair use)
  8. (Table of) Contents
  9. (Lists of) Plates, Figures, Maps and Tables, in that order, each on a fresh page (where applicable)
  10. (List of) Contributors (where applicable; for US English titles this appears in the endmatter instead)
  11. Foreword, written by someone other than the author (where applicable)
  12. Preface, written by the author (where applicable)
  13. Acknowledgements (where applicable)
  14. Note on Text/Translation and similar (where applicable)
  15. Conversion Tables for imperial measures, currency and so on (where applicable)
  16. (List of) Abbreviations (where applicable)
  17. Chronology (where applicable)
  18. General Map(s) relevant to the whole book (where applicable)
- The table of contents must not list any element that appears before it.
- On the contents page, lists are called List of Illustrations, List of Abbreviations and so on. Their own page headings are simply Illustrations, Abbreviations and so on.

## Half-title and title page

- Half-title page: main title only.
- Title page: full title, subtitle, edition number (where relevant) and author or editor names.
- Use 'and', not an ampersand, in titles and name lists. Use or omit the serial comma to match the style of the book.

## Special characters

- Talk to the editor before submission about special characters: mathematical symbols, musical notation, foreign-language characters including diacritics.
- Use a Unicode font for any special characters.
- Where special characters are used extensively, supply a PDF of each chapter so the characters can be checked at proof stage.

## Belonging and inclusion

- Consider diversity in the choice of contributors, texts, references, images and case studies.
- Use bias-free language. Bloomsbury points authors to the APA Inclusive Language Guide and the C4DISC Guidelines on Inclusive Language and Images in Scholarly Communication.
- Watch for material that may be sensitive or offensive (sexually explicit or violent, racist, ableist, ageist, colonialist, genderist) or that discusses legally protected characteristics.
- If the work quotes or engages with such material for critical study, inform the editor before submission so it can be appraised before acceptance. Content that could be considered bigoted, prejudiced or triggering may be challenged and, if necessary, recommended for removal.

## Figures in the text

- Supply figures as individual image files.
- Show each figure's position on a new line, after the paragraph in which it is discussed or between the paragraphs closest to where it should appear: `[Figure 2.3 here]`.
- The typesetter cannot always place images exactly, so refer to figures by number, never as 'the image above' or 'the following image'.
- Numbering, authored titles: usually sequential through the book (Figure 1, 2, 3), or double-numbered by chapter (1.1, 1.2, 2.1) if preferred. Agree this with the editor.
- Numbering, multi-contributor works: always double-number by chapter.

## Captions and credits

- In-text captions usually include full source information: title, year of production or publication, and so on.
- Credit information for images, video and sound follows the caption, preceded by a full point. Use the wording agreed with the permission holder.
- Example: Figure 1.1. Winston Churchill in his study at Chartwell, c. 1934. Courtesy Hulton Getty Images.
- Credit lines may go in the List of Illustrations or the Acknowledgements instead, but only if the permission agreement allows it. Check with the editor.

## Lists

- Number or bullet lists of points.
- Indent lists, with a space above and below.

## Paragraphs

- Indent the first line of each new paragraph consistently.
- Exceptions, set flush left: the first paragraph after a heading; a paragraph that continues the sense of the text after an extract.
- Do not add extra space between paragraphs.
- Avoid too many short paragraphs; they break the flow.

## Tables

- Build tables with Word's Table tool (rows and columns), never with tabs or spaces.
- Type tables with the text where they belong. If on separate sheets, mark the position immediately after the paragraph in which the table is discussed: `[Table 2.3 here]`.
- Refer to tables by number, never 'the table above' or 'the following table'.
- Explanatory notes go beneath the table, marked a, b, c, not as footnotes or endnotes.
- Numbering follows the figure rules: sequential or double-numbered for authored titles; double-numbered by chapter for multi-contributor works.
- Table captions use title case and have no full point at the end. Example: Table 1. Table of Job Divisions and Staffing
- The source goes beneath the notes, introduced by 'Source:' and formatted to match the book's citation style. Short-title style: Source: F. Sayer, *Public History* (Bloomsbury, 2015). Author–date style: Source: Sayer (2015).

## Volume editors (edited collections)

- Check that every contributor uses the same reference system and the same style throughout. Consistency chapter by chapter is not acceptable.
- Make sure chapter headings in the table of contents match the headings in the chapters exactly.
- Give contributors artwork guidelines so artwork is standardized, or arrange for all artwork to be produced together.
- Include a 'Notes on Contributors' section with a few lines on each contributor: current position, main field of research, major publications to date.

## Author biographies

Applies to the List of Contributors and to an About the Author section.

- Name in bold; current position(s) in the first sentence.
- Capitalize job titles, except when referring to a non-specific role.
  - Charlie Whitham is Senior Lecturer in American History at Edge Hill University, UK.
  - Kristina Milnor is a professor in the Department of Classics and Ancient Studies at Barnard College, USA.
- Deceased authors: past tense, last professional position. David Hey was Emeritus Professor of Local and Family History at the University of Sheffield, UK.
- Later sentences: recent or notable publications; List of Contributors entries may add current research interests.
- Maximum 100 words.
- Give only the year for publications, not place or publisher. Example: Her most recent book is *Graffiti and the Literary Landscape in Roman Pompeii* (2013).

## List of abbreviations

- In the text, give the full term first with the abbreviation in parentheses after it, on first use.
- If many abbreviations are used, or a few very often, add a List of Abbreviations to the prelims.
- Two columns: abbreviation on the left, full term on the right.
- Alphabetize by the abbreviation, not the full term.

## Glossary

- Use a glossary where the book has many important or unfamiliar terms.
- Still explain terms at first appearance in the text (bold is allowed there). Definitions in the text and the glossary must agree.
- Two columns: headword in bold on the left, definition on the right; sorted alphabetically by headword.
- Do not capitalize headwords unless the term is a proper noun or normally capitalized.

---

<!-- module: bloomsbury-style.md -->

# Module B2: Bloomsbury style for copy (spelling, numbers, punctuation)

Source: Bloomsbury A&P *House Style Guidelines*, Version 2 (September 2025), pp. 7, 10–19. Where UK and US English differ, both are given. Default to the variant the user has chosen; never mix them.

## Preferred spellings (Bloomsbury style sheet)

The copy editor builds a title-specific style sheet, but these forms apply unless the editor says otherwise:

- analyse (UK) / analyze (US)
- antisemitism
- a priori
- Art Deco; Art Nouveau
- Black (ethnic, cultural, social sense, capitalized); white (lowercase)
- British Empire; Roman Empire
- Cold War (proper noun)
- COVID-19
- the Depression
- ebook; email; internet
- e.g. (UK) / e.g., (US); i.e. (UK) / i.e., (US)
- et al.; ibid.; per se; qua; sic
- fin de siècle; prêt-à-porter
- First World War; Second World War
- focused, focusing
- Global South; global majority; Western Europe
- Impressionist (art); Modernism
- judgement (UK) / judgment (US)
- lifestyle; mainstream (adjective); multicultural; role-play; self-esteem; T-shirt
- medieval; Middle Ages
- middle class (noun, and predicative adjective) / middle-class (attributive adjective)
- Muslim
- per cent (UK) / percent (US)
- Romania; Royal Navy; US Army; United States Navy
- United States (noun), US (adjective); UK (noun)

## Spelling

- Both UK and US house styles use -ize spellings: organize, organization, recognize, specialize.
- Applying this needs care. Words that the dictionaries spell only with -ise (advertise, advise, comprise, compromise, devise, exercise, franchise, improvise, revise, supervise, surprise, televise) keep -ise, and analyse stays -yse in UK English (style sheet above). This note is drawn from the Oxford and Merriam-Webster spellings the guide tells authors to follow, not from the guide's own text.
- Follow the *Oxford English Dictionary* (UK) or *Merriam-Webster's* (US) consistently.
- Do not change spellings inside quotations or in the titles of books and articles.

## Abbreviations and contractions

| UK English | US English |
|---|---|
| No full point after contractions (first and last letter of the word present): Mr; Mrs; Dr; St; Ltd; PhD; mm; edn; eds; vols. But ed. (editor, edited by) keeps its point. | Following Chicago, keep the period after contractions where the last letter is lowercase: Mr., Mrs., Dr., St., Ltd., ed. (editor, edited by, edition), eds., vol., vols. |
| Lowercase initials forming abbreviations always take full points: n. (note); p. (page); in. (inch); vol. (volume); e.g.; i.e.; etc.; et al. | Some other abbreviations keep the period, including empirical measures: mi., in., lb., ft. |

Both variants:

- No full points in sets of upper-case initials: UN; USA; NATO; UK; EEC; NY (state).
- Plurals of abbreviations take no apostrophe: NCOs.
- Acronyms are always upper case.
- Spell out less familiar, subject-specific abbreviations at first mention, with the abbreviation in parentheses. Familiar ones can be used throughout.

## Capitalization

- Use a minimum of capitals throughout, including chapter headings, subheadings, figure captions and labels. Proper nouns are always capitalized.
- Capitalize 'the' only when it is part of the name: the Netherlands; the *Guardian*; but *The Spirit of St Louis*.
- Brand names take capitals (Thermos, Vaseline, Spitfire). Check unusual forms (InDesign).
- Geography: capitalize North, South, East, West when part of a political division (Southwest Africa, Western Europe, the West, Global South). Otherwise lowercase (south of Scotland, southern Scotland, western winds). sun, moon and earth are lowercase.
- Institutions: capital when specific or a proper noun, lowercase when generic. The state; the church (institution); the Roman Catholic Church; the Church of England; Parliament; the Houses of Parliament; but parliamentary behaviour, parliamentarians.
- Politics: parties take capitals; concepts do not (communism, fascism, capitalism, social democracy, socialism). Distinguish Liberal (party) from liberal (general sense), Radical from radical. The Conservative Party, but the party; the Labour government, the government; the Left of the party, left-wing politics; the Ministry of Defence.
- Titles: capital when used as or in a proper noun, otherwise lowercase. President Obama; Barack Obama, the president; King Abdullah II; the king of Jordan; Member of Parliament (UK); the foreign secretary; Pope Benedict XVI; the pope.

## Italics

Use italics for:

1. Titles of published books (but not the Koran, the Bible or books of the Bible); periodicals; long poems; plays; films; operas and oratorios; video games; paintings, drawings, photographs, statues and other works of art (original or translated); short-term exhibitions and exhibition catalogue titles; album titles; television and radio programmes.
2. Names of ships, but not the prefix: HMS *Valiant*; SS *Oriana*.
3. Non-English words or phrases in an English sentence (foreign quotations are roman in quotation marks).
4. Letters referred to as letters: 'the letter *t*'.
5. *passim*, *c.* (circa) and *sic*.

Do not italicize:

- titles of articles, chapters, short stories, poems and songs (roman, in quotation marks);
- individual episodes of television and radio programmes (roman, in quotation marks);
- software packages; artworks from antiquity;
- world's fairs and other large-scale exhibitions (capitalized, roman, no quotes);
- apostrophes, or a possessive 's' after an italicized word: the *Discovery*'s home port;
- e.g.; i.e.; cf.; ibid.; viz.

Use italics for emphasis sparingly. In italic headings, romanize foreign words instead of adding quotation marks.

## Numbers

- Words for one to one hundred; figures from 101 upwards. Large round numbers may be spelt out when not part of a series.
- Sums of currency: '£13 million' is acceptable.
- Two series of quantities in one passage: words for one, figures for the other if clearer. Ten wards held 16 beds each, but nine others contained as many as 40.
- Figures for exact measurements and for series: a stick measuring 2.3 metres; three children, aged 4, 9 and 20, respectively.
- Hyphenate spelt-out compounds: twenty-one, two-thirds. Prefer figures where words would need many hyphens: 62-year-old man, not sixty-two-year-old man.
- Comma in thousands and above: 6,580; 12,000; 100,000. No commas or spaces in dates, page numbers or reference numbers.
- Percentages: always figures, except at the start of a sentence. Spell out per cent (UK) / percent (US) in the text. Use % only in tables.
- Elide number ranges where possible: 21–4, 130–3, 115–19. Numbers 11 to 19 keep the 1: 11–18, not 11–8. Do not elide measurements or Roman numerals. Write 2,000–3,000, not 2–3,000.
- A billion is a thousand million (10⁹), a trillion a million million (10¹²), in both UK and US English. Clarify if a source uses other values.
- Never start a sentence with a numeral. Spell it out or rephrase.

## Dates and time

| UK English | US English |
|---|---|
| 1 May 1975; from 4 August to 10 September 1975 (not 4 August–10 September 1975) | May 1, 1975; from August 4 to September 10, 1975 (not August 4–September 10, 1975) |
| 8.00 am; 10.00–11.15 pm | 8:00 a.m.; 10:00–11:15 p.m. |

Both variants:

- 'from 1924 to 1928', not 'from 1924–8'; 'between 1924 and 1928', not 'between 1924–8'. Elision is fine for periods: the figures for 2001–10.
- Use CE and BCE in most cases, after the year: 30 BCE–25 CE. Where BC and AD are more appropriate: BC follows the year, AD precedes it (AD 47).
- Spell out centuries: in the fifth century. Hyphenate as an adjective: the fourteenth-century prelate. Spell out at the start of a sentence: Twentieth-century philosophical thought posits.
- Noun: the mid-fourteenth century. Adjective: an early-fourteenth-century prelate.
- Elide pairs of dates with an en dash (not a hyphen): 1970–1, 1972–3, 1915–18. Do not elide across centuries (1809–1903), from the first year of a century (2000–2012), or BCE ranges.
- A solidus for a year spanning two calendar years (financial or academic): 1898/9; the years 1895/6 to 1897/8.
- Decades: 1930s, not 1930's or thirties. Colloquial contexts: Thirties.
- Months may be abbreviated in tables and notes, but always as names, never numbers.
- Time spans: six months; eight o'clock; half past eight; a five-minute break; five minutes' start.

## Measurements

- Use metric, unless the official system for the subject is imperial; then give imperial first with the metric equivalent in parentheses. This includes captions and artwork labels.
- Decimal fractions below one take the singular: 0.1 centimetre (UK) / 0.1 centimeter (US); 0.9 kilogram.
- Always use numerals with measurements.
- Spell out units in running text (2 centimetres); abbreviate them in tables, boxes, lists, captions and labels (2 cm).
- Abbreviated units are singular, except hrs, qrs and yds: 2 cm; 5 yds.
- Use SI units: m, kg, s, A, K, cd, mol.

## Money

- In a list: £6.00 and $0.25, not £6 and 25¢.
- Pre-decimal British sums: s. and d. in roman with full points: £3 11s. 4d.; 4s. 11d., not 4/11d.
- Isolated whole sums of ninety-nine or less are spelt out: James needed five dollars for the bus fare home.
- Identify non-US dollars: C$ (Canadian); A$ (Australian); HK$ (Hong Kong).
- For currencies other than dollars, sterling and euros, spell out the name rather than use an unfamiliar symbol: 2 rupees; 15 francs.

## Other languages

- Italicize non-English words not absorbed into English. Add a translation in parentheses, in roman, without quotation marks: *doppelgänger* (double).
- Do not italicize names of institutions, organizations or other proper nouns: Académie Française (French Academy).
- Titles of foreign-language works: italic, in the original language, followed by the English title in parentheses in roman: *l'Étranger* (The Outsider).
- Quotations in other languages: roman type inside quotation marks: 'Au fait, beau T-shirt'.
- Avoid localized terms that may confuse readers, or explain them in parentheses: Jewels and slaves worth five lakh (500,000) rupees were stolen. (Relevant for South Asian authors: explain lakh, crore and similar units.)
- Latin and transliterated ancient languages: single words and phrases italic and lowercase (perfect passive *portati sumus* = we have been carried). Extended extracts (block quotes, translation passages) roman and lowercase, except proper nouns.

## Punctuation

### Apostrophes

- Singular possessive of a name ending in -s with an 's' sound: -s's (Jefferson Davis's home).
- Singular possessive ending in an 'eez' sound: -s' (Euripides' plays; Ramses' tomb). All Classical names take -s'.
- No apostrophe for plurals of capitalized abbreviations (NCOs), decades (the 1960s) or names (the Joneses).
- No apostrophe before phone, bus or flu.

### Colons and semicolons

- A colon introduces an element or series that illustrates or amplifies what precedes it, including a list: The Italian Tricolore features three colours: green, white and red.
- Separate main clauses with different subjects and no conjunction with a semicolon or a full point, not a comma: He was trying to write a book; the ideas would not come.

### Commas

| UK English | US English |
|---|---|
| No serial comma unless needed for clarity: red, white and blue; but fish and chips, steak and chips, or pie and mash. | Serial comma before 'and' in lists of three or more: red, white, and blue. |

Both variants:

- No comma with a parenthetical dash: The 'Howard Project' – originally a speculative venture – crystallized in 1932.
- No comma before an opening parenthesis: He wrote a letter (not the first one) to his solicitor.

### Double punctuation

- Do not double punctuation at the end of a sentence after an abbreviation or a title ending in punctuation: The article was called 'The Potteries, Staffs.' He was the editor of *Which?*
- Exception: punctuation inside parentheses still needs the sentence's own full point: He looked forward to his trip (France, Spain, Malta etc.).

### Ellipses

- Three spaced points with a space before and after: . . .
- Omit ellipses at the start of a quotation. Omit them at the end unless the sentence is deliberately incomplete.
- If the preceding sentence is complete, keep its full point, then the ellipsis.
- Example: Casca said: 'There was more foolery yet . . .'

### Full points

- With parentheses, the full point goes at the end of the sentence. Only when a whole sentence is in parentheses does the full point go inside. He looked pale. (He had been ill.) He looked pale (as one would expect).

### Hyphens and dashes

- Hyphenate attributive compound adjectives where sense could be unclear: little-known detail; well-read individual; much-needed reform; two-day seminar; nineteenth-century history.
- Hyphenate every prefix in a shared construction: short- and long-term consequences.
- Do not hyphenate predicative adjectives: The activity was labour intensive.
- After a hyphen in a capitalized term, use lowercase (Short-term policies), except in title case (Evaluation of Short-Term Interest Rates in the Bond Market).

| UK English | US English |
|---|---|
| Spaced en dash for parenthetical comments: 'Blah – parenthetical comment – blah' | Unspaced em dash: "Blah—parenthetical comment—blah" |

Both variants:

- En dash between two separate but equal components: teacher–student dynamic.
- En dash in place of 'to': London–Glasgow train.

### Parentheses and brackets

- Square brackets for interpolations in quotations and around uncertain data in references (for example a date known but not printed in the book): They [the enemy?] rose like one man.
- Bracketed material does not change the punctuation of the outer sentence and may carry its own punctuation.

| UK English | US English |
|---|---|
| Do not use brackets for parentheses within parentheses; use parentheses or dashes: (not unlike Richard – his son – and Danielle – his daughter) or (not unlike Richard (his son) and Danielle (his daughter)) | Brackets are allowed within parentheses: (not unlike Richard [his son] and Danielle [his daughter]) |

## Quotations

| UK English | US English |
|---|---|
| Single quotation marks; double for a quotation within a quotation: He remarked: 'This charge of "fraudulent conversion" will never stick.' | Double quotation marks; single within: He remarked: "This charge of 'fraudulent conversion' will never stick." |
| The full point goes inside the closing quote only if the quotation is a grammatically complete sentence starting with a capital: He said: 'We must be leaving now.' He told them that a small proportion 'may be available for distribution'. | Periods and commas always go inside the quotation marks: He said: "We must be leaving now." Other punctuation stays outside: The MP was "unimpressed"; however, the process continued. |
| Place other punctuation to avoid misreading: Which of Shakespeare's characters said, 'All the world's a stage'? | Tim knew his three "favorite colors": red, white, and blue. |

Block quotations:

- Quotations of more than sixty words (forty for poetry and plays) are displayed: indented, with a space above and below, and no quotation marks. Inner quotation marks follow the rules above.
- Keep spelling and capitalization consistent with the source.
- The text after a block quotation: not indented if the paragraph continues; indented if a new paragraph starts.

## Poetry and plays

- Quotations under forty words can run into the text. Show line breaks with a spaced solidus ( / ).
- For displayed verse, put the reference in parentheses on the line below the last line, ranged right to align with the longest quoted line.
- Avoid leader dots at the start and end of a quotation. Show an omitted start of a verse line by indenting the line proportionately.
- Arden Shakespeare titles and Methuen Drama play texts have extra rules: see `bloomsbury-imprints.md`.

---

<!-- module: bloomsbury-references.md -->

# Module B3: Bloomsbury notes and references

Source: Bloomsbury A&P *House Style Guidelines*, Version 2 (September 2025), pp. 20–30.

## Choosing a system

- Bloomsbury uses two systems: **author–date** (parenthetical citations plus a references section) and **short-title** (citations in notes, usually with a bibliography).
- Another system is acceptable only if agreed with the editor.
- Whichever system is used, apply it consistently across the whole book. Consistency chapter by chapter is not acceptable; manuscripts submitted that way will be sent back for rework.
- Author–date must always come with a references section listing every source cited. A bibliography or selected bibliography goes with short-title referencing, or where there is no explicit system.
- For anything not covered here, consult *New Hart's Rules*, *The Chicago Manual of Style* or the referencing manual the author prefers, and stay consistent.

## Place of publication

- Place of publication is no longer needed for books; the publisher's name is enough.
- Exception: books published before 1900 give the place only, not the publisher.
- Bloomsbury accepts either approach (with or without place) if it is consistent.
- If place is included, it comes before the publisher, separated by a colon: London: Bloomsbury Academic, 2024.
- If several places are listed, give only the first.
- Use the Anglicized place name: Rome, not Roma.
- For US places, add the abbreviated state: Cambridge, MA.

## Notes

- Superscript note numbers in the text can carry explanatory notes, references, or both.
- Authored books: usually book endnotes. Contributed (multi-author) volumes: chapter endnotes. Footnotes only by agreement with the publisher.
- Place note markers after all punctuation except dashes:
  - The court would not be bound by the usual rules of evidence.¹
  - Daniels has argued that this is contentious;² nonetheless . . .
  - It was – as Smith points out³ – a travesty.
- Number notes consecutively through each chapter: 1, 2, 3. Never 2a, 2b.
- Each marker refers to one note only. To cite the same source twice, use two notes.
- Never put two note markers side by side. Combine them into one note.
- Every note ends with a full point.
- Word's footnote and endnote functions are fine; check the proofs for anything lost in conversion.

## ibid. and other Latin abbreviations

- Prefer citing the work again, because ibid. can hide which source is meant.
- ibid. may only be used with short-title referencing.
- It refers to the work in the immediately preceding note, and only if that note contains a single work.
- It replaces as much of the reference as is repeated (names, title, publication details). If the page is also the same, 'Ibid.' alone is enough.
- It may also be used within one note for successive references to the same work.

```
5. Austen, Pride and Prejudice, 56.
6. Ibid.
7. Ibid., 67.
8. Jane Austen, Sense and Sensibility (Oxford World's Classics, [1814] 2012), 40.
   Colonel Brandon's detached nature becomes clearer later on (ibid., 167).
```

- **Prohibited**: idem / id., et seq., supra, infra, op. cit., loc. cit. Replace each with a short-title citation of the specific work.

## Author–date system

### In-text citations

- Surname, year and page (if needed) in parentheses: the use of tactile cue fading (West 1979: 131–6) was . . .
- If the name is part of the sentence, do not repeat it: initiated by West (1979: 131–6) was . . .
- Two or more works by one author in the same year: 1979a, 1979b. Cited together: 1979a,b.
- Multiple citations: separate with semicolons. (West 1979; Kinnes 1988); (West 1979: 131; Roese 1982: 764).
- Unknown date: n.d.
- Works in press: 'forthcoming', never a future year, and no page numbers: (West, forthcoming).
- Three or more authors: Smith et al. All names appear in the references.
- If two different works shorten to the same 'et al.' form, add a second or third name: Smith, Jones et al. 2025; Smith, Peters et al. 2025.
- Different authors with the same surname: add the initial. (M. Smith 2025); (X. Smith 1964).

### References section

- Lists alphabetically every work cited in the text, and nothing else. Delete references that are not cited.
- A bibliography (which lists only some works) is not acceptable with author–date.
- Extra useful sources go in a separate Further Reading section.
- Use either full first names or initials, consistently. Authors who publish under initials keep their initials even if full names are used elsewhere.
- Check that every in-text citation matches a reference entry.

### Ordering entries by the same author

1. Single-authored works first, in chronological order.
2. Always repeat the author's name. The 3-em dash (———) is not allowed in references or bibliographies because it causes problems in ebooks.
3. Then works by the same author with one co-author, alphabetical by the co-author's surname, then chronological.
4. Then works by the same author with several co-authors, in chronological order (readers look for the date, not the co-authors).

```
Carr, John L. (1965), Teachers in the Classroom, Taylor.
Carr, John L. (1973), The Psychology of Childhood, Taylor.
Carr, John L., and Brian Brown (1965)
Carr, John L., and Charlie Brown (1964)
Carr, John L., and Chris Jones (1971)
Carr, J. L., D. Robinson and C. Jones (1958)
Carr, J. L., B. Brown and D. Robinson (1965)
Carr, J. L., B. Brown and C. Jones (1974)
```

### Reference entry patterns (author–date)

A note on the source: the guide's own examples are not fully uniform. Most follow the pattern `Surname, Initials (Year), Title, Publisher.`, while the Books example uses `Surname, First name. Year. Title. Publisher.` Choose one pattern for the whole book and keep to it. PressReady defaults to the majority pattern below. Titles shown in *italics*.

**Book**

- Include all authors or editors, plus translators, editors of historic texts and edition details where relevant.
- Carr, J. L. (1965), *Teachers in the Classroom*, Taylor.
- Guide's alternative pattern: Althusser, Louis. 1980. *The Stuff of Things*. Translated by J. Smith. Continuum.
- Bullock, Charles S., III, and Mark J. Rozell, eds. 2025. *The New Politics of the Old South: An Introduction to Southern Politics*. 8th ed. Bloomsbury Academic.
- Herodotus. 2013. *The Histories*. Edited by Paul Cartledge. Translated by Tom Holland. Penguin.

**No author**

- Use the full title in the reference list and an abridged title in the text. Never 'Anon.' or 'Anonymous'.
- *O: A Presidential Novel* (2011), Simon and Schuster.

**Chapter in an edited collection**

- Give all editors' names and the chapter's page range. Do not cross-refer to another entry ('in Redmond and Holmes, 93–105'); give full details every time.
- Geraghty, C. (2007), 'Re-examining Stardom: Questions of Texts, Bodies and Performance', in S. Redmond and S. Holmes (eds), *Stardom and Celebrity: A Reader*, 93–105, Sage.

**Journal article**

- Always give volume, issue (in parentheses) and page range. Month or season only if there is no other issue identifier. Special issue titles and editors are not needed.
- Steele, V. (1997), 'Anti-fashion: The 1970s', *Fashion Theory: The Journal of Dress, Body & Culture*, 1 (3): 279–96.

**Magazine or newspaper article**

- Give full title, date and page numbers. Unknown author: begin with the article title (abridged in the text).
- Bidou, H. (1912), 'Introduction', *Gazette du bon ton*, November: 1–4.
- 'Photo Report on the Hungarotex Export Fashion Show' (1966), *This Is Fashion*, June: 4–5.
- Smith, J. (2010), 'England Continue To Struggle', *Daily Mail*, 3 July: 68.

**Online source**

- Format as normal, then add the full URL and, when there is no publication date, the access date.
- No homepages, shortened URLs or QR codes.
- Use URLs sparingly, only where the source would be hard to find otherwise. Formally published books and articles do not need URLs. Check every URL shortly before submission.
- Blogs and online magazines follow their print equivalents.
- Trebay, G. (2007), 'Ignoring Diversity, Runways Fade to White', *New York Times*, 14 October. Available online: https://www.nytimes.com/2007/10/14/fashion/shows/14race.html (accessed 30 July 2013).

**Dissertation**

- Unpublished: title in quotation marks, with the awarding institution (not the department). Published: format as a book.
- Knox, K. B. (2010), 'Having the Stars', MA diss., Central Saint Martins College of Art and Design, University of the Arts, London.

**Film**

- Cite by title, not director. Put the medium in square brackets. Give the director (where known) and studio or distributor.
- *Macbeth* (1948), Directed by Orson Welles. [Film]. Republic Pictures.

**Television episode**

- Cite by episode, not series. Give transmission details even if watched online.
- 'Don't Forget the Sea' (2020), *I May Destroy You*, series 1, episode 3. BBC One Television. 15 June, 21:00.

**Podcast**

- Cite by presenter or author, with episode number and/or title and the publication date (not the download date).
- Grumbridge, A. and V. Raison (2024), *The Deserter Pubcast: Episode 24: Catford and Bellingham* [Podcast]. 15 October. Available at: https://deserter.co.uk/2024/10/pubcast-catford-and-bellingham (accessed 18 November 2024).

**Reprint or modern edition**

- Original date in square brackets, then the date and details of the edition actually used.
- Austen, Jane ([1814] 2012), *Sense and Sensibility*, Penguin.
- In text: Austen ([1814] 2012).

## Short-title system (notes and bibliography)

### Notes

- Give the full reference in a note at the first mention. After that, use a shortened form: surname, short title, page.
- The short title can be used again even when other references come in between.

```
1. Mary Hamer, Writing by Numbers: Trollope's Serial Fiction (Cambridge University Press, 1987), 25.
2. Herbert Roese, 'Some Aspects of Topographical Locations of Neolithic and Bronze Age Monuments in Wales', Bulletin of the Board of Celtic Studies 29, no. 1 (1982): 764.
3. Jane Austen, Sense and Sensibility (1814; Oxford University Press, 2012), 23.
4. Hamer, Writing by Numbers, 250.
5. William Strunk, Jr, and E. B. White, The Elements of Style, 4th ed. (Allyn and Bacon, 2000), 90.
```

(In the published book, titles of books and journals in these notes are italic.)

### Bibliography

- The date goes at the end of the entry, because readers search by author and title.
- Order by author or editor surname, then by title.
- Full names are more usual than initials; follow the form on the title page. Authors who publish under initials keep them.
- Page ranges of chapters are not needed in the bibliography. Journal articles keep their page range.

### Note and bibliography patterns

**Book**

1. Florence Babb, *Between Field and Cooking Pot: The Political Economy of Marketwomen in Peru*, rev. ed. (University of Texas Press, 1999).
2. Jacques Barzun, *Simple and Direct: A Rhetoric for Writers*, 2nd ed. (1985; repr., University of Chicago Press, 1994).
3. *O: A Presidential Novel* (Simon & Schuster, 2011).

- Babb, Florence. *Between Field and Cooking Pot: The Political Economy of Marketwomen in Peru*. Rev. edn. University of Texas Press, 1999.
- Barzun, Jacques. *Simple and Direct: A Rhetoric for Writers*. 2nd ed. 1985. Reprint, University of Chicago Press, 1994.
- *O: A Presidential Novel*. Simon & Schuster, 2011.

**Chapter in an edited collection** (note gives only the page cited)

1. Christine Geraghty, 'Re-examining Stardom: Questions of Texts, Bodies and Performance', in *Stardom and Celebrity: A Reader*, ed. Sean Redmond and Su Holmes (Sage, 2007), 100.

- Geraghty, Christine. 'Re-examining Stardom: Questions of Texts, Bodies and Performance'. In *Stardom and Celebrity: A Reader*, edited by Sean Redmond and Su Holmes. Sage. `[CHECK: the guide's example omits the year here; add it, 2007, for consistency]`

**Dissertation**

1. Kevin B. Knox, 'In the Stars' (MA diss., Central Saint Martins College of Art and Design, University of the Arts, London, 2010).

- Knox, Kevin B. 'In the Stars'. MA diss., Central Saint Martins College of Art and Design, University of the Arts, London, 2010.

**Film and broadcast media**

1. *Star Trek*, season 2, episode 15, 'The Trouble with Tribbles', written by David Gerrold, directed by Joseph Pevney, aired 29 December 1967 on NBC.

- Pevney, Joseph, dir. *Star Trek*. Season 2, episode 15, 'The Trouble with Tribbles.' Aired 29 December 1967 on NBC.

**Journal article**

1. Valerie Steele, 'Anti-fashion: The 1970s', *Fashion Theory: The Journal of Dress, Body & Culture* 1, no. 3 (1997): 279–96.

- Steele, Valerie. 'Anti-fashion: The 1970s'. *Fashion Theory: The Journal of Dress, Body & Culture* 1, no. 3 (1997): 279–96.

**Magazine and newspaper articles**

- Newspapers are best cited in notes or in the text. If a bibliography entry is needed, an unsigned article goes under the publication title.

1. Helene Bidou, 'Introduction', *Gazette du bon ton*, November 1912, 1–4.
2. James Smith, 'England Continue to Struggle', *Daily Mail*, 3 July 2010, 68.
3. 'Photo Report on the Hungarotex Export Fashion Show', *This Is Fashion*, June 1966, 4–5.

- Bidou, Helene. 'Introduction'. *Gazette du bon ton*, November 1912, 1–4.
- Smith, James. 'England Continue to Struggle'. *Daily Mail*, 3 July 2010, 68.
- *This Is Fashion*. 'Photo Report on the Hungarotex Export Fashion Show'. June 1966, 4–5.

## Special reference types

### Biblical references

- Spell out names of biblical books unless followed by chapter and verse: In the book of Genesis we read . . . / In Gen. 1.1 we read . . .
- 'book' is never capitalized.
- Biblical, apocryphal and deuterocanonical books are not italicized. Other ancient titles, including pseudepigrapha, are: In *3 Macc.* we see that . . .
- 'chapter' and 'verse' become ch. and v. (plural chs and vv.) before a reference, but are written out at the start of a sentence: v. 21; ch. 8 and chs 11–12; Chapter 7 begins . . .
- UK: full point between chapter and verse (Gen. 1.31). US: colon (Gen. 1:31).
- Ranges: en dash across chapters (Gen. 1.31–2.2); hyphen within verses (Gen. 1.1-3).
- Abbreviation lists: `bloomsbury-imprints.md`, T&T Clark section.

### Classical Greek and Latin works

- Cite in the text or notes by book, section and line; add to the references only when citing a specific edition.
- Arabic numerals, not Roman; letters usually lowercase. Page numbers only for modern material or specific translations.
- Thucydides (8.44.4); Ovid (*Amores* 1.7.27).
- Comma between author and work, none between work and reference: Aristotle, *Metaphysics* 3.2.996b5–8; Plato, *Republic* 360e–361b.
- Abbreviate authors' names following *The Oxford Classical Dictionary* (2012), but not where only two letters would be dropped or where confusion could arise (Aristotle / Aristophanes): Cic., *Verr.* 1.3.21, 2.3.120; Caes., *B Gall.* 6.19.

### English classic poems and plays

- Cite by book, canto and stanza; stanza and line; act, scene and line. No full publication details needed.
- For frequently cited works and for Shakespeare (wording and numbering vary), name the edition in the first note or the bibliography.
- See Milton, *Paradise Lost*, bk 1, lines 83–6.
- A shortened system (Pope, *Rape of the Lock*, 3.28–9) is allowed if explained in the notes; Arabic numerals separated by full points.

### Unpublished material

- Personal communications, fieldwork and interviews that readers cannot access: describe the source in the text or note, with no references or bibliography entry.
- 'as Stu Bennett noted (personal communication, 10 August 2022)'
- 1. Stu Bennett, personal communication, 10 August 2022.
- Unpublished dissertations or reports available online or in repositories are cited normally, with full entries.

---

<!-- module: bloomsbury-imprints.md -->

# Module B4: Bloomsbury imprint-specific rules

Source: Bloomsbury A&P *House Style Guidelines*, Version 2 (September 2025), Appendices A–D. Authors for these imprints follow the general Bloomsbury rules first, then the appendix for their imprint.

| Imprint | Appendix | Covers |
|---|---|---|
| T&T Clark | A | Biblical, ancient-source and bibliographical abbreviations |
| The Arden Shakespeare | B | Play abbreviations, edition to quote, formatting play extracts |
| Methuen Drama | C | Formatting modern play texts and extracts |
| Methuen Drama (accessible editions) | D | Accessible play-text formatting, avoiding italics |

## Appendix A: T&T Clark and biblical abbreviations

These abbreviations apply to all Bloomsbury submissions and matter most for T&T Clark.

### Old Testament

Gen. · Exod. · Lev. · Num. · Deut. · Josh. · Judg. · Ruth · 1 Sam. (LXX 1 Kgdms) · 2 Sam. (LXX 2 Kgdms) · 1 Kgs (LXX 3 Kgdms) · 2 Kgs (LXX 4 Kgdms) · 1 Chron. · 2 Chron. · Ezra · Neh. · Est. · Job · Ps. (pl. Pss.) · Prov. · Eccl. (or Qoh.) · Song (or Cant.) · Isa. · Jer. · Lam. · Ezek. · Dan. · Hos. · Joel · Amos · Obad. · Jon. · Mic. · Nah. · Hab. · Zeph. · Hag. · Zech. · Mal.

### Apocrypha or deuterocanonical books

1 Esd. · 2 Esd. (chs 3–14 are 4 Ezra in the Pseudepigrapha) · Tob. · Jdt. · Add. Est. · Wis. · Sir. (or Ecclus) · Bar. · Ep. Jer. · Song 3 Childr. (Dan. 3.24-90; Dan. 3.26-45 is Prayer of Azariah) · Bel · Pr. Man. · 1 Macc. · 2 Macc.

### New Testament

Mt. · Mk · Lk. · Jn · Acts · Rom. · 1 Cor. · 2 Cor. · Gal. · Eph. · Phil. · Col. · 1 Thess. · 2 Thess. · 1 Tim. · 2 Tim. · Tit. · Phlm. · Heb. · Jas · 1 Pet. · 2 Pet. · 1 Jn · 2 Jn · 3 Jn · Jude · Rev.

### Josephus

Ant. (Antiquities of the Jews) · Apion (Against Apion) · Life (Life of Josephus) · War (The Jewish War)

### Other rules

- Arrange biblical references in canonical sequence, following the order of most English Bible translations. Hebrew (Masoretic) order is acceptable in some cases, but discuss it with Bloomsbury's editorial staff first.
- Pseudepigrapha follow James H. Charlesworth (ed.), *The Old Testament Pseudepigrapha*. Set both the abbreviation and the full title in italics, even where the name is the author's.
- The guide gives full lists of Dead Sea Scrolls sigla, Philo's works, other early Jewish and Christian literature, pseudepigrapha and some 500 journal and series abbreviations (AASOR to ZWT). Do not invent or guess a siglum or abbreviation: ask the user to check Appendix A, or spell the title out in full.
- Bibliographical abbreviations: the author (or the volume editor of a multi-author book) compiles the list of abbreviations actually used, arranged alphabetically. New abbreviations are allowed but must be flagged to the editorial staff and listed with their full form. Items cited only once do not need an abbreviation.

## Appendix B: The Arden Shakespeare

### Text to quote

- Quote from the Arden Third or Fourth Series edition of the play, or the Arden *Complete Works* if the play is not available.
- Quote verbatim, with line breaks exactly as in the edition (verse or prose). Copy editors and proofreaders will not have the text to check, so accuracy is the author's job.

### Play abbreviations

| Abbr. | Play | Abbr. | Play |
|---|---|---|---|
| AC | Antony and Cleopatra | Mac | Macbeth |
| AW | All's Well That Ends Well | MM | Measure for Measure |
| AYL | As You Like It | MND | A Midsummer Night's Dream |
| Car* | The History of Cardenio | MV | The Merchant of Venice |
| CE | The Comedy of Errors | MW | The Merry Wives of Windsor |
| Cor | Coriolanus | Oth | Othello |
| Cym | Cymbeline | Per | Pericles |
| DF* | Double Falsehood | PP | The Passionate Pilgrim |
| E3 | King Edward III | PT | The Phoenix and Turtle |
| Ham | Hamlet | R2 | King Richard II |
| 1H4 | King Henry IV, Part 1 | R3 | King Richard III |
| 2H4 | King Henry IV, Part 2 | RJ | Romeo and Juliet |
| H5 | King Henry V | Son | Sonnets |
| 1H6 | King Henry VI, Part 1 | STM | Sir Thomas More |
| 2H6 | King Henry VI, Part 2 | TC | Troilus and Cressida |
| 3H6 | King Henry VI, Part 3 | Tem | The Tempest |
| H8 | King Henry VIII | TGV | The Two Gentlemen of Verona |
| JC | Julius Caesar | Tim | Timon of Athens |
| KJ | King John | Tit | Titus Andronicus |
| KL | King Lear | TN | Twelfth Night |
| LC | A Lover's Complaint | TNK | The Two Noble Kinsmen |
| LLL | Love's Labour's Lost | TS | The Taming of the Shrew |
| Luc | The Rape of Lucrece | VA | Venus and Adonis |
| MA | Much Ado About Nothing | WT | The Winter's Tale |

\* as appropriate in the context.

- In running text, fuller short forms can avoid repetition: *All's Well*; *Merry Wives*; *1 Henry IV*.

### Formatting play extracts

- Character names in roman small capitals, in dialogue and in stage directions. (In plain text, show them in capitals and tell the user to apply small caps.)
- Stage directions italic and centred. Dialogue left aligned.
- A speech that starts with a full, short or first-part line goes on a new line below the speech prefix, indented three spaces. Later lines keep the same indent.

```
RODERIGO
   Here is her father's house, I'll call aloud.
IAGO
   Do, with like timorous accent and dire yell
   As when by night and negligence the fire
   Is spied in populous cities.
```

- A verse line shared between speakers: the later part sits on the same line as the new speech prefix, indented to start one space beyond the end of the previous part. If that would overrun the right margin, let the part lines overlap slightly.

```
HORATIO
   What means my love?
BEL-IMPERIA           I know not what myself,
```

- A line too long for the page continues underneath with a further three-space indent.
- Act, scene and line reference on the line below the extract, flush right: (Oth 1.3.171–5).
- Shorten references by context: drop the play name if only one play is under discussion; give only line numbers if one scene is under discussion.

## Appendix C: Methuen Drama play texts

Applies to modern plays typeset for the first time, plays adapted for a new collection (where requested), and play extracts in critical texts.

- Insert a line space at every break: between lines of dialogue, stage directions and so on.
- Act numbers: larger font, italic, spelt out: *Act One*.
- Scene numbers: spelt out, initial capitals, roman bold: **Scene Eight**.
- Character list precedes the play. Names lowercase with initial capital, bold, with notes in italics on the same line:

```
Characters

**Narrator**
**Jack**, *Celtic fan*
**Courtney**, *Rangers fan*
**Steph**, *Jack's mum's boyfriend*
```

- In the play text, character names outside dialogue are bold, roman, initial capital, even inside stage directions. Pronouns (he, she, him, her) are not bolded.
- If dialogue continues after a stage direction, do not repeat the character name; restart the dialogue full out below the direction. Repeat the name if the stage direction mentions another character.
- Dialogue is left as supplied; house style is not imposed on it.
- Dialogue starts one em space after the character name, or after a stage direction that follows the name. Leave a line space between different characters' speeches.
- Stage directions: italic, lowercase, full out (not indented).
- Stage directions within dialogue: in parentheses, with their punctuation inside: **James** Right. Okay. What have we here? (*Reads.*) It's Okay to be Different.
- Stage directions before a character speaks: start lowercase, no punctuation inside the parentheses: **All** (*sing*) Blinded by the light!

## Appendix D: Accessible Methuen Drama play texts

Same scope and the same rules as Appendix C, with these changes:

- Act numbers: larger font, **roman** (not italic), spelt out: Act One.
- Character list: names in roman (lowercase with initial capital); notes in roman after a comma on the same line.
- Stage directions: in parentheses, roman, lowercase, and set indented from the main text.
- Stage directions within dialogue and before speech follow Appendix C, but in roman.
- Avoid italics everywhere:
  - Titles of plays, books, films, magazines and periodicals (in programme pages and the play text) take single quotation marks instead of italics: 'The Guardian'.
  - Emphasis uses bold instead of italics.

---

<!-- module: routledge-manuscript.md -->

# Module R1: Routledge / Taylor & Francis manuscript preparation

Source: Taylor & Francis Books, *Manuscript preparation guide* (30 pp.), sections on Typescript, Front matter and end matter, and Endorsements. Applies to Routledge and CRC Press titles. Subject areas and series may vary; the user's Editorial Assistant (EA) or Commissioning Editor has the final word. Camera-ready LaTeX books follow a separate Camera ready guide (not covered by this skill), though many of these principles still apply.

## Policies that shape every chapter

### Diversity, equity and inclusion

- Use bias-free language. T&F points to Chapter 5 of the *APA Publication Manual*, 7th edition (age, disability, gender, participation in research, racial and ethnic identity, sexual orientation, socioeconomic status, intersectionality).
- Consider diversity in the choice of contributors, texts, references, images and case studies.
- Bigoted, prejudiced or triggering language and imagery (racist, graphic, disturbing, sexist) may be challenged and recommended for removal.
- If the work must quote such material for critical analysis, tell the editor in advance so staff can be prepared.

### AI tools and authorship

- Using AI tools (LLMs, generative AI, chatbots) to generate chapter or book content is not in line with T&F authorship criteria. LLMs cannot be authors.
- Any AI assistance with content generation must be clearly acknowledged in the book.
- Authors are wholly responsible for the originality, validity and integrity of their content.
- PressReady practice: formatting and consistency checks are not content generation, but drafting an abstract, biography or alt text is. When you draft any of these, remind the user to review it and acknowledge AI assistance.

## Chapter files (typescript)

- Each chapter, including the introduction (and conclusion), is a separate Word document.
- A chapter file contains only the final chapter text and images that are editable in Word. It must not contain:
  - artwork (non-editable images go in separate files in their original format: .eps, .jpg and so on);
  - tracked changes (resolve them and switch tracking off);
  - comments (send notes to the copy editor separately, using the notes for the copyeditor form or email);
  - hidden text.
- Keep the layout simple; the book will be professionally typeset.
- Use a Unicode font available in Microsoft Word, such as Arial or Times New Roman.
- Number the pages of each chapter from 1, within each file.
- Put a blank line between paragraphs. Do not indent the first line of paragraphs.
- Do not hyphenate words across line ends (keep only grammatically required hyphens).
- Do not set text in columns, even if the final book will use columns.
- References, notes and bibliographies count towards the agreed word count.

## Callouts and captions

### What stays out of the chapter file

- Non-editable figures (photographs, screenshots, image files) and maps are never pasted or embedded in chapter files. Submit them separately.
- Describe each in the text with a caption (and alt text) and mark its place with a callout. Tables and boxes in the chapter also get numbers and captions.

### Numbering

- Number by type, chapter and order within the chapter, not by section: Figure 1.1, Figure 1.2, Figure 2.1, Figure 2.2, Figure 2.3.
- Item numbers must match the file names exactly (see `routledge-submission.md`).
- Specialist books may need extra categories, such as 'Example' for music examples or 'Structure' for chemical structures.
- Small formatting tables (for example linguistic tables) may not need numbers. Ask the EA if unsure.

### Callouts

- Every item to be inserted needs a highlighted callout, a short piece of text showing roughly where it goes.
- The callout matches the item's file name exactly and is highlighted in Word: `<Figure 2.3 here>`
- Figures, tables and boxes are placed at the top or bottom of a page, as near the callout as possible, so never refer to them as 'above' or 'below'. Be specific: 'see Figure 2.3'.

### Captions

- Every numbered image and table needs a caption briefly describing the content.
- Captions may carry source information: who took a photograph, who provided artwork, where data came from. If a rights holder requires a specific credit line, include it in the caption (or wherever they ask).
- Place the caption directly below the callout (or below the table).
- Examples:
  - Figure 2.3. A dog running along a beach. Photograph by the author.
  - Figure 3.1. Max Slevogt, *Wir können kein Licht auf die Palette spritzen*, 1898, ink on paper, 179 x 270mm, mounted on cardboard, 218 x 263mm. Landesmuseum Mainz, Inv. Nr. GS 2015/8. GDKE. Copyright: Landesmuseum Mainz (Ursula Rudischer).

## Tables

- Supply tables in an editable form. Rekey any table that exists only as an image.
- Use Word's table function. Never build a table from tabs and line breaks.
- Large, data-heavy tables can be made in Excel. Very wide tables may be typeset landscape.
- Keep editable tables inside the chapter file, not as separate files.
- Follow the naming, numbering and caption rules above: Table 1.1. Some U.S. states and their abbreviation

## Boxes

- Boxes set apart text such as a definition or case study.
- Tag boxed text: `<start box>` … `<end box>`.
- Floating, stand-alone boxes are positioned and numbered like figures and tables, with a caption: Box 1.1: Case Study; Box 1.2: Summary.

## Editorial style

- T&F does not have a house style. The Commissioning Editor may suggest or request one depending on subject, audience and market (mainly US or UK readers).
- The rule that matters is consistency across the whole manuscript: spelling (UK or US), serial commas, acronyms, referencing style.
- Record style choices in the Notes for the Copyeditor form. Decide them while writing, not just before submission.
- Consult an authority once the style is chosen, for example the latest edition of *The Chicago Manual of Style*.
- PressReady practice: when no style has been set, detect the dominant choices in the text (spelling variant, quotation marks, serial comma, citation format), report them, and make the minority forms match. Ask before switching the dominant choice.

## Referencing

- Ask whether the Commissioning Editor expects a specific style.
- Otherwise any suitable style may be used, consistently throughout the manuscript, including across an edited collection.
- Some styles offer options (Chicago has author-date and notes-bibliography). Choose one and keep to it.
- Provide a bibliography or reference list at the end of **each chapter**, so chapters work on their own, especially digitally.
- Include Digital Object Identifiers (DOIs) where available.

## Notes

- Use notes for extra detail or for references where the chosen style requires them.
- Number notes by chapter, not through the whole manuscript.
- T&F typesets notes as endnotes at the end of each chapter and converts footnotes.
- Add notes with Word's Insert Endnote function so numbering updates automatically.
- Be economical with discursive notes; they count towards the word count. Move essential long notes into the main text.

## Headings

- Use no more than three levels of subheading unless absolutely necessary.
- Avoid numbered headings unless they are normal in the field (for example STEM subjects, linguistics) and/or approved by the EA.
- Mark levels with Word's style gallery (Heading 1, Heading 2, Heading 3), or with clear, consistent formatting.

## Special characters

- Characters outside Western European languages (Greek, Hebrew, Arabic and so on) must be typed in a Unicode font such as Times New Roman or Arial.
- Use fonts available in Word. Downloaded non-Unicode fonts cannot be used.
- Not every Unicode font covers every language. Word fonts for East Asian scripts (depending on version): Chinese: Microsoft YaHei, Microsoft JhengHei, SimSun, PMingLiU or KaiTi. Japanese: MS Gothic, Yu Gothic or MS Mincho. Korean: Batang or Malgun Gothic.
- Submit a PDF of any chapter containing special characters and/or equations, as a fixed reference for the typesetter.
- Check special characters carefully at proof stage.

## Abstracts

- Every chapter, including the introduction and conclusion, needs an abstract.
- The abstract is a selling pitch: what the chapter is about and what readers will gain.
- Length: 100 to 200 words.
- Third person: 'this chapter discusses', not 'I discuss'.
- Self-contained: no abbreviations, footnotes or incomplete references.
- Place it in the chapter file, before the chapter text, under the heading 'Abstract', and highlight it.
- Abstracts are copyedited and appear in proofs, but not in the printed book unless agreed. They appear on taylorfrancis.com.
- The sample chapter mentions keywords below the abstract but gives no rule for them. Ask the EA whether keywords are wanted and how many; do not invent a requirement.

### PressReady abstract check

1. Count the words. Flag fewer than 100 or more than 200.
2. Flag first-person forms: I, my, we, our, us.
3. Flag abbreviations and acronyms, note markers, and citations such as (Smith 2020) or 'Smith argues'.
4. Confirm the heading 'Abstract' and that it sits after the ORCID iD(s) and before the chapter text.

## ORCID iDs

- Include an ORCID iD for every author of every chapter, repeated as needed.
- Place it beneath the author name, below the chapter title and before the abstract.
- Authored books: author names and ORCID iDs on all chapter title pages and the book title page.
- Edited books: editors' names and iDs on the book title page, and on any chapter they co-wrote alongside the other chapter authors.
- Test each iD (it should open the right profile). Never guess or generate an iD; use `[CHECK: ORCID iD]`.
- Do not put email addresses or other contact details in the manuscript.
- Neither abstracts nor ORCID iDs appear in the printed book.

## Research data

- T&F encourages sharing research data: videos, transcripts, questionnaires, data files, spreadsheets (see its Data Sharing Policy).
- Cite shared data in the chosen referencing style.
- Add a data availability statement to the prelims (templates are on the Data Sharing Policy page).

## Sample chapter layout

```
1. Chapter title
Anne Author
https://orcid.org/0000-0000-0000-0000

Abstract
[highlighted] This chapter covers ... (100–200 words, third person)

The chapter text begins here. Paragraphs are separated by a blank line and are not indented.

You may refer to tables in the text, such as Table 1.1.¹

[Word table]
Table 1.1. Some U.S. states and their abbreviation

What about images?

<Figure 1.1 here>   [highlighted]
Figure 1.1. A dog running along a beach. Photograph by the author.

Reference list
Herodotus, Histories, trans. A. D. Godley. Cambridge: Harvard University Press, 1920.

[endnotes inserted with Insert Endnote]
```

## Front matter (prelims)

Submit prelims as one Word file. Include the elements that apply, in this order. Some subject areas order things slightly differently; confirm with the EA.

1. Endorsements (optional)
2. Half title page: title only, no subtitle
3. Data availability statement (optional; when research data is shared or cited)
4. Title page: main title; subtitle (optional); 'Edited by' (optional); all author/editor names in their final order and form (tell the EA about any change, as it feeds online databases); ORCID iDs for each author/editor (optional)
5. Dedication (optional; no epigraphs of copyrighted material)
6. Table of contents
   - a simple text list: no tables, tabs, columns or other complex formatting;
   - no page numbers;
   - front matter elements from the table of contents onwards;
   - all chapter titles, matching the chapters exactly;
   - edited books: each chapter's authors on the line below the chapter title;
   - part numbers and titles (optional);
   - chapter subheadings if relevant, no more than three levels including the chapter title.
7. List of contributors (edited books)
   - alphabetical by surname; no titles (Dr, Professor) in names; names match the contents and chapters exactly;
   - name in bold, affiliation, country, optional professional biography of up to 50 words;
   - sentence biography (preferred for Routledge): Anony Mous is a fictional staff member at Taylor & Francis, UK and is on the board of Publishing Guidelines.
   - stacked layout (preferred by CRC Press): name / institution / city, country only. No street addresses, emails, phone numbers or department names.
8. Foreword (optional): a short piece by someone else, such as a recognised figure or series editor
9. Preface (optional): a short piece by the author(s) on how the book came to be written. Anything about the content itself belongs in an introduction chapter.
10. Acknowledgements (optional): thanks; credits for third-party material using the wording the rights holder asked for (a separate credits list is fine if there are many); can be combined with the preface or form its end.
11. List of acronyms and abbreviations (optional)

## End matter

- Appendices (optional)
- Glossary (optional; may go in the front matter instead)
- Index: compiled during production at proof stage, by the author or editor unless otherwise agreed with the Commissioning Editor before submission. If someone else will index, the author may submit a list of essential terms. See T&F's indexing guidelines.

## Endorsements

- Optional but encouraged; securing them is the author's job unless agreed otherwise.
- Send endorsers' email addresses to the EA so they get a free ebook on publication.
- Each endorsement mentions the book (or a feature) and its benefit to readers or the field.
- Maximum 50 words (one or two sentences), including the endorser's affiliation as a credit line:
  "Through careful design and composition, T&F's Author Guidelines make it easier than ever to publish high quality, impactful academic and professional content. I would recommend this resource to all T&F authors and prospective authors."
  Professor Joe Nemo, Fictional Institute for Examples, Canada
- To appear in the printed book, endorsements must be submitted with the manuscript. Only two or three fit.
- Later endorsements, and snippets from positive reviews, can go on the book's online page.

---

<!-- module: routledge-artwork-permissions.md -->

# Module R2: Routledge / Taylor & Francis artwork, alt text, permissions, covers and new editions

Source: Taylor & Francis Books, *Manuscript preparation guide*, sections on Artwork, Alt Text, Permissions (with Appendix A), Cover design and New Editions.

## Artwork: general

- If no maximum number of images was agreed, discuss planned images with the EA before submission.
- Include images only if they are essential to the argument, not as decoration, unless agreed otherwise.
- Books print in black and white unless agreed otherwise. Every image must be legible in greyscale. Very dark, low-contrast photographs, or graphs with many shades or colours, may need adjusting or dropping.
- Do not refer to colour in the text ('the blue section of Figure 2.1').
- Think about legibility at print size. A detailed map five inches wide may not show towns or roads; that is fine only if the point is the broad shape or location.

## Halftones

- Halftones: photographs, screenshots and other images with continuous variation of colour and shade.
- Supply each as an individual file at least **1,500 pixels wide**, at its original resolution (higher is better), so it can print across the full width of the page.
- Never enlarge a pixel image artificially with software; it will look pixelated.
- Discuss with the EA any essential image below this size.
- Formats: .jpg or .tiff; screenshots may be .png.
- Never paste halftones into the manuscript.
- When depicting people, reflect diversity as far as possible (age, gender and sexuality, ability, racial and ethnic identity, cultural background).

## Line art

- Line art: graphs, diagrams, equations, lines and shapes on a plain background, made of block colours with little or no shading.
- Supply it editable, in the original format or software, so the whole and its parts can be resized without loss.
- Simple diagrams can be made in Word or PowerPoint; graphs and charts in Excel.
- Specialist software: export to vector formats such as .eps, .svg or .ai.
- Do not copy line art from other material and supply it as a halftone. Redraw diagrams and graphs where possible (redrawing does not remove the need for permission; see below).
- If line art exists only as a halftone, it must meet halftone requirements, and needs a high resolution so lines and curves do not look jagged.
- Never embed the figure caption inside the image. Supply it in the text.

## Composite images

- For line art containing halftone elements (for example a large flowchart with photographs), supply the line art editable and the halftone parts separately at their best original size and resolution.
- Tell the EA that these files make one figure.

## Checking image width (Windows)

1. Select the file and press Alt + Shift + P to show the Details pane; or
2. Right-click, choose Properties, then the Details tab; or
3. In File Explorer choose View > Details, right-click a column header, choose More and add Dimensions.

Then open the image and confirm it looks clear at the intended size. (On macOS, Finder's Get Info or Preview's Inspector show the pixel dimensions.)

## Alt text

- Alt text is a short description attached to a figure so screen-reader users and readers with print disabilities can understand it.
- **Every figure** in a T&F publication needs alt text, unless it is purely decorative (which is discouraged). This includes instructor resources, image banks, companion website downloads and author-hosted websites, which must meet the Web Content Accessibility Guidelines (WCAG).
- Video and audio need an equivalent; at minimum, a transcript (see the W3C guidance on transcripts).
- T&F publishes a full guide to writing alt text on its website.
- PressReady practice when drafting alt text from the user's description of an image:
  - describe what the image shows and why it matters to the argument, not every visual detail;
  - do not repeat the caption word for word;
  - do not start with 'Image of' or 'Picture of';
  - give the trend or key values for charts;
  - never describe an image you have not been shown or told about; ask instead;
  - remind the user this is AI-assisted content to review and acknowledge.

## Permissions

### The principle

- Permission from the rights holder is needed for any third-party material still in copyright.
- If the author believes permission is not needed (copyright expired, exempt, licensed, or fair use / fair dealing), they must provide proof.
- Record every piece of third-party material in the **Artwork and third-party material permissions log**, and submit it with the signed **Permissions declaration form** and the final manuscript.
- Unless agreed otherwise in writing, the author (or, for edited books, the editor jointly with contributors) obtains and pays for permissions.
- T&F's main advice: avoid third-party material where possible. If it is necessary, start early.
- T&F cannot give legal judgements and errs on the side of caution. Material without evidence of permission or exemption is removed.

### The six steps

1. **Identify third-party material.** Anything not created specifically for this book, including: the author's or their institution's earlier material, published or not; material from other T&F publications; redrawn artwork (unless substantially transformed into a new work or a new critical point); material in earlier versions such as dissertations or previous editions.
2. **Confirm it is necessary.** Referring to, describing or discussing the material is often enough. If inclusion is unavoidable, use only as much as needed.
3. **Determine copyright status.**
   - The author of a source is not always the rights holder; check credit lines and acknowledgements. The publisher or curator usually holds reproduction rights and is the best first contact.
   - Creative Commons: licences allow varying reuse. For an open access book, the permission must cover open access reuse and name the CC licence the book will use.
   - Public domain: no exclusive rights apply, so usually free to use, though attribution is normally required.
   - 'Publicly available' on the internet is not the same as 'in the public domain'.
   - Fair use (US) and fair dealing (UK) have no fixed limits (no 'up to 400 words'). Each case turns on the nature of the new work, the purpose and character of the use, the amount used (especially as a share of the original) and the effect on the original. As a commercial publisher, T&F rarely accepts scholarly or educational purpose as a justification.
   - **Epigraphs are not fair use or fair dealing, and T&F does not allow them.** A quotation must be embedded in the text and actively discussed.
   - Usually permission-free (check each case): US federal government publications; UK government and legal materials under Crown copyright (Open Parliament Licence, Open Government Licence v3); European Court reports, judgments, treaties and regulations from EUR-Lex, Europa or Curia; Google Earth/Maps and Google Ngram images (within Google's guidelines); raw data used to build your own table (but an existing layout, format or selection, such as a database, table or graph, needs permission); for science imprints (CRC Press, Psychology Press, Routledge Built Environment, Routledge Behavioural Sciences), small portions under the STM Permission Guidelines.
   - Finding rights holders: Harry Ransom Center WATCH file; DACS; Jisc Library Hub Discover; Literary Market Place; Artists Rights Society; Association of American Publishers; Copyright Clearance Center.
   - T&F controls rights for many former imprints (including Routledge, Ashgate, CRC Press, Earthscan, Focal Press, Psychology Press, UCL Press, Westview Press, and Bloomsbury Academic's Photography and Anthropology titles). Permission is still needed to reuse their third-party material.
   - If the rights holder cannot be found or does not answer, remove the material and find an alternative.
4. **Apply for permission.** Request, unless agreed otherwise: *commercial, non-exclusive, worldwide English language rights in all forms and media, including print and eBook form, for the lifetime of the edition.* Discuss with the EA if a rights holder asks for something narrower or wants extra details. Three routes: the Copyright Clearance Center; the rights holder's own permissions page or form; an email request (template below). Be ready to pay and negotiate; stressing the scholarly purpose of a commercial use often helps.
5. **Document permission.** Keep the log up to date with status and evidence. Give credit in the manuscript beside the material or in the acknowledgements, in the wording and position the rights holder requires.
6. **Submit permission.** Send the log, all evidence and the signed declaration form with the manuscript, on or before the due date. Production will not start until permissions are settled.

### Permission request email template

```
Subject line: Permission request for [Routledge/CRC Press] book

I am writing to request permission to reprint the following material in a book that [Routledge/CRC Press] will soon be publishing in the [academic/professional] market.

The material for which I am requesting permission is:
[bibliographic details of the selection, including page range and word count if applicable]

to be reprinted in:
[Title] by [author(s)]; proposed date of publication is [season and year].
Approximately [#] pages.
List price: [$/£#] in print and eBook.

We require commercial, non-exclusive, worldwide English language rights in all forms and media, including print and eBook form, for the lifetime of the edition.

Appropriate credit will be given in the book's acknowledgements and/or alongside the material. Please indicate your preferred wording.

If you have any questions about this request, please contact me at [contact details].
Many thanks for your attention to this request.
```

PressReady may fill the brackets from details the user supplies. Never invent a price, page count or date.

### Works that may be under copyright (T&F Appendix A, non-exhaustive)

- Text: poetry; prose; dialogue from film, theatre and television; lyrics; transcripts; music composition and notation; private correspondence and personal information (letters, email); translations; epigraphs; software.
- Commercial: advertisements; trademarks and logos.
- Images: photographs (including of paintings and sculptures); images in which people are identifiable, especially children; illustrations, sketches and diagrams; graphic art; screenshots and screen grabs; ClipArt; maps.
- Fiction and non-fiction: books, essays, graphic novels, journal, magazine and newspaper articles, white papers; letters and interviews; social media (Facebook, Twitter, Instagram, Pinterest, YouTube and so on); blogs, websites and search engines (including Wikipedia and Google); works by students or children.

## Cover design

- Most T&F titles use a signature cover designed in-house. Designs depend on the type of book, the imprint and the series (Routledge monograph and template covers, CRC Press monograph and template covers, Routledge Handbook/Companion covers, Focus short-form covers).
- Where possible the author is offered a choice of design and/or image; ask the EA.
- T&F aims to agree the cover during manuscript preparation, because a cover image ready at announcement helps the book's profile.

## New editions

- Plan the new edition with the editor; the extent of revision decides the approach.
- **Substantial rewriting**: submit a new manuscript in Word. T&F can provide the copyedited Word text of the previous edition once the new contract is signed.
- **Limited changes, or a complex text design**: mark changes on a PDF of the previous edition using Acrobat or Reader editing and notes tools. Mark revisions clearly and consistently; a sample can be checked with production first.
- **Limited changes plus substantial new sections or chapters (hybrid)**: mark up the PDF with 'insert text' indicators and supply the new text in separate Word files. Example: the first insertion in chapter 9 is saved as file 9A, and the PDF says 'insert 9A here'.
- Also check:
  - Artwork: ask whether figures from the current edition can be reused or must be resupplied.
  - Permissions: third-party permissions from the previous edition will probably need to be obtained again.
  - Numbering: any change to chapter, figure or table numbering must be reflected everywhere, including cross-references, with all sequences renumbered.

---

<!-- module: routledge-submission.md -->

# Module R3: Routledge / Taylor & Francis manuscript submission

Source: Taylor & Francis Books, *Manuscript submission guide* (3 pp.). Use it with the publisher's Submission checklist, which must accompany all content files. Camera-ready LaTeX files follow a separate Camera ready guide.

## Before sending

- The Editorial team checks the submitted manuscript before handing it to Production. This can take a few weeks, depending on the checks and the state of the manuscript.
- Production cannot start until everything is present and correct. Make sure nothing is missing, incomplete or out of line with the guidelines.
- No changes are accepted once the manuscript enters production. The version submitted must be final in the author's view.
- The two most common causes of delay: **artwork size and quality**, and **permissions for third-party material**. T&F may remove material that does not meet requirements, though it will usually give a last chance to fix or replace it.

## Step 1. Name and organize the files

- Submit each manuscript element as its own file.
  - Every chapter, section or other text file, including the introduction and conclusion, is a separate .doc or .docx (or compatible Mac) document.
  - Every figure is a separate file in its original format, unless it was created in Word.
  - Editable tables stay embedded in the chapter files.
- Name and number chapters consecutively and consistently so the folder order matches the planned book order and the table of contents. This also reveals gaps and duplicates.
- Name artwork files by figure (or other item) number, exactly as in the callouts and captions, reflecting chapter number and order within the chapter.
- Never put captions in file names.
- For books in parts, supply a file for each part, including its title, in the right place. A part introduction goes inside the relevant 'Part Title' file.
- Keep file names short: **at most 30 characters, not counting the extension**.
- No special characters in file names.
- No subfolders, except one level of subfolder for all artwork.

### Example structure (book with parts)

```
00a_Prelims.docx
00b_Introduction.docx
01a_Part 1.docx
01b_Chapter 1.docx
02_Chapter 2.docx
...
Figure 1.1.jpg
Figure 1.2.tif
Figure 1.3.eps
Figure 2.1.jpg
```

### PressReady file-name check

For each proposed name:

1. Length of the name without its extension is 30 characters or fewer.
2. Only letters, digits, spaces, full points, hyphens and underscores (the guide's own examples use spaces, underscores and full points). Flag anything else, such as & / \ : * ? " < > | # % or accented letters.
3. The figure number in the name matches its callout and caption exactly ('Figure 1.2' everywhere).
4. No caption text in the name.
5. Sorting the names alphabetically reproduces the table of contents order.

## Step 2. Confirm every file is the correct, final version

- Send only one version of each chapter and artwork file. Multiple versions cause queries and confusion.
- Send revised files only if T&F asks for them to fix issues.

## Step 3. Send the files electronically

- Put all files in one folder named with the author's surname, zipped if necessary.
- Send them as email attachments in one go; several emails risk items being overlooked.
- If the files are too large for email, use a reputable file transfer or hosting service; the EA can recommend one.

## What goes in the package

- Prelims file (see `routledge-manuscript.md`, Front matter)
- One file per chapter (and per part, if the book has parts)
- Artwork files, in one artwork subfolder at most
- PDFs of chapters containing special characters or equations
- Artwork and third-party material permissions log, with all permission evidence
- Signed Permissions declaration form
- Submission checklist
- Notes for the Copyeditor form
- Endorsements, if any are to be printed
- List of essential index terms, if someone else is indexing

---

<!-- module: publisher-comparison.md -->

# Module C: Bloomsbury and Routledge compared

Use this module whenever a task touches both publishers, or when an author is moving a manuscript from one to the other. The single most common mistake is carrying one publisher's habits into the other's manuscript.

Key: **Same** = the guides agree. **Differs** = they conflict. **One only** = only one guide sets a rule; the other is silent.

## Side-by-side

| # | Topic | Bloomsbury (A&P house style, v2, 2025) | Routledge / T&F Books | Status |
|---|---|---|---|---|
| 1 | House style | Full prescriptive house style (UK or US English) | No house style; consistency is the rule; editor may request one | Differs |
| 2 | Spelling | UK or US English, both with -ize; no other variants | Author's choice of UK or US, applied consistently | Differs |
| 3 | Manuscript files | One manuscript; pages numbered continuously through the whole book | One Word file per chapter; pages numbered from 1 in each file | Differs |
| 4 | Line spacing and margins | At least double-spaced; margins at least 2.5 cm | Simple layout; no spacing or margin rule; Unicode font | Differs |
| 5 | Paragraphs | First line indented (not after headings); no extra space between paragraphs | Blank line between paragraphs; no indents | Differs |
| 6 | Heading markup | Tags `<A>`, `<B>`, `<C>` advised | Word styles Heading 1–3; at most three subheading levels; avoid numbered headings | Differs |
| 7 | Figure callout | `[Figure 2.3 here]` on a new line after the paragraph | `<Figure 2.3 here>`, highlighted, caption directly below | Differs |
| 8 | Figure numbering | Authored: sequential or by chapter (agree with editor); multi-author: by chapter | Always by chapter (Figure 1.1), matching file names | Differs |
| 9 | 'Above' / 'below' references to figures and tables | Not allowed; refer by number | Not allowed; refer by number | Same |
| 10 | Embedding images in text files | Not allowed | Not allowed (Word-editable images excepted) | Same |
| 11 | Image specification | .tif or high-res .jpg; 300 dpi halftone / 600 dpi line at print size | Halftones at least 1,500 px wide (.jpg/.tiff, .png for screenshots); line art editable or vector (.eps, .svg, .ai) | Differs |
| 12 | Colour | No rule in this guide | Printed in greyscale unless agreed; no colour references in text | One only (T&F) |
| 13 | Alt text | Not covered in this guide | Required for every figure; transcripts for audio and video | One only (T&F) |
| 14 | Tables | Word Table tool; notes a, b, c beneath; caption in title case, no full point; 'Source:' line | Word table function, editable, kept in chapter file; caption below | Differs in detail |
| 15 | Notes | Authored: book endnotes; contributed: chapter endnotes; footnotes by agreement | Endnotes numbered by chapter, using Insert Endnote | Differs |
| 16 | Referencing system | Author–date or short-title, consistent across the book | Any recognised style, consistent; editor may specify | Differs |
| 17 | Where references go | References section or bibliography (book or chapter end) | Reference list or bibliography at the end of every chapter | Differs |
| 18 | DOIs | Not required; formally published sources need no URL | Include DOIs where available | Differs |
| 19 | Banned abbreviations | op. cit., loc. cit., idem, supra, infra, et seq.; 3-em dash in references | No rule | One only (Bloomsbury) |
| 20 | Chapter abstracts | Not required by this guide | Required: 100–200 words, third person, before the text | One only (T&F) |
| 21 | ORCID iDs | Not mentioned | Required beneath every author name | One only (T&F) |
| 22 | Epigraphs | Allowed in prelims and chapters, with permission | Not allowed | Differs |
| 23 | Contributor biographies | Up to 100 words; name bold; current position first; publications with year only | Up to 50 words (optional); name bold; affiliation; country; sentence or stacked | Differs |
| 24 | Contributors list position | Prelims (UK titles); endmatter (US titles) | Front matter, after contents | Differs |
| 25 | Inclusive language | Required; APA Inclusive Language Guide, C4DISC | Required; APA Manual chapter 5 | Same |
| 26 | Warning about sensitive quoted material | Tell the editor before submission | Tell the editor in advance | Same |
| 27 | Special characters | Unicode font; talk to editor; PDF of chapters if extensive | Unicode font in Word; PDF of chapters with special characters or equations | Same |
| 28 | AI-generated content | Not addressed in this guide | LLMs cannot be authors; AI content assistance must be acknowledged | One only (T&F) |
| 29 | File naming and delivery | Not covered in this guide | Detailed: max 30 characters, no special characters, one artwork subfolder, one zipped folder | One only (T&F) |
| 30 | Cross-references | Avoid; if needed, by chapter and subheading, not page | No rule beyond figure/table references | One only (Bloomsbury) |

## Converting a Bloomsbury manuscript to Routledge

1. Split the single manuscript into one Word file per chapter; restart page numbers at 1 in each.
2. Remove first-line indents; add a blank line between paragraphs.
3. Replace `<A>/<B>/<C>` tags with Word Heading 1/2/3 styles; check there are no more than three levels.
4. Change `[Figure n here]` callouts to highlighted `<Figure n.n here>`; renumber figures by chapter if they were sequential; place captions directly below callouts.
5. Move references to the end of each chapter; add DOIs where available.
6. Write (or have the author write) a 100–200 word third-person abstract for every chapter; add ORCID iDs.
7. Remove all epigraphs, or embed and discuss the quotation in the text.
8. Check images against the 1,500 px rule and greyscale legibility; draft alt text for every figure.
9. Spelling may stay UK -ize (Oxford) if applied consistently; record the choice in the Notes for the Copyeditor form.
10. Name files to the 30-character rule.

## Converting a Routledge manuscript to Bloomsbury

1. Combine chapter files into one manuscript (or keep files but number pages continuously across the whole book, as Bloomsbury requires).
2. Double-space everything; set margins of at least 2.5 cm; page numbers centred in the footer.
3. Indent first lines (except after headings); remove blank lines between paragraphs.
4. Mark headings `<A>`, `<B>`, `<C>`.
5. Change callouts to `[Figure n here]` on a new line; decide sequential or chapter numbering with the editor (chapter numbering for multi-author books).
6. Convert spelling to the -ize forms (UK or US English only), then apply every rule in `bloomsbury-style.md`: quotation marks, serial comma, dashes, numbers, dates.
7. Convert references to author–date or short-title, consistently across the whole book; remove op. cit., loc. cit. and similar; repeat author names instead of 3-em dashes.
8. Chapter abstracts and ORCID iDs are not part of the Bloomsbury manuscript unless the editor asks; keep them in a separate file for metadata if useful.
9. Check images against 300 dpi (halftone) and 600 dpi (line) at print size.
10. Expand contributor biographies to the Bloomsbury pattern (up to 100 words, publications with year only).

---

<!-- module: checklists.md -->

# Module K: checklists and report template

Use these at the end of every task. Tick (✓) what the supplied material already meets, cross (✗) what fails, and mark (?) what cannot be checked from the material supplied (for example image resolution when no file details were given).

## Audit report template

```
PRESSREADY AUDIT
Publisher: [Bloomsbury (imprint) | Routledge / T&F]
Book type: [authored | edited collection | new edition]
Language and style choices: [e.g. UK English, -ize, no serial comma, author–date]
Assumptions made: [list, or 'none']

1. Blocking issues
| # | Where | Problem | Rule | Fix |

2. Style issues
| # | Where | Problem | Rule | Fix |

3. Queries for the author or editor
1. ...

4. Corrected text
[full text, with callouts and [CHECK: ...] placeholders]

5. Checklist
[the relevant checklist below, ticked]

6. Still to prepare
[files, forms, permissions, PDFs]
```

## Bloomsbury pre-submission checklist

### Manuscript

- [ ] Whole manuscript at least double-spaced, notes and bibliography included
- [ ] Margins at least 2.5 cm (1 in.) on all sides
- [ ] Pages numbered continuously through the whole manuscript, centred in the footer
- [ ] Italics shown as italics (no underlining)
- [ ] Heading levels distinct and consistent, tagged `<A>`, `<B>`, `<C>`
- [ ] Cross-references, if any, by chapter and subheading, not page
- [ ] UK English or US English throughout, with -ize spellings
- [ ] Prelims present, in the house order, with Roman page numbers and placeholder pages where empty
- [ ] Contents lists nothing that comes before it; list headings styled correctly
- [ ] Special characters in a Unicode font; editor told; PDFs supplied if extensive
- [ ] Sensitive material flagged to the editor before submission

### Figures and tables

- [ ] No images embedded; each supplied as .tif or high-resolution .jpg
- [ ] Halftones 300 dpi and line art/maps 600 dpi at print size (aim for at least half a page)
- [ ] Images cropped; no watermarks or colour bars
- [ ] Callouts `[Figure x here]` / `[Table x here]` on new lines after the paragraph
- [ ] Figures and tables referred to by number, never 'above' or 'below'
- [ ] Numbering agreed (sequential or by chapter); by chapter for multi-author books
- [ ] Captions with full source; credit after a full point in agreed wording
- [ ] Tables built with Word's Table tool; notes a, b, c beneath; title-case caption without a full point; 'Source:' line
- [ ] Epigraph permissions obtained (epigraphs are not covered by fair use)

### Style

- [ ] Quotation marks per variant (UK single / US double); block quotes over 60 words (40 for verse and drama)
- [ ] Serial comma per variant (UK none unless needed / US yes)
- [ ] Parenthetical dashes per variant (UK spaced en dash / US unspaced em dash)
- [ ] Numbers one to one hundred in words; 101 and above in figures; no sentence starts with a numeral
- [ ] per cent / percent in text; % only in tables
- [ ] Dates in the variant's form; centuries spelt out; decades without apostrophes
- [ ] Number and date ranges elided correctly with en dashes
- [ ] Abbreviation points per variant; no points in capital initialisms
- [ ] Minimum capitals in headings and captions
- [ ] Non-English words italic with roman translation; local units such as lakh explained

### Notes and references

- [ ] One referencing system (author–date or short-title) across the whole book
- [ ] Note markers after punctuation (except dashes); numbered per chapter; no 2a/2b; no paired markers; every note ends with a full point
- [ ] No op. cit., loc. cit., idem, supra, infra or et seq.; ibid. only with short-title notes
- [ ] Author–date: references section lists every cited work and nothing else
- [ ] Repeated authors' names written out (no 3-em dash)
- [ ] Journal entries have volume, issue and page range; chapters have all editors and page range
- [ ] URLs only where needed, full (no homepages or short links), with access dates where undated
- [ ] Place of publication either always or never (pre-1900 books: place only)
- [ ] Personal communications cited in text only

### Edited collections (volume editors)

- [ ] All contributors use the same reference system and style
- [ ] Contents headings match chapter headings exactly
- [ ] Artwork standardized
- [ ] Notes on Contributors: name bold, current position first, up to 100 words, publications with year only

## Routledge / Taylor & Francis pre-submission checklist

### Chapter files

- [ ] One Word file per chapter, introduction and conclusion included
- [ ] No artwork, tracked changes, comments or hidden text in chapter files
- [ ] Unicode font (Arial, Times New Roman); East Asian scripts in a supported Word font
- [ ] Pages numbered from 1 in each file
- [ ] Blank line between paragraphs; no first-line indents; no hyphenation; no columns
- [ ] Headings marked with Heading 1–3 styles; no more than three subheading levels; no numbered headings unless approved
- [ ] Style choices consistent everywhere and recorded in the Notes for the Copyeditor form
- [ ] Word count includes references and notes

### Chapter opening

- [ ] Chapter title, author name(s), ORCID iD(s) beneath each name
- [ ] No email addresses or contact details
- [ ] Abstract under the heading 'Abstract', highlighted, before the chapter text
- [ ] Abstract 100–200 words, third person, no abbreviations, footnotes or incomplete references
- [ ] Keywords only if the editor asked for them

### Figures, tables and boxes

- [ ] Highlighted callouts `<Figure x.y here>`, matching the file names exactly
- [ ] Captions directly below callouts and tables, with required credit lines
- [ ] Figures, tables and boxes referred to by number, never 'above' or 'below'
- [ ] Tables editable, made with Word's table function, inside the chapter file
- [ ] Boxes tagged `<start box>` / `<end box>`; floating boxes numbered with captions
- [ ] Halftones at least 1,500 px wide; .jpg/.tiff (.png for screenshots); not enlarged artificially
- [ ] Line art editable or vector (.eps, .svg, .ai); captions not inside images
- [ ] Every image legible in greyscale; no colour references in the text
- [ ] Alt text written for every figure; transcripts for audio and video

### Notes and references

- [ ] One referencing style throughout (as requested by the editor, or the author's choice)
- [ ] Reference list or bibliography at the end of every chapter
- [ ] DOIs included where available
- [ ] Notes numbered by chapter, inserted with Insert Endnote, kept brief
- [ ] Shared research data cited, with a data availability statement in the prelims

### Permissions

- [ ] All third-party material identified (including the author's earlier work and dissertation material)
- [ ] Permission obtained for commercial, non-exclusive, worldwide English language rights, all forms and media, lifetime of the edition (or proof none is needed)
- [ ] Open access books: permissions cover OA reuse under the named CC licence
- [ ] No epigraphs; quotations embedded and discussed
- [ ] Credit lines in the wording and place the rights holder required
- [ ] Artwork and third-party material permissions log completed, with evidence
- [ ] Permissions declaration form signed

### Front and end matter

- [ ] Prelims in one Word file, in the T&F order
- [ ] Half title has no subtitle; title page names final, with ORCID iDs if used
- [ ] Contents is a simple text list without page numbers; titles match the chapters
- [ ] Contributors list alphabetical, no titles, name bold, affiliation, country, bio up to 50 words
- [ ] No copyrighted epigraph on the dedication page
- [ ] Endorsements up to 50 words each including credit line; two or three for print
- [ ] Index plan agreed (author compiles at proof stage unless agreed otherwise)
- [ ] Any use of AI tools to generate content acknowledged

### Submission

- [ ] File names 30 characters or fewer (excluding extension), no special characters
- [ ] Chapters numbered so folder order matches the contents; part files where needed
- [ ] Artwork files named exactly as callouts, no captions in names, at most one artwork subfolder
- [ ] One final version of each file only
- [ ] PDFs supplied for chapters with special characters or equations
- [ ] Submission checklist completed
- [ ] Everything in one folder named with the author's surname, zipped, sent in one email or via a file transfer service

---

<!-- module: worked-examples.md -->

# Module E: worked examples

These examples show the expected output shape. The sample chapter is **fictional** and written for demonstration only; its two references (Ong 1982; Taylor 2003) are real books. `*Asterisks*` mark italics.

## Example 1. One draft, two publishers

### The author's draft

```
Chapter 3

Songs That Live When Sung: Digitising Oral Narratives in Eastern India

Introduction

In the 1990's, regional archives in West Bengal, Assam, and Odisha began to digitise their audio collections. By March 3, 2021, more than 2500 recordings had been catalogued, and nearly 40% of them were songs from the 15th century repertoire.

As Ong argued, oral cultures keep knowledge alive through performance rather than storage (Ong, 1982). Taylor makes a related point about the "repertoire" as a form of embodied memory (Taylor, 2003).¹ The digitized collection now carries conservation costs of 5 lakh rupees — a figure that surprised the archivists.

A singer in Purulia told me, "the songs live only when they are sung." The figure below shows how quickly the archive grew.

[photograph pasted into the document]

Notes
1. See Ong, op. cit.

References
Ong, W. J. (1982). Orality and Literacy: The Technologizing of the Word. Methuen.
Taylor, D. (2003). The Archive and the Repertoire: Performing Cultural Memory in the Americas. Duke University Press.
```

### A. Bloomsbury, UK English, author–date

**Audit (extract)**

| # | Where | Problem | Rule | Fix |
|---|---|---|---|---|
| 1 | Image | Photograph pasted into the file | B1 Images | Remove; supply as .tif/.jpg; add callout |
| 2 | Note 1 | op. cit. is prohibited; author–date uses no reference notes | B3 ibid. and other Latin abbreviations; Author–date | Fold into the citation: (Taylor 2003; see also Ong 1982) |
| 3 | Title | Title case in a chapter heading | B2 Capitalization | Minimum capitals |
| 4 | Title, para 1 | digitise | B2 Spelling | digitize |
| 5 | Para 1 | 1990's | B2 Dates | 1990s |
| 6 | Para 1 | Serial comma | B2 Commas (UK) | West Bengal, Assam and Odisha |
| 7 | Para 1 | March 3, 2021 (US form) | B2 Dates (UK) | 3 March 2021 |
| 8 | Para 1 | 2500 | B2 Numbers | 2,500 |
| 9 | Para 1 | 40% in text | B2 Numbers | 40 per cent |
| 10 | Para 1 | 15th century repertoire | B2 Dates | fifteenth-century repertoire |
| 11 | Para 2 | (Ong, 1982) | B3 Author–date | (Ong 1982) |
| 12 | Para 2 | Double quotation marks | B2 Quotations (UK) | Single quotation marks |
| 13 | Para 2 | 5 lakh rupees | B2 Other languages; Numbers | five lakh (500,000) rupees |
| 14 | Para 2 | Spaced em dash | B2 Hyphens and dashes (UK) | Spaced en dash ( – ) |
| 15 | Para 3 | Quoted fragment: full point inside | B2 Quotations (UK) | Point outside: 'the songs live only when they are sung'. |
| 16 | Para 3 | Interview not identified | B3 Unpublished material | (personal communication, [CHECK: date]); no reference entry |
| 17 | Para 3 | 'The figure below' | B1 Figures | Figure 3.1 |
| 18 | References | Not in house pattern | B3 Reference entry patterns | Surname, Initials (Year), *Title*, Publisher. |
| 19 | Layout | Blank lines between paragraphs, no indents | B1 Paragraphs | Indent first lines (not after headings); no extra space |

**Queries**: (1) Sequential (Figure 1) or chapter (Figure 3.1) numbering for this authored book? Agree with the editor. (2) Date of the Purulia conversation. (3) Caption, source and credit line for the photograph.

**Corrected text**

```
Chapter 3

Songs that live when sung: digitizing oral narratives in eastern India

<A>Introduction

In the 1990s, regional archives in West Bengal, Assam and Odisha began to digitize their audio collections. By 3 March 2021, more than 2,500 recordings had been catalogued, and nearly 40 per cent of them were songs from the fifteenth-century repertoire.
     As Ong argued, oral cultures keep knowledge alive through performance rather than storage (Ong 1982). Taylor makes a related point about the 'repertoire' as a form of embodied memory (Taylor 2003; see also Ong 1982). The digitized collection now carries conservation costs of five lakh (500,000) rupees – a figure that surprised the archivists.
     A singer in Purulia told me, 'the songs live only when they are sung' (personal communication, [CHECK: date]). Figure 3.1 shows how quickly the archive grew.

[Figure 3.1 here]

Figure 3.1. [CHECK: caption with full source information]. [CHECK: credit line in the agreed wording.]

References

Ong, W. J. (1982), *Orality and Literacy: The Technologizing of the Word*, Methuen.
Taylor, D. (2003), *The Archive and the Repertoire: Performing Cultural Memory in the Americas*, Duke University Press.
```

Note: 'Technologizing' in Ong's title is left alone; the spelling of titles is never changed. 'catalogued' is correct UK spelling and stays.

### B. Routledge / Taylor & Francis (no house style; author's own choices kept consistent)

PressReady first detects the author's dominant choices: UK spelling with -ise (digitise ×2 against digitized ×1), double quotation marks (×2), serial comma (×1), and APA 7 author-date citations. These become the chapter's style and the minority forms are brought into line.

**Audit (extract)**

| # | Where | Problem | Rule | Fix |
|---|---|---|---|---|
| 1 | Opening | No abstract | R1 Abstracts | Author to add 100–200 words, third person, highlighted |
| 2 | Opening | No author name or ORCID iD | R1 ORCID iDs | Add beneath the chapter title |
| 3 | Image | Photograph pasted into the file | R1 Callouts; R2 Halftones | Separate file 'Figure 3.1.jpg', at least 1,500 px wide; highlighted callout; caption below |
| 4 | Para 3 | 'The figure below' | R1 Callouts | Figure 3.1 |
| 5 | Para 2 | digitized against digitise elsewhere | R1 Editorial style (consistency) | digitised |
| 6 | Para 1 | 1990's | Consistency; APA 7 | 1990s |
| 7 | Para 1 | 2500 | APA 7 (author's chosen style) | 2,500 |
| 8 | Para 2 | Spaced em dash | APA 7 | Closed em dash (—) |
| 9 | Note 1 | op. cit. does not belong in APA author-date style | R1 Referencing (one style); APA 7 | 'See Ong (1982).' inserted with Insert Endnote |
| 10 | Para 3 | Interview not identified | APA 7 personal communications | (personal communication, [CHECK: date]); no reference entry |
| 11 | References | Titles in title case | APA 7 | Sentence case for book titles |
| 12 | Layout | Paragraph layout | R1 Chapter files | Blank line between paragraphs, no indents (already met) |

**Queries**: (1) The date 'March 3, 2021' is in US order while spelling is UK; choose one and record it in the Notes for the Copyeditor form. (2) Readers outside South Asia may not know 'lakh'; consider '500,000 rupees'. (3) Has the editor asked for keywords? (4) Alt text is needed for Figure 3.1; describe the image and PressReady can draft it for your review.

**Corrected text**

```
3. Songs That Live When Sung: Digitising Oral Narratives in Eastern India
[CHECK: author name]
[CHECK: ORCID iD, e.g. https://orcid.org/0000-0000-0000-0000 format]

Abstract
[highlight] [CHECK: abstract of 100–200 words in the third person, e.g. 'This chapter examines ...'. No abbreviations, notes or citations.]

Introduction   [Word style: Heading 1]

In the 1990s, regional archives in West Bengal, Assam, and Odisha began to digitise their audio collections. By March 3, 2021 [QUERY: date format], more than 2,500 recordings had been catalogued, and nearly 40% of them were songs from the 15th century repertoire.

As Ong argued, oral cultures keep knowledge alive through performance rather than storage (Ong, 1982). Taylor makes a related point about the "repertoire" as a form of embodied memory (Taylor, 2003).[endnote 1] The digitised collection now carries conservation costs of 5 lakh rupees—a figure that surprised the archivists.

A singer in Purulia told me, "the songs live only when they are sung" (personal communication, [CHECK: date]). Figure 3.1 shows how quickly the archive grew.

<Figure 3.1 here>   [highlight]
Figure 3.1. [CHECK: caption with source and any required credit line]

Notes
1. See Ong (1982).

References
Ong, W. J. (1982). *Orality and literacy: The technologizing of the word*. Methuen.
Taylor, D. (2003). *The archive and the repertoire: Performing cultural memory in the Americas*. Duke University Press.
```

Files: `03_Chapter 3.docx`, `Figure 3.1.jpg` (plus alt text for Figure 3.1 in the format the EA requests).

### What the contrast shows

Bloomsbury prescribes the answer to almost every style question. Routledge asks for the author's own choices, held consistently, plus structural items that Bloomsbury does not require (abstract, ORCID, alt text, per-chapter files).

## Example 2. Converting one reference across systems

Source data: Valerie Steele, 'Anti-fashion: The 1970s', *Fashion Theory: The Journal of Dress, Body & Culture*, volume 1, issue 3, 1997, pages 279–96.

| System | Output |
|---|---|
| Bloomsbury author–date, in text | (Steele 1997: 281) |
| Bloomsbury author–date, references | Steele, V. (1997), 'Anti-fashion: The 1970s', *Fashion Theory: The Journal of Dress, Body & Culture*, 1 (3): 279–96. |
| Bloomsbury short-title, first note | 1. Valerie Steele, 'Anti-fashion: The 1970s', *Fashion Theory: The Journal of Dress, Body & Culture* 1, no. 3 (1997): 281. |
| Bloomsbury short-title, later note | 2. Steele, 'Anti-fashion', 283. |
| Bloomsbury bibliography | Steele, Valerie. 'Anti-fashion: The 1970s'. *Fashion Theory: The Journal of Dress, Body & Culture* 1, no. 3 (1997): 279–96. |
| Routledge (author's chosen style) | Apply that style exactly and add the DOI if the article has one: `[CHECK: DOI]`. Do not guess a DOI. |

The page numbers 281 and 283 are illustrative locators within the article's range.

## Example 3. Routledge abstract check

Input:

> In this chapter I look at how the NLA digitised its folk song holdings and why we think the work matters (see Ray 2019).

Output:

| Check | Result |
|---|---|
| Length | ✗ 24 words; needs 100–200 |
| Third person | ✗ 'I', 'we' found; rewrite as 'This chapter examines …' |
| Abbreviations | ✗ 'NLA'; write the name in full |
| Citations or notes | ✗ '(see Ray 2019)'; remove from the abstract |
| Heading and placement | ? Not visible in the excerpt; place under 'Abstract' after the ORCID iD |

## Example 4. Routledge file-name check

| Proposed name | Result |
|---|---|
| `01b_Chapter 1.docx` | ✓ |
| `Figure 2.1 Map of tea gardens in Assam, 1920.jpg` | ✗ caption in name; 44 characters; comma. Use `Figure 2.1.jpg` |
| `Ch3_final_FINAL_v2(2).docx` | ✗ special characters ( ); version labels. Use `03_Chapter 3.docx` and send one version |
| `Fig 3.1.tif` | ✗ does not match the callout `<Figure 3.1 here>`. Use `Figure 3.1.tif` |

## Example 5. Bloomsbury contributor biography

Input:

> Dr. Ananya Sen (ananya@uni.edu) is currently working as an assistant professor at the Department of English, University of Somewhere, where she teaches courses on many topics. Her books include Archives of Song (Routledge, London, 2021).

Output (UK English):

> **Ananya Sen** is Assistant Professor in the Department of English at the University of Somewhere, [CHECK: country]. Her books include *Archives of Song* (2021).

Changes: name bold, without the honorific or email address (following the guide's own template); current position first with the job title capitalized; vague filler removed; publication given with year only; under 100 words. (Fictional person.)
