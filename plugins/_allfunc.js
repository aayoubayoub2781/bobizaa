import axios from 'axios'

let handler = m => m
handler.all = async function (m) {
    global.fetchBuffer = async (url, options) => {
        try {
            options ? options : {}
            const res = await axios({
                method: "GET",
                url,
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
                    'DNT': 1,
                    'Upgrade-Insecure-Request': 1
                },
                ...options,
                responseType: 'arraybuffer'
            })
            return res.data
        } catch (err) {
            return err
        }
    }

    global.fetchJson = async (url, options) => {
        try {
            options ? options : {}
            const res = await axios({
                method: 'GET',
                url: url,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
                },
                ...options
            })
            return res.data
        } catch (err) {
            return err
        }
    }

    global.style = async function (text, style = 1) {
        var xStr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        var yStr = Object.freeze({
            1: ['ᴀ', 'ʙ', 'ᴄ', 'ᴅ', 'ᴇ', 'ꜰ', 'ɢ', 'ʜ', 'ɪ', 'ᴊ', 'ᴋ', 'ʟ', 'ᴍ', 'ɴ', 'ᴏ', 'ᴘ', 'q', 'ʀ', 'ꜱ', 'ᴛ', 'ᴜ', 'ᴠ', 'ᴡ', 'x', 'ʏ', 'ᴢ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
            // باقي أنماط الخطوط هنا
        })

        var replacer = []
        xStr.map((v, i) => replacer.push({
            original: v,
            convert: yStr[style][i]
        }))
        var str = text.toLowerCase().split('')
        var output = []
        str.map(v => {
            const find = replacer.find(x => x.original == v)
            find ? output.push(find.convert) : output.push(v)
        })
        return output.join('')
    }

    // إرجاع رابط القناة مع الرد
    const addChannelLink = (response) => {
        const channelLink = 'https://whatsapp.com/channel/0029VaiJnhbD38CbP5YcSK0K'
        return `${response}\n\nCheck out my Whatsapp channel: ${channelLink}`
    }

    // تعديل الدوال لاستخدام addChannelLink
    global.fetchBuffer = async (url, options) => {
        try {
            options ? options : {}
            const res = await axios({
                method: "GET",
                url,
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
                    'DNT': 1,
                    'Upgrade-Insecure-Request': 1
                },
                ...options,
                responseType: 'arraybuffer'
            })
            return addChannelLink(res.data)
        } catch (err) {
            return addChannelLink(err)
        }
    }

    global.fetchJson = async (url, options) => {
        try {
            options ? options : {}
            const res = await axios({
                method: 'GET',
                url: url,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
                },
                ...options
            })
            return addChannelLink(res.data)
        } catch (err) {
            return addChannelLink(err)
        }
    }
}

export default handler
