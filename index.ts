import type { Context, Handler } from 'hydrooj'

export async function apply(ctx: Context) {
    const handler = async (h: Handler) => {
        if (h.user && h.user._id !== 0) {
            h.response.template = undefined;
            h.response.body = undefined;
            h.response.redirect = h.url("homepage");
        }
    };

    ctx.on("handler/after/UserLogin#get", handler)
    ctx.on("handler/after/UserRegister#get", handler)
    ctx.on("handler/after/UserRegisterWithCode#get", handler)
}