const fs = require('fs')
const path = require('path')
module.exports = () => {
    return async function notFoundHandler(ctx, next) {
        await next();
        if (ctx.status === 404 && !ctx.body) {
            if (ctx.acceptJSON) {
                ctx.body = { error: 'Not Found' };
            } else {
                ctx.type = 'text/html'
                ctx.body = fs.readFileSync(path.resolve(process.cwd(), '404.html'), { encoding: 'utf8' });
            }
        }
    };
};