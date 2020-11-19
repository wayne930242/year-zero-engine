# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.14.6] - 2020-08-05

#### :bug: Bug Fix

- `docusaurus-1.x`

  - [#3213](https://github.com/facebook/docusaurus/pull/3213) fix(v1): fresh install failing due to <> syntax ([@slorber](https://github.com/slorber))

#### :memo: Documentation

- [#3186](https://github.com/facebook/docusaurus/pull/3186) docs(v1): formatting changelog ([@slorber](https://github.com/slorber))

#### Committers: 1

- Sébastien Lorber ([@slorber](https://github.com/slorber))

## [1.14.5] - 2020-08-01

#### :rocket: New Feature

- `docusaurus-1.x`
  - [#2955](https://github.com/facebook/docusaurus/pull/2955) feat(v1): add deletedDocs config to fix unwanted versioning fallback ([@aldeed](https://github.com/aldeed))
  - [#3124](https://github.com/facebook/docusaurus/pull/3124) feat(v1): add 'slugPreprocessor' config option to allow users customize the hash links ([@Simek](https://github.com/Simek))

#### :memo: Documentation

- `docusaurus-1.x`
  - [#2955](https://github.com/facebook/docusaurus/pull/2955) feat(v1): add deletedDocs config to fix unwanted versioning fallback ([@aldeed](https://github.com/aldeed))
  - [#3011](https://github.com/facebook/docusaurus/pull/3011) docs(v1): external links ([@slorber](https://github.com/slorber))
  - [#2388](https://github.com/facebook/docusaurus/pull/2388) docs(v1): showcase user Day.js ([@iamkun](https://github.com/iamkun))
  - [#2307](https://github.com/facebook/docusaurus/pull/2307) docs(v1): fix Windows instructions for GitHub Pages publishing ([@jartuso](https://github.com/jartuso))

#### Committers: 6

- [@aldeed](https://github.com/aldeed)
- [@Simek](https://github.com/Simek)
- [@slorber](https://github.com/slorber)
- [@iamkun](https://github.com/iamkun)
- [@jartuso](https://github.com/jartuso)

## [1.14.4] - 2020-01-12

#### :bug: Bug Fix

- `docusaurus-1.x`
  - [#2196](https://github.com/facebook/docusaurus/pull/2196) fix(v1): fix JSX highlighting by passing language to Prism ([@gaearon](https://github.com/gaearon))

#### :house: Internal

- `docusaurus-1.x`
  - [#2194](https://github.com/facebook/docusaurus/pull/2194) blog: tribute to Endi ([@JoelMarcey](https://github.com/JoelMarcey))
  - [#2163](https://github.com/facebook/docusaurus/pull/2163) blog: 2019 recap ([@yangshun](https://github.com/yangshun))
  - [#2087](https://github.com/facebook/docusaurus/pull/2087) fix(v1): add key to versions.map in versions.js ([@FeynmanDNA](https://github.com/FeynmanDNA))
  - [#2083](https://github.com/facebook/docusaurus/pull/2083) refactor(v1): fix props for ProjectTitle ([@FeynmanDNA](https://github.com/FeynmanDNA))

#### Committers: 6

- [@TransmissionsDev](https://github.com/TransmissionsDev)
- [@gaearon](https://github.com/gaearon)
- [@janko](https://github.com/janko)
- [@yangshun](https://github.com/yangshun)
- [@JoelMarcey](https://github.com/JoelMarcey)
- [@FeynmanDNA](https://github.com/FeynmanDNA)

## [1.14.3] - 2019-12-01

#### :bug: Bug Fix

- `docusaurus-1.x`
  - [#2063](https://github.com/facebook/docusaurus/pull/2063) fix: transpile static js to IE 10 ([@JLHwung](https://github.com/JLHwung))

#### :house: Internal

- `docusaurus-1.x`
  - [#2029](https://github.com/facebook/docusaurus/pull/2029) chore: bump deps and remove unused deps ([@endiliey](https://github.com/endiliey))

#### Committers: 2

- Endi ([@endiliey](https://github.com/endiliey))
- Huáng Jùnliàng ([@JLHwung](https://github.com/JLHwung))

## [1.14.2] - 2019-11-22

#### :bug: Bug Fix

- `docusaurus-1.x`
  - [#2028](https://github.com/facebook/docusaurus/pull/2028) fix(v1): apply negative margin to docs heading only ([@yangshun](https://github.com/yangshun))

#### :memo: Documentation

- [#2026](https://github.com/facebook/docusaurus/pull/2026) docs(v1): showcase user Channelize.io ([@gauravberiwal](https://github.com/gauravberiwal))

## [1.14.1] - 2019-11-21

#### :bug: Bug Fix

- [#2022](https://github.com/facebook/docusaurus/pull/2022) fix(v1): markdown content and toc should render the same ([@endiliey](https://github.com/endiliey))
- [#2020](https://github.com/facebook/docusaurus/pull/2020) fix(v1): docusaurus-start should work even if path contain 'pages' word ([@endiliey](https://github.com/endiliey))
- [#2019](https://github.com/facebook/docusaurus/pull/2019) fix(v1): consistent slug & hash-link generation ([@endiliey](https://github.com/endiliey))
- [#1869](https://github.com/facebook/docusaurus/pull/1869) fix(v1): fix page title render issue when referred by search result ([@parvezakkas](https://github.com/parvezakkas))
- [#1895](https://github.com/facebook/docusaurus/pull/1895) fix(v1): mobile safari search input misalignment in header ([@sarneeh](https://github.com/sarneeh))
- [#1871](https://github.com/facebook/docusaurus/pull/1871) misc(v1): use primary color for hovered items in table of contents ([@blitz137](https://github.com/blitz137))

#### :house: Internal

- [#1920](https://github.com/facebook/docusaurus/pull/1920) misc(v1): use Node.js lts version for docker ([@gengjiawen](https://github.com/gengjiawen))

#### :memo: Documentation

- [#1998](https://github.com/facebook/docusaurus/pull/1998) docs(v1): showcase user collective ([@kenning](https://github.com/kenning))
- [#1961](https://github.com/facebook/docusaurus/pull/1961) docs(v1): remove exclusive language ([@ericcarboni](https://github.com/ericcarboni))
- [#1873](https://github.com/facebook/docusaurus/pull/1873) docs: showcase user Amphora ([@xtellurian](https://github.com/xtellurian))
- [#1918](https://github.com/facebook/docusaurus/pull/1918) docs(v1): showcase user Reactive Interaction Gateway ([@mmacai](https://github.com/mmacai))
- [#1911](https://github.com/facebook/docusaurus/pull/1911) docs: updating configcat user link ([@mr-sige](https://github.com/mr-sige))
- [#1902](https://github.com/facebook/docusaurus/pull/1902) misc: update URLs to non-HTML versions ([@ikrydev](https://github.com/ikrydev))
- [#1901](https://github.com/facebook/docusaurus/pull/1901) docs(v1): remove broken link for user Vasern ([@ikrydev](https://github.com/ikrydev))

## [1.14.0] - 2019-10-20

**Added**

- feat: allow specifying meta desc in front matter ([#1859](https://github.com/facebook/docusaurus/pull/1859))

**Docs**

- docs: document docker is optional ([#1848](https://github.com/facebook/docusaurus/pull/1848))

## [1.13.0] - 2019-09-15

**Fixed**

- fix: content aligning breaks at IE11 ([#1684](https://github.com/facebook/docusaurus/pull/1684))
- fix: footer links margin ([#1781](https://github.com/facebook/docusaurus/pull/1781))
- feat: strip html from TOC ([#1762](https://github.com/facebook/docusaurus/pull/1762))

**Docs**

- docs: document what should be in .gitignore ([#1709](https://github.com/facebook/docusaurus/pull/1709))
- docs: change separateCSS to separateCss ([#1735](https://github.com/facebook/docusaurus/pull/1735))
- docs: fix documented type for the `cleanUrl` option ([#1775](https://github.com/facebook/docusaurus/pull/1775))
- docs: improve tutorial

## [1.12.0] - 2019-07-20

### Changes

**Added**

- feat: add "unlisted" front matter option for blog posts ([#1396](https://github.com/facebook/docusaurus/pull/1396))
- feat: use primary color for highlighted items in table of contents ([#1628](https://github.com/facebook/docusaurus/pull/1628))

**Chores**

- Upgrade a lot of dependencies to fix security vulnerabilities ([#1668](https://github.com/facebook/docusaurus/pull/1668))

**Fixed**

- fix: remove the `Container` component from the `docsNavContainer` ([#1599](https://github.com/facebook/docusaurus/pull/1599))
- fix: require babel dependencies directly ([#1575](https://github.com/facebook/docusaurus/pull/1575))
- fix: replace apostrophe with empty string in header slugification ([#1618](https://github.com/facebook/docusaurus/pull/1618))
- fix: wrong bootstrapped footer social links ([#1647](https://github.com/facebook/docusaurus/pull/1647))
- fix: PostCSS warning on `build` command ([#1664](https://github.com/facebook/docusaurus/pull/1664))
- fix: dont render html for meta description ([#1672](https://github.com/facebook/docusaurus/pull/1672))

**Docs**

- docs: fix reference to publishing steps ([#1613](https://github.com/facebook/docusaurus/pull/1613))
- docs: minor grammar fix in blog guide ([#1614](https://github.com/facebook/docusaurus/pull/1614))
- docs: Fix Rendering of <AUTOGENERATED_TABLE_OF_CONTENTS> Tag on API - Markdown Features Page ([#1617](https://github.com/facebook/docusaurus/pull/1617))
- docs: add Render hosting guide ([#1615](https://github.com/facebook/docusaurus/pull/1615))

## [1.11.1] - 2019-06-08

A bunch of dependency upgrades to resolve security issues.

## [1.11.0] - 2019-05-30

We added a new feature of highlighting the table of contents on the right side as you scroll the docs pages. A few bugs affecting local development were also fixed. More notably, the blog's left sidebar will not hide the post titles when `docsSideNavCollapsible` is turned on. This is a bugfix/backward-incompatible change depending on how you view it, but probably nobody wanted that collapsing behavior on the blog sidebar.

We also welcome @wgao19 to the core team! She'll be helping us with Docusaurus 2 work leveraging on her experience writing documentation and CSS!

### Changes

- fix: reload siteConfig.js automatically when locally served page is refreshed ([#1509](https://github.com/facebook/docusaurus/pull/1509))
- fix: don't collapse the blog navigation even if collapsible is true ([#1519](https://github.com/facebook/docusaurus/pull/1519))
- fix: enable live reloading title of doc ([#1507](https://github.com/facebook/docusaurus/pull/1507))
- feat: highlight nav item in onPageNav ToC ([#1524](https://github.com/facebook/docusaurus/pull/1524))

## [1.10.0] - 2019-05-21

This version mainly include many bug fixes and a new feature to use different `host` other than `localhost` through CLI flag.

Other than that, we also made some significant progress on **Docusaurus 2** development. In the near future, we'll be rolling out the alpha version publicly to maximize community participation and feedback. Please stay tuned :wink:

Thank you to following contributors:

- @endiliey
- @yangshun
- @zachbadgett
- @yangshun
- @endiliey
- @shakcho
- @Hongarc
- @qiu8310
- @jamesgeorge007
- @Alireza
- @TurekBot
- @wgao19
- @palmer-cl

### Main Changes

- feat: allow different host through CLI flag ([#1475](https://github.com/facebook/docusaurus/pull/1475))
- fix: docusaurus code tab logic by ([#1369](https://github.com/facebook/docusaurus/pull/1369)). This fixes [code tabs does not allow HTML comments within codeblock](https://github.com/facebook/docusaurus/issues/1260) and [Code tabs break numbered lists and cannot be indented](https://github.com/facebook/docusaurus/pull/1371).
- fix: add missing `markdownOptions` siteConfig feature to override remarkable options ([#1430](https://github.com/facebook/docusaurus/pull/1430))
- fix: right table of content does not render special characters ([#1458](https://github.com/facebook/docusaurus/pull/1458))
- fix(regression): missing CLI commands introduced in v1.8.0 ([#1478](https://github.com/facebook/docusaurus/pull/1478))
- fix: h3 topics with Markdown formatting causes a glitch on mobile ([#1467](https://github.com/facebook/docusaurus/pull/1467))
- fix: wrong url in next/prev button in some cases ([#1488](https://github.com/facebook/docusaurus/pull/1488))
- fix: content displayed on bottom of mobile viewport when TOC is active ([#1489](https://github.com/facebook/docusaurus/pull/1489))
- fix: mobile navigation should show deepest breadcrumb instead of outer ([#1493](https://github.com/facebook/docusaurus/pull/1493))

## [1.9.0] - 2019-4-29

In preparation of F8 where @yangshun will be holding a classroom session on building a Docusaurus site, we've added a tutorial to teach people how to create a versioned Docusaurus site.

We also revamped the `docusaurus-init` script such that the theme colors are random and you partnered with [unDraw](https://undraw.co/) to generate illustrations that match your theme color! Check it out!

The sidebar icon on mobile screens have been changed to a more conventional hamburger style icon which is more intuitive. If you customized that part, check if your site's layout broke because of it.

Lastly, welcome Pulsar, Mockit and React Testing Library as users!

Thank you to the following contributors:

- @endiliey
- @yangshun
- @Alan-Cha
- @ntucker
- @wilsonmar
- @NishealJ
- @Hongarc

### Fixed/Added

- docs: consistent badge style ([#1371](https://github.com/facebook/docusaurus/pull/1371))
- fix: prism syntax highlight .tsx properly ([#1391](https://github.com/facebook/docusaurus/pull/1391))
- feat: add tutorial ([#1381](https://github.com/facebook/docusaurus/pull/1381))
- feat: change icon for navToggle ([#1394](https://github.com/facebook/docusaurus/pull/1394))
- fix: blog docs example as object property ([#1403](https://github.com/facebook/docusaurus/pull/1403))
- docs: docs-examples-from-docusaurus is now installed as doc ([#1406](https://github.com/facebook/docusaurus/pull/1406))
- fix: upgrade underscore.string to 3.3.5 ([#1404](https://github.com/facebook/docusaurus/pull/1404))

## [1.8.1] - 2019-4-15

We accidentally published 2.0.0-alpha.5 as latest on npm. Please do not use that and instead use the 1.x version.

## [1.8.0] - 2019-3-30

This version mainly include bug fixes and a new feature to skip the next release documents when versioning is enabled.

Thank you to the following contributors:

- @yangshun
- @endiliey
- @vikrantsinghthakur
- @parthpp

### Fixed/Added

- feat: Add --skip-next-release option to yarn build ([#1292](https://github.com/facebook/docusaurus/pull/1292))
- fix: handle case insensitive table of contents token ([#1288](https://github.com/facebook/docusaurus/pull/1288))
- fix: anchors links for underscore character ([#1309](https://github.com/facebook/docusaurus/pull/1309))
- fix: autogenerated versions.js should not be confusing ([#1314](https://github.com/facebook/docusaurus/pull/1314))

### Internal

- Change Docusaurus landing page ([#1290](https://github.com/facebook/docusaurus/pull/1290))
- We restructured our repository as a monorepo ([#1297](https://github.com/facebook/docusaurus/pull/1297))
- We folded docusaurus versions (e.g: 1.1.0, 1.1.1, 1.1.2 -> 1.1.x) ([#1313](https://github.com/facebook/docusaurus/pull/1313))
- optimize docusaurus continuous integration ([#1308](https://github.com/facebook/docusaurus/pull/1308))

## [1.7.3] - 2019-3-19

This version mainly includes bug fixes found in 1.7.0 that improves stability.

Thank you to the following contributors who helped with this release:

- @zpao
- @jeromesimeon
- @yangshun
- @bartanthonissen
- @YoshinoriN
- @marvinchin
- @sinchange
- @githubsaturn
- @fiennyangeln
- @ahtee
- @endiliey
- @ael-mas
- @natemago
- @co16353sidak
- @CPSTL
- @alexkrolick

### Fixed/Changed

- Update code.facebook.com links to appropriate new destination ([#1224](https://github.com/facebook/docusaurus/pull/1224))
- docs: showcase user accord-project ([#1225](https://github.com/facebook/docusaurus/pull/1225))
- fix: change mainContainer padding to align with sidebars
- docs: mention about CNAME option in publishing docs ([#1227](https://github.com/facebook/docusaurus/pull/1227))
- docs: add ScanTrust to users ([#1228](https://github.com/facebook/docusaurus/pull/1228))
- chore: upgrade husky to 1.3.1 ([#1229](https://github.com/facebook/docusaurus/pull/1229))
- Remove more references to code.facebook.com ([#1231](https://github.com/facebook/docusaurus/pull/1231))
- fix: use clean url for og:url when cleanUrl is true ([#1242](https://github.com/facebook/docusaurus/pull/1242))
- fix: hovering algolia logo break its background color ([#1240](https://github.com/facebook/docusaurus/pull/1240))
- docs: update CaptainDuckDuck to CapRover ([#1244](https://github.com/facebook/docusaurus/pull/1244))
- chore: rename siteConfig.js to docusaurus.config.js ([#1245](https://github.com/facebook/docusaurus/pull/1245))
- fix: make referenced links work with code block tabs ([#1249](https://github.com/facebook/docusaurus/pull/1249))
- docs: showcase user Scalafmt ([#1250](https://github.com/facebook/docusaurus/pull/1250))
- fix: wrong sidebar_label and title on versioned_docs ([#1265](https://github.com/facebook/docusaurus/pull/1265))
- docs: update api-pages.md to document about overriding default styles ([#1266](https://github.com/facebook/docusaurus/pull/1266))
- fix: upgrade jest to remove security vulnerability ([#1276](https://github.com/facebook/docusaurus/pull/1276))
- docs: showcase user Microkubes ([#1274](https://github.com/facebook/docusaurus/pull/1274))
- docs: showcase user Twirp ([#1275](https://github.com/facebook/docusaurus/pull/1275))
- docs: add Polymath to users ([#1276](https://github.com/facebook/docusaurus/pull/1276))
- fix: relative path markdown linking on versioned docs ([#1281](https://github.com/facebook/docusaurus/pull/1281))
- fix(codetabs): fix key warning ([#1284](https://github.com/facebook/docusaurus/pull/1284))

## [1.7.2] - 2019-1-28

Minor fixes and improvements to some of the features introduced in 1.7.0.

### Fixed/Changed

- fix: horizontal overflow in collapsible sidebar ([#1205](https://github.com/facebook/docusaurus/pull/1205))
- fix: docs asset links should follow specified docsUrl ([#1204](https://github.com/facebook/docusaurus/pull/1204))
- fix: make search bar taller on widescreen ([#1210](https://github.com/facebook/docusaurus/pull/1210))
- fix: change sidebar chevron icon to use svg ([#1211](https://github.com/facebook/docusaurus/pull/1211))

## [1.7.1] - 2019-1-24

**HOTFIX**

`imagemin` got pushed down into developer dependencies, breaking the build. This fixes that.

### Fixed/Changed

- fix: revert image-min back to dependencies ([#1201](https://github.com/facebook/docusaurus/pull/1201))

## [1.7.0] - 2019-1-23

It's the first release of the year! We've fixed a number of layout bugs and shipped a few significant new features such as:

- Collapsible sidebar - Especially useful for pages with long list of items.
- Language-specific Code Tabs - Great for documentations that target multiple languages.

We also welcome a ton of new users: Node Serialport, TypeGraphQL, React Native Sensors, FBT, KaTeX, Redux, and React Leaflet.

Thank you to the following contributors who helped with this release:

- @teimurjan
- @ahmadalfy
- @mikeattara
- @19majkel94
- @jrwats
- @haoqiang
- @zkochan
- @marvinchin
- @YifanM
- @SimenB
- @zakariaharti
- @tsmrachel
- @fiennyangeln

### Fixed/Changed

- fix: edit url should support versioned subdirectories ([#1154](https://github.com/facebook/docusaurus/pull/1154))
- fix: gap on mobile devices when scrolling ([#1157](https://github.com/facebook/docusaurus/pull/1157))
- chore: update imagemin and its dependencies ([#1162](https://github.com/facebook/docusaurus/pull/1162))
- fix: pass docusaurus-publish cli args to build command ([#1185](https://github.com/facebook/docusaurus/pull/1185))
- fix: missing default value for grid block content objects ([#1186](https://github.com/facebook/docusaurus/pull/1186))
- fix: add margin-bottom: 0 to blog post author ([#1193](https://github.com/facebook/docusaurus/pull/1193))
- fix: wrong padding for single row mobile nav ([#1191](https://github.com/facebook/docusaurus/pull/1191))

### Added

- feat: collapsible categories ([#1128](https://github.com/facebook/docusaurus/pull/1128))
- feat: code block tab ([#1063](https://github.com/facebook/docusaurus/pull/1063))

## [1.6.2] - 2018-12-7

Hotfix for 1.6.1. We overlooked a critical bug caused by hardcoded path on PR [#1143](https://github.com/facebook/docusaurus/pull/1143). Please upgrade to 1.6.2, we are going to npm deprecate 1.6.1.

## [1.6.1] - 2018-12-7

This version mainly includes bug fixes found in 1.6.0 that improves stability.

Thank you to the following contributors who helped with this release:

- @endiliey
- @jakebolam
- @JoelMarcey
- @morleym
- @thecodechef
- @tsmrachel

### Fixed/Changed

- Fix docusaurus-version compilation error for subdirectory ([cb1395](https://github.com/facebook/docusaurus/commit/cb1395ee29364866767e3e6e701d4e1575dad4cc))
- Fix relative path markdown linking ([#1138](https://github.com/facebook/docusaurus/pull/1138))
- Fix static files in `blog/assets` not working ([#1143](https://github.com/facebook/docusaurus/pull/1143))

### Added

- Allow custom commit message for publish-gh-pages ([#1136](https://github.com/facebook/docusaurus/pull/1136))

## [1.6.0] - 2018-12-1

This releases includes few bug fixes and features. One notable feature allows user to change/remove `docs` prefix from the generated docusaurus URL.

Welcome to our newest users, [React-Slate](http://react-slate.surge.sh/), [Hemera](https://hemerajs.github.io/hemera/), [React-Redux](https://react-redux.js.org/), [Spectrum](https://libspectrum.io/), [TorchCraftAI](https://torchcraft.github.io/TorchCraftAI/), and [Haul](https://callstack.github.io/haul/).

Thank you to the following contributors who helped with this release:

- @yangshun
- @endiliey
- @JoelMarcey
- @andrewShillito
- @kahkhang
- @domcorvasce
- @ellereeeee
- @maxaggedon
- @gianlucadonato
- @tsmrachel
- @Shriram-Balaji
- @noraj
- @alexperez
- @wgao19

### Fixed/Changed

- Live reload not working on second try ([#1103](https://github.com/facebook/docusaurus/pull/1103))
- Fix missing TOC on i18n pages ([#1119](https://github.com/facebook/docusaurus/pull/1119))
- Fix docusaurus-version not working for subcategory in sidebar ([#1124](https://github.com/facebook/docusaurus/pull/1124))
- Fix docusaurus-version to allow duplicate id in different subdirectory ([#1125](https://github.com/facebook/docusaurus/pull/1125))

## Docs

- Add guide on setting custom docs path ([#1098](https://github.com/facebook/docusaurus/pull/1098))
- Document that `website` folder can be renamed ([#1106](https://github.com/facebook/docusaurus/pull/1106))
- Specify markdown flavor ([#1118](https://github.com/facebook/docusaurus/pull/1118))

### Added

- Allow modifying/removing `docs` route in generated url ([#914](https://github.com/facebook/docusaurus/pull/914))
- Use `sidebar_label` in addition to `title` for prev/next button ([#1122](https://github.com/facebook/docusaurus/pull/1122))
- Warn the users if any unresolved markdown links ([#1116](https://github.com/facebook/docusaurus/pull/1116))
- Customizable search placeholder ([#1126](https://github.com/facebook/docusaurus/pull/1126))

## [1.5.1] - 2018-11-03

A release where we had many external contributors! Very excited to see the community being involved in the project.

Welcome to our newest users, Create React App, Stackery, Vasern, Noderize, React 360 and Formik.

Thank you to the following contributors who helped with this release:

- @yangshun
- @endiliey
- @JoelMarcey
- @tanhauhau
- @fiennyangeln
- @vikr01
- @alexdriedger
- @hobofan
- @bildungsroman
- @tirthbodawala
- @M4rk9696
- @sinodko
- @aenuros
- @SleepWalker
- @pdyx2828
- @phated
- @huguestennier
- @gtoprak
- @Rajekevin
- @sunitasen
- @shahednasser

### Fixed/Changed

- Throw error when forgot to pass in GIT_USER ([#1035](https://github.com/facebook/docusaurus/pull/1035))
- Exclude file movements for last updated time ([#1023](https://github.com/facebook/docusaurus/pull/1023))
- Update support for Web App Manifest ([#1046](https://github.com/facebook/docusaurus/pull/1046))
- Render proper HTML instead of raw markdown in og:description ([#1054](https://github.com/facebook/docusaurus/pull/1054))

### Added

- New feature of displaying the last contributor to each document ([#980](https://github.com/facebook/docusaurus/pull/980))
- Document how to add "Copy" button to code blocks ([#1047](https://github.com/facebook/docusaurus/pull/1047))
- Support reference-style linking in documents ([#1048](https://github.com/facebook/docusaurus/pull/1048))
- Add caption to user page links ([#1075](https://github.com/facebook/docusaurus/pull/1075))

### Removed

## [1.5.0] - 2018-10-13

This version introduces a big improvement to the sidebar, where you can now have subcategories.

Welcome to our newest user, [Skip](http://skiplang.com).

Thank you to the following contributors who helped with this release:

- @endiliey
- @yangshun
- @JoelMarcey
- @tom-auger
- @muuvmuuv
- @DABH
- @Atul9
- @fiennyangeln
- @amyrlam
- @ersul4ik
- @WillBrock
- @third774
- @tanhauhau

### Fixed/Changed

- Use dark mode color scheme for footer like button ([#959](https://github.com/facebook/docusaurus/pull/959))
- Fix highlightjs custom highlighting function ([#1016](https://github.com/facebook/docusaurus/pull/1016))

### Added

- Live reload port fallback if port is used ([#899](https://github.com/facebook/docusaurus/pull/899))
- Added option for client to include their own remarkable config ([#974](https://github.com/facebook/docusaurus/pull/974))
- Enabled subcategories in sidebar ([#892](https://github.com/facebook/docusaurus/pull/892)) ([#1026](https://github.com/facebook/docusaurus/pull/1026))
- Add keyboard shortcut to focus on search box ([#1028](https://github.com/facebook/docusaurus/pull/1028))

### Chore and Maintenance

- Upgrade to babel 7 for v1 ([#995](https://github.com/facebook/docusaurus/pull/995))
- Fix typo in Getting Started docs ([#1013](https://github.com/facebook/docusaurus/pull/1013))
- Reorganized siteConfig ([#1027](https://github.com/facebook/docusaurus/pull/1027))

## [1.4.0] - 2018-09-11

Welcome to our newest users, [FuseBox](https://fuse-box.org) and [Bowler](https://pybowler.io).

Thank you to the following contributors who helped with this release:

- @endiliey
- @joelmarcey
- @yangshun
- @ericnakagawa
- @notlmn
- @nchanged
- @sbansal3096
- @notjaril
- @tirthbodawala
- @wszgxa
- @EthanMarrs
- @fiennyangeln
- @ashwini0529

### Fixed/Changed

- Fix nested `static` in `static` folder breaks build ([#953](https://github.com/facebook/docusaurus/pull/953))
- Fix `cleanUrl` transformation unintentionally removing extension ([#923](https://github.com/facebook/docusaurus/pull/923))
- Fix conflicting strings in translations ([#917](https://github.com/facebook/docusaurus/pull/917))
- Header navigation now links to `blog/`, not `blog` ([#936](https://github.com/facebook/docusaurus/pull/936))
- Fix button wrapping behavior on mobile ([#921](https://github.com/facebook/docusaurus/pull/921))
- Fix wrong header navigation linking to a doc without translation ([f1daddb](https://github.com/facebook/docusaurus/commit/f1daddb5f9a2965b45045ad9ef8f7a4494b71e30))
- Fixed navigation so that it takes full width on a docs ([#935](https://github.com/facebook/docusaurus/pull/935))

### Added

- Allow user to add `last updated time` info on doc ([#913](https://github.com/facebook/docusaurus/pull/913))
- Support for user's own Web App Manifest in siteConfig ([#934](https://github.com/facebook/docusaurus/pull/934))
- Add docker file & documentation ([#936](https://github.com/facebook/docusaurus/pull/936))
- New docusaurus project has a better starting README ([#930](https://github.com/facebook/docusaurus/pull/930))
- Enable passing object to script and link ([#937](https://github.com/facebook/docusaurus/pull/937))

### Chore and Maintenance

- New template for `Documentation` issue ([39b7793](https://github.com/facebook/docusaurus/commit/39b77935c41f400a0f1478c5163db6b8acb6f47c))
- Add new blog post about upcoming Docusaurus 2 ([#952](https://github.com/facebook/docusaurus/pull/952))
- Fix broken sponsor images in README ([#951](https://github.com/facebook/docusaurus/pull/951))
- Fix wrong user image URL ([89f49b0](https://github.com/facebook/docusaurus/commit/89f49b02c8f1595b0e386ce778ed1271ec9f30c6))

## [1.3.3] - 2018-08-22

Welcome to our newest users, [atalaya](https://atalaya.io/), [Reaction Commerce](https://docs.reactioncommerce.com/), [Plus (ThinkSNS+)](https://slimkit.github.io) and [nteract](https://docs.nteract.io/).

Thank you to the following contributors who helped with this release:

- @endiliey
- @joelmarcey
- @yangshun
- @apuravchauhan
- @dballance
- @helloworld
- @jreese
- @machikoyasuda
- @medz
- @mikalai-silivonik
- @miralemd
- @monkeywithacupcake
- @parano
- @patapizza
- @shaform
- @steevehook
- @theletterf
- @tom-auger
- @willingc

**Added**

- Add autoprefixing to CSS pipeline [\#867](https://github.com/facebook/docusaurus/pull/867)
- Support `text` language for code block style without any highlighting [\#875](https://github.com/facebook/docusaurus/pull/875)

**Fixed/Changed**

- Fix wrong CSS language prefix for fenced blocks [\#842](https://github.com/facebook/docusaurus/pull/842) [\#870](https://github.com/facebook/docusaurus/pull/870)
- Fix phrase emphasis not italicized [\#850](https://github.com/facebook/docusaurus/pull/850)
- Don't replace static assets linking in fenced code blocks [\#864](https://github.com/facebook/docusaurus/pull/864)
- Blogpost summary for blog feed is now properly truncated [\#880](https://github.com/facebook/docusaurus/pull/880)
- Fix failure to copy static image if image compression fail [\#887](https://github.com/facebook/docusaurus/pull/887)
- Fix: correct docs linking for custom `defaultVersionShown` [\#894](https://github.com/facebook/docusaurus/pull/894)
- Fix incorrect sitemap url for non default baseUrl [\#902](https://github.com/facebook/docusaurus/pull/902)
- Stricter `css/main.css` routing on development server [\#904](https://github.com/facebook/docusaurus/pull/904)
- Fix console error when onPageNav !== 'separate' [\#909](https://github.com/facebook/docusaurus/pull/909)

**Docs**

- Add documentation regarding usage of nested docs/ subdirectory [\#860](https://github.com/facebook/docusaurus/pull/860)
- Improve baseUrl documentation with an example [\#863](https://github.com/facebook/docusaurus/pull/863)
- Fix Table of contents documentation typo [\#873](https://github.com/facebook/docusaurus/pull/873)
- Update installation doc [\#888](https://github.com/facebook/docusaurus/pull/888) [\#900](https://github.com/facebook/docusaurus/pull/900)
- Update guides-translations.md for CircleCI 2.0 [92f95d](https://github.com/facebook/docusaurus/commit/92f95df934ab4034c49d66cd82ad5dbbcdee508d)

**Chore and Maintenance**

- Add ESLint [\#836](https://github.com/facebook/docusaurus/pull/836) [\#837](https://github.com/facebook/docusaurus/pull/837) [\#841](https://github.com/facebook/docusaurus/pull/841) [\#846](https://github.com/facebook/docusaurus/pull/846)
- Refactor & add more tests for Docusaurus [\#839](https://github.com/facebook/docusaurus/pull/839) [\#847](https://github.com/facebook/docusaurus/pull/847) [\#854](https://github.com/facebook/docusaurus/pull/854) [\#856](https://github.com/facebook/docusaurus/pull/856)
- Docusaurus own search will now search the docs in the correct language & version [\#859](https://github.com/facebook/docusaurus/pull/859)
- Improve readme [\#866](https://github.com/facebook/docusaurus/pull/866)
- Add prerelease script for Docusaurus [\#876](https://github.com/facebook/docusaurus/pull/876)
- Remove unused files [\#881](https://github.com/facebook/docusaurus/pull/881)
- Update code of conduct [3c1363d](https://github.com/facebook/docusaurus/commit/3c1363da1bd445029d7034b0575f69a7077321c3)
- Update jest to v23 [\#885](https://github.com/facebook/docusaurus/pull/885)
- Activating Open Collective [\#883](https://github.com/facebook/docusaurus/pull/883)
- Fix Jest tests that fail on Windows [\#896](https://github.com/facebook/docusaurus/pull/896)
- Rename Sonar to Flipper [\#905](https://github.com/facebook/docusaurus/pull/905)

## [1.3.2] - 2018-07-06

This version mainly includes bug fixes found in 1.3.1 that improves stability and UX improvements.

Welcome to our newest user, [single-spa](https://single-spa.js.org/), a framework that allows you to use multiple front end frameworks in one SPA.

Thank you to the following contributors who helped with this release:

- @endiliey
- @chenglou

### Fixed/Changed

- Fix wrong sitemap for alternate URLs (#828)
- Publish-gh-pages should display the correct commit that triggers it (#829)
- Fix missing Facebook like buttons in blog posts (#821)
- Open browser with the correct baseUrl during development (#819)
- Fix Edit button alignment in Docs (#819)

## [1.3.1] - 2018-06-30

This version mainly includes bug fixes found in 1.3.0 that improves stability.

Thank you to the following contributors who helped with this release:

- @endiliey
- @yangshun
- @RhysBower
- @ngyikp

### Fixed/Changed

- Algolia will search using the [correct version](https://github.com/facebook/docusaurus/commit/9ff5328c88706d2025fd14c274c14d17712fa048) instead of always using the current.
- Directory tree printing during initialization will now [exclude `vendor`](https://github.com/facebook/docusaurus/commit/5a8e9a9ff11a74e4913c5d1f272aa8fc4c67e9c3), a common third-party directory for PHP projects.
- Fix a bug in the [routing](https://github.com/facebook/docusaurus/commit/66b2033546a6ad20146d5f81b115d6f080b98e89) for docs and blogs.
- Sidebar scrollbar will [only appear](https://github.com/facebook/docusaurus/commit/e4b9b9861b0374790b19f3f84f51ee34f8710f68) when it is longer than the height of the page.
- Prevent the page from [scrolling to top](https://github.com/facebook/docusaurus/commit/76870c6a3780323d364da9b9c52502ab4c979378) when clicking the languages button.
- Fix [incorrect sitemap URLs](https://github.com/facebook/docusaurus/commit/418c840ad4524cb286ec04842ffa5d474feed1d2).
- Fix a bug where [promise errors get swallowed](https://github.com/facebook/docusaurus/commit/f598e2583f73cc5e77b994f9ace027012852cd49), causing CIs to think that the command was successful when it isn't.
- Fix some [newly discovered issues](https://github.com/facebook/docusaurus/commit/0b10b193a83dc8ea792e84ffae2a082b895689cb) with the CSS revamp introduced in 1.3.0.

## [1.3.0] - 2018-06-20

1.3.0 introduces a brief clean up of our CSS, overall site typography and some improvements to Algolia search.

Welcome to our newest user, [ml5](https://ml5js.org/), a really cool machine library in JavaScript.

Thank you to the following contributors who helped with this release:

- @endiliey
- @JoelMarcey
- @yangshun

### Breaking changes

- Since we made some CSS changes, there's a good chance it might not be compatible with your custom CSS if you have any. We recommend that you audit each page of the site for any UI issues caused by this change. We'll try to minimize such backward-incompatible CSS changes in future.
- Other UI changes include:
  - Left sidebar is sticky by default on supported browsers. We saw many of our users write custom CSS for that behavior and decided to incorporate it in the core.
  - Footer is now a darker shade of black for better contrast.
  - Background color of site changed to `#fff`.
  - Headers are now black (from `$primaryColor`) and have bolder font weight.
  - Blockquotes are changed to yellow (from pink).

### Fixed/Changed

- The search input will now search the docs in the [correct language](https://github.com/facebook/docusaurus/commit/df429262429e449e78745423ff2c9ab6c6fd1d5c).
- Algolia will be able to scrap emulti-language and/or versioned sites better with the introduction of [special meta tags](https://github.com/facebook/docusaurus/commit/0eb6612b58a6ee93d5de715f87201eb9fabc82c2).

### Added

N/A

### Removed

N/A

## [1.2.1] - 2018-06-17

Fixes from existing issues and those found in the 1.2.0 release. Fixes include being able to modify the metadata of a doc without resorting to deleting `en.json`, using absolute URLs instead of relative for docs links, and more. We also added a few new things as well.

Welcome to our newest users, [Babel](https://babeljs.io), [Sonar](https://fbsonar.com), [Metro](https://facebook.github.io/), [StreamPipes](https://docs.streampipes.org/), and [rest-hapi](https://jkheadley.github.io/rest-hapi/).

Thank you to the following contributors who helped with this release:

- @endiliey
- @yangshun
- @Kelltimo
- @ayshiff
- @rupeshparab
- @gustavohenke
- @maxogden
- @jonathaningram
- @dominikriemer
- @anru
- @Rendez
- @Thai56
- @JKHeadley

### Breaking changes

- This may not affect many users, but if you modified the `en.json` to add your own custom translation strings, we [changed](https://github.com/facebook/docusaurus/commit/608e2c85a21cd17d9f45496a479ec82f5620a48a) how this is handled, and you will need to [follow the instructions here](https://docusaurus.io/docs/en/translation#custom-translation-strings) to modify your setup.

### Added

- Option to [disable](https://github.com/facebook/docusaurus/commit/62a2c7c1a599ccaf04a86e9ca2ec0fbca5220f5c) live reload during development.
- Configuration options for [changing](https://github.com/facebook/docusaurus/commit/58fba70dead064e8c6910e07d3523a548258022f) the title of the blog sidebar info.
- Better support and [documentation](https://docusaurus.io/docs/en/publishing#using-github-pages) for [cross-repo publishing](https://github.com/facebook/docusaurus/commit/fd9a3ffb6deca84b41dc5a3b43b0db1ca4f3143e).

### Fixed/Changed

- 1.2.0 introduced a bug where you could not update documentation metadata without deleting `en.json`. This has been [fixed](https://github.com/facebook/docusaurus/commit/608e2c85a21cd17d9f45496a479ec82f5620a48a) as part of the custom translation string breaking change.
- Absolute URLs are now [used](https://github.com/facebook/docusaurus/commit/0f01eace8be1be273a63089a14d1e3ea2d2cae57) instead of relative URLs for documentation linking to avoid trailing slash issues.
- If you have had trouble updating Docusaurus, it may have been your [Babel cache](https://docusaurus.io/docs/en/installation#updating-your-docusaurus-version).
- No more errors if heading anchors are [empty](https://github.com/facebook/docusaurus/commit/371fdda4a8c82b5f29dd5c2dd9f04c8ef28dd025).
- Fixed bug when [renaming version](https://github.com/facebook/docusaurus/commit/a2b076bdcaf7099e595f2f106b38dd0cabeee1ef) where `sidebars.json` were not getting updated.
- Table of contents are now [hidden](https://github.com/facebook/docusaurus/commit/7bef1b96dc8de8c42795b0983195f66a7ae78c27) when `onPageNav` is not separate.

### Removed

N/A

## [1.2.0] - 2018-06-10

A major point release. This release adds highly requested features, including extension-less URLs, nested directories for docs and adding a second option (Prism) for syntax highlighting.

Welcome to our newest users, [pnpm](https://pnpm.js.org/) and [Anssr Data](https://anssr.io/).

A special thank you to @endiliey who has come in and did awesome work for Docusaurus. @endiliey is now an official maintainer of the Docusaurus repo because of his efforts.

Thank you to the following contributors who helped with this release:

- @endiliey
- @yangshun
- @gimdongwoo
- @balloob
- @zkochan
- @gustavohenke
- @ranolf
- @Themandunord
- @ericnakagawa
- @vacarsu
- @SleepWalker
- @brenopolanski
- @skratchdot

### Breaking changes

None that we know of. Please let us know if you find any as this is a big release and we may have missed something.

### Added

- Sub-directories are now [supported](https://github.com/facebook/docusaurus/commit/d04b3ca87bb371dd47e6b69a863306ee5f2b1840) for documentation. This was one of the most [requested features](https://github.com/facebook/docusaurus/pull/705).
- You can now use [Prism for syntax highlighting](https://github.com/facebook/docusaurus/commit/c8bc00a3a78f6db8f9a9e22aaaf63f56a00cc2ac), in addition to Highlight.js. [Documentation](https://docusaurus.io/docs/en/doc-markdown#using-prism-as-additional-syntax-highlighter)
- URLs can now be ["clean"](https://github.com/facebook/docusaurus/commit/31f0c27f81ac9d22f8fdd29f5265e60b5b038773) - no `.html` extension.
- Scroll to top button [option](https://github.com/facebook/docusaurus/commit/aee255219bedc97b55048cdb4703742cbb7c247e) for your documentation pages.
- Can now [set title](https://github.com/facebook/docusaurus/commit/72f4f369394a9ccdcd721c4f2fa0ee2913ad98dd) for custom pages. [Documentation](https://docusaurus.io/docs/en/api-pages#titles-for-pages)
- On page [navigation](https://github.com/facebook/docusaurus/commit/49c27b733bf62506acff3c55f92143dc0ef3ed86) for blog posts.
- Travis CI [publishing](https://docusaurus.io/docs/en/publishing#using-travis-ci) guide.
- Can now publish to [GitHub Enterprise](https://github.com/facebook/docusaurus/commit/2bd9a148c160a0f0de9ab991c66393c629469c37).

### Fixed/Changed

- For better SEO, we now [support](https://github.com/facebook/docusaurus/commit/c47af6be4b4436f5d9c325b896027e4db3a2d331) `meta:description`.
- Existing translation files are now [loaded](https://github.com/facebook/docusaurus/commit/49a5263d62ea58ef1aa4e952e5ed6ec44e4a0b28) correctly.
- URLs properly [resolve](https://github.com/facebook/docusaurus/commit/ff93ba985397804741d4f1e31cfb5219e998cec1) no matter which language you are currently viewing.
- Atom and RSS feed links are [fixed](https://github.com/facebook/docusaurus/commit/8e58d2e90373e0b2d5373ff875e052f430370a69) for `xxx.github.io` sites.
- Version pages [link](https://github.com/facebook/docusaurus/commit/c000aca61f935eb94999e9c46077d106cca22275) to the correct language, depending on the current language.
- Do not [start server](https://github.com/facebook/docusaurus/commit/d28b864a59fabeea45add8c090a13de7d0530de5) if `versions.js` is missing and versioning is enabled.
- [Fail](https://github.com/facebook/docusaurus/commit/93b2ebb53b49f4c2ba84dcb9b7c98f58dc05ad46) properly when current branch is the same as the deployment one.
- Assets not found bug [fixed](https://github.com/facebook/docusaurus/commit/b00e9d14e211e42851ede645ecc1e325120c4e3e) in Windows.
- OnPageNav now [works](https://github.com/facebook/docusaurus/commit/3ff24c7926f06e10bf33eba7d1c86f18087e793a) on mobile devices.
- [Remove](https://github.com/facebook/docusaurus/commit/b3d59f8a0f7aee606dde0eb7fea9d9d613f34087) extra padding in code blocks.
- Better [gitignore](https://github.com/facebook/docusaurus/commit/767cd88d8655ddf81c1975b7850401dacf07908a) for `docusaurus-init`
- Documentation fixes: [1](https://github.com/facebook/docusaurus/commit/52729446261f61fa091d2f4909e9435abb0af645)[2](https://github.com/facebook/docusaurus/commit/6244bb1aa452c5b98c3f768c0a311cf7f52cb5a8)[3](https://github.com/facebook/docusaurus/commit/e5ff417cd19a4d9c353c2a054a42cf75d5df9228).

### Removed

N/A

## [1.1.5] - 2018-05-26

Hotfix. A package in `devDependencies` needed to be moved to `dependencies`.

## [1.1.4] - 2018-05-25

Yet another hotfix release. We found an issue with the way we did LiveReload - we were watching the `node_modules` directory and that caused some users to encounter errors. We stopped watching `node_modules` directory in `gaze`.

Thank you to the following contributors who helped with this release:

- @artiebits
- @yangshun

### Fixed/Changed

- If you already have a tab with the Docusaurus website open, restarting the server will [not open a new browser tab](https://github.com/facebook/docusaurus/commit/407636a4d92b23fe59c31bbc58a0e3416d91f01f).
- Updated [directory tree display](https://github.com/facebook/docusaurus/commit/454e3d359f786069f83a5bfe2687e304f1f0547f) for a newly-generated site.
- [Don't watch `node_modules`](https://github.com/facebook/docusaurus/commit/b5fd7bae738ac14d702e80bd3764fee94e0a8e93) in dev server mode.

## [1.1.3] - 2018-05-23

`npm` had an issue where some packages were not being published. This should hopefully be resolved now; publishing a new version just in case.

Also, welcome [TextLint](https://textlint.github.io/) and [Open Power Quality](https://openpowerquality.org/) as new [users](https://docusaurus.io/en/users.html).

Thank you to the following contributors who helped with this release:

- @azu
- @philipmjohnson
- @violabg
- @sebelga

### Fixed/Changed

- `onPageNav` now [shows](https://github.com/facebook/docusaurus/commit/2c74d937607fcd84677be5d6990ca2a3b4ba8d7a) in Safari.

## [1.1.2] - 2018-05-21

Another HOTFIX release. One of our third-party dependencies, `tree-node-cli` didn't support Node 10+. The package has been fixed and we have updated to use the new version of that package.

## [1.1.1] - 2018-05-21

HOTFIX release. Dependency bug found.

### Fixed/Changed

- `opn` needs to be [installed](https://github.com/facebook/docusaurus/commit/923356e312687cae107db2ec36aaf52f7f03028a), not just in dev dependencies.

## [1.1.0] - 2018-05-20

This is our first major point release. There are three primary reasons for this:

- One of our most requested issues has been implemented - [Live Reload](https://github.com/facebook/docusaurus/commit/f9a09072e35e274cf4c13b67d228ece3b7722d47).
- We [migrated](https://github.com/facebook/docusaurus/commit/25cf8bb786abf835e4275e2a9975b33bd5fb2b18) to React 16 support (which wasn't as difficult as initially thought :) )
- The blog now allows for [Facebook-based comments](https://github.com/facebook/docusaurus/commit/aae106c018667a3787726f7744ce14ccb2b68ef1).

There are a lot of other fixes and enhancements as well. Also, we have five new [users](https://docusaurus.io/en/users.html) of Docusaurus within this release as well. Thank you to [WarriorJS](https://warrior.js.org/), [Bemuse](https://bemuse.ninja/project/), [Pyre-Check](https://pyre-check.org/), [Draft.js](https://draftjs.org/) and [CaptainDuckDuck](https://captainduckduck.com/) for using Docusaurus.

There are also various documentation fixes as well.

We think this is a good release.

Thank you to the following contributors who helped with this release:

- @yangshun
- @amyrlam
- @gedeagas
- @ahmadalfy
- @endiliey
- @zpao
- @NoamELB
- @sujono91

### Breaking Changes

- For blog posts, [`authorImage` is now `authorImageURL`](https://github.com/facebook/docusaurus/commit/873a2427f91314fe9f8590cc782c01570f264c6d).

### Added

- [Live Reload](https://github.com/facebook/docusaurus/commit/f9a09072e35e274cf4c13b67d228ece3b7722d47) allows you to make changes to your documentation without having to manually refresh your site.
- Running `yarn start` or `npm start` automatically [opens a browser](https://github.com/facebook/docusaurus/commit/1a6f2fc51c1e1e9fa0e21fe5026a11681435aef3) to the correct `localhost` page.
- There is now a build option, `--skip-image-compression`, to [compress your images](https://github.com/facebook/docusaurus/commit/ab6bab9f8d02c3cb402947ea5fd1c9d619478b54).
- You can now add Twitter and Facebook social buttons to the [footer](https://github.com/facebook/docusaurus/commit/f8521c2fe1469c549d5f363517d21117358f8862).
- The blog now allows for [Facebook-based comments](https://github.com/facebook/docusaurus/commit/aae106c018667a3787726f7744ce14ccb2b68ef1).
- A [warning](https://github.com/facebook/docusaurus/commit/436a3d04d213360b71fc6edc45983b192def0f0b) is now shown if you use versioning without a `version.js` file.

### Fixed/Changed

- Various UI fixes
- Directory tree [printed](https://github.com/facebook/docusaurus/commit/1796764b1cc56f9c2e46e937a7aa2ffd417b267c) during `docusaurus-init`.

### Removed

- [`authorImage`](https://github.com/facebook/docusaurus/commit/873a2427f91314fe9f8590cc782c01570f264c6d)

## [1.0.15] - 2018-05-06

This release has a lot of commits, including bug fixes, documentation updates, as well as a bit of new functionality. A new [blog post](https://docusaurus.io/blog/2018/04/30/How-I-Converted-Profilo-To-Docusaurus.html) from @caabernathy about how easy it is to create a Docusaurus site, a lot of Windows fixes, the ability to specify the default version shown, and more.

Thank you to the following contributors who have helped with this release:

- @yangshun
- @amyrlam
- @caabernathy
- @szeck87
- @dgracehmh
- @balloob
- @ramiel
- @AmitHarlev
- @pixelastic
- @SoonaMata
- @olistic
- @SleepWalker
- @Airse
- @ahmadalfy
- @zenflow

### Breaking changes

N/A

### Added

- Our Google Analytics support now [allows](https://github.com/facebook/docusaurus/commit/976ae770b530636d1e4805ef285af52aa30a51c1) the use of `gtag` via the new [`gaGtag` site configuration option](https://docusaurus.io/docs/en/site-config.html#optional-fields).
- Anchor links are now [unique](https://github.com/facebook/docusaurus/commit/9c98142fea416492efebf5a462fc0724551732f6) per document.
- You can now configure what version is shown by [default](https://github.com/facebook/docusaurus/commit/dbc597bfd76879fed60869122397ce6c5a86bf81) via the [`defaultVersionShown` site configuraton option](https://docusaurus.io/docs/en/site-config.html#optional-fields).

### Fixed/Changed

- We do not [ignore](https://github.com/facebook/docusaurus/commit/df6f6df333c9e3df42aa13c5db44b749eeb0abb9) the `custom_edit_url` metadata option in a doc any longer.
- UX/UI improvements: [table](https://github.com/facebook/docusaurus/commit/3a246068874916914b9af3107d6061817b55176b), [code block](https://github.com/facebook/docusaurus/commit/327d04436240c9f1cd31c50f999384556df5ac16), [sidebar](https://github.com/facebook/docusaurus/commit/812f2be6e32d5328cb80cccfa1f05e3176b31235), [header anchors](https://github.com/facebook/docusaurus/commit/be54c8f03536f7ad58adf8f7111c617446debbfa).
- Sitemap is now [generated](https://github.com/facebook/docusaurus/commit/6c9c7e5de57fbf4c5f9dedd35817296b3e262596) if a blog post exists.
- IE fixes: [navigation](https://github.com/facebook/docusaurus/commit/6d77403dc1b5fb2027ee3d1adc6374708a4cb3ee), [font rendering](https://github.com/facebook/docusaurus/commit/17dd6d9c8e7093b60c81291623dad37d0700850d), etc.

### Removed

N/A

## [1.0.14] - 2018-04-23

Small release mostly for documentation.

Thank you to the following contributors who have helped with this releae:

- @yangshun
- @ericnakagawa
- @shikaan
- @longility

### Breaking changes

N/A

### Added

N/A

### Fixed/Changed

- Blog metadata now [refreshed](https://github.com/facebook/docusaurus/commit/d3fd347d21d3480e656cf4590917633f91254c5f) on changes to blog posts.

### Removed

N/A

## [1.0.13] - 2018-04-20

This is primarily a bug fix release.

Thank you to the following contributors who helped with this release:

- @vjeux
- @huang-x-h

### Breaking changes

N/A

### Added

- Support for [custom highlight theme URL](https://github.com/facebook/docusaurus/commit/aa32ff4a558269a2ac02f265489804ab83cc0145) via the `themeURL` site config option.

### Fixed/Changed

- [Do not warn](https://github.com/facebook/docusaurus/commit/c400636fb6a790ac39cb731ed3fe2f0cd22313eb) when using `layout` in the docs metadata header.
- [Restore](https://github.com/facebook/docusaurus/commit/1d4e334a86cabb9581a3ba5305a2019a7bbb540d) the ability to use the --port command line argument

### Removed

N/A

## [1.0.12] - 2018-04-18

This is a general release with additions and documentation updates. We would also like to welcome [React Native Elements](https://react-native-training.github.io/react-native-elements/) as a user of Docusaurus.

https://docusaurus.io has turned on versioning. There are other documentation updates as well.

> We turned on translations, but found a bug. So we turned it off until we fix it.

Thank you to the following contributors who helped with this release:

- @yangshun
- @amyrlam
- @SleepWalker
- @InternetExplorer7
- @zkochan
- @iRoachie
- @limonte

### Breaking changes

- While not officially breaking, `authorImage` will be [deprecated](https://github.com/facebook/docusaurus/pull/577) for [`authorImageURL`](https://github.com/facebook/docusaurus/commit/57cddb4d0897e7d9a62305c6b2b8a04e824e0941) in blog posts.

### Added

- [`twitterImage`](https://github.com/facebook/docusaurus/commit/e738bbd99e80596f7280c2a131600600c083fc68) has been added to site configuration options for use in Twitter cards.
- Support for [non-latin characters](https://github.com/facebook/docusaurus/commit/1642c078a723487d922b80f6d112c989b98e8bd3) have been added in heading anchors.
- [`<doctype HTML>`](https://github.com/facebook/docusaurus/commit/946e2cef907a37290bfdf831dedc072de596f927) has been added to all HTML pages.
- `cssnano` is used to [minify](https://github.com/facebook/docusaurus/commit/159b80df942ba4d7c422ecb6d4b57aa34fd7b5e3) the main CSS file.

### Fixed/Changed

- [Search bar width in mobile navigation](https://github.com/facebook/docusaurus/commit/ba024a25c7cf37cdaecafb8d805a49505f461785).

### Removed

N/A

## [1.0.11] - 2018-04-12

This is a general release with additions and documentation updates (which are already live on docusaurus.io). We would also like to welcome [BlueWhale](https://facebookresearch.github.io/BlueWhale) as a new user of Docusaurus.

Thank you to the following contributors who helped with this release:

- @amyrlam
- @yangshun
- @aadsm
- @InternetExplorer7
- @MisterTea
- @SBrown2

### Breaking changes

N/A

### Added

- [Dynamic port switching](https://github.com/facebook/docusaurus/commit/bbbe311004aa0b2e61f1678099c02cb9a136d418) (e.g., if the default is busy) when running the local server.
- [Warnings](https://github.com/facebook/docusaurus/commit/ad5b8b92b4a89bd197404d56d9a049db3aca5490) if you add documentation header metadata that is not supported.
- The ability to [hide the documentation title](https://github.com/facebook/docusaurus/commit/6dd6ead19f8f58c8494798da8d95070b9cf40808) for any of your docs with a new metadata option called `hide_title`.

### Fixed/Changed

- If you have translations enabled, the language drop down in the header navigation bar is now [fixed](https://github.com/facebook/docusaurus/commit/0e3f3e30134d603e85a8024fdaa1a728a33b1452) to show the current language.
- More [accessibility fixes](https://github.com/facebook/docusaurus/commit/80ece69a1069d92ceac4a07d990ae3fb8b2c8b51) to support a11y.

### Removed

N/A

## [1.0.10] - 2018-04-09

This is a general release with mostly bug fixes and documentation updates (which are already live on docusuarus.io).

### Breaking Changes

N/A

### Added

- [Added Facebook Pixel ID as a configuration option](https://github.com/facebook/docusaurus/commit/508090377eb14f27db5ccb87c5fbe70ab79dc62d), thanks @pestevez.
- Better documentation on installation requirements, CircleCI, updating Docusaurus and API. Thanks espcially to @yangshun for a lot of documentation cleanup and additions.

### Fixed/Changed

- [Fixed .gitignore placement when running the examples script or `docusaurus-init`](https://github.com/facebook/docusaurus/commit/fc051acde53e7dd981d5aeb0cea498209b1da11c)
- On page navigation fixes, including its [scroll height](https://github.com/facebook/docusaurus/commit/56bae1d70ca6e0467b4f43fcc2b3adf72a5296db), [better table of contents](https://github.com/facebook/docusaurus/commit/c437f7be37827f4f8c199577f4367ad0e56562c7), and other [fixes](https://github.com/facebook/docusaurus/commit/1a674885aeff1a3c9523d16a72a34e4ba0ce8019), thanks @microbouji.
- [Cleaned up example pages](https://github.com/facebook/docusaurus/commit/37c699e8bdcad6889fadf52253c0901dc029b507), thanks @Happy-Ferret.
- [Better alignment of the sitemap in the footer](https://github.com/facebook/docusaurus/commit/a7acc7d794240b28da52f90cac487f6b803dc7a3), thanks @ryzokuken.
- Accessibility fixes around [images](https://github.com/facebook/docusaurus/commit/c2cd169b64d1bd9513831976bd5db436d6cda498) and [links](https://github.com/facebook/docusaurus/commit/e19b9ac56e227c40209cec774b5b74a539819153), thanks @amyrlam and @yangshun.

### Removed

N/A

## [1.0.9] - 2018-03-13

**This is a hotfix release**

A [bug](https://github.com/facebook/docusaurus/pull/501) was found in the [using `path` functions commit](https://github.com/facebook/docusaurus/commit/cbdab2ba1112e8949683d23ce20034aa17d9013d) by @sunnylqm. Total commits in this release is 4, including the release itself.

### Breaking Changes

N/A

### Added

- [Docs for the secondary, on-page navigation option](https://docusaurus.io/docs/en/navigation.html#secondary-on-page-navigation).

### Fixed/Changed

- [Fix wrong versioned_docs file path](https://github.com/facebook/docusaurus/pull/501/commits/324facde46e13749423d72f14e300a8dbf0a76cb), thanks @sunnylqm.

### Removed

N/A

## [1.0.8] - 2018-03-12

This is a targeted feature and bug fix release. A couple of things of interest are that this release fixes some [issues](https://github.com/facebook/docusaurus/issues/468) with Windows that were occurring, particularly when building the docs, both locally and publishing, as well as addressing an [issue](https://github.com/facebook/docusaurus/issues/344) for support for a secondary, on-page sidebar for local page navigation, which is now enabled for docusaurus.io. Total commits in this release is 27, including the release itself.

### Breaking Changes

N/A

### Added

- [Add separate, on-page navigation sidebar option so that you can see links to local page topics](https://github.com/facebook/docusaurus/commit/4ff2fe280ebd41c4b491936fdd4ae75b7805ed61), thanks @microbouji.
- [You can now use a custom `appId` for your Algolia search](https://github.com/facebook/docusaurus/commit/4ea8158c0cf2105b0fec767289fd722ebc6e3a92), thanks @atroncy.
- [The header navigation now shows the active link clearly](https://github.com/facebook/docusaurus/commit/48ee457ec98b728343196362d5d42c0dc3d1cff9), thanks @microbouji.
- [Replace CircleCI 1.0 publishing documentation with CircleCI 2.0](https://docusaurus.io/docs/en/publishing.html#using-circle-ci-20), thanks @ashleytqy.

### Fixed/Changed

- [Use `path` functions in order to fix building on Windows](https://github.com/facebook/docusaurus/commit/cbdab2ba1112e8949683d23ce20034aa17d9013d)
- [`latestVersion` was fixed when running the local server](https://github.com/facebook/docusaurus/commit/4a10be8002af4bf59a3830d75c5860b83df3d2a6), thanks @sunnylqm.
- [Environment variables take precedent over config options when publishing](https://github.com/facebook/docusaurus/commit/d2bff6929e410f03bc4758538020167c828b156e), thanks @juanpicado.
- [i18n support fixed for the home page link in the header](https://github.com/facebook/docusaurus/commit/f8486e02ae2b28e7c04cf72617a31716b64a445c) and [the sidebar navigation](https://github.com/facebook/docusaurus/commit/4553afda2bdb68db2f5f014a117cf93e81014037), thank @cheercroaker.
- [Document an existing feature that has already existed, `ogImage`](https://github.com/facebook/docusaurus/commit/a8d7299ef2c055e7cd48cf6a78ed2204a964bdaa), thanks @miralemd.
- [`siteConfig.users` is now optional](https://github.com/facebook/docusaurus/commit/8c2145585c415f0e1b093c33cc2aba46c407b575), thanks @aimeerpierce.
- [`id` used instead of `name` in anchors, bringing us more HTML 5 compliant](https://github.com/facebook/docusaurus/commit/c800870fefe0f3f1987ea0731d0ad1391ea35471), thanks @ronami.

### Removed

N/A

## [1.0.7] - 2018-02-17

**This is a hotfix release**

A couple of bugs were found in our versioning system that would make versioning unusable in some scenarios. Thank you to @iRoachie for finding these. This release also contains a better header link scroll on mobile. Total commits in this release is 6, including the release itself.

### Breaking Changes

N/A

### Added

- [A scrollbar to the header links on mobile](https://github.com/facebook/docusaurus/commit/0dad6d562f78e9d1c9d8c70946755accd73a6a63), thanks @maaz93.

### Fixed/Changed

- [Allow new docs to be added for new versions](https://github.com/facebook/docusaurus/commit/1388e1379512ddfd4d5bfbecaac2a598dd85151c)
- [Relax restriction on versioned doc ids with dashes](https://github.com/facebook/docusaurus/commit/ec6ff9284c03e3287089f65e596a2293097c23ab)
- [Broken link in the site config docs](https://github.com/facebook/docusaurus/commit/f79cfaa3a11270665ab528b26a37f2598a878bff), thanks @justinmusgrove.

### Removed

N/A

## [1.0.6] - 2018-02-12

This is a bigger release than normal as it has been a month since releases. It contains bug fixes, duplicate code removal, a few new features, and documentation updates. Total commits in this release is 38, including the release itself.

### Breaking Changes

N/A

### Added

- Option to control number of blog posts in sidebar ([#432](https://github.com/facebook/docusaurus/commit/dfb70e18296fe0feb53ac05e807cba290b5da3d7), thanks @ericnakagawa)
- `font-family` is now a configurable parameter ([#294](https://github.com/facebook/docusaurus/commit/a241a466697a2bb9fa022df29fba35dd49e29715), thanks @cowlingj)
- Configurable edit URL link, per doc ([#443](https://github.com/facebook/docusaurus/commit/41750667cd74b66c2bdde00619d290fc293a01d3), thanks @Glavin001)
- New Docusaurus [users](https://docusaurus.io/en/users.html): [Vuls](https://vuls.io/), [react-native-ios-kit](https://callstack.github.io/react-native-ios-kit) and [Verdaccio](http://www.verdaccio.org/)
- Docs section about referencing site documents ([#394](https://github.com/facebook/docusaurus/commit/1d967a941cfc7256588ce8b88291d7f3c86c1983) )
- Clarified docs on [publishing to a user/org page](https://docusaurus.io/docs/en/publishing.html#using-github-pages)
- [Alphabetized site config options](https://docusaurus.io/docs/en/site-config.html) in docs (thanks @haraldur12)
- Moved [verifying installation](https://docusaurus.io/docs/en/installation.html#verifying-installation) section to the install docs (@thanks @gedeagas)
- Discord added as a [help and communication](https://docusaurus.io/en/help.html) option

### Fixed/Changed

- Blog feeds now show HTML, not markdown ([#407](https://github.com/facebook/docusaurus/commit/2d7274f6fe052615d0e0fe4d1b75f9cfc5f88cbb), thanks @tom-auger)
- Chinese translation infra ([#377](https://github.com/facebook/docusaurus/commit/00270c26a729a9b23e1e4055868ae7146c2d81d8), thanks @chenglou)
- Margin for right-aligned images ([#398](https://github.com/facebook/docusaurus/commit/4c2558e8bd538ea6f49867e18c1bbd9489e7ba2c), thanks @rickhanlonii)
- Correct HTTP status code sent on redirects ([#408](https://github.com/facebook/docusaurus/commit/c81609d393e9e1fe2b63b69028b0624091a3e440))
- Non-English versioned docs metadata parsed correctly ([#412](https://github.com/facebook/docusaurus/commit/43e80fcea735788a78d8c48e35df4ea1b6cd8b00), thanks @sunnylqm)
- Provide Algolia information about the latest and current version ([#418](https://github.com/facebook/docusaurus/commit/61c5d2d8e01ace967157120727e3b3fcab541b17))
- Remove key errors when running local server ([#425](https://github.com/facebook/docusaurus/commit/c6a9848a17b7ac27f43a58c6cecacf905fab0cbc), thanks @hshoff)
- Links fixed in blog Atom feed ([#421](https://github.com/facebook/docusaurus/commit/c99cdefd3a314e53cc23ff65eeaa6837cb49d034), thanks @hramos)

### Removed

N/A

## [1.0.5] - 2018-01-09

This is a targeted bug fix release, with some documentation updates and Docusaurus repo housekeeping in between. Total commits in this release is 13, including the release itself.

### Breaking Changes

N/A

### Added

N/A

### Fixed/Changed

- Docusaurus builds on Windows ([PR #381](https://github.com/facebook/docusaurus/pull/381), thanks @qcz).
- Fixed publishing for user/org GitHub sites (as opposed to project sites) ([PR #384](https://github.com/facebook/docusaurus/pull/384)).
- Clarification and updates on the publishing and API documentation ([PR #372](https://github.com/facebook/docusaurus/pull/372)).

### Removed

N/A

## [1.0.4] - 2017-12-27

This is generally a bug fix release, with some code refactoring. Total commits in this release is 58.

### Breaking Changes

- **_Most users may not run into this problem, but we think it can technically be a breaking change_**. PR #322 (original PR #316) and friends changes the way we check for the existence of translations and versioning. Part of that is that we allow for the possibility of an empty language prop, instead of defaulting everything to English. When running 1.0.4, check to make sure your `index.js` works as expected. See [this comment](https://github.com/facebook/docusaurus/pull/322#issuecomment-352914064) and those below for discussion on this. There is still a bit more work to be done (refactoring and maybe adding a `defaultLang` config option) to make this as clean as possible.

### Added

- `lang` property added on `html` tag, if a language exists and is set (PR #295).
- Added the `wrapPagesHTML` configuration option (PR #332).
- Some adming docs on how to debug with VSCode (PR #335).
- Added docs for the `useEnglishURL` configuration option.

### Fixed/Changed

- Links on landing page in `docusaurus-init` test site do not 404 any longer.
- Refactoring how we check for translations and versioning (PRs #322/#316 and friends).
- Refactored the example `index.js` page (PR #293).
- Link errors, typos and grammatical errors in the docusuarus.io documentation.

### Removed

N/A

## [1.0.3] - 2017-12-13

### Added

- Docusaurus [released](http://docusaurus.io/blog/2017/12/14/introducing-docusaurus.html) to the public.
  - Initialization script
  - Versioning
  - Translations
  - Search
  - Blog
  - Documentation

[unreleased]: https://github.com/facebook/docusaurus/compare/v1.14.4...HEAD
[1.14.4]: https://github.com/facebook/docusaurus/compare/v1.14.3...v1.14.4
[1.14.3]: https://github.com/facebook/docusaurus/compare/v1.14.2...v1.14.3
[1.14.2]: https://github.com/facebook/docusaurus/compare/v1.14.1...v1.14.2
[1.14.1]: https://github.com/facebook/docusaurus/compare/v1.14.0...v1.14.1
[1.14.0]: https://github.com/facebook/docusaurus/compare/v1.13.0...v1.14.0
[1.13.0]: https://github.com/facebook/docusaurus/compare/v1.12.0...v1.13.0
[1.12.0]: https://github.com/facebook/docusaurus/compare/v1.11.1...v1.12.0
[1.11.1]: https://github.com/facebook/docusaurus/compare/v1.11.0...v1.11.1
[1.11.0]: https://github.com/facebook/docusaurus/compare/v1.10.0...v1.11.0
[1.10.0]: https://github.com/facebook/docusaurus/compare/v1.9.0...v1.10.0
[1.9.0]: https://github.com/facebook/docusaurus/compare/v1.8.1...v1.9.0
[1.8.1]: https://github.com/facebook/docusaurus/compare/v1.8.0...v1.8.1
[1.8.0]: https://github.com/facebook/docusaurus/compare/v1.7.3...v1.8.0
[1.7.3]: https://github.com/facebook/docusaurus/compare/v1.7.2...v1.7.3
[1.7.2]: https://github.com/facebook/docusaurus/compare/v1.7.1...v1.7.2
[1.7.1]: https://github.com/facebook/docusaurus/compare/v1.7.0...v1.7.1
[1.7.0]: https://github.com/facebook/docusaurus/compare/v1.6.2...v1.7.0
[1.6.2]: https://github.com/facebook/docusaurus/compare/v1.6.1...v1.6.2
[1.6.1]: https://github.com/facebook/docusaurus/compare/v1.6.0...v1.6.1
[1.6.0]: https://github.com/facebook/docusaurus/compare/v1.5.1...v1.6.0
[1.5.1]: https://github.com/facebook/docusaurus/compare/v1.4.0...v1.5.1
[1.5.0]: https://github.com/facebook/docusaurus/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/facebook/docusaurus/compare/v1.3.3...v1.4.0
[1.3.3]: https://github.com/facebook/docusaurus/compare/v1.3.2...v1.3.3
[1.3.2]: https://github.com/facebook/docusaurus/compare/v1.3.1...v1.3.2
[1.3.1]: https://github.com/facebook/docusaurus/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/facebook/docusaurus/compare/v1.2.1...v1.3.0
[1.2.1]: https://github.com/facebook/docusaurus/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/facebook/docusaurus/compare/v1.1.5...v1.2.0
[1.1.5]: https://github.com/facebook/docusaurus/compare/v1.1.4...v1.1.5
[1.1.4]: https://github.com/facebook/docusaurus/compare/v1.1.3...v1.1.4
[1.1.3]: https://github.com/facebook/docusaurus/compare/v1.1.2...v1.1.3
[1.1.2]: https://github.com/facebook/docusaurus/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/facebook/docusaurus/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/facebook/docusaurus/compare/v1.0.15...v1.1.0
[1.0.14]: https://github.com/facebook/docusaurus/compare/v1.0.14...v1.0.15
[1.0.14]: https://github.com/facebook/docusaurus/compare/v1.0.13...v1.0.14
[1.0.13]: https://github.com/facebook/docusaurus/compare/v1.0.12...v1.0.13
[1.0.12]: https://github.com/facebook/docusaurus/compare/v1.0.11...v1.0.12
[1.0.11]: https://github.com/facebook/docusaurus/compare/v1.0.10...v1.0.11
[1.0.10]: https://github.com/facebook/docusaurus/compare/v1.0.9...v1.0.10
[1.0.9]: https://github.com/facebook/docusaurus/compare/v1.0.8...v1.0.9
[1.0.8]: https://github.com/facebook/docusaurus/compare/v1.0.7...v1.0.8
[1.0.7]: https://github.com/facebook/docusaurus/compare/v1.0.6...v1.0.7
[1.0.6]: https://github.com/facebook/docusaurus/compare/v1.0.5...v1.0.6
[1.0.5]: https://github.com/facebook/docusaurus/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/facebook/docusaurus/compare/v1.0.3...v1.0.4
