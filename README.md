# emergency-web-app

## Project Description

This project serves the "resala life saving - emergency" call center team. By enabling streamlined and validated workflows for each role,
and making it fast and easy to search, create, and update patient and blood donation requests records.

The focus is to create rapid prototypes for the team to use and give feedback, the app structure will be an SPA with a RESTful API.

## Receptionist Module
The receptionist is responsible for handling inbound calls from patients or patient relatives having a blood donation request.
A receptionist can:
- Input request and patient information in form, and type-ahead searching occurs to retrieve matching patient records.
- Load the patient fields in form and also patient's active request if any, by selecting a patient link from search results.
- Revert form state by deselecting patient link.
- Submit(create) valid blood requests.
- Update exisiting draft requests and save.
- Close(terminate) executing and submitted requests.

This [diagram](https://docs.google.com/presentation/d/10bYMVBsMwSXACLVEKUGS3Msg3Q-GuieuFeWXGuEsXS8/edit?usp=sharing) illustrates the blood request lifecylce from the receptionist role.

## Technologies Used

### Back-End
- Node.js
- Express.js
- MongoDD + Mongoose

### Front-End
- Angular


## Development Guidelines
### Dev:
- Pick up an issue from open column at the [project](https://github.com/Life-Saving-Team/emergency-web-app/projects/1).
- Assign it to yourself and move it to in progress.
- If you have any questions, post them on the issue and @mention the issue reporter.
- Create a new side branch locally with the task code. `git checkout -b {issue-code}`.
- Work on the task.
- Once finished push to the remote. `git push` or `git push -u origin {issue-code}` if it is the first push (no upstream branch exists).
- Create a pull request for {issue-code} branch into master.
- Move to code review.
- Now some other developer should do the code review part.
	
### Code Review:
- Assign an issue from code review to yourself.
- Review the pull request, and make sure everything is fine (the code looks clean, shouldn't break on edge cases, shouldn't break something else).
- Switch to the side branch of the issue `git checkout {issue-code}`.
- And make sure you have the latest commits `git pull`.
- Run, test locally, and make sure it works as expected in the issue.
- If you have any comments or questions or caught some bug (strictly related to the issue), post them on the issue and @mention the assigned developer.
- If you don't, merge the pull request, close the issue, and move it from code review to done.
		
### Back to Dev:
- When a reviewer finds something wrong with the issue that you need to fix.
- Move the issue from code review back to in progress.
- Do the fix.
- Push your changes.
- Move the issue to code review.
- Ping the reviewer to review again.