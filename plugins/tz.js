import moment from 'moment-timezone';

const handler = async (m, {conn}) => {

  const tzAF = moment().tz('Africa/Casablanca').format('DD/MM HH:mm');
  await conn.sendMessage(m.chat, {text: `\`\`\`
الوقت الحالي في المغرب هو :


▢ morocco     : ${tzAF}
  ${String.fromCharCode(8206).repeat(850)}
  ▢ https://whatsapp.com/channel/0029VaiJnhbD38CbP5YcSK0K`}, {quoted: m});
  };
handler.help = ["tz"]
handler.tags = ["infobot"]
handler.command = /^(tz)$/i
  export default handler;
