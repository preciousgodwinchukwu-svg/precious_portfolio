# DIRECTION SHEET — The name as a monument
seed 683478939 · drawn 2026-10-20 · redraws: 2 · sector personal-portfolio · tone editorial
Brief: Precious Godwin Chukwu social media manager and content strategist with green cream illustrated logo and real campaign designs

| | |
| --- | --- |
| Direction | The name as a monument |
| Hero | Stacked name, two inks |
| Type | Hanken Grotesk |
| Colour | kept from the brand |
| Sections | work (Oversized visual, small cluster) → features (One-size name columns) → about (Side facts, wide paragraph) → contact (The email as display type) → footer (Name first, places under it) |
| Motion | Masked headline |
| Photographs | the "Forest" set, as atmosphere |

This is the direction for this build. Adopt it. Do not blend it with the layout you would have made anyway,
and do not redraw because it is unfamiliar: unfamiliar is the point. Redraw a slot only when it conflicts
with a stated brand constraint or needs an asset that does not exist, and say why in your report.

The parts of this sheet were written separately and will disagree in small ways. Settle every disagreement in this order:
**house rules** (including type no smaller than 13px and body text of 16px or more) → **the direction** (the idea, the composition habits, where the
one accent goes) → **the type system and the palette** (which face does which job, the five size steps, which colour is the ground and where the
accent goes) → **the hero blueprint** → **the section blueprints**. Under each blueprint below, "Adjusted for this page" lists where it disagrees.
In practice: take geometry from blueprints (columns, proportions, what sits where) and take everything else from above them. Map every size a
blueprint names onto one of your five type steps instead of adding a sixth. Use one button shape, one corner radius and one pair of page margins on
the whole page, whatever individual blueprints say. If a blueprint names a kind of typeface (a light serif, a heavy grotesk), use the dealt face.

## 1. The idea
The name is the headline. Set it so large that it becomes architecture: as wide as the viewport, cropped by an edge, or stacked to fill the screen. Nothing else on the first screen competes; the description of what this is drops to a single small sentence. The idea comes from treating the name's letters as material. Ask what the subject can do to its own name: a photograph of the work sits inside a counter or replaces a letter, the name repeats down the page like a reel, the letters are split to opposite corners and the page happens between them. In the study this was the single most common device among sites scoring 7.5 or more.

Before anything else, write one sentence in your notes: "On this page, <the subject's own material> becomes <the device>."
Fill the first blank from your inventory of what only this client has (its name and what it means, its street, its numbers, its
constraint), then put the nearest competitor in the sentence: if it still works, the idea is the category's, not the client's.
Then name the one live thing the visitor can do on the page (SKILL.md step 4).

## 2. Composition
First screen: the wordmark spans 88–100% of the viewport width (font-size 16–24vw, set with a clamp so it never wraps), anchored either to the bottom edge with its descenders nearly touching it, or dead centre with everything else pushed to the corners. One line of supporting text at 16–20px sits in a corner on a shared margin; navigation is three or four words in the opposite corner. After the hero the page is deliberately small and calm: a narrow text column or a simple two-column grid, so the contrast with the monument holds. The name returns once more at full width as the footer, in the inverse colours. Margins are tight (20–32px) so the type reaches the edges. Two type sizes do nearly all the work: the monument and a small text size, with one mid size for section headings.

