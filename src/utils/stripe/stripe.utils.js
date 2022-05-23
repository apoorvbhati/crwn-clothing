import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
    // process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    'pk_test_51L0gKBSAIn39VlQdfN4d1xPKT2zAPnOqTrNAKm6SIMxAXTth6LFrL3sSFUlGE5yaoDdS2swTdeOryTl8YebOIni300UMCNvtqV'
);

