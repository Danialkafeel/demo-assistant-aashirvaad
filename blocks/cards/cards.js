
export default function decorate(block) {
  // Add a class to the block
  block.classList.add('product-block');

  // Select all card elements and style them
  const cards = block.querySelectorAll('.cards > div');
  cards.forEach((card) => {
    const imgContainer = card.querySelector('div:first-child');
    const linkContainer = card.querySelector('div:last-child');
    const imgElement = imgContainer.querySelector('img');
    const linkElement = linkContainer.querySelector('a');

    // Add required class to each card
    card.classList.add('product-card');

    // Add required class to img container
    imgContainer.classList.add('product-img-container');

    // Add required class to link container
    linkContainer.classList.add('product-link-container');

    // Add required class to images
    imgElement.classList.add('product-img');

    // Add required class to links
    linkElement.classList.add('product-link');
  });
}
