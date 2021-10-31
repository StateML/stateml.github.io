---
title: 'The Initial State: An Overview'
date: '2021-10-14'
author: 'Chris Shank'
twitter: '@chrisshank23'
---

Hi! 👋🏼 Welcome to "The Initial State" blog! As we build out StateML we think that it's important to spend time writing and documenting our explorations, design decisions, and musings about the language and tooling we are building out for state machines and statecharts. There is so much to discuss, and we can't wait to share sharing more!

---

_Please note that this blog is more of a [digital garden](https://maggieappleton.com/garden-history) or [evergreen notes](https://notes.andymatuschak.org/Evergreen_notes) than a tradition blog. The idea is that posts will not be frozen in time after they are published. They will evolve as the language and tooling evolve._

---

At this point in time we have mostly been teasing things on [Twitter](https://www.twitter.com/stateml_org), but we haven't gone into great detail about our vision and north star for the language and tooling. The story of StateML starts over a year ago when [John Yanarella](https://twitter.com/johnyanarella) decided to writing an [SCXML](https://www.w3.org/TR/scxml/) and [`xstate`](https://github.com/statelyai/xstate) compatible statechart engine for Swift. Out of that emerged a working Swift interpreter, but more important the _seed_ of what would become a DSL specifically for statecharts.

![First preview of the statechart DSL](/statesml-preview.png)

When [Owen Kelly](https://twitter.com/ojkelly) and I teamed up with John, we did a from-the-ground-up rethink of the language John had built out. We dissected every single word and character in the language looking for parts to simplify, remove, or make more expressive. We dove into the prior art of Harel, UML state machines, SCXML, xstate, ect. as the language is but a small iteration in comparison to everything that has come before it. That isn't to say that there are areas that could be improved, but aligning with the prior art as closely as we can is quite important. It also ties directly into our vision for the language; to empower and embrace the statechart community to build the next-generation of statechart interpreters and tooling. We want to lessen the learning curve, make it easier to build interpreters in new languages, export statecharts to existing interpreters/tooling (e.g. SCXML, xstate, ASL, ect.), and provide a foundation that enables future tooling to be shared and reused around.

1. Authoring
1. Interoperability
1. Extensibility
1. Expressiveness
