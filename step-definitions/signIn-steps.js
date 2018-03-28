module.exports = function (){

  this.Given(/^The user arrives on the welcome page$/, function() {
    return helpers.loadPage(page.welcome.url, 10);
  });

  this.Given(/^I go to Sign In page$/, function () {
    return page.welcome.goToSignInPage();
  });

  this.When(/^I Sign In with credentials (.*) and (.*)$/, function (login, password) {
    return page.signIn.performSignIn(login, password);
  });

  this.Then(/^I should be successfully authenticated as (.*) (.*)$/, function (first_name, last_name) {
    return page.signIn.AuthenticationResult(first_name, last_name);
  });

  this.Then(/^I should be redirected to order page$/, function () {
    return page.signIn.waitForAuthentication();
  });

};