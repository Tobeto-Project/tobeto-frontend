# Tobeto Eğitim Platformu

Tobeto, bilgiye erişimi kolaylaştırmak, becerileri geliştirmek ve kişisel deneyimleri artırmak amacıyla geliştirilmiş bir eğitim platformudur. Web ve mobil cihazlar için interaktif videolarla eğitim sağlar.

## İçindekiler

- [Proje Tanımı](#proje-tanımı)
- [Kullanılan Teknoloji, Dil ve Teknik Özellikler](#kullanılan-teknoloji-dil-ve-teknik-özellikler)
- [Başlangıç](#başlangıç)
  - [Gereksinimler](#gereksinimler)
  - [Kurulum](#kurulum)
  - [Çalıştırma](#çalıştırma)
- [Kullanım](#kullanım)
  - [Admin Paneli](#admin-paneli)
  - [Profil Bilgileri](#profil-bilgileri)
  - [Eğitimler](#eğitimler)
  - [Sınav Sistemi](#sınav-sistemi)
- [Geliştirme Aşamasında Neler Var?](#geliştirme-aşamasında-neler-var)
- [Katkıda Bulunma](#katkıda-bulunma)
- [Lisans](#lisans)

## Proje Tanımı

Tobeto, eğitim alanında bilgiye erişimi ve beceri gelişimini desteklemek amacıyla özel olarak geliştirilmiş bir platformdur. Web ve mobil cihazlar üzerinden erişilebilen bu platform, interaktif videolar aracılığıyla zengin eğitim içerikleri sunar.

## Kullanılan Teknoloji, Dil ve Teknik Özellikler

- **Programlama Dili:** C#
- **Geliştirme Platformu:** .NET 7.0
- **Frontend Teknolojileri:**
  - React
  - Next.js
  - CSS
  - JavaScript
- **Backend Teknolojileri:** ASP.NET Web API
- **Veritabanı ve Veri Erişimi:**
  - MS SQL Server
  - Entity Framework
  - LINQ
- **Mimari Yaklaşım:** Clean Architecture
- **Kod Eşleme Aracı:** AutoMapper

### Teknik Özellikler

- **Lazy Loading:** Tüm sayfalarda lazy loading yaklaşımı kullanılmıştır.
- **Video İzleme:** Eğitim videoları için React Player kullanılmıştır.
- **Kullanıcı Oturum Yönetimi:** JWT token ile birlikte refresh token kullanılmaktadır.

## Başlangıç

### Gereksinimler

Projenin çalıştırılması için aşağıdaki gereksinimlerin kurulu olması gerekmektedir:

- Node.js
- .NET SDK
- Visual Studio veya Visual Studio Code (Backend için)

### Kurulum

1. Projeyi klonlayın: `git clone https://github.com/kullanıcı/adı.git`
2. Frontend klasörüne gidin: `cd frontend`
3. Bağımlılıkları yükleyin: `npm install`

### Çalıştırma

#### Frontend'i Başlatma

1. Terminali açın ve `cd path/to/frontend` ile proje klasörüne gidin.
2. `npm install` komutu ile bağımlılıkları yükleyin.
3. Frontend'i başlatmak için `npm start` komutunu çalıştırın.

#### Backend İçin

1. Visual Studio'yu açın ve "Open Project/Solution" ile projeyi açın.
2. Database Migration için `Database.EnsureCreated()` satırını yorumdan kaldırın.
3. `Set as Startup Project` seçeneği ile wepapi klasörünü başlatın.

## Kullanım

### Admin Paneli

- **Kullanıcı Kaydı:** Admin paneline giriş yapabilmek için "employee" olarak yetkilendirilmiş bir kullanıcı oluşturulmalıdır.

### Profil Bilgileri

Kullanıcılar, kişisel bilgilerini, sertifikalarını, sosyal medya hesaplarını, iş deneyimlerini ve eğitim bilgilerini yönetebilir.

### Eğitimler

Eğitim Listesi, Eğitim Etkileşimi ve Yeni Eğitim Ekleme seçenekleri mevcuttur.

### Sınav Sistemi

Sınav atama, sınavlar ve sonuçlar yönetilebilir.

## Geliştirme Aşamasında Neler Var?

- Çerezler eklentisi
- Redux Toolkit kullanımının genişletilmesi
- Veri kontrol satırlarının etkinleştirilmesi

## Katkıda Bulunma

Projeye katkıda bulunmak için projeyi fork etmek, yerel ortama klonlamak, yenilikler yapmak, değişiklikleri kaydetmek ve GitHub'a yüklemek gerekmektedir.

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Detaylı bilgi için LICENSE dosyasını inceleyebilirsiniz.
