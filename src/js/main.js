'use strict';
import { toggleClassOnElement } from './toggleClassOnElement';
import { removeClassFrom } from './removeClassFrom';
import { scrollInto } from './scrollInto';
import '../scss/style.scss';

// header / active link

const menuItems = document.querySelectorAll('.menu__item');
if (menuItems.length !== 0) {
  for (let menuItem of menuItems) {
    menuItem.onclick = () => {
      removeClassFrom(menuItems, 'menu__item_active');
      menuItem.classList.add('menu__item_active');
    };
  }
}

// dropdown

const [dropdownLangList, dropdownCityList] =
  document.querySelectorAll('.dropdown__list');
const dropdownLangListItems =
  dropdownLangList.querySelectorAll('.dropdown__item');
const dropdownCityListItems =
  dropdownCityList.querySelectorAll('.dropdown__item');
const [dropdownLangButton, dropdownCityButton] =
  document.querySelectorAll('.dropdown__button');
const [dropdownLangButtonImage, dropdownCityButtonImage] =
  document.querySelectorAll('.dropdown__button-image');
const dropdownLangButtonText = document.querySelector('.dropdown__button-text');
const dropdownCityInput = document.querySelector('#city');

if (dropdownLangButtonImage !== null && dropdownLangButtonImage !== null) {
  dropdownLangButtonImage.onclick = () => {
    toggleClassOnElement(
      dropdownLangButtonImage,
      'dropdown__button-image_active'
    );
    toggleClassOnElement(dropdownLangList, 'dropdown__list_active');
  };
}
if (dropdownCityButton !== null && dropdownCityButtonImage !== null) {
  dropdownCityButtonImage.onclick = () => {
    toggleClassOnElement(
      dropdownCityButtonImage,
      'dropdown__button-image_active'
    );
    toggleClassOnElement(dropdownCityList, 'dropdown__list_active');
  };
}

if (dropdownCityListItems.length !== 0) {
  for (let city of dropdownCityListItems) {
    city.onclick = () => {
      dropdownCityInput.value = city.innerText;
    };
  }
}
if (dropdownLangListItems.length !== 0) {
  for (let lang of dropdownLangListItems) {
    lang.onclick = () => {
      dropdownLangButtonText.innerText = lang.innerText;
    };
  }
}

document.addEventListener('click', (e) => {
  const target = e.target;
  const isDropdownLangButton =
    target.closest('.dropdown__button') === dropdownLangButton;
  const isDropdownCityButton =
    target.closest('.dropdown__button') === dropdownCityButton;
  const isDropdownItem = target.classList.contains('dropdown__item');

  if (!isDropdownLangButton && !isDropdownItem) {
    dropdownLangList.classList.remove('dropdown__list_active');
  }
  if (!isDropdownCityButton && !isDropdownItem) {
    dropdownCityList.classList.remove('dropdown__list_active');
  }
});

// application / modal window

const sectionApplication = document.querySelector('.application');
const anchors = document.querySelectorAll(
  '.button[data-anchor*="modal window"'
);

scrollInto(anchors, sectionApplication);

// application / checkbox

const labelAgreement = document.querySelector('.application__label');
const checkbox = document.querySelector('.application__checkbox');

if (labelAgreement !== null && checkbox !== null) {
  labelAgreement.onclick = () =>
    toggleClassOnElement(checkbox, 'application__checkbox_active');
}
