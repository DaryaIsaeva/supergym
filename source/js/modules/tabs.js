const tabButtons = document.querySelectorAll('.subscriptions__buttons button');
const tabLists = document.querySelectorAll('.subscriptions__list');

const onTabButtonClick = () => {
  if (tabButtons.length > 0) {
    tabButtons.forEach((item, index) => {
      item.addEventListener('click', (evt) => {
        tabButtons.forEach((btn) => {
          btn.classList.remove('active-button');
        });

        evt.target.classList.add('active-button');

        if (tabLists.length === tabButtons.length) {
          tabLists.forEach((list) => {
            list.classList.remove('current-tab');
          });

          tabLists[index].classList.add('current-tab');
        }
      });
    });
  }
};

export {onTabButtonClick};
