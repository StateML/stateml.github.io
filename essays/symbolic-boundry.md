---
title: 'The symbolic boundary of statecharts; hidden between the visual formalism and executable schematic'
date: '2021-11-21'
author: 'Chris Shank'
twitter: '@chrisshank23'
tags:
  - 'WIP'
---

> Design is about deciding on the boundaries. – [Grady Booch](https://twitter.com/Grady_Booch/status/1444754474426191873)

This tweet frames a tension that we believe deeply permeates the design of statecharts and its tooling. That tension stems from a duality that a statechart exists as; it is both a [visual formalism](https://link.springer.com/referenceworkentry/10.1007%2F978-0-387-39940-9_444) and a executable schematic. The former provides a way to visually reason and model behavior defined in a mathematically rigorous manner. The later allows you to take that model and bring it to life by executing it as actual code. This duality can partly be described as the declarative and imperative parts of the statechart. The declarative part of the statechart is the visual formalism hiding in a textual representation. The imperative part of the statechart enables it to become executable through a combination of a statechart interpreter plus the user-defined actions/guards/activities written in an imperative programming language. Without its imperative part the statechart is nothing more than a diagram, and without its declarative part the statechart is not much more than some imperative code. The two are inseparable, symbolically bound by names of actions, guards, ect. It is this boundary that we believe will help make StateML agnostic to any given language/environment, while furthermore enabling an author to more quickly iterate and simulate a statechart since they can push off writing implementation details until they feel ready too!

SCXML makes this boundary fuzzy as well with [executable content](https://www.w3.org/TR/scxml/#profile-dependentexecutablecontent). It's unclear where the line is drawn between SCXML and the implementations defined in the host language. It very much feels like this could have been the precursor to inline implementations that are common nowadays (needs more research).

XState blurs this symbolic boundary with action creators, inline guards, ect. For example, an inline action creator can be used to auto-generate a name for that action since it's a small declarative wrapper around imperative code. It's subtle but also it quite different than using just a function to define an action. It's possible to describe more of the imperative code without the user having to name it in the visualization. For example `assign({ count: (context) => count + 1 })` can be visualized as `assign count`. The question still stands for whether a name like `incrementCount` would better represent what the intent of the action is.
