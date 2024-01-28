import productTShort from '../images/tshots.png'
import productCase from '../images/Frame 277132129.png'
import productPens from '../images/pens.png'

export const userDataExample = [
  {
    id: 12001,
    title: 'Футболка UZcotton мужская',
    image: productTShort,
    color: 'Цвет: белый',
    size: "Размер: " + 56,
    seller: 'Коледино WB',
    organization: 'OOO Вайлдберриз',
    organizationInfo: {
      orgName: 'OOO «Вайлдберриз»',
      requisites: 'ОГРН: 5167746233210',
      orgAddress: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 5',
    },
    quantity: 1,
    available: "осталось " + 2 + " шт.",
    deliveryDate: [
      {
        1: ['2023-02-05', '2023-02-06'],
      }
    ],
    priceInfo: {
      discount: 30,
      discountUser: 10,
    },
    oldPrice: 522,
  },
  {
    id: 12002,
    title: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
    image: productCase,
    color: 'Цвет: прозрачный',
    size: null,
    seller: 'Коледино WB',
    organization: 'OOO Мегапрофстиль',
    organizationInfo: {
      orgName: 'OOO «МЕГАПРОФСТИЛЬ»',
      requisites: 'ОГРН: 5167746237148',
      orgAddress: '120477, Москва, улица Зеленая Сосна, 2, корпус 1, стр. 1, помещение 2, офис 47',
    },
    quantity: 200,
    available: " ",
    deliveryDate: [
      {
        184: ['2023-02-05', '2023-02-06'],
      },
      {
        816: ['2023-02-07', '2023-02-08'],
      }
    ],
    priceInfo: {
      discount: 12,
      discountUser: 10,
    },
    oldPrice: 2100047,
  },
  {
    id: 12003,
    title: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber&nbsp;-&nbsp;Castell ',
    image: productPens,
    color: null,
    size: null,
    seller: 'Коледино WB',
    organization: 'OOO Вайлдберриз',
    organizationInfo: {
      orgName: 'OOO «Вайлдберриз»',
      requisites: 'ОГРН: 5167746235487',
      orgAddress: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 19',
    },
    quantity: 2,
    available: "осталось " + 2 + " шт.",
    deliveryDate: [
      {
        2: ['2023-02-05', '2023-02-06'],
      }
    ],
    priceInfo: {
      discount: null,
      discountUser: 10,
    },
    oldPrice: 494,
  },
];
