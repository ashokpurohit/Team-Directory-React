import React from "react";

const TeamDirectory = ({ title, teamDirectory }) => {
  return (
    <>
      <div className="row px-5 py-3">
        <h4 className="m-0">{title}</h4>
        <div className="content row">
          {teamDirectory &&
            teamDirectory.map((td, i) => (
              <div className="col-sm-6 col-md-4 col-3 p-2" key={i}>
                <div className="card p-1">
                  <div className="row align-items-center">
                    <div className="col-2">
                      <img src={td.img} alt="Avatar" className="avatar" />
                    </div>
                    <div className="col-8">
                      <h5>
                        {td.first_name} {td.last_name}
                      </h5>
                      <p className="m-0">{td.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TeamDirectory;
