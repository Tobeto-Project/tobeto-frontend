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

Tobeto, eğitim alanında bilgiye erişimi ve beceri gelişimini desteklemek amacıyla özel olarak geliştirilmiş bir platformdur. Web ve mobil cihazlar üzerinden erişilebilen bu platform, interaktif videolar aracılığıyla zengin eğitim içerikleri sunar. Kullanıcılar, istedikleri zaman istedikleri yerden bu interaktif videoları izleyerek öğrenme deneyimlerini kişiselleştirebilirler.

Ayrıca, Tobeto'nun bir özelliği de kullanıcıların eğitim sürecini yönetmelerine yardımcı olan bir admin paneline sahip olmasıdır. Bu admin paneli, platformun genel yönetimini sağlamanın yanı sıra, kullanıcıların erişebileceği eğitim içeriklerini düzenlemek, yeni içerikler eklemek ve kullanıcıların aktivitelerini izlemek gibi işlevleri de içerir.Bu sayede platform yöneticileri, kullanıcı deneyimini daha iyi hale getirmek ve eğitim içeriğini sürekli olarak güncellemek için gerekli araçlara sahip olurlar.


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
- **Güvenliik:** Güvenlik için Redux Toolkit kullanımı sınırlıdır.Tüm veri akışı için servis dosyalarında veri kontrol satırları yoruma alınmıştır. Kullanıcılar ilk kayıt olurken reCAPTCHA ile doğrulama sistemi geçmelidir. Kayıt oluştuktan sonra mail adreslerine doğrulama maili gönderilir.
- **Reponsive Tasarım:** Tüm proje sayfaları responsive tasarımlıdır.

## Başlangıç
Bu bölüm, projeyi yerel ortamınızda çalıştırmak için gerekli adımları içerir.
Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

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
2. Database Migration için DataAccess katmanındaki TobetoDbContext.cs dosyasını açın. `Database.EnsureCreated()` satırını yorumdan kaldırın.
3. Web API Swagger ekranından herhangi bir katman için getList yaparak database oluşturun.
4. `Set as Startup Project` seçeneği ile wepapi klasörünü başlatın.

## Kullanım

### Admin Panel

#### Kullanıcı Kaydı

Admin paneline giriş yapabilmek için öncelikle bir "employee" olarak yetkilendirilmiş bir kullanıcı oluşturulmalıdır. Daha sonra, bu kullanıcı adı ve şifresi ile admin paneline giriş yapılabilir.

#### Employee Oluşturma

Öncelikle, Web API üzerinden bir "employee" kullanıcısı oluşturun. Bu işlemi yapmak için bir API isteği göndermelisiniz. İsteği gönderirken aşağıdaki bilgilere sahip bir kullanıcı oluşturun:

- Email: Yetkilendirilmiş kullanıcının e-posta adresi
- Şifre: Yetkilendirilmiş kullanıcının şifresi

Yetkilendirme: Bu kullanıcıya "admin" veya "employee" gibi uygun bir yetki atayın.

#### Admin Paneli Girişi

