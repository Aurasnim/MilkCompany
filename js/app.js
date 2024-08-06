// Делаем считывание координатов нашей мыши в js и передаем их в css файл для позиционирования фона
document.addEventListener('mousemove', e => {
    // Применение объекта к documentElement, то есть к корневому html файлу
    Object.assign(document.documentElement, {
        // Переопределяем стили в корневом файле html
        // Определяем новые переменные, которые будут отвечать за перемещение курсора мыши
        // Обратные кавычки ставятся для того чтобы посредством интерполяции мы могли получить переменные позиции
        //После получения значений через e.clientX и e.clientY нам надо центрировать картинку, поэтому мы вычитаем window.innerWidth / 2 и window.innerHeight / 2
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.002}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
        `
    })
})