const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData
}) => {
  // const root = document.querySelector('.autocomplete');
  root.innerHTML = `
    <label><b>Search</b></label>
    <input class="input" />
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>
  `;

  const input = root.querySelector('input');
  const dropdown = root.querySelector('.dropdown');
  const resultsWrapper = root.querySelector('.results');

  const onInput = async event => {
    const items = await fetchData(event.target.value);
    if (!items.length) {
      dropdown.classList.remove('is-active');
      return;
    }

    // show all the items
    resultsWrapper.innerHTML = '';
    dropdown.classList.add('is-active');
    for (let item of items) {
      const option = document.createElement('a');

      option.classList.add('dropdown-item'); // automatically show poster + title
      option.innerHTML = renderOption(item);

      option.addEventListener('click', () => {
        dropdown.classList.remove('is-active') // turn autocomplete as inactive once it is clicked
        input.value = inputValue(item);

        onOptionSelect(item);
      });

      resultsWrapper.appendChild(option);
    }
  };

  // on input (listening for an event), fetch data (has debouncer)
  input.addEventListener('input', debounce(onInput, 500));

  // remove the list if clicked outside the autocomplete dropdown
  document.addEventListener('click', event => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove('is-active');
    }
  });
};
