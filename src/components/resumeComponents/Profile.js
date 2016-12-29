import React from 'react';

const Profile = props => {
    const profileObj = props.profileData;
    return  <div>
                  <div className="profileImg"><img role="presentation" className="img-circle center-block" src={profileObj.picture} width="200" /></div>
                  <h1 className="text-center">{profileObj.name}</h1>
                  <h2 className="text-center">{profileObj.label}</h2>
                  <div className="divider"></div>
                  <ul className="list-unstyled contact-links text-center">
                    <li><i className="fa fa-lg fa-location-arrow"></i>{profileObj.location.city} {/*,{profileObj.location.region}*/}, {profileObj.location.countryCode}</li>
                    <li><i className="fa fa-lg fa-envelope"></i><a href={"mailto:"+profileObj.email}>{profileObj.email}</a></li>
                  </ul>
                  <div className="divider"></div>
                  <ul className="profileLinks list-inline text-center">
                    {/*<li><a className="fa fa-twitter fa-2x" href={'https://twitter.com/'+profileObj.profiles[0].username}></a></li>*/}
                    <li><a className="fa fa-github fa-2x" href={'https://github.com/'+profileObj.profiles[0].username} target="_blank"></a></li>
                  </ul>
                  <div className="divider"></div>
                  <p>I built this page with <a href="https://facebook.github.io/react/" target="_blank">React</a> components and a <a href="https://jsonresume.org/schema/" target="_blank">JSON Resume Schema</a>. The full source code can be found in <a href="https://github.com/Suryanarayanamurthy/Suryanarayanamurthy.github.io" target="_blank">my Github repo</a>.</p>
                  <div className="divider"></div>
                  <p>Download resume:</p>
                  <li><a href="resume/Hanumantha-Vajjhala-CV-Dec-2016.json" download>in JSON format</a></li>
                  <li><a href="resume/Hanumantha-Vajjhala-CV-Dec-2016.pdf" download>in pdf format</a></li>
            </div>
};

export default Profile;
