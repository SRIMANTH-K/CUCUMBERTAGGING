Feature: Checking guru99 and orangeHRm Login pages


@SmokeTest
Scenario: To check with valid username and valid password
Given user enter valid username and password
Then this is valid test
And close the browser

@RegressionTest 
Scenario: To check guruwebpage login page
Given person is login page
When title of the page is Guruwebpage
Then enter the valid username and password
And quit the browser

@End2EndTest
Scenario: To check with invalid username and invalid password
Given user is login page
Then user enter invalid username and password
And Get text of Alert box
And close browser