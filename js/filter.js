/*
const filterContainer = document.querySelector('.img-filters');
const filterDefault = filterContainer.querySelector('#filter-default');
const filterRandom = filterContainer.querySelector('#filter-random');
const filterDiscussed = filterContainer.querySelector('#filter-discussed');

const setDefaultPosts = (data) => {
  filterDefault.addEventListener('click', () => {
    filterDefault.classList.add('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');
  });
}

const setRandomPosts = (data) => {
  filterRandom.addEventListener('click', () => {
    filterRandom.classList.add('img-filters__button--active');
    filterDefault.classList.remove('img-filters__button--active');
    filterDiscussed.classList.remove('img-filters__button--active');


  });
}

const setDiscussedPosts = (data) => {
  filterDiscussed.addEventListener('click', () => {
    filterDiscussed.classList.add('img-filters__button--active');
    filterDefault.classList.remove('img-filters__button--active');
    filterRandom.classList.remove('img-filters__button--active');
  });
}

const setFilter = (cb1, cb2) => {
  filterContainer.classList.remove('img-filters--inactive');
  setDefaultPosts();
  setDiscussedPosts();
  setRandomPosts();

  cb1();
  cb2();

}

export { setFilter };
*/
