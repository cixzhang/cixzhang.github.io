---
title: Guest Lists and RSVPs With Google Sheets
date: '2019-01-13T07:02:14.747Z'
tags: [wedding]
---

I'm getting married this year and decided that instead of dealing
with paper RSVPs, I want to do them digitally and automatically
update a Google Sheet that I'm using to keep track of all the details.
My first idea was to use Google Forms, but unfortunately there doesn't
seem to be a way to enforce that only guests on the list could respond.

However, there's a way to do this by using Google's App Scripts,
which makes it possible to have this functionality with all the benefits of
a form that's tied to your event spreadsheet. You don't even need to make 
the spreadsheet public since the scripts can run under your own permissions.

Here's how it works:

1. The User is prompted to enter their name.
2. The page sends a request to a script that checks the name against the guest list. (App Script #1)
3. If we're able to find the user, prompt the rest of the form questions.
4. Once the user submits, make a request to a second script that records the information. (App Script #2)

[Script 1: The Guest List Checker](https://script.google.com/d/1koKbzUqZyLHREU2J36KJsmy6mlg3VIY7d1ezZyyBYzMPCyB5N5N1Ibh8)

[Script 2: The RSVP Recorder](https://script.google.com/d/1d5r0QPaxoDiBUt9RljSs7gdKAV0-BTaXf_3k-SVALGZl99i8h-2t0Ywr)

Other features I missed:

* Editing the RSVP: In the current setup, guests can edit their responses by
  resubmitting. Unfortunately, I don't prepopulate the form with the current response.
  The risk here is that it would expose the guest attendance and notes to anyone who
  knows their name. I decided that just being able to resend the RSVP should be sufficient.
