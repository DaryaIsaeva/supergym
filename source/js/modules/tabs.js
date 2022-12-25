const tabButtons = document.querySelectorAll('.subscriptions__buttons button');
const tabLists = document.querySelectorAll('.subscriptions__list');

const onTabButtonClick = () => {
  tabButtons.forEach((item, index) => {
    item.addEventListener('click', (evt) => {
      tabButtons.forEach((btn) => {
        btn.classList.remove('active-button');
      });

      tabLists.forEach((list) => {
        list.classList.remove('current-tab');
      });

      evt.target.classList.add('active-button');
      tabLists[index].classList.add('current-tab');
    });
  });
};

export {onTabButtonClick};
