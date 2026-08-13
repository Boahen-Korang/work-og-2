const navItems = ['Sports', 'Games', 'Live Betting', 'Scheduled Virtuals', 'Jackpot', 'Livescore', 'Results', 'Promotions', 'Sporty Loyalty', 'App']

const sideLeagues = [
  { label: 'Top Leagues', count: 291 },
  { label: 'International', count: 7 },
  { label: 'International Clubs', count: 96 },
  { label: 'England', count: 90 },
  { label: 'Spain', count: 33 },
  { label: 'Germany', count: 58 },
  { label: 'Italy', count: 36 },
  { label: 'France', count: 28 },
]

const countryLeagues = [
  { label: 'Argentina', count: 88 },
  { label: 'Armenia', count: 1 },
  { label: 'Australia', count: 37 },
  { label: 'Austria', count: 16 },
  { label: 'Austria Amateur', count: 11 },
  { label: 'Belarus', count: 7 },
  { label: 'Belgium', count: 15 },
  { label: 'Bolivia', count: 8 },
  { label: 'Brazil', count: 63 },
  { label: 'Bulgaria', count: 9 },
  { label: 'Canada', count: 4 },
  { label: 'Chile', count: 17 },
  { label: 'China', count: 12 },
  { label: 'Colombia', count: 10 },
  { label: 'Costa Rica', count: 4 },
  { label: 'Croatia', count: 5 },
  { label: 'Cyprus', count: 1 },
  { label: 'Czechia', count: 17 },
  { label: 'Denmark', count: 20 },
  { label: 'Ecuador', count: 11 },
]

const matchRows = [
  {
    matchId: 'sr:match:71805786',
    league: 'International Clubs',
    tournament: 'CONMEBOL Libertadores',
    time: '22:00',
    home: 'CA Platense',
    away: 'Coquimbo Unido',
    odd1: '2.22',
    oddX: '2.87',
    odd2: '4.15',
    goal1: '1.5',
    goal2: '2.15',
  },
  {
    matchId: 'sr:match:71805788',
    league: 'International Clubs',
    tournament: 'CONMEBOL Libertadores',
    time: '22:00',
    home: 'SE Palmeiras SP',
    away: 'Cerro Porteño',
    odd1: '1.28',
    oddX: '5.43',
    odd2: '12.97',
    goal1: '2.5',
    goal2: '1.76',
  },
  {
    matchId: 'sr:match:71805789',
    league: 'Brazil Gaucho',
    tournament: 'Brazilian Serie A',
    time: '00:30',
    home: 'Cruzeiro EC MG',
    away: 'CR Flamengo RJ',
    odd1: '2.98',
    oddX: '3.12',
    odd2: '2.61',
    goal1: '2',
    goal2: '1.76',
  },
  {
    matchId: 'sr:match:71805790',
    league: 'Europe',
    tournament: 'Champions League',
    time: '17:00',
    home: 'Arsenal',
    away: 'Inter Milan',
    odd1: '1.75',
    oddX: '3.35',
    odd2: '4.20',
    goal1: '2.5',
    goal2: '2.04',
  },
]

