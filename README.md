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

