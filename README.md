خطوات التشغيل:
1) أنشئ مشروعًا في Supabase.
2) نفذ ملف supabase-schema.sql في SQL Editor.
3) أنشئ مستخدم المدير في Authentication > Users.
4) أضف بريده إلى admin_users عبر SQL:
insert into public.admin_users(email) values ('بريد المدير');
5) انسخ Project URL و anon key إلى config.js.
6) ارفع index.html وadmin.html وconfig.js إلى الاستضافة.
مهم: لا تضع service_role key داخل الموقع.
