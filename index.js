// index.js
exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify("Hello from Lambda functions with new dev branch!"),
    };
};
