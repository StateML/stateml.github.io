---
title: 'The deep history of history states'
date: '2022-01-03'
author: 'Chris Shank'
twitter: 'chrisshank23'
tags: ['WIP']
---

The history state is likely one of the most magical and confusing parts of the statechart formalism, so we wanted to spend some time exploring the _history_ of history state to help demystify it and figure out what its purpose it.

The first publicly known image of a history dates back to page 22 of [Statecharts in the Making: A Personal Account](https://www.wisdom.weizmann.ac.il/~harel/papers/Statecharts.History.pdf). In this paper, David Harel reflects on his personal account of pioneering statecharts and we are lucky enough to see some of his earliest sketches of statecharts from around 1982.

![Page from the IAI notes (mid-1983; events in Hebrew) showing a relatively "clean" draft of the top levels of behavior for the main flight modes of the Lavi avionics. These are A/A (air-air), A/G (air-ground), NAV (automatic navigation) and ON GRD (on ground). Note the early use of a history connector in the A/G mode.](/harel-history-state-sketch.png)

The transitions leaving the history state that Harel erased reveals something fundamental about its nature.

But that doesn't mean that the transition is non-deterministic and breaks an important guarantee of statecharts.
