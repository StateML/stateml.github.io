---
title: 'The Initial State: An Overview'
date: '2021-10-14'
author: 'Chris Shank'
twitter: '@chrisshank23'
---

<!-- this draft is abandoned, it needs a smaller scope.  -->

Hi! 👋🏼 Welcome to "The Initial State" digital garden! As we build out StateML we think that it's important to spend time writing and documenting our explorations, design decisions, and musings about the language and tooling we are building out for state machines and statecharts. There is so much to discuss, and we can't wait to share sharing more!

---

_Please note that this blog is more of a [digital garden](https://maggieappleton.com/garden-history) or [evergreen notes](https://notes.andymatuschak.org/Evergreen_notes) than a tradition blog. The idea is that posts will not be frozen in time after they are published. They will evolve as the language and tooling evolve._

---

At this point in time we have mostly been teasing things on [Twitter](https://www.twitter.com/stateml_org), but we haven't gone into great detail about our vision and north star for the language and tooling. The story of StateML starts over a year ago when [John Yanarella](https://twitter.com/johnyanarella) decided to writing an [SCXML](https://www.w3.org/TR/scxml/) and [`xstate`](https://github.com/statelyai/xstate) compatible statechart engine for Swift. Out of that emerged a working Swift interpreter, but more important the _seed_ of what would become a DSL specifically for statecharts.

![First preview of the statechart DSL.](/statesml-preview.png)

When [Owen Kelly](https://twitter.com/ojkelly) and I teamed up with John, we did a from-the-ground-up rethink of the language John had built out. We dissected every single word and character in the language looking for parts to simplify, remove, or make more expressive. We dove into the prior art of Harel, UML state machines, SCXML, xstate, ect. as the language is but a small iteration in comparison to everything that has come before it. That isn't to say that there are areas that could be improved, but aligning with the prior art as closely as we can is quite important.

<!-- This flow between paragraphs is off -->

Our vision for the language has stayed consistent throughout all of the iteration; to empower and embrace the statechart community to build the next-generation of statechart interpreters and tooling. We want to lessen the learning curve for statecharts, make it easier to build interpreters in new languages, export statecharts to existing interpreters/tooling (e.g. SCXML, xstate, ASL, ect.), provide a foundation that enables future tooling to be shared and reused around. This is not something that we want to gatekeep, nor something we could ever accomplish by ourselves.

As stewards for an ecosystem, the responsibility is on us to make sure that the ecosystem is able to evolve and grow on a stable foundation and we believe it starts with a small, concise language that pursues the ["Law of Least Power](https://www.w3.org/2001/tag/doc/leastPower.html). The language should strictly constrain features to those necessary to declaratively describe the shape of the state graph. This allows constraints work in our favor because it:

- Lightens the compatibility burden for creating new tools
- Reduces the learning curve for using those tools
- Maximizes the common surface area that can be shared across related tools
- While still allowing room for implementors to innovate at the edges.

This can be visually represented as [pace layers](https://blog.longnow.org/02015/01/27/stewart-brand-pace-layers-thinking-at-the-interval/). An ecosystem broken into multiple layers that each change at different paces. The more foundational the layer the slower speed it should change, while the layers at the edge should be able to innovate at a high pace.

![Pace layers of StateML, slowest pace on the bottom and highest pace on the top.](/stateml-pace-layers.png)

It's important to define what the lowest level called "Language" here because we are not necessarily speaking about the textual DSL here although it's highly related. We are referring to the linked statechart graph, which is an in-memory representation of the statechart that is parsed from textual representations. This is an important distinction because the linked statechart graph is the representation that facilitates interop between different formats and tools. It could be transformed to/from a visualization, `JSON`, a textual DSL, or other textual representations. It could also be passed directly to interpreters, visualizers and other tooling. Parsing the statechart is one example of a common surface area that _must_ be shared across various statechart tooling.

<!-- Display statechart projection image -->

Authoring is another common surface area that is shared across statecharts tooling. Between different textual formats (e.g. JSON, YAML, ect.), drag and drop editors, or direct manipulation of the statechart there are many approach to authoring statecharts and we believe it should be a first-class citizen of the ecosystem. While a textual format like JSON might be highly interoperable we believe that it's structure and accordances make it [a sub-optimal format for authoring statecharts](#). Thus we have designed a domain-specific language (DSL) from the ground up that can be used to declaratively author statecharts. We want to eliminate as much syntax noise as possible to hew as closely as code can to the visual formalism of statecharts. Furthermore error handling, syntax highlighting, ect. enable additional affordances that bring the DSL to life that are not possible with JSON. Again the linked statechart graph _will be_ serializable to JSON, but as a format to actually write statecharts we believe we can do a lot better.

1. Interoperability
1. Extensibility
1. Expressiveness
