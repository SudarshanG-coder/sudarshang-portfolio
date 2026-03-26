const GithubStats = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gradient-primary">
        GitHub Activity
      </h2>

      <div className="flex flex-col items-center gap-6">
        <img 
          src="https://github-readme-stats.vercel.app/api?username=SudarshanG-coder&show_icons=true&theme=radical"
          alt="GitHub Stats"
        />
        <img 
          src="https://github-readme-streak-stats.herokuapp.com/?user=SudarshanG-coder&theme=radical"
          alt="GitHub Streak"
        />
      </div>
    </section>
  );
};

export default GithubStats;
