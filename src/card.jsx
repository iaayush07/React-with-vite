// eslint-disable-next-line react/prop-types
export default function Card({ title, detail, logo, className  }) {
    return (
      <div className={`card ${className}`} >
        <div>
          <div className="card-title">{title}</div>
          <p className="card-detail">{detail}</p>
        </div>
        <div className="card-logo">
            <div>
              <img src={logo} alt="logo" />
            </div>
        </div>
      </div>
    );
  }