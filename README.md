# Recipe Finder with Supabase and MealDB API

This project is a **Recipe Finder** application that allows users to search for recipes by food names. It integrates **Supabase** for authentication and user management and fetches recipe data from the [MealDB API](https://www.themealdb.com/api.php).

---

## Features

- 🔍 **Search Recipes**: Fetch recipes by food name using the MealDB API.  
- 🔐 **Authentication**: User sign-up, login, and OAuth support via Supabase.  
- ❤️ **Favorite Recipes**: Save your favorite recipes for future reference (optional).  
- 📱 **Responsive Design**: Works seamlessly on both desktop and mobile devices.

---

## Tech Stack

- **Frontend**: SvelteKit  
- **Backend**: Supabase  
- **API**: [MealDB API](https://www.themealdb.com/api.php)  
- **Styling**: Tailwind CSS  

---

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/)  
- [Supabase Account](https://supabase.com/)  
- API key from [MealDB](https://www.themealdb.com/api.php) (optional for testing purposes)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/kayigmb/alu_server_project.git
   cd alu_server_project
   ```
2. **Install Dependencies**
   ```bash
   bun install
   ```
3. **Create a Supabase Account**
    - Go to [Supabase](https://supabase.com/) and create an account.
    - Create a new project and navigate to the project settings.
    - Copy the `URL` and `Public Key` from the project settings.
4. **Create a `.env` File**
    - Create a `.env` file in the root directory of the project.
    - Add the following environment variables to the `.env` file:
      ```env
      PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
      PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_PUBLIC_KEY
      ```
5. **Run the Application**
    ```bash
    bun run dev
    ```
# Authors
- [Blair Kayigamba](https://www.github.com/kayigmb)
