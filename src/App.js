import BannerIssue from 'Components/Banner/BannerIssue/BannerIssue';
import BannerStory from 'Components/Banner/BannerStory/bannerStory';
import Banner from 'Components/Banner/BannerTop/Banner';
import BannerVideo from 'Components/Banner/BannerVideo/BannerVideo';
import Foodter from 'Components/foodter/Foodter';
import ListProduct from 'Components/ListProduct/ListProduct';
import Navbar from 'Components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <ListProduct />
      <BannerStory />
      <BannerIssue />
      <BannerVideo />
      <Foodter />

    </>
  );
}

export default App;
