module.exports = {
    
  url: 'https://welcome.chauffeur-prive.com/commander',
  
  // xpath selector
  elem: {
    usernameLink: '//a[contains(@class, "username_link")]',
    disconnectLink: '//a[contains(@class, "disconnect")]',
  },

  performSignOut: function () {
    return driver.waitForExist(page.order.elem.disconnectLink, 10000).then(function () {
    	return driver.click(page.order.elem.disconnectLink);
  	})
  },

	waitForDisconnection: function () {
    /** Wait until username desapears and login page is completed charged */
    return driver.waitForExist(page.order.elem.usernameLink, 10000, reverse).then(function () {
    })
  },

  waitForRedirectionSignIn: function () {
    /** Wait until username desapears and login page is completed charged */
    return driver.waitForExist(page.signIn.elem.email1Txt, 10000).then(function () {
    })
  },
    
};