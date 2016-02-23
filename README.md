## Installation

Environment for project:
1. Node.js 
2. install Python 2.5 - 3.0 (for NodeMailer module)
3. Grunt js 
4. Bower

Hint: use this command for install project dependencies 
	npm install && bower install

For Contact Us form need NodeMailer (https://nodemailer.com/).
In the root folder we have file - server.js, where we setup our settings for send email.



## Development process

Watch changes in project with command
	grunt serve
or 
	grunt watch

If you need start server:
	node server.js
	
	

## How to create .zip for deployment

For project build use command:
	grunt 
or
	grunt build
	
After that build compiled in folder - /dist.

Create .zip file from folder /dist 
If you made changes for server.js file - add file to archive

