import { useRouter } from "vue-router";

export const useNavigation = () => {
  const router = useRouter();

  const navToHome = () => {
    router.push("/");
  };

  const navToAbout = () => {
    router.push("/about");
  };

  const navToTreatments = () => {
    router.push("/treatments");
  };

  const navToSpecials = () => {
    router.push("/specials");
  };

  const navToContact = () => {
    router.push("/contact");
  };

  return {
    navToHome,
    navToAbout,
    navToTreatments,
    navToSpecials,
    navToContact,
  };
};
