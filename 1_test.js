Feature('Верхнеуровневая проверка');

Scenario('Выбор адреса ПВЗ', ({ I }) => {
    I.amOnPage('https://test6.emex.ru/')
    I.seeElement('[data-testid="Header:link:mainLogo"]')
    I.setCookie({name: 'visitor-id', value: 'c0b34fdc-7b20-4505-9e5d-8699433967f7'})
    I.click('[data-testid="MainPage:field:searchInput"] button')
    I.click('[data-testid="Offers:button:addProductToBasketFromTableoriginalsFord1744977[0]"]')
    I.click('[data-testid="MiniBasket:button:makeOrder"]')
    I.click('Выбрать пункт выдачи')
    I.click('Уменьшить масштаб')
    I.see('Эмекс на 50 лет Октября')
});

Scenario('Переход на страницу корзины', ({ I }) => {
    I.amOnPage('https://test6.emex.ru/')
    I.seeElement('[data-testid="Header:link:mainLogo"]')
    I.seeVisualDiffForElement('[data-testid="Header:link:mainLogo"]','logo.png')
    I.setCookie({name: 'visitor-id', value: 'c0b34fdc-7b20-4505-9e5d-8699433967f7'})
    I.click('[data-testid="MainPage:field:searchInput"] button')
    I.click('[data-testid="Offers:button:addProductToBasketFromTableoriginalsFord1744977[0]"]')
    I.click('[data-testid="MiniBasket:button:makeOrder"]')
    I.seeElement('[data-testid="Basket:block:fullTable"]')
});

Scenario('Проверка запросов', async ({ I }) => {
    let user = await I.sendGetRequest('/api/users/2')
    await I.assertEqual(user.data.data.email , 'janet.weaver@reqres.in')
    let post = await I.sendPostRequest('https://test6.emex.ru/api/account/login', {"login":"598008","password":"qwe123!@#"})
    await I.assertEqual(post.status , 200)
});



