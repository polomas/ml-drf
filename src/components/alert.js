import { Fragment } from "react";
import { connect } from "react-redux";
import { SpeakerphoneIcon } from "heroicons/react/solid";

function Alert({ alert }) {
  const displayAlert = () => {
    if (alert !== null) {
      return (
        <div className="fixed z-50 bottom-0 inset-x-0 pb-2 sm:pb-5">
          <div className="max-w-7xl max-auto px-2 sm:px-6 lg:px-8">
            <div
              className={`p-2 rounded-lg bg-${alert.alertType}-600 shadow-lg sm:p-3 `}
            >
              <div className="fles items-center justify-between flex-wrap ">
                <div className="w-0 flex-1 flex items-center">
                  <span className={`p-2 rounded-lg bg-${alert.alertType}-600`}>
                    <SpeakerphoneIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <p className="ml-3 font-medium text-white">
                    <span className="md:hidden text-white">{alert.msg}</span>
                    <span className="hidden md:inline text-white">
                      {alert.msg}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Fragment></Fragment>;
    }
  };
  return <Fragment>{displayAlert()}</Fragment>;
}

const mapStateToProps = (state) => ({
  alert: state.alert.alert,
});
export default connect(mapStateToProps)(Alert);
