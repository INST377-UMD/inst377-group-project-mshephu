// On page load, begin typing effect.
document.addEventListener('DOMContentLoaded', () => {
    const text = "Take action...";
    const typingEffectTextElement = document.getElementById('typing-effect-text');
    let index = 0;

    // Function to type next char.
    function typeNextCharacter() {
        if (index < text.length) {
            typingEffectTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeNextCharacter, 5000 / text.length);
        }
    }

    typeNextCharacter();
});
