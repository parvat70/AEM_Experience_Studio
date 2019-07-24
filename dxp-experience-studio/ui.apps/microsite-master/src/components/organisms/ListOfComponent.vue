
<script>
import AppLogo from "../atoms/AppLogo";
import HorizontalNav from "../molecules/HorizontalNav";
import HomePageBanner from "../molecules/HomePageBanner";
import gradientBanner from "../molecules/gradientBanner";
import CustomInput from "../molecules/CustomInput";
import FullPageBanner from "../molecules/FullPageBanner";
import SliderBanner from "../molecules/SliderBanner.vue";
export default {
  name: "ListOfComponent",
  render(createElement) {
    return (
      <div>
        <CustomInput />
        <FullPageBanner />
        <SliderBanner />
      </div>
    );
  },
  data() {
    return {
      links: [
        {
          path: "/",
          label: "Test"
        },
        {
          path: "/about",
          label: "About"
        },
        {
          path: "/test",
          label: "Test"
        },
        {
          path: "/organisms",
          label: "Organisms"
        }
      ]
    };
  }
};
</script>