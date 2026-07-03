import ProfileForm from "../components/profile/ProfileForm.jsx";

function Profile() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Health Profile
        </h1>

        <p className="mt-2 text-slate-500">
          Update your personal information to receive
          accurate health insights and recommendations.
        </p>
      </div>

      <ProfileForm />
    </div>
  );
}

export default Profile;