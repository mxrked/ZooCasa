// This script is used to store the Helmet Async Meta Tags

import { Helmet } from "react-helmet-async";

const HelmetAsyncMain = () => {
  return (
    <Helmet>
      <title>ZooCasa | A Family Zoo Adventure.</title>
      <meta
        name="keywords"
        content="zoo, family zoo, public zoo, safari, zoo adventure, animals, zoocasa, casa, felines, feline, lions, lion, tigers, tiger, primates, primate, gorillas, gorilla, monkeys, monkey, aquatics, aquatic, fishes, fish, turtles, turtle"
      />
      <meta
        name="description"
        content="ZooCasa is the place where your safari adventure begins! Come with friends or family to experience the true beauty of the world's animals."
      />
      <meta property="og:title" content="ZooCasa | A Family Zoo Adventure." />
      <meta
        property="og:description"
        content="ZooCasa is the place where your safari adventure begins! Come with friends or family to experience the true beauty of the world's animals."
      />
      <meta
        property="og:url"
        content="http://basicallyeasy.com/react-projects/zoocasa"
      />
      <meta
        property="og:site_name"
        content="ZooCasa | A Family Zoo Adventure."
      />
    </Helmet>
  );
};

export default HelmetAsyncMain;
