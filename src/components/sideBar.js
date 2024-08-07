import { faHome, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = ({close}) => {
  return (
    <div className="side-bar-ctn" onClick={close}>
        {/* <div className="sidebar-btn">
        <FontAwesomeIcon icon={faX}/>
        </div> */}
      <a href="/">
        <FontAwesomeIcon icon={faHome} /> Home
      </a>
      <a href="/cart">
        <FontAwesomeIcon icon={faShoppingCart} /> Cart
      </a>
    </div>
  );
};

export default SideBar;
