import stylizedChar from "../utils/fancy.js"

export async function pingTest(client, message) {
    const remoteJid = message.key.remoteJid
    const start = Date.now()

    await client.sendMessage(remoteJid, { text: "📡 Pinging..." }, { quoted: message })

    const latency = Date.now() - start

    await client.sendMessage(remoteJid, {
        text: stylizedChar(
            `🥊 AKAZA_-_EXO Network\n\n` +
            `Latency: ${latency} ms\n\n` +
            `AKAZA_-_EXO_-_BOT`
        )
    }, { quoted: message })
}
