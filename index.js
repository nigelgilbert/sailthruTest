import myTemplate from "./verifyChangePasswordTemplate.html";

var apiKey = sailthruKey,
  apiSecret = sailthruSecret,
  sailthru = require("sailthru-client").createSailthruClient(apiKey, apiSecret);

// var data = {
//   email: "michael.anokye@dallasnews.com",
//   lists: {
//     "list-a": 1,
//   },
// };

// sailthru.apiPost("email", data, function (err, response) {
//   if (!err) {
//     console.log(response);
//   } else {
//     console.log("Error!");
//     console.log(err);
//   }
// });

// send endpoint
var template = myTemplate,
  email = "michael.anokye@dallasnews.com",
  options = {
    vars: {
      name: "Michael Anokye",
      address: "Queens, NY",
    },
    options: {
      test: 1,
      replyto: "michael.anokye_123@dallasnews.com",
    },
  };
sailthru.send(template, email, options, function (err, response) {
  if (err) {
    console.log("Status Code: " + err.statusCode);
    console.log("Error Code: " + err.error);
    console.log("Error Message: " + err.errormsg);
  } else {
    //process output
    console.log(response);
  }
});
