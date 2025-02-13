import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../../config.cjs';

const alive = async (m, sock) => {
  const prefix = config.PREFIX;
  const mode = config.MODE;
  const pushName = m.pushName || 'User';

  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';

  if (cmd === "men") {
    await m.React('💮'); // React with a loading icon
    // Calculate uptime

    const uptimeSeconds = process.uptime();
    const days = Math.floor(uptimeSeconds / (24 * 3600));
    const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);

    
    // Get real time
    const realTime = moment().tz("Africa/Tanzania").format("HH:mm:ss");
    const xtime = moment.tz("Africa/Tanzania").format("HH:mm:ss");
    const xdate = moment.tz("Africa/Tanzania").format("DD/MM/YYYY");
    const time2 = moment().tz("Africa/Tanzania").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

    const aliveMessage = `нєℓℓσ
 *${pushName}* ${pushwish}
╭───────────────━⊷
║ ᴊᴏᴇʟ-xᴍᴅ ᴍᴀɪɴ  ᴍᴇɴᴜ
╰───────────────━⊷
╭───────────────━⊷
║ *ηαмє:* *ʝσєℓ χ∂ v³ вσт*
║ *ρяєƒιχ:*  *${prefix}*
║ *мσ∂є:*  *${mode}*
║ *тιмє:*  *${realTime}*
║ *σωηєя:*  *ℓσя∂ ʝσєℓ*
╰───────────────━⊷
╭───────────────━⊷
║   *ʝσєℓ χ∂ ν тняєє*
╰───────────────━⊷
*❑━❒ʝσєℓ χ∂ ν тняєє❑━❒*

---

*¢σηνєятєя*
- αттρ
- αттρ2
- αттρ3
- євιηαяу
- ∂вιηαяу
- ємσʝιмιχ
- мρ3

---

*αι*
- αι
- вυg
- яєρσят
- gρт
- ∂αℓℓє
- яємιηι
- gємιηι

---

*тσσℓ*
- ¢αℓ¢υℓαтσя
- тємρмαιℓ
- ¢нє¢кмαιℓ
- тят
- ттѕ

---

*gяσυρ ¢σммαη∂ѕ*
- ℓιηкgяσυρ
- ѕєтρρg¢
- ѕєтηαмє
- ѕєт∂єѕ¢
- gяσυρ
- g¢ѕєттιηg
- ωєℓ¢σмє
- α∂∂
- кι¢к
- нι∂єтαg
- тαgαℓℓ
- αηтιℓιηк
- αηтιтσχι¢
- ρяσмσтє
- ∂ємσтє
- gєтвισ

---

*∂σωηℓσα∂*
- αρк
- ƒα¢євσσк
- мє∂ιαƒιяє
- ριηтєяєѕт∂ℓ
- gιт¢ℓσηє
- g∂яινє
- ιηѕтα
- утмρ3
- утмρ4
- ρℓαу
- ѕσηg
- νι∂єσ
- утмρ3∂σ¢
- утмρ4∂σ¢
- тιктσк

---

*ѕєαя¢н*
- ρℓαу
- утѕ
- ιм∂в
- gσσgℓє
- gιмαgє
- ριηтєяєѕт
- ωαℓℓραρєя
- ωιкιмє∂ια
- утѕєαя¢н
- яιηgтσηє
- ℓуяι¢ѕ

---

*мαιη ¢σммαη∂ѕ*
- ριηg
- αℓινє
- σωηєя
- мєηυ
- ιηƒσвσт

---

*σωηєя ¢σммαη∂ѕ*
- ʝσιη
- ℓєανє
- вℓσ¢к
- υηвℓσ¢к
- ѕєтρρвσт
- αηтι¢αℓℓ
- ѕєтѕтαтυѕ
- ѕєтηαмєвσт
- αυтσтуριηg
- αℓωαуѕσηℓιηє
- αυтσяєα∂
- αυтσѕνιєω

---

*ѕтαℓкєя*
- тяυє¢αℓℓєя
- ιηѕтαѕтαℓк
- gιтнυвѕтαℓк

---

*❑━❒ℓσя∂ ʝσєℓтє¢н❑━❑*`;
   await conn.sendMessage(from,{image:{url: `https://i.ibb.co/d4GxTgKf/temp-image.jpg`},caption:dec},{quoted:mek});
      },
      { quoted: m }
    );
  }
};

export default alive;