## 3. Type — Hanken Grotesk
Medium-weight grotesk statements at one large size against caption-size text: a two-size system with no bold. Suits portfolios, agencies and tools that speak in short declarative lines.
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500&display=swap" rel="stylesheet">
```
- Display: **Hanken Grotesk** — weight 500 · tracking -0.05em · leading 0.9 · sentence case; one statement size (about 6vw) used for every heading
- Text: **Hanken Grotesk** — 400 for body, 500 for emphasis · leading 1.45 · tracking -0.005em
```css
:root {
  --step-small: clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem);
  --step-body: clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem);
  --step-lead: clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem);
  --step-head: clamp(2rem, 1.3rem + 3.2vw, 4rem);
}
```
One family. The display cut must survive enormous sizes: tight tracking (-0.04 to -0.07em), leading 0.8–0.9, optical kerning on. Section headings are modest (28–40px) on purpose.
The direction decides sizes and how many of them; the type system decides how this face is set. Where the two give different tracking or leading, use the values of the type system: they are tuned to this face.
The display size itself comes from the hero blueprint below.

## 4. Colour
Kept from the brand. Two values carry the page (ground and ink). The accent, if used at all, appears on one thing only: the single action or the inset image frame. The footer inverts ground and ink.

## 5. Imagery
**Use the images that belong to the project in every picture slot.** For slots they cannot fill, real pictures of the subject's world from the open collections come next (start with `node C:/Users/hp/.codex/skills/taste-skill/scripts/assets.mjs "media manager"`, then queries from your inventory (its street, its materials, its trade's tools and history); credit them on the page), then the dealt photographs.

Few images, used as inserts in the typography rather than as illustrations beside it: one photograph inside or behind the name (a 4:5 or 1:1 frame replacing a letter, or tucked between two words), then a short run of large full-width or half-width photographs further down. Square corners. No collage of small thumbnails.

**Floor (the inspector checks it):** at least four real pictures on the page, usually six to twelve; SVG drawings do not count. One moving picture where an honest clip exists: `node <skill>/scripts/assets.mjs --video "<query>"`, used as a muted loop with a poster frame. Whatever this direction says about pictures, it is carried out with real ones.

Photographs dealt for this build, from the "Forest" set (woodland, paths between trees, moss and filtered light)
Order of preference for imagery: (1) the project's own photographs and product shots; (2) images you generate, if an image tool is
available; (3) real pictures of the subject's world found in the open collections (assets.mjs, downloaded and credited on the page);
(4) drawings of the subject in code; (5) these. They are real photographs (Unsplash licence, served by picsum.photos) of places, light and
texture. They are atmosphere, never a stand-in for a specific product, dish, person or interface. List the ones you use in your report so
they can be replaced.
- `https://picsum.photos/id/704/1600/1000` — Upward view of tall bamboo stems converging in a green canopy · dark tone · dark green, green, black · native landscape · photo: Ståle Grut
- `https://picsum.photos/id/10/1600/1000` — Dense evergreen forest with a blue lake and distant hills beyond · mid tone · deep green, teal blue · calm area: top · native landscape · photo: Paul Jarvis
- `https://picsum.photos/id/216/1600/1000` — Narrow dirt trail through mossy green woodland · mid tone · moss green, brown · native landscape · photo: Paul Jarvis
- `https://picsum.photos/id/944/1600/1000` — Wooden footbridge with railings leading into lush green forest · dark tone · deep green, warm brown, grey · native landscape · photo: Tim Swaan
- `https://picsum.photos/id/924/1600/1000` — Aerial view of autumn forest with orange and dark green treetops · dark tone · burnt orange, dark green · native landscape · photo: Jakub Sejkora
- `https://picsum.photos/id/919/1600/1000` — Tall straight pine trunks above a bright green forest floor · mid tone · fresh green, red brown, dark brown · native landscape · photo: Jon Ottosson
- `https://picsum.photos/id/229/1600/1000` — Path through tall pine trees fading into blue-grey fog · dark tone · blue grey, dark green · native landscape · photo: Orlova Maria
- `https://picsum.photos/id/498/1600/1000` — Upward view of towering redwood trunks converging toward the canopy · mid tone · green, reddish brown · native landscape · photo: Kim Daniel
The last two path numbers are width and height: request the exact crop you render (`/1200/1500` for a 4:5 portrait, `/2400/1350` for a hero) and
add `?grayscale` to desaturate. Use three to six of them, not all eight. Always set `width`, `height`, `alt` and `loading="lazy"` (not on the hero image).
Other sets that fit this brief: architecture, plants-and-flowers, field-and-farm, people — `node draw.mjs --photos <set>` prints one in full; `--photos list` shows all sets. Taking photographs from another set is your call and is not a redraw; keep them to one light and one treatment.

## 6. Hero — Stacked name, two inks
One saturated flat field covers the whole 1440×900 viewport and there is no image. The name is broken into two lines and set flush left from a 40px margin at clamp(110px, 15vw, 230px), heavy weight, tracking -0.04em, line-height 0.82 so the lines almost touch. The block starts 14% down and fills the top 58% of the screen; the longer line reaches at least column 11. Line one is set in the light ink and line two in the dark ink, so the break reads as a change of voice: split a two-word name between the lines, or break one long name with a hyphen at a syllable. The top edge carries only small text at 15px, 24px in: a monogram top-left, and two or three text links plus the single action as an underlined link top-right. The supporting sentence, 18px in the light ink and max 30ch, is right-aligned in the bottom-right corner on columns 9–12, its last line 40px above the bottom edge. The bottom-left corner stays empty. The next section begins as a different flat field exactly at the fold.

On a phone: The field fills 100svh. The name keeps its two lines and two inks at 21vw, flush left at a 16px margin, starting 18% down; a long name hyphenates rather than dropping below 18vw. The supporting sentence moves to the bottom-left at 16px across the full width, with the action as an underlined link beneath it, 24px above the bottom edge. The top-right links reduce to one word.
Headline: The name on exactly two lines, one per ink, each line up to about 8 characters at 15vw on desktop and 21vw on a phone.

