# Readable
## A Udacity assignment in React/Redux

## Introduction

The main goal of this assignment is to create a full functional blog that handles this requirements:

- Filter by category
- Create / edit blog posts
- A user can comment on a blog post
- Also can vote on a post in particular

## Setup

This project uses yarn for building. You can use npm if you like.

First run  `$ yarn` 

Then `$ yarn start` to start the application

Note: You need a version of the Backend server `reactnd-project-readable-starter` running before start the app.


## ToDos

- Default (Root)
    - should list all available categories, which should link to a category view for that category
    - should list all of the posts
    - should have a control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp
    - should have a control for adding a new post
- Category View
    - identical to the default view, but filtered to only include posts with the selected category
- Post Detail View
    - should show the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score
    - should list all of the comments for that post
    - should have controls to edit or delete the post
    - should have a control to add a new comment.
    - implement comment form however you want (inline, modal, etc.)
    - comments should also have controls for editing or deleting
- Create/Edit View
    - should have a form to create new post or edit existing posts
    - when editing, existing data should be populated in the form
