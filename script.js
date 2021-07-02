(function () {
    const colorsList = [...document.querySelector('[data-testid="color-swatch"]').childNodes];
    const colors = colorsList.map((color) => color.getAttribute('title'));
    const colorSelected = colorsList.find((li) => li.getAttribute('aria-label').match(/color selected/i)).getAttribute('title');
    const description = document.querySelector('[data-testid="description-title"]').nextElementSibling.textContent;
    const details =
        [...document.querySelector('[data-testid="details-title"]').nextElementSibling.querySelectorAll('li')].map((li) => li.textContent);
    const imagesUrls =
        [...document.querySelector('[data-testid="desktop"][role="document"]').firstChild.querySelectorAll('img')].map((img) => img.src);
    const name = document.querySelector('[data-testid="product-name"]').textContent;
    const oneSize = document.querySelector('[data-testid="one-size"]')?.textContent;
    const outOfStock = document.querySelector('[data-testid="add-to-bag"]').textContent === "Notify When Back in Stock";
    const price = document.querySelector('[data-testid="product-name"]').nextElementSibling.textContent;
    const sizePicker = document.querySelector('[data-testid="size-picker"]');
    const sizes = sizePicker ? [] : oneSize;

    sizePicker?.childNodes.forEach((size) => {
        sizes.push({
            isAvailable: !size.classList.contains('m9yOG'),
            isSelected: size.getAttribute('aria-disabled') === 'true',
            size: size.getAttribute('aria-label'),
        });
    });

    return JSON.stringify({
        colorSelected,
        colors,
        description,
        details,
        imagesUrls,
        name,
        outOfStock,
        price,
        sizes,
    });
})();
