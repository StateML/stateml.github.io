---
title: 'The symbolic boundary of statecharts; hidden between the visual formalism and executable schematic'
date: '2021-10-21'
author: 'Chris Shank'
twitter: '@chrisshank23'
tags:
  - 'WIP'
---

> Design is about deciding on the boundaries. – [Grady Booch](https://twitter.com/Grady_Booch/status/1444754474426191873)

This tweet frames a tension that I think deeply permeates the design of statechart tooling and something that has been on my mind lately as I work on [StateML](https://twitter.com/StateML_org). That tension stems from duality that a statechart exists as; it is both a [visual formalism](https://link.springer.com/referenceworkentry/10.1007%2F978-0-387-39940-9_444) and a executable schematic. The former provides a way to visually reason and model behavior defined in a mathematically rigorous manner. The later allows you to take that model and bring it to life by running it as actual code. This duality can also be described as the declarative and imperative parts of the statechart. The declarative part of the statechart is the visual formalism hiding in a textual representation. The imperative part of the statechart enables it to become executable through a combination of a statechart interpreter + the user-defined actions/guards/activites written in an imperative programming language. Without its imperative part the statechart is nothing more than a diagram, and without its declarative part the statechart is not much more than imperative code. The two are inseperable, symbolically bound by names of actions, guards, ect.

- SCXML make this boundry fuzzy as well with [executable content](https://www.w3.org/TR/scxml/#profile-dependentexecutablecontent). It's unclear where the line is drawn between SCXML and the implementations defined in the host language. It very much feels like this could have been the precursor to inline implentations that are common nowadays (needs more research). Grady Booch brings up a good point [here](https://twitter.com/Grady_Booch/status/1388930413280727042?s=20). It seems like at the time that SCXML was first being drafted UML had already moved from a langauge for visualizing to a visual programming language.
- XState blurs this symbolic boundry with action creators. They allow you to inline actions but they auto-generate a name of the action, its a small declarative wrapper around imperative actions. It's subtle but it quite different than using plain functions to define actions.