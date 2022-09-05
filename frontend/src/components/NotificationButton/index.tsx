import notification_icon from '../../assets/img/notification-icon.svg';
import './styles.css';

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={notification_icon} alt="Notificar" />
        </div>
    );
};

export default NotificationButton;