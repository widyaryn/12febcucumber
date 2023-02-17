// import { Given,When,Then } from "@cucumber/cucumber";
// import { Given, When, Then } from './node_modules/@wdio/cucumber-framework/*';
// const { Given, When, Then } = require('@cucumber/cucumber');
const { Given, When, Then } = require('@wdio/cucumber-framework');


Given(/^Website homepage$/, async ()=> {
    await browser.url("https://kasirdemo.belajarqa.com/");
    await browser.pause(1000)
})
When(/^User input (.*) and (.*)$/,async function (email, password) {
    await $("#email").setValue(email);
    await $("#password").setValue(password);
})
Then(/^User click login button$/, async function (){
    await $("#root > div > div > div > div.css-1w7v3tn > div > button").click()
    await browser.pause(1000)
})
