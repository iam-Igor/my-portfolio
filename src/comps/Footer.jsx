const Footer = () => {
  const now = new Date();

  return (
    <>
      <div className="d-flex align-items-center flex-column pb-5">
        <h1 style={{ color: "#fa9143" }}>Get in touch with me</h1>
        <a href="mailto:igorgarofalo@gmail.com" style={{ color: "white" }}>
          igorgarofalo@gmail.com
        </a>
      </div>
      <div className="d-flex flex-column w-75  flex-md-row align-items-center justify-content-around mt-5">
        <h1>{"<YG/>"}</h1>
        <h6 className="my-3 my-md-0">
          Cosenza, Italy <i className="bi bi-geo-alt"></i>
        </h6>
        <div>
          <a>+39 3487998781</a>
          <div className="d-flex justify-content-between">
            <a href="https://github.com/iam-Igor">
              <i className="bi bi-github me-2 text-white"></i>
            </a>
            <a href="https://www.linkedin.com/in/ygor-garofalodev/">
              <i className="bi bi-linkedin me-2 text-white"></i>
            </a>
            <a href="https://www.instagram.com/igorgarofalo/">
              <i className="bi bi-instagram text-white"></i>
            </a>
            <a href="https://discordapp.com/users/829465239455006730">
              <i className="bi bi-discord text-white"></i>
            </a>
          </div>
        </div>
      </div>
      <hr className="w-100"></hr>
      <p>Ygor Garofalo - {now.getFullYear()}</p>
    </>
  );
};

export { Footer };
