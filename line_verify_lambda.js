const line = require('@line/bot-sdk');

//LINEアクセストークン設定
const client = new line.Client({
    channelAccessToken: process.env.ACCESS_TOKEN
});

exports.handler = async (event,context,callback) => {
    console.log('◆EVENT:', event);
    const event_data = JSON.parse(event.body);
    console.log('◆EVENT.BODY:', JSON.stringify(event_data));

    const response = {
        statusCode: 200,
        headers: {},
        body: ""
    };

    callback(null,response); //callback関数を呼び出し、レスポンスを返す
};