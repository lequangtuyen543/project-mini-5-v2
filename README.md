# React Quiz Management System

## 📌 Giới thiệu

Đây là **dự án cá nhân tự học ReactJS**, được xây dựng nhằm mục đích **apply vị trí thực tập / fresher Frontend**.

Ứng dụng là hệ thống **quản lý & làm bài trắc nghiệm (Quiz)**, cho phép người dùng đăng ký, đăng nhập và tham gia làm bài theo từng chủ đề.

Dự án gồm 2 phần:

* **Frontend (ReactJS Quiz App)**: chạy tại **[http://localhost:3000](http://localhost:3000)**
* **Fake Backend (JSON Server)**: chạy tại **[http://localhost:3002](http://localhost:3002)**

---

## 🚀 Chức năng chính

### 👤 Người dùng

* Đăng ký (Register)
* Đăng nhập (Login)
* Đăng xuất (Logout)
* Lưu token sau khi đăng nhập

### 📚 Quiz

* Xem danh sách **Topic**
* Làm bài **Quiz** theo topic
* Xem **Result** (kết quả)
* Xem **Answers** (đáp án chi tiết)

---

## 🛠️ Công nghệ sử dụng

### Frontend

* ReactJS
* React Router
* Ant Design (antd)

### Backend (Fake API)

* JSON Server
* Database: `database.json`
* REST API dựa trên các resource:

  * `users`
  * `topics`
  * `questions`
  * `answers`

---

## 🔐 Xác thực

* Đăng nhập bằng **email & password**
* Sau khi đăng nhập thành công, **token được lưu lại** để xác thực người dùng

---

## ⚙️ Cài đặt & Chạy dự án

### 1️⃣ Cài đặt thư viện

```bash
npm install
```

### 2️⃣ Chạy JSON Server (cổng 3002)

```bash
npm start
```

> Server chạy tại: [http://localhost:3002](http://localhost:3002)

### 3️⃣ Chạy React Quiz App (cổng 3000)

```bash
npm start
```

> App chạy tại: [http://localhost:3000](http://localhost:3000)

---

## 👤 Tài khoản demo

```txt
Email: tuyen@gmail.com
Password: 1
```

---

## 📌 Ghi chú

* Dự án sử dụng **JSON Server** để fake API trong quá trình học ReactJS
* Có thể mở rộng thêm: Admin quản lý câu hỏi, thống kê kết quả, phân quyền người dùng

---

## 📄 Mục tiêu dự án

* Thực hành ReactJS (CRUD, routing, state, API)
* Hoàn thiện sản phẩm cá nhân để **apply thực tập / fresher Frontend**
