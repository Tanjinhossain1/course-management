
export const TrimToUpperCase = (value: string) =>{
    return value.trim().toUpperCase().replace(/_/g, '-')
}

export const TrimToUpperCaseWithSpace = (value: string) =>{
    return value.trim().replace(/_/g, '-').split('').join(' ').toUpperCase();
}

export const TrimToLowerCase = (value: string) =>{
    return value.trim().toLowerCase()
}