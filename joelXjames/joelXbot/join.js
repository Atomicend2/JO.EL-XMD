
/*
──────────────────────────────────────────────────────────────────────────────
─██████──────────██████████████──████████████████────████████████────────────
─██░░██──────────██░░░░░░░░░░██──██░░░░░░░░░░░░██────██░░░░░░░░████───────────
─██░░██──────────██░░██████░░██──██░░████████░░██────██░░████░░░░██───────────
─██░░██──────────██░░██──██░░██──██░░██────██░░██────██░░██──██░░██───────────
─██░░██──────────██░░██──██░░██──██░░████████░░██────██░░██──██░░██───────────
─██░░██──────────██░░██──██░░██──██░░░░░░░░░░░░██────██░░██──██░░██───────────
─██░░██──────────██░░██──██░░██──██░░██████░░████────██░░██──██░░██───────────
─██░░██──────────██░░██──██░░██──██░░██──██░░██──────██░░██──██░░██───────────
─██░░██████████──██░░██████░░██──██░░██──██░░██████──██░░████░░░░██───────────
─██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██──██░░░░░░██──██░░░░░░░░████───────────
─██████████████──██████████████──██████──██████████──████████████────────────
──────────────────────────────────────────────────────────────────────────────
made by lord joel | +255711459078 | Joel MD v10 | @joeljamestech255
*/

import config from '../../config.cjs';

const JoinCommand = async (m, Matrix) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();
  let inviteText = text;

  if (!inviteText && m.quoted?.text) {
    inviteText = m.quoted.text;
  }

  if (cmd === 'join') {
    if (!inviteText) {
      return m.reply(
        '📎 *Please provide or reply to a WhatsApp group invite link!*\n\nExample:\n' +
        '```' + prefix + 'join https://chat.whatsapp.com/AbCdEfGhIjK' + '```'
      );
    }

    const match = inviteText.match(/chat\.whatsapp\.com\/([0-9A-Za-z]{20,24})/);
    if (!match) {
      return m.reply('❌ *Invalid link format!* Please provide a valid WhatsApp invite link.');
    }

    const groupCode = match[1];

    try {
      const result = await Matrix.groupAcceptInvite(groupCode);
      console.log('JOIN RESULT:', result);
      return m.reply('✅ *Successfully joined the group!*');
    } catch (err) {
      console.error('Join Error:', err);
      return m.reply(`❌ *Failed to join group.*\n\n*Error:*\n\`\`\`${err.message || err}\`\`\``);
    }
  }
};

export default JoinCommand;
