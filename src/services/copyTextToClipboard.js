export function copyTextToClipboard(text, onCopySuccess) {
    navigator.clipboard.writeText(text)
        .then(() => {
            onCopySuccess();
        })
        .catch(err => {
            console.error(err)
        })
}