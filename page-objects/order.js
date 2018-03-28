module.exports = {
    
  url: 'https://welcome.chauffeur-prive.com/commander',
  
  // xpath selector
  elem: {
    usernameLink: '//a[contains(@class, "username_link")]',
    disconnectLink: '//a[contains(@class, "disconnect")]',
  },

  performSignOut: function () {
    return driver.click(page.order.elem.disconnectLink).then(function () {
    })
  },

	waitForDisconnection: function () {
    /** Wait until username desapears and login page is completed charged */
    return driver.waitForExist(page.order.elem.usernameLink, 10000);
  },

  waitForRedirectionSignIn: function () {
    /** Wait until username desapears and login page is completed charged */
    return driver.waitForExist(page.signIn.elem.email1Txt, 10000);
  },
    
};