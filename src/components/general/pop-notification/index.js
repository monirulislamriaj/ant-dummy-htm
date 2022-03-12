import Styles from "./pop-notification.module.scss";

export default function PopNotification({ text, showMoreButton }) {
  return (
    <div className={`${Styles.topbar_news} danger mb-0`}>
      <p className="m-0">
        <strong>🎟️ Lockdown! Looking For Online Tickets?</strong> Buy bus,
        launch & air tickets online from bdtickets.com. For any help{" "}
        <strong>call: 16460</strong>
      </p>
      <a href="#" className={`btn ${Styles.btn_primary} ms-4 btn-xs`}>
        know more
      </a>
      <button type="button" className={Styles.topbar_close} id="topbar-close">
        <span>&times;</span>
      </button>
    </div>
  );
}
