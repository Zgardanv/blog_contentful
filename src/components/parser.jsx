import { JSDOM } from 'jsdom';

// const extractText = (node) => node.textContent.trim();
// const processRow = (row) => Array.from(row.children).map(extractText);
// let huytems = [];



const parseData = (html) => {
    const dom = new JSDOM(html);
    const items = Array.from(
        dom.window.document.querySelectorAll('.profile-ads-list-photo .profile-ads-list-photo-item'),
    );
    //   const allItems = items.map(processRow);
    const allItems = []

    items.map((item, i) => {

        const fuel = item.querySelector('div .is-motor').parentNode.textContent.trim();
        const gearBox = item.querySelector('div .is-gearbox').parentNode.textContent.trim();
        const title = item.querySelector('div .profile-ads-list-photo-item-title a').textContent.trim();
        const price = item.querySelector('div .profile-ads-list-photo-item-price-wrapper').textContent.trim();
        const img = item.querySelector('div a img').getAttribute('src');
        const id = item.querySelector('div a').getAttribute('href');

        const obj = {
            id,
            img,
            title,
            price,
            fuel,
            gearBox
        }

        allItems.push(obj);
    });
    // console.log(allItems);
    return allItems;
};

export { parseData }