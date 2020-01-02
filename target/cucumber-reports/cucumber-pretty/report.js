$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/srima/workspace1/CCUCMBERTAGGING/src/test/java/FeatureFile/Tagging.feature");
formatter.feature({
  "line": 1,
  "name": "Checking guru99 and orangeHRm Login pages",
  "description": "",
  "id": "checking-guru99-and-orangehrm-login-pages",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "To check with valid username and valid password",
  "description": "",
  "id": "checking-guru99-and-orangehrm-login-pages;to-check-with-valid-username-and-valid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enter valid username and password",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "this is valid test",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "TaggingStepDefinition.user_enter_valid_username_and_password()"
});
formatter.result({
  "duration": 35492606300,
  "status": "passed"
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_valid_test()"
});
formatter.result({
  "duration": 13612400,
  "status": "passed"
});
formatter.match({
  "location": "TaggingStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 4191633000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "To check guruwebpage login page",
  "description": "",
  "id": "checking-guru99-and-orangehrm-login-pages;to-check-guruwebpage-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "person is login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "title of the page is Guruwebpage",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "enter the valid username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "TaggingStepDefinition.person_is_login_page()"
});
formatter.result({
  "duration": 38267043000,
  "status": "passed"
});
formatter.match({
  "location": "TaggingStepDefinition.title_of_the_page_is_Guruwebpage()"
});
formatter.result({
  "duration": 7338500,
  "status": "passed"
});
formatter.match({
  "location": "TaggingStepDefinition.enter_the_valid_username_and_password()"
});
formatter.result({
  "duration": 334456900,
  "status": "passed"
});
formatter.match({
  "location": "TaggingStepDefinition.quit_the_browser()"
});
formatter.result({
  "duration": 63507900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To check with invalid username and invalid password",
  "description": "",
  "id": "checking-guru99-and-orangehrm-login-pages;to-check-with-invalid-username-and-invalid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user is login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user enter invalid username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Get text of Alert box",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "TaggingStepDefinition.user_is_login_page()"
});
formatter.result({
  "duration": 43722076400,
  "status": "passed"
});
formatter.match({
  "location": "TaggingStepDefinition.user_enter_invalid_username_and_password()"
});
formatter.result({
  "duration": 215381300,
  "status": "passed"
});
formatter.match({
  "location": "TaggingStepDefinition.Get_text_of_Alert_box()"
});
formatter.result({
  "duration": 11195649300,
  "status": "passed"
});
formatter.match({
  "location": "TaggingStepDefinition.close_browser()"
});
formatter.result({
  "duration": 102717100,
  "status": "passed"
});
});