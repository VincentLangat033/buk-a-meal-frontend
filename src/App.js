
import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Allmeals from './components/Allmeals';
import Allmealsdetails from './components/Allmealsdetails';
import NewMealForm from './components/NewMealForm';
import Meal from './components/Meals/meal'
import MealDetails from './components/Meals/allmeals';
import MainMenu from './components/MainMenu';
import MondayMeal from './components/Meals/MondayMeal';
import TuesdayMeal from './components/Meals/TuesdayMeal';
import WednesdayMeal from './components/Meals/WednesdayMeal';
import ThursdayMeal from './components/Meals/ThursdayMeal';
import FridayMeal from './components/Meals/FridayMeal';
import SaturdayMeal from './components/Meals/SaturdayMeal';
import SundayMeal from './components/Meals/SundayMeal';
function App() {
  return (
    <div>

    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login /> } />
        <Route path="/register" element={<Register /> } />
        <Route path="/admin" element={<Admin /> } />
        <Route path="/allmeals/" element={<Allmeals /> } />
        <Route path="/newmealform/" element={<NewMealForm /> } />
        <Route path="/allmealsdetails/:mealId" element={<Allmealsdetails /> } />
        <Route path="/meals" element={<Meal /> } />
        <Route path="/meal/:mealId" element={<MealDetails /> } />
        <Route path="/dashboard" element={<MainMenu /> } />
        <Route path="/mondaymenu" element={<MondayMeal /> } />
        <Route path="/tuesdaymenu" element={<TuesdayMeal /> } />
        <Route path="/wednesdaymenu" element={<WednesdayMeal /> } />
        <Route path="/thursdaymenu" element={<ThursdayMeal /> } />
        <Route path="/fridaymenu" element={<FridayMeal /> } />
        <Route path="/saturdaymenu" element={<SaturdayMeal /> } />
        <Route path="/sundaymenu" element={<SundayMeal /> } />

      
        
    </Routes>
</Router>
    </div>

   
  );
}

export default App;
