import { createContext, useContext, useEffect, useMemo, useState } from "react";

import {
  calculateBMI,
  getBMICategory,
  calculateBMR,
  calculateCalories,
  calculateWater,
  calculateIdealWeight,
  calculateHealthScore,
} from "../utils/healthCalculations.js";

import {
  loadUserData,
  saveUserData,
} from "../services/localStorageServices.js";

const HealthContext = createContext();

const defaultProfile = {
  name: "Bhavya",
  age: 20,
  gender: "Female",
  height: 160.02,
  weight: 67.50,
  activity: "moderate",
  goal: "lose",
};

export function HealthProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    return loadUserData() || defaultProfile;
  });

  useEffect(() => {
    saveUserData(profile);
  }, [profile]);

  const calculations = useMemo(() => {
    const bmi = calculateBMI(profile.weight, profile.height);

    const bmiCategory = getBMICategory(bmi);

    const bmr = calculateBMR({
      gender: profile.gender,
      weight: profile.weight,
      height: profile.height,
      age: profile.age,
    });

    const calories = calculateCalories(
      bmr,
      profile.activity
    );

    const water = calculateWater(profile.weight);

    const idealWeight = calculateIdealWeight(
      profile.height
    );

    const healthScore = calculateHealthScore({
      bmi,
      water,
      calories,
    });

    return {
      bmi,
      bmiCategory,
      bmr,
      calories,
      water,
      idealWeight,
      healthScore,
    };
  }, [profile]);

  function updateProfile(updates) {
    setProfile((prev) => ({
      ...prev,
      ...updates,
    }));
  }

  function resetProfile() {
    setProfile(defaultProfile);
  }

  return (
    <HealthContext.Provider
      value={{
        profile,
        updateProfile,
        resetProfile,
        ...calculations,
      }}
    >
      {children}
    </HealthContext.Provider>
  );
}

export function useHealth() {
  const context = useContext(HealthContext);

  if (!context) {
    throw new Error(
      "useHealth must be used inside HealthProvider"
    );
  }

  return context;
}