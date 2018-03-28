module.exports = {
    
  url: 'https://welcome.chauffeur-prive.com/signin',
  
  // xpath selector
  elem: {
      emailTxt: '//input[@id="email-3"]',
      pwdTxt: '//input[@id="password-4"]',
      submitBtn: '.sc-jAaTju.dmqFvx',
  },

  performSignIn: function (email, password) {
    //console.log('submit Btn getText' + driver.getHTML('.sc-jAaTju.dmqFvx'));
    return driver.element(page.signIn.elem.emailTxt).setValue(email).then(function(){
      //log.info('enter email ok');
      return driver.element(page.signIn.elem.pwdTxt).setValue(password).then(function () {
        //log.info('enter password ok');
        return driver.click(page.signIn.elem.submitBtn);
      })
    })
  },

  waitForAuthentication: function () {
    /** Wait until username appears and order page is completed charged */
    return driver.waitForExist(page.order.elem.usernameLink, 10000);
  },

  AuthenticationResult: function (first_name, last_name) {
    /** return the promise the identified correspond to the first and last user names */
    return driver.getAttribute(page.order.elem.usernameLink, 'innerText').then(function (username) {
      expect(username).to.equal(first_name + ' ' + last_name);
    });
  }
    
};