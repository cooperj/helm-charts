// This script makes it so when a user activates a command layer (click or
// keyboard), the code block's text is copied to the clipboard and the block
// is coloured in green to show it has been completed.

document.querySelectorAll('.command-layer').forEach((layer) => {
    const copyToClipboard = async () => {
        // find the code block within the command layer
        const code = layer.querySelector('code');
        if (!code) return;

        try {
            await navigator.clipboard.writeText(code.textContent);
        } catch (err) {
            // fall back to selecting the text if the Clipboard API is unavailable
            const range = document.createRange();
            range.selectNodeContents(code);
            const selection = window.getSelection();
            if (selection) {
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }

        layer.classList.add('completed');
    };

    layer.addEventListener('click', copyToClipboard);
    layer.addEventListener('keydown', (event) => {
        // only activate on Enter/Space, and avoid firing just on focus
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        copyToClipboard();
    });
});
