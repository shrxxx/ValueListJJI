const items = [
    { name: "Sukuna Finger", value: "100 (1 Sukuna Finger)", demand: "S+GAZILION" },
    { name: "Playful Cloud", value: "1500 (15 Sukuna Fingers)", demand: "A" },
    { name: "Dragon Bone", value: "1300 (13 Sukuna Fingers)", demand: "B" },
    { name: "Jet Black", value: "400 (4 Sukuna Fingers)", demand: "D" },
    { name: "Ravenous Axe", value: "1900 (19 Sukuna Fingers)", demand: "A" },
    { name: "Impossible Dream", value: "1600 (16 Sukuna Fingers)", demand: "A" },
    { name: "Blood Sword", value: "1000 (10 Sukuna Fingers)", demand: "C" },
    { name: "Vengeance", value: "2000 (20 Sukuna Fingers)", demand: "S" },
    { name: "Split Soul", value: "1500 (15 Sukuna Fingers)", demand: "B" },
    { name: "Feathered Spear", value: "500 (5 Sukuna Fingers)", demand: "D" },
    { name: "Viscera Scythe", value: "500 (5 Sukuna Fingers)", demand: "D" },
    { name: "Electric Staff", value: "900 (9 Sukuna Fingers)", demand: "C" },
    { name: "Heian Gauntlets", value: "6500 (65 Sukuna Fingers)", demand: "SSS" },
    { name: "Inverted Spear Of Heaven", value: "1500 (15 Sukuna Fingers)", demand: "A" },
    { name: "Domain Shard", value: "5000 (50 Sukuna Fingers)", demand: "S" },
    { name: "Max Scroll", value: "5000 (50 Sukuna Fingers)", demand: "A+" },
    { name: "Purified Cursed Hand", value: "1000 (10 Sukuna Fingers)", demand: "A" },
    { name: "Energy Nature Scroll", value: "900 (9 Sukuna Fingers)", demand: "A" },
    { name: "Eyes Of Willpower", value: "2500 (25 Sukuna Fingers)", demand: "S" },
    { name: "Eyes of Insight", value: "1800 (18 Sukuna Fingers)", demand: "A" },
    { name: "Eyes of Bloodthirst", value: "2200 (22 Sukuna Fingers)", demand: "A++" },
    { name: "Soul Robe", value: "2000 (20 Sukuna Fingers)", demand: "A" },
    { name: "Jogo Cape", value: "2000 (20 Sukuna Fingers)", demand: "B++" },
    { name: "Rotten Chains", value: "700 (7 Sukuna Fingers)", demand: "C+" },
    { name: "Demonic Robe", value: "2000 (20 Sukuna Fingers)", demand: "B+" },
    { name: "Demonic Tobi", value: "2000 (20 Sukuna Fingers)", demand: "B-" },
    { name: "Rotten Ring", value: "1000 (10 Sukuna Fingers)", demand: "A" },
    { name: "Overtime Suit", value: "1000 (10 Sukuna Fingers)", demand: "B+" },
    { name: "Overtime Trousers", value: "1000 (10 Sukuna Fingers)", demand: "A" },
    { name: "OceanBlue Sailor's Vest", value: "1000 (10 Sukuna Fingers)", demand: "A+" },
    { name: "DeepBlack Sailor's Vest", value: "600 (6 Sukuna Fingers)", demand: "C" },
    { name: "Ring of Thorns", value: "200 (2 Sukuna Fingers)", demand: "D" },
    { name: "Soul Stitch Pants", value: "300 (3 Sukuna Fingers)", demand: "D++" },
    { name: "Dark Heian Set", value: "12000 (120 Sukuna Fingers)", demand: "SSS" },
    { name: "Scarf of the Chosen", value: "3500 (35 Sukuna Fingers)", demand: "SSS" },
    { name: "Enlightenment Beads", value: "4000 (40 Sukuna Fingers)", demand: "SSS" },
    { name: "Heavenly Black Shirt", value: "550 (5.5 Sukuna Fingers)", demand: "D" },
    { name: "Sorcerer Killer Pants", value: "500 (5 Sukuna Fingers)", demand: "D" },
    { name: "Ocean Jacket", value: "200 (2 Sukuna Fingers)", demand: "F" },
    { name: "Golden Haori", value: "1500 (15 Sukuna Fingers)", demand: "SSS" },
    { name: "Garment of the Stars", value: "500 (5 Sukuna Fingers)", demand: "D" },
    { name: "Deep Assassin Garment", value: "800 (8 Sukuna Fingers)", demand: "D" },
    { name: "Garment of Balance", value: "450 (4.5 Sukuna Fingers)", demand: "D" },
    { name: "Sinners Suit", value: "450 (4.5 Sukuna Fingers)", demand: "D" },
    { name: "Sinners Trousers", value: "450 (4.5 Sukuna Fingers)", demand: "F" },
    { name: "Wise Man's Kimono", value: "700 (7 Sukuna Fingers)", demand: "C+" },
    { name: "Wise Man's Hakama", value: "1200 (12 Sukuna Fingers)", demand: "B" },
    { name: "Bloodthirsty Kimono", value: "1000 (10 Sukuna Fingers)", demand: "A" },
    { name: "Blessed Scarf", value: "500 (5 Sukuna Fingers)", demand: "B" },
    { name: "Perception Blocking Mask", value: "700 (7 Sukuna Fingers)", demand: "B" },
    { name: "Demon Face", value: "250 (2.5 Sukuna Fingers)", demand: "D" },
    { name: "Soul Face Stitches", value: "500 (5 Sukuna Fingers)", demand: "F" }
];

const modal = document.getElementById('itemModal');
const overlay = document.getElementById('modalOverlay');
const openModalButton = document.getElementById('openModal');
const itemList = document.getElementById('itemList');
const searchInput = document.getElementById('searchInput');

openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
    overlay.style.display = 'block';
    populateItemList();
});

overlay.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});

function populateItemList() {
    itemList.innerHTML = '';
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `<div class="item-name">${item.name}</div>`;
        itemDiv.addEventListener('click', () => {
            selectItem(item, itemDiv);
        });
        itemList.appendChild(itemDiv);
    });
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm));
    itemList.innerHTML = '';
    filteredItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `<div class="item-name">${item.name}</div>`;
        itemDiv.addEventListener('click', () => {
            selectItem(item, itemDiv);
        });
        itemList.appendChild(itemDiv);
    });
});

function selectItem(item, itemDiv) {
    const selectedItemDiv = document.querySelector('.item.selected');
    if (selectedItemDiv) {
        selectedItemDiv.classList.remove('selected');
    }
    itemDiv.classList.add('selected');
    document.getElementById('itemValue').style.display = 'block';
    document.getElementById('itemValue').children[0].textContent = item.value;
    document.getElementById('itemDemand').style.display = 'block';
    document.getElementById('itemDemand').children[0].textContent = item.demand;

    modal.style.display = 'none';
    overlay.style.display = 'none';

    document.querySelector('.choose-btn').classList.add('shrunk');
}
