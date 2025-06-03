import config from '../../config.cjs';

const antileftCmd = async (m, Matrix) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === 'antileft') {
    if (!m.isGroup) 
      return m.reply('```👥 This command only works in groups!```');

    const groupMetadata = await Matrix.groupMetadata(m.from);
    const participants = groupMetadata.participants;
    const botNumber = await Matrix.decodeJid(Matrix.user.id);
    const botAdmin = participants.find(p => p.id === botNumber)?.admin;
    const senderAdmin = participants.find(p => p.id === m.sender)?.admin;

    if (!botAdmin) 
      return m.reply('⚠️ ```I need to be admin to manage anti-left.```');
    if (!senderAdmin) 
      return m.reply('```Only group admins can toggle anti-left.```');

    let responseMessage;

    if (text === 'on') {
      config.ANTILEFT = true;
      responseMessage = '```Anti-Left feature is now ENABLED!*\n_I will add back members who try to leave._```';
    } else if (text === 'off') {
      config.ANTILEFT = false;
      responseMessage = '```Anti-Left feature is now DISABLED.*\n_Members can leave freely.```';
    } else {
      responseMessage = 
`📢 *ANTILEFT COMMAND*

Toggle automatic re-add of members who leave the group.

*Usage:*
\`antileft on\`  — Enable anti-left feature
\`antileft off\` — Disable anti-left feature

_Only group admins can use this command._
⚠️ Bot must be admin to function properly.`;
    }

    try {
      await Matrix.sendMessage(m.from, { text: responseMessage }, { quoted: m });
    } catch (error) {
      console.error('[ANTILEFT CMD ERROR]', error);
      await Matrix.sendMessage(m.from, { text: '❌ *Oops! Something went wrong.*' }, { quoted: m });
    }
  }
};

export default antileftCmd;




/*
// commands/group/antileft.js import fs from 'fs'; import moment from 'moment-timezone';

const antileftPath = './antileft.json'; const antileftData = fs.existsSync(antileftPath) ? JSON.parse(fs.readFileSync(antileftPath)) : {};

const antileftCmd = async (m, Matrix) => { if (!m.isGroup) return m.reply('👥 This command only works in groups!');

const groupId = m.from; const metadata = await Matrix.groupMetadata(groupId); const senderIsAdmin = metadata.participants.some(p => p.id === m.sender && p.admin !== null); if (!senderIsAdmin) return m.reply('🚫 Only group admins can use this command!');

const cmd = m.body.toLowerCase();

if (cmd.includes('antileft on')) { antileftData[groupId] = true; fs.writeFileSync(antileftPath, JSON.stringify(antileftData, null, 2)); return m.reply('✅ Anti-left has been enabled in this group!'); }

if (cmd.includes('antileft off')) { delete antileftData[groupId]; fs.writeFileSync(antileftPath, JSON.stringify(antileftData, null, 2)); return m.reply('❌ Anti-left has been disabled in this group.'); }

return m.reply('⚙️ Usage: #antileft on / #antileft off'); };

export default antileftCmd;

// events/groupParticipantsUpdate.js import fs from 'fs'; import moment from 'moment-timezone';

const antileftPath = './antileft.json'; const antileftData = fs.existsSync(antileftPath) ? JSON.parse(fs.readFileSync(antileftPath)) : {};

const groupParticipantsUpdate = async (sock, update) => { const { participants, id: groupId } = update;

if (!antileftData[groupId]) return;

const metadata = await sock.groupMetadata(groupId);

for (const jid of participants) { try { await sock.groupParticipantsUpdate(groupId, [jid], 'add');

let profile;
  try {
    profile = await sock.profilePictureUrl(jid, 'image');
  } catch {
    profile = 'https://lh3.googleusercontent.com/proxy/esjjzRYoXlhgNYXqU8Gf_3lu6V-eONTnymkLzdwQ6F6z0MWAqIwIpqgq_lk4caRIZF_0Uqb5U8NWNrJcaeTuCjp7xZlpL48JDx-qzAXSTh00AVVqBoT7MJ0259pik9mnQ1LldFLfHZUGDGY=w1200-h630-p-k-no-nu';
  }

  const userName = jid.split('@')[0];
  const now = moment.tz('Africa/Tanzania');
  const leaveTime = now.format('HH:mm:ss');
  const leaveDate = now.format('DD/MM/YYYY');
  const validLeaveDate = now.clone().add(90, 'days').format('DD/MM/YYYY');
  const membersCount = metadata.participants.length;
  const groupName = metadata.subject;

  await sock.sendMessage(groupId, {
    image: { url: profile },
    caption: `👤 Hello .. @${userName}\n\n🚫 Don't leave the group *${groupName}*!\nYou must stay for at least *90 days*.\n\n❌ If you leave before then, your account will be *banned permanently*.\n\n📅 Leave date: ${leaveDate}\n🕒 Leave time: ${leaveTime}\n✅ You may leave safely after: *${validLeaveDate}*\n👥 Group members: ${membersCount}`,
    mentions: [jid],
  });
} catch (err) {
  console.error('Anti-left error:', err);
}

} };

export default groupParticipantsUpdate;

*/
