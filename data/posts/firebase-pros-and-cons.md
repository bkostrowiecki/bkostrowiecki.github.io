---
title: Firebase conclusions
slug: firebase-conclusions
publicationAt: 2024-11-21
tags: Firebase, React, NextJS
category: Notes
abstract: Note about using Firebase
---

Recently I've developed the dashboard app for my development team. It's pretty simple. Main features are: creating widget with static information and tasks widget. In all of its simplicity I needed to have a realtime communication, because dashboards are open for whole workday.

To my surprise, firebase performs really well in this area. With use of Firestore I was able to create this app in 2 days and realtime communication work perfectely.

Firestore is really well designed. It simplifies development because I don't need to worry about updating old data to a new state. Firebase automatically propagates new data. If I subscribe to the query in one place, I don't need to implicitly order this place to refresh, it happens automatically when update come.

Because of it state management is 10x simplier that in standard Rest API and GraphQL queries.

I'm looking forward to see if there will be simmilar technology that I can use on my own server instead of using Google's.
