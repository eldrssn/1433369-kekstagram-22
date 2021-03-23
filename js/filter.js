const filterContainer = document.querySelector('.img-filters');
const filterDefault = filterContainer.querySelector('#filter-default');
const filterRandom = filterContainer.querySelector('#filter-random');
const filterDiscussed = filterContainer.querySelector('#filter-discussed');

const createFilter = () => {
  filterContainer.classList.remove('img-filters--inactive');
}

const setDefaultClick = (cb) => {
  filterDefault.addEventListener('click', () => {
    filterDefault.classList.add('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');

    cb();
  });
}

const setRandomClick = (cb) => {
  filterRandom.addEventListener('click', () => {

    filterRandom.classList.add('img-filters__button--active');
    filterDefault.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');

    cb();
  });
}

const setDiscussedClick = (cb) => {
  filterDiscussed.addEventListener('click', () => {
    filterDiscussed.classList.add('img-filters__button--active');
    filterDefault.classList.remove('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');

    cb();
  });
}

export { createFilter, setDefaultClick, setRandomClick, setDiscussedClick };
