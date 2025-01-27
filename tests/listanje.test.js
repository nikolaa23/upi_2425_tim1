const fs = require('fs');
const { JSDOM } = require('jsdom');

let dom;
let document;

beforeAll(() => {
    const html = fs.readFileSync('listanje.html', 'utf8');
    dom = new JSDOM(html);
    document = dom.window.document;
});

test('postoji li naslov', () => {
    const title = document.querySelector('title');
    expect(title).not.toBeNull();
});

test('postoji li login sekcija', () => {
    const loginSection = document.querySelector('#login-section');
    expect(loginSection).not.toBeNull();
});

test('provjeri je li registracijska sekcija skrivena na početku', () => {
    const registerSection = document.querySelector('#register-section.hidden');
    expect(registerSection).not.toBeNull();
});

test('provjeri je li glavna sekcija skrivena na početku', () => {
    const mainSection = document.querySelector('#main-section.hidden');
    expect(mainSection).not.toBeNull();
});



test('provjeri je li gumb za prijavu prisutan', () => {
    const loginButton = document.querySelector('#login-btn');
    expect(loginButton).not.toBeNull();
});

test('provjeri je li gumb za registraciju prisutan', () => {
    const registerButton = document.querySelector('#register-btn');
    expect(registerButton).not.toBeNull();
});

test('provjeri je li gumb za odjavu prisutan', () => {
    const logoutButton = document.querySelector('#logout-btn');
    expect(logoutButton).not.toBeNull();
});

test('provjeri je li gumb za prethodni mjesec prisutan', () => {
    const prevMonthButton = document.querySelector('#prev-month-btn');
    expect(prevMonthButton).not.toBeNull();
});

test('provjeri je li gumb za sljedeći mjesec prisutan', () => {
    const nextMonthButton = document.querySelector('#next-month-btn');
    expect(nextMonthButton).not.toBeNull();
});

test('provjeri je li gumb za spremanje screenshota prisutan', () => {
    const saveScreenshotButton = document.querySelector('#save-screenshot-btn');
    expect(saveScreenshotButton).not.toBeNull();
});

test('provjeri je li prikaz korisničkog imena prisutan', () => {
    const usernameDisplay = document.querySelector('#username-display');
    expect(usernameDisplay).not.toBeNull();
});

test('provjeri je li polje za unos satnice prisutno', () => {
    const hourlyRateInput = document.querySelector('#hourly-rate');
    expect(hourlyRateInput).not.toBeNull();
});

test('provjeri je li sažetak prisutan', () => {
    const summary = document.querySelector('#summary');
    expect(summary).not.toBeNull();
});

test('provjeri je li prikaz ukupnih sati prisutan', () => {
    const totalHours = document.querySelector('#total-hours');
    expect(totalHours).not.toBeNull();
});

test('provjeri je li prikaz slobodnih dana prisutan', () => {
    const totalFreeDays = document.querySelector('#total-free-days');
    expect(totalFreeDays).not.toBeNull();
});

test('provjeri je li prikaz ukupne plaće prisutan', () => {
    const totalSalary = document.querySelector('#total-salary');
    expect(totalSalary).not.toBeNull();
});