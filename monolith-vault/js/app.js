document.addEventListener('DOMContentLoaded', () => {
    // Tab Switching Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const views = document.querySelectorAll('.view-section');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(t => t.classList.remove('active'));
            views.forEach(v => v.classList.remove('active'));

            btn.classList.add('active');
            const targetView = document.getElementById(btn.getAttribute('data-target'));
            targetView.classList.add('active');
        });
    });

    // Copy to Clipboard
    const copyBtn = document.getElementById('copy-btn');
    const generatedPwd = document.getElementById('generated-password');

    copyBtn.addEventListener('click', () => {
        if (!generatedPwd.value) return;
        navigator.clipboard.writeText(generatedPwd.value).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = "✅ Copied";
            setTimeout(() => {
                copyBtn.innerText = originalText;
            }, 2000);
        });
    });

    // Toggle Visibility
    const analyzeInput = document.getElementById('analyze-input');
    const toggleBtn = document.getElementById('toggle-visibility');

    toggleBtn.addEventListener('click', () => {
        if (analyzeInput.type === 'password') {
            analyzeInput.type = 'text';
            toggleBtn.innerText = '🙈';
        } else {
            analyzeInput.type = 'password';
            toggleBtn.innerText = '👁️';
        }
    });
});