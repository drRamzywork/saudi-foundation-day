const Loader = ({ loading }) => (

  <div className={`loader-container ${loading ? 'visible' : 'hidden'}`} style={{ opacity: loading ? 1 : 0 }}>
    <div className="img_container">
      <img src="/assets/imgs/sss.png" alt="loader" />
    </div>

  </div>
);

export default Loader;
