export const OMSS_BASE_URL = "https://whoscooper-nyro.hf.space/"

export const OMSS_ENDPOINTS = {
    movie: "/v1/movies/{id}",
    tv: "/v1/tv/{id}/seasons/{s}/episodes/{e}",
    proxy: "/v1/proxy?data={encoded_data}",
    refresh: "/v1/refresh/{responseId}",
} as const