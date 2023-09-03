function execCmd(command) {
    document.execCommand(command, false, null);
}


document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
            case 'b':
                execCmd('bold');
                e.preventDefault();
                break;
            case 'i':
                execCmd('italic');
                e.preventDefault();
                break;
            case 'u':
                execCmd('underline');
                e.preventDefault();
                break;
            case '1':
                execCmd('insertOrderedList');
                e.preventDefault();
                break;
            case '8':
                execCmd('insertUnorderedList');
                e.preventDefault();
                break;
            case '[':
                execCmd('outdent');
                e.preventDefault();
                break;
            case ']':
                execCmd('indent');
                e.preventDefault();
                break;
        }
    }
});
