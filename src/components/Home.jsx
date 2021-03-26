import Posts from "./Posts";
import { Grid } from "@material-ui/core";

const Home = ({ posts }) => {
  return (
    <div>
      <Grid className="container">
        <Posts posts={posts} />
      </Grid>
    </div>
  );
};

export default Home;
