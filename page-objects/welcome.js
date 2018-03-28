module.exports = {
    
  url: 'https://welcome.chauffeur-prive.com',
  
  // xpath selector
  elem: {
      signInLink: '.sc-ksYbfQ.jSCsGm',
  },

  goToSignInPage: function () {
    return driver.click(page.welcome.elem.signInLink).then(function () {;
      /** Wait until username appears and order page is completed charged */
      return driver.waitForExist(page.signIn.elem.email3Txt, 10000);
    })
  },

};