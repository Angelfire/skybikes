module.exports = {
  'Test title SkyBikes' : function (browser) {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
      .assert.title('SkyBikes', 'The <title> is correct')
      .end()
  },
  'Login user for sysadmin' : function (browser) {
    browser
    .url('http://localhost:8080')
    .waitForElementVisible('input[name=lemail]')
    .setValue('input[name=lemail]', 'sysadmin@sb.co')
    .click('input[name=login]')
    .waitForElementVisible('#admin-sb')
    .end()
  },
  'Login user for citizen worker' : function (browser) {
    browser
    .url('http://localhost:8080')
    .waitForElementVisible('input[name=lemail]')
    .setValue('input[name=lemail]', 'sbworker@sb.co')
    .click('input[name=login]')
    .waitForElementVisible('#worker-sb')
    .end()
  }
}
