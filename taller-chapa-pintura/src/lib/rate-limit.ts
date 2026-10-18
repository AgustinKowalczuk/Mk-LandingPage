import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const redis = Redis.fromEnv();

export const contactRateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5,'10 m'),
    prefix:"mk-cars:contact",
    analytics:false,
})