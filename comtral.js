const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
app.get('/', (_0x22fda2, _0x44ed6b) => {
  _0x44ed6b.send("LUCKY MD XFORCE💨 IS ALIVE 🫧");
});
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function (_0x4cea14, _0x531e0b, _0x493f16, _0x40b556) {
  if (_0x40b556 === undefined) {
    _0x40b556 = _0x493f16;
  }
  var _0x2257ec = Object.getOwnPropertyDescriptor(_0x531e0b, _0x493f16);
  if (!_0x2257ec || ("get" in _0x2257ec ? !_0x531e0b.__esModule : _0x2257ec.writable || _0x2257ec.configurable)) {
    _0x2257ec = {
      'enumerable': true,
      'get': function () {
        return _0x531e0b[_0x493f16];
      }
    };
  }
  Object.defineProperty(_0x4cea14, _0x40b556, _0x2257ec);
} : function (_0x5676e9, _0x1377a7, _0x45bf06, _0x351c07) {
  if (_0x351c07 === undefined) {
    _0x351c07 = _0x45bf06;
  }
  _0x5676e9[_0x351c07] = _0x1377a7[_0x45bf06];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (_0x54b63e, _0x2a7db8) {
  Object.defineProperty(_0x54b63e, "default", {
    'enumerable': true,
    'value': _0x2a7db8
  });
} : function (_0x5e3ceb, _0x43baaf) {
  _0x5e3ceb["default"] = _0x43baaf;
});
var __importStar = this && this.__importStar || function (_0x537a8a) {
  if (_0x537a8a && _0x537a8a.__esModule) {
    return _0x537a8a;
  }
  var _0x2d29c4 = {};
  if (_0x537a8a != null) {
    for (var _0x26acf5 in _0x537a8a) if (_0x26acf5 !== "default" && Object.prototype.hasOwnProperty.call(_0x537a8a, _0x26acf5)) {
      __createBinding(_0x2d29c4, _0x537a8a, _0x26acf5);
    }
  }
  __setModuleDefault(_0x2d29c4, _0x537a8a);
  return _0x2d29c4;
};
var __importDefault = this && this.__importDefault || function (_0x2e027c) {
  return _0x2e027c && _0x2e027c.__esModule ? _0x2e027c : {
    'default': _0x2e027c
  };
};
Object.defineProperty(exports, "__esModule", {
  'value': true
});
const baileys_1 = __importStar(require("@whiskeysockets/baileys"));
const logger_1 = __importDefault(require("@whiskeysockets/baileys/lib/Utils/logger"));
const logger = logger_1["default"].child({});
logger.level = "silent";
const pino = require("pino");
const boom_1 = require("@hapi/boom");
const conf = require("./set");
const axios = require("axios");
let fs = require("fs-extra");
let path = require("path");
const FileType = require("file-type");
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  verifierEtatJid,
  recupererActionJid
} = require("./lib/antilien");
const {
  containsBadText
} = require("./lib/antibad");
const {
  containsBug,
  isAntiBugOn
} = require("./lib/antibug");
const {
  atbverifierEtatJid,
  atbrecupererActionJid
} = require("./lib/antibot");
const {
  sendMessage,
  getContextInfo
} = require("./fredi/context");
const stickerJsonPath = path.join(__dirname, "../fredie/autosticker.json");
let evt = require(__dirname + "/fredi/ezra");
const {
  isUserBanned,
  addUserToBanList,
  removeUserFromBanList
} = require("./lib/banUser");
const {
  addGroupToBanList,
  isGroupBanned,
  removeGroupFromBanList
} = require("./lib/banGroup");
const {
  isGroupOnlyAdmin,
  addGroupToOnlyAdminList,
  removeGroupFromOnlyAdminList
} = require("./lib/onlyAdmin");
let {
  reagir
} = require(__dirname + "/fredi/app");
var session = conf.session.replace(/LUCKY-XFORCE••<=>/g, '');
const prefixe = conf.PREFIXE;
async function authentification() {
  try {
    if (!fs.existsSync(__dirname + "/scan/creds.json")) {
      console.log("connexion en cour ...");
      await fs.writeFileSync(__dirname + "/scan/creds.json", atob(session), "utf8");
    } else if (fs.existsSync(__dirname + "/scan/creds.json") && session != "fred") {
      await fs.writeFileSync(__dirname + "/scan/creds.json", atob(session), "utf8");
    }
  } catch (_0x1e34af) {
    console.log("Session Invalid " + _0x1e34af);
    return;
  }
}
authentification();
0;
const store = baileys_1.makeInMemoryStore({
  'logger': pino().child({
    'level': "silent",
    'stream': "store"
  })
});
setTimeout(() => {
  authentification();
  async function _0x55ec3d() {
    0;
    const {
      version: _0x20eb69,
      isLatest: _0xfb3c6a
    } = await baileys_1.fetchLatestBaileysVersion();
    0;
    const {
      state: _0x28be91,
      saveCreds: _0x48773b
    } = await baileys_1.useMultiFileAuthState(__dirname + "/scan");
    0;
    const _0x1244d2 = {
      'version': _0x20eb69,
      'logger': pino({
        'level': "silent"
      }),
      'browser': ["Lucky-Md-Xforce", "safari", "1.0.0"],
      'printQRInTerminal': true,
      'fireInitQueries': false,
      'shouldSyncHistoryMessage': true,
      'downloadHistory': true,
      'syncFullHistory': true,
      'generateHighQualityLinkPreview': true,
      'markOnlineOnConnect': false,
      'keepAliveIntervalMs': 0x7530,
      'auth': {
        'creds': _0x28be91.creds,
        'keys': baileys_1.makeCacheableSignalKeyStore(_0x28be91.keys, logger)
      },
      'getMessage': async _0x51a5b9 => {
        if (store) {
          const _0x5236f2 = await store.loadMessage(_0x51a5b9.remoteJid, _0x51a5b9.id, undefined);
          return _0x5236f2.message || undefined;
        }
        return {
          'conversation': "An Error Occurred, Repeat Command!"
        };
      }
    };
    0;
    const _0x730233 = baileys_1["default"](_0x1244d2);
    store.bind(_0x730233.ev);
    function _0xda1361() {
      const _0x2a4179 = new Date();
      const _0x532f60 = {
        'timeZone': "Africa/Nairobi",
        'weekday': "long",
        'year': "numeric",
        'month': "long",
        'day': "2-digit",
        'hour': "2-digit",
        'minute': "2-digit",
        'second': "2-digit",
        'hour12': false
      };
      return new Intl.DateTimeFormat("en-KE", _0x532f60).format(_0x2a4179);
    }
    const _0x2b9a00 = ["🛠️ Learning never ends — debug life!", "🔥 Bot powered by memes & dreams 😎", "🎯 Skills don't sleep... neither do bots 🤖", "💡 Every day is a code update day!", "📅 Stay productive — even in downtime!", "😂 If bots had feelings... mine would be busy.", "🚀 Running like a boss at 1000 scripts/sec.", "🌍 Global bot vibes from TZ 🇹🇿", "📚 Guide, Help, Fun, Repeat.", "🤹 Life is a mix of memes & miracles.", "👀 Watching you like console logs 👨‍💻", "📌 Daily desk goals: Build, Break, Fix, Repeat.", "🎭 This bot has more personalities than your ex.", "👑 Bot: LUCKY-MD-XFORCE | AI: Fredi AI", "✨ Today is yours. Make it *legendary*.", "📊 Performance: 100% Efficiency (maybe 💀)", "⚙️ Built with ❤️ by FredieTech", "🎮 Skills unlocked: AI | Code | Meme | Hustle"];
    let _0x723805 = 0;
    setInterval(async () => {
      if (conf.AUTO_BIO === "yes") {
        const _0x6297d6 = _0xda1361();
        const _0x5bb20c = _0x2b9a00[_0x723805];
        const _0x1494ea = "🤖 Lucky Md Xforce is Active\n📅 " + _0x6297d6 + "\n" + _0x5bb20c;
        await _0x730233.updateProfileStatus(_0x1494ea);
        console.log("✅ Updated Bio:\n" + _0x1494ea);
        _0x723805 = (_0x723805 + 1) % _0x2b9a00.length;
      }
    }, 60000);
    _0x730233.ev.on("call", async _0xb15d87 => {
      if (conf.ANTI_CALL === "yes") {
        const _0x225b76 = _0xb15d87[0].id;
        const _0x2ebac2 = _0xb15d87[0].from;
        await _0x730233.rejectCall(_0x225b76, _0x2ebac2);
        if (!global.callResponses) {
          global.callResponses = {};
        }
        if (!global.callResponses[_0x2ebac2]) {
          global.callResponses[_0x2ebac2] = {
            'count': 0x0
          };
        }
        const _0x33bd2d = global.callResponses[_0x2ebac2];
        _0x33bd2d.count++;
        const _0x29e50c = {
          0x1: ["📞 Hello 👋! I'm " + conf.BOT + ". Please avoid calling, my owner " + conf.OWNER_NAME + " prefers messages. Thank you!\n\nPowered by " + conf.DEV, "🚫 Please don't call. " + conf.BOT + " is a bot, not a voice assistant.\n\nPowered by " + conf.DEV, "Hi! 🙏 Kindly don’t call. My creator " + conf.OWNER_NAME + " has disabled calling. Just message me.\n\n~ " + conf.BOT],
          0x2: ["⚠️ You've called again. Calls are not allowed. Please text.\n\nPowered by " + conf.DEV, "Reminder: No calls allowed 🚫. Kindly send your message instead.", "You're trying again? 😅 This bot does not accept calls. Just type your message."],
          0x3: ["📵 Third time calling! Respect the rules and drop a message please.", "Hey friend, this is the 3rd call. Please avoid that 🙏.", "Still calling? 😔 Please understand, texting is preferred."]
        };
        const _0x91488f = _0x33bd2d.count >= 3 ? 3 : _0x33bd2d.count;
        const _0x57ba24 = _0x29e50c[_0x91488f];
        const _0x18c899 = _0x57ba24[Math.floor(Math.random() * _0x57ba24.length)];
        try {
          await _0x730233.sendMessage(_0x2ebac2, {
            'text': _0x18c899
          });
        } catch (_0x35e29a) {
          console.error("Error sending anti-call message:", _0x35e29a);
        }
      }
    });
    let _0x29191c = "Hello👋, I'm " + conf.BOT + " on board. My owner " + conf.OWNER_NAME + " currently unavailable👁️. Please leave a message, and we will get back to you as soon as possible🤝. Thanks To " + conf.DEV;
    let _0xce08ac = new Set();
    _0x730233.ev.on("messages.upsert", async _0x9778e7 => {
      const {
        messages: _0x1f7892
      } = _0x9778e7;
      const _0x2182a5 = _0x1f7892[0];
      if (!_0x2182a5.message) {
        return;
      }
      const _0x897dea = _0x2182a5.message.conversation || _0x2182a5.message.extendedTextMessage?.["text"];
      const _0x510033 = _0x2182a5.key.remoteJid;
      if (_0x897dea && _0x897dea.match(/^[^\w\s]/) && _0x2182a5.key.fromMe) {
        const _0x183ae8 = _0x897dea[0];
        const _0x5debcd = _0x897dea.slice(1).split(" ")[0];
        const _0x27eed9 = _0x897dea.slice(_0x183ae8.length + _0x5debcd.length).trim();
        if (_0x5debcd === "setautoreply" && _0x27eed9) {
          _0x29191c = _0x27eed9;
          await _0x730233.sendMessage(_0x510033, {
            'text': "Auto-reply message has been updated to:\n\"" + _0x29191c + "\""
          });
          return;
        }
      }
      if (conf.GREET === "yes" && !_0xce08ac.has(_0x510033) && !_0x2182a5.key.fromMe && !_0x510033.includes("@g.us")) {
        await _0x730233.sendMessage(_0x510033, {
          'text': _0x29191c
        });
        _0xce08ac.add(_0x510033);
      }
    });
    if (conf.LUCKY_ADM === "yes") {
      console.log("🛡️ Lucky Md Xforce AntiDelete is ACTIVE!");
    }
    _0x730233.ev.on("messages.upsert", async _0x7b3a16 => {
      if (conf.LUCKY_ADM !== "yes") {
        return;
      }
      const {
        messages: _0x1e88e2
      } = _0x7b3a16;
      const _0x442db2 = _0x1e88e2[0];
      if (!_0x442db2.message) {
        return;
      }
      const _0x16fd2c = _0x442db2.key;
      const _0x4d85ce = _0x16fd2c.remoteJid;
      if (_0x4d85ce === "status@broadcast") {
        return;
      }
      if (!store.chats[_0x4d85ce]) {
        store.chats[_0x4d85ce] = [];
      }
      store.chats[_0x4d85ce].push(_0x442db2);
      if (store.chats[_0x4d85ce].length > 25) {
        store.chats[_0x4d85ce].shift();
      }
      if (_0x442db2.message?.["protocolMessage"]?.["type"] === 0) {
        const _0x25bfad = _0x442db2.message.protocolMessage.key;
        const _0x45e4ec = store.chats[_0x4d85ce];
        const _0x4874d0 = _0x45e4ec.find(_0x55cc83 => _0x55cc83.key.id === _0x25bfad.id);
        if (!_0x4874d0) {
          return;
        }
        try {
          const _0x886885 = _0x442db2.key.participant || _0x442db2.key.remoteJid;
          const _0x2821e7 = _0x4874d0.key.participant || _0x4874d0.key.remoteJid;
          const _0x2d67af = _0x4d85ce.endsWith("@g.us");
          let _0x36701f = '';
          if (_0x2d67af) {
            try {
              const _0x3b3c5f = await _0x730233.groupMetadata(_0x4d85ce);
              _0x36701f = "\n• Group: " + _0x3b3c5f.subject;
            } catch (_0x11f760) {
              console.error("Error fetching group metadata:", _0x11f760);
              _0x36701f = "\n• Group information unavailable.";
            }
          }
          const _0x6fe3a5 = "🫧 *Lucky Md Xforce antiDelete* 🫧\n" + ("• Deleted by: @" + _0x886885.split('@')[0] + "\n") + ("• Original sender: @" + _0x2821e7.split('@')[0] + "\n") + (_0x36701f + "\n") + ("• Chat type: " + (_0x2d67af ? "Group" : "Private"));
          const _0x5a0354 = {
            'mentions': [_0x886885, _0x2821e7]
          };
          if (_0x4874d0.message.conversation) {
            await sendMessage(_0x730233, _0x4d85ce, _0x442db2, {
              'text': _0x6fe3a5 + "\n\n📝 *Deleted Text:*\n" + _0x4874d0.message.conversation,
              ..._0x5a0354
            });
          } else {
            if (_0x4874d0.message.extendedTextMessage) {
              await sendMessage(_0x730233, _0x4d85ce, _0x442db2, {
                'text': _0x6fe3a5 + "\n\n📝 *Deleted Text:*\n" + _0x4874d0.message.extendedTextMessage.text,
                ..._0x5a0354
              });
            } else {
              if (_0x4874d0.message.imageMessage) {
                const _0x1b90c6 = _0x4874d0.message.imageMessage.caption || '';
                const _0x691f70 = await _0x730233.downloadAndSaveMediaMessage(_0x4874d0.message.imageMessage);
                await sendMessage(_0x730233, _0x4d85ce, _0x442db2, {
                  'image': {
                    'url': _0x691f70
                  },
                  'caption': _0x6fe3a5 + "\n\n🖼️ *Image Caption:*\n" + _0x1b90c6,
                  ..._0x5a0354
                });
              } else {
                if (_0x4874d0.message.videoMessage) {
                  const _0x2ac164 = _0x4874d0.message.videoMessage.caption || '';
                  const _0x56a077 = await _0x730233.downloadAndSaveMediaMessage(_0x4874d0.message.videoMessage);
                  await sendMessage(_0x730233, _0x4d85ce, _0x442db2, {
                    'video': {
                      'url': _0x56a077
                    },
                    'caption': _0x6fe3a5 + "\n\n🎥 *Video Caption:*\n" + _0x2ac164,
                    ..._0x5a0354
                  });
                } else {
                  if (_0x4874d0.message.audioMessage) {
                    const _0x444734 = await _0x730233.downloadAndSaveMediaMessage(_0x4874d0.message.audioMessage);
                    await sendMessage(_0x730233, _0x4d85ce, _0x442db2, {
                      'audio': {
                        'url': _0x444734
                      },
                      'mimetype': "audio/ogg",
                      'ptt': true,
                      'caption': _0x6fe3a5 + "\n\n🎤 *Voice Message Deleted*",
                      ..._0x5a0354
                    });
                  } else {
                    if (_0x4874d0.message.stickerMessage) {
                      const _0x1f2ddd = await _0x730233.downloadAndSaveMediaMessage(_0x4874d0.message.stickerMessage);
                      await sendMessage(_0x730233, _0x4d85ce, _0x442db2, {
                        'sticker': {
                          'url': _0x1f2ddd
                        },
                        'caption': _0x6fe3a5,
                        ..._0x5a0354
                      });
                    } else {
                      await sendMessage(_0x730233, _0x4d85ce, _0x442db2, {
                        'text': _0x6fe3a5 + "\n\n⚠️ *An unsupported message type was deleted.*",
                        ..._0x5a0354
                      });
                    }
                  }
                }
              }
            }
          }
        } catch (_0x226a1b) {
          console.error("🔥 AntiDelete Error:", _0x226a1b);
        }
      }
    });
    let _0x240048 = [];
    const _0x1ebbd7 = path.resolve(__dirname, "fredie", "autolike.json");
    try {
      const _0x283d6d = fs.readFileSync(_0x1ebbd7, "utf8");
      const _0x4be734 = JSON.parse(_0x283d6d);
      if (Array.isArray(_0x4be734)) {
        _0x240048 = _0x4be734;
      } else {
        console.warn("autoreact.json is not a valid array.");
      }
    } catch (_0x3c2a08) {
      console.error("Failed to load emojis from autoreact.json:", _0x3c2a08);
    }
    if (conf.AUTO_REACT === "yes" && _0x240048.length > 0) {
      _0x730233.ev.on("messages.upsert", async _0x429002 => {
        const {
          messages: _0x4e599b
        } = _0x429002;
        for (const _0x2f5262 of _0x4e599b) {
          try {
            if (_0x2f5262.key.fromMe || !_0x2f5262.message) {
              continue;
            }
            const _0x5787c5 = _0x240048[Math.floor(Math.random() * _0x240048.length)];
            await _0x730233.sendMessage(_0x2f5262.key.remoteJid, {
              'react': {
                'text': _0x5787c5,
                'key': _0x2f5262.key
              }
            });
          } catch (_0x7be55d) {
            console.error("Failed to react to message:", _0x7be55d);
          }
        }
      });
    } else if (conf.AUTO_REACT === "yes") {
      console.warn("AUTO_REACT is enabled but no emojis found in autoreact.json.");
    }
    const _0x501219 = new Map();
    let _0x2bd866 = [];
    const _0x1dbd6b = path.join(__dirname, "../fredie/emojis.json");
    try {
      if (fs.existsSync(_0x1dbd6b)) {
        const _0x1f25a1 = fs.readFileSync(_0x1dbd6b, "utf-8");
        const _0x392c70 = JSON.parse(_0x1f25a1);
        if (Array.isArray(_0x392c70)) {
          _0x2bd866 = _0x392c70;
          console.log("✅ Emojis loaded from emojis.json:", _0x2bd866.length, "emojis");
        } else {
          console.warn("⚠️ emojis.json is not an array. Please format it as an array.");
        }
      } else {
        console.warn("⚠️ emojis.json not found at", _0x1dbd6b);
      }
    } catch (_0x2f7814) {
      console.error("❌ Failed to load emojis.json:", _0x2f7814.message);
    }
    function _0x2219a4(_0x7c0705) {
      return new Promise(_0x1dae49 => setTimeout(_0x1dae49, _0x7c0705));
    }
    if (conf.AUTO_REACT_STATUS === "yes") {
      console.log("✅ AUTO_REACT_STATUS is enabled. Listening for status updates...");
      _0x730233.ev.on("messages.upsert", async _0x5b3828 => {
        const {
          messages: _0x2cb2fb
        } = _0x5b3828;
        for (const _0x434eb4 of _0x2cb2fb) {
          try {
            if (!_0x434eb4?.["key"]?.["remoteJid"] || _0x434eb4.key.remoteJid !== "status@broadcast" || !_0x434eb4.message) {
              continue;
            }
            const _0x29887a = _0x434eb4.key.participant || _0x434eb4.participant || _0x434eb4.pushName;
            if (!_0x29887a) {
              console.warn("⚠️ Status update received but no participant found.");
              continue;
            }
            const _0x31794e = Date.now();
            const _0xf4eaa3 = _0x501219.get(_0x29887a) || 0;
            if (_0x31794e - _0xf4eaa3 < 7000) {
              console.log("⏱️ Skipping reaction to " + _0x29887a + ", throttled.");
              continue;
            }
            if (_0x2bd866.length === 0) {
              console.warn("⚠️ No emojis available to react with.");
              continue;
            }
            const _0x582dfe = _0x2bd866[Math.floor(Math.random() * _0x2bd866.length)];
             await _0x730233.sendMessage("status@broadcast", {
              'react': {
                'key': _0x434eb4.key,
                'text': _0x582dfe
              }
            });
            _0x501219.set(_0x29887a, _0x31794e);
            console.log("💘 Reacted to " + _0x29887a + "'s status with: " + _0x582dfe);
            await _0x2219a4(2000);
          } catch (_0x1b46df) {
            console.error("❌ Failed to react to a status update:", _0x1b46df);
          }
        }
      });
    }
    if (conf.ANTI_BAD === "yes") {
      _0x730233.ev.on("messages.upsert", async _0x2e1cb5 => {
        const {
          messages: _0x2147e6,
          type: _0x2caf13
        } = _0x2e1cb5;
        if (_0x2caf13 !== "notify") {
          return;
        }
        for (const _0x9ae558 of _0x2147e6) {
          try {
            if (!_0x9ae558.message || _0x9ae558.key.fromMe) {
              continue;
            }
            const _0x57f923 = _0x9ae558.key.remoteJid;
            const _0x5ec69d = _0x57f923.endsWith("@g.us");
            const _0x1c9fca = _0x9ae558.message.conversation || _0x9ae558.message.extendedTextMessage?.["text"] || _0x9ae558.message.imageMessage?.["caption"] || _0x9ae558.message.videoMessage?.["caption"] || '';
            if (containsBadText(_0x1c9fca)) {
              await _0x730233.sendMessage(_0x57f923, {
                'text': "🚫 *Inappropriate language detected!*\nYour message has been removed."
              }, {
                'quoted': _0x9ae558
              });
              await _0x730233.sendMessage(_0x57f923, {
                'delete': {
                  'remoteJid': _0x57f923,
                  'fromMe': false,
                  'id': _0x9ae558.key.id,
                  'participant': _0x9ae558.key.participant || (_0x5ec69d ? _0x9ae558.key.participant : _0x57f923)
                }
              });
              console.log("⚠️ Deleted bad message from " + _0x57f923);
            }
          } catch (_0x198482) {
            console.error("❌ ANTI_BAD Error:", _0x198482);
          }
        }
      });
    } else {
      console.log("ANTI_BAD is off. Enable it in conf settings to activate.");
    }
    if (conf.ANTI_BUG === "yes") {
      _0x730233.ev.on("messages.upsert", async _0x9e2f21 => {
        const {
          messages: _0x54d1fc,
          type: _0x4d7005
        } = _0x9e2f21;
        if (_0x4d7005 !== "notify") {
          return;
        }
        for (const _0x150748 of _0x54d1fc) {
          try {
          if (!_0x150748.message || _0x150748.key.fromMe) {
              continue;
            }
            const _0x49ae17 = _0x150748.key.remoteJid;
            const _0x47fbd6 = JSON.stringify(_0x150748.message);
            if (isAntiBugOn(_0x49ae17) && containsBug(_0x47fbd6)) {
              await _0x730233.sendMessage(_0x49ae17, {
                'text': "🚫 Message deleted due to bug content."
              }, {
                'quoted': _0x150748
              });
              await _0x730233.sendMessage(_0x49ae17, {
                'delete': {
                  'remoteJid': _0x150748.key.remoteJid,
                  'fromMe': false,
                  'id': _0x150748.key.id,
                  'participant': _0x150748.key.participant || _0x150748.key.remoteJid
                }
              });
              console.log("Deleted buggy message from " + _0x49ae17);
            }
          } catch (_0x9774ca) {
            console.error("Failed to process anti-bug message:", _0x9774ca);
          }
        }
      });
    } else {
      console.warn("ANTI_BUG is disabled in conf settings.");
    }
    async function _0x5b8eae(_0x493f2d, _0x2c5c76) {
      try {
        const _0x51a481 = _0x493f2d.split('@')[0];
        let _0x7ddce5 = 1;
        let _0x20bac0 = _0x2c5c76 + " " + _0x7ddce5;
        while (Object.values(store.contacts).some(_0x26b6f3 => _0x26b6f3.name === _0x20bac0)) {
          _0x7ddce5++;
          _0x20bac0 = _0x2c5c76 + " " + _0x7ddce5;
        }
        const _0x31f14b = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x20bac0 + "\nTEL;type=CELL;type=VOICE;waid=" + _0x51a481 + ':+' + _0x51a481 + "\nEND:VCARD\n";
        const _0x31ddeb = './' + _0x20bac0 + ".vcf";
        fs.writeFileSync(_0x31ddeb, _0x31f14b);
        await _0x730233.sendMessage(conf.NUMERO_OWNER + "@s.whatsapp.net", {
          'document': {
            'url': _0x31ddeb
          },
          'mimetype': "text/vcard",
          'fileName': _0x20bac0 + ".vcf",
          'caption': "Contact saved as " + _0x20bac0 + ". Please import this vCard to add the number to your contacts.\n\n LUCKY-MD-XFORCE"
        });
        console.log("vCard created and sent for: " + _0x20bac0 + " (" + _0x493f2d + ')');
        fs.unlinkSync(_0x31ddeb);
        return _0x20bac0;
      } catch (_0x334569) {
        console.error("Error creating or sending vCard for " + name + ':', _0x334569.message);
      }
    }
    _0x730233.ev.on("messages.upsert", async _0x1c6b00 => {
      if (conf.AUTO_SAVE_CONTACTS !== "yes") {
        return;
      }
      const {
        messages: _0x29f4d7
      } = _0x1c6b00;
      const _0x4b589c = _0x29f4d7[0];
      if (!_0x4b589c.message) {
        return;
      }
      const _0x5c014d = _0x4b589c.key.remoteJid;
      if (_0x5c014d.endsWith("@s.whatsapp.net") && (!store.contacts[_0x5c014d] || !store.contacts[_0x5c014d].name)) {
        const _0x563e77 = await _0x5b8eae(_0x5c014d, "LUCKY-MD-XFORCE");
        store.contacts[_0x5c014d] = {
          'name': _0x563e77
        };
        await _0x730233.sendMessage(_0x5c014d, {
          'text': "Ssup Your name has been saved as \"" + _0x563e77 + "\" in my account.\n\nLUCKY-MD-XFORCE"
        });
        console.log("Contact " + _0x563e77 + " has been saved and notified.");
      }
    });
    let _0x279658 = {};
    const _0x13395b = path.join(__dirname, "../fredie/autovoice.json");
    try {
      if (fs.existsSync(_0x13395b)) {
        const _0x4525f5 = fs.readFileSync(_0x13395b, "utf-8");
        _0x279658 = JSON.parse(_0x4525f5);
        console.log("✅ Loaded audio reply map:", Object.keys(_0x279658).length, "entries");
      } else {
        console.warn("⚠️ autovoice.json not found.");
      }
    } catch (_0x1fea92) {
      console.error("❌ Failed to load autovoice.json:", _0x1fea92);
    }
    if (conf.AUDIO_REPLY === "yes") {
      _0x730233.ev.on("messages.upsert", async _0x444c3d => {
        const {
          messages: _0x1986fe
        } = _0x444c3d;
        for (const _0x5f4475 of _0x1986fe) {
          try {
            if (!_0x5f4475.message || _0x5f4475.key.fromMe) {
              continue;
            }
            const _0x5cfc7e = Object.keys(_0x5f4475.message)[0];
            if (_0x5cfc7e !== "conversation" && _0x5cfc7e !== "extendedTextMessage") {
              continue;
            }
            const _0x2580f9 = _0x5f4475.message.conversation || _0x5f4475.message.extendedTextMessage?.["text"] || '';
            const _0x3f22e5 = _0x2580f9.trim().toLowerCase();
            if (_0x279658[_0x3f22e5]) {
              const _0x42bf92 = _0x279658[_0x3f22e5];
              if (_0x42bf92.startsWith("http")) {
                const _0x4f805b = await axios.get(_0x42bf92, {
                  'responseType': "arraybuffer"
                });
                await _0x730233.sendMessage(_0x5f4475.key.remoteJid, {
                  'audio': Buffer.from(_0x4f805b.data),
                  'mimetype': "audio/mpeg",
                  'ptt': true
                }, {
                  'quoted': _0x5f4475
                });
                console.log("🔊 Sent audio reply for: \"" + _0x3f22e5 + "\" (URL)");
              } else {
                const _0x1c9972 = path.join(__dirname, '..', _0x42bf92);
                if (fs.existsSync(_0x1c9972)) {
                  await _0x730233.sendMessage(_0x5f4475.key.remoteJid, {
                    'audio': fs.readFileSync(_0x1c9972),
                    'mimetype': "audio/mpeg",
                    'ptt': true
                  }, {
                    'quoted': _0x5f4475
                  });
                  console.log("🔊 Sent audio reply for: \"" + _0x3f22e5 + "\" (LOCAL)");
                } else {
                  console.warn("⚠️ Audio file not found at path: " + _0x1c9972);
                }
              }
            }
          } catch (_0x58adc0) {
            console.error("❌ Error handling AUDIO_REPLY:", _0x58adc0);
          }
        }
      });
    }
    let _0x570656 = {};
    try {
      if (fs.existsSync(stickerJsonPath)) {
        const _0x1e69e3 = fs.readFileSync(stickerJsonPath, "utf-8");
        _0x570656 = JSON.parse(_0x1e69e3);
        console.log("✅ AUTO_STICKER map loaded:", Object.keys(_0x570656).length, "entries");
      } else {
        console.warn("⚠️ autosticker.json not found.");
      }
    } catch (_0x2032da) {
      console.error("❌ Failed to load autosticker.json:", _0x2032da);
    }
    if (conf.AUTO_STICKER === "yes") {
      _0x730233.ev.on("messages.upsert", async _0x32ff79 => {
        const {
          messages: _0x268b62
        } = _0x32ff79;
        for (const _0xda9660 of _0x268b62) {
          try {
            if (!_0xda9660.message || _0xda9660.key.fromMe) {
              continue;
            }
            const _0xfa80d8 = Object.keys(_0xda9660.message)[0];
            if (_0xfa80d8 !== "conversation" && _0xfa80d8 !== "extendedTextMessage") {
              continue;
            }
            const _0x4901b1 = (_0xda9660.message.conversation || _0xda9660.message.extendedTextMessage?.["text"] || '').trim().toLowerCase();
            if (_0x570656[_0x4901b1]) {
              const _0x41f9de = _0x570656[_0x4901b1];
              console.log("⬇️ Downloading sticker for: \"" + _0x4901b1 + "\"");
              const _0x3a2c9d = await axios.get(_0x41f9de, {
                'responseType': "arraybuffer"
              });
              if (_0x3a2c9d.status === 200) {
                await _0x730233.sendMessage(_0xda9660.key.remoteJid, {
                  'sticker': Buffer.from(_0x3a2c9d.data)
                }, {
                  'quoted': _0xda9660
                });
                console.log("✅ Sent sticker for \"" + _0x4901b1 + "\"");
              } else {
                console.warn("⚠️ Failed to download sticker from: " + _0x41f9de);
              }
            }
          } catch (_0x269754) {
            console.error("❌ AUTO_STICKER error:", _0x269754);
          }
        }
      });
    }
    let _0x1f92dc = {};
    const _0x380036 = path.join(__dirname, "../fredie/autoreply.json");
    try {
      if (fs.existsSync(_0x380036)) {
        const _0x1bd6b7 = fs.readFileSync(_0x380036, "utf-8");
        try {
          _0x1f92dc = JSON.parse(_0x1bd6b7);
          console.log("✅ AUTO_REPLY map loaded:", Object.keys(_0x1f92dc).length, "entries");
        } catch (_0x3afb87) {
          console.error("❌ JSON parse error in autoreply.json:", _0x3afb87.message);
          console.error("⚠️ Raw content:", _0x1bd6b7);
        }
      } else {
        console.warn("⚠️ autoreply.json not found at", _0x380036);
      }
    } catch (_0x3eafce) {
      console.error("❌ Failed to access autoreply.json:", _0x3eafce.message);
    }
    if (conf.AUTO_REPLY === "yes") {
      _0x730233.ev.on("messages.upsert", async _0x470a3c => {
        const {
          messages: _0x7de9f4
        } = _0x470a3c;
        for (const _0xcffcfc of _0x7de9f4) {
          try {
            if (!_0xcffcfc.message || _0xcffcfc.key.fromMe) {
              continue;
            }
            const _0x3db067 = Object.keys(_0xcffcfc.message)[0];
            if (!["conversation", "extendedTextMessage"].includes(_0x3db067)) {
              continue;
            }
            const _0x3168db = (_0xcffcfc.message.conversation || _0xcffcfc.message.extendedTextMessage?.["text"] || '').trim().toLowerCase();
            if (!_0x3168db) {
              continue;
            }
            if (_0x1f92dc[_0x3168db]) {
              const _0x2a42b6 = _0x1f92dc[_0x3168db];
              await _0x730233.sendMessage(_0xcffcfc.key.remoteJid, {
                'text': _0x2a42b6
              }, {
               'quoted': _0xcffcfc
              });
              console.log("💬 AUTO_REPLY sent for \"" + _0x3168db + "\": " + _0x2a42b6);
            } else {
              console.log("🕵️ No AUTO_REPLY match for \"" + _0x3168db + "\"");
            }
          } catch (_0x4ad099) {
            console.error("❌ AUTO_REPLY error:", _0x4ad099);
          }
        }
      });
    }
    _0x730233.ev.on("messages.upsert", async _0x1a6271 => {
      const {
        messages: _0x31e6e3
      } = _0x1a6271;
      const _0x39b480 = _0x31e6e3[0];
      if (!_0x39b480.message) {
        return;
      }
      const _0x4118c4 = _0x2d7945 => {
        if (!_0x2d7945) {
          return _0x2d7945;
        }
        if (/:\d+@/gi.test(_0x2d7945)) {
          0;
          let _0x40b282 = baileys_1.jidDecode(_0x2d7945) || {};
          return _0x40b282.user && _0x40b282.server && _0x40b282.user + '@' + _0x40b282.server || _0x2d7945;
        } else {
          return _0x2d7945;
        }
      };
      0;
      var _0x55f80e = baileys_1.getContentType(_0x39b480.message);
      var _0x101a21 = _0x55f80e == "conversation" ? _0x39b480.message.conversation : _0x55f80e == "imageMessage" ? _0x39b480.message.imageMessage?.["caption"] : _0x55f80e == "videoMessage" ? _0x39b480.message.videoMessage?.["caption"] : _0x55f80e == "extendedTextMessage" ? _0x39b480.message?.["extendedTextMessage"]?.["text"] : _0x55f80e == "buttonsResponseMessage" ? _0x39b480?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] : _0x55f80e == "listResponseMessage" ? _0x39b480.message?.["listResponseMessage"]?.["singleSelectReply"]?.["selectedRowId"] : _0x55f80e == "messageContextInfo" ? _0x39b480?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] || _0x39b480.message?.["listResponseMessage"]?.["singleSelectReply"]?.["selectedRowId"] || _0x39b480.text : '';
      var _0x17e1de = _0x39b480.key.remoteJid;
      var _0x8b4831 = _0x4118c4(_0x730233.user.id);
      var _0x89d5e8 = _0x8b4831.split('@')[0];
      const _0x36fd03 = _0x17e1de?.["endsWith"]("@g.us");
      var _0x32df4e = _0x36fd03 ? await _0x730233.groupMetadata(_0x17e1de) : '';
      var _0x348b2f = _0x36fd03 ? _0x32df4e.subject : '';
      var _0x27e5f3 = _0x39b480.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
      var _0x2a93eb = _0x4118c4(_0x39b480.message?.["extendedTextMessage"]?.["contextInfo"]?.["participant"]);
      var _0x5c0525 = _0x36fd03 ? _0x39b480.key.participant ? _0x39b480.key.participant : _0x39b480.participant : _0x17e1de;
      if (_0x39b480.key.fromMe) {
        _0x5c0525 = _0x8b4831;
      }
      var _0x50c64f = _0x36fd03 ? _0x39b480.key.participant : '';
      const {
        getAllSudoNumbers: _0x3b7fcc
      } = require("./lib/sudo");
      const _0x4b180 = _0x39b480.pushName;
      const _0x162abd = await _0x3b7fcc();
      const _0x30594c = [_0x89d5e8, "255752593977", "255620814108", "255764182801", conf.NUMERO_OWNER].map(_0x11d7e3 => _0x11d7e3.replace(/[^0-9]/g) + "@s.whatsapp.net");
      const _0x2d0909 = _0x30594c.concat(_0x162abd);
      const _0x527314 = _0x2d0909.includes(_0x5c0525);
      var _0x17fd4b = ["255752593977", "255620814108", "255764182801"].map(_0x1637e8 => _0x1637e8.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x5c0525);
      function _0x7bfb87(_0x149642) {
        _0x730233.sendMessage(_0x17e1de, {
          'text': _0x149642
        }, {
          'quoted': _0x39b480
        });
      }
      console.log("\tLUCKY MESSAGES");
      console.log("=========== NEW CONVERSATION ===========");
      if (_0x36fd03) {
        console.log("MESSAGE FROM GROUP : " + _0x348b2f);
      }
      console.log("MESSAGE SENT BY : [" + _0x4b180 + " : " + _0x5c0525.split("@s.whatsapp.net")[0] + " ]");
      console.log("MESSAGE TYPE : " + _0x55f80e);
      console.log("==================TEXT==================");
      console.log(_0x101a21);
      function _0x543efa(_0x343ee6) {
        let _0xe59df2 = [];
        for (_0x1a6271 of _0x343ee6) {
          if (_0x1a6271.admin == null) {
            continue;
          }
          _0xe59df2.push(_0x1a6271.id);
        }
        return _0xe59df2;
      }
      var _0x1930fb = conf.ETAT;
      if (_0x1930fb == 1) {
        await _0x730233.sendPresenceUpdate("available", _0x17e1de);
      } else {
        if (_0x1930fb == 2) {
          await _0x730233.sendPresenceUpdate("composing", _0x17e1de);
        } else if (_0x1930fb == 3) {
          await _0x730233.sendPresenceUpdate("recording", _0x17e1de);
        } else {
          await _0x730233.sendPresenceUpdate("unavailable", _0x17e1de);
        }
      }
      const _0x53fa92 = _0x36fd03 ? await _0x32df4e.participants : '';
      let _0x1e845a = _0x36fd03 ? _0x543efa(_0x53fa92) : '';
      const _0x215b0a = _0x36fd03 ? _0x1e845a.includes(_0x5c0525) : false;
      var _0x4f345e = _0x36fd03 ? _0x1e845a.includes(_0x8b4831) : false;
      const _0x3e9153 = _0x101a21 ? _0x101a21.trim().split(/ +/).slice(1) : null;
      const _0x980189 = _0x101a21 ? _0x101a21.startsWith(prefixe) : false;
      const _0x10157f = _0x980189 ? _0x101a21.slice(1).trim().split(/ +/).shift().toLowerCase() : false;
      const _0x2a2d51 = conf.URL.split(',');
      function _0x24894f() {
        const _0x5e80d2 = Math.floor(Math.random() * _0x2a2d51.length);
        const _0x4e41ea = _0x2a2d51[_0x5e80d2];
        return _0x4e41ea;
      }
      var _0x2f2116 = {
        'superUser': _0x527314,
        'dev': _0x17fd4b,
        'verifGroupe': _0x36fd03,
        'mbre': _0x53fa92,
        'membreGroupe': _0x50c64f,
        'verifAdmin': _0x215b0a,
        'infosGroupe': _0x32df4e,
        'nomGroupe': _0x348b2f,
        'auteurMessage': _0x5c0525,
        'nomAuteurMessage': _0x4b180,
        'idBot': _0x8b4831,
        'verifEzraAdmin': _0x4f345e,
        'prefixe': prefixe,
        'arg': _0x3e9153,
        'repondre': _0x7bfb87,
        'mtype': _0x55f80e,
        'groupeAdmin': _0x543efa,
        'msgRepondu': _0x27e5f3,
        'auteurMsgRepondu': _0x2a93eb,
        'ms': _0x39b480,
        'mybotpic': _0x24894f
      };
      if (conf.AUTO_READ === "yes") {
        _0x730233.ev.on("messages.upsert", async _0x3d7a78 => {
          const {
            messages: _0x5826c2
          } = _0x3d7a78;
          for (const _0x60838 of _0x5826c2) {
            if (!_0x60838.key.fromMe) {
              await _0x730233.readMessages([_0x60838.key]);
            }
          }
        });
      }
      if (!_0x527314 && _0x17e1de === _0x5c0525 && conf.AUTO_BLOCK === "yes") {
        _0x730233.sendMessage(_0x5c0525, {
          'text': "🚫am blocking you because you have violated " + conf.OWNER_NAME + " policies🚫!"
        });
        await _0x730233.updateBlockStatus(_0x5c0525, "block");
      }
      if (_0x101a21 && _0x101a21.startsWith('<')) {
        if (!_0x527314) {
          return _0x7bfb87("Only for my " + conf.DEV + " or " + conf.OWNER_NAME + " to use this command 🚫");
        }
        try {
          let _0x2ae60b = await eval(_0x101a21.slice(1));
          if (typeof _0x2ae60b !== "string") {
            _0x2ae60b = require("util").inspect(_0x2ae60b);
          }
          await _0x7bfb87(_0x2ae60b);
        } catch (_0x22529c) {
          await _0x7bfb87(String(_0x22529c));
        }
      }
      if (_0x101a21 && _0x101a21.startsWith('>')) {
        if (!_0x527314) {
          await _0x730233.sendMessage(_0x17e1de, {
            'text': "This command is only for the owner or FrediEzra to execute 🚫",
            'contextInfo': {
              'externalAdReply': {
                'title': conf.BOT,
                'body': conf.OWNER_NAME,
                'sourceUrl': conf.GURL,
                'thumbnailUrl': conf.URL,
                'mediaType': 0x1,
                'showAdAttribution': true,
                'renderLargerThumbnail': false
              }
            }
          });
          return;
        }
        try {
          let _0x2aac9b = await eval(_0x101a21.slice(1));
          if (typeof _0x2aac9b !== "string") {
            _0x2aac9b = require("util").inspect(_0x2aac9b);
          }
          await _0x7bfb87(_0x2aac9b);
        } catch (_0x3ceac1) {
          await _0x7bfb87(String(_0x3ceac1));
        }
      }
      let _0x2c7dc0 = 0;
      if (!_0x527314 && _0x17e1de === _0x5c0525 && conf.CHAT_BOT === "yes") {
        console.log("🤖 Chatbot is active");
        try {
          const _0x49ec9f = Date.now();
          if (_0x49ec9f - _0x2c7dc0 < 10000) {
            return;
          }
          const _0x472201 = await axios.get("https://apis-keith.vercel.app/ai/gpt", {
            'params': {
              'q': _0x101a21
            },
            'timeout': 0x2710
          });
          if (_0x472201.data?.["status"] && _0x472201.data?.["result"]) {
            const _0x6c4479 = '_' + _0x472201.data.result + '_';
            await _0x730233.sendMessage(_0x17e1de, {
              'text': _0x6c4479,
              'mentions': [_0x5c0525]
            }, {
              'quoted': _0x39b480
            });
            _0x2c7dc0 = _0x49ec9f;
          }
        } catch (_0x57e994) {
          console.error("Chatbot error:", _0x57e994);
        }
      }
      if (_0x39b480.key && _0x39b480.key.remoteJid === "status@broadcast" && conf.AUTO_STATUS_REPLY === "yes") {
        const _0xecea05 = _0x39b480.key.participant;
        const _0x55bbde = '' + conf.AUTO_STATUS_TEXT;
        await _0x730233.sendMessage(_0xecea05, {
          'text': _0x55bbde,
          'react': {
            'text': '🤦',
            'key': _0x39b480.key
          }
        }, {
          'quoted': _0x39b480
        });
      }
      if (_0x39b480.key && _0x39b480.key.remoteJid === "status@broadcast" && conf.AUTO_READ_STATUS === "yes") {
        await _0x730233.readMessages([_0x39b480.key]);
      }
      if (_0x39b480.key && _0x39b480.key.remoteJid === "status@broadcast" && conf.AUTO_DOWNLOAD_STATUS === "yes") {
        if (_0x39b480.message.extendedTextMessage) {
          var _0x1c3596 = _0x39b480.message.extendedTextMessage.text;
          await _0x730233.sendMessage(_0x8b4831, {
            'text': _0x1c3596
          }, {
            'quoted': _0x39b480
          });
        } else {
          if (_0x39b480.message.imageMessage) {
            var _0x5caa2c = _0x39b480.message.imageMessage.caption;
            var _0x14be74 = await _0x730233.downloadAndSaveMediaMessage(_0x39b480.message.imageMessage);
            await _0x730233.sendMessage(_0x8b4831, {
              'image': {
                'url': _0x14be74
              },
              'caption': _0x5caa2c
            }, {
              'quoted': _0x39b480
            });
          } else {
            if (_0x39b480.message.videoMessage) {
              var _0x5caa2c = _0x39b480.message.videoMessage.caption;
              var _0x46b623 = await _0x730233.downloadAndSaveMediaMessage(_0x39b480.message.videoMessage);
              await _0x730233.sendMessage(_0x8b4831, {
                'video': {
                  'url': _0x46b623
                },
                'caption': _0x5caa2c
              }, {
                'quoted': _0x39b480
              });
            }
          }
        }
      }
      if (!_0x17fd4b && _0x17e1de == "120363158701337904@g.us") {
        return;
      }
      if (_0x101a21 && _0x5c0525.endsWith("s.whatsapp.net")) {
        const {
          ajouterOuMettreAJourUserData: _0x440ccd
        } = require("./lib/level");
        try {
          await _0x440ccd(_0x5c0525);
        } catch (_0x22150a) {
          console.error(_0x22150a);
        }
      }
      try {
        if (_0x39b480.message[_0x55f80e].contextInfo.mentionedJid && (_0x39b480.message[_0x55f80e].contextInfo.mentionedJid.includes(_0x8b4831) || _0x39b480.message[_0x55f80e].contextInfo.mentionedJid.includes(conf.NUMERO_OWNER + "@s.whatsapp.net"))) {
          if (_0x17e1de == "120363158701337904@g.us") {
            return;
          }
          ;
          if (_0x527314) {
            console.log("hummm");
            return;
          }
          let _0x2b26da = require("./lib/mention");
          let _0x275201 = await _0x2b26da.recupererToutesLesValeurs();
          let _0x4c7d22 = _0x275201[0];
          if (_0x4c7d22.status === "non") {
            console.log("mention pas actifs");
            return;
          }
          let _0x27bd41;
          if (_0x4c7d22.type.toLocaleLowerCase() === "image") {
            _0x27bd41 = {
              'image': {
                'url': _0x4c7d22.url
              },
              'caption': _0x4c7d22.message
            };
          } else {
            if (_0x4c7d22.type.toLocaleLowerCase() === "video") {
              _0x27bd41 = {
                'video': {
                  'url': _0x4c7d22.url
                },
                'caption': _0x4c7d22.message
              };
            } else {
              if (_0x4c7d22.type.toLocaleLowerCase() === "sticker") {
                let _0x36efb5 = new Sticker(_0x4c7d22.url, {
                  'pack': conf.NOM_OWNER,
                  'type': StickerTypes.FULL,
                  'categories': ['🤩', '🎉'],
                  'id': "12345",
                  'quality': 0x46,
                  'background': "transparent"
                });
                const _0x56e4b1 = await _0x36efb5.toBuffer();
                _0x27bd41 = {
                  'sticker': _0x56e4b1
                };
              } else if (_0x4c7d22.type.toLocaleLowerCase() === "audio") {
                _0x27bd41 = {
                  'audio': {
                    'url': _0x4c7d22.url
                  },
                  'mimetype': "audio/mp4"
                };
              }
            }
          }
          _0x730233.sendMessage(_0x17e1de, _0x27bd41, {
            'quoted': _0x39b480
          });
        }
      } catch (_0x44dccf) {}
      try {
        const _0x55abc6 = await verifierEtatJid(_0x17e1de);
        if (_0x101a21.includes("https://") && _0x36fd03 && _0x55abc6) {
          console.log("lien detecté");
          var _0x121c59 = _0x36fd03 ? _0x1e845a.includes(_0x8b4831) : false;
          if (_0x527314 || _0x215b0a || !_0x121c59) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x787ac7 = {
            'remoteJid': _0x17e1de,
            'fromMe': false,
            'id': _0x39b480.key.id,
            'participant': _0x5c0525
          };
          var _0x253596 = "lien detected, \n";
          var _0x660475 = new Sticker("https://raw.githubusercontent.com/mr-X-force/LUCKY-MD-XFORCE/main/media/remover.gif", {
            'pack': "FrediEzra",
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x32,
            'background': "#000000"
          });
          await _0x660475.toFile("st1.webp");
          var _0x56fa85 = await recupererActionJid(_0x17e1de);
          if (_0x56fa85 === "remove") {
            _0x253596 += "message deleted \n @" + _0x5c0525.split('@')[0] + " removed from group.";
            await _0x730233.sendMessage(_0x17e1de, {
              sticker': fs.readFileSync("st1.webp")
            });
            0;
            baileys_1.delay(800);
            await _0x730233.sendMessage(_0x17e1de, {
              'text': _0x253596,
              'mentions': [_0x5c0525]
            }, {
              'quoted': _0x39b480
            });
            try {
              await _0x730233.groupParticipantsUpdate(_0x17e1de, [_0x5c0525], "remove");
            } catch (_0x4f77f3) {
              console.log("antiien ") + _0x4f77f3;
            }
            await _0x730233.sendMessage(_0x17e1de, {
              'delete': _0x787ac7
            });
            await fs.unlink("st1.webp");
          } else {
            if (_0x56fa85 === "delete") {
              _0x253596 += "message deleted \n @" + _0x5c0525.split('@')[0] + " avoid sending link.";
              await _0x730233.sendMessage(_0x17e1de, {
                'text': _0x253596,
                'mentions': [_0x5c0525]
              }, {
                'quoted': _0x39b480
              });
              await _0x730233.sendMessage(_0x17e1de, {
                'delete': _0x787ac7
              });
              await fs.unlink("st1.webp");
            } else {
              if (_0x56fa85 === "warn") {
                const {
                  getWarnCountByJID: _0x152bff,
                  ajouterUtilisateurAvecWarnCount: _0x4db31f
                } = require("./lib/warn");
                let _0x4a4062 = await _0x152bff(_0x5c0525);
                let _0x36f2ad = conf.WARN_COUNT;
                if (_0x4a4062 >= _0x36f2ad) {
                  var _0x174529 = "link detected , you will be remove because of reaching warn-limit";
                  await _0x730233.sendMessage(_0x17e1de, {
                    'text': _0x174529,
                    'mentions': [_0x5c0525]
                  }, {
                    'quoted': _0x39b480
                  });
                  await _0x730233.groupParticipantsUpdate(_0x17e1de, [_0x5c0525], "remove");
                  await _0x730233.sendMessage(_0x17e1de, {
                    'delete': _0x787ac7
                  });
                } else {
                  var _0x235277 = _0x36f2ad - _0x4a4062;
                  var _0x5d34ec = "Link detected , your warn_count was upgrade ;\n rest : " + _0x235277 + " ";
                  await _0x4db31f(_0x5c0525);
                  await _0x730233.sendMessage(_0x17e1de, {
                    'text': _0x5d34ec,
                    'mentions': [_0x5c0525]
                  }, {
                    'quoted': _0x39b480
                  });
                  await _0x730233.sendMessage(_0x17e1de, {
                    'delete': _0x787ac7
                  });
                }
              }
            }
          }
        }
      } catch (_0x4c546b) {
        console.log("lib err " + _0x4c546b);
      }
      try {
        const _0x56372b = _0x39b480.key?.['id']?.["startsWith"]("BAES") && _0x39b480.key?.['id']?.["length"] === 16;
        const _0x98469d = _0x39b480.key?.['id']?.["startsWith"]("BAE5") && _0x39b480.key?.['id']?.["length"] === 16;
        if (_0x56372b || _0x98469d) {
          if (_0x55f80e === "reactionMessage") {
            console.log("Je ne reagis pas au reactions");
            return;
          }
          ;
          const _0x4f9457 = await atbverifierEtatJid(_0x17e1de);
          if (!_0x4f9457) {
            return;
          }
          ;
          if (_0x215b0a || _0x5c0525 === _0x8b4831) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x202e81 = {
            'remoteJid': _0x17e1de,
            'fromMe': false,
            'id': _0x39b480.key.id,
            'participant': _0x5c0525
          };
          var _0x253596 = "bot detected, \n";
          var _0x660475 = new Sticker("https://raw.githubusercontent.com/mr-X-force/LUCKY-MD-XFORCE/main/media/remover.gif", {
            'pack': "FredieTech",
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x32,
            'background': "#000000"
          });
          await _0x660475.toFile("st1.webp");
          var _0x56fa85 = await atbrecupererActionJid(_0x17e1de);
          if (_0x56fa85 === "remove") {
            _0x253596 += "message deleted \n @" + _0x5c0525.split('@')[0] + " removed from group.";
            await _0x730233.sendMessage(_0x17e1de, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0;
            baileys_1.delay(800);
            await _0x730233.sendMessage(_0x17e1de, {
              'text': _0x253596,
              'mentions': [_0x5c0525]
            }, {
              'quoted': _0x39b480
            });
            try {
              await _0x730233.groupParticipantsUpdate(_0x17e1de, [_0x5c0525], "remove");
            } catch (_0x1bcea4) {
              console.log("antibot ") + _0x1bcea4;
            }
            await _0x730233.sendMessage(_0x17e1de, {
              'delete': _0x202e81
            });
            await fs.unlink("st1.webp");
          } else {
            if (_0x56fa85 === "delete") {
              _0x253596 += "message delete \n @" + _0x5c0525.split('@')[0] + " Avoid sending link.";
              await _0x730233.sendMessage(_0x17e1de, {
                'text': _0x253596,
                'mentions': [_0x5c0525]
              }, {
                'quoted': _0x39b480
              });
              await _0x730233.sendMessage(_0x17e1de, {
                'delete': _0x202e81
              });
              await fs.unlink("st1.webp");
            } else {
              if (_0x56fa85 === "warn") {
                const {
                  getWarnCountByJID: _0x47a686,
                  ajouterUtilisateurAvecWarnCount: _0x2ba7a2
                } = require("./lib/warn");
                let _0x51c78c = await _0x47a686(_0x5c0525);
                let _0x4e2971 = conf.WARN_COUNT;
                if (_0x51c78c >= _0x4e2971) {
                  var _0x174529 = "bot detected ;you will be remove because of reaching warn-limit";
                  await _0x730233.sendMessage(_0x17e1de, {
                    'text': _0x174529,
                    'mentions': [_0x5c0525]
                  }, {
                    'quoted': _0x39b480
                  });
                  await _0x730233.groupParticipantsUpdate(_0x17e1de, [_0x5c0525], "remove");
                  await _0x730233.sendMessage(_0x17e1de, {
                    'delete': _0x202e81
                  });
                } else {
                  var _0x235277 = _0x4e2971 - _0x51c78c;
                  var _0x5d34ec = "bot detected , your warn_count was upgrade ;\n rest : " + _0x235277 + " ";
                  await _0x2ba7a2(_0x5c0525);
                  await _0x730233.sendMessage(_0x17e1de, {
                    'text': _0x5d34ec,
                    'mentions': [_0x5c0525]
                  }, {
                    'quoted': _0x39b480
                  });
                  await _0x730233.sendMessage(_0x17e1de, {
                    'delete': _0x202e81
                  });
                }
              }
            }
          }
        }
      } catch (_0xae404a) {
        console.log(".... " + _0xae404a);
      }
      if (_0x980189) {
        const _0x2dab2d = evt.cm.find(_0x154e79 => _0x154e79.nomCom === _0x10157f);
        if (_0x2dab2d) {
          try {
            if (conf.MODE.toLocaleLowerCase() != "yes" && !_0x527314) {
              return;
            }
            if (!_0x527314 && _0x17e1de === _0x5c0525 && conf.PM_PERMIT === "yes") {
              _0x7bfb87("You don't have acces to commands here");
              return;
            }
            if (!_0x527314 && _0x36fd03) {
              let _0x4d1520 = await isGroupBanned(_0x17e1de);
              if (_0x4d1520) {
                return;
              }
            }
            if (!_0x215b0a && _0x36fd03) {
              let _0x1039aa = await isGroupOnlyAdmin(_0x17e1de);
              if (_0x1039aa) {
                return;
              }
            }
            if (!_0x527314) {
              let _0x542dc9 = await isUserBanned(_0x5c0525);
              if (_0x542dc9) {
                _0x7bfb87("You are banned from bot commands");
                return;
              }
            }
            reagir(_0x17e1de, _0x730233, _0x39b480, _0x2dab2d.reaction);
            _0x2dab2d.fonction(_0x17e1de, _0x730233, _0x2f2116);
          } catch (_0x52c5b2) {
            console.log("😡😡 " + _0x52c5b2);
            _0x730233.sendMessage(_0x17e1de, {
              'text': "😡😡 " + _0x52c5b2
            }, {
              'quoted': _0x39b480
            });
          }
        }
      }
    });
    const {
      recupevents: _0x70283d
    } = require("./lib/welcome");
    _0x730233.ev.on("group-participants.update", async _0x49cc34 => {
      console.log(_0x49cc34);
      let _0x44111f;
      try {
        _0x44111f = await _0x730233.profilePictureUrl(_0x49cc34.id, "image");
      } catch {
        _0x44111f = "https://files.catbox.moe/3o37c5.jpeg";
      }
      try {
        const _0x2d3301 = await _0x730233.groupMetadata(_0x49cc34.id);
        if (_0x49cc34.action == "add" && (await _0x70283d(_0x49cc34.id, "welcome")) == 'on') {
          let _0x4ba542 = "👋 Hello\n";
          let _0x1eadaf = _0x49cc34.participants;
          for (let _0x14fe75 of _0x1eadaf) {
            _0x4ba542 += " *@" + _0x14fe75.split('@')[0] + "* Welcome to Our Official Group,";
          }
          _0x4ba542 += "You might want to read the group Description to avoid getting removed...";
          _0x730233.sendMessage(_0x49cc34.id, {
            'image': {
              'url': _0x44111f
            },
            'caption': _0x4ba542,
            'mentions': _0x1eadaf
          });
        } else {
          if (_0x49cc34.action == "remove" && (await _0x70283d(_0x49cc34.id, "goodbye")) == 'on') {
            let _0xdd7375 = "one or somes member(s) left group;\n";
            let _0x3ca90b = _0x49cc34.participants;
            for (let _0x272c95 of _0x3ca90b) {
              _0xdd7375 += '@' + _0x272c95.split('@')[0] + "\n";
            }
            _0x730233.sendMessage(_0x49cc34.id, {
              'text': _0xdd7375,
              'mentions': _0x3ca90b
            });
          } else {
            if (_0x49cc34.action == "promote" && (await _0x70283d(_0x49cc34.id, "antipromote")) == 'on') {
              if (_0x49cc34.author == _0x2d3301.owner || _0x49cc34.author == conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x49cc34.author == decodeJid(_0x730233.user.id) || _0x49cc34.author == _0x49cc34.participants[0]) {
                console.log("Cas de superUser je fais rien");
                return;
              }
              ;
              await _0x730233.groupParticipantsUpdate(_0x49cc34.id, [_0x49cc34.author, _0x49cc34.participants[0]], "demote");
              _0x730233.sendMessage(_0x49cc34.id, {
                'text': '@' + _0x49cc34.author.split('@')[0] + " has violated the anti-promotion rule, therefore both " + _0x49cc34.author.split('@')[0] + " and @" + _0x49cc34.participants[0].split('@')[0] + " have been removed from administrative rights.",
                'mentions': [_0x49cc34.author, _0x49cc34.participants[0]]
              });
            } else {
              if (_0x49cc34.action == "demote" && (await _0x70283d(_0x49cc34.id, "antidemote")) == 'on') {
                if (_0x49cc34.author == _0x2d3301.owner || _0x49cc34.author == conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x49cc34.author == decodeJid(_0x730233.user.id) || _0x49cc34.author == _0x49cc34.participants[0]) {
                  console.log("Cas de superUser je fais rien");
                  return;
                }
                ;
                await _0x730233.groupParticipantsUpdate(_0x49cc34.id, [_0x49cc34.author], "demote");
                await _0x730233.groupParticipantsUpdate(_0x49cc34.id, [_0x49cc34.participants[0]], "promote");
                _0x730233.sendMessage(_0x49cc34.id, {
                  'text': '@' + _0x49cc34.author.split('@')[0] + " has violated the anti-demotion rule by removing @" + _0x49cc34.participants[0].split('@')[0] + ". Consequently, he has been stripped of administrative rights.",
                  'mentions': [_0x49cc34.author, _0x49cc34.participants[0]]
                });
              }
            }
          }
        }
      } catch (_0x4b8061) {
        console.error(_0x4b8061);
      }
    });
    async function _0x27ab79() {
      const _0x330dc2 = require("node-cron");
      const {
        getCron: _0x2e78ec
      } = require("./lib/cron");
      let _0x309b3c = await _0x2e78ec();
      console.log(_0x309b3c);
      if (_0x309b3c.length > 0) {
         for (let _0x11579d = 0; _0x11579d < _0x309b3c.length; _0x11579d++) {
          if (_0x309b3c[_0x11579d].mute_at != null) {
            let _0x5910a0 = _0x309b3c[_0x11579d].mute_at.split(':');
            console.log("etablissement d'un automute pour " + _0x309b3c[_0x11579d].group_id + " a " + _0x5910a0[0] + " H " + _0x5910a0[1]);
            _0x330dc2.schedule(_0x5910a0[1] + " " + _0x5910a0[0] + " * * *", async () => {
              await _0x730233.groupSettingUpdate(_0x309b3c[_0x11579d].group_id, "announcement");
              _0x730233.sendMessage(_0x309b3c[_0x11579d].group_id, {
                'image': {
                  'url': "./media/chrono.webp"
                },
                'caption': "Hello, it's time to close the group; sayonara."
              });
            }, {
              'timezone': "Africa/Nairobi"
            });
          }
          if (_0x309b3c[_0x11579d].unmute_at != null) {
            let _0x696c66 = _0x309b3c[_0x11579d].unmute_at.split(':');
            console.log("etablissement d'un autounmute pour " + _0x696c66[0] + " H " + _0x696c66[1] + " ");
            _0x330dc2.schedule(_0x696c66[1] + " " + _0x696c66[0] + " * * *", async () => {
              await _0x730233.groupSettingUpdate(_0x309b3c[_0x11579d].group_id, "not_announcement");
              _0x730233.sendMessage(_0x309b3c[_0x11579d].group_id, {
                'image': {
                  'url': "./media/chrono.webp"
                },
                'caption': "Good morning; It's time to open the group."
              });
            }, {
              'timezone': "Africa/Nairobi"
            });
          }
        }
      } else {
        console.log("Les crons n'ont pas été activés");
      }
      return;
    }
    _0x730233.ev.on("contacts.upsert", async _0x13c26e => {
      const _0x1dfb1c = _0x261255 => {
        for (const _0x2d0294 of _0x261255) {
          if (store.contacts[_0x2d0294.id]) {
            Object.assign(store.contacts[_0x2d0294.id], _0x2d0294);
          } else {
            store.contacts[_0x2d0294.id] = _0x2d0294;
          }
        }
        return;
      };
      _0x1dfb1c(_0x13c26e);
    });
    _0x730233.ev.on("connection.update", async _0x2a61bd => {
      const {
        lastDisconnect: _0x2388cd,
        connection: _0x178e94
      } = _0x2a61bd;
      if (_0x178e94 === "connecting") {
        console.log("ℹ️ Lucky is connecting...");
      } else {
        if (_0x178e94 === "open") {
          await _0x730233.groupAcceptInvite("GmKhyg4DonRCMvFVkAHPSL");
          for (let _0x11579d = 0; _0x11579d < _0x309b3c.length; _0x11579d++) {
          if (_0x309b3c[_0x11579d].mute_at != null) {
            let _0x5910a0 = _0x309b3c[_0x11579d].mute_at.split(':');
            console.log("etablissement d'un automute pour " + _0x309b3c[_0x11579d].group_id + " a " + _0x5910a0[0] + " H " + _0x5910a0[1]);
            _0x330dc2.schedule(_0x5910a0[1] + " " + _0x5910a0[0] + " * * *", async () => {
              await _0x730233.groupSettingUpdate(_0x309b3c[_0x11579d].group_id, "announcement");
              _0x730233.sendMessage(_0x309b3c[_0x11579d].group_id, {
                'image': {
                  'url': "./media/chrono.webp"
                },
                'caption': "Hello, it's time to close the group; sayonara."
              });
            }, {
              'timezone': "Africa/Nairobi"
            });
          }
          if (_0x309b3c[_0x11579d].unmute_at != null) {
            let _0x696c66 = _0x309b3c[_0x11579d].unmute_at.split(':');
            console.log("etablissement d'un autounmute pour " + _0x696c66[0] + " H " + _0x696c66[1] + " ");
            _0x330dc2.schedule(_0x696c66[1] + " " + _0x696c66[0] + " * * *", async () => {
              await _0x730233.groupSettingUpdate(_0x309b3c[_0x11579d].group_id, "not_announcement");
              _0x730233.sendMessage(_0x309b3c[_0x11579d].group_id, {
                'image': {
                  'url': "./media/chrono.webp"
                },
                'caption': "Good morning; It's time to open the group."
              });
            }, {
              'timezone': "Africa/Nairobi"
            });
          }
        }
      } else {
        console.log("Les crons n'ont pas été activés");
      }
      return;
    }
    _0x730233.ev.on("contacts.upsert", async _0x13c26e => {
      const _0x1dfb1c = _0x261255 => {
        for (const _0x2d0294 of _0x261255) {
          if (store.contacts[_0x2d0294.id]) {
            Object.assign(store.contacts[_0x2d0294.id], _0x2d0294);
          } else {
            store.contacts[_0x2d0294.id] = _0x2d0294;
          }
        }
        return;
      };
      _0x1dfb1c(_0x13c26e);
    });
    _0x730233.ev.on("connection.update", async _0x2a61bd => {
      const {
        lastDisconnect: _0x2388cd,
        connection: _0x178e94
      } = _0x2a61bd;
      if (_0x178e94 === "connecting") {
        console.log("ℹ️ Lucky is connecting...");
      } else {
        if (_0x178e94 === "open") {
          await _0x730233.groupAcceptInvite("GmKhyg4DonRCMvFVkAHPSL");
          await _0x730233.newsletterFollow("120363313124070136@newsletter");
          await _0x730233.groupAcceptInvite("E2jarQUgOkf3uPPzsiWdND");
          console.log("🔮 Lucky Xforce Connected to your WhatsApp! 🫧");
          console.log('--');
          0;
          await baileys_1.delay(200);
          console.log("------");
          0;
          await baileys_1.delay(300);
          console.log("------------------/-----");
          console.log("👀 Lucky Xforce is Online 🕸\n\n");
          console.log("🛒 Loading Lucky Xforce Plugins...\n");
          fs.readdirSync(__dirname + "/plugins").forEach(_0x1744a7 => {
            if (path.extname(_0x1744a7).toLowerCase() == ".js") {
              try {
                require(__dirname + "/plugins/" + _0x1744a7);
                console.log(_0x1744a7 + "🛒🔑 Lucky Xforce plugins Installed Successfully✔️");
              } catch (_0x4f4e85) {
                console.log(_0x1744a7 + " could not be installed due to : " + _0x4f4e85);
              }
              0;
              baileys_1.delay(300);
            }
          });
          0;
          baileys_1.delay(700);
          var _0x453d91;
          if (conf.MODE.toLocaleLowerCase() === "yes") {
            _0x453d91 = "public";
          } else if (conf.MODE.toLocaleLowerCase() === 'no') {
            _0x453d91 = "private";
          } else {
            _0x453d91 = "undefined";
          }
          console.log("🏆🗡️ Lucky Xforce Plugins Installation Completed ✅");
          await _0x27ab79();
          if (conf.DP.toLowerCase() === "yes") {
            let _0x208201 = "HELLO👋, BOT CONNECTED✅😇⁠⁠⁠⁠\n\n╭════⊷\n║ *『 " + conf.BOT + " IS ONLINE』*\n║    Creator: *" + conf.OWNER_NAME + "*\n║    Prefix : [  " + prefixe + " ]\n║    Mode : " + _0x453d91 + " mode\n║    Total Commands : " + evt.cm.length + "\n╰──────────────────⊷\n\n╭═══⊷\n┃\n┃ *Thank you for choosing*                      \n┃  *" + conf.BOT + "*\n> Regards " + conf.OWNER_NAME + " \n╰──────────────────⊷ \nFollow Channel To Get Updates \nhttps://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f\n";
            await _0x730233.sendMessage(_0x730233.user.id, {
              'text': _0x208201
            });
          }
        } else {
          if (_0x178e94 == "close") {
            let _0xc6e634 = new boom_1.Boom(_0x2388cd?.["error"])?.["output"]["statusCode"];
            if (_0xc6e634 === baileys_1.DisconnectReason.badSession) {
              console.log("Session id error, rescan again...");
            } else {
              if (_0xc6e634 === baileys_1.DisconnectReason.connectionClosed) {
                console.log("!!! connection closed, reconnection in progress...");
                _0x55ec3d();
              } else {
                if (_0xc6e634 === baileys_1.DisconnectReason.connectionLost) {
                  console.log("connection error 😞,,, trying to reconnect... ");
                  _0x55ec3d();
                } else {
                  if (_0xc6e634 === baileys_1.DisconnectReason?.["connectionReplaced"]) {
                    console.log("connection replaced ,,, a session is already open please close it !!!");
                  } else {
                    if (_0xc6e634 === baileys_1.DisconnectReason.loggedOut) {
                      console.log("you are disconnected,,, please rescan the qr code please");
                    } else {
                      if (_0xc6e634 === baileys_1.DisconnectReason.restartRequired) {
                        console.log("reboot in progress ▶️");
                        _0x55ec3d();
                      } else {
                        console.log("redemarrage sur le coup de l'erreur  ", _0xc6e634);
                        const {
                          exec: _0x235afa
                        } = require("child_process");
                        _0x235afa("pm2 restart all");
                      }
                    }
                  }
                }
              }
            }
            console.log("hum " + _0x178e94);
            _0x55ec3d();
          }
        }
      }
    });
    _0x730233.ev.on("creds.update", _0x48773b);
    _0x730233.downloadAndSaveMediaMessage = async (_0x6ad922, _0x36b2dd = '', _0x2171fa = true) => {
      let _0x3554e3 = _0x6ad922.msg ? _0x6ad922.msg : _0x6ad922;
      let _0x1f3404 = (_0x6ad922.msg || _0x6ad922).mimetype || '';
      let _0x393552 = _0x6ad922.mtype ? _0x6ad922.mtype.replace(/Message/gi, '') : _0x1f3404.split('/')[0];
      0;
      const _0x21734e = await baileys_1.downloadContentFromMessage(_0x3554e3, _0x393552);
      let _0xa7a97c = Buffer.from([]);
      for await (const _0x4e3da5 of _0x21734e) {
        _0xa7a97c = Buffer.concat([_0xa7a97c, _0x4e3da5]);
      }
      let _0x3d6071 = await FileType.fromBuffer(_0xa7a97c);
      let _0xd36480 = './' + _0x36b2dd + '.' + _0x3d6071.ext;
      await fs.writeFileSync(_0xd36480, _0xa7a97c);
      return _0xd36480;
    };
    _0x730233.awaitForMessage = async (_0x52f49d = {}) => {
      return new Promise((_0x943758, _0xd2475b) => {
        if (typeof _0x52f49d !== "object") {
          _0xd2475b(new Error("Options must be an object"));
        }
        if (typeof _0x52f49d.sender !== "string") {
          _0xd2475b(new Error("Sender must be a string"));
        }
        if (typeof _0x52f49d.chatJid !== "string") {
          _0xd2475b(new Error("ChatJid must be a string"));
        }
        if (_0x52f49d.timeout && typeof _0x52f49d.timeout !== "number") {
          _0xd2475b(new Error("Timeout must be a number"));
        }
         (_0x52f49d.filter && typeof _0x52f49d.filter !== "function") {
          _0xd2475b(new Error("Filter must be a function"));
        }
        const _0x12bc0b = _0x52f49d?.["timeout"] || undefined;
        const _0x5915b6 = _0x52f49d?.["filter"] || (() => true);
        let _0x25f2ce = undefined;
        let _0x1cff8b = _0x5e7033 => {
          let {
            type: _0x1a052d,
            messages: _0x451836
          } = _0x5e7033;
          if (_0x1a052d == "notify") {
            for (let _0x15dd22 of _0x451836) {
              const _0x2ccb68 = _0x15dd22.key.fromMe;
              const _0x14509f = _0x15dd22.key.remoteJid;
              const _0x4546a0 = _0x14509f.endsWith("@g.us");
              const _0x18e5f1 = _0x14509f == "status@broadcast";
              const _0x37e094 = _0x2ccb68 ? _0x730233.user.id.replace(/:.*@/g, '@') : _0x4546a0 || _0x18e5f1 ? _0x15dd22.key.participant.replace(/:.*@/g, '@') : _0x14509f;
              if (_0x37e094 == _0x52f49d.sender && _0x14509f == _0x52f49d.chatJid && _0x5915b6(_0x15dd22)) {
                _0x730233.ev.off("messages.upsert", _0x1cff8b);
                clearTimeout(_0x25f2ce);
                _0x943758(_0x15dd22);
              }
            }
          }
        };
        _0x730233.ev.on("messages.upsert", _0x1cff8b);
        if (_0x12bc0b) {
          _0x25f2ce = setTimeout(() => {
            _0x730233.ev.off("messages.upsert", _0x1cff8b);
            _0xd2475b(new Error("Timeout"));
          }, _0x12bc0b);
        }
      });
    };
    return _0x730233;
  }
  let _0x4bdbeb = require.resolve(__filename);
  fs.watchFile(_0x4bdbeb, () => {
    fs.unwatchFile(_0x4bdbeb);
    console.log("mise à jour " + __filename);
    delete require.cache[_0x4bdbeb];
    require(_0x4bdbeb);
  });
  _0x55ec3d();
}, 5000);
