$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 3,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter \u003cusername\u003e into username text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter \u003cpassword\u003e into password text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;1"
    },
    {
      "cells": [
        "ilhan@sample.com",
        "test123"
      ],
      "line": 20,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;2"
    },
    {
      "cells": [
        "hasan@sample.com",
        "wer1233"
      ],
      "line": 21,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;3"
    },
    {
      "cells": [
        "ismet@sample.com",
        "asdr123"
      ],
      "line": 22,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5323659161,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 530723352,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter ilhan@sample.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter test123 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ilhan@sample.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 30
    }
  ],
  "location": "LoginSD.enterDataUserAndPAssField(String,String)"
});
formatter.result({
  "duration": 193181396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginSD.enterDataUserAndPAssField(String,String)"
});
formatter.result({
  "duration": 110962995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login button",
      "offset": 11
    }
  ],
  "location": "LoginSD.clickOnButton(String)"
});
formatter.result({
  "duration": 110900703,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 28385371527,
  "status": "passed"
});
formatter.after({
  "duration": 105134899,
  "status": "passed"
});
formatter.before({
  "duration": 3180219443,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 11169206,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter hasan@sample.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter wer1233 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hasan@sample.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 30
    }
  ],
  "location": "LoginSD.enterDataUserAndPAssField(String,String)"
});
formatter.result({
  "duration": 334148234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wer1233",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginSD.enterDataUserAndPAssField(String,String)"
});
formatter.result({
  "duration": 180189995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login button",
      "offset": 11
    }
  ],
  "location": "LoginSD.clickOnButton(String)"
});
formatter.result({
  "duration": 108534991,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 27567379879,
  "status": "passed"
});
formatter.after({
  "duration": 106422333,
  "status": "passed"
});
formatter.before({
  "duration": 3033790024,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 50327287,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter ismet@sample.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter asdr123 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ismet@sample.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 30
    }
  ],
  "location": "LoginSD.enterDataUserAndPAssField(String,String)"
});
formatter.result({
  "duration": 311111680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdr123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginSD.enterDataUserAndPAssField(String,String)"
});
formatter.result({
  "duration": 184903885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login button",
      "offset": 11
    }
  ],
  "location": "LoginSD.clickOnButton(String)"
});
formatter.result({
  "duration": 96625306,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 4979213769,
  "status": "passed"
});
formatter.after({
  "duration": 101387032,
  "status": "passed"
});
formatter.uri("Messenger.feature");
formatter.feature({
  "line": 2,
  "name": "Messenger page feature",
  "description": "",
  "id": "messenger-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 2837126203,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on messenger page",
  "keyword": "Given "
});
formatter.match({
  "location": "MessengerSD.setMessengerPage()"
});
formatter.result({
  "duration": 1994049668,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify invalid login from messenger page",
  "description": "",
  "id": "messenger-page-feature;verify-invalid-login-from-messenger-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@messenger"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter ilhanturkmen@siliconelabs.com into username field on the messenger page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter test123 into password field on the messenger page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on login button on messenger page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify invalid login message on sign in page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ilhanturkmen@siliconelabs.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 43
    }
  ],
  "location": "MessengerSD.enterDataIntoTextField(String,String)"
});
formatter.result({
  "duration": 203971584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "MessengerSD.enterDataIntoTextField(String,String)"
});
formatter.result({
  "duration": 74183929,
  "status": "passed"
});
formatter.match({
  "location": "MessengerSD.clickOnSignButton()"
});
formatter.result({
  "duration": 1634637942,
  "status": "passed"
});
formatter.match({
  "location": "MessengerSD.verifySignInErrorMessage()"
});
formatter.result({
  "duration": 30674414,
  "status": "passed"
});
formatter.after({
  "duration": 101638988,
  "status": "passed"
});
});