Adjusted for this page:
- Its action is a text link: the primary action on the first screen is a real button (filled or solid-bordered, 44px or taller), placed where the blueprint puts the link. A second action may stay a link.

## 7. Sections, in order
Each is a composition to rebuild with this project's content. Keep the geometry; change the subject. Re-order or drop a
section when the argument of the page needs it (see references/copy.md), never to fall back to a card grid.

### 1. work — Oversized visual, small cluster (split)
One project per block, three or four blocks, 140px apart. In each, one oversized visual fills columns 1–7 and bleeds off the left viewport edge: an object photograph scaled to 120% of its box and cropped by `overflow: hidden` on the section, 80svh tall, sitting on the page ground (use `mix-blend-mode: multiply` on a light ground so a white studio background disappears). The right third, columns 9–12, holds a small cluster bottom-aligned with the visual: a landscape image at 16:10 with 6px corners, then 28px below it a two-column row with the project title at clamp(28px, 3vw, 44px) on two lines at the left and a five-line description at 13–14px at the right. Column 8 stays empty. Blocks do not mirror; the second visual is 60svh tall and the third 90svh, so the rhythm changes while the structure holds. No section heading: each title leads its block.
On a phone: The visual comes first at 110% of the width, bleeding off the left edge in a 4:5 crop. Beneath it the title at 8vw, then the description at 15px, then the small landscape image at 70% width against the right margin. 88px between blocks.

### 2. features — One-size name columns (index)
Pure text at one size. Three columns start on columns 1, 4 and 7 of the 12-column grid, leaving columns 10–12 empty on purpose. Each column opens with a group name in full ink and continues with a tight stack of six to ten capability names in the soft ink, all at 16–17px, regular weight, line-height 1.25, no bullets and no symbols; one blank line separates group name from stack. Hovering a name brings it to full ink and shows a one-line description in a fixed spot: the top of the empty columns 10–12, at the same size. The heading is no larger than 28px; two or three words, alone on column 1, 96px above the columns. Give the section 20vh of empty ground above and below, so the smallness reads as decided. Works on light or deep grounds.
On a phone: Columns stack with 40px between groups; text rises to 18px with line-height 1.4 for touch. Group names stay in full ink. Hover descriptions are dropped; each group ends instead with one sentence in the soft ink that sums it up. The heading is 24px, 48px above.

### 3. about — Side facts, wide paragraph (table)
Two rows share one vertical line at 34% of the viewport width. Row one: in a 160px column at the left margin, three label and value pairs stack with 20px between them, each a label in the soft ink with its value beneath in full ink, all at 13px (founded, based in, team size). From the 34% line a five-line paragraph at clamp(20px, 1.7vw, 26px), leading 1.35, runs to 90% of the width. Row two starts 120px lower and repeats the logic for the record of the practice: one plain word at 13px at the far left (awards, press, clients), then from the 34% line two list columns, each 260px wide with a 64px gutter, at 13px with 10px between lines: name at the left, year at the right in the soft ink. No heading; the paragraph opens the section. Each list comfortably holds 6–12 lines. No photographs are needed.
On a phone: Everything aligns to the left margin. The paragraph comes first at 19px. The three label and value pairs follow as a two-column grid at 14px. The two record lists stack with 40px between them, each opened by its plain word in full ink.

### 4. contact — The email as display type (statement)
The section is 100svh in the inverse of the page's colours. A single email address is set as one line of display type spanning the content width: the font-size is fitted so the address runs from margin to margin (about 7–9vw for 20 characters; break after the @ onto two lines if it is longer than 26), light or regular weight, tight tracking, sitting on a baseline 12vh above the bottom edge. It is a `mailto:` link; on hover the whole line takes the accent ink. In the top-left corner, a sentence of up to 12 words at 20–22px says what to write about. In the two bottom corners at 14px: phone and city at the left, two or three social links at the right. No heading and no form. For a pinned ending, make the section `position: sticky; bottom: 0` beneath the page so the previous section lifts off it.
On a phone: The address breaks after the @ onto two lines at 11.5vw, left-aligned, sitting at 55% of an 86svh screen. The sentence sits at the top-left at 18px. Phone, city and social links stack at the bottom-left at 15px with 12px between them.

### 5. footer — Name first, places under it (list)
The wordmark opens the footer instead of closing it. On a full-bleed field in the page's inverse or final chapter colour, the name spans the full content width as the first thing, its cap line pushed 8% above the footer's top edge so the tops of the letters are sliced off by the section (`overflow: hidden` and a negative top margin in `em`). 72px beneath, a two-part row: columns 1–5 list the places or ways to reach the studio (cities, or email and telephone), one per line at 32–36px in the accent ink, each a link; columns 7–12 hold three columns of small links at 15px, top-aligned with the first place. A final row 96px lower carries the legal line at the left and a back-to-top text link at the right, both 13px. The field is about 90svh tall, and nothing sits between the wordmark and the row but space.
On a phone: The sliced wordmark stays at the top, fitted to the width. Places follow as a list at 26px, then the link columns two across at 15px. Legal line and back-to-top link share the last row at 12px, at opposite margins.

