# Restaurant App

A **React Native (Expo) food ordering application** that allows users to browse menu categories, add items to a cart, place orders, and view order history. The app uses **Firebase Authentication**, **Firestore**, and **Redux Toolkit** for state management.

This project demonstrates modern **mobile app architecture with React Native**, including navigation, global state management, backend integration, and user authentication.

---

# Features

### Authentication

* User registration
* User login
* Firebase Authentication integration
* Secure session management
* Role-based admin access

### Menu & Categories

* Browse food categories
* View items by category
* Popular food section on home screen
* Item details page with quantity selector

### Cart System

* Add items to cart
* Quantity management
* Dynamic cart total calculation
* Visual feedback when adding items
* Cart screen displaying selected items

### Orders

* Checkout screen with order summary
* Place orders
* Orders stored in Firebase Firestore
* Order history per user
* Order success confirmation screen

### UI/UX

* Clean mobile UI
* Horizontal category scrolling
* Food cards with images
* Add-to-cart button feedback
* Consistent navigation layout

---

# Technologies Used

### Frontend

* React Native
* Expo
* TypeScript
* React Navigation

### State Management

* Redux Toolkit
* React Redux

### Backend & Database

* Firebase Authentication
* Firebase Firestore

### Other Libraries

* React Native Gesture Handler
* React Native Reanimated

---

# Project Structure

```
src
 ├── assets
 ├── components
 │    ├── CategoryCard.tsx
 │    ├── FoodCard.tsx
 │    └── Navbar.tsx
 │
 ├── context
 │    └── AuthContext.tsx
 │
 ├── data
 │    └── food.ts
 │
 ├── navigation
 │    ├── MainTabs.tsx
 │    └── RootNavigator.tsx
 │
 ├── screens
 │    ├── admin
 │    ├── auth
 │    ├── cart
 │    ├── category
 │    ├── checkout
 │    ├── home
 │    ├── orders
 │    └── profile
 │
 ├── services
 │    ├── firebase.ts
 │    └── orderService.ts
 │
 ├── store
 │    ├── cartSlice.ts
 │    └── store.ts
 │
 └── theme
      └── colors.ts
```

---

# Installation

### 1 Clone the repository

```
git clone https://github.com/Motikoni012/react-native-restaurant-app.git
```

### 2 Navigate to the project

```
cd react-native-restaurant-app
code .
cd restaurant
```

### 3 Install dependencies

```
npm install
```

### 4 Start the Expo server

```
npx expo start
```

---

# Firebase Setup

1. Go to the Firebase Console
2. Create a new project
3. Enable:

* Firebase Authentication (Email/Password)
* Firestore Database

4. Replace the Firebase config inside:

```
src/services/firebase.ts
```

configuration:

```
const firebaseConfig = {
  apiKey: "AIzaSyB1DIk0pGBJqTeb8WtuxXA2zdJZYuzLzpw",
  authDomain: "restaurant-app-43b23.firebaseapp.com",
  projectId: "restaurant-app-43b23",
  storageBucket: "restaurant-app-43b23.firebasestorage.app",
  messagingSenderId: "1059641261562",
  appId: "1:1059641261562:web:066bb12a9301dfcbc4b843",
  measurementId: "G-27Z6Y7GKDH"
};
```

---

# Redux Store

Redux Toolkit is used to manage global cart state.

Main slice:

```
src/store/cartSlice.ts
```

Features:

* Add item to cart
* Remove item
* Update quantity
* Clear cart

---

# App Flow

1 User registers or logs in
2 User browses food categories
3️ User views food items
4️ User adds items to cart
5️ User checks out
6️ Order is saved in Firestore
7️ User can view order history

---

# Screens

Main screens in the app:

* Login Screen
* Register Screen
* Home Screen
* Category Screen
* Item Detail Screen
* Cart Screen
* Checkout Screen
* Order Success Screen
* Order History Screen

---
