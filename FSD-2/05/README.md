# Chapter 5 File Guide

This folder contains Express.js practice programs for forms, GET/POST requests, middleware, cookies, sessions, and static files.

## Main Tasks

| File | Purpose | Run |
| --- | --- | --- |
| `task1.html` + `task1.js` | GET calculator with validation | `node task1.js` |
| `task2.html` + `task2.js` | POST admin login check | `node task2.js` |
| `task6.html` + `task6.js` | Split message text by full stops | `node task6.js` |
| `index.html` + `task7.js` | Admin check using middleware | `node task7.js` |
| `Ctask.html` + `Ctask.js` | Store form values in cookies | `node Ctask.js` |
| `Ctask2.html` + `Ctask2.js` | Store feedback in a temporary cookie | `node Ctask2.js` |
| `Session.js` | Count page views using sessions | `node Session.js` |
| `cookie.js` | Basic cookie-setting demo | `node cookie.js` |

## Static File Examples

| Folder/File | Purpose | Run |
| --- | --- | --- |
| `JS/1.js`, `HTML/`, `CSS/`, `IMG/` | Serve separate static folders | `node JS/1.js` |
| `backend/1.js` + `frontend/` | Serve frontend folder from backend | `node backend/1.js` |

## Notes

- Most examples use port `3000`; run only one at a time unless the file uses another port.
- Cookie examples need `cookie-parser`.
- Session examples need `express-session`.
