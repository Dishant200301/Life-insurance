import LocationEmailInfo from "./LocationEmailInfo";
import SocialMediaIcons from "./SocialMediaIcons";
import LanguageDropdown from "./LanguageDropdown";

const Topbar = () => (
  <div className="container-fluid topbar px-0 px-lg-4 bg-light py-2 d-none d-lg-block">
    <div className="container">
      <div className="row gx-0 align-items-center">
        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
          <LocationEmailInfo />
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div className="d-flex justify-content-end">
            <SocialMediaIcons />
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Topbar;
