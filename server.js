const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// تقديم ملفات الواجهة من مجلد public
app.use(express.static(path.join(__dirname, 'public')));

// تشغيل الخادم
app.listen(PORT, () => {
  console.log(`🚀 الخادم يعمل على http://localhost:${PORT}`);
});
