module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    //const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = "This is a message from API func!!";
 
    context.res = {
        status: 200, /* Defaults to 200 */
        text: responseMessage
    };
}