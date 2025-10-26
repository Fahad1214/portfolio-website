const GithubCommitChart = () => {
  return (
    <section className=" max-w-7xl mx-auto py-10 lg:py-20 px-5">
      <div className="px-5 text-center">
        <h3 className="text-xs font-semibold sm:text-sm text-black font-canon tracking-wider">
          Github
        </h3>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          My Commit Map
        </h2>
      </div>
      <img
        src="http://ghchart.rshah.org/AHamza786"
        alt="AHamza786's Github chart"
        className="w-full bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-5 mt-5 sm:mt-10 rounded-xl"
      />
    </section>
  );
};

export default GithubCommitChart;
