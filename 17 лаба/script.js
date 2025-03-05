$(document).ready(function() {
    // Открытие модального окна
    $('#calcButton').click(function() {
        $('#modal').fadeIn();
    });

    // Закрытие модального окна при клике вне его
    $(window).click(function(event) {
        if (event.target == $('#modal')[0]) {
            $('#modal').fadeOut();
        }
    });

    // Обработка кнопки "Посчитать"
    $('#submit').click(function() {
        const f0 = $('#f0').val();
        const f1 = $('#f1').val();
        const n = $('#n').val();

        // Проверка на корректность ввода
        if (!isValidNumber(f0) || !isValidNumber(f1) || !isValidNumber(n)) {
            showNotification('Введено неверное значение и/или текст');
            return;
        }

        const result = generalizedFibonacci(
            parseInt(f0),
            parseInt(f1),
            parseInt(n)
        );
        $('#result').text(`Результат: ${result}`);
    });

    // Функция проверки на корректное число
    function isValidNumber(str) {
        return /^-?\d+$/.test(str);
    }

    // Функция для вычисления обобщенного числа Фибоначчи
    function generalizedFibonacci(f0, f1, n) {
        if (n === 0) return f0;
        if (n === 1) return f1;

        let prev = f0;
        let current = f1;

        if (n > 1) {
            for (let i = 2; i <= n; i++) {
                const next = prev + current;
                prev = current;
                current = next;
            }
            return current;
        } else {
            for (let i = 0; i >= n; i--) {
                const next = current - prev;
                current = prev;
                prev = next;
            }
            return current;
        }
    }

    // Показ уведомления
    function showNotification(message) {
        const $notification = $('#notification');
        $notification.text(message);
        $notification.fadeIn();
        setTimeout(() => {
            $notification.fadeOut();
        }, 3000);
    }
});