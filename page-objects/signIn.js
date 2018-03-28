module.exports = {
    
  url: 'https://welcome.chauffeur-prive.com/signin',
  
  // xpath selector
  elem: {
      email1Txt: '//input[@id="email-1"]',
      pwd2Txt: '//input[@id="password-2"]',
      email3Txt: '//input[@id="email-3"]',
      pwd4Txt: '//input[@id="password-4"]',
      submitBtn: '.sc-jAaTju.dmqFvx',
      errorsLbl: '.sc-lhVmIH.cljhVd',
  },

  performSignIn: function (email, password) {
    //console.log('submit Btn getText' + driver.getHTML('.sc-jAaTju.dmqFvx'));
    return driver.element(page.signIn.elem.email3Txt).setValue(email).then(function(){
      //log.info('enter email ok');
      return driver.element(page.signIn.elem.pwd4Txt).setValue(password).then(function () {
        //log.info('enter password ok');
        return driver.click(page.signIn.elem.submitBtn);
      })
    })
  },

  waitForAuthentication: function () {
    /** Wait until username appears and order page is completed charged */
    return driver.waitForExist(page.order.elem.usernameLink, 10000).then(function () {
      //expect(url).to.equal(first_name + ' ' + last_name);
    });
  },

  stayOnSignInPage: function () {
    /** stay on Sign In page */
    return driver.waitForExist(page.signIn.elem.email3Txt, 10000).then(function () {
      //expect(url).to.equal(first_name + ' ' + last_name);
    });
  },

  AuthenticationResult: function (first_name, last_name) {
    /** return the promise the identified correspond to the first and last user names */
    return driver.getAttribute(page.order.elem.usernameLink, 'innerText').then(function (username) {
      expect(username).to.equal(first_name + ' ' + last_name);
    });
  },

  displayError: function (errorMessage) {
    /** return the promise the identified correspond to the first and last user names */
    return driver.waitForExist(page.signIn.elem.errorsLbl, 10000).then(function () {
      return driver.getAttribute(page.signIn.elem.errorsLbl, 'innerText').then(function (error) {
        expect(error).to.equal(errorMessage);
      });
    });
  },
    
};