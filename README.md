# Bilgisayar Dünyası — Web Sitesi

Bilgisayar Dünyası'nın (Akınsoft Esenler Bölge Bayisi) kurumsal web sitesi.
İstanbul merkezli olarak kurumsal bilgi teknolojileri, teknik servis ve
güvenlik sistemleri alanında hizmet veren firmanın tanıtım sitesidir.

## Özellikler

- Kurumsal tanıtım sayfaları (Ana Sayfa, Hakkımızda, Neler Yapıyoruz, Kariyer, İletişim)
- Hizmetlere özel detay sayfaları
- Tamamlanan projeleri tanıtan portfolyo bölümü
- İletişim ve kariyer başvuru formları (PHP tabanlı, sunucu tarafı kayıt)
- Şifre korumalı yönetim paneli (gelen mesaj ve başvuruları görüntüleme)

## Kullanılan Teknolojiler

- HTML5, CSS3, Vanilla JavaScript
- PHP (form işleme ve yönetim paneli)
- JSON dosya tabanlı veri saklama

## Klasör Yapısı

- `css/`, `js/`, `assets/` — site stilleri, betikleri ve görseller
- `detay/` — hizmet detay sayfaları
- `proje/` — proje detay sayfaları
- `admin/` — yönetim paneli
- `data/`, `uploads/` — form verileri ve yüklenen dosyalar (sunucuda saklanır)

## Kurulum

Bu proje PHP çalıştırabilen bir hosting üzerinde yayına alınmalıdır.
Yüklendikten sonra `/admin/kurulum.php` adresinden yönetici hesabı oluşturulur.
