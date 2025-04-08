// Single target rotation toggle
document.querySelectorAll('input[name="rotation"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        if (this.value === 'spellslinger') {
            document.getElementById('spellslinger-rotation').style.display = 'block';
            document.getElementById('frostfire-rotation').style.display = 'none';
        } else if (this.value === 'frostfire') {
            document.getElementById('spellslinger-rotation').style.display = 'none';
            document.getElementById('frostfire-rotation').style.display = 'block';
        }
    });
});

// AoE rotation toggle
document.querySelectorAll('input[name="aoe-rotation"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        if (this.value === 'spellslinger') {
            document.getElementById('spellslinger-aoe').style.display = 'block';
            document.getElementById('frostfire-aoe').style.display = 'none';
        } else if (this.value === 'frostfire') {
            document.getElementById('spellslinger-aoe').style.display = 'none';
            document.getElementById('frostfire-aoe').style.display = 'block';
        }
    });
});

// Copy build button functionality
document.querySelectorAll('.copy-build-button').forEach(button => {
    button.addEventListener('click', function() {
        const buildCode = this.getAttribute('data-build');
        navigator.clipboard.writeText(buildCode).then(() => {
            alert('Build code copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy build code:', err);
        });
    });
});
