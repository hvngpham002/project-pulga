export default function TeamsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <h1 className="text-3xl font-bold tracking-tight">Teams</h1>
            <p className="text-muted-foreground">
              Manage and analyze football teams and their performance
            </p>
          </div>
          <div className="px-4 lg:px-6">
            <div className="rounded-lg border bg-card p-8 text-center">
              <h2 className="text-xl font-semibold mb-2">Teams Dashboard</h2>
              <p className="text-muted-foreground">
                Team management and analysis features coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}