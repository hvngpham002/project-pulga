import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AccountPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <h1 className="text-3xl font-bold tracking-tight">Account</h1>
            <p className="text-muted-foreground">
              Manage your profile and account settings
            </p>
          </div>

          <div className="px-4 lg:px-6">
            <div className="max-w-4xl space-y-6">
              {/* Profile Section */}
              <div className="rounded-lg border bg-card p-6">
                <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center gap-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/avatars/vhpham.png" alt="Profile" />
                      <AvatarFallback className="text-lg">VH</AvatarFallback>
                    </Avatar>
                    <button className="text-sm text-blue-600 hover:text-blue-700">
                      Change Photo
                    </button>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Full Name</label>
                        <input
                          readOnly
                          type="text"
                          value="Pham Viet Hung"
                          className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <input
                          readOnly
                          type="email"
                          value="hung.v.pham002@gmail.com"
                          className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Role</label>
                        <input
                          type="text"
                          value="Administrator"
                          disabled
                          className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-muted"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Time Zone</label>
                        <select className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background">
                          <option>UTC+7 (Ho Chi Minh)</option>
                          <option>UTC+0 (London)</option>
                          <option>UTC-5 (New York)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Section */}
              <div className="rounded-lg border bg-card p-6">
                <h2 className="text-xl font-semibold mb-4">Security</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="font-medium">Password</h3>
                      <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                    </div>
                    <button className="px-4 py-2 text-sm border border-input rounded-md hover:bg-accent">
                      Change Password
                    </button>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="font-medium">Two-Factor Authentication</h3>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                    </div>
                    <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Enable 2FA
                    </button>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="font-medium">Active Sessions</h3>
                      <p className="text-sm text-muted-foreground">Manage your active sessions</p>
                    </div>
                    <button className="px-4 py-2 text-sm border border-input rounded-md hover:bg-accent">
                      View Sessions
                    </button>
                  </div>
                </div>
              </div>

              {/* Preferences Section */}
              <div className="rounded-lg border bg-card p-6">
                <h2 className="text-xl font-semibold mb-4">Preferences</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Email Notifications</h3>
                      <p className="text-sm text-muted-foreground">Receive email updates</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Match Alerts</h3>
                      <p className="text-sm text-muted-foreground">Get notified about live matches</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Data Export</h3>
                      <p className="text-sm text-muted-foreground">Download your account data</p>
                    </div>
                    <button className="px-4 py-2 text-sm border border-input rounded-md hover:bg-accent">
                      Export Data
                    </button>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end gap-4">
                <button className="px-6 py-2 text-sm border border-input rounded-md hover:bg-accent">
                  Cancel
                </button>
                <button className="px-6 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}