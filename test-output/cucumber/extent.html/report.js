$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/srima/workspace1/CCUCMBERTAGGING/src/test/java/FeatureFile/Tagging.feature");
formatter.feature({
  "line": 2,
  "name": "Checking guru99 and orangeHRm Login pages",
  "description": "",
  "id": "checking-guru99-and-orangehrm-login-pages",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "To check with valid username and valid password",
  "description": "",
  "id": "checking-guru99-and-orangehrm-login-pages;to-check-with-valid-username-and-valid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enter valid username and password",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "this is valid test",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "TaggingStepDefinition.user_enter_valid_username_and_password()"
});
formatter.result({
  "duration": 33533822000,
  "status": "passed"
});
formatter.match({
  "location": "TaggingStepDefinition.this_is_valid_test()"
});
formatter.result({
  "duration": 11253900,
  "status": "passed"
});
formatter.match({
  "location": "TaggingStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 4126854500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "To check guruwebpage login page",
  "description": "",
  "id": "checking-guru99-and-orangehrm-login-pages;to-check-guruwebpage-login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "person is login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of the page is Guruwebpage",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "enter the valid username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "TaggingStepDefinition.person_is_login_page()"
});
formatter.result({
  "duration": 31270742600,
  "status": "passed"
});
formatter.match({
  "location": "TaggingStepDefinition.title_of_the_page_is_Guruwebpage()"
});
formatter.result({
  "duration": 10135400,
  "status": "passed"
});
formatter.match({
  "location": "TaggingStepDefinition.enter_the_valid_username_and_password()"
});
formatter.result({
  "duration": 278846300,
  "status": "passed"
});
formatter.match({
  "location": "TaggingStepDefinition.quit_the_browser()"
});
formatter.result({
  "duration": 4325248500,
  "status": "passed"
});
});