function App() {
  function handleRegister() {
    const mobileInput = document.querySelector('.login-panel input[aria-label="Mobile Number"]');
    const passInput = document.querySelector('.login-panel input[aria-label="Password"]');
    const mobile = mobileInput ? mobileInput.value.trim() : '';
    const pass = passInput ? passInput.value.trim() : '';
    if (!mobile || !pass) {
      alert('Please enter mobile number and password to register.');
      return;
    }

    // Simulate account creation (replace with real API call later)
    // After successful signup, redirect to the jackpot page
    window.location.href = '/gh/jackpot';
  }
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="topbar-inner wrap">
          <div className="top-icons" aria-label="social links">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="login-panel">
            <div className="input-inline">
              <span className="country-code">+233</span>
              <input placeholder="Mobile Number" aria-label="Mobile Number" />
            </div>
            <div className="input-inline password-wrap">
              <input type="password" placeholder="Password" aria-label="Password" />
            </div>
            <button className="btn login">Log In</button>
            <button className="btn register" onClick={handleRegister}>Register</button>
            <label className="remember">
              <input type="checkbox" defaultChecked />
              <span>Keep me signed in</span>
            </label>
            <a href="#" className="link">Forgot Password?</a>
            <span className="link muted">Deactivate/Reactivate</span>
          </div>
        </div>
      </header>

      <div className="brandbar wrap">
          <div className="brand-wrap">
          <div className="logo-mark">ExampleBet</div>
          <div className="flag" aria-label="Ghana flag">gh</div>
        </div>
        <div className="right-strip">
          <span className="timezone"> </span>
          <span className="gmt">GMT+00:00</span>
        </div>
      </div>

      <nav className="main-nav wrap" aria-label="Main navigation">
        {navItems.map((item, index) => (
          <a href="#" key={item} className={index === 0 ? 'active' : ''}>{item}</a>
        ))}
      </nav>

      <nav className="breadcrumb wrap" aria-label="Breadcrumb">
        <a href="#">Home</a>
        <a href="#">Football</a>
        <a href="#">vFootball</a>
        <a href="#">Basketball</a>
        <a href="#">Tennis</a>
        <span>More Sports</span>
      </nav>

      <div className="sports-layout wrap">
        <aside className="left-sidebar">
          <div className="tab-row">
            <button className="tab active">Today Games</button>
            <button className="tab">Upcoming Games</button>
            <button className="tab">Outrights</button>
          </div>

          <div className="filter-row">
            <div className="label">Filter by start time</div>
            <div className="time-filter">
              <span>1 h</span>
              <span className="selected">3 h</span>
              <span>6 h</span>
              <span>24 h</span>
              <span>All</span>
            </div>
          </div>

          <div className="odds-filter">
            <span>Odds Filter</span>
            <span className="filter-icon"></span>
          </div>

          <div className="league-panel">
            <div className="league-list">
              {sideLeagues.map((league, idx) => (
                <div key={league.label} className={`league-item ${idx === 2 ? 'selected' : ''}`}>
                  <span>{league.label}</span>
                  <strong>{league.count}</strong>
                </div>
              ))}
            </div>

            <div className="list-header">A-Z</div>
            <div className="league-list alt">
              {countryLeagues.map((league) => (
                <div key={league.label} className="league-item">
                  <span>{league.label}</span>
                  <strong>{league.count}</strong>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="matches-area">
          <div className="matches-toolbar">
            <div className="toolbar-left">
              <button className="pill active">Top Leagues</button>
              <button className="pill">Boosted Odds</button>
              <button className="pill">Live</button>
            </div>
            <div className="toolbar-right">
              <button className="ghost">Filter</button>
              <button className="ghost">Sort by</button>
            </div>
          </div>

          <div className="match-list">
            {matchRows.map((match) => (
              <article className="match-card" key={match.matchId}>
                <div className="match-head">
                  <span className="day">{match.league}</span>
                  <span className="mid">{match.tournament}</span>
                  <span className="stamp">{match.time}</span>
                </div>

                <div className="match-body">
                  <div className="teams-block">
                    <div className="team-row">
                      <span className="team-name">{match.home}</span>
                    </div>
                    <div className="team-row">
                      <span className="team-name">{match.away}</span>
                    </div>
                  </div>

                  <div className="odds-block">
                    <div className="odd-col">
                      <span className="label">1</span>
                      <strong>{match.odd1}</strong>
                    </div>
                    <div className="odd-col">
                      <span className="label">X</span>
                      <strong>{match.oddX}</strong>
                    </div>
                    <div className="odd-col">
                      <span className="label">2</span>
                      <strong>{match.odd2}</strong>
                    </div>
                    <div className="odd-col market">
                      <span className="label">Goal</span>
                      <strong>{match.goal1}</strong>
                    </div>
                    <div className="odd-col market">
                      <span className="label">Over</span>
                      <strong>{match.goal2}</strong>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>

        <aside className="betslip-panel">
          <div className="betslip-head">
            <button className="slip-tab active">Betslip</button>
            <button className="slip-tab">Cashout</button>
          </div>

          <div className="empty-state">
            <p>To place a bet, click on the odds. Or insert a booking code</p>
            <div className="booking-box">
              <input placeholder="Booking Code" aria-label="Booking code" />
              <button className="btn load">Load</button>
            </div>
            <small>A booking code enables one to transfer a betslip between different devices.</small>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default App
