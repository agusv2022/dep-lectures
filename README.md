# DEP Lectures

A small, simple, reading-focused static site for the **Data Exploration &
Preparation** module (DIPDAB Sep26 cohort, CCT College Dublin). It turns the
lecture slides into clean, readable pages — no roadmap, no checklists, no
file downloads, just the lecture content laid out for reading and
understanding.

Live site: https://agusv2022.github.io/dep-lectures/

## Structure

- `index.html` — module overview + links to the four lectures.
- `lectures/01-introduction-to-data.html` — what data is, variables,
  observations, attributes, data types, primary vs. secondary data, data
  acquisition, version control (Git/GitHub).
- `lectures/02-data-management-and-eda.html` — the data lifecycle,
  consistency, data dictionaries, data quality, GDPR/ethics, statistical
  properties, univariate/bivariate/multivariate analysis.
- `lectures/03-exploratory-data-analysis.html` — EDA's purpose and methods,
  CRISP-DM, SEMMA.
- `lectures/04-data-cleaning.html` — missing data, drop/replace/impute/flag,
  and a worked example spotting problems in a tiny messy dataset.

No build step — plain HTML/CSS/JS. Edit a lecture file directly to tweak its
content; add a new `<section>`/`<h2>` and an entry in its "On this page"
list to extend it.

## Running locally

```bash
python -m http.server 8766
```

Then open http://localhost:8766.

## Note on course materials

This site does not host the original lecture PDFs (CCT College Dublin
copyrighted material) — only original reading notes written from them.
