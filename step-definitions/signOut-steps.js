module.exports = function (){

  this.When(/^I try to Sign Out$/, function () {
    return page.order.performSignOut();
  });

  this.Then(/^I should not be authenticated$/, function () {
    return page.order.waitForRedirectionSignIn();
  });

   this.Then(/^I should be redirected to Sign In page$/, function () {
     return page.order.waitForRedirectionSignIn();
   });

};