const axios = require('axios');

const getUser = async (cookie) => {
    try {
        const response = await axios.get('https://www.roblox.com/my/settings/json', {
            headers: {
                Cookie: `rbx-ip2=1; .ROBLOSECURITY=${cookie}`,
                Referer: 'https://www.roblox.com/my/account',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            },
        });

        return response.data; // ส่งข้อมูล JSON กลับ
    } catch (error) {
        return ""
        throw new Error(error.response?.data || error.message); // จัดการข้อผิดพลาด
    }
};

module.exports = getUser;
