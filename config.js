require('dotenv').config()

// External API endpoints
const APIs = {
  xteam:    'https://api.xteam.xyz',
  dzx:      'https://api.dhamzxploit.my.id',
  lol:      'https://api.lolhuman.xyz',
  violetics:'https://violetics.pw',
  neoxr:    'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari:   'https://api.akuari.my.id',
  akuari2:  'https://apimu.my.id',
  nrtm:     'https://fg-nrtm.ddns.net',
  bg:       'http://bochil.ddns.net',
  fgmods:   'https://api-fgmods.ddns.net'
}

// Corresponding API keys
const APIKeys = {
  'https://api.xteam.xyz':        'd90a9e986e18778b',
  'https://api.lolhuman.xyz':     '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id':      'yourkey',
  'https://violetics.pw':         'beta',
  'https://zenzapis.xyz':         'yourkey',
  'https://api-fgmods.ddns.net':  'fg-dylux'
}

// Core bot settings
const config = {
  BOT_NAME:      'AidenBot MD',
  OWNER_NAME:    'Oliver Sikanga',
  FOOTER:        '⚡ Powered by AidenBot',
  PREFIX:        '.',
  WARN_COUNT:    3,
  GROUP_LIMIT:   250,
  AUTO_WELCOME:  true,
  APIs,
  APIKeys
}

module.exports = config
