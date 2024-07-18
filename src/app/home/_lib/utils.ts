export const removeHTMLTag = (text: string) => {
    return text.replace(/<[^>]+>/g, '');
}