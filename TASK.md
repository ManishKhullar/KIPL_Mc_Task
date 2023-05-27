<H1>Pre-requisites</H1>
<B>There are 2 small parts to this task:</B>
<H2> A Login API</H2>
<H2> A Permission API</H2>

<H3>Tasks:</H3>

1. A web app which generates data to log in<BR>
+  This is a simple application which generates a mock page login event each
time you click the button. <CODE>{(uid, API_mapping)}</CODE><BR>
2. A remote data store<BR>
+  Create and deploy a remote data store (mongoDB) to house the data from the provider app.<BR>
+  Create and deploy a method of writing data to and reading data from the store.<BR>
3  Create JWT Token<BR>
+  Create and deploy a method of writing data to and reading data from the store.<BR>
4. A web app which consumes data from the store<BR>
+  Create a web application which fetches page view events from your remote data<BR>
store and lists the users respective permission levels in a table.<BR>
+  Provide a mechanism to show what permissions users have.<BR>
5. Publish and share<BR>
+  Deploy this application so it is publicly accessible(Github).

TODO: [ ] DB schema creation<BR>
TODO: [ ] Express routes<BR>
TODO: [ ] Login Page view<BR>
TODO: [ ] JWT Token<BR>
TODO: [ ] Unit Test<BR>
TODO: [ ] Integration Test
