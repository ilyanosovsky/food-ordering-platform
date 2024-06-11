# OrderEats

OrderEats is a comprehensive food ordering platform that provides users with a seamless and enjoyable experience. The app includes features like user authentication, restaurant management, cart operations, real-time order tracking, and more. We leverage modern technologies and frameworks to deliver a robust and scalable solution.

## **Technologies Used**

- **MongoDB**: NoSQL database for scalable data storage.
- **ReactJS**: Frontend library for building dynamic user interfaces.
- **Vite**: Next-generation frontend tooling.
- **Auth0**: Adaptable authentication and authorization platform.
- **Stripe**: Fully integrated suite of financial and payments products.
- **Cloudinary**: Cloud storage for image management.
- **Render**: Modern cloud to deploy your web applications.
- **TailwindCSS**: Utility-first CSS framework for rapid UI styling.
- **Shadcn/UI**: Comprehensive collection of customizable UI components.

## **Features**

- **User Authentication/Registration/Profiles**: Secure user login, registration, and profile management.
- **Search/Sort/Filter/Pagination**: Advanced search functionalities with sorting, filtering, and pagination options.
- **Restaurant Management & Image Upload**: Tools for restaurant owners to manage their menus and upload images effortlessly.
- **Cart Management & Stripe Checkout**: Smooth cart operations with integrated Stripe checkout for seamless payment processing.
- **Live Order Status**: Real-time order tracking and status updates.
- **Mobile Responsiveness**: Fully responsive design for optimal experience on all devices.
- **Localization (i18n)**: Multi-language support to cater to a global audience.
- **Light/Dark Mode**: User preference for light and dark themes.

## **UI Components**

We use **Shadcn/UI** for a consistent and customizable UI component library, ensuring a sleek and modern user interface.

## **Deployment**

OrderEats is deployed on **Render**, providing a reliable and scalable platform for our web applications.

## **Image Management**

We leverage **Cloudinary** for efficient image storage and management, ensuring high performance and accessibility.

## **Payments**

**Stripe** is integrated to handle all payment processes securely and efficiently, offering a wide range of financial products and solutions.

## **Authentication**

**Auth0** is used for managing user authentication and authorization, providing a secure and adaptable platform.

## **Screenshots**

### Landing Page

![Landing Page Light Mode](path/to/light-mode-screenshot.png) ![Landing Page Dark Mode](path/to/dark-mode-screenshot.png)

### Features

![User Authentication](path/to/authentication-screenshot.png)
*User Authentication/Registration/Profiles*

![Restaurant Management](path/to/restaurant-management-screenshot.png)
*Restaurant Management & Image Upload*

![Cart Management](path/to/cart-management-screenshot.png)
*Cart Management & Stripe Checkout*

![Live Order Status](path/to/live-order-status-screenshot.png)
*Live Order Status*

---

We are committed to providing an exceptional food ordering experience through innovative technology and user-centric design. Join us and transform the way you order food with OrderEats.

## **Getting Started**

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ilyanosovsky/food-ordering-platform.git
    ```
2. Navigate to the server folder and install dependencies:
    ```bash
    cd food-ordering-platform/server
    npm install
    ```
3. Create a `.env` file in the `server` folder using the `.env.example` file as a template:
    ```bash
    cp .env.example .env
    ```
4. Navigate to the client folder and install dependencies:
    ```bash
    cd ../client
    npm install
    ```
5. Create a `.env` file in the `client` folder using the `.env.example` file as a template:
    ```bash
    cp .env.example .env
    ```

### Running the App

1. Start the backend server:
    ```bash
    cd ../server
    npm run dev
    ```
2. Start the frontend development server:
    ```bash
    cd ../client
    npm run dev
    ```
3. Open your browser and navigate to `http://localhost:5173`.

---