/* global describe */
/* global it */
import assert from 'assert';
import ghost from 'ghostjs';

const selectors = {
  gridItem: '[data-grid-item]',
  afterGrid: '.afterGrid',
  insertItem: '#insert-item',
};

describe('TenzingGrid > Insert items', () => {
  it('Can insert items into the grid', async () => {
    ghost.close();
    await ghost.open('http://localhost:3000/TenzingGrid');

    const gridItems = await ghost.findElements(selectors.gridItem);
    const initialLength = gridItems.length;

    const insertTrigger = await ghost.findElement(selectors.insertItem);
    await insertTrigger.click();

    const insertedGridItems = await ghost.findElements(selectors.gridItem);
    assert.equal(insertedGridItems.length, initialLength + 1);
  });
});