// set url from terminal "node index.js 'https://sample.com/' "
var argv = process.argv.slice(2).toString();

// set cookie in env file
require('dotenv').config();


const prettier = require("prettier");
var axios = require('axios');


// axios 
var config = {
  method: 'post',
  url: argv,
  headers: {
    'cookie': process.env.COOKIE,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
};


axios(config)
  .then(function(response) {
    const decodedData = JSON.stringify(decoder(response.data))
    console.log(prettier.format('## decoded data', { parser: 'markdown' }), prettier.format(decodedData, { semi: false, parser: "json" }));
    console.log(prettier.format('## encoded data', { parser: 'markdown' }), encoder(decodedData));

  })
  .catch(function(error) {
    console.log(error);
  });

// response decoder

const atob = (base64) => Buffer.from(base64, 'base64').toString('binary');
function gdidecode(str) {
  var gdijsorg_0x5579 = ['join', 'toString', '114773LJlqPi', 'charCodeAt', '1evaKJu', '128429mQiVMM', '179727icrnig', '1276161MsgKkV', 'map', '111987FmCZVm', '6IEPbgT', '1924817UdCjIN', '328673bHHLnC', '14sGLkvR'];
  var gdijsorg_0x22bf03 = gdijsorg_0x47d3;
  (function(_0x2015a9, _0x2d2e6f) {
    var _0x194131 = gdijsorg_0x47d3;
    while (!![]) {
      try {
        var _0x50490c = parseInt(_0x194131(0x167)) * -parseInt(_0x194131(0x165)) + parseInt(_0x194131(0x160)) + parseInt(_0x194131(0x15e)) + -parseInt(_0x194131(0x161)) * -parseInt(_0x194131(0x15f)) + parseInt(_0x194131(0x162)) * -parseInt(_0x194131(0x168)) + -parseInt(_0x194131(0x16a)) + parseInt(_0x194131(0x169));
        if (_0x50490c === _0x2d2e6f) break;
        else _0x2015a9['push'](_0x2015a9['shift']());
      } catch (_0x157d6c) {
        _0x2015a9['push'](_0x2015a9['shift']());
      }
    }
  }(gdijsorg_0x5579, 0xf40cd));

  function gdijsorg_0x47d3(_0x4aefd5, _0x2d1551) {
    _0x4aefd5 = _0x4aefd5 - 0x15e;
    var _0x557938 = gdijsorg_0x5579[_0x4aefd5];
    return _0x557938;
  }
  return decodeURIComponent(atob(str)['split']('')[gdijsorg_0x22bf03(0x16b)](function(_0x1cdc7a) {
    var _0x416153 = gdijsorg_0x22bf03;
    return '%' + ('00' + _0x1cdc7a[_0x416153(0x166)](0x0)[_0x416153(0x164)](0x10))['slice'](-0x2);
  })[gdijsorg_0x22bf03(0x163)](''));
}

function read(str) {
  var gdijsorg_0x1207 = ['join', '645298GrGsiK', '8269zzjDhb', '28wpErfD', '11eoSBcm', '3578714TboDnQ', 'slice', '52214BJnTpj', '14039GFHzjM', '187451gnBzKk', 'substr', 'reverse', '1262156NwMIzh', '2nDedhJ', 'split'];
  var gdijsorg_0x570bf1 = gdijsorg_0x158f;

  function gdijsorg_0x158f(_0x32bcea, _0x29ebfd) {
    _0x32bcea = _0x32bcea - 0x150;
    var _0x1207c1 = gdijsorg_0x1207[_0x32bcea];
    return _0x1207c1;
  } (function(_0xbbe83c, _0xbbffd8) {
    var _0x2feec5 = gdijsorg_0x158f;
    while (!![]) {
      try {
        var _0x5d3639 = parseInt(_0x2feec5(0x15c)) * -parseInt(_0x2feec5(0x150)) + -parseInt(_0x2feec5(0x15b)) + -parseInt(_0x2feec5(0x157)) + parseInt(_0x2feec5(0x151)) * parseInt(_0x2feec5(0x152)) + parseInt(_0x2feec5(0x153)) * -parseInt(_0x2feec5(0x156)) + parseInt(_0x2feec5(0x158)) + parseInt(_0x2feec5(0x154));
        if (_0x5d3639 === _0xbbffd8) break;
        else _0xbbe83c['push'](_0xbbe83c['shift']());
      } catch (_0x2894d2) {
        _0xbbe83c['push'](_0xbbe83c['shift']());
      }
    }
  }(gdijsorg_0x1207, 0xd11e8));
  var sa = str[gdijsorg_0x570bf1(0x15d)](''),
    ra = sa[gdijsorg_0x570bf1(0x15a)](),
    ja = ra[gdijsorg_0x570bf1(0x15e)](''),
    aj = ja[gdijsorg_0x570bf1(0x159)](0x18)[gdijsorg_0x570bf1(0x155)](0x0, -0x14);
  return aj;
}


const decoder = (argv) => JSON.parse(gdidecode(read(argv)));

// -- response encoder 

const btoa = (text) => Buffer.from(text, 'binary').toString('base64');


function rewrite(str) {
  var gdijsorg_0x4e46 = ['join', 'YmFzZTY0aXNleGNsdWRlZA==', '377943YNHRVT', '133527xcoEHq', '138191tQqett', '4JgyeDu', '299423DYjNuN', '622qCMSPH', 'reverse', 'split', '950361qrHraF', '1PjZtJR', '120619DeiSfH', '1153ekVsUn'];

  function gdijsorg_0x276f(_0x37674d, _0x2582b3) {
    _0x37674d = _0x37674d - 0x162;
    var _0x4e46db = gdijsorg_0x4e46[_0x37674d];
    return _0x4e46db;
  }
  var gdijsorg_0x3f8728 = gdijsorg_0x276f;
  (function(_0x4d8ef8, _0x302a25) {
    var _0x83f66b = gdijsorg_0x276f;
    while (!![]) {
      try {
        var _0x396eb3 = parseInt(_0x83f66b(0x16c)) * -parseInt(_0x83f66b(0x164)) + -parseInt(_0x83f66b(0x162)) * -parseInt(_0x83f66b(0x163)) + -parseInt(_0x83f66b(0x16b)) + -parseInt(_0x83f66b(0x167)) + -parseInt(_0x83f66b(0x169)) * -parseInt(_0x83f66b(0x16a)) + parseInt(_0x83f66b(0x168)) + parseInt(_0x83f66b(0x16f));
        if (_0x396eb3 === _0x302a25) break;
        else _0x4d8ef8['push'](_0x4d8ef8['shift']());
      } catch (_0x2dc29f) {
        _0x4d8ef8['push'](_0x4d8ef8['shift']());
      }
    }
  }(gdijsorg_0x4e46, 0x588f3));
  var sa = str[gdijsorg_0x3f8728(0x16e)](''),
    ra = sa[gdijsorg_0x3f8728(0x16d)](),
    ja = ra[gdijsorg_0x3f8728(0x165)](''),
    aj = 'Y29kZWlzcHJvdGVjdGVk' + ja + gdijsorg_0x3f8728(0x166);
  return aj;
}


function gdiencode(str) {
  var gdijsorg_0x40df = ['1KzJBAK', '1697708zMrtEu', '295396TasIvj', '21011Eyuayv', '1217593CxovUD', 'fromCharCode', '143062xekFCR', 'replace', '74bcHwvq', '73939wlqHSM', '2CBdqkc', '1712527AcNPoP'];
  var gdijsorg_0x5556bb = gdijsorg_0x56b1;
  (function(_0x3f3911, _0x38bce9) {
    var _0x32440e = gdijsorg_0x56b1;
    while (!![]) {
      try {
        var _0x2cab6f = -parseInt(_0x32440e(0xb3)) + -parseInt(_0x32440e(0xb7)) * -parseInt(_0x32440e(0xb6)) + -parseInt(_0x32440e(0xaf)) * -parseInt(_0x32440e(0xad)) + -parseInt(_0x32440e(0xb1)) + parseInt(_0x32440e(0xae)) + parseInt(_0x32440e(0xac)) + parseInt(_0x32440e(0xb0)) * -parseInt(_0x32440e(0xb5));
        if (_0x2cab6f === _0x38bce9) break;
        else _0x3f3911['push'](_0x3f3911['shift']());
      } catch (_0x34d506) {
        _0x3f3911['push'](_0x3f3911['shift']());
      }
    }
  }(gdijsorg_0x40df, 0xe5038));

  function gdijsorg_0x56b1(_0x1ccc20, _0x1596c4) {
    _0x1ccc20 = _0x1ccc20 - 0xac;
    var _0x40df0f = gdijsorg_0x40df[_0x1ccc20];
    return _0x40df0f;
  }
  return btoa(encodeURIComponent(str)[gdijsorg_0x5556bb(0xb4)](/%([0-9A-F]{2})/g, function toSolidBytes(_0xe8cc7f, _0x12410f) {
    var _0x1cce23 = gdijsorg_0x5556bb;
    return String[_0x1cce23(0xb2)]('0x' + _0x12410f);
  }));
}
const encoder = (data) => rewrite(gdiencode(JSON.stringify(data)))

