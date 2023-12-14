const brush = document.querySelector('.Brush');

brush.addEventListener('mouseenter', () => {
    const mosaicDiv = document.createElement('div');
    mosaicDiv.className = 'mosaic';
    brush.appendChild(mosaicDiv);

    // 监听鼠标移动事件，以模拟马赛克效果
    brush.addEventListener('mousemove', (e) => {
        const x = e.clientX - brush.getBoundingClientRect().left;
        const y = e.clientY - brush.getBoundingClientRect().top;

        mosaicDiv.style.left = `${x - 25}px`;
        mosaicDiv.style.top = `${y - 25}px`;

        // 随机生成马赛克的颜色
        const randomColor = getRandomColor();
        mosaicDiv.style.backgroundColor = randomColor;
    });

    // 监听鼠标移出事件
    brush.addEventListener('mouseleave', () => {
        mosaicDiv.remove();
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
