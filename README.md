<H1> KIPL_Mc_Task</H1>

<H2>Create 2 API calls Login and Permission</H2>

+ <U>Login Table consists</U> UID and Password
UID is a mobile number
+ <U>Permission table consists</U> Uid and Permission Path and status

<b>Note: Database used is MongoDB</b>
- [ ] Express Required
- [ ] Node >16 Required

<H3>Note: Update .env file of backend with appropriate configuration for db configuration</H3>

<strong>This project is NOT having node_modules and is under development</strong>

<code>npm install</code>
Install all the repo.<br>
Open <code>http://localhost:3000</code> to view it in the browser.<br>
Open <code>./views/clientweb.html</code> to view it in the browser.<mark>Use drive path where the project file resides instead of the first dot (.) </mark><br>
Open <code>http://localhost:3000/api/permissions</code> to view <mark>Permission collection</mark><br>
Open <code>http://localhost:3000/api/login</code> to view <mark>JWT token against credentials in login collection</mark><br>


