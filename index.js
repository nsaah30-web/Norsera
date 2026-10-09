import requests

# رابط جدول Norsera المباشر في Supabase
url = "https://yfjmvftqjpkgpxqelqbv.supabase.co/rest/v1/Norsera?select=*"

# مفتاح الـ Anon Key المدمج
anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlmam12ZnRxanBrZ3B4cWVscWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEwOTI5MDEsImV4cCI6MjEwNjY2ODkwMX0.CFSPiNN-u3PEBvtP1Ltv8yluPD593e7DWghoEcgc8Kw"

headers = {
    "apikey": anon_key,
        "Authorization": f"Bearer {anon_key}",
            "Content-Type": "application/json"
            }

            # إرسال الطلب لجلب البيانات
            response = requests.get(url, headers=headers)

            # طباعة النتيجة
            if response.status_code == 200:
                print("✨ نجح الاتصال بقاعدة بيانات Norsera بنجاح!")
                    print("البيانات المسترجعة:")
                        print(response.json())
                        else:
                            print(f"❌ حدث خطأ في الاتصال: {response.status_code}")
                                print(response.text)
