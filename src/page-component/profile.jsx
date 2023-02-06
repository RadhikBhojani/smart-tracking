import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
//create reactJS auth0 profile setting with all api call and function for profile setting

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { getAccessTokenSilently, user, isLoading } = useAuth0();
  useEffect(() => {
    if (!isLoading) {
      setUserData(user);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        //define loader as center of page
        <div className="row">
          <div className="col-md-12">
            <div class="d-flex justify-content-center mx-5 mt-3 mb-5">
              <div class="spinner-grow text-info align-self-center loader-lg"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Profile</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-md-5 pr-1">
                      <div className="form-group">
                        <label>Company (disabled)</label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          placeholder="Company"
                          value={user.company}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 px-1">
                      <div className="form-group">
                        <label>Username</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          value={
                            userData && userData.nickname
                              ? userData.nickname
                              : ""
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-4 pl-1">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          disabled={true}
                          placeholder="Email"
                          value={
                            userData && userData.email ? userData.email : ""
                          }
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
