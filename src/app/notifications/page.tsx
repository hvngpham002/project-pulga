import { IconBell, IconCheck, IconExclamationCircle, IconInfoCircle, IconTrendingUp } from "@tabler/icons-react";

const notifications = [
  {
    id: 1,
    type: "match",
    icon: IconTrendingUp,
    title: "Liverpool FC vs Manchester United",
    message: "Match starting in 15 minutes",
    time: "2 minutes ago",
    read: false,
    priority: "high"
  },
  {
    id: 2,
    type: "alert",
    icon: IconExclamationCircle,
    title: "Goal Alert",
    message: "Cristiano Ronaldo scored! Al Nassr 1-0 Al Hilal",
    time: "5 minutes ago",
    read: false,
    priority: "medium"
  },
  {
    id: 3,
    type: "info",
    icon: IconInfoCircle,
    title: "Weekly Report Ready",
    message: "Your Premier League analytics report for this week is ready to view",
    time: "1 hour ago",
    read: true,
    priority: "low"
  },
  {
    id: 4,
    type: "match",
    icon: IconTrendingUp,
    title: "Betting Opportunity",
    message: "High probability bet detected: Arsenal vs Chelsea Over 2.5 goals",
    time: "2 hours ago",
    read: true,
    priority: "high"
  },
  {
    id: 5,
    type: "info",
    icon: IconInfoCircle,
    title: "System Update",
    message: "PROJEKT PULGA has been updated with new features",
    time: "1 day ago",
    read: true,
    priority: "low"
  }
];

export default function NotificationsPage() {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
                <p className="text-muted-foreground">
                  Stay updated with live matches, alerts, and system updates
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {unreadCount} unread
                </span>
                <button className="px-4 py-2 text-sm border border-input rounded-md hover:bg-accent">
                  Mark all as read
                </button>
              </div>
            </div>
          </div>

          <div className="px-4 lg:px-6">
            <div className="max-w-4xl space-y-6">
              {/* Notification Settings */}
              <div className="rounded-lg border bg-card p-6">
                <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Match Alerts</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <p className="text-xs text-muted-foreground">Get notified about live matches</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Goal Alerts</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <p className="text-xs text-muted-foreground">Real-time goal notifications</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Betting Tips</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <p className="text-xs text-muted-foreground">High probability betting opportunities</p>
                  </div>
                </div>
              </div>

              {/* Notifications List */}
              <div className="rounded-lg border bg-card">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold">Recent Notifications</h2>
                </div>
                <div className="divide-y">
                  {notifications.map((notification) => {
                    const IconComponent = notification.icon;
                    return (
                      <div
                        key={notification.id}
                        className={`p-4 flex items-start gap-4 hover:bg-accent/50 transition-colors ${
                          !notification.read ? 'bg-blue-50/50 dark:bg-blue-950/20' : ''
                        }`}
                      >
                        <div className={`flex-shrink-0 p-2 rounded-full ${
                          notification.priority === 'high' 
                            ? 'bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400'
                            : notification.priority === 'medium'
                            ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-400'
                            : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                        }`}>
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className={`text-sm font-medium ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {notification.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground">
                                {notification.time}
                              </span>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {notification.message}
                          </p>
                        </div>
                        <button className="flex-shrink-0 p-1 text-muted-foreground hover:text-foreground">
                          <IconCheck className="h-4 w-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="rounded-lg border bg-card p-6">
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    <IconBell className="inline h-4 w-4 mr-2" />
                    Test Notifications
                  </button>
                  <button className="px-4 py-2 text-sm border border-input rounded-md hover:bg-accent">
                    Clear All
                  </button>
                  <button className="px-4 py-2 text-sm border border-input rounded-md hover:bg-accent">
                    Export History
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}