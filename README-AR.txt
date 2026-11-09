BRITTON | بريتون — حزمة المتجر ولوحة التحكم
==============================================

الملفات:
- index.html + style.css + store.js: واجهة المتجر.
- admin/index.html + admin.css + admin.js: لوحة تحكم منفصلة.
- firebase.js: إعدادات Firebase للمشروع britton-life-store.
- firestore.rules و storage.rules: قواعد قاعدة البيانات والتخزين.
- assets/: الشعار والخلفيات وصور الأقسام والمنتجات التجريبية.

روابط الصفحات بعد النشر:
- المتجر: https://YOUR-DOMAIN/
- لوحة التحكم: https://YOUR-DOMAIN/admin/

خطوات التفعيل الضرورية قبل استقبال الطلبات:
1) افتح Firebase Console للمشروع britton-life-store.
2) Authentication > Sign-in method > فعّل Email/Password.
3) Authentication > Users: تأكد أن roooo77775@gmail.com مستخدم موجود، وأنك تعرف كلمة مروره. لا توجد كلمة مرور داخل هذه الحزمة.
4) Firestore Database: أنشئ قاعدة البيانات إن لم تكن موجودة، ثم انشر محتوى firestore.rules.
5) Storage: فعّل التخزين ثم انشر storage.rules.
6) ارفع مجلد BRITTON كاملاً إلى استضافة تدعم HTTPS والوحدات JavaScript مثل Firebase Hosting أو Vercel.

للنشر عبر Firebase Hosting:
- ثبّت Firebase CLI على الكمبيوتر.
- افتح الطرفية داخل مجلد BRITTON.
- نفّذ: firebase login
- نفّذ: firebase use britton-life-store
- نفّذ: firebase deploy

ملاحظات مهمة:
- المنتجات الثمانية الظاهرة افتراضياً بيانات عرض تجريبية محلية. أضف منتجاتك الفعلية من لوحة الإدارة لتخزينها في Firestore.
- طلبات العملاء تُحفظ في Firestore ثم يُفتح واتساب على الرقم المسجل 966556575822. غيّر الرقم من إعدادات المتجر إذا لزم.
- صور المنتجات المرفوعة تحفظ في Firebase Storage، ويسمح النظام حتى 3 صور لكل منتج في شاشة الإضافة/التعديل.
- زر الفاتورة يفتح صفحة طباعة يمكن حفظها PDF.
- عداد الزوار العالمي غير مفعّل في هذه النسخة؛ يلزم Analytics أو خدمة عدّ آمنة/Cloud Function لتقديم رقم موثوق.
- يجب تجربة طلب تجريبي بعد نشر قواعد Firebase وقبل الإعلان عن المتجر.
- لا تشارك كلمة مرور لوحة الإدارة مع أي شخص.
