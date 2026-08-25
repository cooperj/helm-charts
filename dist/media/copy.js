// This script makes it so when a user clicks on a command layer, 
// the entire code block is selected for easy copying.
// the block is coloured in green to show it has been completed.

document.querySelectorAll('.command-layer').forEach((layer) => {
    const selectAll = () => {
        // find the code block within the command layer
        const code = layer.querySelector('code');
        if (!code) return;

        // create a range that selects the entire code block
        const range = document.createRange();
        range.selectNodeContents(code);

        // get parent element of code block and add class completed to it
        const parent = code.parentElement;
        if (parent) {
            parent.classList.add('completed');
        }

        // clear any existing selections and add the new range
        const selection = window.getSelection();
        if (!selection) return;
        selection.removeAllRanges();
        selection.addRange(range);
    };

    layer.addEventListener('click', selectAll);
    layer.addEventListener('focus', selectAll);
});
