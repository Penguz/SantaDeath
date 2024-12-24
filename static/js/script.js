document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.faq-item').forEach(item => {
        const header = item.querySelector('.faq-header');
        const content = item.querySelector('.faq-content');
        const arrow = item.querySelector('.arrow');

        header.addEventListener('click', () => {
            const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
            content.style.maxHeight = isOpen ? '0px' : `${content.scrollHeight}px`;
            arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(90deg)';
        });
    });

    let countdownDate = new Date("Dec 24, 2024 20:0:0").getTime();

    let x = setInterval(function () {
        let now = new Date().getTime();

        let distance = countdownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            const countdownElement = document.getElementById("countdown");
            countdownElement.innerHTML = '<span>CA: </span><span class="select-all">Will be displayed in 1 minute.</span>'; // CHANGE CA HERE

            const copyTextElement = countdownElement.querySelector(".select-all");
            copyTextElement.addEventListener('click', copyText);
        }
    }, 1000);

    function copyText() {
        const textToCopy = document.querySelector(".select-all");

        const range = document.createRange();
        range.selectNodeContents(textToCopy);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        try {
            const successful = document.execCommand('copy');
            if (successful) {
                alert('Texte copié: ' + textToCopy.innerText);
            } else {
                alert('Échec de la copie.');
            }
        } catch (err) {
            alert('Erreur lors de la copie : ' + err);
        }

        selection.removeAllRanges();
    }
});