Admin paneline giriş yapabilmek için tarayıcınızı açın. (ör: [http://localhost:3000/adminpanel](http://localhost:3000/adminpanel))

Giriş sayfasında, önceden oluşturduğunuz "employee" kullanıcısının email ve şifresini girin. Giriş yap butonuna tıklayarak admin paneline erişin.

#### Admin Paneli Kullanımı

Admin paneli, projenin yönetim arayüzüdür. Bu panel aracılığıyla yönetici, kullanıcıları, eğitimleri, sınavları ve diğer içeriği yönetebilir. Bazı özellikler şunlardır:

- Kullanıcı yönetimi: Yeni kullanıcılar ekleyebilir, mevcut kullanıcıları görüntüleyebilir, düzenleyebilir ve silebilir.
- Eğitim yönetimi: Eğitimler ekleyebilir, düzenleyebilir ve silebilir. Kullanıcılara özel eğitimler atayabilir.
- Sınav yönetimi: Sınavlar oluşturabilir ve kullanıcılara atayabilir. Sınav sonuçlarını görüntüleyebilir.
- İçerik yönetimi: Blog yazıları, basın yazıları, haberler, duyurular ve takvim etkinlikleri gibi içerikleri ekleyebilir, düzenleyebilir ve silebilir.
- Yetkilendirme ve yetkilendirme: Kullanıcı rollerini yönetebilir, yetkilendirme ayarlarını düzenleyebilir.


### PROFİL BİLGİLERİ

Profil bilgileri, kullanıcıların kişisel bilgilerini ve deneyimlerini yönetebilecekleri bir bölümdür. Bu bölümde kullanıcılar şunları yapabilir:

#### Kişisel Bilgiler

Kullanıcılar TC Kimlik, İsim Soyisim, Doğum Tarihi, E-posta gibi kişisel bilgileri görüntüleyebilir, güncelleyebilir ve kaydedebilir.

#### Sertifikalar

Kullanıcılar sertifikalarını ekleyebilir, düzenleyebilir, silebilir ve görüntüleyebilir.

#### Sosyal Medya Hesapları

Öncelikle admin panelinden sosyal medya hesaplarını ekleyin (Facebook, Twitter, LinkedIn vb.). Profil bilgilerinde bu sosyal medya hesaplarını görüntüleyebilir, düzenleyebilir ve seçebilirsiniz.

#### İş Deneyimleri

Kullanıcılar iş deneyimlerini ekleyebilir, düzenleyebilir, silebilir ve görüntüleyebilir.

#### Eğitim Bilgileri

Kullanıcılar eğitim bilgilerini ekleyebilir, düzenleyebilir, silebilir ve görüntüleyebilir.

#### Yetkinlikler

Öncelikle admin panelinden yetkinlikler ekleyin (örneğin: İleri seviye, Orta seviye, Başlangıç seviyesi). Profil bilgilerinde bu yetkinlikleri görüntüleyebilir, düzenleyebilir ve seçebilirsiniz.

#### Dil Bilgisi

Öncelikle admin panelinden diller ekleyin (örneğin: İngilizce, Almanca, Fransızca). Profil bilgilerinde bu dilleri görüntüleyebilir, düzenleyebilir ve seçebilirsiniz.

#### Şifre Güncelleme

Kullanıcılar şifrelerini güncelleyebilirler.


### EĞİTİMLER

Eğitimler bölümü, kullanıcıların eğitimleri görüntüleyebileceği ve yönetebileceği bir alandır ve şunları içerir:

#### Eğitim Listesi

Kullanıcıya özel eğitimler listelenir ve oynatma listesi oluşturulabilir. Bu eğitimler, admin panelinden eklenen kurslar, modüller ve derslerden oluşur.

#### Eğitim Etkileşimi

Kullanıcılar eğitimleri izleyebilir, beğenebilir veya kaydedebilir. Her bir eğitim, admin panelinde tanımlanan kurslar, modüller ve derslerden oluşur.

#### Yeni Eğitim Ekleme

Kullanıcılar yeni eğitimler ekleyebilir, düzenleyebilir ve silebilir. Bu eğitimler, admin panelinden kurs, modül ve ders şeklinde eklenir. Kullanıcılar, bu bileşenleri bir araya getirerek yeni eğitimler oluşturabilir veya mevcut eğitimleri düzenleyebilirler.

Bu şekilde, kullanıcılar eğitimleri yönetebilirken, admin panelinden eklenen kurslar, modüller ve derslerle de etkileşimde bulunabilirler.


### SINAV SİSTEMİ

Sınav sistemi, yöneticilerin kullanıcılara sınav atamasını ve sınav sonuçlarını yönetmesini sağlar. Bu bölümde şunlar mümkündür:

#### Sınav Atama

Yönetici, kullanıcılara özel sınavlar oluşturabilir ve atayabilir.

#### Sınavlar ve Sonuçlar

Kullanıcılar sınavları görüntüleyebilir ve sınava girebilir. Yönetici sınav sonuçlarını görüntüleyebilir ve değerlendirebilir.

Her bir bölüm için verilen özellikler, projenizin ihtiyaçlarına ve gereksinimlerine bağlı olarak daha da genişletilebilir veya özelleştirilebilir.


### Geliştirme Aşamasında Neler Var?

- Çerezler eklentisi
- Redux Toolkit kullanımının genişletilmesi
- Veri kontrol satırlarının etkinleştirilmesi

### Katkıda Bulunma

Projeye katkıda bulunmak isteyenler için aşağıdaki adımları izleyebilirler:

#### Projeyi Fork Etme

İlk adım olarak, projenin kendi GitHub hesabınıza kopyasını oluşturun. Bunun için projenin GitHub reposuna gidin ve sağ üst köşede bulunan "Fork" butonuna tıklayın.

#### Projeyi Yerel Ortama Klonlama

Fork ettiğiniz projeyi yerel ortamınıza klonlayın. Bunun için terminale şu komutu girin:

Frontend için;
git clone https://github.com/Tobeto-Project/tobeto-frontend.git

Backend için;
git clone https://github.com/Tobeto-Pair1/Tobeto_.git


#### Yeniden Adlandırma

Projeyi klonladıktan sonra, isterseniz projenin adını ve klasör yapısını değiştirebilirsiniz.

#### Yenilikler Yapma

Klonladığınız projeyi açın ve üzerinde değişiklikler yapın. Yeni özellikler ekleyin, hataları düzeltin veya mevcut kodu iyileştirin.

#### Değişiklikleri Yerel Ortama Kaydetme

Yaptığınız değişiklikleri yerel depoya kaydedin. Bunun için aşağıdaki adımları izleyin:

git add .
git commit -m "Açıklayıcı bir commit mesajı yazın"


#### Değişiklikleri GitHub'a Yükleme

Yaptığınız değişiklikleri kendi GitHub hesabınızdaki fork ettiğiniz projeye yükleyin:

git push origin master


#### Pull Request (PR) Oluşturma

Değişikliklerinizi ana projeye eklemek için bir Pull Request oluşturun. Bunun için GitHub üzerinde kendi fork ettiğiniz projenin sayfasına gidin ve "New Pull Request" butonuna tıklayın. Değişikliklerinizi karşılaştırın ve açıklayıcı bir başlık ve açıklama ekleyerek PR oluşturun.

#### İnceleme ve Birleştirme

Projeyi yönetenler (maintainer'lar), PR'ı inceleyecek ve gerekli ise değişiklik talep edeceklerdir. Değişikliklerinizin kabul edilmesi durumunda, PR projeye birleştirilecektir.

Bu adımları takip ederek, projeye katkıda bulunabilir ve geliştirmeye destek olabilirsiniz.




## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Detaylı bilgi için LICENSE dosyasını inceleyebilirsiniz.
MIT Lisansı, projenin ticari ve kişisel kullanımı, dağıtımı,
 değiştirilmesi ve özel kullanımı dahil olmak üzere sınırlama olmaksızın herhangi bir amaç için 
özgürce kullanılmasına izin verir. Ancak, bu projeyi kullanırken ve dağıtırken lisansın koşullarını kabul etmelisiniz.
