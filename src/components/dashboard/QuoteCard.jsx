const quotes = [
    "Small healthy habits create extraordinary results.",
    "Your body deserves the best care.",
    "Consistency beats motivation.",
    "Healthy today, stronger tomorrow.",
    "A healthy outside starts from the inside.",
    "If you keep good food in your fridge, you will eat good food.",
    "Physical fitness is not only one of the most important keys to a healthy body, it is the basic of dynamic and creative intellectual activity.",
    "There is no health without mental health; mental health is too important to be left to the professionals alone, and mental health is everyone’s business.",
    "Those who have no time for healthy eating will sooner or later have to find the time for illness.",
    "What most people don’t realize is that food is not just calories: It’s information. It actually contains messages that communicate to every cell in the body.",
    "Sorry, there’s no magic bullet. You gotta eat healthy and live healthy to be healthy and look healthy. End of story.",
    "Good health is not something we can buy. However, it can be an extremely valuable savings account.",
    "Our bodies are our gardens – our wills are our gardeners.",
    "Self-care is not selfish. You cannot serve from an empty vessel.",
    "The key to a healthy life is having a healthy mind.",
    "The doctor of the future will give no medicine, but will instruct his patients in care of the human frame, in diet, and in the cause and prevention of disease.",
    "I have chosen to be happy because it is good for my health.",
    "Some things you have to do every day. Eating seven apples on Saturday night instead of one a day just isn’t going to get the job done.",
    "A sad soul can be just as lethal as a germ.",
    "Keeping your body healthy is an expression of gratitude to the whole cosmos — the trees, the clouds, everything.",
    "So many people spend their health gaining wealth, and then have to spend their wealth to regain their health.",
    "If you know the art of deep breathing, you have the strength, wisdom and courage of ten tigers.",
    "It’s not until you get tired that you see how strong you really are.",
    "People who laugh actually live longer than those who don’t laugh. Few persons realize that health actually varies according to the amount of laughter",
    "To keep the body in good health is a duty…otherwise we shall not be able to keep the mind strong and clear.",
    "You can’t control what goes on outside, but you can control what goes on inside.",
    "The ability to be in the present moment is a major component of mental wellness.",
    "While weight loss is important, what's more important is the quality of food you put in your body - food is information that quickly changes your metabolism and genes.",
    "Take care of your body, it’s the only place you have to live.",
    "Wellness is the complete integration of body, mind, and spirit – the realization that everything we do, think, feel, and believe has an effect on our state of well-being.",
    "You can’t stop the waves, but you can learn to surf.",
    "No matter how old you are, no matter how much you weigh, you can still control the health of your body.",

];

function QuoteCard() {
    const quote =
        quotes[new Date().getDate() % quotes.length];

    return (
        <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                    Daily Motivation
                </p>

                <h2 className="mt-6 text-2xl font-bold text-slate-800 dark:text-white">
                    "{quote}"
                </h2>
            </div>

            <div className="mt-8 text-sm text-slate-500">
                VitalSync Wellness
            </div>
        </div>
    );
}

export default QuoteCard;