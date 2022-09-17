import Alert from "components/alert";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import { connect } from "react-redux";
const FullWidthlayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <Alert />
    </div>
  );
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(FullWidthlayout);
