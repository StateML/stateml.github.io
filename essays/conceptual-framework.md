---
title: 'Building a conceptual framework around the design of StateML'
date: '2022-08-25'
author: 'John Yanarella'
twitter: 'johnyanarella'
tags: ['WIP']
---

_This essay lays out a first attempt to lay out the conceptual framework used to design the StateML langauge. Expect this document to be updated as we learn how to better articulate this framework._

A declarative language is at its best when it exhibits the principle of least power. It should be easy to generate from imperative languages. And the model it defines should be easy to interrogate and consume from imperative languages.

This grants great power to use that encoded model in whatever manner you can image, without shoe-horning unrelated complexity into the original declarative format.

Similarly, the ability to subsequently transform that declarative model into other declarative forms (or in the opposite direction, extract that declarative model from another declarative form) allows you to move up and down the ladder of abstraction.

When it comes to diagrams, our most evocative primitives are boxes and arrows. They represent topological concerns: containment and connection. They activate our spatial reasoning. They express relationships instead of concrete values.

However, these boxes and arrows mean different things when reasoning about or describing different dimensions or perspectives of a problem space, as we do in different types of diagrams (ex. activity, flow, entity relationship, state machine, etc.).

All (good) diagrams embody an expression of some kind of visual grammar. The elements of graphic design are incorporated in them according to some consistent underlying rules. Ideally, a textual DSL and the visual representation for a diagram are mapped in a manner that is 1:1.

Any attempt for a singular language to describe all diagram types ultimately describes nothing in particular (or invariably doesn't provide the isolated dimension or perspective you need). You end up with things that describe the diagram in terms of drawing commands instead of the semantic model or topological concerns you want to communicate and reason about.