Adjusted for this page:
- It sets text at 12px: use your small step (13px or more) instead.
- It crops letters along their top: the inspector fails that (jurors read it as broken). Crop at the bottom edge or a side instead.

## 8. Motion — Masked headline
On load, each line of the headline rises from behind its own baseline, about 900ms with a strong ease-out, the second line 110ms after the first; the supporting sentence and the action then fade up together. Nothing else on the page performs. Because headlines are two lines at most, you author the line breaks and wrap each line yourself. Recipe: 'Masked line reveal' in references/motion.md.
This is the signature move, the one loud moment. Around it the page still needs the rest of the motion layer (SKILL.md step 9): an entrance for the parts of every section, feedback on every control, and one moving picture. The inspector fails a page that barely moves. Recipes: references/motion.md.

## 10. Where the richness comes from
Scale. The size of the name against the smallness of everything else is the entire visual event, so protect both ends: do not shrink the name to make room, and do not let body text creep above 20px.

## 11. How this direction goes wrong
A long name set small is just a logo. If the name has more than about 12 characters, stack it on two lines or crop it with the viewport edge; never drop below 12vw. Do not add a second big headline under the name. Do not decorate the letters.

## 12. Real references
Studied sites that work this way. Take the principle, never the specifics: no names, copy, images or signature assets of theirs.
- **Kereliott** (One Page Love, studied score 7.3) `opl-kereliott`
  Idea: A quiet house gets a quiet page: one dark field, one typeface, the name set as wide as the screen and photographs left to drift in generous darkness.
  Hero: Very dark green-black field with cream type. A two-line introductory sentence at about 30px sits top-left inside 30px margins; a small cream rectangular button sits top-right. The upper half is otherwise empty. The house name fills the full content width in a flared humanist sans, mixed case, with capitals about 19vw tall, its baseline at roughly 87% of the viewport height. Immediately beneath, separated by a gap of a few pixels, the top sliver of a full-width landscape photograph enters from the bottom edge.
  Worth taking: Size the wordmark to fill the content width exactly and let the first photograph tuck directly under its baseline.
- **NOTHIN’** (Awwwards Site of the Day, studied score 7.4) `aww-nothin`
  Idea: The studio's name set as a wordmark so large it is the whole hero, repeated in inverted colours as the footer, so 'nothing' is literally the only content on screen.
  Hero: The captured hero frame is a black preloader wipe; this describes the loaded state. White field. A custom heavy geometric wordmark in black spans the full width between 1% margins, vertically centred, about 30% of the viewport tall, its apostrophe hanging at the top-right. Top-left: a two-line statement at about 1.6vw with a small black pill button under it. Top-right: a tiny menu label with a four-dot icon. Along the bottom edge: a one-line studio descriptor at left, two social links and a language chip at right. Everything else is empty white, with no image and no colour.
  Worth taking: Make the hero nothing but the name: a wordmark scaled to the full viewport width on a blank field, with only a two-line statement and one small button in a corner.
- **bleibtgleich’26** (Awwwards Site of the Day, studied score 7.5) `aww-bleibtgleich26`
  Idea: One thin vertical rule runs down the page and a tight bold grotesk sentence wraps around it, words stepping from one side of the line to the other.
  Hero: White page, black type. Content sits in a narrow band between 26% and 68% of the width. A 1px vertical rule drops from the top edge at 37% for two-thirds of the height. Left of it: a black blob avatar at the top, a tiny role caption at its foot. Right of it: a tiny location note at the top, the name in two lines of 90px medium grotesk at the bottom. The tagline continues below at the same size, flush to the band's left edge, running past the fold. The upper half is otherwise blank. The handle is split into two pale-grey words fixed in the bottom corners; a black menu pill sits top-right.
  Worth taking: Draw one 1px vertical rule and typeset a large sentence around it, alternating words to either side so the line becomes the text's spine.
Full notes on any of them: `node draw.mjs --site <id>`.

## Always
Headlines two lines or fewer at every width. No eyebrow labels, no monospace, no 01/02/03, no thin rules, no gradients, no shadows at rest,
no cream-and-terracotta, no violet. The frame: one h1 on the first screen that says what this is, equal outer margins, no
section huddled on one side with the other half empty, no blank stretch over half a screen, a heading on every section.
`inspect.mjs` measures all of it.

Saved to C:/Users/hp/OneDrive/Documents/portfolio/.taste-skill/direction.json · reprint with `node draw.mjs --show`
