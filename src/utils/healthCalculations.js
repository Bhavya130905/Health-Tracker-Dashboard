// ================================
// BMI
// ================================

export function calculateBMI(weight, height) {
  if (!weight || !height) return 0;

  const heightInMeters = height / 100;

  return Number(
    (weight / (heightInMeters * heightInMeters)).toFixed(1)
  );
}

// ================================
// BMI Category
// ================================

export function getBMICategory(bmi) {
  if (bmi < 18.5)
    return {
      label: "Underweight",
      color: "text-blue-500",
    };

  if (bmi < 25)
    return {
      label: "Normal",
      color: "text-green-500",
    };

  if (bmi < 30)
    return {
      label: "Overweight",
      color: "text-yellow-500",
    };

  return {
    label: "Obese",
    color: "text-red-500",
  };
}

// ================================
// BMR
// Mifflin-St Jeor Equation
// ================================

export function calculateBMR({
  gender,
  weight,
  height,
  age,
}) {
  if (
    !gender ||
    !weight ||
    !height ||
    !age
  )
    return 0;

  if (gender === "male") {
    return Math.round(
      10 * weight +
        6.25 * height -
        5 * age +
        5
    );
  }

  return Math.round(
    10 * weight +
      6.25 * height -
      5 * age -
      161
  );
}

// ================================
// Daily Calories
// ================================

const activityMultiplier = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

export function calculateCalories(
  bmr,
  activity
) {
  if (!bmr || !activity) return 0;

  return Math.round(
    bmr * activityMultiplier[activity]
  );
}

// ================================
// Water Intake
// ================================

export function calculateWater(weight) {
  if (!weight) return 0;

  return Number((weight * 0.035).toFixed(1));
}

// ================================
// Ideal Weight
// Healthy BMI Range
// ================================

export function calculateIdealWeight(
  height
) {
  if (!height) return null;

  const h = height / 100;

  return {
    min: Number(
      (18.5 * h * h).toFixed(1)
    ),
    max: Number(
      (24.9 * h * h).toFixed(1)
    ),
  };
}

// ================================
// Health Score
// Simple scoring algorithm
// ================================

export function calculateHealthScore({
  bmi,
  water,
  calories,
}) {
  let score = 100;

  if (bmi < 18.5 || bmi > 25)
    score -= 20;

  if (water < 2)
    score -= 10;

  if (calories < 1500)
    score -= 10;

  return Math.max(score, 0);
}