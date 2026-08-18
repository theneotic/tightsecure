document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('analyze-input');
    const meterFill = document.getElementById('strength-meter');
    const strengthText = document.getElementById('strength-text');
    const crackTimeText = document.getElementById('crack-time');

    const reqLength = document.getElementById('req-length');
    const reqUpper = document.getElementById('req-upper');
    const reqNumber = document.getElementById('req-number');
    const reqSymbol = document.getElementById('req-symbol');

    input.addEventListener('input', () => {
        const pwd = input.value;
        
        if (pwd.length === 0) {
            resetAnalyzer();
            return;
        }

        const hasUpper = /[A-Z]/.test(pwd);
        const hasLower = /[a-z]/.test(pwd);
        const hasNumber = /[0-9]/.test(pwd);
        const hasSymbol = /[^A-Za-z0-9]/.test(pwd);
        const isLongEnough = pwd.length >= 8;

        updateChecklistItem(reqLength, isLongEnough, "At least 8 characters");
        updateChecklistItem(reqUpper, hasUpper, "Contains Uppercase");
        updateChecklistItem(reqNumber, hasNumber, "Contains Number");
        updateChecklistItem(reqSymbol, hasSymbol, "Contains Symbol");

        let poolSize = 0;
        if (hasLower) poolSize += 26;
        if (hasUpper) poolSize += 26;
        if (hasNumber) poolSize += 10;
        if (hasSymbol) poolSize += 32;

        const entropyBits = poolSize > 0 ? pwd.length * Math.log2(poolSize) : 0;

        updateMeter(entropyBits);
        calculateCrackTime(entropyBits);
    });

    function updateChecklistItem(element, isValid, text) {
        if (isValid) {
            element.className = 'req-item valid';
            element.innerText = `✅ ${text}`;
        } else {
            element.className = 'req-item';
            element.innerText = `❌ ${text}`;
        }
    }

    function updateMeter(bits) {
        let width, color, text;

        if (bits < 35) {
            width = Math.max(bits, 5);
            color = 'var(--weak)';
            text = 'Weak';
        } else if (bits < 60) {
            width = bits;
            color = 'var(--moderate)';
            text = 'Moderate';
        } else {
            width = Math.min(bits, 100);
            color = 'var(--strong)';
            text = 'Strong';
        }

        meterFill.style.width = `${width}%`;
        meterFill.style.backgroundColor = color;
        strengthText.innerText = text;
        strengthText.style.color = color;
    }

    function calculateCrackTime(bits) {
        let estimation = "";
        if (bits < 40) estimation = "Instantly";
        else if (bits < 50) estimation = "A few minutes";
        else if (bits < 60) estimation = "A few hours";
        else if (bits < 70) estimation = "A few months";
        else if (bits < 80) estimation = "Several years";
        else if (bits < 100) estimation = "Centuries";
        else estimation = "Millions of years (Uncrackable)";

        crackTimeText.innerText = `Estimated time to crack: ${estimation}`;
    }

    function resetAnalyzer() {
        meterFill.style.width = '0%';
        strengthText.innerText = 'Awaiting Input';
        strengthText.style.color = 'var(--text-primary)';
        crackTimeText.innerText = 'Estimated time to crack: --';
        
        updateChecklistItem(reqLength, false, "At least 8 characters");
        updateChecklistItem(reqUpper, false, "Contains Uppercase");
        updateChecklistItem(reqNumber, false, "Contains Number");
        updateChecklistItem(reqSymbol, false, "Contains Symbol");
    }
});