# Stolen Bike Cases - Backend (Node.js)

Coding Challenge Guidelines
===========================

Please organize, design, test, document and deploy your code as if it were
going into production, then send us a link to the hosted repository (e.g.
Github, Bitbucket...).

## Context
Stolen bikes are a typical problem in a lot of major cities. The Police want to be more efficient in resolving stolen bike cases. They decided to build a software that can automate their processes — the software that you're going to develop. 

## Product Requirements
- [ ] Bike owners can report a stolen bike.
- [ ] New stolen bike cases should be automatically assigned to any free police officer.  
- [ ] A police officer can only handle one stolen bike case at a time. 
- [ ] When the Police find a bike, the case is marked as resolved and the responsible police officer becomes available to take a new stolen bike case. 
- [ ] The system should be able to assign unassigned stolen bike cases automatically when a police officer becomes available.

## Your Mission
Your task is to provide APIs for a frontend application that satisfies all requirements above.

Please stick to the Product Requirements. You should not implement authorization and authentication, as they are not important for the assessment. Assume everyone can make requests to any API. 

## Tech Requirements
- Node.js
- **Tests (quality and coverage)**
- You are free to use any framework, but we prefer Vue
- Use any database (preferably Firestore)
- Typescript is a plus, but not required

## Instructions
- Build a performant, **clean and well-structured solution**.
- Commit early and often. We want to be able to check your progress.
- **Send us an email with a link to the repository when you finish the assessment**.
- Please do not spend more than 6 hours.
- Please complete your working solution within 7 days of receiving this challenge.

### Front-end

The front-end should ideally be a single page app with a single `index.html`
linking to external JS/CSS/etc. You may take this opportunity to demonstrate
your CSS3 or HTML5 knowledge.

Host it!
--------

When you’re done, host it somewhere (e.g. on Amazon EC2, Heroku, Google AppEngine, etc.).
