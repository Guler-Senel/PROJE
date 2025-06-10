# Esma Nur – Backend Geliştirme Notları (İlaç Atlası Projesi)

Bu dosya, İlaç Atlası projesinde geliştirdiğim backend (Spring Boot) tarafına ait detayları, kullanılan teknolojileri ve test yöntemlerini içerir.

---

## ✅ Kullanılan Teknolojiler
- Java 17
- Spring Boot 3.4.5
- Spring Data JPA
- H2 In-Memory Database

---

## 📁 Backend Dosya Yapısı

| Sınıf | Açıklama |
|-------|----------|
| `Ilac.java` | JPA Entity – İlaç modeli (isim, form, yan etkiler vs.) |
| `IlacRepository.java` | JPA repository – Veritabanı işlemleri |
| `IlacController.java` | REST API – `GET /api/ilaclar`, `POST /api/ilaclar` |

---

## 🧪 Test Bilgileri

- Uygulama adresi: `http://localhost:8085`
- H2 Console: `http://localhost:8085/h2-console`
  - JDBC URL: `jdbc:h2:mem:ilacdb`
  - Username: `sa`
  - Password: *(boş)*

### API Testleri:

**GET tüm ilaçlar**

