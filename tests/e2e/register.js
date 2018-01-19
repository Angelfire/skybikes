module.exports = {
  'Test title SkyBikes' : function (browser) {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
      .assert.title('SkyBikes', 'The <title> is correct')
      .end()
  },
  'Create new user' : function (browser) {
    browser
    .url('http://localhost:8080')
    .waitForElementVisible('form[name=register-form]')
    .setValue('input[name=rfirstname]', 'Andres')
    .setValue('input[name=rlastname]', 'Bedoya')
    .setValue('input[name=rphonenumber]', '3096419390')
    .setValue('input[name=remail]', 'andres.bedoya@example.com')
    .click('input[name=register]')
    .waitForElementVisible('#citizen-sb')
    .end()
  }
}