// Запускаем getProducts
import {userDataExample} from "./products";
const productsContainer = document.querySelector('#products-container');

getProducts();

// Функция получения данных из объекта userDataExample
function getProducts() {
  // Запускаем ф-ю рендера (отображения товаров) с данными из userDataExample
  renderProducts(userDataExample);
}

function renderProducts(productsArray) {
  productsArray.forEach(function (item, index) {
    const productHTML = ` <li class="card">
          <div class="card__container">
            <div class="card__input-wrapper">
              <input type="checkbox" id="myCheckbox">
              <label class="card__lable" for="myCheckbox"></label>
            </div>
            <img class="card__images" src="${item.image}" alt="футболка">

            <div class="card__info">
              <a href="/" class="card__title">${item.title}</a>
              <div class="card__attributes${index === 2 ? ' card__attributes-custom' : ''}">
                <p class="card__color">${item.color || ''}</p>
                <p class="card__size">${item.size || ''}</p>
              </div>
              <p class="card__storage">${item.seller}</p>

              <div>
                <div class="corporation">
                  <p class="corporation__title">${item.organization}</p>
                  <div class="corporation__icon">
                    <div class="corporation__info">
                      <p class="corporation__org-name">${item.organizationInfo.orgName}</p>
                      <p class="corporation__requisites">${item.organizationInfo.orgName}</p>
                      <p class="corporation__org-address">${item.organizationInfo.orgAddress}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="wrapper-container">
              <!--Счетчик-->
              <div class="items counter-wrapper">
                <button type="button" class="items__control items__control_minus" data-action="minus">-</button>
                <div class="items__current" data-counter>${item.quantity}</div>
                <button type="button" class="items__control items__control_plus" data-action="plus">+</button>
              </div>
              <!--Счетчик-->
              <span class="item__accessible${index === 1 ? ' item__accessible-custom' : ''}">${item.available}</span>

              <!--              Кнопки лайка и удалить-->
              <div class="item__icons">
                <button
                  class="item__icon item__icon_type_favorite"
                  type="button">
                </button>
                <button
                  class="item__icon item__icon_type_delete"
                  type="button">
                </button>
              </div>
              <!--              Кнопки лайка и удалить-->
            </div>

            <!--              цена-->
            <div class="item__price${index === 1 ? ' item__new-price-container' : ''}">
              <span class="item__new-price${index === 1 ? ' item__new-price_custom' : ''}">${item.oldPrice}</span>
              <div class="item__price-wrapper">
                <span class="item__old-price">${item.oldPrice}</span>
                <div class="discount">
                  <div class="discount__column">
                    <p class="discount__label" data-type="product-discount"></p>
                    <p
                      class="discount__label"
                      data-type="person-discount"
                    ></p>
                  </div>
                  <div class="discount__column">
                    <p class="discount__item" data-type="product-discount"></p>
                    <p
                      class="discount__item"
                      data-type="person-discount"
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>`;
    productsContainer.insertAdjacentHTML('beforeend', productHTML);
  });
}
