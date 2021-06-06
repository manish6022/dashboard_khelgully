import { CssBaseline } from "@material-ui/core";
import ProfileCard from "./Components/ProfileCard";
import ProfilePic from "./Components/ProfilePic";

import Data from "./Components/Data/data.json"

function App() {
  return (
    <>
  <ProfileCard name={Data.name} email={Data.email} photoUrl={Data.photoUrl} number={Data.number} played={Data.played} won={Data.won} followers={Data.follower} following={Data.following}/>
    {/* <ProfilePic size='large' alt='abc' photoUrl='https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70' /> */}
    <CssBaseline />
    </>
  );
}

export default App;
