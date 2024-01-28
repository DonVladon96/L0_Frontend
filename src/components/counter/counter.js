// Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {

  // Объявляем переменную для счетчика
  let counter;

  // Проверяем клик строго по кнопкам Плюс либо Минус
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
    // Находим обертку счетчика
    const counterWrapper = event.target.closest('.counter-wrapper');
    // Находим див с числом счетчика
    counter = counterWrapper.querySelector('[data-counter]');
  }

  // Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
  if (event.target.dataset.action === 'plus') {
    counter.innerText = ++counter.innerText;
  }

  // Проверяем является ли элемент по которому был совершен клик кнопкой Минус
  if (event.target.dataset.action === 'minus') {

    // Проверяем чтобы счетчик был больше 1
    if (parseInt(counter.innerText) > 1) {
      // Изменяем текст в счетчике уменьшая его на 1
      counter.innerText = --counter.innerText;
    } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
      // Проверка на товар который находится в корзине
      console.log('IN CART!!!!');
      // Удаляем товар из корзины
      event.target.closest('.cart-item').remove();

      // Отображение статуса корзины Пустая / Полная
      toggleCartStatus();

      // Пересчет общей стоимости товаров в корзине
      calcCartPriceAndDelivery();
    }

  }

  // Проверяем клик на + или - внутри коризины
  if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
    // Пересчет общей стоимости товаров в корзине
    calcCartPriceAndDelivery();
  }
});


// Находим кнопку с классом "product-item__icon_type_favorite"
const favoriteButton = document.querySelector('.product-item__icon_type_favorite');

// Слушаем событие "click" на кнопке
favoriteButton.addEventListener('click', function() {
  // Создаем новый элемент "img"
  const likeImage = document.createElement('img');

  // Устанавливаем путь к изображению лайка
  likeImage.src = '../../images/icons/icon-like.svg';

  // Добавляем класс "like-image" для стилизации
  likeImage.classList.add('like-image');

  // Вставляем изображение лайка перед кнопкой
  favoriteButton.parentNode.insertBefore(likeImage, favoriteButton);
});
