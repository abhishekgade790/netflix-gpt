import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { updateUser } from '../store/userSlice';
import { toast } from 'react-hot-toast';

const UpdateProfile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [previewURL, setPreviewURL] = useState(user?.photoURL || '');
  const [error, setError] = useState('');
  const [updating, setUpdating] = useState(false);

  if (!user) return null;

  const toggleForm = () => setShowForm((prev) => !prev);

  const handlePhotoChange = (url) => {
    setPhotoURL(url);
    try {
      new URL(url);
      setError('');
      setPreviewURL(url);
    } catch {
      setError('Invalid URL');
      setPreviewURL('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (updating) return;

    if (name === user.displayName && photoURL === user.photoURL) {
      toast('No changes detected');
      return;
    }

    try {
      setUpdating(true);
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL,
      });

      dispatch(updateUser({ ...user, displayName: name, photoURL }));
      toast.success('Profile updated successfully!');
      setShowForm(false);
    } catch (err) {
      console.error('Update error:', err);
      toast.error('Failed to update profile');
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="p-4 md:p-8 text-white w-full flex justify-center">
  <div className="w-full max-w-md">
    <button
      onClick={toggleForm}
      className="bg-red-600 hover:bg-red-700 text-sm md:text-base px-4 py-2 rounded-md font-semibold cursor-pointer"
    >
      {showForm ? 'Cancel' : 'Update Profile'}
    </button>

    {showForm && (
      <form
        onSubmit={handleSubmit}
        className="mt-4 space-y-4 bg-black/50 border border-gray-700 p-6 rounded-lg"
      >
        <div>
          <label className="block mb-1 text-gray-300">Display Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-gray-900 text-white rounded outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-300">Profile Photo URL</label>
          <input
            value={photoURL}
            onChange={(e) => handlePhotoChange(e.target.value)}
            className="w-full px-4 py-2 bg-gray-900 text-white rounded outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          {previewURL && (
            <div className="mt-4 flex justify-center">
              <img src={previewURL} alt="Preview" className="h-24 w-24 rounded-full" />
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={updating}
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-md font-semibold disabled:opacity-60 cursor-pointer"
        >
          {updating ? 'Updating...' : 'Save Changes'}
        </button>
      </form>
    )}
  </div>
</div>

  );
};

export default UpdateProfile;
