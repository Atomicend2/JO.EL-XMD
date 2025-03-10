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

  if (cmd === "fuc") {
    await m.React('💮'); // React with a loading icon
    // Calculate uptime

    const uptimeSeconds = process.uptime();
    const days = Math.floor(uptimeSeconds / (24 * 3600));
    const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);

    
    // Get real time
    const realTime = moment().tz("Tanzania/Dodoma").format("HH:mm:ss");
    const xtime = moment.tz("Tanzania/Dodoma").format("HH:mm:ss");
    const xdate = moment.tz("Tanzania/Dodoma").format("DD/MM/YYYY");
    const time2 = moment().tz("Tanzania/Dodoma").format("HH:mm:ss");
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
╭──❍「 *ᴊᴏᴇʟ xᴍᴅ ᴠ¹⁰* 」❍
├ ᴘʀᴇғɪx :  *${prefix}*
├ ᴍᴏᴅᴇ :  *${mode}*
├ ᴛɪᴍᴇ : *${realTime}*
╰─┬────❍ 
╭─┴❍「 *ᴘʀᴇ ɪɴғᴏ* 」
├ ᴛʜᴇᴍᴇ= ʟᴏʀᴅ ᴊᴏᴇʟ
├ sᴛᴀᴛᴜs ʀᴇᴘᴏ=  *ᴍᴀɪɴᴛᴀɪɴᴇᴅ
├ ᴄʀᴇᴀᴛᴏʀ= *ᴊᴏᴇʟ xᴅ*
╰─┬────❍
╭─┴❍「 *ᴄᴏɴᴠᴇʀᴛᴇʀ* 」❍
│αттρ  
│αттρ2  
│αттρ3  
│вιηαяу  
│∂вιηαяу  
│ємσʝιмιχ  
│мρ3  
╰─┬────❍
╭─┴❍「 *ᴀɪ ᴄᴍᴅs* 」❍
│αι  
│вυg  
│яєρσят  
│gρт  
│∂αℓℓ-є  
│яємιηι  
│gємιηι  
╰─┬────❍
╭─┴❍「 *ᴛᴏᴏʟ* 」❍
│¢αℓ¢υℓαтσя  
│тємρƒιℓє  
│¢нє¢кмαιℓ  
│тяαт  
│ттѕ  
╰─┬────❍
╭─┴❍「 *ɢʀᴏᴜᴘ* 」❍
│ℓιηкgяσυρ  
│ѕєтρρg  
│ѕєтηαмє  
│ѕєт∂єѕ¢  
│gяσυρ  
│g¢ѕєттιηg  
│ωєℓ¢σмє  
│α∂∂  
│кι¢кαℓℓ
│кι¢к  
│нι∂єтαg  
│тαgαℓℓ  
│αηтιℓιηк  
│αηтιтσχι¢  
│ρяσмσтє  
│∂ємσтє  
│gєтвισ  
╰─┬────❍
╭─┴❍「 *ᴅᴏᴡɴʟᴏᴀᴅ* 」❍
│αρк  
│ƒα¢євσσк  
│мє∂ιαƒιяє  
│ριηтєяєѕт∂ℓ  
│gιтнυвℓσηє  
│g∂яινє  
│ιηѕтα  
│ут3  
│ут4  
│ρℓαу  
│ѕσηg  
│νι∂єσ  
│ут3∂σ¢  
│ут4∂σ¢  
│тιктσк  
╰─┬────❍
╭─┴❍「 *ᴘʀᴇɴɪᴜᴍ* 」❍
│вυgмєηυ  
│∂σ¢вυg  
│ℓσ¢¢яαѕн  
│αмσυηтвυg <αмσυηт>  
│ρмвυg <ηυмвєя>  
│∂єℓвυg <ηυмвєя>  
│тяσℓℓвυg <ηυмвєя>  
│∂σ¢υвυg <ηυмвєя>  
│υηℓιмιтє∂вυg <ηυмвєя>  
│вσмвυg <ηυмвєя>  
│ℓαgвυg <ηυмвєя>  
│g¢вυg <gяσυρℓιηк>  
│∂єℓg¢вυg <gяσυρℓιηк>  
│тяσℓℓg¢вυg <gяσυρℓιηк>  
│ℓαвυg <gяσυρℓιηк>  
│вσмg¢вυg <gяσυρℓιηк>  
│υηℓιмιтє∂g¢вυg <gяσυρℓιηк>
│∂σ¢υg¢вυg <gяσυρℓιηк>  
╰─┬────❍
╭─┴❍「 *ᴅᴏᴡɴʟᴏᴀᴅ* 」❍
│ρℓαу  
│ут  
│ιм∂νв  
│gσσgℓє  
│ιмαgє  
│ριηтєяєѕт  
│ωαℓℓραρєя  
│ωιкιмє∂ια  
│утѕєαя¢н  
│яιηgтσηηє  
│ℓуяι¢ѕєαя¢н  
╰─┬────❍
╭─┴❍「 *ᴍᴀɪɴ* 」❍
│ριηg  
│αℓινє  
│σωηєя  
│мєηυ  
│ιηƒσвσт 
╰─┬────❍
╭─┴❍「 *ᴏᴡɴᴇʀ* 」❍
│νν
│νν1
│νν2
│νν3
│ʝσιη  
│ℓєανє  
│вℓσ¢к  
│υηвℓσ¢к  
│ѕєтρвσт  
│αηтι¢αℓℓ  
│ѕєтѕтαтυѕ  
│ѕєтηαмєвσт  
│αυтσвισ  
│αυтσтуριηg  
│αℓωαуѕσηℓιηє  
│αυтσяєα∂  
│αυтσѕνιєω  
╰─┬────❍
╭─┴❍「 *sᴛᴀʟᴋ* 」❍
│тяυє¢αℓℓєя  
│ιηѕтαѕтαℓк  
│gιтнυвѕтαℓк  
╰─┬────❍
╭─┴❍「 *ᴏᴛʜᴇʀ* 」❍
│ѕραяк
│υяℓ
│υяℓ2
│тσυяℓ  
│αρρ  
│αρρѕєαя¢н  
│ρℓαуѕтσяє  
│qυαяιηνι∂єσ  
│¢нαηηєℓ  
│ѕυρρσят  
│ʝσєℓ  
│¢нαт  
│qνι∂  
│qυαяιηνι∂  
│ѕѕ  
╰─┬────❍
╭─┴❍「 *ɴᴇᴡ* 」❍
│ѕ¢σяє  
│¢ℓι¢к  
│яєѕυℓтѕ  
│gιтнυвℓσηє  
│υρ∂αтє  
│ѕηαкνι∂  
│ѕηα¢к  
│ѕнσятηєяυℓ  
│кι¢кαℓℓ    
│gινєтєχт  
│мє∂ιαƒιяє  
│ƒαη¢у  
│αηтι¢αℓℓ  
│ωα¢нαηηєℓ  
│мσνιє  
╰─┬────❍
╭─┴❍「 *sᴀʏ* 」❍
│ѕαу  
│ттѕ  
│вαѕѕ  
│вℓσωιη  
│∂єєρ  
│єαяяαρє  
│ƒαѕт  
│ƒαт  
│ηιgнттιмє  
│яєνєяѕє  
│яσвσт  
│ѕℓσω  
│ѕмσσтн  
│туραι  
╰─┬────❍
╭─┴❍「 *ʟᴏɢᴏ* 」❍
│ℓσgσ1  
│ℓσgσ2  
│ℓσgσ3  
│ℓσgσ4  
│ℓσgσ5  
│ℓσgσ6  
│ℓσgσ7  
│ℓσgσ8  
│ℓσgσ9  
│ℓσgσ10  
│ℓσgσ11  
│ℓσgσ12  
│ℓσgσ13  
│ℓσgσ14  
│ℓσgσ15  
│ℓσgσ16  
│ℓσgσ17  
│ℓσgσ18  
│ℓσgσ19  
╰─┬────❍
╭─┴❍「 *ᴡᴀɪғᴜ* 」❍
│нιgнƒινє  
│gℓσмρ  
│нαη∂нσℓ∂  
│ѕнιησвυ  
│¢υ∂∂ℓє  
│¢яιηgє  
│ѕα∂  
│нαρρу  
│∂αη¢є  
│ѕмυg  
│вℓυѕн  
│αωσσ  
│ωανє  
│ѕмιℓє  
╰────────────❍
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴏʀᴅ ᴊᴏᴇʟ*`;

    await m.React('☄️'); // React with a success icon

    sock.sendMessage(
      m.from,
      {
        text: aliveMessage,
        contextInfo: {
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363317462952356@newsletter',
            newsletterName: "ᴊᴏᴇʟ xᴅ ʙᴏᴛ ᴠ ¹⁰",
            serverMessageId: -1,
          },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "ᴊᴏᴇʟ xᴅ ʙᴏᴛ ᴠ ⁷",
            body: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴏʀᴅ ᴊᴏᴇʟ",
            thumbnailUrl: 'https://avatars.githubusercontent.com/u/162905644?v=4', // Add thumbnail URL if required
            sourceUrl: 'https://whatsapp.com/channel/0029Vak2PevK0IBh2pKJPp2K', // Add source URL if necessary
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      },
      { quoted: m });
    // Send audio after sending the menu
    await Matrix.sendMessage(m.from, {
      audio: { url: 'https://github.com/tharumin/Alexa_Voice/raw/refs/heads/main/hm.mp3' },
      mimetype: 'audio/mp3',
      ptt: true
    }, { quoted: m });
  }
};
export default alive;
// ¢σ∂є∂ ву ʝσєℓ ʝαмєѕ
