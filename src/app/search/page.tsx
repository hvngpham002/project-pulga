export default function SearchPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <h1 className="text-3xl font-bold tracking-tight">Search</h1>
            <p className="text-muted-foreground">
              Search for teams, players, matches, and statistics
            </p>
          </div>
          <div className="px-4 lg:px-6">
            <div className="space-y-6">
              <div className="rounded-lg border bg-card p-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Quick Search</h2>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search teams, players, matches..."
                        className="w-full px-4 py-3 border border-input rounded-md bg-background"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">Popular Teams</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div>Manchester United</div>
                        <div>Liverpool FC</div>
                        <div>Arsenal FC</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">Recent Searches</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div>Premier League</div>
                        <div>Champions League</div>
                        <div>La Liga</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">Trending</h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div>World Cup 2024</div>
                        <div>Transfer News</div>
                        <div>Live Scores</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}