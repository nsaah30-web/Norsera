create extension if not exists pgcrypto;
create table if not exists public.registrations(
id uuid primary key default gen_random_uuid(), created_at timestamptz default now(),
full_name text not null, phone text not null, email text, registration_type text not null,
notes text, status text default 'جديد' check(status in ('جديد','قيد المراجعة','مقبول','مرفوض')));
create table if not exists public.requests(
id uuid primary key default gen_random_uuid(), created_at timestamptz default now(),
requester_name text not null, phone text, email text, request_type text not null,
details text not null, status text default 'جديد' check(status in ('جديد','قيد المراجعة','مقبول','مرفوض')));
create table if not exists public.admin_users(email text primary key);
alter table public.registrations enable row level security;
alter table public.requests enable row level security;
alter table public.admin_users enable row level security;
create policy "public insert registrations" on public.registrations for insert to anon,authenticated with check(true);
create policy "public insert requests" on public.requests for insert to anon,authenticated with check(true);
create policy "admin read registrations" on public.registrations for select to authenticated using(exists(select 1 from public.admin_users where lower(email)=lower(auth.jwt()->>'email')));
create policy "admin update registrations" on public.registrations for update to authenticated using(exists(select 1 from public.admin_users where lower(email)=lower(auth.jwt()->>'email')));
create policy "admin read requests" on public.requests for select to authenticated using(exists(select 1 from public.admin_users where lower(email)=lower(auth.jwt()->>'email')));
create policy "admin update requests" on public.requests for update to authenticated using(exists(select 1 from public.admin_users where lower(email)=lower(auth.jwt()->>'email')));
-- بعد إنشاء حساب المدير:
-- insert into public.admin_users(email) values ('admin@example.com');