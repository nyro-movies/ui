import type { FastifyInstance } from "fastify"
import helmet from "@fastify/helmet"
import { OMSS_BASE_URL } from "../lib/omss"

export async function registerHelmetPlugin(app: FastifyInstance) {
    await app.register(helmet, {
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],

                connectSrc: ["'self'", "https://api.themoviedb.org", app.config.VITE_STANDALONE ? "*" : OMSS_BASE_URL],

                imgSrc: ["'self'", "data:", "https://image.tmdb.org"],

                scriptSrc: ["'self'", "'unsafe-inline'"],
                scriptSrcElem: ["'self'", "'unsafe-inline'"],

                styleSrc: ["'self'", "'unsafe-inline'"],

                mediaSrc: ["'self'", "https:", "http:", "blob:"],
                fontSrc: ["'self'", "https:", "data:"],

                objectSrc: ["'none'"],

                baseUri: ["'self'"],
                formAction: ["'self'"],

                frameAncestors: ["'self'"],

                frameSrc: ["'self'", "https://www.youtube-nocookie.com"],

                childSrc: ["'self'", "https://www.youtube-nocookie.com"],
            },
        },

        referrerPolicy: {
            policy: "strict-origin-when-cross-origin",
        },

        crossOriginOpenerPolicy: { policy: "same-origin" },
        crossOriginResourcePolicy: { policy: "same-origin" },
    })
}
