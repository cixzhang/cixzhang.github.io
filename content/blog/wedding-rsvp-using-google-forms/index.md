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

Here's the flow I wanted for my RSVPs:

1. The user is prompted to enter their name.
2. The page sends a request to a script that checks the name against the guest list. (Script #1)
3. If we're able to find the user, prompt the rest of the form questions.
4. Once the user submits, make a request to a second script that records the information. (Script #2)

[Script 1: The Guest List Checker](https://script.google.com/d/1koKbzUqZyLHREU2J36KJsmy6mlg3VIY7d1ezZyyBYzMPCyB5N5N1Ibh8/edit?usp=sharing)

[Script 2: The RSVP Response Recorder](https://script.google.com/d/1d5r0QPaxoDiBUt9RljSs7gdKAV0-BTaXf_3k-SVALGZl99i8h-2t0Ywr/edit?usp=sharing)

You can check out the [form component](https://github.com/cixzhang/cixzhang.github.io/blob/develop/src/components/wedding/RSVPForm.js) to see how this is all tied together!

**Note on the structure of the spreadsheet**

My spreadsheet contains a sheet named "RSVP". The first row of this spreadsheet contains the headers.
The scripts will check the position of the "Name" column to check the guest list, and the positions of
the "# Attending" and "Notes" columns for writing the response. If your spreadsheet doesn't look like
this, you'll need to adjust some lines in the scripts.

**What about editing the RSVP?**

In the current setup, guests can edit their responses by
resubmitting. Unfortunately, I don't prepopulate the form with the current response.
The risk here is that it would expose the guest attendance and notes to anyone who
knows their name. I decided that just being able to resend the RSVP should be sufficient.
If you want this feature for your own RSVPs, it should be fairly easy to implement.
You can reuse `findResponseRange` in the response recorder and return the values.
