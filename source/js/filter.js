/* global _:readonly */
import { renderPictures, clearPictures } from './render.js';

const RANDOM_PHOTO_COUNT = 10;
const RENDER_DELAY = 500;

const filterContainer = document.querySelector('.img-filters');
const filterDefault = filterContainer.querySelector('#filter-default');
const filterRandom = filterContainer.querySelector('#filter-random');
const filterDiscussed = filterContainer.querySelector('#filter-discussed');

const createFilter = () => {
  filterContainer.classList.remove('img-filters--inactive');

  filterDefault.addEventListener('click', () => {
    filterDefault.classList.add('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');
  });

  filterRandom.addEventListener('click', () => {

    filterRandom.classList.add('img-filters__button--active');
    filterDefault.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');
  });

  filterDiscussed.addEventListener('click', () => {
    filterDiscussed.classList.add('img-filters__button--active');
    filterDefault.classList.remove('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');

  });
}

const onFilterClick = (data) => {
  if (filterRandom.classList.contains('img-filters__button--active')) {
    clearPictures();
    renderPictures(data
      .slice()
      .sort(() => 0.5 - Math.random())
      .slice(0, RANDOM_PHOTO_COUNT));
  } else if (filterDiscussed.classList.contains('img-filters__button--active')) {
    clearPictures();
    renderPictures(data.slice().sort((a, b) => b.comments.length - a.comments.length));
  } else {
    clearPictures();
    renderPictures(data);
  }
}

const filter = (data) => {
  filterContainer.addEventListener('click', _.debounce(() => onFilterClick(data), RENDER_DELAY));
}

export { createFilter, filter };
