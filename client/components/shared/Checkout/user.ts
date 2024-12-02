
export interface user {
    userID: string,
    fullName: string,
    phoneNumber: string,
    address: string
}

export const convertUser = (data : any) : user => {
    return {
        userID : data.userID,
        fullName : data.fullName,
        phoneNumber: data.phoneNumber,
        address : data.phoneNumber
    }
}