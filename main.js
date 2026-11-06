const svg = (label, icon) => 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#09030a"/><stop offset=".55" stop-color="#3b0822"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient></defs><rect width="600" height="600" fill="url(#g)"/><circle cx="300" cy="245" r="120" fill="none" stroke="#fbbf24" stroke-width="4" opacity=".75"/><text x="300" y="235" fill="#fbbf24" font-size="90" text-anchor="middle">${icon}</text><text x="300" y="420" fill="#fff" font-size="32" font-family="Arial" text-anchor="middle">${label}</text><text x="300" y="462" fill="#f9a8d4" font-size="20" font-family="Arial" text-anchor="middle">BRITTON LIFE</text></svg>`);

const categories = [
    { id: 'featured', name: 'منتجات مميزة', icon: '★' },
    { id: 'dildos', name: 'قضبان صناعية', icon: '◆' },
    { id: 'vaginal', name: 'مهبليات صناعية', icon: '●' },
    { id: 'vibrators', name: 'أجهزة هزاز', icon: '✦' },
    { id: 'couples', name: 'ألعاب زوجية', icon: '♥' },
    { id: 'cards', name: 'كوتشينة وتحديات', icon: '♣' },
    { id: 'accessories', name: 'إكسسوارات وملحقات', icon: '◇' },
    { id: 'massage', name: 'زيوت ومساج', icon: '✿' },
    { id: 'romantic', name: 'مستلزمات رومانسية', icon: '♡' },
    { id: 'offers', name: 'العروض', icon: '%' }
];
categories.forEach(c => c.image = svg(c.name, c.icon));

const products = [
    { id: 1, name: 'منتج مميز فاخر', cat: 'featured', price: 249, desc: 'منتج مختار بعناية ضمن مجموعة BRITTON LIFE.', icon: '★' },
    { id: 2, name: 'قضيب صناعي فاخر', cat: 'dildos', price: 1100, desc: 'تصميم فاخر بخامة ناعمة وسهلة التنظيف.', icon: '◆' },
    { id: 3, name: 'مهبل صناعي فاخر', cat: 'vaginal', price: 1000, desc: 'تصميم مريح وخامة ناعمة للاستخدام الشخصي.', icon: '●' },
    { id: 4, name: 'جهاز هزاز متعدد المستويات', cat: 'vibrators', price: 349, desc: 'إعدادات متعددة وتصميم عملي وسهل الاستخدام.', icon: '✦' },
    { id: 5, name: 'لعبة زوجية للتحديات', cat: 'couples', price: 135, desc: 'لعبة تفاعلية لتجديد الروتين وإضافة المرح.', icon: '♥' },
    { id: 6, name: 'كوتشينة العلاقات الزوجية', cat: 'cards', price: 135, desc: 'بطاقات أسئلة وتحديات رومانسية للزوجين.', icon: '♣' },
    { id: 7, name: 'إكسسوار فاخر', cat: 'accessories', price: 149, desc: 'إكسسوار أنيق لإكمال مجموعة BRITTON LIFE.', icon: '◇' },
    { id: 8, name: 'زيت مساج فاخر', cat: 'massage', price: 89, desc: 'زيت مساج بتركيبة مناسبة لجلسات الاسترخاء.', icon: '✿' },
    { id: 9, name: 'مجموعة رومانسية', cat: 'romantic', price: 199, desc: 'مجموعة مختارة لأجواء رومانسية مميزة.', icon: '♡' },
    { id: 10, name: 'عرض BRITTON LIFE', cat: 'offers', price: 299, desc: 'باقة مختارة بسعر عرض لفترة محدودة.', icon: '%' }
];
products.forEach(p => p.image = svg(p.name, p.icon));

let cartItems = JSON.parse(localStorage.getItem('bl_cart') || '[]'), filter = 'all';

function categoryCard(c, small = false) {
    return `<button onclick="setFilter('${c.id}')" class="cat ${small ? 'p-2' : ''} text-center shrink-0"><img src="${c.image}" alt="${c.name}" loading="lazy"><div class="mt-2 text-xs font-bold">${c.name}</div></button>`;
}

