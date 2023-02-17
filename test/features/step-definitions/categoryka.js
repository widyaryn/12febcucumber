const { Given, When, Then } = require('@wdio/cucumber-framework');


Given(/^Website homepage$/, async ()=> {
    await browser.url("https://kasirdemo.belajarqa.com/");
    await browser.pause(1000)
})
When(/^User input (.*) and (.*)$/,async function (email, password) {
    await $("#email").setValue(email);
    await $("#password").setValue(password);
})
When(/^User click login button$/, async function (){
    await $("#root > div > div > div > div.css-1w7v3tn > div > button").click()
    await browser.pause(1000)
})
When(/^User click menu kategori$/, async function (){
    await $("#root > div > div > div.css-tnxwfz > div > a:nth-child(6) > div > div > div").click()
})
When(/^User click button tambah$/, async function (){
    await $("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a").click()
    await browser.pause(1000)
})
When(/^User input nama: (\w+)$/,async function (nama) {
    await $("#nama").setValue(nama);
    await browser.pause(1000)
})
When(/^User input deskripsi: (.*)$/,async function (deskripsi) {
    await $("#deskripsi").setValue(deskripsi);
    await browser.pause(1000)
})
Then(/^User click button simpan$/, async function (){
    await $("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button").click()
    await browser.pause(2000)
})