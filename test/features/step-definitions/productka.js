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
When(/^User click menu produk$/, async function (){
    await $("#root > div > div > div.css-tnxwfz > div > a:nth-child(7) > div > div > div").click()
})
When(/^User click button tambah$/, async function (){
    await $("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a").click()
    await browser.pause(1000)
})
When(/^User input kode: (.*)$/,async function (kode) {
    await $("#kode").setValue(kode);
    // await browser.pause(1000)
})
When(/^User input nama: (\w+)$/,async function (nama) {
    await $("#nama").setValue(nama);
    // await browser.pause(1000)
})
When(/^User input deskripsi: (.*)$/,async function (deskripsi) {
    await $("#deskripsi").setValue(deskripsi);
    // await browser.pause(1000)
})
When(/^User input harga beli: (.*)$/,async function (hargabeli) {
    await $("#harga\\ beli").setValue(hargabeli);
    // await browser.pause(1000)
})
When(/^User input harga jual: (.*)$/,async function (hargajual) {
    await $("#harga\\ jual").setValue(hargajual);
    // await browser.pause(1000)
})
When(/^User input stok: (.*)$/,async function (stok) {
    await $("#stok").setValue(stok);
    // await browser.pause(1000)
})
When(/^User click field kategori$/, async function (){
    await $("#kategori").click()
    await browser.pause(1000)
})
When(/^User click kategori: kopi$/, async function (){
    await $(".css-13n66qk=kopi").click()
    await browser.pause(1000)
})
When(/^User click button simpan$/, async function (){
    await $("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button").click()
    await browser.pause(2000)
})
Then(/^User should see produk page kasirAja$/, async function (){
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/products')
    await browser.pause(1000)
})