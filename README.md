# DineDash  

DineDash is a responsive restaurant table booking system built with Next.js, Tailwind CSS, Node.js, Express, and MongoDB. It features real-time slot availability, reservation management, and a user-friendly interface.  

## Live Demo  
- **Frontend**: [https://dinedash.chinmayh.me](https://dinedash.chinmayh.me)  
- **Backend API**: [https://api.chinmayh.me](https://api.chinmayh.me)  

---

## File Structure  
```
Restaurant-Table-Booking-System/
├── backend/
├── frontend/
```
---

## Installation  

### Prerequisites  
- Node.js and npm  
- MongoDB  
- Linux VPS with Nginx (optional for hosting)  

### Backend  

## Live Demo  
- **Backend**: [https://api.chinmayh.me/](https://api.chinmayh.me/)
  
1. Navigate to the `backend` folder:  
   ```bash  
   cd backend
   ```
2. Navigate to the `backend` folder:
    ```bash  
    npm install  
    ```
3. Create a .env file in the backend folder with the following content
    ```env
    PORT=7000  
    CORS_ORIGIN=https://dinedash.chinmayh.me  
    MONGO_URI=YOUR_MONGODB_URL
    ```
4. Start the server:
   ```bash
   npm start
   ```
5. Backend is available at ```http://localhost:7000``` or your hosted domain.

## Backend Endpoints  

These endpoints are provided by the backend API hosted at [https://api.chinmayh.me/](https://api.chinmayh.me/).  

### Available Endpoints  

- `GET /`  
  - **Description**: Health check endpoint, returns a message indicating the API is running.  

- `GET /getBooking?/:id?`  
  - **Description**: Fetch bookings. Optionally provide an `id` to fetch a specific booking.
      **Request (Example)**:
      ```
     
       http://localhost:7000/api/booking/getBooking/6777c26f59c03cc7b75dd5d1
     
      ```

- `POST /createBooking`  
  - **Description**: Create a new booking.  
  - **Body Parameters**:  
    - `date`: Date of the booking.  
    - `time`: Time of the booking.  
    - `name`: Name of the customer.  
    - `guests`: Number of guests.  
    - `contact`: Contact details.
      
     **Request Body (Example)**:
      ```json
      {
        "name": "Name",
        "email": "email@gmail.com",
        "phone": "number",
        "address": "Address",
        "city": "city",
        "postalCode": "postalcode",
        "numberOfGuests": "4",
        "DateForBooking": "2025-01-04",
        "timeForBooking": "14:30"
      }
      ```

- `DELETE /deleteBooking?/:id`  
  - **Description**: Delete a booking by `id`.
    **Request (Example)**:
      ```
      
       http://localhost:7000/api/booking/deleteBooking/67752342427ad2f3fe7ca4b3
      
      ```

- `GET /available-slots`  
  - **Description**: Fetch available time slots for a specific date.  
  - **Query Parameters**:  
    - `date`: The date for which to check availability.
    **Request (Example)**:
    ```
     
    http://localhost:7000/api/booking/available-slots?date=2025-01-04
      
     ```

### Usage  
To interact with the backend API, replace `http://localhost:7000` or any relevant URL in the `.env` configuration files for local or production environments.  

   
### Frontend  

DineDash is a responsive restaurant table booking system with real-time slot availability and reservation management. Built using Next.js and Tailwind CSS.  

## Live Demo  
- **Frontend**: [https://dinedash.chinmayh.me](https://dinedash.chinmayh.me)  


1. Clone the repository and navigate to the `frontend` folder:  
   ```bash  
   cd frontend
   ```
2. Install dependencies:
  ```bash
  npm install
  ```
3. Create a ```.env``` file in the ```frontend``` folder with the following content:
  ```env
  NEXT_PUBLIC_API_BASE_URL=http://localhost:7000
  ```
4. Start the development server:
  ```bash
  npm run dev  
  ```
5. Frontend is available at ```http://localhost:3000``` or your hosted domain.


## Features  

- **Booking Form**: Input date, time, number of guests, and contact details.  
- **Availability Display**: Only available time slots are shown (fetched from the backend in real-time).  
- **Booking Summary**: Displays confirmation details after a successful booking.  
- **Invoice Generation**: After a successful booking, users can download or print the invoice in PDF format.  
- **Responsive Design**: Optimized for both desktop and mobile devices.  

## Hosting  

The application is live and hosted on:  

- **Frontend**: [https://dinedash.chinmayh.me/](https://dinedash.chinmayh.me/)  
- **Backend API**: [https://api.chinmayh.me/](https://api.chinmayh.me/)  

The backend server is hosted on an Ubuntu VPS using **NGINX** as a reverse proxy.  





