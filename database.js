/* تخزين محلي تجريبي. للنشر الفعلي استخدم قاعدة بيانات وخادماً موثوقاً. */
const DB={
 key:"britton_products_v1", cartKey:"britton_cart_v1", ordersKey:"britton_orders_v1",
 defaults:[
  {id:1,name:"حقيبة أنيقة",category:"إكسسوارات",price:120,description:"حقيبة عملية بتصميم عصري.",image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80"},
  {id:2,name:"ساعة كلاسيكية",category:"إكسسوارات",price:180,description:"ساعة بتصميم بسيط وأنيق.",image:"https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80"},
  {id:3,name:"هدية مميزة",category:"هدايا",price:95,description:"هدية جميلة للمناسبات المختلفة.",image:"https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80"},
  {id:4,name:"مجموعة عناية",category:"عناية شخصية",price:75,description:"مجموعة عناية للاستخدام اليومي.",image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=80"}
 ],
 getProducts(){try{return JSON.parse(localStorage.getItem(this.key))||this.defaults.slice()}catch{return this.defaults.slice()}},
 saveProducts(items){localStorage.setItem(this.key,JSON.stringify(items))},
 getCart(){try{return JSON.parse(localStorage.getItem(this.cartKey))||[]}catch{return []}},
 saveCart(items){localStorage.setItem(this.cartKey,JSON.stringify(items))},
 getOrders(){try{return JSON.parse(localStorage.getItem(this.ordersKey))||[]}catch{return []}},
 saveOrder(order){const a=this.getOrders();a.push(order);localStorage.setItem(this.ordersKey,JSON.stringify(a))}
};
