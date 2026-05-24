document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const maxNumberInput = document.getElementById('max-number');
    const resultDisplay = document.getElementById('result-display');

    let isRunning = false;

    startBtn.addEventListener('click', () => {
        if (isRunning) return;

        const N = parseInt(maxNumberInput.value, 10);

        if (isNaN(N) || N < 1) {
            alert('1以上の正しい人数を入力してください。');
            return;
        }

        isRunning = true;
        resultDisplay.classList.remove('selected');
        
        let counter = 0;
        const shuffleCount = 15; // シャッフルする回数
        const intervalTime = 60; // シャッフルの速さ（ミリ秒）

        const timer = setInterval(() => {
            const randomNum = Math.floor(Math.random() * N) + 1;
            resultDisplay.textContent = randomNum;

            counter++;
            if (counter >= shuffleCount) {
                clearInterval(timer);
                
                const finalNum = Math.floor(Math.random() * N) + 1;
                resultDisplay.textContent = finalNum;
                
                resultDisplay.classList.add('selected');
                isRunning = false;
            }
        }, intervalTime);
    });
});