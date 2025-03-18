import { User } from 'lucide-react';
import { useUser } from '../../context/UserContext';

export function UserProfile() {
  const { user } = useUser();

  return (
    <div className="flex items-center gap-3">
      {user?.profilePic ? (
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      ) : (
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <User size={20} className="text-gray-500" />
        </div>
      )}
      <div>
        <p className="text-sm font-medium">
          {user ? `Welcome ${user.name}` : 'Welcome'}
        </p>
      </div>
    </div>
  );
}