import Styles from "./pop-notification.module.scss";

export default function PopNotification({ text, showMoreButton }) {
  return (
    <div
      className={`${Styles.topbar_news} ${Styles.success} alert alert-dismissible fade show rounded-0 mb-0 w-100`}
      role="alert"
    >
      <div className="d-flex justify-content-center align-items-center">
        <p className="mb-0">{text}</p>
        {showMoreButton && (
          <>
            <a href="#" className={`btn ${Styles.btn_primary} ml-4 btn-xs`}>
              know more
            </a>
            <button
              type="button"
              className={Styles.close}
              data-dismiss="alert"
              aria-label="Close"
            >
              <span className="h3" aria-hidden="true">
                &times;
              </span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