function card(p) {
    return `<article class="card p-2"><img class="product-img w-full rounded-xl" src="${p.image}" alt="${p.name}" loading="lazy"><h3 class="font-bold text-xs leading-5 mt-2">${p.name}</h3><p class="text-[10px] text-pink-100/55 mt-1 line-clamp-2">${p.desc}</p><div class="flex items-center justify-between mt-3"><b class="text-amber-300 text-sm">${p.price} ر.س</b><button onclick="add(${p.id})" class="bg-rose-600 rounded-lg px-2 py-1 text-[10px]">أضف</button></div></article>`;
}

function render() {
    const q = (document.getElementById('search')?.value || '').trim().toLowerCase();
    let list = products.filter(p => (filter === 'all' || p.cat === filter) && (!q || (p.name + p.desc + categories.find(c => c.id === p.cat)?.name).toLowerCase().includes(q)));
    document.getElementById('grid').innerHTML = list.map(card).join('');
    document.getElementById('productGrid').innerHTML = list.map(card).join('');
    document.getElementById('count').textContent = list.length + ' منتج';
}

function setFilter(id) {
    filter = id;
    go('products');
    render();
}

function go(id) {
    document.querySelectorAll('main>section').forEach(x => x.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelectorAll('.nav').forEach(x => x.classList.remove('active'));
    render();
}

function toggleSearch() {
    document.getElementById('searchBox').classList.toggle('hidden');
}

function add(id) {
    cartItems.push(products.find(p => p.id === id));
    saveCart();
    alert('تمت إضافة المنتج للسلة');
}

function saveCart() {
    localStorage.setItem('bl_cart', JSON.stringify(cartItems));
    document.getElementById('cartCount').textContent = cartItems.length;
    renderCart();
}

function openCart() {
    document.getElementById('cart').classList.remove('hidden');
    renderCart();
}

function closeCart() {
    document.getElementById('cart').classList.add('hidden');
}

function renderCart() {
    let total = cartItems.reduce((s, p) => s + p.price, 0);
    document.getElementById('cartItems').innerHTML = cartItems.length ? cartItems.map((p, i) => `<div class="p-3 rounded-xl bg-black/50 flex justify-between gap-2"><span>${p.name}</span><span>${p.price} ر.س <button onclick="cartItems.splice(${i},1);saveCart()">✕</button></span></div>`).join('') : '<p class="text-center text-pink-200/60">السلة فارغة</p>';
    document.getElementById('total').textContent = total + ' ر.س';
}

function sendOrder() {
    if (!cartItems.length) return alert('السلة فارغة');
    let n = document.getElementById('name').value, p = document.getElementById('phone').value, c = document.getElementById('city').value, a = document.getElementById('address').value, total = cartItems.reduce((s, x) => s + x.price, 0);
    let items = cartItems.map(x => x.name + ' — ' + x.price + ' ر.س').join('%0A');
    let msg = `طلب جديد من BRITTON LIFE%0Aالاسم: ${encodeURIComponent(n)}%0Aالهاتف: ${encodeURIComponent(p)}%0Aالمدينة: ${encodeURIComponent(c)}%0Aالعنوان: ${encodeURIComponent(a)}%0Aالمنتجات:%0A${items}%0Aالإجمالي: ${total} ر.س`;
    window.open('https://wa.me/966556575822?text=' + msg, '_blank');
}

document.getElementById('cats').innerHTML = categories.map(c => categoryCard(c)).join('');
document.getElementById('catGrid').innerHTML = categories.map(c => `<div class="card p-3">${categoryCard(c, true)}</div>`).join('');

const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "منتجات BRITTON LIFE",
    "itemListElement": products.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
            "@type": "Product",
            "name": p.name,
            "description": p.desc,
            "image": location.origin + p.image,
            "offers": {
                "@type": "Offer",
                "priceCurrency": "SAR",
                "price": p.price,
                "availability": "https://schema.org/InStock"
            }
        }
    }))
};
document.getElementById('productSchema').textContent = JSON.stringify(schema);

render();
saveCart();
