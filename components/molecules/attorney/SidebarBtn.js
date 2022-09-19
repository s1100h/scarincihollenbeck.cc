import fontStyles from 'styles/Fonts.module.css';

const SidebarBtn = ({
  setActiveTab, tabId, label, message, btnLabel, id,
}) => (
  <>
    <p className={`${fontStyles.ft12rem} mb-0`}>
      <strong>{label}</strong>
    </p>
    <p className="mt-2 mb-0">{message}</p>
    <button id={id} className="btn btn-danger my-3" onClick={() => setActiveTab(tabId)}>
      {btnLabel}
    </button>
  </>
);

export default SidebarBtn;
