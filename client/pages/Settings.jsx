import ProfileSettings from "../components/Settings/ProfileSettings"
import Account from "../components/Settings/Account"
import Preference from "../components/Settings/Preference"
import Notification from "../components/Settings/Notification"
const Settings = () => {
  return (
    <div>

      {/* header */}
      <div>
        <p className="text-2xl font-bold">Settings</p>
        <p className="text-gray-400">Manage your account and applications settings</p>
      </div>

      <ProfileSettings />
      <Account />
       <Preference />
       <Notification />
    </div>
  )
}

export default Settings