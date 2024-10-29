export const postBody = (value?: any) => {
    return {
        'Token': localStorage.getItem('AccessToken'),
        ...value
    };
}