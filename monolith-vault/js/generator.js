document.addEventListener('DOMContentLoaded', () => {
    const lengthSlider = document.getElementById('length-slider');
    const lengthDisplay = document.getElementById('length-display');
    const generateBtn = document.getElementById('regenerate-btn');
    const outputField = document.getElementById('generated-password');
    
    const chkUpper = document.getElementById('check-upper');
    const chkLower = document.getElementById('check-lower');
    const chkNumbers = document.getElementById('check-numbers');
    const chkSymbols = document.getElementById('check-symbols');

    const chars = {
        upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lower: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
    };

    lengthSlider.addEventListener('input', (e) => {
        lengthDisplay.textContent = e.target.value;
        generatePassword();
    });

    function generatePassword() {
        let pool = '';
        let password = '';
        const length = parseInt(lengthSlider.value);

        if (chkUpper.checked) pool += chars.upper;
        if (chkLower.checked) pool += chars.lower;
        if (chkNumbers.checked) pool += chars.numbers;
        if (chkSymbols.checked) pool += chars.symbols;

        if (pool === '') {
            chkLower.checked = true;
            pool += chars.lower;
        }

        for (let i = 0; i < length; i++) {
            const randomIndex = window.crypto.getRandomValues(new Uint32Array(1))[0] % pool.length;
            password += pool[randomIndex];
        }

        outputField.value = password;
    }

    generateBtn.addEventListener('click', generatePassword);
    
    [chkUpper, chkLower, chkNumbers, chkSymbols].forEach(chk => {
        chk.addEventListener('change', generatePassword);
    });

    generatePassword();
});