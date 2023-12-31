import { useLocation, useNavigate } from 'react-router-dom';
import PaypalDonateForm from './PaypalDonateForm';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            😂
          </span>{"'s "}
          by the Coupon Champs!
        </h4>
        <PaypalDonateForm />
      </div>
    </footer>
  );
};

export default Footer;