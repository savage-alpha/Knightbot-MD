require('dotenv').config();

global.APIs = {
    xteam: 'https://api.xteam.xyz',
    dzx: 'https://api.dhamzxploit.my.id',
    lol: 'https://api.lolhuman.xyz',
    violetics: 'https://violetics.pw',
    neoxr: 'https://api.neoxr.my.id',
    zenzapis: 'https://zenzapis.xyz',
    akuari: 'https://api.akuari.my.id',
    akuari2: 'https://apimu.my.id',
    nrtm: 'https://fg-nrtm.ddns.net',
    bg: 'http://bochil.ddns.net',
    fgmods: 'https://api-fgmods.ddns.net'
};

global.APIKeys = {
    'https://api.xteam.xyz': 'd90a9e986e18778b',
    'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
    'https://api.neoxr.my.id': 'yourkey',
    'https://violetics.pw': 'beta',
    'https://zenzapis.xyz': 'yourkey',
    'https://api-fgmods.ddns.net': 'fg-dylux'
};

// 🔧 Bot Identity
global.BOT_NAME = 'AidenBot MD';
global.OWNER_NAME = 'Oliver Sikanga';
global.FOOTER = '⚡ Powered by AidenBot';
global.PREFIX = '.';

// 🔒 Group Settings
global.WARN_COUNT = 3;
global.GROUP_LIMIT = 250; // Optional: max group members
global.AUTO_WELCOME = true; // Enable welcome messages

module.exports = {
    WARN_COUNT: global.WARN_COUNT,
    APIs: global.APIs,
    APIKeys: global.APIKeys,
    BOT_NAME: global.BOT_NAME,
    OWNER_NAME: global.OWNER_NAME,
    FOOTER: global.FOOTER,
    PREFIX: global.PREFIX
};
