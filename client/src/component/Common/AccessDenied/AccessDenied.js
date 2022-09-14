import './AccessDenied.scss';

const AccessDenied = () => (
  <div className="access-denied-wrapper">
    <div className="access-denied-body">
      <div className="access-denied-heading-wrapper">
        <h3 className="text-white access-denied-heading">403</h3>
        <h3 className="text-grey">Access Denied!</h3>
      </div>

      <h3 className="text-orange access-denied-detail medium-font-size">
        Please contact with admin.
      </h3>
    </div>
  </div>
);

export default AccessDenied;