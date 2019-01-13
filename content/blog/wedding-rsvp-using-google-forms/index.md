---
title: RSVPs With Google Forms
date: '2019-01-13T07:02:14.747Z'
tags: [wedding]
---

I'm getting married this year and decided that instead of dealing
with paper RSVPs, I want to do them digitally.

These days there are plenty of great free options for creating a
wedding site with RSVPs quickly and easily. You can create one with theKnot and
I believe Zola has this feature as well. The unfortunate part is that you need
to set up your RSVPs on their site. I just wanted an RSVP form that I could embed
onto my own site and connects with the Google Sheet I'm using to keep track
of all the invites.

Originally, I planned to link to a Google Form for the guest
to RSVP before deciding to embed a form on the page with a workflow.

The problem with my original plan was that the Google Form doesn't have
a way to validate or gate who can submit the form by whether they're in
the guest list. However, there's a way to do this by using Google's App Scripts,
which makes it possible to have this functionality with all the benefits of
a form that's tied to your event spreadsheet. I managed to accomplish
this by writing 2 App Scripts.

Here's how it works:

1. The User is prompted to enter their name.
2. The page sends a request to a script that checks the name against the guest list. (App Script #1)
3. If we're able to find the user, prompt the rest of the form questions.
4. Once the user submits, make a request to a second script that records the information. (App Script #2)

[App Script #1](https://script.google.com/d/1koKbzUqZyLHREU2J36KJsmy6mlg3VIY7d1ezZyyBYzMPCyB5N5N1Ibh8)

This script was created within the wedding spreadsheet. I've got a sheet that's named "RSVP"
which contained a list of everyone we wanted to invite to the wedding. The script loads
the list of names and returns all matches it can find.
