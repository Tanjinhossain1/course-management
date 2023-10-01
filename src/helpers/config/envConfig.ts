
export const getAuthBaseUrl = (): string =>{
    return process.env.NEXT_PUBLIC_AUTH_SERVICE_URL || "http://localhost:3001/api/v1"
}

export const getCoreBaseUrl = (): string =>{
    return process.env.NEXT_PUBLIC_CORE_SERVICE_URL || "http://localhost:3002/api/v1"
}