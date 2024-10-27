export const convertComment = (content : string, subLength : number) => {
    if(content.length > subLength) {
        const sub = content.substring(0,subLength)
        const index = sub.lastIndexOf(" ")
        return sub.substring(0,index) + "..."
    }
    return content
}